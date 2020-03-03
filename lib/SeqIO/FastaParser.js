"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFastaLines = parseFastaLines;
exports.parseFastaString = parseFastaString;
exports.parseFastaFile = parseFastaFile;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.regexp.constructor");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.match");

var _Exceptions = require("./_Exceptions.js");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _wrapRegExp(re, groups) {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };
  var _RegExp = _wrapNativeSuper(RegExp);
  var _super = RegExp.prototype;
  var _groups = new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = _RegExp.call(this, re, flags);
    _groups.set(_this, groups || _groups.get(re));
    return _this;
  }
  _inherits(BabelRegExp, _RegExp);
  BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result) result.groups = buildGroups(result, this);
    return result;
  };
  BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(
        this,
        str,
        substitution.replace(/\$<([^>]+)>/g, function(_, name) {
          return "$" + groups[name];
        })
      );
    } else if (typeof substitution === "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = [];
        args.push.apply(args, arguments);
        if (typeof args[args.length - 1] !== "object") {
          args.push(buildGroups(args, _this));
        }
        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }
  return _wrapRegExp.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function checkFastaFormat(str) {
  if (str[0] !== ">") {
    throw new _Exceptions.ParseError(
      "Fail to parse FASTA. A FASTA file should begin with '>'."
    );
  }
}

const fastaNcbiIdentifiers = {
  bbm: "GenInfobackbone moltype",
  bbs: "GenInfo backbone seqid",
  dbj: "DDBJ",
  emb: "EMBL",
  gb: "GenBank",
  gi: "GenInfo integrated database",
  gim: "GenInfo import ID",
  gnl: "General database reference",
  lcl: "Local"
};
const fastaNcbiIdentifiers1 = {
  lcl: /*#__PURE__*/ _wrapRegExp(/lcl\|([1-9a-z]+)/, {
    acc: 1
  }),
  bbs: /*#__PURE__*/ _wrapRegExp(/bbs\|([0-9]+)/, {
    acc: 1
  }),
  bbm: /*#__PURE__*/ _wrapRegExp(/bbm\|([0-9]+)/, {
    acc: 1
  }),
  gim: /*#__PURE__*/ _wrapRegExp(/gim\|([0-9]+)/, {
    acc: 1
  }),
  gb: /*#__PURE__*/ _wrapRegExp(/gb\|([\0-\{\}-\uFFFF]+)\|([1-9a-z]*)/, {
    acc: 1,
    loc: 2
  }),
  gi: /*#__PURE__*/ _wrapRegExp(/gi\|([0-9]+)/, {
    acc: 1
  })
};

function guessFastaTitleParser(title) {
  // const sep = (function guessSepartor() {
  //   return (title.match(/\|/) && "\\|") || (title.match(/ - /) && " - ");
  // })();
  // return title.split(new RegExp(sep));
  for (const i in fastaNcbiIdentifiers1) {
    const re = fastaNcbiIdentifiers1[i];
    title.match(re) && console.log(title.match(re));
  }
}

const r = [
  "gi|5524211|gb|AAD44166.1| cytochrome b [Elephas maximus maximus]",
  "MCHU - Calmodulin - Human, rabbit, bovine, rat, and chicken"
].map(guessFastaTitleParser);
console.log(r);

function* parseFastaLines(allLines) {
  let title = allLines[0];
  let seqArr = [];

  for (const line of allLines.slice(1)) {
    if (line[0] === ">") {
      yield [title, seqArr.join("").replace(/\s+/g, "")];
      title = line;
      seqArr = [];
    } else {
      seqArr.push(line);
    }
  }

  yield [title, seqArr.join("").replace(/\s+/g, "")];
  return;
}

function parseFastaString(fastaString) {
  const allLines = fastaString.split("\n");
  return parseFastaLines(allLines);
}

function parseFastaFile(fn) {
  return parseFastaString(_fs.default.readFileSync(fn));
} // function parseFasta(source, titleParser) {}
// export class Fasta {
//   // ! needs to allow for custom title parsers.
//   constructor(source) {
//     this.sequences = this.read(titleParser);
//   }
//   read(titleParser) {
//     console.log(`using ${titleParser}`);
//   }
//   write() {}
// }
