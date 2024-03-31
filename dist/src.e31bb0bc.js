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
})({"index.js":[function(require,module,exports) {
var choices = ['rock', 'paper', 'scissors'];

//Buttons
var rockBtn = document.querySelector('.rock');
var paperBtn = document.querySelector('.paper');
var scissorBtn = document.querySelector('.scissors');
var resetBtn = document.querySelector('.reset');

//Scores
var scoreBoard = document.querySelector('.scoreBoard');
var userScoreboard = document.querySelector('.userScore');
var compScoreBoard = document.querySelector('.computerScore');

//Results of each round
var main = document.querySelector('main');
var playersDiv = document.querySelector('.players');
var roundResults = document.createElement('div');
roundResults.classList.add('roundResults');

//display winner
var userCard = document.querySelector('.user');
var compCard = document.querySelector('.computer');
var winner = document.createElement('div');
winner.classList.add('winner');

//display computer choices
var btnContainer = document.querySelector('.gameButtons');
var compChoiceDiv = document.createElement('div');
compChoiceDiv.classList.add('computerChoice');
game();
function getComputerChoice() {
  var randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function playRound(playerSelection, computerSelection) {
  //check for a tie
  if (playerSelection === computerSelection) {
    return 'its a tie';
  }

  //player choices rock
  if (playerSelection === choices[0]) {
    if (computerSelection === choices[1]) {
      return 'You Lose! Paper beats rock.';
    } else if (computerSelection === choices[2]) {
      return 'You Win! Rock beats scissors.';
    }
  }

  //player chooses paper
  if (playerSelection === choices[1]) {
    if (computerSelection === choices[2]) {
      return 'You Lose! Scissors beats paper.';
    } else if (computerSelection === choices[0]) {
      return 'You Win! Paper beats rock.';
    }
  }

  //player chooses scissors
  if (playerSelection === choices[2]) {
    if (computerSelection === choices[0]) {
      return 'You Lose! Rock beats scissors.';
    } else if (computerSelection === choices[1]) {
      return 'You Win! Scissors beats paper.';
    }
  }
}
function game() {
  var gamesPlayed = 0;
  var playerScore = 0;
  var compScore = 0;

  // Add event listeners for each button
  rockBtn.addEventListener('click', function () {
    var user = choices[0]; // Player selects rock
    var computer = getComputerChoice();
    var round = playRound(user, computer);
    compChoiceDiv.textContent = 'Computer choice: ' + computer;
    if (compChoiceDiv.textContent.trim()) {
      main.insertBefore(compChoiceDiv, btnContainer);
    }
    roundResults.textContent = round;
    if (roundResults.textContent.trim()) {
      //append div only if there is text content. otherwise its hidden
      main.insertBefore(roundResults, playersDiv);
    }
    // Update scores and display messages based on round outcome
    if (round.slice(0, 8) === 'You Win!') {
      playerScore++; // Update score in game function for player win
    } else if (round.slice(0, 9) == 'You Lose!') {
      // Not a tie and not a player win, computer wins
      compScore++; // Update score in game function for computer win
    }
    userScoreboard.textContent = 'Score: ' + playerScore;
    compScoreBoard.textContent = 'Score: ' + compScore;
    gamesPlayed++;
    scoreBoard.textContent = 'Games played: ' + gamesPlayed;
    checkWinner(playerScore, compScore);
  });
  paperBtn.addEventListener('click', function () {
    // Similar logic for paper button click
    var user = choices[1];
    var computer = getComputerChoice();
    var round = playRound(user, computer);
    compChoiceDiv.textContent = 'Computer choice: ' + computer;
    if (compChoiceDiv.textContent.trim()) {
      main.insertBefore(compChoiceDiv, btnContainer);
    }
    roundResults.textContent = round;
    if (roundResults.textContent.trim()) {
      main.insertBefore(roundResults, playersDiv);
    }
    if (round.slice(0, 8) === 'You Win!') {
      playerScore++;
    } else if (round.slice(0, 9) == 'You Lose!') {
      compScore++;
    }
    userScoreboard.textContent = 'Score: ' + playerScore;
    compScoreBoard.textContent = 'Score: ' + compScore;
    gamesPlayed++;
    scoreBoard.textContent = 'Games played: ' + gamesPlayed;
    checkWinner(playerScore, compScore);
  });
  scissorBtn.addEventListener('click', function () {
    // Similar logic for scissor button click
    var user = choices[2];
    var computer = getComputerChoice();
    var round = playRound(user, computer);
    compChoiceDiv.textContent = 'Computer choice: ' + computer;
    if (compChoiceDiv.textContent.trim()) {
      main.insertBefore(compChoiceDiv, btnContainer);
    }
    roundResults.textContent = round;
    if (roundResults.textContent.trim()) {
      main.insertBefore(roundResults, playersDiv);
    }
    if (round.slice(0, 8) === 'You Win!') {
      playerScore++;
    } else if (round.slice(0, 9) == 'You Lose!') {
      compScore++;
    }
    userScoreboard.textContent = 'Score: ' + playerScore;
    compScoreBoard.textContent = 'Score: ' + compScore;
    gamesPlayed++;
    scoreBoard.textContent = 'Games played: ' + gamesPlayed;
    checkWinner(playerScore, compScore);
  });

  // Function to update scores and display messages
  function updateScore(round, playerScore, compScore) {
    if (round === 'It\'s a tie') {
      console.log("It's a tie. Play again.");
    } else if (round.slice(0, 8) === 'You Win!') {
      playerScore++;
      console.log('Player Score: ' + playerScore + ' - Comp Score: ' + compScore);
    } else {
      compScore++;
      console.log('Player Score: ' + playerScore + ' - Comp Score: ' + compScore);
    }
  }

  // Function to check for winner and end game
  function checkWinner(playerScore, compScore) {
    if (playerScore === 5) {
      winner.textContent = 'Player Wins!';
      userCard.appendChild(winner);
      // You can optionally reset the game here
    } else if (compScore === 5) {
      winner.textContent = 'Computer Wins!';
      compCard.appendChild(winner);
      // You can optionally reset the game here
    }
  }
  resetBtn.addEventListener('click', function () {
    rockBtn.disabled = true; // Disable buttons
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    playerScore = 0;
    compScore = 0;
    gamesPlayed = 0;
    scoreBoard.textContent = 'Game Reset! Scores: 0 - 0';
    userScoreboard.textContent = 'Score: ' + playerScore;
    compScoreBoard.textContent = 'Score: ' + compScore;
    main.removeChild(roundResults);
    main.removeChild(compChoiceDiv);

    //remove winner banner/div from player card on reset
    var winnerDivs = [userCard, compCard]; // Array of both divs to check

    for (var i = 0; i < winnerDivs.length; i++) {
      var currentDiv = winnerDivs[i];
      if (currentDiv.contains(winner)) {
        // Check if winner element exists in current div
        currentDiv.removeChild(winner);
        break; // Exit the loop after removing from the first matching div
      }
    }

    // After a short delay (optional)
    setTimeout(function () {
      rockBtn.disabled = false; // Re-enable buttons
      paperBtn.disabled = false;
      scissorBtn.disabled = false;
    }, 1000); // Delay in milliseconds (adjust as needed)
  });
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58305" + '/');
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
      });

      // Enable HMR for CSS by default.
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map