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
})({"js/script.js":[function(require,module,exports) {
// ------------------------------------Mobile headermenu 
var mobil_menu = document.querySelector(".mobil_menu");
var mobilBg = document.querySelector(".mobil_menu_bg");
var side_bar = document.querySelector(".side_bar");
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  mobil_menu.style.visibility = "visible";
  side_bar.style.left = "0";
  mobilBg.style.opacity = "1";
});
mobilBg.addEventListener("click", function () {
  mobil_menu.style.visibility = "hidden";
  side_bar.style.left = "-320px";
  mobilBg.style.opacity = "0";
});

// -----------------------------------------headerType

var navList = document.querySelectorAll(" nav .menu>li");
var Mobile_heder = document.querySelector('.Mobile_heder');
navList.forEach(function (navItem) {
  navItem.addEventListener("mouseover", function () {
    this.querySelector(".sub_menu").style.height = "40px";
    this.querySelector(".sub_menu").style.paddingTop = "7px";
    document.querySelector(".header_wrap").classList.add("on");
  });
});
navList.forEach(function (navItem) {
  navItem.addEventListener("mouseleave", function () {
    this.querySelector(".sub_menu").style.height = "0px";
    this.querySelector(".sub_menu").style.paddingTop = "0px";
    document.querySelector(".header_wrap").classList.remove("on");
  });
});
window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY || window.pageYOffset;

  // 원하는 스크롤 위치 (예: 200px 이상)
  if (scrollPosition > 200) {
    Mobile_heder.style.height = "70px";
  } else {
    Mobile_heder.style.height = "0px";
  }
});

//   ---------------------------------------------slider_wrap
var swiper = new Swiper('.swiper', {
  centeredSlides: true,
  slidesPerView: '1',
  slideToClickedSlide: true,
  effect: 'coverflow',
  spaceBetween: 0,
  loop: true,
  direction: 'horizontal',
  autoplay: {
    delay: 2500,
    desableOnInteraction: false
  },
  speed: 1.2e3,
  freemode: true,
  coverflowEffect: {
    slideShadows: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    900: {
      spaceBetween: 0,
      coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        stretch: 300,
        depth: 350
      },
      slidesPerView: '1'
    },
    1130: {
      spaceBetween: 300,
      coverflowEffect: {
        rotate: 0,
        slideShadows: false,
        stretch: 210,
        depth: 350
      },
      slidesPerView: 'auto'
    }
  }
});

// ===============================imagetextType
var dinosaur = document.querySelector(".dinosaur");
var flash01 = document.querySelector(".flash01");
var flash02 = document.querySelector(".flash02");
var talk01 = document.querySelector(".talk01");
var talk02 = document.querySelector(".talk02");
var talk03 = document.querySelector(".talk03");
var talk04 = document.querySelector(".talk04");
var talk05 = document.querySelector(".talk05");
var hart01 = document.querySelector(".hart01");
var hart02 = document.querySelector(".hart02");
var hart03 = document.querySelector(".hart03");
gsap.to(dinosaur, {
  delay: 1,
  duration: 0.8,
  opacity: 1,
  scrollTrigger: {
    trigger: '.img1',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});
gsap.to(flash01, {
  delay: 0.2,
  duration: 0.3,
  scale: 1.5,
  ease: "power1.in",
  scrollTrigger: {
    trigger: '.img1',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  },
  onComplete: function onComplete() {
    gsap.to(flash01, {
      duration: 0.1,
      scale: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: '.img1',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false
      },
      onComplete: function onComplete() {
        gsap.to(flash01, {
          duration: 0.3,
          scale: 1.5,
          ease: "power1.in",
          scrollTrigger: {
            trigger: '.img1',
            start: "top 70%",
            end: "bottom 40%",
            toggleActions: "play pause reverse pause",
            markers: false
          },
          onComplete: function onComplete() {
            gsap.to(flash01, {
              duration: 0.1,
              scale: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: '.img1',
                start: "top 70%",
                end: "bottom 40%",
                toggleActions: "play pause reverse pause",
                markers: false
              }
            });
          }
        });
      }
    });
  }
});
gsap.to(flash02, {
  duration: 0.3,
  scale: 1,
  ease: "power1.in",
  scrollTrigger: {
    trigger: '.img1',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  },
  onComplete: function onComplete() {
    gsap.to(flash02, {
      duration: 0.1,
      scale: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: '.img1',
        start: "top 70%",
        end: "bottom 40%",
        toggleActions: "play pause reverse pause",
        markers: false
      },
      onComplete: function onComplete() {
        gsap.to(flash02, {
          duration: 0.3,
          scale: 1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: '.img1',
            start: "top 70%",
            end: "bottom 40%",
            toggleActions: "play pause reverse pause",
            markers: false
          },
          onComplete: function onComplete() {
            gsap.to(flash02, {
              duration: 0.1,
              scale: 0.9,
              ease: "power1.out",
              scrollTrigger: {
                trigger: '.img1',
                start: "top 70%",
                end: "bottom 40%",
                toggleActions: "play pause reverse pause",
                markers: false
              }
            });
          }
        });
      }
    });
  }
});
gsap.to(talk01, {
  scale: 1,
  duration: 0.5,
  ease: "back.inOut(1.7)",
  scrollTrigger: {
    trigger: '.img2',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});
gsap.to(talk02, {
  delay: 0.3,
  scale: 1,
  duration: 0.5,
  ease: "back.inOut(1.7)",
  scrollTrigger: {
    trigger: '.img2',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});
gsap.to(talk03, {
  delay: 0.6,
  scale: 1,
  duration: 0.5,
  ease: "back.inOut(1.7)",
  scrollTrigger: {
    trigger: '.img2',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});
gsap.to(talk04, {
  delay: 0.9,
  scale: 1,
  duration: 0.5,
  ease: "back.inOut(1.7)",
  scrollTrigger: {
    trigger: '.img2',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});
gsap.to(talk05, {
  delay: 1.2,
  scale: 1,
  duration: 0.5,
  ease: "back.inOut(1.7)",
  scrollTrigger: {
    trigger: '.img2',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});
gsap.to(hart01, {
  opacity: 1,
  x: -30,
  y: -20,
  ease: "power2.out",
  duration: 0.5,
  scrollTrigger: {
    trigger: '.img3',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});
gsap.to(hart02, {
  delay: 0.4,
  opacity: 1,
  x: 30,
  y: -20,
  ease: "power2.out",
  duration: 0.5,
  scrollTrigger: {
    trigger: '.img3',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});
gsap.to(hart03, {
  delay: 0.7,
  opacity: 1,
  x: -5,
  y: -10,
  ease: "power2.out",
  duration: 0.5,
  scrollTrigger: {
    trigger: '.img3',
    start: "top 70%",
    end: "bottom 40%",
    toggleActions: "play pause reverse pause",
    markers: false
  }
});

// ================================imgDesaType
var pelletImg = document.querySelector(".imgDesa_inner .pellet_img");
var click01 = document.querySelector(".imgDesa_inner .click01");
var click02 = document.querySelector(".imgDesa_inner .click02");
var click03 = document.querySelector(".imgDesa_inner .click03");
var line1 = document.querySelector(".imgDesa_inner .line1");
var line2 = document.querySelector(".imgDesa_inner .line2");
var line3 = document.querySelector(".imgDesa_inner .line3");
var fur = document.querySelector(".imgDesa_inner .fur");
var heartBeat = document.querySelector(".imgDesa_inner .heartBeat");
var pellet = document.querySelector(".imgDesa_inner .pellet");
var imgDesa_box = document.querySelector(".imgDesa_box");
click01.addEventListener("click", function () {
  gsap.to(line1, {
    scaleX: 3,
    rotate: 60,
    duration: 0.4
  });
  gsap.to(line2, {
    scaleX: 0,
    rotate: 140,
    duration: 0.4
  });
  gsap.to(line3, {
    scaleX: 0,
    rotate: 135,
    duration: 0.4
  });
  gsap.to(fur, {
    opacity: 1
  });
  gsap.to(heartBeat, {
    opacity: 0
  });
  gsap.to(pellet, {
    opacity: 0
  });
});
click02.addEventListener("click", function () {
  gsap.to(line2, {
    scaleX: 3,
    rotate: 140,
    duration: 0.4
  });
  gsap.to(line1, {
    scaleX: 0,
    rotate: 60,
    duration: 0.4
  });
  gsap.to(line3, {
    scaleX: 0,
    rotate: 135,
    duration: 0.4
  });
  gsap.to(heartBeat, {
    opacity: 1
  });
  gsap.to(fur, {
    opacity: 0
  });
  gsap.to(pellet, {
    opacity: 0
  });
});
click03.addEventListener("click", function () {
  gsap.to(line3, {
    scaleX: 3,
    rotate: 135,
    duration: 0.4
  });
  gsap.to(line1, {
    scaleX: 0,
    rotate: 60,
    duration: 0.4
  });
  gsap.to(line2, {
    scaleX: 0,
    rotate: 140,
    duration: 0.4
  });
  gsap.to(pellet, {
    opacity: 1
  });
  gsap.to(heartBeat, {
    opacity: 0
  });
  gsap.to(fur, {
    opacity: 0
  });
});
gsap.to(pelletImg, {
  y: -20,
  ease: "power1.inOut",
  duration: 1,
  repeat: -1,
  yoyo: true
});

// ==================cardBennerType
var tab = document.querySelectorAll(".tap_title");
var cardBenner = document.querySelectorAll(".box_container");
var tabCont = document.querySelectorAll(".cardBenner_con");
var clothes = document.querySelector("#clothes");
var doll = document.querySelector("#doll");
var etc = document.querySelector("#etc");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var tap1 = document.querySelector(".tap1");
var tap2 = document.querySelector(".tap2");
var tap3 = document.querySelector(".tap3");
tap1.addEventListener("click", function (e) {
  e.preventDefault();
  left.style.display = "none";
  right.style.display = "none";
  cardBenner.forEach(function (benner) {
    benner.style.backgroundColor = "var(--yellow)";
  });
});
tap2.addEventListener("click", function (e) {
  e.preventDefault();
  left.style.display = "block";
  right.style.display = "block";
  cardBenner.forEach(function (benner) {
    benner.style.backgroundColor = "var(--light_green)";
  });
});
tap3.addEventListener("click", function (e) {
  e.preventDefault();
  left.style.display = "block";
  right.style.display = "block";
  cardBenner.forEach(function (benner) {
    benner.style.backgroundColor = "var(--blue)";
  });
});
tab.forEach(function (tab, index) {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    tabCont.forEach(function (cont) {
      return cont.style.visibility = 'hidden';
    });
    tabCont.forEach(function (cont) {
      return cont.style.opacity = '0';
    });
    tabCont[index].style.visibility = 'visible';
    tabCont[index].style.opacity = '1';
  });
});
function getResponsiveLeftValues() {
  var screenWidth = window.innerWidth;
  var clothesLeft, dollLeft, etcLeft;
  if (screenWidth < 700) {
    var clothesMoveCount = 0;
    var dollMoveCount = 0;
    var etcMoveCount = 0;
    var clothesmaxMoves = 2;
    var maxMoves = 4;
    var etcmaxMoves = 3;
    right.addEventListener("click", function () {
      if (clothesMoveCount < clothesmaxMoves) {
        clothesMoveCount++;
        clothes.style.left = "".concat(-60 * clothesMoveCount, "vw");
      } else {
        clothes.style.left = "0vw";
        clothesMoveCount = 0;
      }
      if (dollMoveCount < maxMoves) {
        dollMoveCount++;
        doll.style.left = "".concat(-60 * dollMoveCount, "vw");
      } else {
        doll.style.left = "0vw";
        dollMoveCount = 0;
      }
      if (etcMoveCount < etcmaxMoves) {
        etcMoveCount++;
        etc.style.left = "".concat(-60 * etcMoveCount, "vw");
      } else {
        etc.style.left = "0vw";
        etcMoveCount = 0;
      }
    });
    left.addEventListener("click", function () {
      if (dollMoveCount > 0) {
        dollMoveCount--;
        doll.style.left = "".concat(-61 * dollMoveCount, "vw");
      }
    });
    tap1.addEventListener("click", function (e) {
      e.preventDefault();
      left.style.display = "block";
      right.style.display = "block";
    });
    left.style.display = "block";
    right.style.display = "block";
  } else if (screenWidth < 1180) {
    clothesLeft = "-41.5vw";
    var dollLeftPosition = 0;
    right.addEventListener("click", function () {
      if (dollLeftPosition === -0) {
        dollLeftPosition = -82;
      } else if (dollLeftPosition === -82) {
        dollLeftPosition = -125;
      } else {
        dollLeftPosition = -0;
      }
      doll.style.left = "".concat(dollLeftPosition, "vw");
    });
    etcLeft = "-82.4vw";
    left.style.display = "block";
    right.style.display = "block";
    tap1.addEventListener("click", function (e) {
      e.preventDefault();
      left.style.display = "block";
      right.style.display = "block";
    });
  } else if (screenWidth < 1400) {
    dollLeft = "-55vw";
    etcLeft = "-28vw";
    tap1.addEventListener("click", function (e) {
      e.preventDefault();
      left.style.display = "none";
      right.style.display = "none";
    });
  } else {
    dollLeft = "-785px";
    etcLeft = "-392px";
    left.style.display = "none";
    right.style.display = "none";
  }
  return {
    clothesLeft: clothesLeft,
    dollLeft: dollLeft,
    etcLeft: etcLeft
  };
}
function updatePositions() {
  var _getResponsiveLeftVal = getResponsiveLeftValues(),
    clothesLeft = _getResponsiveLeftVal.clothesLeft,
    dollLeft = _getResponsiveLeftVal.dollLeft,
    etcLeft = _getResponsiveLeftVal.etcLeft;
  right.addEventListener("click", function () {
    clothes.style.left = clothesLeft;
    doll.style.left = dollLeft;
    etc.style.left = etcLeft;
    this.style.filter = "grayscale(100%)";
    left.style.filter = "grayscale(0%)";
  });
  left.addEventListener("click", function () {
    clothes.style.left = "0px";
    doll.style.left = "0px";
    etc.style.left = "0px";
    this.style.filter = "grayscale(100%)";
    right.style.filter = "grayscale(0%)";
  });
}
updatePositions();
window.addEventListener('resize', updatePositions);

// --------------------------ScrollSmoother
var lenis = new Lenis();
lenis.on('scroll', function (e) {
  console.log(e);
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// -----------------------------------asideBox
gsap.registerPlugin(ScrollTrigger);
var aside = document.querySelector('.aside_menu');
ScrollTrigger.create({
  trigger: aside,
  start: 'top top',
  end: '+=3000',
  // 스크롤을 3000px 만큼 더 내려가는 것을 허용
  onUpdate: function onUpdate(self) {
    if (self.scroll() >= 2900) {
      gsap.to(aside, {
        opacity: 0,
        duration: 0.51
      }); // 1초 동안 사라짐
    } else {
      gsap.to(aside, {
        opacity: 1,
        duration: 0.5
      }); // 다시 보이게
    }
  }
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62361" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/script.js"], null)
//# sourceMappingURL=/script.d573be0b.js.map