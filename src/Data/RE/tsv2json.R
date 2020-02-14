setwd('/Users/tianyishi/Documents/GitHub/biojs/src/Data/RE')
library(tidyverse)
library(jsonlite)

raw <- read_tsv('re.tsv', skip = 10, 
         col_names = c('enzymeName', 'prototype', 
                       'siteCleavage', 'methylation', 
                       'commercial', 'ref'), 
         col_types = 'cccccc') %>% 
  select(-methylation, -ref) %>% 
  filter(!str_detect(siteCleavage, '\\(')) # remove asymmetric enzyme; may implement in future

enzymeAndPrototype <- raw %>% 
  select(enzymeName, prototype, commercial) %>% 
  filter(!is.na(commercial)) %>% 
  mutate(prototype=ifelse(is.na(prototype), enzymeName, prototype))

prototype2site <- raw %>% 
  filter(is.na(prototype)) %>% 
  mutate(site = str_remove(siteCleavage, '\\^'),
         position = str_locate(siteCleavage, '\\^')[,1]-1,
         prototype=enzymeName) %>% 
  select(prototype, site, position) %>% 
  # regex
  mutate(site = 
           str_replace_all(site, 'W', '[AT]') %>% 
           str_replace_all(site, 'S', '[CG]') %>% 
           str_replace_all(site, 'M', '[AC]') %>% 
           str_replace_all(site, 'K', '[GT]') %>% 
           str_replace_all(site, 'R', '[AG]') %>% 
           str_replace_all(site, 'Y', '[CT]') %>% 
           str_replace_all(site, 'B', '[^A]') %>% 
           str_replace_all(site, 'D', '[^C]') %>% 
           str_replace_all(site, 'H', '[^G]') %>% 
           str_replace_all(site, 'V', '[^T]') %>% 
           str_replace_all(site, 'N', '.') %>%)



tidy <- left_join(enzymeAndPrototype, prototype2site)
nested <- tidy %>% 
  group_by(site) %>% 
  nest() %>% 
  rename(enzymes=data)

lst <- nested[['enzymes']]
names(lst) <- nested[['site']]


jsonlite::write_json(lst, 're.json')
