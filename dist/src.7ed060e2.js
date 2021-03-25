// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../src/index.js":[function(require,module,exports) {
"use strict";

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

PlayerSearch();
InputOfPlayerData();
FindingTheBestPlayers();

function PlayerSearch() {
  var string = JSON.parse("[\r\n    {\r\n        \"login\": \"Masseru\",\r\n        \"score\": \"4789\",\r\n        \"date\": \"05.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Nar\",\r\n        \"score\": \"9597\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Yabryr\",\r\n        \"score\": \"6710\",\r\n        \"date\": \"23.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Tat\",\r\n        \"score\": \"3041\",\r\n        \"date\": \"23.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Uamaynnd\",\r\n        \"score\": \"3893\",\r\n        \"date\": \"29.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Destafi\",\r\n        \"score\": \"7376\",\r\n        \"date\": \"16.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Qumindor\",\r\n        \"score\": \"3899\",\r\n        \"date\": \"26.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Saye\",\r\n        \"score\": \"1493\",\r\n        \"date\": \"01.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Zalaneli\",\r\n        \"score\": \"8899\",\r\n        \"date\": \"04.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Usulileri\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"18.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Faleriena\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Usulileri\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"17.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Zuynes\",\r\n        \"score\": \"7068\",\r\n        \"date\": \"08.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Bddandert\",\r\n        \"score\": \"8526\",\r\n        \"date\": \"14.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Lis\",\r\n        \"score\": \"5430\",\r\n        \"date\": \"19.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Lafonel\",\r\n        \"score\": \"2685\",\r\n        \"date\": \"29.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Xtiara\",\r\n        \"score\": \"5206\",\r\n        \"date\": \"10.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Udyl\",\r\n        \"score\": \"6013\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Udyl\",\r\n        \"score\": \"900\",\r\n        \"date\": \"16.03.2021\"\r\n    }\r\n]");
  var input = document.getElementById('sub1');
  input.addEventListener("click", function () {
    var inplogin = document.forms['form1'].elements['Ввод-логина'].value;
    string.sort(scoreQQ);
    var result = [];

    for (var i = 0; i < string.length; i++) {
      if (inplogin == string[i].login) {
        var rank = i + 1;
        result.push('Логин: ' + string[i].login + ' ' + 'Очки: ' + string[i].score + ' ' + 'Дата: ' + string[i].date + ' ' + 'Место: ' + rank);
      }
    } //console.log(result);


    alert(result);
  });
}

function InputOfPlayerData() {
  var string = JSON.parse("[\r\n    {\r\n        \"login\": \"Masseru\",\r\n        \"score\": \"4789\",\r\n        \"date\": \"05.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Nar\",\r\n        \"score\": \"9597\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Yabryr\",\r\n        \"score\": \"6710\",\r\n        \"date\": \"23.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Tat\",\r\n        \"score\": \"3041\",\r\n        \"date\": \"23.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Uamaynnd\",\r\n        \"score\": \"3893\",\r\n        \"date\": \"29.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Destafi\",\r\n        \"score\": \"7376\",\r\n        \"date\": \"16.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Qumindor\",\r\n        \"score\": \"3899\",\r\n        \"date\": \"26.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Saye\",\r\n        \"score\": \"1493\",\r\n        \"date\": \"01.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Zalaneli\",\r\n        \"score\": \"8899\",\r\n        \"date\": \"04.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Usulileri\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"18.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Faleriena\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Usulileri\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"17.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Zuynes\",\r\n        \"score\": \"7068\",\r\n        \"date\": \"08.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Bddandert\",\r\n        \"score\": \"8526\",\r\n        \"date\": \"14.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Lis\",\r\n        \"score\": \"5430\",\r\n        \"date\": \"19.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Lafonel\",\r\n        \"score\": \"2685\",\r\n        \"date\": \"29.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Xtiara\",\r\n        \"score\": \"5206\",\r\n        \"date\": \"10.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Udyl\",\r\n        \"score\": \"6013\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Udyl\",\r\n        \"score\": \"900\",\r\n        \"date\": \"16.03.2021\"\r\n    }\r\n]");
  var input = document.getElementById('sub2'); //console.log(string);

  input.addEventListener("click", function () {
    var inplogin = document.forms['form2'].elements['Ввод-логина'].value,
        inpscore = document.forms['form2'].elements['Ввод-очков'].value,
        date = new Date(),
        dd = String(date.getDate()).padStart(2, '0'),
        mm = String(date.getMonth()).padStart(2, '0'),
        yyyy = date.getFullYear();
    date = dd + '.' + mm + '.' + yyyy;
    var inpData = [{
      login: '',
      score: '',
      date: ''
    }];
    inpData.login = inplogin;
    inpData.score = inpscore;
    inpData.date = date;
    string.push(inpData);
    string.sort(scoreQQ);
    string = string.splice(0, 10);
    console.log(string);
    var login = [],
        score = [],
        date1 = [],
        rank = [];

    for (var i = 0; i < string.length; i++) {
      login.push(string[i].login);
      score.push(string[i].score);
      date1.push(string[i].date);
      rank.push(i + 1);
    }

    document.getElementById("login").innerHTML = login.join('<br />');
    document.getElementById("score").innerHTML = score.join('<br />');
    document.getElementById("date").innerHTML = date1.join('<br />');
    document.getElementById("rank").innerHTML = rank.join('<br />');
  });
}

function FindingTheBestPlayers() {
  var string = JSON.parse("[\r\n    {\r\n        \"login\": \"Masseru\",\r\n        \"score\": \"4789\",\r\n        \"date\": \"05.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Nar\",\r\n        \"score\": \"9597\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Yabryr\",\r\n        \"score\": \"6710\",\r\n        \"date\": \"23.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Tat\",\r\n        \"score\": \"3041\",\r\n        \"date\": \"23.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Uamaynnd\",\r\n        \"score\": \"3893\",\r\n        \"date\": \"29.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Destafi\",\r\n        \"score\": \"7376\",\r\n        \"date\": \"16.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Qumindor\",\r\n        \"score\": \"3899\",\r\n        \"date\": \"26.02.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Saye\",\r\n        \"score\": \"1493\",\r\n        \"date\": \"01.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Zalaneli\",\r\n        \"score\": \"8899\",\r\n        \"date\": \"04.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Usulileri\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"18.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Faleriena\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Usulileri\",\r\n        \"score\": \"8093\",\r\n        \"date\": \"17.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Zuynes\",\r\n        \"score\": \"7068\",\r\n        \"date\": \"08.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Bddandert\",\r\n        \"score\": \"8526\",\r\n        \"date\": \"14.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Lis\",\r\n        \"score\": \"5430\",\r\n        \"date\": \"19.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Lafonel\",\r\n        \"score\": \"2685\",\r\n        \"date\": \"29.04.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Xtiara\",\r\n        \"score\": \"5206\",\r\n        \"date\": \"10.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Udyl\",\r\n        \"score\": \"6013\",\r\n        \"date\": \"16.03.2021\"\r\n    },\r\n    {\r\n        \"login\": \"Udyl\",\r\n        \"score\": \"900\",\r\n        \"date\": \"16.03.2021\"\r\n    }\r\n]");
  string.sort(scoreQQ);
  string = string.splice(0, 10);
  var login = [],
      score = [],
      date = [],
      rank = [];

  for (var i = 0; i < string.length; i++) {
    login.push(string[i].login);
    score.push(string[i].score);
    date.push(string[i].date);
    rank.push(i + 1);
  }

  document.getElementById("login").innerHTML = login.join('<br />');
  document.getElementById("score").innerHTML = score.join('<br />');
  document.getElementById("date").innerHTML = date.join('<br />');
  document.getElementById("rank").innerHTML = rank.join('<br />');
}

function scoreQQ(a, b) {
  a.score = Number(a.score);
  b.score = Number(b.score);

  if (a.score > b.score) {
    return -1;
  }

  if (a.score == b.score) {
    if (a.date < b.date) {
      return 1;
    }

    if (a.date == b.date) {
      return 0;
    }

    if (a.date > b.date) {
      return -1;
    }

    return 0;
  }

  if (a.score < b.score) {
    return 1;
  }
}
},{"fs":"../node_modules/parcel-bundler/src/builtins/_empty.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59074" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../src/index.js"], null)
//# sourceMappingURL=/src.7ed060e2.js.map