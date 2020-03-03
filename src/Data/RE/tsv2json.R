setwd('/Users/tianyishi/Documents/GitHub/biojs/src/Data/RE')
library(tidyverse)
library(jsonlite)

raw <- read_tsv('re.tsv', skip = 10, 
         col_names = c('enzymeName', 'prototype', 
                       'cleavage', 'methylation', 
                       'commercial', 'ref'), 
         col_types = 'cccccc') %>% 
  select(-methylation, -ref) %>% 
  mutate(site = str_remove_all(cleavage, '[^A-Z]'),
    pattern = 
           str_replace_all(site, 'W', '[AT]') %>% 
           str_replace_all('S', '[CG]') %>% 
           str_replace_all('M', '[AC]') %>% 
           str_replace_all('K', '[GT]') %>% 
           str_replace_all('R', '[AG]') %>% 
           str_replace_all('Y', '[CT]') %>% 
           str_replace_all('B', '[^A]') %>% 
           str_replace_all('D', '[^C]') %>% 
           str_replace_all('H', '[^G]') %>% 
           str_replace_all('V', '[^T]') %>% 
           str_replace_all('N', '.')
         )

enzymeAndPrototype <- raw %>% 
  select(enzymeName, prototype, commercial) %>% 
  filter(!is.na(commercial)) %>% 
  mutate(prototype=ifelse(is.na(prototype), enzymeName, prototype))


# unknown -------------------------------------------------------------------

raw_unknown <- raw %>% 
  filter(!str_detect(cleavage, '\\^'),
         !str_detect(cleavage, '\\('))

prototype2site_unknown <- raw_unknown %>% 
  filter(is.na(prototype)) %>% 
  mutate(site = cleavage,
         start = NA,
         end = NA,
         prototype=enzymeName) %>% 
  select(prototype, pattern, start, end) 

# offsite --------------------------------------------------------------

raw_offsite <- raw %>% 
  filter(str_count(cleavage, '\\(') == 1)

# (8/14)CCANNNNNNGT(15/9); RCSRC(-3/-2); TACGAC(20/18)

prototype2site_offsite <- raw_offsite %>% 
  filter(is.na(prototype)) %>% 
  mutate(site = str_remove(cleavage, '\\(.+\\)'),
         start = parse_integer(str_match(cleavage, '(-*\\d+)/')[,2]), 
         end = parse_integer(str_match(cleavage, '/(-*\\d+)')[,2]),
         prototype = enzymeName,
         overhang = ifelse(start == end, 'blunt', ifelse(start > end, '5', '3'))) %>% 
  select(prototype, pattern, start, end, overhang)

# offsite_twice --------------------------------------------------------------

raw_offsite <- raw %>% 
  filter(str_count(cleavage, '\\(') == 2)

# (8/14)CCANNNNNNGT(15/9); RCSRC(-3/-2); TACGAC(20/18)

prototype2site_offsite <- raw_offsite %>% 
  filter(is.na(prototype))
  

# common ------------------------------------------------------------------

raw_common <- raw %>% 
  filter(str_detect(cleavage, '\\^'), # with known cleavage site
        !str_detect(cleavage, '\\(')) # remove asymmetric enzyme; may implement in future

prototype2site_common <- raw_common %>% 
  filter(is.na(prototype)) %>% 
  mutate(site = str_remove(cleavage, '\\^'),
         position = str_locate(cleavage, '\\^')[,1]-1,
         len = str_length(site),
         start = position,
         end = len - position,
         prototype=enzymeName,
         overhang = ifelse(start == end, 'blunt', ifelse(start > end, '5', '3'))) %>% 
  select(prototype, pattern, start, end, overhang)


# All ---------------------------------------------------------------------

prototype2site <- bind_rows(prototype2site_offsite, prototype2site_common)

tidy <- inner_join(enzymeAndPrototype, prototype2site)

nested <- tidy %>% 
  group_by(pattern) %>% 
  nest() %>% 
  rename(enzymes=data)

lst <- nested[['enzymes']]
names(lst) <- nested[['pattern']]

jsonlite::write_json(lst, 're.json')

# per enzyme --------------------------------------------------------------

nested_by_enzyme <- tidy %>% 
  group_by(enzymeName) %>% 
  nest()

lst <- nested_by_enzyme[['data']]
names(lst) <- nested[['enzymeName']]

lst
