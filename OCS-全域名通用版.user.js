// ==UserScript==
// @name       				OCS 缃戣鍔╂墜 - 鍏ㄥ煙鍚嶉€氱敤鐗堬紙鑺傜渷棰樺簱娆℃暟锟?// @version    				4.12.14
// @description				OCS(online-course-script) 缃戣鍔╂墜锛屽畼锟?https://docs.ocsjs.com 锛屼笓娉ㄤ簬甯姪澶у鐢熶粠缃戣涓噴鏀惧嚭锟?璁╄嚜宸辩殑鏃堕棿鎶婃彙鍦ㄨ嚜宸辩殑鎵嬩腑锛屾嫢鏈変汉鎬у寲鐨勬搷浣滈〉闈紝娴佺晠鐨勬楠ゆ彁绀猴紝鏀寔  銆愯秴鏄熷涔犻€氾拷?銆愮煡鍒版櫤鎱ф爲锟?銆愯亴鏁欎簯锟?銆愭櫤鎱ц亴鏁欙拷?銆愪腑鍥藉ぇ瀛OOC锟?绛夌綉璇剧殑瀛︿範锛屼綔涓氥€傚叿浣撶殑鍔熻兘璇锋煡鐪嬭剼鏈偓娴獥涓殑鏁欑▼椤甸潰銆傚熀锟?[enncy] 淇敼锟?.鏈夊涓搴撴椂锛屾寜鐓ф彁渚涚殑棰樺簱椤哄簭杩涜棰樺簱鎼滅储锛屽a棰樺簱鎼滅储鍒扮瓟妗堝悗b棰樺簱涓嶄娇鐢紝閬垮厤b棰樺簱娆℃暟娴垂锟?.褰揳棰樺簱鎻愮ず鈥滄棰樻湭瀹屾垚锛屽彲鑳芥槸娌℃湁鍖归厤鐨勯€夐」銆傗€濇椂锛岃皟鐢╞棰樺簱銆傞伒寰師MIT璁稿彲
// @author     				enncy,flupke
// @license    				MIT
// @match      				*://*.zhihuishu.com/*
// @match      				*://*.hike-teaching-center.polymas.com/*
// @match      				*://*.chaoxing.com/*
// @match      				*://*.edu.cn/*
// @match      				*://*.org.cn/*
// @match      				*://*.xueyinonline.com/*
// @match      				*://*.hnsyu.net/*
// @match      				*://*.qutjxjy.cn/*
// @match      				*://*.ynny.cn/*
// @match      				*://*.hnvist.cn/*
// @match      				*://*.fjlecb.cn/*
// @match      				*://*.gdhkmooc.com/*
// @match      				*://*.cugbonline.cn/*
// @match      				*://*.zjelib.cn/*
// @match      				*://*.cqrspx.cn/*
// @match      				*://*.neauce.com/*
// @match      				*://*.zhihui-yun.com/*
// @match      				*://*.cqie.cn/*
// @match      				*://*.ccqmxx.com/*
// @match      				*://*.jxgmxy.com/*
// @match      				*://*.sslibrary.com/*
// @match      				*://*.icve.com.cn/*
// @match      				*://*.ai.icve.com.cn/*
// @match      				*://*.course.icve.com.cn/*
// @match      				*://*.courshare.cn/*
// @match      				*://*.webtrn.cn/*
// @match      				*://*.zjy2.icve.com.cn/*
// @match      				*://*.zyk.icve.com.cn/*
// @match      				*://*.icourse163.org/*
// @grant      				GM_info
// @grant      				GM_getTab
// @grant      				GM_saveTab
// @grant      				GM_setValue
// @grant      				GM_getValue
// @grant      				unsafeWindow
// @grant      				GM_listValues
// @grant      				GM_deleteValue
// @grant      				GM_notification
// @grant      				GM_xmlhttpRequest
// @grant      				GM_getResourceText
// @grant      				GM_addValueChangeListener
// @grant      				GM_removeValueChangeListener
// @run-at     				document-start
// @namespace  				https://enncy.cn
// @homepage   				https://docs.ocsjs.com
// @source     				https://github.com/ocsjs/ocsjs
// @icon       				https://cdn.ocsjs.com/logo.png
// @connect    				enncy.cn
// @connect    				icodef.com
// @connect    				ocsjs.com
// @connect    				zaizhexue.top
// @connect    				localhost
// @connect    				127.0.0.1
// @connect    				*
// @antifeature				payment
// @downloadURL https://update.greasyfork.org/scripts/575396/OCS%20%E7%BD%91%E8%AF%BE%E5%8A%A9%E6%89%8B%20-%20%E5%85%A8%E5%9F%9F%E5%90%8D%E9%80%9A%E7%94%A8%E7%89%88%EF%BC%88%E8%8A%82%E7%9C%81%E9%A2%98%E5%BA%93%E6%AC%A1%E6%95%B0%EF%BC%89.user.js
// @updateURL https://update.greasyfork.org/scripts/575396/OCS%20%E7%BD%91%E8%AF%BE%E5%8A%A9%E6%89%8B%20-%20%E5%85%A8%E5%9F%9F%E5%90%8D%E9%80%9A%E7%94%A8%E7%89%88%EF%BC%88%E8%8A%82%E7%9C%81%E9%A2%98%E5%BA%93%E6%AC%A1%E6%95%B0%EF%BC%89.meta.js
// ==/UserScript==

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.OCS = {}));
})(this, function(exports2) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function isObject$2(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$2;
  var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$2 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$2;
  var root$1 = _root;
  var now$1 = function() {
    return root$1.Date.now();
  };
  var now_1 = now$1;
  var reWhitespace = /\s/;
  function trimmedEndIndex$1(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var _trimmedEndIndex = trimmedEndIndex$1;
  var trimmedEndIndex = _trimmedEndIndex;
  var reTrimStart = /^\s+/;
  function baseTrim$1(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  var _baseTrim = baseTrim$1;
  var root = _root;
  var Symbol$3 = root.Symbol;
  var _Symbol = Symbol$3;
  var Symbol$2 = _Symbol;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty = objectProto$1.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$1.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
  function baseGetTag$1(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$1;
  function isObjectLike$1(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_1 = isObjectLike$1;
  var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
  var symbolTag = "[object Symbol]";
  function isSymbol$1(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  var isSymbol_1 = isSymbol$1;
  var baseTrim = _baseTrim, isObject$1 = isObject_1, isSymbol = isSymbol_1;
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber$1(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject$1(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject$1(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_1 = toNumber$1;
  var isObject = isObject_1, now = now_1, toNumber = toNumber_1;
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_1$1 = debounce;
  const $ = {
    uuid() {
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === "x" ? r : r & 3 | 8;
        return v.toString(16);
      });
    },
    random(min, max) {
      return Math.round(Math.random() * (max - min)) + min;
    },
    async sleep(period) {
      return new Promise((resolve) => {
        setTimeout(resolve, period);
      });
    },
    isInBrowser() {
      return typeof window !== "undefined" && typeof window.document !== "undefined";
    },
    elementToRawObject(el) {
      return {
        innerText: el == null ? void 0 : el.innerText,
        innerHTML: el == null ? void 0 : el.innerHTML,
        textContent: el == null ? void 0 : el.textContent
      };
    },
    onresize(el, handler) {
      const resize = debounce_1$1(() => {
        if (el.parentNode === null) {
          window.removeEventListener("resize", resize);
        } else {
          handler(el);
        }
      }, 200);
      resize();
      window.addEventListener("resize", resize);
    },
    isInTopWindow() {
      return self === top;
    },
    createCenteredPopupWindow(url, winName, opts) {
      const { width, height, scrollbars, resizable } = opts;
      const LeftPosition = screen.width ? (screen.width - width) / 2 : 0;
      const TopPosition = screen.height ? (screen.height - height) / 2 : 0;
      const settings = "height=" + height + ",width=" + width + ",top=" + TopPosition + ",left=" + LeftPosition + ",scrollbars=" + (scrollbars ? "yes" : "no") + ",resizable=" + (resizable ? "yes" : "no");
      return window.open(url, winName, settings);
    },
    transition: async (el, properties, duration_ms, val, options) => {
      return new Promise((resolve) => {
        const original_val = Reflect.get(el.style, properties) || "";
        el.style.transition = `${String(properties)} ${duration_ms}s ${(options == null ? void 0 : options.timing_function) || "ease-in-out"}`;
        Reflect.set(el.style, properties, val);
        el.addEventListener("transitionend", function handler() {
          el.removeEventListener("transitionend", handler);
          setTimeout(() => {
            Reflect.set(el.style, properties, original_val);
            setTimeout(() => {
              el.style.transition = "";
            }, duration_ms * 1e3);
          }, ((options == null ? void 0 : options.reset_ms) || 0) * 1e3);
          resolve();
        });
      });
    }
  };
  const $string = {
    humpToTarget(value, target) {
      return value.replace(/([A-Z])/g, target + "$1").toLowerCase().split(target).slice(1).join(target);
    }
  };
  class StringUtils {
    constructor(_text) {
      this._text = _text;
    }
    static nowrap(str, replace_str) {
      return (str == null ? void 0 : str.replace(/\n/g, replace_str)) || "";
    }
    nowrap(replace_str) {
      this._text = StringUtils.nowrap(this._text, replace_str);
      return this;
    }
    static nospace(str) {
      return (str == null ? void 0 : str.replace(/ +/g, " ")) || "";
    }
    nospace() {
      this._text = StringUtils.nospace(this._text);
      return this;
    }
    static noSpecialChar(str) {
      return (str == null ? void 0 : str.replace(/[^\w\s]/gi, "")) || "";
    }
    noSpecialChar() {
      this._text = StringUtils.noSpecialChar(this._text);
      return this;
    }
    static max(str, len) {
      return str.length > len ? str.substring(0, len) + "..." : str;
    }
    max(len) {
      this._text = StringUtils.max(this._text, len);
      return this;
    }
    static hide(str, start2, end, replacer = "*") {
      return str.substring(0, start2) + str.substring(start2, end).replace(/./g, replacer) + str.substring(end);
    }
    hide(start2, end, replacer = "*") {
      this._text = StringUtils.hide(this._text, start2, end, replacer);
      return this;
    }
    static of(text) {
      return new StringUtils(text);
    }
    toString() {
      return this._text;
    }
  }
  const $const = {
    TAB_UID: "_uid_",
    TAB_URLS: "_urls_",
    TAB_CURRENT_PANEL_NAME: "_current_panel_name_"
  };
  function domSearch(wrapper, root2 = window.document) {
    const obj = /* @__PURE__ */ Object.create({});
    Reflect.ownKeys(wrapper).forEach((key) => {
      const item = wrapper[key.toString()];
      Reflect.set(
        obj,
        key,
        typeof item === "string" ? root2.querySelector(item) : typeof item === "function" ? item(root2) : item.map((fun) => fun(root2))
      );
    });
    return obj;
  }
  function domSearchAll(wrapper, root2 = window.document) {
    const obj = /* @__PURE__ */ Object.create({});
    Reflect.ownKeys(wrapper).forEach((key) => {
      const item = wrapper[key.toString()];
      Reflect.set(
        obj,
        key,
        typeof item === "string" ? Array.from(root2.querySelectorAll(item)) : typeof item === "function" ? item(root2) : item.map((fun) => fun(root2))
      );
    });
    return obj;
  }
  var src = {
    compareTwoStrings,
    findBestMatch
  };
  function compareTwoStrings(first, second) {
    first = first.replace(/\s+/g, "");
    second = second.replace(/\s+/g, "");
    if (first === second)
      return 1;
    if (first.length < 2 || second.length < 2)
      return 0;
    let firstBigrams = /* @__PURE__ */ new Map();
    for (let i = 0; i < first.length - 1; i++) {
      const bigram = first.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
      firstBigrams.set(bigram, count);
    }
    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
      const bigram = second.substring(i, i + 2);
      const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
      if (count > 0) {
        firstBigrams.set(bigram, count - 1);
        intersectionSize++;
      }
    }
    return 2 * intersectionSize / (first.length + second.length - 2);
  }
  function findBestMatch(mainString, targetStrings) {
    if (!areArgsValid(mainString, targetStrings))
      throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
    const ratings = [];
    let bestMatchIndex = 0;
    for (let i = 0; i < targetStrings.length; i++) {
      const currentTargetString = targetStrings[i];
      const currentRating = compareTwoStrings(mainString, currentTargetString);
      ratings.push({ target: currentTargetString, rating: currentRating });
      if (currentRating > ratings[bestMatchIndex].rating) {
        bestMatchIndex = i;
      }
    }
    const bestMatch = ratings[bestMatchIndex];
    return { ratings, bestMatch, bestMatchIndex };
  }
  function areArgsValid(mainString, targetStrings) {
    if (typeof mainString !== "string")
      return false;
    if (!Array.isArray(targetStrings))
      return false;
    if (!targetStrings.length)
      return false;
    if (targetStrings.find(function(s) {
      return typeof s !== "string";
    }))
      return false;
    return true;
  }
  function clearString(str, ...exclude) {
    exclude.push(...["鈶犫憽鈶⑩懀鈶も懃鈶︹懅锟?]);
    return str.trim().toLocaleLowerCase().replace(RegExp(`[^\\u2E80-\\u9FFFA-Za-z0-9${exclude.join("")}]*`, "g"), "");
  }
  function answerSimilar(answers, options) {
    const _answers = answers.map(removeRedundant).map((a) => clearString(a));
    const _options = options.map(removeRedundant).map((o) => clearString(o));
    const similar = _answers.length !== 0 ? _options.map((option) => {
      if (option.trim() === "") {
        return { rating: 0, target: "" };
      }
      return src.findBestMatch(option, _answers).bestMatch;
    }) : _options.map(() => ({ rating: 0, target: "" }));
    return similar;
  }
  function answerExactMatch(answers, options) {
    const _answers = answers.map(removeRedundant);
    const _options = options.map(removeRedundant);
    const result = _answers.length !== 0 ? _options.filter((option) => {
      return _answers.find((answer) => answer.trim() === option.trim());
    }) : [];
    return result;
  }
  function removeRedundant(str) {
    return (str == null ? void 0 : str.trim().replace(/[A-Z]{1}[^A-Za-z0-9\u2E80-\u9FFF]+([A-Za-z0-9\u2E80-\u9FFF]+)/, "$1")) || "";
  }
  function request(url, opts) {
    return new Promise((resolve, reject) => {
      try {
        const { responseType = "json", method = "get", type = "fetch", data = {}, headers = {} } = opts || {};
        const env = $.isInBrowser() ? "browser" : "node";
        if (type === "GM_xmlhttpRequest" && env === "browser") {
          if (typeof GM_xmlhttpRequest !== "undefined") {
            const contentType = headers["Content-Type"] || headers["content-type"];
            const requestData = contentType === "application/x-www-form-urlencoded" ? new URLSearchParams(data).toString() : Object.keys(data).length ? JSON.stringify(data) : void 0;
            GM_xmlhttpRequest({
              url,
              method: method.toUpperCase(),
              data: requestData,
              headers: Object.keys(headers).length ? headers : void 0,
              responseType: responseType === "json" ? "json" : void 0,
              onload: (response) => {
                if (response.status === 200) {
                  if (responseType === "json") {
                    try {
                      resolve(JSON.parse(response.responseText));
                    } catch (error) {
                      reject(error);
                    }
                  } else {
                    resolve(response.responseText || "");
                  }
                } else {
                  reject(response.responseText);
                }
              },
              onerror: (err) => {
                console.error("GM_xmlhttpRequest error", err);
                reject(err);
              }
            });
          } else {
            reject(new Error("GM_xmlhttpRequest is not defined"));
          }
        } else {
          const fet = env === "node" ? require("node-fetch").default : fetch;
          fet(url, { body: method === "post" ? JSON.stringify(data) : void 0, method, headers }).then((response) => {
            if (responseType === "json") {
              response.json().then(resolve).catch(reject);
            } else {
              response.text().then(resolve).catch(reject);
            }
          }).catch((error) => {
            reject(new Error(error));
          });
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  var lib = {};
  var start$1 = {};
  var customWindow = {};
  var interfaces = {};
  var common$1 = {};
  var events = { exports: {} };
  var R = typeof Reflect === "object" ? Reflect : null;
  var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  };
  var ReflectOwnKeys;
  if (R && typeof R.ownKeys === "function") {
    ReflectOwnKeys = R.ownKeys;
  } else if (Object.getOwnPropertySymbols) {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
    };
  } else {
    ReflectOwnKeys = function ReflectOwnKeys2(target) {
      return Object.getOwnPropertyNames(target);
    };
  }
  function ProcessEmitWarning(warning) {
    if (console && console.warn)
      console.warn(warning);
  }
  var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
    return value !== value;
  };
  function EventEmitter() {
    EventEmitter.init.call(this);
  }
  events.exports = EventEmitter;
  events.exports.once = once;
  EventEmitter.EventEmitter = EventEmitter;
  EventEmitter.prototype._events = void 0;
  EventEmitter.prototype._eventsCount = 0;
  EventEmitter.prototype._maxListeners = void 0;
  var defaultMaxListeners = 10;
  function checkListener(listener) {
    if (typeof listener !== "function") {
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
    }
  }
  Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
      }
      defaultMaxListeners = arg;
    }
  });
  EventEmitter.init = function() {
    if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || void 0;
  };
  EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
    }
    this._maxListeners = n;
    return this;
  };
  function _getMaxListeners(that) {
    if (that._maxListeners === void 0)
      return EventEmitter.defaultMaxListeners;
    return that._maxListeners;
  }
  EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
  };
  EventEmitter.prototype.emit = function emit(type) {
    var args = [];
    for (var i = 1; i < arguments.length; i++)
      args.push(arguments[i]);
    var doError = type === "error";
    var events2 = this._events;
    if (events2 !== void 0)
      doError = doError && events2.error === void 0;
    else if (!doError)
      return false;
    if (doError) {
      var er;
      if (args.length > 0)
        er = args[0];
      if (er instanceof Error) {
        throw er;
      }
      var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
      err.context = er;
      throw err;
    }
    var handler = events2[type];
    if (handler === void 0)
      return false;
    if (typeof handler === "function") {
      ReflectApply(handler, this, args);
    } else {
      var len = handler.length;
      var listeners = arrayClone(handler, len);
      for (var i = 0; i < len; ++i)
        ReflectApply(listeners[i], this, args);
    }
    return true;
  };
  function _addListener(target, type, listener, prepend) {
    var m;
    var events2;
    var existing;
    checkListener(listener);
    events2 = target._events;
    if (events2 === void 0) {
      events2 = target._events = /* @__PURE__ */ Object.create(null);
      target._eventsCount = 0;
    } else {
      if (events2.newListener !== void 0) {
        target.emit(
          "newListener",
          type,
          listener.listener ? listener.listener : listener
        );
        events2 = target._events;
      }
      existing = events2[type];
    }
    if (existing === void 0) {
      existing = events2[type] = listener;
      ++target._eventsCount;
    } else {
      if (typeof existing === "function") {
        existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
      } else if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
      m = _getMaxListeners(target);
      if (m > 0 && existing.length > m && !existing.warned) {
        existing.warned = true;
        var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        w.name = "MaxListenersExceededWarning";
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        ProcessEmitWarning(w);
      }
    }
    return target;
  }
  EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
  };
  EventEmitter.prototype.on = EventEmitter.prototype.addListener;
  EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  };
  function onceWrapper() {
    if (!this.fired) {
      this.target.removeListener(this.type, this.wrapFn);
      this.fired = true;
      if (arguments.length === 0)
        return this.listener.call(this.target);
      return this.listener.apply(this.target, arguments);
    }
  }
  function _onceWrap(target, type, listener) {
    var state2 = { fired: false, wrapFn: void 0, target, type, listener };
    var wrapped = onceWrapper.bind(state2);
    wrapped.listener = listener;
    state2.wrapFn = wrapped;
    return wrapped;
  }
  EventEmitter.prototype.once = function once2(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
  };
  EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    var list, events2, position, i, originalListener;
    checkListener(listener);
    events2 = this._events;
    if (events2 === void 0)
      return this;
    list = events2[type];
    if (list === void 0)
      return this;
    if (list === listener || list.listener === listener) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else {
        delete events2[type];
        if (events2.removeListener)
          this.emit("removeListener", type, list.listener || listener);
      }
    } else if (typeof list !== "function") {
      position = -1;
      for (i = list.length - 1; i >= 0; i--) {
        if (list[i] === listener || list[i].listener === listener) {
          originalListener = list[i].listener;
          position = i;
          break;
        }
      }
      if (position < 0)
        return this;
      if (position === 0)
        list.shift();
      else {
        spliceOne(list, position);
      }
      if (list.length === 1)
        events2[type] = list[0];
      if (events2.removeListener !== void 0)
        this.emit("removeListener", type, originalListener || listener);
    }
    return this;
  };
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    var listeners, events2, i;
    events2 = this._events;
    if (events2 === void 0)
      return this;
    if (events2.removeListener === void 0) {
      if (arguments.length === 0) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      } else if (events2[type] !== void 0) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else
          delete events2[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      var keys = Object.keys(events2);
      var key;
      for (i = 0; i < keys.length; ++i) {
        key = keys[i];
        if (key === "removeListener")
          continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
      return this;
    }
    listeners = events2[type];
    if (typeof listeners === "function") {
      this.removeListener(type, listeners);
    } else if (listeners !== void 0) {
      for (i = listeners.length - 1; i >= 0; i--) {
        this.removeListener(type, listeners[i]);
      }
    }
    return this;
  };
  function _listeners(target, type, unwrap) {
    var events2 = target._events;
    if (events2 === void 0)
      return [];
    var evlistener = events2[type];
    if (evlistener === void 0)
      return [];
    if (typeof evlistener === "function")
      return unwrap ? [evlistener.listener || evlistener] : [evlistener];
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  }
  EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
  };
  EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
  };
  EventEmitter.listenerCount = function(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
      return emitter.listenerCount(type);
    } else {
      return listenerCount.call(emitter, type);
    }
  };
  EventEmitter.prototype.listenerCount = listenerCount;
  function listenerCount(type) {
    var events2 = this._events;
    if (events2 !== void 0) {
      var evlistener = events2[type];
      if (typeof evlistener === "function") {
        return 1;
      } else if (evlistener !== void 0) {
        return evlistener.length;
      }
    }
    return 0;
  }
  EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  };
  function arrayClone(arr, n) {
    var copy = new Array(n);
    for (var i = 0; i < n; ++i)
      copy[i] = arr[i];
    return copy;
  }
  function spliceOne(list, index) {
    for (; index + 1 < list.length; index++)
      list[index] = list[index + 1];
    list.pop();
  }
  function unwrapListeners(arr) {
    var ret = new Array(arr.length);
    for (var i = 0; i < ret.length; ++i) {
      ret[i] = arr[i].listener || arr[i];
    }
    return ret;
  }
  function once(emitter, name) {
    return new Promise(function(resolve, reject) {
      function errorListener(err) {
        emitter.removeListener(name, resolver);
        reject(err);
      }
      function resolver() {
        if (typeof emitter.removeListener === "function") {
          emitter.removeListener("error", errorListener);
        }
        resolve([].slice.call(arguments));
      }
      eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
      if (name !== "error") {
        addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
      }
    });
  }
  function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
    if (typeof emitter.on === "function") {
      eventTargetAgnosticAddListener(emitter, "error", handler, flags);
    }
  }
  function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
      if (flags.once) {
        emitter.once(name, listener);
      } else {
        emitter.on(name, listener);
      }
    } else if (typeof emitter.addEventListener === "function") {
      emitter.addEventListener(name, function wrapListener(arg) {
        if (flags.once) {
          emitter.removeEventListener(name, wrapListener);
        }
        listener(arg);
      });
    } else {
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
    }
  }
  var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(common$1, "__esModule", { value: true });
  common$1.CommonEventEmitter = void 0;
  const events_1$1 = __importDefault$2(events.exports);
  class CommonEventEmitter extends events_1$1.default {
    on(eventName, listener) {
      return super.on(eventName.toString(), listener);
    }
    once(eventName, listener) {
      return super.once(eventName.toString(), listener);
    }
    emit(eventName, ...args) {
      return super.emit(eventName.toString(), ...args);
    }
    off(eventName, listener) {
      return super.off(eventName.toString(), listener);
    }
  }
  common$1.CommonEventEmitter = CommonEventEmitter;
  var config$1 = {};
  Object.defineProperty(config$1, "__esModule", { value: true });
  var cors = {};
  var utils = {};
  var common = {};
  var store = {};
  var store_provider = {};
  var _const = {};
  Object.defineProperty(_const, "__esModule", { value: true });
  _const.$const = void 0;
  _const.$const = {
    TAB_UID: "_uid_",
    TAB_URLS: "_urls_",
    TAB_CURRENT_PANEL_NAME: "_current_panel_name_"
  };
  var __awaiter$3 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(store_provider, "__esModule", { value: true });
  store_provider.GMStoreProvider = store_provider.MemoryStoreProvider = store_provider.LocalStoreChangeEvent = void 0;
  const const_1$1 = _const;
  class LocalStoreChangeEvent extends Event {
    constructor() {
      super(...arguments);
      this.key = "";
    }
  }
  store_provider.LocalStoreChangeEvent = LocalStoreChangeEvent;
  class MemoryStoreProvider {
    get(key, defaultValue) {
      var _a;
      return (_a = Reflect.get(MemoryStoreProvider._source.store, key)) !== null && _a !== void 0 ? _a : defaultValue;
    }
    set(key, value) {
      var _a;
      const pre = Reflect.get(MemoryStoreProvider._source.store, key);
      Reflect.set(MemoryStoreProvider._source.store, key, value);
      (_a = MemoryStoreProvider.storeListeners.get(key)) === null || _a === void 0 ? void 0 : _a.forEach((lis) => lis(value, pre));
    }
    delete(key) {
      Reflect.deleteProperty(MemoryStoreProvider._source.store, key);
    }
    list() {
      return Object.keys(MemoryStoreProvider._source.store);
    }
    getTab(key) {
      return __awaiter$3(this, void 0, void 0, function* () {
        return Reflect.get(MemoryStoreProvider._source.tab, key);
      });
    }
    setTab(key, value) {
      var _a;
      return __awaiter$3(this, void 0, void 0, function* () {
        Reflect.set(MemoryStoreProvider._source.tab, key, value);
        (_a = MemoryStoreProvider.tabListeners.get(key)) === null || _a === void 0 ? void 0 : _a.forEach((lis) => lis(value, this.getTab(key)));
      });
    }
    addChangeListener(key, listener) {
      const listeners = MemoryStoreProvider.storeListeners.get(key) || [];
      listeners.push(listener);
      MemoryStoreProvider.storeListeners.set(key, listeners);
    }
    removeChangeListener(listener) {
      MemoryStoreProvider.tabListeners.forEach((lis, key) => {
        const index = lis.findIndex((l) => l === listener);
        if (index !== -1) {
          lis.splice(index, 1);
          MemoryStoreProvider.tabListeners.set(key, lis);
        }
      });
    }
    addTabChangeListener(key, listener) {
      const listeners = MemoryStoreProvider.tabListeners.get(key) || [];
      listeners.push(listener);
      MemoryStoreProvider.tabListeners.set(key, listeners);
    }
    removeTabChangeListener(key, listener) {
      const listeners = MemoryStoreProvider.tabListeners.get(key) || [];
      const index = listeners.findIndex((l) => l === listener);
      if (index !== -1) {
        listeners.splice(index, 1);
        MemoryStoreProvider.tabListeners.set(key, listeners);
      }
    }
  }
  MemoryStoreProvider._source = { store: {}, tab: {} };
  MemoryStoreProvider.storeListeners = /* @__PURE__ */ new Map();
  MemoryStoreProvider.tabListeners = /* @__PURE__ */ new Map();
  store_provider.MemoryStoreProvider = MemoryStoreProvider;
  class GMStoreProvider {
    constructor() {
      if (self === top && typeof globalThis.GM_listValues !== "undefined") {
        for (const val of GM_listValues()) {
          if (val.startsWith("_tab_change_")) {
            GM_deleteValue(val);
          }
        }
      }
    }
    getTabChangeHandleKey(tabUid, key) {
      return `_tab_change_${tabUid}_${key}`;
    }
    get(key, defaultValue) {
      return GM_getValue(key, defaultValue);
    }
    set(key, value) {
      GM_setValue(key, value);
    }
    delete(key) {
      GM_deleteValue(key);
    }
    list() {
      return GM_listValues();
    }
    getTab(key) {
      return new Promise((resolve, reject) => {
        GM_getTab((tab = {}) => resolve(Reflect.get(tab, key)));
      });
    }
    setTab(key, value) {
      return new Promise((resolve, reject) => {
        GM_getTab((tab = {}) => {
          Reflect.set(tab, key, value);
          GM_saveTab(tab);
          this.set(this.getTabChangeHandleKey(Reflect.get(tab, const_1$1.$const.TAB_UID), key), value);
          resolve();
        });
      });
    }
    addChangeListener(key, listener) {
      return GM_addValueChangeListener(key, (_, pre, curr, remote) => {
        listener(curr, pre, remote);
      });
    }
    removeChangeListener(listenerId) {
      if (typeof listenerId === "number") {
        GM_removeValueChangeListener(listenerId);
      }
    }
    addTabChangeListener(key, listener) {
      return __awaiter$3(this, void 0, void 0, function* () {
        const uid = yield this.getTab(const_1$1.$const.TAB_UID);
        return GM_addValueChangeListener(this.getTabChangeHandleKey(uid, key), (_, pre, curr) => {
          listener(curr, pre);
        });
      });
    }
    removeTabChangeListener(key, listener) {
      return this.removeChangeListener(listener);
    }
  }
  store_provider.GMStoreProvider = GMStoreProvider;
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.$store = exports3.MemoryStoreProvider = exports3.GMStoreProvider = void 0;
    const store_provider_1 = store_provider;
    var store_provider_2 = store_provider;
    Object.defineProperty(exports3, "GMStoreProvider", { enumerable: true, get: function() {
      return store_provider_2.GMStoreProvider;
    } });
    Object.defineProperty(exports3, "MemoryStoreProvider", { enumerable: true, get: function() {
      return store_provider_2.MemoryStoreProvider;
    } });
    exports3.$store = typeof globalThis.unsafeWindow === "undefined" ? new store_provider_1.MemoryStoreProvider() : new store_provider_1.GMStoreProvider();
  })(store);
  (function(exports3) {
    var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __rest2 = commonjsGlobal && commonjsGlobal.__rest || function(s, e) {
      var t2 = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t2[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t2[p[i]] = s[p[i]];
        }
      return t2;
    };
    var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.resolveCustomElementName = exports3.$ = void 0;
    const debounce_12 = __importDefault2(debounce_1$1);
    const store_12 = store;
    exports3.$ = {
      createConfigProxy(script2) {
        var _a, _b;
        const proxy = new Proxy(script2.cfg, {
          set(target, propertyKey, value) {
            const key = exports3.$.namespaceKey(script2.namespace, propertyKey);
            store_12.$store.set(key, value);
            return Reflect.set(target, propertyKey, value);
          },
          get(target, propertyKey) {
            const value = store_12.$store.get(exports3.$.namespaceKey(script2.namespace, propertyKey));
            Reflect.set(target, propertyKey, value);
            return value;
          }
        });
        for (const key in script2.configs) {
          if (Object.prototype.hasOwnProperty.call(script2.configs, key)) {
            const element = Reflect.get(script2.configs, key);
            Reflect.set(proxy, key, store_12.$store.get(exports3.$.namespaceKey(script2.namespace, key), element.defaultValue));
          }
        }
        if (script2.namespace) {
          proxy.notes = (_b = (_a = script2.configs) === null || _a === void 0 ? void 0 : _a.notes) === null || _b === void 0 ? void 0 : _b.defaultValue;
        }
        return proxy;
      },
      getAllRawConfigs(scripts) {
        const object = {};
        for (const script2 of scripts) {
          for (const key in script2.configs) {
            if (Object.prototype.hasOwnProperty.call(script2.configs, key)) {
              const _a = script2.configs[key], element = __rest2(_a, ["label"]);
              Reflect.set(object, exports3.$.namespaceKey(script2.namespace, key), Object.assign({ label: exports3.$.namespaceKey(script2.namespace, key) }, element));
            }
          }
        }
        return object;
      },
      getMatchedScripts(projects, urls) {
        const scripts = [];
        for (const project2 of projects) {
          for (const key in project2.scripts) {
            if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
              const script2 = project2.scripts[key];
              const script_matches_urls = script2.matches.map((u) => Array.isArray(u) ? u[1] : u);
              const script_excludes_urls = (script2.excludes || []).map((u) => Array.isArray(u) ? u[1] : u);
              if (project2.domains === void 0 || project2.domains.length === 0 || project2.domains.some((d) => urls.some((url) => new URL(url).origin.includes(d)))) {
                if (script_excludes_urls.some((u) => urls.some((url) => RegExp(u).test(url)))) {
                  continue;
                }
                if (script_matches_urls.some((u) => urls.some((url) => RegExp(u).test(url)))) {
                  scripts.push(script2);
                }
              }
            }
          }
        }
        return scripts;
      },
      namespaceKey(namespace, key) {
        return namespace ? namespace + "." + key.toString() : key.toString();
      },
      uuid() {
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c === "x" ? r : r & 3 | 8;
          return v.toString(16);
        });
      },
      random(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
      },
      sleep(period) {
        return __awaiter2(this, void 0, void 0, function* () {
          return new Promise((resolve) => {
            setTimeout(resolve, period);
          });
        });
      },
      isInBrowser() {
        return typeof window !== "undefined" && typeof window.document !== "undefined";
      },
      onresize(el, handler) {
        const resize = (0, debounce_12.default)(() => {
          if (el.parentNode === null) {
            window.removeEventListener("resize", resize);
          } else {
            handler(el);
          }
        }, 200);
        resize();
        window.addEventListener("resize", resize);
      },
      loadCustomElements(elements2) {
        for (const element of elements2) {
          const name = resolveCustomElementName(element, "-");
          if (customElements.get(name) === void 0) {
            customElements.define(name, element);
          }
        }
      },
      isInTopWindow() {
        return self === top;
      },
      createCenteredPopupWindow(url, winName, opts) {
        const { width, height, scrollbars, resizable } = opts;
        const LeftPosition = screen.width ? (screen.width - width) / 2 : 0;
        const TopPosition = screen.height ? (screen.height - height) / 2 : 0;
        const settings = "height=" + height + ",width=" + width + ",top=" + TopPosition + ",left=" + LeftPosition + ",scrollbars=" + (scrollbars ? "yes" : "no") + ",resizable=" + (resizable ? "yes" : "no");
        return window.open(url, winName, settings);
      }
    };
    function resolveCustomElementName(el, target) {
      return el.name.replace(/([A-Z])/g, target + "$1").toLowerCase().split(target).slice(1).join(target);
    }
    exports3.resolveCustomElementName = resolveCustomElementName;
  })(common);
  var ui = {};
  var dom = {};
  Object.defineProperty(dom, "__esModule", { value: true });
  dom.enableElementTouchDraggable = dom.enableElementDraggable = dom.$$el = dom.$el = dom.h = void 0;
  const common_1$5 = common;
  function h(element, attrsOrChildren, childrenOrHandler) {
    let name = "";
    if (typeof element === "function") {
      name = (0, common_1$5.resolveCustomElementName)(element, "-");
    } else {
      name = element;
    }
    const el = document.createElement(name);
    if (attrsOrChildren) {
      if (Array.isArray(attrsOrChildren)) {
        for (const child of attrsOrChildren) {
          if (typeof child === "function") {
            el.append(document.createElement(child.name));
          } else {
            el.append(child);
          }
        }
      } else if (typeof attrsOrChildren === "string") {
        el.append(attrsOrChildren);
      } else {
        const attrs = attrsOrChildren;
        for (const key in attrs) {
          if (Object.prototype.hasOwnProperty.call(attrs, key)) {
            if (key === "style") {
              Object.assign(el.style, attrs[key]);
            } else {
              const value = attrs[key];
              Reflect.set(el, key, value);
            }
          }
        }
      }
    }
    if (childrenOrHandler) {
      if (typeof childrenOrHandler === "function") {
        childrenOrHandler.call(el, el);
      } else if (Array.isArray(childrenOrHandler)) {
        for (const child of childrenOrHandler) {
          if (typeof child === "function") {
            el.append(document.createElement(child.name));
          } else {
            el.append(child);
          }
        }
      } else if (typeof childrenOrHandler === "string") {
        el.append(childrenOrHandler);
      }
    }
    return el;
  }
  dom.h = h;
  function $el(selector, root2 = window.document) {
    const el = root2.querySelector(selector);
    return el === null ? void 0 : el;
  }
  dom.$el = $el;
  function $$el(selector, root2 = window.document) {
    return Array.from(root2.querySelectorAll(selector));
  }
  dom.$$el = $$el;
  function enableElementDraggable(header2, target, ondrag) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    header2.addEventListener("mousedown", dragMouseDown);
    function dragMouseDown(e) {
      e = e || window.event;
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.addEventListener("mouseup", closeDragElement);
      document.addEventListener("mousemove", elementDrag);
    }
    function elementDrag(e) {
      e.stopPropagation();
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      target.style.top = Math.max(target.offsetTop - pos2, 10) + "px";
      target.style.left = target.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
      ondrag === null || ondrag === void 0 ? void 0 : ondrag();
      document.removeEventListener("mouseup", closeDragElement);
      document.removeEventListener("mousemove", elementDrag);
    }
  }
  dom.enableElementDraggable = enableElementDraggable;
  function enableElementTouchDraggable(header2, target, ondrag) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    header2.addEventListener("touchstart", dragTouchStart);
    function dragTouchStart(e) {
      e = e || window.event;
      const touch = e.touches[0];
      pos3 = touch.clientX;
      pos4 = touch.clientY;
      document.addEventListener("touchend", closeDragElement);
      document.addEventListener("touchmove", elementDrag);
    }
    function elementDrag(e) {
      e.stopPropagation();
      e = e || window.event;
      const touch = e.touches[0];
      pos1 = pos3 - touch.clientX;
      pos2 = pos4 - touch.clientY;
      pos3 = touch.clientX;
      pos4 = touch.clientY;
      target.style.top = Math.max(target.offsetTop - pos2, 10) + "px";
      target.style.left = target.offsetLeft - pos1 + "px";
    }
    function closeDragElement() {
      ondrag === null || ondrag === void 0 ? void 0 : ondrag();
      document.removeEventListener("touchend", closeDragElement);
      document.removeEventListener("touchmove", elementDrag);
    }
  }
  dom.enableElementTouchDraggable = enableElementTouchDraggable;
  var elements$1 = {};
  Object.defineProperty(elements$1, "__esModule", { value: true });
  elements$1.$elements = void 0;
  elements$1.$elements = {
    tooltipContainer: void 0,
    root: void 0
  };
  var tampermonkey = {};
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.$gm = void 0;
    exports3.$gm = {
      unsafeWindow: typeof globalThis.unsafeWindow === "undefined" ? globalThis.window : globalThis.unsafeWindow,
      isInGMContext() {
        return typeof GM_info !== "undefined";
      },
      getInfos() {
        return typeof GM_info === "undefined" ? void 0 : GM_info;
      },
      getTab(callback) {
        return typeof GM_getTab === "undefined" ? void 0 : GM_getTab(callback);
      },
      notification(content, options) {
        var _a;
        const { onclick, ondone, important, duration = 30, silent = true, extraTitle = "" } = options || {};
        const { icon, name } = ((_a = exports3.$gm.getInfos()) === null || _a === void 0 ? void 0 : _a.script) || {};
        GM_notification({
          title: name + (extraTitle ? "-" + extraTitle : ""),
          text: content,
          image: icon || "",
          highlight: important,
          onclick,
          ondone,
          silent,
          timeout: duration * 1e3
        });
      },
      getMetadataFromScriptHead(key) {
        var _a, _b;
        const metadataString = (_a = this.getInfos()) === null || _a === void 0 ? void 0 : _a.scriptMetaStr;
        if (!metadataString) {
          return [];
        } else {
          const metadata = ((_b = metadataString.match(/\/\/\s+==UserScript==([\s\S]+)\/\/\s+==\/UserScript==/)) === null || _b === void 0 ? void 0 : _b[1]) || "";
          const metadataList = (metadata.match(/\/\/\s+@(.+?)\s+(.*?)(?:\n|$)/g) || []).map((line) => {
            const words = line.match(/[\S]+/g) || [];
            return {
              key: (words[1] || "").replace("@", ""),
              value: words.slice(2).join(" ")
            };
          });
          return metadataList.filter((l) => l.key === key).map((l) => l.value);
        }
      }
    };
  })(tampermonkey);
  Object.defineProperty(ui, "__esModule", { value: true });
  ui.$ui = void 0;
  const common_1$4 = common;
  const dom_1$7 = dom;
  const elements_1$2 = elements$1;
  const tampermonkey_1$1 = tampermonkey;
  ui.$ui = {
    tooltip(target) {
      target.setAttribute("data-title", target.title);
      if (tampermonkey_1$1.$gm.isInGMContext()) {
        target.removeAttribute("title");
      }
      const onMouseMove = (e) => {
        if (elements_1$2.$elements.tooltipContainer && elements_1$2.$elements.tooltipContainer.style.display !== "none") {
          elements_1$2.$elements.tooltipContainer.style.top = e.y + "px";
          elements_1$2.$elements.tooltipContainer.style.left = e.x + "px";
        }
      };
      const onTouchMove = (e) => {
        if (elements_1$2.$elements.tooltipContainer && elements_1$2.$elements.tooltipContainer.style.display !== "none") {
          const touch = e.touches[0];
          elements_1$2.$elements.tooltipContainer.style.top = touch.clientY + "px";
          elements_1$2.$elements.tooltipContainer.style.left = touch.clientX + "px";
        }
      };
      const showTitle = (e) => {
        const dataTitle = target.getAttribute("data-title");
        if (elements_1$2.$elements.tooltipContainer) {
          if (dataTitle) {
            elements_1$2.$elements.tooltipContainer.innerHTML = dataTitle.split("\n").join("<br>") || "";
            if (e instanceof MouseEvent) {
              elements_1$2.$elements.tooltipContainer.style.top = e.y + "px";
              elements_1$2.$elements.tooltipContainer.style.left = e.x + "px";
            } else if (e instanceof TouchEvent) {
              const touch = e.touches[0];
              elements_1$2.$elements.tooltipContainer.style.top = touch.clientY + "px";
              elements_1$2.$elements.tooltipContainer.style.left = touch.clientX + "px";
            }
            elements_1$2.$elements.tooltipContainer.style.display = "block";
          } else {
            elements_1$2.$elements.tooltipContainer.style.display = "none";
          }
        }
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
      };
      const hideTitle = () => {
        if (elements_1$2.$elements.tooltipContainer) {
          elements_1$2.$elements.tooltipContainer.style.display = "none";
        }
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onTouchMove);
      };
      hideTitle();
      target.addEventListener("mouseenter", showTitle);
      target.addEventListener("click", showTitle);
      target.addEventListener("mouseout", hideTitle);
      target.addEventListener("mouseleave", hideTitle);
      target.addEventListener("touchstart", showTitle);
      target.addEventListener("touchend", hideTitle);
      target.addEventListener("touchcancel", hideTitle);
      target.addEventListener("blur", hideTitle);
      return target;
    },
    scriptPanel(script2, store2, opts) {
      var _a, _b;
      const scriptPanel = (0, dom_1$7.h)("script-panel-element", { name: script2.name });
      script2.onConfigChange("notes", (pre, curr) => {
        scriptPanel.notesContainer.innerHTML = script2.cfg.notes || "";
      });
      script2.panel = scriptPanel;
      scriptPanel.notesContainer.innerHTML = ((_b = (_a = script2.configs) === null || _a === void 0 ? void 0 : _a.notes) === null || _b === void 0 ? void 0 : _b.defaultValue) || "";
      let configs = /* @__PURE__ */ Object.create({});
      const elList = [];
      for (const key in script2.configs) {
        if (Object.prototype.hasOwnProperty.call(script2.configs, key)) {
          const cfg = script2.configs[key];
          if (cfg.separator) {
            elList.push(this.configsArea(this.configs(script2.namespace, store2, configs || {}, opts === null || opts === void 0 ? void 0 : opts.onload)));
            elList.push((0, dom_1$7.h)("div", { className: "separator", style: { margin: "0px 8px" } }, cfg.separator));
            configs = /* @__PURE__ */ Object.create({});
          }
          configs[key] = cfg;
        }
      }
      if (Object.keys(configs).length > 0) {
        elList.push(this.configsArea(this.configs(script2.namespace, store2, configs || {}, opts === null || opts === void 0 ? void 0 : opts.onload)));
      }
      scriptPanel.configsContainer.replaceChildren(...elList);
      return scriptPanel;
    },
    configsArea(configElements) {
      const configsContainer = (0, dom_1$7.h)("div", { className: "configs card" });
      const configsBody = (0, dom_1$7.h)("div", { className: "configs-body" });
      configsBody.append(...Object.entries(configElements).map(([key, el]) => el));
      configsContainer.append(configsBody);
      return configsContainer;
    },
    configs(namespace, store2, configs, onload) {
      const elements2 = /* @__PURE__ */ Object.create({});
      for (const key in configs) {
        if (Object.prototype.hasOwnProperty.call(configs, key)) {
          const config2 = configs[key];
          if (config2.label !== void 0) {
            const element = (0, dom_1$7.h)("config-element", {
              key: common_1$4.$.namespaceKey(namespace, key),
              tag: config2.tag,
              sync: config2.sync,
              attrs: config2.attrs,
              _onload: function(el) {
                var _a;
                (_a = config2.onload) === null || _a === void 0 ? void 0 : _a.call(this, el);
                onload === null || onload === void 0 ? void 0 : onload(el);
              },
              defaultValue: config2.defaultValue,
              options: config2.options,
              showIf: config2.showIf,
              elementClassName: config2.elementClassName,
              labelClassName: config2.labelClassName,
              providerClassName: config2.providerClassName,
              enableForAttribute: config2.enableForAttribute
            });
            element.store = store2;
            element.label.textContent = config2.label;
            elements2[key] = element;
          }
        }
      }
      return elements2;
    },
    notes(lines, tag = "ul") {
      return (0, dom_1$7.h)(tag, lines.map((line) => (0, dom_1$7.h)("li", Array.isArray(line) ? line.map((node) => typeof node === "string" ? (0, dom_1$7.h)("div", { innerHTML: node }) : node) : [typeof line === "string" ? (0, dom_1$7.h)("div", { innerHTML: line }) : line])));
    },
    copy(name, value) {
      return (0, dom_1$7.h)("span", "馃搫" + name, (btn) => {
        btn.className = "copy";
        btn.addEventListener("click", () => {
          btn.innerText = "宸插鍒垛垰";
          navigator.clipboard.writeText(value);
          setTimeout(() => {
            btn.innerText = "馃搫" + name;
          }, 500);
        });
      });
    },
    preventText(opts) {
      const { name, delay = 3, autoRemove = true, ondefault, onprevent } = opts;
      const span = (0, dom_1$7.h)("span", name);
      span.style.textDecoration = "underline";
      span.style.cursor = "pointer";
      span.onclick = () => {
        clearTimeout(id);
        if (autoRemove) {
          span.remove();
        }
        onprevent === null || onprevent === void 0 ? void 0 : onprevent(span);
      };
      const id = setTimeout(() => {
        if (autoRemove) {
          span.remove();
        }
        ondefault(span);
      }, delay * 1e3);
      return span;
    },
    space(children, options) {
      return (0, dom_1$7.h)("div", { className: "space" }, (div) => {
        var _a, _b, _c;
        for (let index = 0; index < children.length; index++) {
          const child = (0, dom_1$7.h)("span", { className: "space-item" }, [children[index]]);
          child.style.display = "inline-block";
          const x = (_a = options === null || options === void 0 ? void 0 : options.x) !== null && _a !== void 0 ? _a : 12;
          const y = (_b = options === null || options === void 0 ? void 0 : options.y) !== null && _b !== void 0 ? _b : 0;
          if (index > 0) {
            child.style.marginLeft = x / 2 + "px";
            child.style.marginRight = x / 2 + "px";
            child.style.marginTop = y / 2 + "px";
            child.style.marginBottom = y / 2 + "px";
          } else {
            child.style.marginRight = x / 2 + "px";
            child.style.marginBottom = y / 2 + "px";
          }
          div.append(child);
          if (index !== children.length - 1) {
            div.append((0, dom_1$7.h)("span", [(_c = options === null || options === void 0 ? void 0 : options.separator) !== null && _c !== void 0 ? _c : " "]));
          }
        }
      });
    },
    button(text, attrs, handler) {
      return (0, dom_1$7.h)("input", Object.assign({ type: "button" }, attrs), function(btn) {
        btn.value = text || "";
        btn.classList.add("base-style-button");
        handler === null || handler === void 0 ? void 0 : handler.apply(this, [btn]);
      });
    }
  };
  (function(exports3) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports4) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports4, p))
          __createBinding(exports4, m, p);
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    __exportStar(common, exports3);
    __exportStar(ui, exports3);
    __exportStar(dom, exports3);
    __exportStar(elements$1, exports3);
    __exportStar(tampermonkey, exports3);
    __exportStar(store, exports3);
    __exportStar(_const, exports3);
  })(utils);
  (function(exports3) {
    var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.cors = exports3.CorsEventEmitter = void 0;
    const utils_12 = utils;
    const common_12 = common;
    const const_12 = _const;
    const store_12 = store;
    class CorsEventEmitter {
      constructor() {
        this.eventMap = /* @__PURE__ */ new Map();
      }
      eventKey(name) {
        return "cors.events." + name;
      }
      tempKey(...args) {
        return ["_temp_", ...args].join(".");
      }
      keyOfReturn(id) {
        return this.tempKey("event", id, "return");
      }
      keyOfArguments(id) {
        return this.tempKey("event", id, "arguments");
      }
      keyOfState(id) {
        return this.tempKey("event", id, "state");
      }
      emit(name, args = [], callback) {
        store_12.$store.getTab(const_12.$const.TAB_UID).then((uid) => {
          const id = common_12.$.uuid().replace(/-/g, "");
          const key = uid + "." + this.eventKey(name);
          store_12.$store.set(this.keyOfState(id), 0);
          store_12.$store.set(this.keyOfArguments(id), args);
          setTimeout(() => {
            const listenerId = store_12.$store.addChangeListener(this.keyOfState(id), () => {
              store_12.$store.removeChangeListener(listenerId);
              callback === null || callback === void 0 ? void 0 : callback(store_12.$store.get(this.keyOfReturn(id)));
              store_12.$store.delete(this.keyOfState(id));
              store_12.$store.delete(this.keyOfReturn(id));
              store_12.$store.delete(this.keyOfArguments(id));
            }) || 0;
            store_12.$store.set(key, (store_12.$store.get(key) ? String(store_12.$store.get(key)).split(",") : []).concat(id).join(","));
          }, 100);
        }).catch(console.error);
      }
      on(name, handler) {
        return new Promise((resolve) => {
          store_12.$store.getTab(const_12.$const.TAB_UID).then((uid) => {
            const key = uid + "." + this.eventKey(name);
            const originId = this.eventMap.get(key);
            if (originId) {
              resolve(originId);
            } else {
              const id = store_12.$store.addChangeListener(key, (curr, pre, remote) => __awaiter2(this, void 0, void 0, function* () {
                if (remote) {
                  if (curr === void 0) {
                    return;
                  }
                  const list = String(curr).split(",");
                  const id2 = list.pop();
                  if (id2) {
                    store_12.$store.set(this.keyOfReturn(id2), yield handler(store_12.$store.get(this.keyOfArguments(id2))));
                    setTimeout(() => {
                      store_12.$store.set(this.keyOfState(id2), 1);
                      store_12.$store.set(key, list.join(","));
                    }, 100);
                  }
                }
              })) || 0;
              this.eventMap.set(key, id);
              resolve(id);
            }
          }).catch(console.error);
        });
      }
      off(name) {
        const key = this.eventKey(name);
        const originId = this.eventMap.get(key);
        if (originId) {
          this.eventMap.delete(key);
          store_12.$store.removeChangeListener(originId);
        }
      }
      defineTopFunction(func) {
        if (utils_12.$gm.isInGMContext() === false) {
          return () => {
          };
        }
        const randomId = common_12.$.uuid().replace(/-/g, "");
        const event_name = "_top_function_." + randomId;
        if (self === top) {
          exports3.cors.on(event_name, (args) => __awaiter2(this, void 0, void 0, function* () {
            return yield func(...args);
          }));
        }
        return (...args) => __awaiter2(this, void 0, void 0, function* () {
          if (self === top) {
            return yield func(...args);
          }
          const res = yield new Promise((resolve, reject) => {
            try {
              exports3.cors.emit(event_name, args, (val) => {
                resolve(val);
              });
            } catch (e) {
              reject(e);
            }
          });
          return res;
        });
      }
    }
    exports3.CorsEventEmitter = CorsEventEmitter;
    if (typeof GM_listValues !== "undefined" && self === top) {
      window.onload = () => {
        store_12.$store.list().forEach((key) => {
          if (/_temp_.event.[0-9a-z]{32}.(state|return|arguments)/.test(key)) {
            store_12.$store.delete(key);
          }
          if (/_top_function_.*/.test(key)) {
            store_12.$store.delete(key);
          }
          if (/[0-9a-z]{32}.cors.events/.test(key)) {
            store_12.$store.delete(key);
          }
        });
      };
    }
    exports3.cors = new CorsEventEmitter();
  })(cors);
  var project = {};
  Object.defineProperty(project, "__esModule", { value: true });
  project.Project = void 0;
  class Project {
    constructor({ name, domains, scripts }) {
      this.name = name;
      this.domains = domains;
      for (const key in scripts) {
        if (Object.prototype.hasOwnProperty.call(scripts, key)) {
          const element = scripts[key];
          element.projectName = name;
        }
      }
      this.scripts = scripts;
    }
    static create(opts) {
      return new Project(opts);
    }
  }
  project.Project = Project;
  var script = {};
  var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(script, "__esModule", { value: true });
  script.Script = script.BaseScript = void 0;
  const common_1$3 = common;
  const store_1$1 = store;
  const common_2 = common$1;
  const events_1 = __importDefault$1(events.exports);
  class BaseScript extends common_2.CommonEventEmitter {
  }
  script.BaseScript = BaseScript;
  class Script extends BaseScript {
    get configs() {
      if (!this._resolvedConfigs) {
        this._resolvedConfigs = typeof this._configs === "function" ? this._configs() : this._configs;
      }
      return this._resolvedConfigs;
    }
    set configs(c) {
      this._configs = c;
    }
    constructor({ name, namespace, matches, excludes, configs, hideInPanel, onstart, onactive, oncomplete, onbeforeunload, onrender, onhistorychange, methods, priority }) {
      super();
      this.excludes = [];
      this.cfg = {};
      this.methods = /* @__PURE__ */ Object.create({});
      this.event = new events_1.default();
      this.name = name;
      this.namespace = namespace;
      this.matches = matches;
      this.excludes = excludes;
      this._configs = configs;
      this.hideInPanel = hideInPanel;
      this.onstart = this.errorHandler(onstart);
      this.onactive = this.errorHandler(onactive);
      this.oncomplete = this.errorHandler(oncomplete);
      this.onbeforeunload = this.errorHandler(onbeforeunload);
      this.onrender = this.errorHandler(onrender);
      this.onhistorychange = this.errorHandler(onhistorychange);
      this.methods = (methods === null || methods === void 0 ? void 0 : methods.bind(this)()) || /* @__PURE__ */ Object.create({});
      this.priority = priority !== null && priority !== void 0 ? priority : 0;
      if (this.methods) {
        for (const key in methods) {
          if (Reflect.has(this.methods, key) && typeof this.methods[key] !== "function") {
            Reflect.set(this.methods, key, this.errorHandler(this.methods[key]));
          }
        }
      }
    }
    onConfigChange(key, handler) {
      const _key = common_1$3.$.namespaceKey(this.namespace, key.toString());
      return store_1$1.$store.addChangeListener(_key, (curr, pre, remote) => {
        handler(curr, pre, !!remote);
      });
    }
    offConfigChange(listener) {
      store_1$1.$store.removeChangeListener(listener);
    }
    fullName() {
      return this.projectName ? `${this.projectName}-${this.name}` : this.name;
    }
    errorHandler(func) {
      return (...args) => {
        try {
          return func === null || func === void 0 ? void 0 : func.apply(this, args);
        } catch (err) {
          console.error(err);
          if (err instanceof Error) {
            this.emit("scripterror", err.message);
          } else {
            this.emit("scripterror", String(err));
          }
        }
      };
    }
  }
  script.Script = Script;
  (function(exports3) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports4) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports4, p))
          __createBinding(exports4, m, p);
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    __exportStar(common$1, exports3);
    __exportStar(config$1, exports3);
    __exportStar(cors, exports3);
    __exportStar(project, exports3);
    __exportStar(script, exports3);
    __exportStar(store_provider, exports3);
  })(interfaces);
  var elements = {};
  var config = {};
  var _interface = {};
  Object.defineProperty(_interface, "__esModule", { value: true });
  _interface.IElement = void 0;
  class IElement extends HTMLElement {
    connectedCallback() {
    }
    disconnectedCallback() {
    }
    adoptedCallback() {
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
  }
  _interface.IElement = IElement;
  Object.defineProperty(config, "__esModule", { value: true });
  config.ConfigElement = void 0;
  const ui_1$1 = ui;
  const dom_1$6 = dom;
  const interface_1$6 = _interface;
  class ConfigElement extends interface_1$6.IElement {
    constructor(store2) {
      super();
      this.label = (0, dom_1$6.h)("label");
      this.wrapper = (0, dom_1$6.h)("div", { className: "config-wrapper" });
      this.key = "";
      this.store = store2;
    }
    get value() {
      return this.store.get(this.key, this.defaultValue);
    }
    set value(value) {
      this.provider.value = value;
      this.store.set(this.key, value);
    }
    connectedCallback() {
      var _a, _b, _c;
      switch (this.tag) {
        case "select": {
          this.provider = (0, dom_1$6.h)("select");
          const value = this.store.get(this.key, this.defaultValue);
          for (const item of this.options || []) {
            const option = ui_1$1.$ui.tooltip((0, dom_1$6.h)("option"));
            if (Array.isArray(item)) {
              option.value = item[0];
              option.textContent = (_a = item[1]) !== null && _a !== void 0 ? _a : item[0];
              if (item[2]) {
                option.title = item[2];
              }
              if (String(item[0]) === String(value)) {
                option.selected = true;
                option.toggleAttribute("selected");
              }
              this.provider.add(option);
            } else {
              option.value = item.value;
              option.textContent = (_b = item.label) !== null && _b !== void 0 ? _b : item.value;
              if (item.title) {
                option.title = item.title;
              }
              if (String(item.value) === String(value)) {
                option.selected = true;
                option.toggleAttribute("selected");
              }
              this.provider.add(option);
            }
          }
          this.provider.onchange = () => {
            this.store.set(this.key, this.provider.value);
          };
          break;
        }
        case "textarea": {
          this.provider = (0, dom_1$6.h)("textarea");
          this.provider.value = this.store.get(this.key, this.defaultValue);
          this.provider.onchange = () => {
            this.store.set(this.key, this.provider.value);
          };
          break;
        }
        default: {
          this.provider = (0, dom_1$6.h)("input");
          if (["checkbox", "radio"].some((t2) => {
            var _a2;
            return t2 === ((_a2 = this.attrs) === null || _a2 === void 0 ? void 0 : _a2.type);
          })) {
            this.provider.checked = this.store.get(this.key, this.defaultValue);
            const provider = this.provider;
            provider.onchange = () => {
              this.store.set(this.key, provider.checked);
            };
          } else {
            this.provider.value = this.store.get(this.key, this.defaultValue);
            this.provider.setAttribute("value", this.provider.value);
            this.provider.onchange = () => {
              const { min, max, type } = this.attrs || {};
              if (type === "number") {
                if (this.provider.value.trim() === "") {
                  this.provider.value = this.defaultValue;
                  this.store.set(this.key, this.defaultValue);
                  return;
                }
                const val = parseFloat(this.provider.value);
                const _min = min ? parseFloat(min) : void 0;
                const _max = max ? parseFloat(max) : void 0;
                if (_min && val < _min) {
                  this.provider.value = _min.toString();
                  this.store.set(this.key, parseFloat(this.provider.value));
                } else if (_max && val > _max) {
                  this.provider.value = _max.toString();
                  this.store.set(this.key, parseFloat(this.provider.value));
                } else {
                  this.store.set(this.key, val);
                }
              } else {
                this.store.set(this.key, this.provider.value);
              }
            };
          }
          break;
        }
      }
      if (this.enableForAttribute) {
        this.provider.setAttribute("id", this.key);
        this.label.setAttribute("for", this.key);
      }
      if (this.labelClassName) {
        this.label.className = this.labelClassName;
      }
      if (this.providerClassName) {
        this.provider.className = this.providerClassName;
      }
      if (this.elementClassName) {
        this.className = this.elementClassName;
      }
      this.wrapper.replaceChildren(this.provider);
      this.append(this.label, this.wrapper);
      for (const key in this.attrs) {
        if (key === "style") {
          Object.assign(this.provider.style, this.attrs[key]);
          continue;
        }
        if (Object.prototype.hasOwnProperty.call(this.attrs, key)) {
          Reflect.set(this.provider, key, Reflect.get(this.attrs, key));
        }
      }
      if (this.sync) {
        this.store.addChangeListener(this.key, (curr) => {
          this.provider.value = curr;
        });
      }
      ui_1$1.$ui.tooltip(this.provider);
      if (this.showIf) {
        let show_if = false;
        if (Array.isArray(this.showIf)) {
          if (typeof this.showIf[0] !== "string") {
            throw new Error("EUS Config.showIf first element must be a string");
          }
          const val = this.store.get(this.showIf[0], false) || false;
          const res = this.showIf[1].call(null, val, val, this.store);
          show_if = Boolean(res);
        } else {
          show_if = this.store.get(this.showIf, false) || false;
        }
        if (show_if) {
          this.style.display = "";
        } else {
          this.style.display = "none";
        }
        if (Array.isArray(this.showIf)) {
          if (typeof this.showIf[1] !== "function") {
            throw new Error("EUS Config.showIf second element must be a function");
          }
          this.store.addChangeListener(this.showIf[0], (curr, pre) => {
            if (this.isConnected) {
              if (this.showIf && Array.isArray(this.showIf)) {
                const res = this.showIf[1].call(null, curr, pre, this.store);
                if (res) {
                  this.style.display = "";
                } else {
                  this.style.display = "none";
                }
              }
            }
          });
        } else {
          this.store.addChangeListener(this.showIf, (curr) => {
            if (this.isConnected) {
              const res = Boolean(curr);
              if (res) {
                this.style.display = "";
              } else {
                this.style.display = "none";
              }
            }
          });
        }
      }
      (_c = this._onload) === null || _c === void 0 ? void 0 : _c.call(this.provider, this);
    }
  }
  config.ConfigElement = ConfigElement;
  var container = {};
  Object.defineProperty(container, "__esModule", { value: true });
  container.ContainerElement = void 0;
  const common_1$2 = common;
  const ui_1 = ui;
  const dom_1$5 = dom;
  const interface_1$5 = _interface;
  class ContainerElement extends interface_1$5.IElement {
    constructor() {
      super(...arguments);
      this.header = ui_1.$ui.tooltip((0, dom_1$5.h)("header-element", { title: "鑿滃崟锟?鍙嫋鍔ㄥ尯锟? }));
      this.body = (0, dom_1$5.h)("div", { className: "body", clientHeight: window.innerHeight / 2 });
      this.footer = (0, dom_1$5.h)("div", { className: "footer" });
    }
    connectedCallback() {
      this.append(this.header, this.body, this.footer);
      common_1$2.$.onresize(this, (cont) => {
        cont.body.style.maxHeight = window.innerHeight - this.header.clientHeight - 100 + "px";
        cont.body.style.maxWidth = window.innerWidth - 50 + "px";
      });
    }
  }
  container.ContainerElement = ContainerElement;
  var dropdown = {};
  Object.defineProperty(dropdown, "__esModule", { value: true });
  dropdown.DropdownElement = void 0;
  const interface_1$4 = _interface;
  const dom_1$4 = dom;
  class DropdownElement extends interface_1$4.IElement {
    constructor() {
      super(...arguments);
      this.triggerElement = (0, dom_1$4.h)("button");
      this.content = (0, dom_1$4.h)("div", { className: "dropdown-content" });
      this.trigger = "hover";
    }
    connectedCallback() {
      this.append(this.triggerElement, this.content);
      this.classList.add("dropdown");
      if (this.trigger === "click") {
        this.triggerElement.onclick = () => {
          this.content.classList.toggle("show");
        };
      } else {
        this.triggerElement.onmouseover = () => {
          this.content.classList.add("show");
        };
        this.triggerElement.onmouseout = () => {
          this.content.classList.remove("show");
        };
        this.content.onmouseover = () => {
          this.content.classList.add("show");
        };
        this.content.onmouseout = () => {
          this.content.classList.remove("show");
        };
      }
      this.content.onclick = () => {
        this.content.classList.remove("show");
      };
    }
  }
  dropdown.DropdownElement = DropdownElement;
  var header = {};
  Object.defineProperty(header, "__esModule", { value: true });
  header.HeaderElement = void 0;
  const interface_1$3 = _interface;
  class HeaderElement extends interface_1$3.IElement {
    connectedCallback() {
      this.append(this.visualSwitcher || "");
    }
  }
  header.HeaderElement = HeaderElement;
  var message = {};
  Object.defineProperty(message, "__esModule", { value: true });
  message.MessageElement = void 0;
  const dom_1$3 = dom;
  const interface_1$2 = _interface;
  class MessageElement extends interface_1$2.IElement {
    constructor() {
      super(...arguments);
      this.closer = (0, dom_1$3.h)("span", { className: "message-closer" }, "x");
      this.contentContainer = (0, dom_1$3.h)("span", { className: "message-content-container" });
      this.type = "info";
      this.content = "";
      this.closeable = true;
    }
    connectedCallback() {
      var _a;
      this.classList.add(this.type);
      if (typeof this.content === "string") {
        this.contentContainer.innerHTML = this.content;
      } else {
        this.contentContainer.append(this.content);
      }
      this.duration = Math.max((_a = this.duration) !== null && _a !== void 0 ? _a : 5, 0);
      this.append(this.contentContainer);
      if (this.closeable) {
        this.append(this.closer);
        this.closer.addEventListener("click", () => {
          var _a2;
          (_a2 = this.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(this);
          this.remove();
        });
      }
      if (this.duration) {
        setTimeout(() => {
          var _a2;
          (_a2 = this.onClose) === null || _a2 === void 0 ? void 0 : _a2.call(this);
          this.remove();
        }, this.duration * 1e3);
      }
    }
  }
  message.MessageElement = MessageElement;
  var modal$1 = {};
  var __awaiter$2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(modal$1, "__esModule", { value: true });
  modal$1.ModalElement = void 0;
  const common_1$1 = common;
  const dom_1$2 = dom;
  const tampermonkey_1 = tampermonkey;
  const interface_1$1 = _interface;
  class ModalElement extends interface_1$1.IElement {
    constructor() {
      super(...arguments);
      this._title = (0, dom_1$2.h)("div", { className: "modal-title" });
      this.body = (0, dom_1$2.h)("div", { className: "modal-body" });
      this.footerContainer = (0, dom_1$2.h)("div", { className: "modal-footer" });
      this.modalInput = (0, dom_1$2.h)("input", { className: "modal-input" });
      this.modalInputType = "input";
      this.type = "alert";
      this.content = "";
      this.inputDefaultValue = "";
      this.placeholder = "";
      this.modalStyle = {};
    }
    connectedCallback() {
      var _a;
      this.classList.add(this.type);
      Object.assign(this.style, this.modalStyle || {});
      const profile = (0, dom_1$2.h)("div", {
        innerText: this.profile || "寮圭獥鏉ヨ嚜: OCS " + (((_a = tampermonkey_1.$gm.getInfos()) === null || _a === void 0 ? void 0 : _a.script.version) || ""),
        className: "modal-profile"
      });
      this._title.innerText = this.title;
      this.body.append(typeof this.content === "string" ? (0, dom_1$2.h)("div", { innerHTML: this.content }) : this.content);
      if (this.modalInputType === "textarea") {
        this.modalInput = (0, dom_1$2.h)("textarea", { className: "modal-input", style: { height: "100px" } });
      }
      this.modalInput.placeholder = this.placeholder || "";
      this.modalInput.value = this.inputDefaultValue || "";
      this.append(profile, this._title, this.body, this.footerContainer);
      this.style.width = (this.width || 400) + "px";
      if (this.footer === void 0) {
        this.footerContainer.append(this.modalInput);
        if (this.cancelButton === void 0) {
          this.cancelButton = (0, dom_1$2.h)("button", { className: "modal-cancel-button" });
          this.cancelButton.innerText = this.cancelButtonText || "鍙栨秷";
          this.cancelButton.onclick = () => {
            var _a2, _b;
            (_a2 = this.onCancel) === null || _a2 === void 0 ? void 0 : _a2.call(this);
            (_b = this.onClose) === null || _b === void 0 ? void 0 : _b.call(this);
            this.remove();
          };
        }
        if (this.confirmButton === void 0) {
          this.confirmButton = (0, dom_1$2.h)("button", { className: "modal-confirm-button" });
          this.confirmButton.innerText = this.confirmButtonText || "纭畾";
          this.confirmButton.onclick = () => __awaiter$2(this, void 0, void 0, function* () {
            var _b, _c;
            if ((yield (_b = this.onConfirm) === null || _b === void 0 ? void 0 : _b.call(this, this.modalInput.value)) !== false) {
              this.remove();
              (_c = this.onClose) === null || _c === void 0 ? void 0 : _c.call(this, this.modalInput.value);
            }
          });
        }
        this.cancelButton && this.footerContainer.append(this.cancelButton);
        this.confirmButton && this.footerContainer.append(this.confirmButton);
        if (this.type === "simple") {
          this.footerContainer.remove();
        } else if (this.type === "prompt") {
          this.modalInput.focus();
        }
      } else {
        this.footerContainer.append(this.footer);
      }
      common_1$1.$.onresize(this.body, (modal2) => {
        this.body.style.maxHeight = window.innerHeight - 100 + "px";
        this.body.style.maxWidth = window.innerWidth - 50 + "px";
      });
    }
  }
  modal$1.ModalElement = ModalElement;
  var script_panel = {};
  Object.defineProperty(script_panel, "__esModule", { value: true });
  script_panel.ScriptPanelElement = void 0;
  const dom_1$1 = dom;
  const interface_1 = _interface;
  class ScriptPanelElement extends interface_1.IElement {
    constructor() {
      super(...arguments);
      this.separator = (0, dom_1$1.h)("div", { className: "separator" });
      this.notesContainer = (0, dom_1$1.h)("div", { className: "notes card" });
      this.configsContainer = (0, dom_1$1.h)("div", { className: "configs-container card" });
      this.body = (0, dom_1$1.h)("div", { className: "script-panel-body" });
      this.lockWrapper = (0, dom_1$1.h)("div", { className: "lock-wrapper" });
    }
    connectedCallback() {
      this.separator.innerText = this.name || "";
      this.append(this.separator);
      this.append(this.notesContainer);
      this.append(this.configsContainer);
      this.append(this.body);
    }
  }
  script_panel.ScriptPanelElement = ScriptPanelElement;
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.definedCustomElements = exports3.ScriptPanelElement = exports3.ModalElement = exports3.MessageElement = exports3.HeaderElement = exports3.ContainerElement = exports3.ConfigElement = void 0;
    const config_1 = config;
    const container_1 = container;
    const dropdown_1 = dropdown;
    const header_1 = header;
    const message_1 = message;
    const modal_1 = modal$1;
    const script_panel_1 = script_panel;
    var config_2 = config;
    Object.defineProperty(exports3, "ConfigElement", { enumerable: true, get: function() {
      return config_2.ConfigElement;
    } });
    var container_2 = container;
    Object.defineProperty(exports3, "ContainerElement", { enumerable: true, get: function() {
      return container_2.ContainerElement;
    } });
    var header_2 = header;
    Object.defineProperty(exports3, "HeaderElement", { enumerable: true, get: function() {
      return header_2.HeaderElement;
    } });
    var message_2 = message;
    Object.defineProperty(exports3, "MessageElement", { enumerable: true, get: function() {
      return message_2.MessageElement;
    } });
    var modal_2 = modal$1;
    Object.defineProperty(exports3, "ModalElement", { enumerable: true, get: function() {
      return modal_2.ModalElement;
    } });
    var script_panel_2 = script_panel;
    Object.defineProperty(exports3, "ScriptPanelElement", { enumerable: true, get: function() {
      return script_panel_2.ScriptPanelElement;
    } });
    exports3.definedCustomElements = [
      config_1.ConfigElement,
      container_1.ContainerElement,
      header_1.HeaderElement,
      modal_1.ModalElement,
      message_1.MessageElement,
      script_panel_1.ScriptPanelElement,
      dropdown_1.DropdownElement
    ];
  })(elements);
  var __awaiter$1 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __rest = commonjsGlobal && commonjsGlobal.__rest || function(s, e) {
    var t2 = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t2[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t2[p[i]] = s[p[i]];
      }
    return t2;
  };
  Object.defineProperty(customWindow, "__esModule", { value: true });
  customWindow.modal = customWindow.CustomWindow = void 0;
  const _1 = interfaces;
  const elements_1$1 = elements;
  const utils_1 = utils;
  const start_1 = start$1;
  const minimizeSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>';
  const expandSvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/></svg>';
  class CustomWindow {
    constructor(projects, inputStoreProvider, config2) {
      this.messageContainer = (0, utils_1.h)("div", { className: "message-container" });
      this.extraMenuBar = (0, utils_1.h)("div", { className: "extra-menu-bar" });
      this.defaults = {
        urls: (urls) => urls && urls.length ? urls : [location.href],
        panelName: (name) => name || this.config.render.defaultPanelName || ""
      };
      this.projects = projects;
      this.inputStoreProvider = inputStoreProvider;
      this.config = config2;
      handleLowLevelBrowser();
      utils_1.$.loadCustomElements(elements_1$1.definedCustomElements);
      this.wrapper = (0, utils_1.h)("div");
      this.root = this.wrapper.attachShadow({ mode: "closed" });
      this.container = (0, utils_1.h)("container-element");
      this.root.append(this.container);
      const styles = config2.render.styles.map((s) => (0, utils_1.h)("style", s));
      this.container.append(...styles, this.messageContainer);
      const handlePosition = () => {
        const pos = config2.store.getPosition();
        if (pos.x > document.documentElement.clientWidth || pos.x < 0) {
          config2.store.setPosition(10, 10);
        }
        if (pos.y > document.documentElement.clientHeight || pos.y < 0) {
          config2.store.setPosition(10, 10);
        }
        this.container.style.left = pos.x + "px";
        this.container.style.top = pos.y + "px";
        const positionHandler = () => {
          config2.store.setPosition(this.container.offsetLeft, this.container.offsetTop);
        };
        (0, utils_1.enableElementDraggable)(this.container.header, this.container, positionHandler);
        (0, utils_1.enableElementTouchDraggable)(this.container.header, this.container, positionHandler);
      };
      const handleVisible = () => {
        window.addEventListener("click", (e) => {
          if (e.detail === Math.max(config2.render.switchPoint, 3)) {
            this.container.style.top = e.y + "px";
            this.container.style.left = e.x + "px";
            config2.store.setPosition(e.x, e.y);
            this.setVisual("normal");
          }
        });
      };
      const initCorsModalSystem = () => {
        _1.cors.on("modal", (args) => __awaiter$1(this, void 0, void 0, function* () {
          const [type, _attrs] = args || [];
          return new Promise((resolve, reject) => {
            const attrs = _attrs;
            attrs.onCancel = () => resolve("");
            attrs.onConfirm = resolve;
            attrs.onClose = resolve;
            modal(type, attrs);
          });
        }));
      };
      const initCorsMessageSystem = () => {
        _1.cors.on("message", (args) => __awaiter$1(this, void 0, void 0, function* () {
          const [type, attrs] = args || [];
          console.log("message", type, attrs);
          this.message(type, attrs);
        }));
      };
      window.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === config2.render.switchKey) {
          e.stopPropagation();
          e.preventDefault();
          this.setVisual(config2.store.getVisual() === "hidden" ? "normal" : "hidden");
        }
      }, { capture: true });
      handleVisible();
      this.setVisual(config2.store.getVisual());
      (() => __awaiter$1(this, void 0, void 0, function* () {
        const urls = yield config2.store.getRenderURLs();
        const currentPanelName = yield config2.store.getCurrentPanelName();
        yield this.rerender(this.defaults.urls(urls), this.defaults.panelName(currentPanelName));
      }))();
      initCorsModalSystem();
      initCorsMessageSystem();
      handlePosition();
      this.setFontSize(config2.render.fontsize);
    }
    rerender(urls, currentPanelName) {
      return __awaiter$1(this, void 0, void 0, function* () {
        this.initHeader(urls, currentPanelName);
        yield this.renderBody(currentPanelName);
      });
    }
    initHeader(urls, currentPanelName) {
      const profile = utils_1.$ui.tooltip((0, utils_1.h)("div", { className: "profile", title: "鑿滃崟鏍忥紙鍙嫋鍔ㄥ尯鍩燂級" }, this.config.render.title || "鏃犳爣锟?));
      const scriptDropdowns = [];
      for (const project2 of this.projects) {
        const dropdown2 = (0, utils_1.h)("dropdown-element");
        let selected = false;
        const options = [];
        const scripts = utils_1.$.getMatchedScripts([project2], urls).filter((s) => !s.hideInPanel);
        if (scripts.length) {
          for (const key in project2.scripts) {
            if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
              const script2 = project2.scripts[key];
              if (!script2.hideInPanel) {
                const optionSelected = isCurrentPanel(project2.name, script2, currentPanelName);
                const option = (0, utils_1.h)("div", { className: "dropdown-option" }, script2.name);
                if (optionSelected) {
                  option.classList.add("active");
                }
                if (selected !== true && optionSelected) {
                  selected = true;
                }
                option.onclick = () => __awaiter$1(this, void 0, void 0, function* () {
                  yield this.config.store.setCurrentPanelName(project2.name + "-" + script2.name);
                });
                options.push(option);
              }
            }
          }
          if (selected) {
            dropdown2.classList.add("active");
          }
          dropdown2.triggerElement = (0, utils_1.h)("div", { className: "dropdown-trigger-element" }, project2.name);
          dropdown2.triggerElement.style.padding = "0px 8px";
          dropdown2.content.append(...options);
          scriptDropdowns.push(dropdown2);
        }
      }
      const isMinimize = () => this.config.store.getVisual() === "minimize";
      const visualSwitcher = utils_1.$ui.tooltip((0, utils_1.h)("div", {
        className: "switch ",
        title: isMinimize() ? "鐐瑰嚮灞曞紑绐楀彛" : "鐐瑰嚮鏈€灏忓寲绐楀彛",
        innerHTML: isMinimize() ? expandSvg : minimizeSvg,
        onclick: () => {
          this.setVisual(isMinimize() ? "normal" : "minimize");
          visualSwitcher.title = isMinimize() ? "鐐瑰嚮灞曞紑绐楀彛" : "鐐瑰嚮鏈€灏忓寲绐楀彛";
          visualSwitcher.innerHTML = isMinimize() ? expandSvg : minimizeSvg;
        }
      }));
      this.container.header.visualSwitcher = visualSwitcher;
      this.container.header.replaceChildren();
      this.container.header.append((0, utils_1.h)("div", { style: { width: "100%" } }, [
        (0, utils_1.h)("div", { style: { display: "flex", width: "100%" } }, [
          profile,
          ...scriptDropdowns,
          this.container.header.visualSwitcher || ""
        ]),
        (0, utils_1.h)("div", { style: { display: "flex", width: "100%" } }, [this.extraMenuBar])
      ]));
    }
    renderBody(currentPanelName) {
      var _a;
      return __awaiter$1(this, void 0, void 0, function* () {
        for (const project2 of this.projects) {
          for (const key in project2.scripts) {
            if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
              const script2 = project2.scripts[key];
              if (isCurrentPanel(project2.name, script2, currentPanelName)) {
                const panel = utils_1.$ui.scriptPanel(script2, this.inputStoreProvider);
                script2.projectName = project2.name;
                script2.panel = panel;
                script2.header = this.container.header;
                this.container.body.replaceChildren(panel);
                (_a = script2.onrender) === null || _a === void 0 ? void 0 : _a.call(script2, { panel, header: this.container.header });
                script2.emit("render", { panel, header: this.container.header });
              }
            }
          }
        }
      });
    }
    setFontSize(fontsize) {
      this.container.style.font = `${fontsize}px  Menlo, Monaco, Consolas, 'Courier New', monospace`;
    }
    setVisual(value) {
      this.container.className = "";
      if (value === "minimize") {
        this.container.classList.add("minimize");
      } else if (value === "hidden") {
        this.container.classList.add("hidden");
      } else {
        this.container.classList.add("normal");
      }
      this.config.store.setVisual(value);
    }
    changeRenderURLs(urls) {
      return __awaiter$1(this, void 0, void 0, function* () {
        const currentPanelName = yield this.config.store.getCurrentPanelName();
        yield this.rerender(this.defaults.urls(urls), this.defaults.panelName(currentPanelName));
      });
    }
    changePanel(currentPanelName) {
      return __awaiter$1(this, void 0, void 0, function* () {
        const urls = (yield this.config.store.getRenderURLs()) || [location.href];
        yield this.rerender(this.defaults.urls(urls), this.defaults.panelName(currentPanelName));
      });
    }
    pin(script2) {
      return __awaiter$1(this, void 0, void 0, function* () {
        if (script2.projectName) {
          yield this.config.store.setCurrentPanelName(`${script2.projectName}-${script2.name}`);
        } else if (script2.namespace) {
          yield this.config.store.setCurrentPanelName(script2.namespace);
        } else {
          console.warn("[ERROR]", `${script2.name} 鏃犳硶缃《锟?projectName 锟?namespace 閮戒负 undefined`);
        }
      });
    }
    minimize() {
      this.setVisual("minimize");
    }
    normal() {
      this.setVisual("normal");
    }
    hidden() {
      this.setVisual("hidden");
    }
    message(type, attrs) {
      if (typeof attrs === "string") {
        attrs = { content: attrs };
      }
      const message2 = (0, utils_1.h)("message-element", Object.assign({ type }, attrs));
      this.messageContainer.append(message2);
      return message2;
    }
    menu(label, config2) {
      return __awaiter$1(this, void 0, void 0, function* () {
        this.extraMenuBar.style.display = "flex";
        const btn = (0, utils_1.h)("button", label);
        btn.addEventListener("click", () => {
          if (config2.scriptPanelLink) {
            this.pin(config2.scriptPanelLink).then(() => {
              this.normal();
            }).catch(console.error);
          }
        });
        if (config2.scriptPanelLink) {
          const full_name = (config2.scriptPanelLink.projectName ? config2.scriptPanelLink.projectName + " -> " : "") + config2.scriptPanelLink.name;
          btn.title = "蹇嵎璺宠浆锟? + full_name;
          btn.setAttribute("data-name", (config2.scriptPanelLink.projectName + "-" + config2.scriptPanelLink.name).replace(/\s/g, "_"));
          btn.classList.add("script-panel-link");
        }
        this.extraMenuBar.append(utils_1.$ui.tooltip(btn));
        const name = yield utils_1.$store.getTab(utils_1.$const.TAB_CURRENT_PANEL_NAME);
        if (config2.scriptPanelLink) {
          if (isCurrentPanel(config2.scriptPanelLink.projectName, config2.scriptPanelLink, name)) {
            this.extraMenuBar.querySelectorAll(".script-panel-link").forEach((el) => el.classList.remove("active"));
            btn.classList.add("active");
          }
        }
        return btn;
      });
    }
    mount(parent) {
      parent.children[utils_1.$.random(0, parent.children.length - 1)].after(this.wrapper);
    }
  }
  customWindow.CustomWindow = CustomWindow;
  function isCurrentPanel(projectName, script2, currentPanelName) {
    return projectName + "-" + script2.name === currentPanelName || script2.namespace === currentPanelName;
  }
  function handleLowLevelBrowser() {
    if (typeof Element.prototype.replaceChildren === "undefined") {
      Element.prototype.replaceChildren = function(...nodes) {
        this.innerHTML = "";
        for (const node of nodes) {
          this.append(node);
        }
      };
    }
  }
  function modal(type, attrs, parent = (start_1.$win === null || start_1.$win === void 0 ? void 0 : start_1.$win.container) || utils_1.$elements.root || document.body) {
    const { maskCloseable = true, onConfirm, onCancel, onClose, notification: notify, notificationOptions, duration } = attrs, _attrs = __rest(attrs, ["maskCloseable", "onConfirm", "onCancel", "onClose", "notification", "notificationOptions", "duration"]);
    if (notify) {
      utils_1.$gm.notification(typeof _attrs.content === "string" ? _attrs.content : _attrs.content.textContent || "", notificationOptions);
    }
    const wrapper = (0, utils_1.h)("div", { className: "modal-wrapper" }, (wrapper2) => {
      const modal2 = (0, utils_1.h)("modal-element", Object.assign({
        onConfirm(val) {
          return __awaiter$1(this, void 0, void 0, function* () {
            const isClose = yield onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm.apply(modal2, [val]);
            if (isClose !== false) {
              wrapper2.remove();
            }
            return isClose;
          });
        },
        onCancel() {
          onCancel === null || onCancel === void 0 ? void 0 : onCancel.apply(modal2);
          wrapper2.remove();
        },
        onClose(val) {
          onClose === null || onClose === void 0 ? void 0 : onClose.apply(modal2, [val]);
          wrapper2.remove();
        },
        type
      }, _attrs));
      wrapper2.append(modal2);
      modal2.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      if (maskCloseable) {
        wrapper2.addEventListener("click", () => {
          onClose === null || onClose === void 0 ? void 0 : onClose.apply(modal2);
          wrapper2.remove();
        });
      }
    });
    if (duration) {
      setTimeout(() => {
        wrapper.remove();
      }, duration * 1e3);
    }
    parent.append(wrapper);
    return wrapper;
  }
  customWindow.modal = modal;
  var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(start$1, "__esModule", { value: true });
  start$1.addFunctionEventListener = start$1.start = start$1.$win = void 0;
  const custom_window_1 = customWindow;
  const common_1 = common;
  const const_1 = _const;
  const dom_1 = dom;
  const elements_1 = elements$1;
  const store_1 = store;
  const debounce_1 = __importDefault(debounce_1$1);
  let mounted = false;
  function start(startConfig) {
    return __awaiter(this, void 0, void 0, function* () {
      startConfig.projects = startConfig.projects.map((p) => {
        for (const key in p.scripts) {
          if (Object.prototype.hasOwnProperty.call(p.scripts, key)) {
            p.scripts[key].cfg = common_1.$.createConfigProxy(p.scripts[key]);
          }
        }
        return p;
      });
      const scripts = common_1.$.getMatchedScripts(startConfig.projects, [location.href]).sort((a, b) => b.priority - a.priority);
      scripts.forEach((script2) => {
        var _a;
        script2.startConfig = startConfig;
        script2.emit("start", startConfig);
        (_a = script2.onstart) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
      });
      const uid = yield store_1.$store.getTab(const_1.$const.TAB_UID);
      if (uid === void 0) {
        yield store_1.$store.setTab(const_1.$const.TAB_UID, common_1.$.uuid());
      }
      const urls = yield store_1.$store.getTab(const_1.$const.TAB_URLS);
      yield store_1.$store.setTab(const_1.$const.TAB_URLS, Array.from(new Set((urls || []).concat(location.href))));
      let active = false;
      if (document.readyState === "interactive") {
        active = true;
        mount(startConfig);
        scripts.forEach((script2) => {
          var _a;
          return (_a = script2.onactive) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
        });
      } else if (document.readyState === "complete") {
        mount(startConfig);
        scripts.forEach((script2) => {
          var _a;
          return (_a = script2.onactive) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
        });
        scripts.forEach((script2) => {
          var _a;
          return (_a = script2.oncomplete) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
        });
      }
      document.addEventListener("readystatechange", () => {
        mount(startConfig);
        if (document.readyState === "interactive" && active === false) {
          scripts.forEach((script2) => {
            var _a;
            script2.emit("active", startConfig);
            (_a = script2.onactive) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
          });
        }
        if (document.readyState === "complete") {
          scripts.forEach((script2) => {
            var _a;
            script2.emit("complete");
            (_a = script2.oncomplete) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
          });
        }
      });
      window.addEventListener("hashchange", () => {
        scripts.forEach((script2) => {
          var _a;
          script2.emit("hashchange", startConfig);
          (_a = script2.onhashchange) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig);
        });
      });
      history.pushState = addFunctionEventListener(history, "pushState");
      history.replaceState = addFunctionEventListener(history, "replaceState");
      window.addEventListener("pushState", () => {
        scripts.forEach((script2) => {
          var _a;
          script2.emit("historychange", "push", startConfig);
          (_a = script2.onhistorychange) === null || _a === void 0 ? void 0 : _a.call(script2, "push", startConfig);
        });
      });
      window.addEventListener("replaceState", () => {
        scripts.forEach((script2) => {
          var _a;
          script2.emit("historychange", "replace", startConfig);
          (_a = script2.onhistorychange) === null || _a === void 0 ? void 0 : _a.call(script2, "replace", startConfig);
        });
      });
      window.addEventListener("beforeunload", (e) => {
        var _a;
        let prevent;
        for (const script2 of scripts) {
          script2.emit("beforeunload");
          if ((_a = script2.onbeforeunload) === null || _a === void 0 ? void 0 : _a.call(script2, startConfig)) {
            prevent = true;
          }
        }
        if (prevent) {
          e.preventDefault();
          e.returnValue = true;
          return true;
        }
      });
    });
  }
  start$1.start = start;
  function addFunctionEventListener(obj, type) {
    const origin = obj[type];
    return function(...args) {
      const res = origin.apply(this, args);
      const e = new Event(type.toString());
      e.arguments = args;
      window.dispatchEvent(e);
      return res;
    };
  }
  start$1.addFunctionEventListener = addFunctionEventListener;
  function mount(startConfig) {
    return __awaiter(this, void 0, void 0, function* () {
      if (mounted === true) {
        return;
      }
      mounted = true;
      if (startConfig === void 0 || startConfig.renderConfig === void 0) {
        console.warn("the script will not have ui because the renderConfig is not defined.");
        return;
      }
      if (self === top) {
        const { projects, renderConfig } = startConfig;
        if (typeof renderConfig.renderScript === "undefined") {
          console.warn("the script will not have ui because the RenderScript is not defined.");
          return;
        }
        const scripts = common_1.$.getMatchedScripts(projects, [location.href]).filter((s) => !!s.hideInPanel === false);
        if (scripts.length <= 0) {
          return;
        }
        const RenderScript2 = renderConfig.renderScript;
        const win = new custom_window_1.CustomWindow(startConfig.projects, store_1.$store, {
          render: {
            title: renderConfig.title,
            styles: renderConfig.styles,
            defaultPanelName: renderConfig.defaultPanelName,
            fontsize: RenderScript2.cfg.fontsize,
            switchPoint: RenderScript2.cfg.switchPoint,
            switchKey: "o"
          },
          store: {
            getPosition: () => {
              return { x: RenderScript2.cfg.x, y: RenderScript2.cfg.y };
            },
            setPosition: (x, y) => {
              RenderScript2.cfg.x = x;
              RenderScript2.cfg.y = y;
            },
            getVisual: () => {
              return RenderScript2.cfg.visual;
            },
            setVisual: (size) => {
              RenderScript2.cfg.visual = size;
            },
            getRenderURLs() {
              return __awaiter(this, void 0, void 0, function* () {
                return yield store_1.$store.getTab(const_1.$const.TAB_URLS);
              });
            },
            setRenderURLs(urls) {
              return __awaiter(this, void 0, void 0, function* () {
                return yield store_1.$store.setTab(const_1.$const.TAB_URLS, urls);
              });
            },
            getCurrentPanelName() {
              return __awaiter(this, void 0, void 0, function* () {
                return yield store_1.$store.getTab(const_1.$const.TAB_CURRENT_PANEL_NAME);
              });
            },
            setCurrentPanelName(name) {
              return __awaiter(this, void 0, void 0, function* () {
                return yield store_1.$store.setTab(const_1.$const.TAB_CURRENT_PANEL_NAME, name);
              });
            }
          }
        });
        RenderScript2.onConfigChange("fontsize", (fs) => {
          win.setFontSize(fs);
        });
        store_1.$store.addTabChangeListener(const_1.$const.TAB_URLS, (0, debounce_1.default)((curr, pre) => {
          if (JSON.stringify(curr) === JSON.stringify(pre)) {
            return;
          }
          win.changeRenderURLs(curr);
        }, 2e3));
        store_1.$store.addTabChangeListener(const_1.$const.TAB_CURRENT_PANEL_NAME, (curr, pre) => {
          if (curr === pre) {
            return;
          }
          win.changePanel(curr);
          updateMenusState(win, curr);
        });
        win.mount(document.body);
        elements_1.$elements.tooltipContainer = (0, dom_1.h)("div", { className: "tooltip-container" });
        elements_1.$elements.root = win.root;
        win.container.append(elements_1.$elements.tooltipContainer);
        start$1.$win = win;
      }
    });
  }
  function updateMenusState(win, name) {
    var _a;
    win.root.querySelectorAll(".extra-menu-bar .script-panel-link").forEach((el) => el.classList.remove("active"));
    (_a = win.root.querySelector('.extra-menu-bar [data-name="' + name.replace(/\s/g, "_") + '"]')) === null || _a === void 0 ? void 0 : _a.classList.add("active");
  }
  var render = {};
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.$menu = exports3.$message = exports3.$modal = exports3.createRenderScript = void 0;
    const script_1 = script;
    const ui_12 = ui;
    const dom_12 = dom;
    const custom_window_12 = customWindow;
    const start_12 = start$1;
    const interfaces_1 = interfaces;
    const createRenderScript = (config2) => new script_1.Script({
      name: (config2 === null || config2 === void 0 ? void 0 : config2.name) || "绐楀彛璁剧疆",
      matches: (config2 === null || config2 === void 0 ? void 0 : config2.matches) || [["鎵€锟?, /.*/]],
      namespace: "render.panel",
      configs: {
        notes: {
          defaultValue: ui_12.$ui.notes([
            [
              "濡傛灉闇€瑕侀殣钘忔暣涓獥鍙ｏ紝鍙互鐐瑰嚮涓嬫柟闅愯棌鎸夐挳锟?,
              "闅愯棌鍚庡彲浠ュ揩閫熶笁鍑诲睆骞曚腑鐨勪换鎰忓湴锟?,
              "鏉ラ噸鏂板湪榧犳爣浣嶇疆鏄剧ず绐楀彛锟?
            ],
            "绐楀彛杩炵画鐐瑰嚮鏄剧ず鐨勬鏁板彲浠ヨ嚜瀹氫箟锛岄粯璁や负涓夋",
            ["绐楀彛蹇嵎閿垪琛細", "ctrl + o : 闅愯棌/鎵撳紑 闈㈡澘"]
          ]).outerHTML
        },
        x: { defaultValue: window.innerWidth * 0.1 },
        y: { defaultValue: window.innerWidth * 0.1 },
        visual: { defaultValue: "normal" },
        firstCloseAlert: {
          defaultValue: true
        },
        fontsize: {
          label: "瀛椾綋澶у皬锛堝儚绱狅級",
          attrs: { type: "number", min: 12, max: 24, step: 1 },
          defaultValue: 14
        },
        switchPoint: {
          label: "绐楀彛鏄剧ず杩炵偣锛堟鏁帮級",
          attrs: {
            type: "number",
            min: 3,
            max: 10,
            step: 1,
            title: "璁剧疆褰撹繛缁偣鍑诲睆锟?N 娆℃椂锛屽彲浠ヨ繘琛岄潰鏉跨殑 闅愯棌/鏄剧ず 鍒囨崲锛岄粯璁よ繛缁偣鍑诲睆骞曚笁锟?
          },
          defaultValue: 3
        }
      },
      methods() {
        return {
          pin: (script2) => start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.pin(script2),
          minimize: () => start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.minimize(),
          setPosition: (x, y) => {
            if (start_12.$win) {
              start_12.$win.config.store.setPosition(x, y);
              start_12.$win.container.style.left = x + "px";
              start_12.$win.container.style.top = y + "px";
            }
          },
          normal: () => {
            start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.normal();
          }
        };
      },
      onrender({ panel }) {
        const closeBtn = (0, dom_12.h)("button", { className: "base-style-button" }, "闅愯棌绐楀彛");
        closeBtn.onclick = () => {
          if (this.cfg.firstCloseAlert) {
            exports3.$modal.confirm({
              content: ui_12.$ui.notes([
                "闅愯棌鑴氭湰椤甸潰鍚庯紝蹇€熺偣鍑婚〉闈笁涓嬶紙鍙互鍦ㄦ偓娴獥璁剧疆涓皟鏁存鏁帮級鍗冲彲閲嶆柊鏄剧ず鑴氭湰銆傚鏋滀笁涓嬫棤鏁堬紝鍙互灏濊瘯鍒犻櫎鑴氭湰閲嶆柊瀹夎锟?,
                "璇风‘璁ゆ槸鍚﹀叧闂€傦紙姝ゅ悗涓嶅啀鏄剧ず姝ゅ脊绐楋級"
              ]),
              onConfirm: () => {
                start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.hidden();
                this.cfg.firstCloseAlert = false;
              }
            });
          } else {
            start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.hidden();
          }
        };
        panel.body.replaceChildren((0, dom_12.h)("hr"), closeBtn);
      }
    });
    exports3.createRenderScript = createRenderScript;
    function _modal(type, attrs, parent) {
      if (self === top) {
        return (0, custom_window_12.modal)(type, attrs, parent);
      } else {
        interfaces_1.cors.emit("modal", [type, attrs], (args) => {
          var _a, _b, _c;
          if (args) {
            (_a = attrs.onConfirm) === null || _a === void 0 ? void 0 : _a.call(attrs, args);
          } else {
            (_b = attrs.onCancel) === null || _b === void 0 ? void 0 : _b.call(attrs);
          }
          (_c = attrs.onClose) === null || _c === void 0 ? void 0 : _c.call(attrs, args);
        });
      }
    }
    exports3.$modal = {
      confirm: (attrs, parent) => _modal("confirm", attrs, parent),
      alert: (attrs, parent) => _modal("alert", attrs, parent),
      prompt: (attrs, parent) => _modal("prompt", attrs, parent),
      simple: (attrs, parent) => _modal("simple", attrs, parent)
    };
    function _message(type, attrs) {
      if (self === top) {
        return start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.message(type, attrs);
      } else {
        if (typeof attrs === "string") {
          attrs = { content: attrs };
        } else if (typeof attrs.content !== "string") {
          attrs.content = attrs.content.innerHTML;
        }
        interfaces_1.cors.emit("message", [type, attrs]);
      }
    }
    exports3.$message = {
      info: (attrs) => _message("info", attrs),
      success: (attrs) => _message("success", attrs),
      warn: (attrs) => _message("warn", attrs),
      error: (attrs) => _message("error", attrs)
    };
    function $menu(label, config2) {
      if (self !== top) {
        return;
      }
      return start_12.$win === null || start_12.$win === void 0 ? void 0 : start_12.$win.menu(label, config2);
    }
    exports3.$menu = $menu;
  })(render);
  (function(exports3) {
    var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports4) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports4, p))
          __createBinding(exports4, m, p);
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.start = void 0;
    var start_12 = start$1;
    Object.defineProperty(exports3, "start", { enumerable: true, get: function() {
      return start_12.start;
    } });
    __exportStar(utils, exports3);
    __exportStar(render, exports3);
    __exportStar(elements, exports3);
    __exportStar(interfaces, exports3);
  })(lib);
  const ListOfActions = [
    "click",
    "check",
    "dblclick",
    "bringToFront",
    "dragAndDrop",
    "fill",
    "focus",
    "hover",
    "screenshot",
    "selectOption",
    "setInputFiles",
    "tap",
    "press",
    "reload",
    "waitForRequest",
    "waitForResponse",
    "waitForSelector",
    "keyboard.type",
    "keyboard.press",
    "mouse.wheel",
    "mouse.click",
    "mouse.dblclick",
    "mouse.down",
    "mouse.up",
    "mouse.move"
  ];
  const mouseIdleRequireActions = [
    "click",
    "dblclick",
    "dragAndDrop",
    "fill",
    "hover",
    "tap",
    "press",
    "keyboard.type",
    "keyboard.press",
    "mouse.wheel",
    "mouse.click",
    "mouse.dblclick",
    "mouse.down",
    "mouse.up",
    "mouse.move"
  ];
  class RemotePlaywright {
    static async getRemotePage(show_debug_cursor, logger) {
      if (this.currentPage) {
        return this.currentPage;
      }
      if (!this.authToken) {
        try {
          this.authToken = await request("http://localhost:15319/get-actions-key", {
            type: "GM_xmlhttpRequest",
            method: "get",
            responseType: "text"
          });
          this.currentPage = this.createRemotePage(this.authToken, { show_debug_cursor, logger });
          return this.currentPage;
        } catch (e) {
          console.log(e);
          return void 0;
        }
      } else {
        this.currentPage = this.createRemotePage(this.authToken, { show_debug_cursor, logger });
        return this.currentPage;
      }
    }
    static createRemotePage(authToken, configs) {
      const page = /* @__PURE__ */ Object.create({});
      configs = configs || {};
      configs.logger = configs.logger || console.debug;
      for (const property of ListOfActions) {
        Reflect.set(page, property, async (...args) => {
          var _a, _b, _c;
          let data;
          if (mouseIdleRequireActions.includes(property)) {
            await waitForMouseIdle();
          }
          if (property === "click") {
            if (args[0] instanceof Element) {
              const el = args[0];
              const options = args[1] || {};
              await scrollToElement(el);
              await $.sleep(500);
              const rect = el.getBoundingClientRect();
              const elFromPoint = (_a = lib.$elements.root) == null ? void 0 : _a.elementFromPoint(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
              );
              if (elFromPoint && lib.$elements.root && lib.$elements.root.contains(elFromPoint)) {
                const panel = lib.$elements.root.querySelector("container-element");
                if (panel) {
                  lib.$message.info({ content: "妫€娴嬪埌鑴氭湰闃绘尅鐐瑰嚮浣嶇疆锛屽凡鑷姩绉诲紑", duration: 2 });
                  await $.transition(panel, "left", 0.1, rect.left + rect.width / 2 + 100 + "px", { reset_ms: 1 });
                }
              }
              if (configs == null ? void 0 : configs.show_debug_cursor) {
                showMousePointer(el);
              }
              data = {
                page: window.location.href,
                property: "mouse.click",
                args: [
                  rect.left + rect.width / 2,
                  rect.top + rect.height / 2,
                  {
                    button: options.button,
                    clickCount: options.clickCount,
                    delay: options.delay
                  }
                ]
              };
            } else if (typeof args[0] === "string") {
              const el = document.querySelector(args[0]);
              if (el) {
                await scrollToElement(el);
                if (configs == null ? void 0 : configs.show_debug_cursor) {
                  showMousePointer(el);
                }
              }
            }
          }
          if (!data) {
            data = { page: window.location.href, property, args };
          }
          (_b = configs == null ? void 0 : configs.logger) == null ? void 0 : _b.call(configs, "[RP]: ", JSON.stringify(data));
          try {
            const res = await request("/ocs-script-actions", {
              type: "fetch",
              method: "post",
              responseType: ["waitForRequest", "waitForResponse", "reload"].includes(property) ? "json" : "text",
              headers: {
                "auth-token": authToken
              },
              data
            });
            return res;
          } catch (e) {
            (_c = configs == null ? void 0 : configs.logger) == null ? void 0 : _c.call(configs, "[RP-ERROR]: ", JSON.stringify(data));
            return void 0;
          }
        });
      }
      console.log(page);
      return page;
    }
  }
  RemotePlaywright.authToken = "";
  RemotePlaywright.currentPage = void 0;
  function scrollToElement(el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    return $.sleep(200);
  }
  function showMousePointer(el) {
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const div = document.createElement("div");
      div.textContent = "";
      div.style.position = "fixed";
      div.style.zIndex = "99999";
      div.style.width = "20px";
      div.style.height = "20px";
      div.style.border = "2px solid red";
      div.style.borderRadius = "50%";
      div.style.left = rect.left + rect.width / 2 - 11 + "px";
      div.style.top = rect.top + rect.height / 2 - 11 + "px";
      document.body.append(div);
      setTimeout(() => {
        div.remove();
      }, 500);
    }, 100);
  }
  function waitForMouseIdle(timeout = 200) {
    return new Promise((resolve) => {
      let timer;
      const default_timer = setTimeout(() => {
        window.removeEventListener("mousemove", onMouseMove);
        resolve();
      }, timeout);
      function onMouseMove() {
        clearTimeout(default_timer);
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          window.removeEventListener("mousemove", onMouseMove);
          resolve();
        }, timeout);
      }
      window.addEventListener("mousemove", onMouseMove);
    });
  }
  function defaultWorkTypeResolver(ctx) {
    function count(selector) {
      let c = 0;
      for (const option of ctx.elements.options || []) {
        if ((option == null ? void 0 : option.querySelector(selector)) !== null) {
          c++;
        }
      }
      return c;
    }
    return count('[type="radio"]') === 2 ? "judgement" : count('[type="radio"]') > 2 ? "single" : count('[type="checkbox"]') > 2 ? "multiple" : count("textarea") >= 1 ? "completion" : void 0;
  }
  function isPlainAnswer(answer) {
    answer = answer.trim();
    if (answer.length > 8 || !/[A-Z]/.test(answer)) {
      return false;
    }
    const counter = {};
    let min = 0;
    for (let i = 0; i < answer.length; i++) {
      if (answer.charCodeAt(i) < min) {
        return false;
      }
      min = answer.charCodeAt(i);
      counter[min] = (counter[min] || 0) + 1;
    }
    for (const key in counter) {
      if (counter[key] !== 1) {
        return false;
      }
    }
    return true;
  }
  function resolvePlainAnswer(answer) {
    const resolve = answer.trim().replace(/[,锛岋拷?#]/g, "").trim();
    if (isPlainAnswer(resolve)) {
      return resolve;
    }
  }
  function splitAnswer(answer, separators = ["===", "#", "---", "###", "|", ";", "锟?]) {
    answer = answer.trim();
    if (answer.length === 0) {
      return [];
    }
    separators = separators.length === 0 ? ["===", "#", "---", "###", "|", ";", "锟?] : separators;
    separators = separators.filter((el) => el.trim().length > 0);
    try {
      const json = JSON.parse(answer);
      if (Array.isArray(json)) {
        return json.map(String).filter((el) => el.trim().length > 0);
      }
    } catch {
      for (const sep of separators) {
        if (answer.split(sep).length > 1) {
          return answer.split(sep).filter((el) => el.trim().length > 0);
        }
      }
    }
    return [answer];
  }
  function createDefaultQuestionResolver(ctx) {
    return {
      async single(infos, options, handler) {
        const allAnswer = infos.map((res) => res.results.map((res2) => splitAnswer(res2.answer, ctx.answerSeparators)).flat()).flat();
        const optionStrings = options.map((o) => removeRedundant(o.innerText));
        let ratings = [];
        if (ctx.answerMatchMode === "similar") {
          ratings = answerSimilar(allAnswer, optionStrings);
          let index = -1;
          let max = 0;
          let ans = "";
          ratings.forEach((rating, i) => {
            if (rating.rating > max) {
              max = rating.rating;
              index = i;
              ans = rating.target;
            }
          });
          if (index !== -1 && max > 0.6) {
            await handler("single", ans, options[index], ctx);
            return {
              finish: true,
              ratings: ratings.map((r) => r.rating)
            };
          }
        } else if (ctx.answerMatchMode === "exact") {
          const result = answerExactMatch(allAnswer, optionStrings);
          const index = optionStrings.findIndex((option) => result.includes(option));
          if (result.length) {
            await handler("single", options[index].innerText, options[index], ctx);
            return {
              finish: true
            };
          }
        }
        for (const info of infos) {
          for (const res of info.results) {
            const ans = StringUtils.nowrap(res.answer, "").trim();
            if (ans.length === 1 && /[A-Z]/.test(ans)) {
              const index = ans.charCodeAt(0) - 65;
              if (options[index] === void 0) {
                continue;
              }
              await handler("single", options[index].innerText, options[index], ctx);
              return { finish: true, option: options[index] };
            }
          }
        }
        return { finish: false, allAnswer, ratings: ratings.map((r) => r.rating), options: optionStrings };
      },
      async multiple(infos, options, handler) {
        var _a;
        const targetAnswers = [];
        const targetOptions = [];
        const similar_list = [];
        const exact_list = [];
        const results = infos.map((info) => info.results).flat();
        for (let i = 0; i < results.length; i++) {
          const result = results[i];
          const answers = splitAnswer(result.answer.trim(), ctx.answerSeparators);
          if (ctx.answerMatchMode === "similar") {
            const matchResult = { options: [], answers: [], ratings: [], similarSum: 0, similarCount: 0 };
            for (const option of options) {
              const ans = answers.find(
                (answer) => answer.includes(removeRedundant(option.textContent || option.innerText))
              );
              if (ans) {
                matchResult.options.push(option);
                matchResult.answers.push(ans);
                matchResult.ratings.push(1);
                matchResult.similarSum += 1;
                matchResult.similarCount += 1;
              }
            }
            const ratingResult = { options: [], answers: [], ratings: [], similarSum: 0, similarCount: 0 };
            const ratings = answerSimilar(
              answers,
              options.map((o) => removeRedundant(o.innerText))
            );
            for (let j = 0; j < ratings.length; j++) {
              const rating = ratings[j];
              if (rating.rating > 0.6) {
                ratingResult.options.push(options[j]);
                ratingResult.answers.push(ratings[j].target);
                ratingResult.ratings.push(ratings[j].rating);
                ratingResult.similarSum += rating.rating;
                ratingResult.similarCount += 1;
              }
            }
            if (matchResult.similarSum > ratingResult.similarSum) {
              similar_list[i] = matchResult;
            } else {
              similar_list[i] = ratingResult;
            }
          } else if (ctx.answerMatchMode === "exact") {
            exact_list[i] = answerExactMatch(
              answers,
              options.map((o) => removeRedundant(o.innerText))
            ).map((option) => options.find((o) => removeRedundant(o.innerText) === option)).filter(Boolean);
          }
        }
        if (ctx.answerMatchMode === "similar") {
          const sorted_similar_list = similar_list.filter((i) => i.similarCount !== 0).sort((a, b) => {
            const bsc = b.similarCount * 100;
            const asc = a.similarCount * 100;
            const bss = b.similarSum;
            const ass = a.similarSum;
            return bsc + bss - asc + ass;
          });
          if (sorted_similar_list[0]) {
            for (let i = 0; i < sorted_similar_list[0].options.length; i++) {
              await handler("multiple", sorted_similar_list[0].answers[i], sorted_similar_list[0].options[i], ctx);
            }
            return { finish: true, sorted_similar_list, targetOptions, targetAnswers };
          }
        } else if (ctx.answerMatchMode === "exact") {
          const sorted_exact_list = exact_list.sort((a, b) => b.length - a.length);
          if ((_a = sorted_exact_list[0]) == null ? void 0 : _a.length) {
            for (let i = 0; i < sorted_exact_list[0].length; i++) {
              await handler("multiple", sorted_exact_list[0][i].innerText, sorted_exact_list[0][i], ctx);
            }
            return {
              finish: true,
              sorted_exact_list: sorted_exact_list.map((i) => i.map((e) => e.innerText)),
              targetOptions,
              targetAnswers
            };
          }
        }
        const plainOptions = [];
        for (const result of results) {
          const ans = StringUtils.nowrap(result.answer, "").trim();
          const plainAnswer = resolvePlainAnswer(ans);
          if (plainAnswer) {
            for (const char of ans) {
              const index = char.charCodeAt(0) - 65;
              if (options[index] === void 0) {
                continue;
              }
              await handler("multiple", options[index].innerText, options[index], ctx);
              plainOptions.push(options[index]);
            }
          }
        }
        if (plainOptions.length) {
          return { finish: true, plainOptions };
        } else {
          return { finish: false };
        }
      },
      async judgement(infos, options, handler) {
        for (const answers of infos.map((info) => info.results.map((res) => res.answer))) {
          let matches = function(target, options2) {
            return options2.some(
              (option) => clearString(removeRedundant(option), "锟?, "脳") === clearString(removeRedundant(target), "锟?, "脳")
            );
          };
          const correctWords = [
            "锟?,
            "锟?,
            "姝ｇ‘",
            "纭畾",
            "锟?,
            "瀵圭殑",
            "鏄殑",
            "姝ｇ‘锟?,
            "true",
            "True",
            "T",
            "yes",
            "1"
          ];
          const incorrectWords = [
            "锟?,
            "锟?,
            "锟?,
            "閿欒",
            "脳",
            "X",
            "閿欑殑",
            "涓嶅",
            "涓嶆纭殑",
            "涓嶆锟?,
            "涓嶆槸",
            "涓嶆槸锟?,
            "false",
            "False",
            "F",
            "no",
            "0"
          ];
          const answerShowCorrect = answers.find((answer) => matches(answer, correctWords));
          const answerShowIncorrect = answers.find((answer) => matches(answer, incorrectWords));
          if (answerShowCorrect || answerShowIncorrect) {
            let option;
            for (const el of options) {
              const textShowCorrect = matches(el.innerText, correctWords);
              const textShowIncorrect = matches(el.innerText, incorrectWords);
              if (answerShowCorrect && textShowCorrect) {
                option = el;
                await handler("judgement", answerShowCorrect, el, ctx);
                break;
              }
              if (answerShowIncorrect && textShowIncorrect) {
                option = el;
                await handler("judgement", answerShowIncorrect, el, ctx);
                break;
              }
            }
            return { finish: true, option };
          }
        }
        return { finish: false };
      },
      async completion(infos, options, handler) {
        for (const answers of infos.map((info) => info.results.map((res) => res.answer))) {
          let ans = answers.filter((ans2) => ans2);
          if (ans.length === 1) {
            ans = splitAnswer(ans[0], ctx.answerSeparators);
          }
          if (ans.length !== 0 && (ans.length === options.length || options.length === 1)) {
            if (ans.length === options.length) {
              for (let index = 0; index < options.length; index++) {
                const element = options[index];
                await handler("completion", ans[index], element, ctx);
              }
              return { finish: true };
            } else if (options.length === 1) {
              await handler("completion", ans.join(" "), options[0], ctx);
              return { finish: true };
            }
            return { finish: false };
          }
        }
        return { finish: false };
      }
    };
  }
  const AnswerWrapperHandlerConfig = {
    timeout_seconds: 60
  };
  async function defaultAnswerWrapperHandler(answererWrappers, env) {
    const searchInfos = [];
    const temp = JSON.parse(JSON.stringify(answererWrappers));
    if (temp.length === 0) {
      throw new Error("棰樺簱閰嶇疆涓嶈兘涓虹┖锛岃閰嶇疆鍚庨噸鏂板紑濮嬭嚜鍔ㄧ瓟棰橈拷?);
    }
    // 椤哄簭鎼滅储棰樺簱锛氭壘鍒版湁绛旀鐨勯搴撳悗鍋滄锛屽皢鍓╀綑棰樺簱璁板綍锟?_remainingWrappers 锟?    for (let _wi = 0; _wi < temp.length; _wi++) {
      const wrapper = temp[_wi];
      var _a;
      const {
        name = "鏈煡棰樺簱",
        homepage = "#",
        method = "get",
        type = "fetch",
        contentType = "json",
        headers = {},
        data: wrapperData = {},
        handler = "return (res)=> [JSON.stringify(res), undefined]"
      } = wrapper;
      try {
        let results = [];
        let requestData;
        let url;
        if (method.toLocaleLowerCase() === "get") {
          url = new URL(resolvePlaceHolder(wrapper.url, { encodeURI: true }));
          Object.keys(wrapperData).forEach((key) => {
            const resolved = resolvePlaceHolder(wrapperData[key]);
            // url.searchParams.set 浼氳嚜鍔ㄧ紪鐮侊紝鏃犻渶鎵嬪姩 encodeURIComponent
            // 锟?resolvePlaceHolder 杩斿洖浜嗘暟缁勶紙${optionsArray}锛夛紝搴忓垪鍖栦负 JSON 瀛楃锟?            url.searchParams.set(key, Array.isArray(resolved) ? JSON.stringify(resolved) : resolved);
          });
          requestData = {};
        } else if (method.toLocaleLowerCase() === "post") {
          url = new URL(wrapper.url);
          const data = /* @__PURE__ */ Object.create({});
          Object.keys(wrapperData).forEach((key) => {
            if (typeof wrapperData[key] === "object" && !Array.isArray(wrapperData[key]) && Reflect.has(wrapperData[key], "handler")) {
              const handler2 = Function(Reflect.get(wrapperData[key], "handler"))();
              if (typeof handler2 !== "function") {
                throw new Error("data 瀛楁瑙ｆ瀽鍣ㄥ繀椤昏繑鍥炰竴涓嚱锟?);
              }
              const result = handler2(env);
              Reflect.set(data, key, result);
            } else {
              // resolvePlaceHolder 浼氬湪鏁翠釜瀛楁锟?${optionsArray} 鏃剁洿鎺ヨ繑鍥炴暟锟?              Reflect.set(data, key, resolvePlaceHolder(wrapperData[key]));
            }
          });
          requestData = data;
        } else {
          throw new Error("涓嶆敮鎸佺殑璇锋眰鏂瑰紡");
        }
        const responseData = await Promise.race([
          request(url.toString(), {
            method,
            responseType: contentType,
            data: requestData,
            type,
            headers: JSON.parse(JSON.stringify(headers || {}))
          }),
          $.sleep(((_a = AnswerWrapperHandlerConfig.timeout_seconds) != null ? _a : 60) * 1e3)
        ]);
        if (responseData === void 0) {
          throw new Error("棰樺簱璇锋眰瓒呮椂锛屽彲鑳芥槸棰樺簱闂锛屾垨鑰呰妫€鏌ョ綉缁滄垨鑰呴噸璇曪拷?);
        }
        const responseHandler = Function(handler)();
        if (typeof responseHandler !== "function") {
          throw new Error("handler 鍝嶅簲澶勭悊鍣ㄥ繀椤昏繑鍥炰竴涓嚱锟?);
        }
        const info = responseHandler(responseData);
        if (info && Array.isArray(info)) {
          if (info.every((item) => Array.isArray(item))) {
            results = results.concat(
              info.map((item) => ({
                question: item[0],
                answer: item[1],
                extra_data: item[2] || {}
              }))
            );
          } else {
            results.push({
              question: info[0],
              answer: info[1],
              extra_data: info[2] || {}
            });
          }
        }
        // 鎼滃埌绛旀锛氳褰曞墿浣欓搴撳苟鍋滄鎼滅储
        if (results.length > 0) {
          searchInfos.push({
            url: wrapper.url,
            name,
            homepage,
            results,
            response: responseData,
            data: requestData,
            _remainingWrappers: temp.slice(_wi + 1),
            _searchEnv: env
          });
          break;
        }
        // 鏈悳鍒扮瓟妗堬細璁板綍褰撳墠棰樺簱缁撴灉锛岀户缁笅涓€锟?        searchInfos.push({
          url: wrapper.url,
          name,
          homepage,
          results,
          response: responseData,
          data: requestData
        });
      } catch (error) {
        console.error(error);
        searchInfos.push({
          url: wrapper.url,
          name,
          homepage,
          results: [],
          response: void 0,
          data: void 0,
          error: (error == null ? void 0 : error.message) || "棰樺簱杩炴帴澶辫触"
        });
      }
    }
    function resolvePlaceHolder(data, options) {
      if (typeof data === "string") {
        // 鑻ユ暣涓瓧娈靛€煎氨鏄崟涓崰浣嶇锛堝 "${optionsArray}"锛夛紝涓斿锟?env 鍊间负鏁扮粍锛屽垯鐩存帴杩斿洖鏁扮粍
        const singleMatch = data.match(/^\${(.*?)}$/);
        if (singleMatch) {
          const envVal = env[singleMatch[1]];
          if (Array.isArray(envVal)) {
            // GET 鍙傛暟鍦烘櫙闇€瑕佸瓧绗︿覆锛屽簭鍒楀寲锟?JSON锛汸OST body 鍦烘櫙鐩存帴杩斿洖鏁扮粍
            return (options == null ? void 0 : options.encodeURI) ? encodeURIComponent(JSON.stringify(envVal)) : envVal;
          }
        }
        const matches = data.match(/\${(.*?)}/g) || [];
        matches.forEach((placeHolder) => {
          const envVal = env[placeHolder.replace(/\${(.*)}/, "$1")];
          // 鍐呭祵浜庡瓧绗︿覆涓殑鏁扮粍鍗犱綅绗︼紝搴忓垪鍖栦负 JSON 瀛楃锟?          const value = Array.isArray(envVal) ? JSON.stringify(envVal) : envVal;
          data = data.replace(placeHolder, (options == null ? void 0 : options.encodeURI) ? encodeURIComponent(value) : value);
        });
      } else if (typeof data === "object") {
        const keys = Object.keys(data);
        for (const key of keys) {
          data[key] = resolvePlaceHolder(data[key], options);
        }
      }
      return data;
    }
    return searchInfos;
  }
  class AnswerWrapperParser {
    static fromObject(json) {
      const aw = json;
      if (aw && Array.isArray(aw)) {
        if (aw.length) {
          for (let i = 0; i < aw.length; i++) {
            const item = aw[i];
            if (typeof item.name !== "string") {
              throw new Error(`锟?${i + 1} 涓搴撶殑 鍚嶅瓧(name) 涓虹┖`);
            }
            if (typeof item.url !== "string") {
              throw new Error(`锟?${i + 1} 涓搴撶殑 鎺ュ彛鍦板潃(url) 涓虹┖`);
            }
            if (typeof item.handler !== "string") {
              throw new Error(`锟?${i + 1} 涓搴撶殑 瑙ｆ瀽锟?handler) 涓虹┖`);
            }
            if (item.headers && typeof item.headers !== "object") {
              throw new Error(`锟?${i + 1} 涓搴撶殑 澶撮儴淇℃伅(header) 搴斾负 瀵硅薄 鏍煎紡`);
            }
            if (item.data && typeof item.data !== "object") {
              throw new Error(`锟?${i + 1} 涓搴撶殑 鎻愪氦鏁版嵁(data) 搴斾负 瀵硅薄 鏍煎紡`);
            }
            const contentTypes = ["json", "text"];
            if (item.contentType && contentTypes.every((i2) => i2 !== item.contentType)) {
              throw new Error(`锟?${i + 1} 涓搴撶殑 contentType 蹇呴』涓轰互涓嬮€夐」涓殑涓€锟? ${contentTypes.join(", ")}`);
            }
            const methods = ["post", "get"];
            if (item.method && methods.every((i2) => i2 !== item.method)) {
              throw new Error(`锟?${i + 1} 涓搴撶殑 method 蹇呴』涓轰互涓嬮€夐」涓殑涓€锟? ${methods.join(", ")}`);
            }
            const types = ["fetch", "GM_xmlhttpRequest"];
            if (item.type && types.every((i2) => i2 !== item.type)) {
              throw new Error(`锟?${i + 1} 涓搴撶殑 type 蹇呴』涓轰互涓嬮€夐」涓殑涓€锟? ${types.join(", ")}`);
            }
          }
          return aw;
        } else {
          throw new Error("棰樺簱涓虹┖锟?);
        }
      } else {
        throw new Error("棰樺簱閰嶇疆鏍煎紡閿欒锟?);
      }
    }
    static fromJSONString(json) {
      const raw = json.toString();
      try {
        return JSON.parse(raw);
      } catch {
        throw new Error(`鏍煎紡閿欒锛屽繀椤讳负锛歫son瀛楃锟?锟?棰樺簱閰嶇疆閾炬帴`);
      }
    }
    static async fromURL(url) {
      const text = await request(url, {
        responseType: "text",
        method: "get",
        type: "fetch"
      });
      return this.fromJSONString(text);
    }
    static fromBase64(base64) {
      return this.fromJSONString(Buffer.from(base64, "base64").toString("utf8"));
    }
    static from(value) {
      if (typeof value === "string") {
        if (value.startsWith("http")) {
          return this.fromURL(value);
        } else {
          return this.fromJSONString(value);
        }
      } else {
        return this.fromObject(value);
      }
    }
  }
  class OCSWorker extends lib.CommonEventEmitter {
    constructor(opts) {
      super();
      this.isRunning = false;
      this.isClose = false;
      this.isStop = false;
      this.totalQuestionCount = 0;
      this.opts = opts;
    }
    async doWork(options) {
      var _a, _b, _c, _d;
      this.emit("start");
      this.isRunning = true;
      this.once("close", () => {
        this.isClose = true;
      });
      this.on("stop", () => {
        this.isStop = true;
      });
      this.on("continuate", () => {
        this.isStop = false;
      });
      const questionRoots = typeof this.opts.root === "string" ? Array.from(document.querySelectorAll(this.opts.root)) : this.opts.root;
      this.totalQuestionCount += questionRoots.length;
      if (options == null ? void 0 : options.enable_debug) {
        console.debug("寮€濮嬬瓟锟?, this);
        console.debug("棰樼洰鏁伴噺: ", questionRoots.length);
        console.debug("鐖惰妭鐐瑰垪锟? ", questionRoots);
      }
      const results = [];
      if (questionRoots.length === 0) {
        throw new Error("鏈壘鍒颁换浣曢鐩紝绛旈缁撴潫锟?);
      }
      for (const questionRoot of questionRoots) {
        const ctx = {
          searchInfos: [],
          root: questionRoot,
          elements: domSearchAll(this.opts.elements, questionRoot),
          type: void 0,
          answerSeparators: this.opts.answerSeparators,
          answerMatchMode: this.opts.answerMatchMode || "similar"
        };
        await ((_b = (_a = this.opts).onElementSearched) == null ? void 0 : _b.call(_a, ctx.elements, questionRoot));
        ctx.elements.title = (_c = ctx.elements.title) == null ? void 0 : _c.filter(Boolean);
        ctx.elements.options = (_d = ctx.elements.options) == null ? void 0 : _d.filter(Boolean);
        if (typeof this.opts.work === "object") {
          ctx.type = this.opts.work.type === void 0 ? defaultWorkTypeResolver(ctx) : typeof this.opts.work.type === "string" ? this.opts.work.type : this.opts.work.type(ctx);
        }
        results.push({
          requested: false,
          resolved: false,
          ctx
        });
      }
      if (options == null ? void 0 : options.enable_debug) {
        console.debug("涓婁笅鏂囧凡鍒濆锟? ", results);
      }
      const requestThread = async (index) => {
        var _a2, _b2, _c2;
        let error;
        const result = results[index];
        const ctx = result.ctx || {};
        if (this.isClose === true) {
          this.isRunning = false;
          return;
        }
        if (this.isStop) {
          await waitForContinuate(() => this.isStop);
        }
        ctx.searchInfos = [];
        if (options == null ? void 0 : options.enable_debug) {
          console.groupEnd();
          console.group(
            "寮€濮嬫悳锟? ",
            (_a2 = ctx.elements.title) == null ? void 0 : _a2.map((t2) => t2 == null ? void 0 : t2.innerText).filter(Boolean).join(", ").slice(0, 20)
          );
          console.log("ctx", result.ctx);
        }
        try {
          ctx.searchInfos = await this.opts.answerer(ctx.elements, ctx) || [];
          ctx.searchInfos.forEach((info) => {
            info.results = info.results.map((ans) => {
              ans.answer = ans.answer ? ans.answer.trim() : "";
              return ans;
            });
          });
        } catch (err) {
          error = String(err);
        }
        result.ctx = ctx;
        result.requested = true;
        result.error = error;
        if (options == null ? void 0 : options.enable_debug) {
          console.log("鎼滈缁撴灉: ", ctx.searchInfos);
        }
        await ((_c2 = (_b2 = this.opts).onResultsUpdate) == null ? void 0 : _c2.call(_b2, results[index], index, results));
      };
      const waitForRequested = async (result) => {
        return new Promise((resolve, reject) => {
          const interval = setInterval(() => {
            if ((result == null ? void 0 : result.requested) === true) {
              clearInterval(interval);
              clearTimeout(timeout);
              resolve();
            }
          }, 200);
          const timeout = setTimeout(() => {
            clearInterval(interval);
            reject(new Error("绛旈瓒呮椂锟?));
          }, (AnswerWrapperHandlerConfig.timeout_seconds + 10) * 1e3);
        });
      };
      const resolverThread = async () => {
        var _a2, _b2, _c2, _d2;
        for (let index = 0; index < results.length; index++) {
          const result = results[index];
          let error;
          let res;
          if (this.isClose === true) {
            this.isRunning = false;
            return;
          }
          try {
            if (this.isStop) {
              await waitForContinuate(() => this.isStop);
            }
            await waitForRequested(result);
          } catch (err) {
          }
          try {
            if (result.ctx && result.ctx.searchInfos.length !== 0) {
              // 鍏叡澶囩敤棰樺簱閲嶈瘯閫昏緫锛氬綋 finish===false 鏃讹紝鐢ㄥ墿浣欓搴撻『搴忛噸锟?              const _retryWithRemainingWrappers = async (getCurrentRes, applyRetryInfos) => {
                if (getCurrentRes && getCurrentRes.finish === false) {
                  const firstInfo = result.ctx.searchInfos[0];
                  const remainingWrappers = (firstInfo && firstInfo._remainingWrappers) ? firstInfo._remainingWrappers : [];
                  const _retryEnv = (firstInfo && firstInfo._searchEnv) ? firstInfo._searchEnv : {
                    type: result.ctx.type || "unknown",
                    title: (result.ctx.elements.title || []).map((t2) => t2 ? t2.innerText : "").filter(Boolean).join("\n"),
                    options: (result.ctx.elements.options || []).map((o) => o ? o.innerText : "").join("\n"),
                    optionsArray: (result.ctx.elements.options || []).map((o) => o ? o.innerText : "").filter(Boolean)
                  };
                  for (let _ri = 0; _ri < remainingWrappers.length; _ri++) {
                    try {
                      const retryInfos = await defaultAnswerWrapperHandler([remainingWrappers[_ri]], _retryEnv);
                      if (retryInfos && retryInfos.length > 0 && retryInfos[0].results.length > 0) {
                        const retryRes = await applyRetryInfos(retryInfos);
                        if (retryRes && retryRes.finish === true) {
                          result.ctx.searchInfos = retryInfos;
                          return retryRes;
                        }
                      }
                    } catch (retryErr) {
                      console.error("澶囩敤棰樺簱鎼滅储澶辫触:", retryErr);
                    }
                  }
                }
                return getCurrentRes;
              };
              if (typeof this.opts.work === "object") {
                if (result.ctx.elements.options) {
                  if (result.ctx.type) {
                    const resolver = createDefaultQuestionResolver(result.ctx)[result.ctx.type];
                    const handler = this.opts.work.handler;
                    res = await resolver(result.ctx.searchInfos, result.ctx.elements.options, handler);
                    // 褰撳墠棰樺簱鎼滃埌绛旀浣嗘湭鍖归厤鍒伴€夐」鏃讹紝渚濇灏濊瘯鍓╀綑棰樺簱
                    res = await _retryWithRemainingWrappers(res, async (retryInfos) => {
                      return await resolver(retryInfos, result.ctx.elements.options, handler);
                    });
                  } else {
                    error = "棰樼洰绫诲瀷瑙ｆ瀽澶辫触, 璇疯嚜琛屾彁渚涜В鏋愬櫒, 鎴栬€呭拷鐣ユ棰橈拷?;
                  }
                } else {
                  error = "elements.options 涓虹┖ ! 浣跨敤榛樿澶勭悊锟? 蹇呴』鎻愪緵棰樼洰閫夐」鐨勯€夋嫨鍣拷?;
                }
              } else {
                const work2 = this.opts.work;
                res = await work2(result.ctx);
                // 褰撳墠棰樺簱鎼滃埌绛旀浣嗘湭鍖归厤鍒伴€夐」鏃讹紝渚濇灏濊瘯鍓╀綑棰樺簱
                res = await _retryWithRemainingWrappers(res, async (retryInfos) => {
                  result.ctx.searchInfos = retryInfos;
                  return await work2(result.ctx);
                });
              }
            } else {
              error = "鎼滅储涓嶅埌绛旀, 璇烽噸鏂拌繍锟? 鎴栬€呭拷鐣ユ棰橈拷?;
            }
          } catch (err) {
            error = (err == null ? void 0 : err.message) || err;
          }
          result.error = error;
          result.result = res || { finish: false };
          result.resolved = true;
          if (options == null ? void 0 : options.enable_debug) {
            console.log(
              "绛旈瀹屾垚: ",
              (_b2 = (_a2 = result.ctx) == null ? void 0 : _a2.elements.title) == null ? void 0 : _b2.map((t2) => t2 == null ? void 0 : t2.innerText).join(", ").slice(0, 20),
              result
            );
          }
          await ((_d2 = (_c2 = this.opts).onResultsUpdate) == null ? void 0 : _d2.call(_c2, result, index, results));
        }
      };
      const requestThreadHandler = async () => {
        const locks = [];
        const waitForLock = () => {
          return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
              if (locks.length > 0) {
                const lock = locks.shift();
                if (lock) {
                  resolve(lock);
                  clearInterval(interval);
                  clearTimeout(timeout);
                }
              }
            }, 100);
            const timeout = setTimeout(() => {
              clearInterval(interval);
              reject(new Error("鑾峰彇绾跨▼閿佽秴鏃讹紒"));
            }, 3 * 60 * 1e3);
          });
        };
        const requestThreads = [];
        for (let index = 0; index < results.length; index++) {
          requestThreads.push(() => requestThread(index));
        }
        for (let index = 0; index < (this.opts.thread || 1); index++) {
          locks.push(index + 1);
        }
        let requestFinished = 0;
        const promises = [];
        for (let index = 0; index < (this.opts.thread || 1); index++) {
          promises.push(async () => {
            try {
              while (requestFinished < results.length && requestThreads.length > 0 && this.isClose === false) {
                const thread = requestThreads.shift();
                if (thread) {
                  const lock = await waitForLock();
                  await thread();
                  requestFinished++;
                  locks.push(lock);
                }
              }
            } catch (err) {
              console.error(err);
            }
          });
        }
        await Promise.all(promises.map((f) => f()));
      };
      await Promise.all([resolverThread(), requestThreadHandler()]);
      this.isRunning = false;
      return results;
    }
    uploadHandler(options) {
      var _a;
      const { results, type, callback } = options;
      if (type !== "nomove") {
        let finished = 0;
        for (const result of results) {
          if ((_a = result.result) == null ? void 0 : _a.finish) {
            finished++;
          }
        }
        const rate = results.length === 0 ? 0 : finished / results.length * 100;
        if (type === "force") {
          return callback(rate, true);
        } else {
          return callback(rate, type === "save" ? false : rate >= parseFloat(type.toString()));
        }
      }
    }
  }
  class CustomOCSWorker extends lib.CommonEventEmitter {
    constructor(opts) {
      super();
      this.isRunning = false;
      this.isClose = false;
      this.isStop = false;
      this.opts = opts;
    }
    async doWork(options) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      this.emit("start");
      this.isRunning = true;
      this.once("close", () => {
        this.isClose = true;
      });
      this.on("stop", () => {
        this.isStop = true;
      });
      this.on("continuate", () => {
        this.isStop = false;
      });
      const questions = await ((_b = (_a = this.opts).questions) == null ? void 0 : _b.call(_a));
      if (options == null ? void 0 : options.enable_debug) {
        console.debug("寮€濮嬬瓟锟?, this);
        console.debug("棰樼洰鏁伴噺: ", this.opts.questions.length);
      }
      const results = [];
      for (let index = 0; index < questions.length; index++) {
        if (this.isClose === true) {
          this.isRunning = false;
          return;
        }
        if (this.isStop) {
          await waitForContinuate(() => this.isStop);
        }
        const question = questions[index];
        results[index] = {
          question: question.text,
          requested: false,
          resolved: false,
          searchInfos: [],
          type: question.type,
          finish: false,
          error: ""
        };
        try {
          const infos = await this.opts.answerer(question.text);
          results[index].searchInfos = infos.map((i) => ({
            name: i.name,
            homepage: i.homepage,
            results: i.results.map((r) => [r.question, r.answer, r.extra_data || {}]),
            error: i.error
          }));
          results[index].requested = true;
          (_d = (_c = this.opts).onResultsUpdate) == null ? void 0 : _d.call(_c, results[index], index, results);
          try {
            const resolved = await this.opts.resolver(infos);
            results[index].finish = resolved.finish;
            results[index].error = resolved.error;
            results[index].resolved = true;
          } catch (err) {
            results[index].finish = false;
            results[index].error = err instanceof Error ? err.message : String(err);
            results[index].resolved = true;
          }
          (_f = (_e = this.opts).onResultsUpdate) == null ? void 0 : _f.call(_e, results[index], index, results);
        } catch (err) {
          results[index].requested = true;
          results[index].resolved = false;
          results[index].finish = true;
          results[index].error = err instanceof Error ? err.message : String(err);
          (_h = (_g = this.opts).onResultsUpdate) == null ? void 0 : _h.call(_g, results[index], index, results);
        }
        await lib.$.sleep(this.opts.period);
      }
    }
  }
  async function waitForContinuate(isStopping) {
    if (isStopping()) {
      await new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          if (isStopping() === false) {
            clearInterval(interval);
            resolve();
          }
        }, 200);
      });
    }
  }
  function getDefaults() {
    return {
      async: false,
      baseUrl: null,
      breaks: false,
      extensions: null,
      gfm: true,
      headerIds: true,
      headerPrefix: "",
      highlight: null,
      hooks: null,
      langPrefix: "language-",
      mangle: true,
      pedantic: false,
      renderer: null,
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartypants: false,
      tokenizer: null,
      walkTokens: null,
      xhtml: false
    };
  }
  let defaults = getDefaults();
  function changeDefaults(newDefaults) {
    defaults = newDefaults;
  }
  const escapeTest = /[&<>"']/;
  const escapeReplace = new RegExp(escapeTest.source, "g");
  const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
  const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
  const escapeReplacements = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  const getEscapeReplacement = (ch) => escapeReplacements[ch];
  function escape$1(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html;
  }
  const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
  function unescape$1(html) {
    return html.replace(unescapeTest, (_, n) => {
      n = n.toLowerCase();
      if (n === "colon")
        return ":";
      if (n.charAt(0) === "#") {
        return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return "";
    });
  }
  const caret = /(^|[^\[])\^/g;
  function edit(regex, opt) {
    regex = typeof regex === "string" ? regex : regex.source;
    opt = opt || "";
    const obj = {
      replace: (name, val) => {
        val = val.source || val;
        val = val.replace(caret, "$1");
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: () => {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }
  const nonWordAndColonTest = /[^\w:]/g;
  const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      let prot;
      try {
        prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, "").toLowerCase();
      } catch (e) {
        return null;
      }
      if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
        return null;
      }
    }
    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }
    try {
      href = encodeURI(href).replace(/%25/g, "%");
    } catch (e) {
      return null;
    }
    return href;
  }
  const baseUrls = {};
  const justDomain = /^[^:]+:\/*[^/]*$/;
  const protocol = /^([^:]+:)[\s\S]*$/;
  const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function resolveUrl(base, href) {
    if (!baseUrls[" " + base]) {
      if (justDomain.test(base)) {
        baseUrls[" " + base] = base + "/";
      } else {
        baseUrls[" " + base] = rtrim(base, "/", true);
      }
    }
    base = baseUrls[" " + base];
    const relativeBase = base.indexOf(":") === -1;
    if (href.substring(0, 2) === "//") {
      if (relativeBase) {
        return href;
      }
      return base.replace(protocol, "$1") + href;
    } else if (href.charAt(0) === "/") {
      if (relativeBase) {
        return href;
      }
      return base.replace(domain, "$1") + href;
    } else {
      return base + href;
    }
  }
  const noopTest = { exec: function noopTest2() {
  } };
  function splitCells(tableRow, count) {
    const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false, curr = offset;
      while (--curr >= 0 && str[curr] === "\\")
        escaped = !escaped;
      if (escaped) {
        return "|";
      } else {
        return " |";
      }
    }), cells = row.split(/ \|/);
    let i = 0;
    if (!cells[0].trim()) {
      cells.shift();
    }
    if (cells.length > 0 && !cells[cells.length - 1].trim()) {
      cells.pop();
    }
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
    for (; i < cells.length; i++) {
      cells[i] = cells[i].trim().replace(/\\\|/g, "|");
    }
    return cells;
  }
  function rtrim(str, c, invert) {
    const l = str.length;
    if (l === 0) {
      return "";
    }
    let suffLen = 0;
    while (suffLen < l) {
      const currChar = str.charAt(l - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.slice(0, l - suffLen);
  }
  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    const l = str.length;
    let level = 0, i = 0;
    for (; i < l; i++) {
      if (str[i] === "\\") {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;
        if (level < 0) {
          return i;
        }
      }
    }
    return -1;
  }
  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }
  }
  function repeatString(pattern, count) {
    if (count < 1) {
      return "";
    }
    let result = "";
    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }
      count >>= 1;
      pattern += pattern;
    }
    return result + pattern;
  }
  function outputLink(cap, link, raw, lexer) {
    const href = link.href;
    const title = link.title ? escape$1(link.title) : null;
    const text = cap[1].replace(/\\([\[\]])/g, "$1");
    if (cap[0].charAt(0) !== "!") {
      lexer.state.inLink = true;
      const token = {
        type: "link",
        raw,
        href,
        title,
        text,
        tokens: lexer.inlineTokens(text)
      };
      lexer.state.inLink = false;
      return token;
    }
    return {
      type: "image",
      raw,
      href,
      title,
      text: escape$1(text)
    };
  }
  function indentCodeCompensation(raw, text) {
    const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    const indentToCode = matchIndentToCode[1];
    return text.split("\n").map((node) => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      const [indentInNode] = matchIndentInNode;
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join("\n");
  }
  class Tokenizer {
    constructor(options) {
      this.options = options || defaults;
    }
    space(src2) {
      const cap = this.rules.block.newline.exec(src2);
      if (cap && cap[0].length > 0) {
        return {
          type: "space",
          raw: cap[0]
        };
      }
    }
    code(src2) {
      const cap = this.rules.block.code.exec(src2);
      if (cap) {
        const text = cap[0].replace(/^ {1,4}/gm, "");
        return {
          type: "code",
          raw: cap[0],
          codeBlockStyle: "indented",
          text: !this.options.pedantic ? rtrim(text, "\n") : text
        };
      }
    }
    fences(src2) {
      const cap = this.rules.block.fences.exec(src2);
      if (cap) {
        const raw = cap[0];
        const text = indentCodeCompensation(raw, cap[3] || "");
        return {
          type: "code",
          raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
          text
        };
      }
    }
    heading(src2) {
      const cap = this.rules.block.heading.exec(src2);
      if (cap) {
        let text = cap[2].trim();
        if (/#$/.test(text)) {
          const trimmed = rtrim(text, "#");
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            text = trimmed.trim();
          }
        }
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[1].length,
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    hr(src2) {
      const cap = this.rules.block.hr.exec(src2);
      if (cap) {
        return {
          type: "hr",
          raw: cap[0]
        };
      }
    }
    blockquote(src2) {
      const cap = this.rules.block.blockquote.exec(src2);
      if (cap) {
        const text = cap[0].replace(/^ *>[ \t]?/gm, "");
        const top2 = this.lexer.state.top;
        this.lexer.state.top = true;
        const tokens = this.lexer.blockTokens(text);
        this.lexer.state.top = top2;
        return {
          type: "blockquote",
          raw: cap[0],
          tokens,
          text
        };
      }
    }
    list(src2) {
      let cap = this.rules.block.list.exec(src2);
      if (cap) {
        let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
        let bull = cap[1].trim();
        const isordered = bull.length > 1;
        const list = {
          type: "list",
          raw: "",
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : "",
          loose: false,
          items: []
        };
        bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
        if (this.options.pedantic) {
          bull = isordered ? bull : "[*+-]";
        }
        const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
        while (src2) {
          endEarly = false;
          if (!(cap = itemRegex.exec(src2))) {
            break;
          }
          if (this.rules.block.hr.test(src2)) {
            break;
          }
          raw = cap[0];
          src2 = src2.substring(raw.length);
          line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t2) => " ".repeat(3 * t2.length));
          nextLine = src2.split("\n", 1)[0];
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimLeft();
          } else {
            indent = cap[2].search(/[^ ]/);
            indent = indent > 4 ? 1 : indent;
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          blankLine = false;
          if (!line && /^ *$/.test(nextLine)) {
            raw += nextLine + "\n";
            src2 = src2.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
            const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
            const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
            const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
            while (src2) {
              rawLine = src2.split("\n", 1)[0];
              nextLine = rawLine;
              if (this.options.pedantic) {
                nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
              }
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              if (hrRegex.test(src2)) {
                break;
              }
              if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
                itemContents += "\n" + nextLine.slice(indent);
              } else {
                if (blankLine) {
                  break;
                }
                if (line.search(/[^ ]/) >= 4) {
                  break;
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(line)) {
                  break;
                }
                itemContents += "\n" + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                blankLine = true;
              }
              raw += rawLine + "\n";
              src2 = src2.substring(rawLine.length + 1);
              line = nextLine.slice(indent);
            }
          }
          if (!list.loose) {
            if (endsWithBlankLine) {
              list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== "[ ] ";
              itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
            }
          }
          list.items.push({
            type: "list_item",
            raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents
          });
          list.raw += raw;
        }
        list.items[list.items.length - 1].raw = raw.trimRight();
        list.items[list.items.length - 1].text = itemContents.trimRight();
        list.raw = list.raw.trimRight();
        const l = list.items.length;
        for (i = 0; i < l; i++) {
          this.lexer.state.top = false;
          list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
          if (!list.loose) {
            const spacers = list.items[i].tokens.filter((t2) => t2.type === "space");
            const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t2) => /\n.*\n/.test(t2.raw));
            list.loose = hasMultipleLineBreaks;
          }
        }
        if (list.loose) {
          for (i = 0; i < l; i++) {
            list.items[i].loose = true;
          }
        }
        return list;
      }
    }
    html(src2) {
      const cap = this.rules.block.html.exec(src2);
      if (cap) {
        const token = {
          type: "html",
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
          text: cap[0]
        };
        if (this.options.sanitize) {
          const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]);
          token.type = "paragraph";
          token.text = text;
          token.tokens = this.lexer.inline(text);
        }
        return token;
      }
    }
    def(src2) {
      const cap = this.rules.block.def.exec(src2);
      if (cap) {
        const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
        const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
        const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
        return {
          type: "def",
          tag,
          raw: cap[0],
          href,
          title
        };
      }
    }
    table(src2) {
      const cap = this.rules.block.table.exec(src2);
      if (cap) {
        const item = {
          type: "table",
          header: splitCells(cap[1]).map((c) => {
            return { text: c };
          }),
          align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
        };
        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          let l = item.align.length;
          let i, j, k, row;
          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = "right";
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = "center";
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = "left";
            } else {
              item.align[i] = null;
            }
          }
          l = item.rows.length;
          for (i = 0; i < l; i++) {
            item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
              return { text: c };
            });
          }
          l = item.header.length;
          for (j = 0; j < l; j++) {
            item.header[j].tokens = this.lexer.inline(item.header[j].text);
          }
          l = item.rows.length;
          for (j = 0; j < l; j++) {
            row = item.rows[j];
            for (k = 0; k < row.length; k++) {
              row[k].tokens = this.lexer.inline(row[k].text);
            }
          }
          return item;
        }
      }
    }
    lheading(src2) {
      const cap = this.rules.block.lheading.exec(src2);
      if (cap) {
        return {
          type: "heading",
          raw: cap[0],
          depth: cap[2].charAt(0) === "=" ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
    paragraph(src2) {
      const cap = this.rules.block.paragraph.exec(src2);
      if (cap) {
        const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
        return {
          type: "paragraph",
          raw: cap[0],
          text,
          tokens: this.lexer.inline(text)
        };
      }
    }
    text(src2) {
      const cap = this.rules.block.text.exec(src2);
      if (cap) {
        return {
          type: "text",
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
    escape(src2) {
      const cap = this.rules.inline.escape.exec(src2);
      if (cap) {
        return {
          type: "escape",
          raw: cap[0],
          text: escape$1(cap[1])
        };
      }
    }
    tag(src2) {
      const cap = this.rules.inline.tag.exec(src2);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: this.options.sanitize ? "text" : "html",
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0]
        };
      }
    }
    link(src2) {
      const cap = this.rules.inline.link.exec(src2);
      if (cap) {
        const trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          if (!/>$/.test(trimmedUrl)) {
            return;
          }
          const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          const lastParenIndex = findClosingBracket(cap[2], "()");
          if (lastParenIndex > -1) {
            const start2 = cap[0].indexOf("!") === 0 ? 5 : 4;
            const linkLen = start2 + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = "";
          }
        }
        let href = cap[2];
        let title = "";
        if (this.options.pedantic) {
          const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : "";
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
          title: title ? title.replace(this.rules.inline._escapes, "$1") : title
        }, cap[0], this.lexer);
      }
    }
    reflink(src2, links) {
      let cap;
      if ((cap = this.rules.inline.reflink.exec(src2)) || (cap = this.rules.inline.nolink.exec(src2))) {
        let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
        link = links[link.toLowerCase()];
        if (!link) {
          const text = cap[0].charAt(0);
          return {
            type: "text",
            raw: text,
            text
          };
        }
        return outputLink(cap, link, cap[0], this.lexer);
      }
    }
    emStrong(src2, maskedSrc, prevChar = "") {
      let match = this.rules.inline.emStrong.lDelim.exec(src2);
      if (!match)
        return;
      if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
        return;
      const nextChar = match[1] || match[2] || "";
      if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
        const lLength = match[0].length - 1;
        let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
        const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        endReg.lastIndex = 0;
        maskedSrc = maskedSrc.slice(-1 * src2.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim)
            continue;
          rLength = rDelim.length;
          if (match[3] || match[4]) {
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue;
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0)
            continue;
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          const raw = src2.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);
          if (Math.min(lLength, rLength) % 2) {
            const text2 = raw.slice(1, -1);
            return {
              type: "em",
              raw,
              text: text2,
              tokens: this.lexer.inlineTokens(text2)
            };
          }
          const text = raw.slice(2, -2);
          return {
            type: "strong",
            raw,
            text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
    codespan(src2) {
      const cap = this.rules.inline.code.exec(src2);
      if (cap) {
        let text = cap[2].replace(/\n/g, " ");
        const hasNonSpaceChars = /[^ ]/.test(text);
        const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape$1(text, true);
        return {
          type: "codespan",
          raw: cap[0],
          text
        };
      }
    }
    br(src2) {
      const cap = this.rules.inline.br.exec(src2);
      if (cap) {
        return {
          type: "br",
          raw: cap[0]
        };
      }
    }
    del(src2) {
      const cap = this.rules.inline.del.exec(src2);
      if (cap) {
        return {
          type: "del",
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
    autolink(src2, mangle2) {
      const cap = this.rules.inline.autolink.exec(src2);
      if (cap) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$1(this.options.mangle ? mangle2(cap[1]) : cap[1]);
          href = "mailto:" + text;
        } else {
          text = escape$1(cap[1]);
          href = text;
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    url(src2, mangle2) {
      let cap;
      if (cap = this.rules.inline.url.exec(src2)) {
        let text, href;
        if (cap[2] === "@") {
          text = escape$1(this.options.mangle ? mangle2(cap[0]) : cap[0]);
          href = "mailto:" + text;
        } else {
          let prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = escape$1(cap[0]);
          if (cap[1] === "www.") {
            href = "http://" + cap[0];
          } else {
            href = cap[0];
          }
        }
        return {
          type: "link",
          raw: cap[0],
          text,
          href,
          tokens: [
            {
              type: "text",
              raw: text,
              text
            }
          ]
        };
      }
    }
    inlineText(src2, smartypants2) {
      const cap = this.rules.inline.text.exec(src2);
      if (cap) {
        let text;
        if (this.lexer.state.inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0];
        } else {
          text = escape$1(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
        }
        return {
          type: "text",
          raw: cap[0],
          text
        };
      }
    }
  }
  const block = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
    hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: noopTest,
    lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
  block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
  block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
  block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
  block.normal = { ...block };
  block.gfm = {
    ...block.normal,
    table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  };
  block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
  block.pedantic = {
    ...block.normal,
    html: edit(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
    ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
  };
  const inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
      rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/
  };
  inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
  inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
  inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
  inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
  inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
  inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
  inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
  inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
  inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
  inline.normal = { ...inline };
  inline.pedantic = {
    ...inline.normal,
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
  };
  inline.gfm = {
    ...inline.normal,
    escape: edit(inline.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  };
  inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
  inline.breaks = {
    ...inline.gfm,
    br: edit(inline.br).replace("{2,}", "*").getRegex(),
    text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  };
  function smartypants(text) {
    return text.replace(/---/g, "锟?).replace(/--/g, "锟?).replace(/(^|[-\u2014/(\[{"\s])'/g, "$1锟?).replace(/'/g, "锟?).replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1锟?).replace(/"/g, "锟?).replace(/\.{3}/g, "锟?);
  }
  function mangle(text) {
    let out = "", i, ch;
    const l = text.length;
    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = "x" + ch.toString(16);
      }
      out += "&#" + ch + ";";
    }
    return out;
  }
  class Lexer {
    constructor(options) {
      this.tokens = [];
      this.tokens.links = /* @__PURE__ */ Object.create(null);
      this.options = options || defaults;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      this.tokenizer.lexer = this;
      this.inlineQueue = [];
      this.state = {
        inLink: false,
        inRawBlock: false,
        top: true
      };
      const rules = {
        block: block.normal,
        inline: inline.normal
      };
      if (this.options.pedantic) {
        rules.block = block.pedantic;
        rules.inline = inline.pedantic;
      } else if (this.options.gfm) {
        rules.block = block.gfm;
        if (this.options.breaks) {
          rules.inline = inline.breaks;
        } else {
          rules.inline = inline.gfm;
        }
      }
      this.tokenizer.rules = rules;
    }
    static get rules() {
      return {
        block,
        inline
      };
    }
    static lex(src2, options) {
      const lexer = new Lexer(options);
      return lexer.lex(src2);
    }
    static lexInline(src2, options) {
      const lexer = new Lexer(options);
      return lexer.inlineTokens(src2);
    }
    lex(src2) {
      src2 = src2.replace(/\r\n|\r/g, "\n");
      this.blockTokens(src2, this.tokens);
      let next2;
      while (next2 = this.inlineQueue.shift()) {
        this.inlineTokens(next2.src, next2.tokens);
      }
      return this.tokens;
    }
    blockTokens(src2, tokens = []) {
      if (this.options.pedantic) {
        src2 = src2.replace(/\t/g, "    ").replace(/^ +$/gm, "");
      } else {
        src2 = src2.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
          return leading + "    ".repeat(tabs.length);
        });
      }
      let token, lastToken, cutSrc, lastParagraphClipped;
      while (src2) {
        if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
            src2 = src2.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.space(src2)) {
          src2 = src2.substring(token.raw.length);
          if (token.raw.length === 1 && tokens.length > 0) {
            tokens[tokens.length - 1].raw += "\n";
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.code(src2)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.fences(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.heading(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.hr(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.blockquote(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.list(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.html(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.def(src2)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.raw;
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }
          continue;
        }
        if (token = this.tokenizer.table(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.lheading(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src2;
        if (this.options.extensions && this.options.extensions.startBlock) {
          let startIndex = Infinity;
          const tempSrc = src2.slice(1);
          let tempStart;
          this.options.extensions.startBlock.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src2.substring(0, startIndex + 1);
          }
        }
        if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
          lastToken = tokens[tokens.length - 1];
          if (lastParagraphClipped && lastToken.type === "paragraph") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          lastParagraphClipped = cutSrc.length !== src2.length;
          src2 = src2.substring(token.raw.length);
          continue;
        }
        if (token = this.tokenizer.text(src2)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += "\n" + token.raw;
            lastToken.text += "\n" + token.text;
            this.inlineQueue.pop();
            this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src2) {
          const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      this.state.top = true;
      return tokens;
    }
    inline(src2, tokens = []) {
      this.inlineQueue.push({ src: src2, tokens });
      return tokens;
    }
    inlineTokens(src2, tokens = []) {
      let token, lastToken, cutSrc;
      let maskedSrc = src2;
      let match;
      let keepPrevChar, prevChar;
      if (this.tokens.links) {
        const links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
      }
      while (src2) {
        if (!keepPrevChar) {
          prevChar = "";
        }
        keepPrevChar = false;
        if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src2, tokens)) {
            src2 = src2.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
          continue;
        }
        if (token = this.tokenizer.escape(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.tag(src2)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.link(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.reflink(src2, this.tokens.links)) {
          src2 = src2.substring(token.raw.length);
          lastToken = tokens[tokens.length - 1];
          if (lastToken && token.type === "text" && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (token = this.tokenizer.emStrong(src2, maskedSrc, prevChar)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.codespan(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.br(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.del(src2)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (token = this.tokenizer.autolink(src2, mangle)) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        if (!this.state.inLink && (token = this.tokenizer.url(src2, mangle))) {
          src2 = src2.substring(token.raw.length);
          tokens.push(token);
          continue;
        }
        cutSrc = src2;
        if (this.options.extensions && this.options.extensions.startInline) {
          let startIndex = Infinity;
          const tempSrc = src2.slice(1);
          let tempStart;
          this.options.extensions.startInline.forEach(function(getStartIndex) {
            tempStart = getStartIndex.call({ lexer: this }, tempSrc);
            if (typeof tempStart === "number" && tempStart >= 0) {
              startIndex = Math.min(startIndex, tempStart);
            }
          });
          if (startIndex < Infinity && startIndex >= 0) {
            cutSrc = src2.substring(0, startIndex + 1);
          }
        }
        if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
          src2 = src2.substring(token.raw.length);
          if (token.raw.slice(-1) !== "_") {
            prevChar = token.raw.slice(-1);
          }
          keepPrevChar = true;
          lastToken = tokens[tokens.length - 1];
          if (lastToken && lastToken.type === "text") {
            lastToken.raw += token.raw;
            lastToken.text += token.text;
          } else {
            tokens.push(token);
          }
          continue;
        }
        if (src2) {
          const errMsg = "Infinite loop on byte: " + src2.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    }
  }
  class Renderer {
    constructor(options) {
      this.options = options || defaults;
    }
    code(code, infostring, escaped) {
      const lang = (infostring || "").match(/\S*/)[0];
      if (this.options.highlight) {
        const out = this.options.highlight(code, lang);
        if (out != null && out !== code) {
          escaped = true;
          code = out;
        }
      }
      code = code.replace(/\n$/, "") + "\n";
      if (!lang) {
        return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
      }
      return '<pre><code class="' + this.options.langPrefix + escape$1(lang) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    blockquote(quote) {
      return `<blockquote>
${quote}</blockquote>
`;
    }
    html(html) {
      return html;
    }
    heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        const id = this.options.headerPrefix + slugger.slug(raw);
        return `<h${level} id="${id}">${text}</h${level}>
`;
      }
      return `<h${level}>${text}</h${level}>
`;
    }
    hr() {
      return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
    }
    list(body, ordered, start2) {
      const type = ordered ? "ol" : "ul", startatt = ordered && start2 !== 1 ? ' start="' + start2 + '"' : "";
      return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
    }
    listitem(text) {
      return `<li>${text}</li>
`;
    }
    checkbox(checked) {
      return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
    }
    paragraph(text) {
      return `<p>${text}</p>
`;
    }
    table(header2, body) {
      if (body)
        body = `<tbody>${body}</tbody>`;
      return "<table>\n<thead>\n" + header2 + "</thead>\n" + body + "</table>\n";
    }
    tablerow(content) {
      return `<tr>
${content}</tr>
`;
    }
    tablecell(content, flags) {
      const type = flags.header ? "th" : "td";
      const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
      return tag + content + `</${type}>
`;
    }
    strong(text) {
      return `<strong>${text}</strong>`;
    }
    em(text) {
      return `<em>${text}</em>`;
    }
    codespan(text) {
      return `<code>${text}</code>`;
    }
    br() {
      return this.options.xhtml ? "<br/>" : "<br>";
    }
    del(text) {
      return `<del>${text}</del>`;
    }
    link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      let out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += ">" + text + "</a>";
      return out;
    }
    image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      let out = `<img src="${href}" alt="${text}"`;
      if (title) {
        out += ` title="${title}"`;
      }
      out += this.options.xhtml ? "/>" : ">";
      return out;
    }
    text(text) {
      return text;
    }
  }
  class TextRenderer {
    strong(text) {
      return text;
    }
    em(text) {
      return text;
    }
    codespan(text) {
      return text;
    }
    del(text) {
      return text;
    }
    html(text) {
      return text;
    }
    text(text) {
      return text;
    }
    link(href, title, text) {
      return "" + text;
    }
    image(href, title, text) {
      return "" + text;
    }
    br() {
      return "";
    }
  }
  class Slugger {
    constructor() {
      this.seen = {};
    }
    serialize(value) {
      return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
    }
    getNextSafeSlug(originalSlug, isDryRun) {
      let slug = originalSlug;
      let occurenceAccumulator = 0;
      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];
        do {
          occurenceAccumulator++;
          slug = originalSlug + "-" + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }
      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }
      return slug;
    }
    slug(value, options = {}) {
      const slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    }
  }
  class Parser {
    constructor(options) {
      this.options = options || defaults;
      this.options.renderer = this.options.renderer || new Renderer();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer();
      this.slugger = new Slugger();
    }
    static parse(tokens, options) {
      const parser = new Parser(options);
      return parser.parse(tokens);
    }
    static parseInline(tokens, options) {
      const parser = new Parser(options);
      return parser.parseInline(tokens);
    }
    parse(tokens, top2 = true) {
      let out = "", i, j, k, l2, l3, row, cell, header2, body, token, ordered, start2, loose, itemBody, item, checked, task, checkbox, ret;
      const l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
          if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
            out += ret || "";
            continue;
          }
        }
        switch (token.type) {
          case "space": {
            continue;
          }
          case "hr": {
            out += this.renderer.hr();
            continue;
          }
          case "heading": {
            out += this.renderer.heading(
              this.parseInline(token.tokens),
              token.depth,
              unescape$1(this.parseInline(token.tokens, this.textRenderer)),
              this.slugger
            );
            continue;
          }
          case "code": {
            out += this.renderer.code(
              token.text,
              token.lang,
              token.escaped
            );
            continue;
          }
          case "table": {
            header2 = "";
            cell = "";
            l2 = token.header.length;
            for (j = 0; j < l2; j++) {
              cell += this.renderer.tablecell(
                this.parseInline(token.header[j].tokens),
                { header: true, align: token.align[j] }
              );
            }
            header2 += this.renderer.tablerow(cell);
            body = "";
            l2 = token.rows.length;
            for (j = 0; j < l2; j++) {
              row = token.rows[j];
              cell = "";
              l3 = row.length;
              for (k = 0; k < l3; k++) {
                cell += this.renderer.tablecell(
                  this.parseInline(row[k].tokens),
                  { header: false, align: token.align[k] }
                );
              }
              body += this.renderer.tablerow(cell);
            }
            out += this.renderer.table(header2, body);
            continue;
          }
          case "blockquote": {
            body = this.parse(token.tokens);
            out += this.renderer.blockquote(body);
            continue;
          }
          case "list": {
            ordered = token.ordered;
            start2 = token.start;
            loose = token.loose;
            l2 = token.items.length;
            body = "";
            for (j = 0; j < l2; j++) {
              item = token.items[j];
              checked = item.checked;
              task = item.task;
              itemBody = "";
              if (item.task) {
                checkbox = this.renderer.checkbox(checked);
                if (loose) {
                  if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                    item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                    if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                      item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                    }
                  } else {
                    item.tokens.unshift({
                      type: "text",
                      text: checkbox
                    });
                  }
                } else {
                  itemBody += checkbox;
                }
              }
              itemBody += this.parse(item.tokens, loose);
              body += this.renderer.listitem(itemBody, task, checked);
            }
            out += this.renderer.list(body, ordered, start2);
            continue;
          }
          case "html": {
            out += this.renderer.html(token.text);
            continue;
          }
          case "paragraph": {
            out += this.renderer.paragraph(this.parseInline(token.tokens));
            continue;
          }
          case "text": {
            body = token.tokens ? this.parseInline(token.tokens) : token.text;
            while (i + 1 < l && tokens[i + 1].type === "text") {
              token = tokens[++i];
              body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
            }
            out += top2 ? this.renderer.paragraph(body) : body;
            continue;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
    parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      let out = "", i, token, ret;
      const l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
          if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
            out += ret || "";
            continue;
          }
        }
        switch (token.type) {
          case "escape": {
            out += renderer.text(token.text);
            break;
          }
          case "html": {
            out += renderer.html(token.text);
            break;
          }
          case "link": {
            out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
            break;
          }
          case "image": {
            out += renderer.image(token.href, token.title, token.text);
            break;
          }
          case "strong": {
            out += renderer.strong(this.parseInline(token.tokens, renderer));
            break;
          }
          case "em": {
            out += renderer.em(this.parseInline(token.tokens, renderer));
            break;
          }
          case "codespan": {
            out += renderer.codespan(token.text);
            break;
          }
          case "br": {
            out += renderer.br();
            break;
          }
          case "del": {
            out += renderer.del(this.parseInline(token.tokens, renderer));
            break;
          }
          case "text": {
            out += renderer.text(token.text);
            break;
          }
          default: {
            const errMsg = 'Token with "' + token.type + '" type was not found.';
            if (this.options.silent) {
              console.error(errMsg);
              return;
            } else {
              throw new Error(errMsg);
            }
          }
        }
      }
      return out;
    }
  }
  class Hooks {
    constructor(options) {
      this.options = options || defaults;
    }
    preprocess(markdown2) {
      return markdown2;
    }
    postprocess(html) {
      return html;
    }
  }
  __publicField(Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
    "preprocess",
    "postprocess"
  ]));
  function onError(silent, async, callback) {
    return (e) => {
      e.message += "\nPlease report this to https://github.com/markedjs/marked.";
      if (silent) {
        const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
        if (async) {
          return Promise.resolve(msg);
        }
        if (callback) {
          callback(null, msg);
          return;
        }
        return msg;
      }
      if (async) {
        return Promise.reject(e);
      }
      if (callback) {
        callback(e);
        return;
      }
      throw e;
    };
  }
  function parseMarkdown(lexer, parser) {
    return (src2, opt, callback) => {
      if (typeof opt === "function") {
        callback = opt;
        opt = null;
      }
      const origOpt = { ...opt };
      opt = { ...marked.defaults, ...origOpt };
      const throwError = onError(opt.silent, opt.async, callback);
      if (typeof src2 === "undefined" || src2 === null) {
        return throwError(new Error("marked(): input parameter is undefined or null"));
      }
      if (typeof src2 !== "string") {
        return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src2) + ", string expected"));
      }
      checkSanitizeDeprecation(opt);
      if (opt.hooks) {
        opt.hooks.options = opt;
      }
      if (callback) {
        const highlight = opt.highlight;
        let tokens;
        try {
          if (opt.hooks) {
            src2 = opt.hooks.preprocess(src2);
          }
          tokens = lexer(src2, opt);
        } catch (e) {
          return throwError(e);
        }
        const done = function(err) {
          let out;
          if (!err) {
            try {
              if (opt.walkTokens) {
                marked.walkTokens(tokens, opt.walkTokens);
              }
              out = parser(tokens, opt);
              if (opt.hooks) {
                out = opt.hooks.postprocess(out);
              }
            } catch (e) {
              err = e;
            }
          }
          opt.highlight = highlight;
          return err ? throwError(err) : callback(null, out);
        };
        if (!highlight || highlight.length < 3) {
          return done();
        }
        delete opt.highlight;
        if (!tokens.length)
          return done();
        let pending = 0;
        marked.walkTokens(tokens, function(token) {
          if (token.type === "code") {
            pending++;
            setTimeout(() => {
              highlight(token.text, token.lang, function(err, code) {
                if (err) {
                  return done(err);
                }
                if (code != null && code !== token.text) {
                  token.text = code;
                  token.escaped = true;
                }
                pending--;
                if (pending === 0) {
                  done();
                }
              });
            }, 0);
          }
        });
        if (pending === 0) {
          done();
        }
        return;
      }
      if (opt.async) {
        return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src2) : src2).then((src3) => lexer(src3, opt)).then((tokens) => opt.walkTokens ? Promise.all(marked.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser(tokens, opt)).then((html) => opt.hooks ? opt.hooks.postprocess(html) : html).catch(throwError);
      }
      try {
        if (opt.hooks) {
          src2 = opt.hooks.preprocess(src2);
        }
        const tokens = lexer(src2, opt);
        if (opt.walkTokens) {
          marked.walkTokens(tokens, opt.walkTokens);
        }
        let html = parser(tokens, opt);
        if (opt.hooks) {
          html = opt.hooks.postprocess(html);
        }
        return html;
      } catch (e) {
        return throwError(e);
      }
    };
  }
  function marked(src2, opt, callback) {
    return parseMarkdown(Lexer.lex, Parser.parse)(src2, opt, callback);
  }
  marked.options = marked.setOptions = function(opt) {
    marked.defaults = { ...marked.defaults, ...opt };
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.getDefaults = getDefaults;
  marked.defaults = defaults;
  marked.use = function(...args) {
    const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = marked.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if (ext.renderer) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if (ext.tokenizer) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            if (extensions[ext.level]) {
              extensions[ext.level].unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if (ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = marked.defaults.renderer || new Renderer();
        for (const prop in pack.renderer) {
          const prevRenderer = renderer[prop];
          renderer[prop] = (...args2) => {
            let ret = pack.renderer[prop].apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret;
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = marked.defaults.tokenizer || new Tokenizer();
        for (const prop in pack.tokenizer) {
          const prevTokenizer = tokenizer[prop];
          tokenizer[prop] = (...args2) => {
            let ret = pack.tokenizer[prop].apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = marked.defaults.hooks || new Hooks();
        for (const prop in pack.hooks) {
          const prevHook = hooks[prop];
          if (Hooks.passThroughHooks.has(prop)) {
            hooks[prop] = (arg) => {
              if (marked.defaults.async) {
                return Promise.resolve(pack.hooks[prop].call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = pack.hooks[prop].call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[prop] = (...args2) => {
              let ret = pack.hooks[prop].apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens = marked.defaults.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(pack.walkTokens.call(this, token));
          if (walkTokens) {
            values = values.concat(walkTokens.call(this, token));
          }
          return values;
        };
      }
      marked.setOptions(opts);
    });
  };
  marked.walkTokens = function(tokens, callback) {
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(marked, token));
      switch (token.type) {
        case "table": {
          for (const cell of token.header) {
            values = values.concat(marked.walkTokens(cell.tokens, callback));
          }
          for (const row of token.rows) {
            for (const cell of row) {
              values = values.concat(marked.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          values = values.concat(marked.walkTokens(token.items, callback));
          break;
        }
        default: {
          if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
            marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
              values = values.concat(marked.walkTokens(token[childTokens], callback));
            });
          } else if (token.tokens) {
            values = values.concat(marked.walkTokens(token.tokens, callback));
          }
        }
      }
    }
    return values;
  };
  marked.parseInline = parseMarkdown(Lexer.lexInline, Parser.parseInline);
  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.Tokenizer = Tokenizer;
  marked.Slugger = Slugger;
  marked.Hooks = Hooks;
  marked.parse = marked;
  marked.options;
  marked.setOptions;
  marked.use;
  marked.walkTokens;
  marked.parseInline;
  Parser.parse;
  Lexer.lex;
  function markdown(md) {
    return marked.parse(md);
  }
  const debug$1 = typeof process === "object" && process.env && {}.NODE_DEBUG && /\bsemver\b/i.test({}.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  var debug_1 = debug$1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH$1 = 256;
  const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || 9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  var constants = {
    MAX_LENGTH: MAX_LENGTH$1,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  var re$1 = { exports: {} };
  (function(module2, exports3) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2,
      MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2,
      MAX_LENGTH: MAX_LENGTH2
    } = constants;
    const debug2 = debug_1;
    exports3 = module2.exports = {};
    const re2 = exports3.re = [];
    const safeRe = exports3.safeRe = [];
    const src2 = exports3.src = [];
    const safeSrc = exports3.safeSrc = [];
    const t2 = exports3.t = {};
    let R2 = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH2],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]
    ];
    const makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R2++;
      debug2(name, index, value);
      t2[name] = index;
      src2[index] = value;
      safeSrc[index] = safe;
      re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src2[t2.NUMERICIDENTIFIER]})\\.(${src2[t2.NUMERICIDENTIFIER]})\\.(${src2[t2.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src2[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src2[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src2[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src2[t2.NONNUMERICIDENTIFIER]}|${src2[t2.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src2[t2.NONNUMERICIDENTIFIER]}|${src2[t2.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src2[t2.PRERELEASEIDENTIFIER]}(?:\\.${src2[t2.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src2[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src2[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src2[t2.BUILDIDENTIFIER]}(?:\\.${src2[t2.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src2[t2.MAINVERSION]}${src2[t2.PRERELEASE]}?${src2[t2.BUILD]}?`);
    createToken("FULL", `^${src2[t2.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src2[t2.MAINVERSIONLOOSE]}${src2[t2.PRERELEASELOOSE]}?${src2[t2.BUILD]}?`);
    createToken("LOOSE", `^${src2[t2.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src2[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src2[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src2[t2.XRANGEIDENTIFIER]})(?:\\.(${src2[t2.XRANGEIDENTIFIER]})(?:\\.(${src2[t2.XRANGEIDENTIFIER]})(?:${src2[t2.PRERELEASE]})?${src2[t2.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src2[t2.XRANGEIDENTIFIERLOOSE]})(?:${src2[t2.PRERELEASELOOSE]})?${src2[t2.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src2[t2.GTLT]}\\s*${src2[t2.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src2[t2.GTLT]}\\s*${src2[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?`);
    createToken("COERCE", `${src2[t2.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src2[t2.COERCEPLAIN] + `(?:${src2[t2.PRERELEASE]})?(?:${src2[t2.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src2[t2.COERCE], true);
    createToken("COERCERTLFULL", src2[t2.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src2[t2.LONETILDE]}\\s+`, true);
    exports3.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src2[t2.LONETILDE]}${src2[t2.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src2[t2.LONETILDE]}${src2[t2.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src2[t2.LONECARET]}\\s+`, true);
    exports3.caretTrimReplace = "$1^";
    createToken("CARET", `^${src2[t2.LONECARET]}${src2[t2.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src2[t2.LONECARET]}${src2[t2.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src2[t2.GTLT]}\\s*(${src2[t2.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src2[t2.GTLT]}\\s*(${src2[t2.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src2[t2.GTLT]}\\s*(${src2[t2.LOOSEPLAIN]}|${src2[t2.XRANGEPLAIN]})`, true);
    exports3.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src2[t2.XRANGEPLAIN]})\\s+-\\s+(${src2[t2.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src2[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src2[t2.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re$1, re$1.exports);
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions$1 = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  var parseOptions_1 = parseOptions$1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers$1 = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  };
  const rcompareIdentifiers = (a, b) => compareIdentifiers$1(b, a);
  var identifiers = {
    compareIdentifiers: compareIdentifiers$1,
    rcompareIdentifiers
  };
  const debug = debug_1;
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants;
  const { safeRe: re, t } = re$1.exports;
  const parseOptions = parseOptions_1;
  const { compareIdentifiers } = identifiers;
  class SemVer$2 {
    constructor(version, options) {
      options = parseOptions(options);
      if (version instanceof SemVer$2) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug("SemVer", version, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
      if (!m) {
        throw new TypeError(`Invalid Version: ${version}`);
      }
      this.raw = version;
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer$2)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer$2(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer$2)) {
        other = new SemVer$2(other, this.options);
      }
      if (this.major < other.major) {
        return -1;
      }
      if (this.major > other.major) {
        return 1;
      }
      if (this.minor < other.minor) {
        return -1;
      }
      if (this.minor > other.minor) {
        return 1;
      }
      if (this.patch < other.patch) {
        return -1;
      }
      if (this.patch > other.patch) {
        return 1;
      }
      return 0;
    }
    comparePre(other) {
      if (!(other instanceof SemVer$2)) {
        other = new SemVer$2(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i = 0;
      do {
        const a = this.prerelease[i];
        const b = other.prerelease[i];
        debug("prerelease compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer$2)) {
        other = new SemVer$2(other, this.options);
      }
      let i = 0;
      do {
        const a = this.build[i];
        const b = other.build[i];
        debug("build compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    inc(release, identifier, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier) {
          const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
          if (!match || match[1] !== identifier) {
            throw new Error(`invalid identifier: ${identifier}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier, identifierBase);
          this.inc("pre", identifier, identifierBase);
          break;
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier, identifierBase);
          }
          this.inc("pre", identifier, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i = this.prerelease.length;
            while (--i >= 0) {
              if (typeof this.prerelease[i] === "number") {
                this.prerelease[i]++;
                i = -2;
              }
            }
            if (i === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            if (identifierBase === false) {
              prerelease = [identifier];
            }
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  var semver = SemVer$2;
  const SemVer$1 = semver;
  const compare$1 = (a, b, loose) => new SemVer$1(a, loose).compare(new SemVer$1(b, loose));
  var compare_1 = compare$1;
  const compare = compare_1;
  const gt = (a, b, loose) => compare(a, b, loose) > 0;
  var gt_1 = gt;
  const SemVer = semver;
  const parse$1 = (version, options, throwErrors = false) => {
    if (version instanceof SemVer) {
      return version;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  var parse_1 = parse$1;
  const parse = parse_1;
  const valid = (version, options) => {
    const v = parse(version, options);
    return v ? v.version : null;
  };
  var valid_1 = valid;
  const RenderScript = lib.createRenderScript({
    name: "馃柤锟?绐楀彛璁剧疆"
  });
  const transformImgLinkOfQuestion = (question) => {
    const dom2 = new DOMParser().parseFromString(question, "text/html");
    for (const img of Array.from(dom2.querySelectorAll("img"))) {
      img.replaceWith(img.src);
    }
    return dom2.documentElement.innerHTML.replace(/https?:\/\/.+?\.(png|jpg|jpeg|gif)/g, (img) => {
      return `<img src="${img}" />`;
    });
  };
  class SearchInfosElement extends HTMLElement {
    constructor() {
      super(...arguments);
      this.infos = [];
      this.question = "";
    }
    connectedCallback() {
      const question = transformImgLinkOfQuestion(this.question || "锟?);
      const type_text = {
        single: "鍗曢€夐",
        multiple: "澶氶€夐",
        judgement: "鍒ゆ柇锟?,
        completion: "濉┖锟?
      };
      const type_label = this.type ? Reflect.get(type_text, this.type) : "";
      this.append(
        lib.h(
          "div",
          [
            ...type_label ? [lib.h("span", { className: "search-result-question-type" }, type_label)] : [],
            lib.h("span", { innerHTML: question }),
            createQuestionTitleExtra(this.question)
          ],
          (div) => {
            div.className = "search-info-title";
          }
        )
      );
      this.append(
        ...this.infos.map((info) => {
          return lib.h("details", { open: true, className: "search-info-details" }, [
            lib.h("summary", [lib.h("a", { href: info.homepage, innerText: info.name, target: "_blank" })]),
            ...(info.error ? [lib.h("span", { className: "error" }, [info.error || "缃戠粶閿欒鎴栬€呮湭鐭ラ敊锟?])] : []).concat([
              ...info.results.map((ans) => {
                const title = transformImgLinkOfQuestion(ans[0] || this.question || "锟?);
                const answer = transformImgLinkOfQuestion(ans[1] || "锟?);
                const extra_data = JSON.parse(JSON.stringify(ans[2] || {}));
                if (extra_data.ai) {
                  extra_data.tags = extra_data.tags || [];
                  extra_data.tags.push({
                    text: "AI",
                    title: "姝ょ瓟妗堢敱 AI 鐢熸垚锛屼粎渚涘弬锟?,
                    color: "blue"
                  });
                }
                if (extra_data.cache) {
                  extra_data.tags = extra_data.tags || [];
                  extra_data.tags.push({
                    text: "棰樺簱缂撳瓨",
                    title: "姝ょ瓟妗堟潵鑷湰鍦扮紦瀛橈紝鐢卞湪绾块搴撴悳绱㈠悗淇濆瓨鍦ㄦ湰鍦般€俓n- 娓呯┖缂撳瓨锛氳鍓嶅線閫氱敤-鎷撳睍搴旂敤-棰樺簱缂撳瓨\n- 鍏抽棴缂撳瓨锛氳鍓嶅線閫氱敤-鍏ㄥ眬璁剧疆-棰樺簱缂撳瓨",
                    color: "gray"
                  });
                }
                return lib.h("div", { className: "search-result" }, [
                  lib.h("div", { className: "question" }, [lib.h("span", { innerHTML: title })]),
                  lib.h("div", { className: "answer" }, [
                    lib.h("span", "绛旀锟?),
                    ...extra_data.tags ? extra_data.tags.map(
                      (tag) => lib.$ui.tooltip(
                        lib.h("span", {
                          className: "search-result-answer-tag " + tag.color,
                          innerHTML: tag.text,
                          title: tag.title,
                          dataset: { title: tag.title }
                        })
                      )
                    ) : [],
                    ...splitAnswer(answer).map((a) => lib.h("code", { innerHTML: a }))
                  ])
                ]);
              })
            ])
          ]);
        })
      );
      $.onresize(this, (sr) => {
        sr.style.maxHeight = window.innerHeight / 2 + "px";
      });
    }
  }
  const $render = {
    moveToEdge(x = 80, y = 100) {
      CommonProject.scripts.render.methods.minimize();
      CommonProject.scripts.render.methods.setPosition(x, y);
    }
  };
  const state$6 = {
    console: {
      listenerIds: {
        logs: 0
      }
    },
    app: {
      listenerIds: {
        sync: 0,
        connected: 0,
        closeSync: 0
      }
    }
  };
  const BackgroundProject = lib.Project.create({
    name: "鍚庡彴",
    domains: [],
    scripts: {
      elementRegister: new lib.Script({
        name: "馃敆 鍏冪礌娉ㄥ唽",
        hideInPanel: true,
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        onstart() {
          lib.$.loadCustomElements([SearchInfosElement]);
        }
      }),
      console: new lib.Script({
        name: "馃搫 鏃ュ織杈撳嚭",
        matches: [["鎵€锟?, /.*/]],
        namespace: "render.console",
        configs: {
          logs: {
            defaultValue: []
          }
        },
        onrender({ panel }) {
          const getTypeDesc = (type) => type === "info" ? "淇℃伅" : type === "error" ? "閿欒" : type === "warn" ? "璀﹀憡" : type === "debug" ? "璋冭瘯" : "鏃ュ織";
          const createLog = (log) => {
            const date = new Date(log.time);
            const item = lib.h(
              "div",
              {
                title: "鍙屽嚮澶嶅埗鏃ュ織淇℃伅",
                className: "item"
              },
              [
                lib.h(
                  "span",
                  { className: "time" },
                  `${date.getHours().toFixed(0).padStart(2, "0")}:${date.getMinutes().toFixed(0).padStart(2, "0")} `
                ),
                lib.h("span", { className: log.type }, `[${getTypeDesc(log.type)}]`),
                lib.h("span", ":" + log.content)
              ]
            );
            item.addEventListener("dblclick", () => {
              navigator.clipboard.writeText(
                Object.keys(log).map((k) => `${k}: ${log[k]}`).join("\n")
              );
            });
            return item;
          };
          const showLogs = () => {
            const div2 = lib.h("div", { className: "card console" });
            const logs2 = this.cfg.logs.map((log) => createLog(log));
            if (logs2.length) {
              div2.replaceChildren(...logs2);
            } else {
              div2.replaceChildren(
                lib.h("div", "鏆傛棤浠讳綍鏃ュ織", (div3) => {
                  div3.style.textAlign = "center";
                })
              );
            }
            return { div: div2, logs: logs2 };
          };
          const isScrollBottom = (div2) => {
            const { scrollHeight, scrollTop, clientHeight } = div2;
            return scrollTop + clientHeight + 50 > scrollHeight;
          };
          const { div, logs } = showLogs();
          this.offConfigChange(state$6.console.listenerIds.logs);
          state$6.console.listenerIds.logs = this.onConfigChange("logs", (logs2) => {
            const log = createLog(logs2[logs2.length - 1]);
            div.append(log);
            setTimeout(() => {
              if (isScrollBottom(div)) {
                log.scrollIntoView();
              }
            }, 10);
          });
          const show = () => {
            panel.body.replaceChildren(div);
            setTimeout(() => {
              var _a;
              (_a = logs[logs.length - 1]) == null ? void 0 : _a.scrollIntoView();
            }, 10);
          };
          show();
        }
      }),
      appConfigSync: new lib.Script({
        name: "馃攧锟?杞欢閰嶇疆鍚屾",
        namespace: "background.app",
        matches: [["鎵€鏈夐〉锟?, /./]],
        hideInPanel: lib.$gm.getInfos() === void 0,
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              [
                lib.h("span", [
                  "濡傛灉鎮ㄤ娇锟?,
                  lib.h("a", { href: "https://docs.ocsjs.com/docs/app", target: "_blank" }, "OCS妗岄潰杞欢"),
                  "鍚姩娴忚鍣紝骞朵娇鐢ㄦ鑴氭湰锟?
                ]),
                "鎴戜滑浼氬悓姝ヨ蒋浠朵腑鐨勯厤缃埌姝よ剼鏈笂锛屾柟渚垮涓祻瑙堝櫒鐨勭鐞嗭拷?,
                "绐楀彛璁剧疆浠ュ強鍚庡彴闈㈡澘鎵€鏈夎缃笉浼氳繘琛屽悓姝ワ拷?
              ],
              "濡傛灉涓嶆槸锛屾偍鍙互蹇界暐姝よ剼鏈拷?
            ]).outerHTML
          },
          sync_status: {
            defaultValue: "unconnect"
          },
          closeSync: {
            defaultValue: false,
            label: "鍏抽棴鍚屾",
            attrs: {
              type: "checkbox"
            }
          }
        },
        onrender({ panel }) {
          panel.lockWrapper.remove();
          panel.configsContainer.classList.remove("lock");
          const update = () => {
            if (this.cfg.closeSync) {
              const tip = lib.h("div", { className: "notes card" }, ["宸插叧闂悓姝ワ拷?]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            } else if (this.cfg.sync_status === "synced") {
              const tip = lib.h("div", { className: "notes card" }, [`宸叉垚鍔熷悓姝ヨ蒋浠朵腑鐨勯厤锟?`]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            } else if (this.cfg.sync_status === "unconnect") {
              const tip = lib.h("div", { className: "notes card" }, ["鏈悓姝ヨ蒋浠堕厤缃紝鍙兘鏄闈㈣蒋浠舵湭鍚姩锟?]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            } else if (this.cfg.sync_status === "not_playwright_environment") {
              const tip = lib.h("div", { className: "notes card" }, ["褰撳墠娴忚鍣ㄤ笉鏄敱妗岄潰绔蒋浠跺惎鍔紝鏃犳硶鍚屾閰嶇疆锟?]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            } else if (this.cfg.sync_status === "not_open_sync") {
              const tip = lib.h("div", { className: "notes card" }, ["妗岄潰绔蒋浠舵湭寮€鍚厤缃悓姝ュ姛锟?]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            } else if (this.cfg.sync_status === "empty_config") {
              const tip = lib.h("div", { className: "notes card" }, ["宸叉垚鍔熻繛鎺ュ埌杞欢锛屼絾閰嶇疆涓虹┖锟?]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            } else {
              const tip = lib.h("div", { className: "notes card" }, ["鍚屾鐘舵€佹湭鐭ワ紝璇风◢鍚庨噸璇曪拷?]);
              panel.body.replaceChildren(lib.h("hr"), tip);
            }
          };
          update();
          this.offConfigChange(state$6.app.listenerIds.sync);
          this.offConfigChange(state$6.app.listenerIds.connected);
          this.offConfigChange(state$6.app.listenerIds.closeSync);
          state$6.app.listenerIds.connected = this.onConfigChange("sync_status", update);
          state$6.app.listenerIds.closeSync = this.onConfigChange("closeSync", (closeSync) => {
            if (closeSync) {
              this.cfg.sync_status = "not_open_sync";
              lib.$message.success({ content: "宸插叧闂悓姝ワ紝鍒锋柊椤甸潰鍚庣敓锟? });
            }
          });
        },
        async onactive() {
          var _a;
          if (lib.$.isInTopWindow()) {
            if (this.cfg.closeSync) {
              $console.log("閰嶇疆鍚屾宸插叧锟?);
              return;
            }
            this.cfg.sync_status = "unconnect";
            try {
              const res = await request("http://localhost:15319/browser", {
                type: "GM_xmlhttpRequest",
                method: "get",
                responseType: "json"
              });
              if (!res) {
                this.cfg.sync_status = "unconnect";
                return;
              }
              const open_sync = await request("http://localhost:15319/is-browser-config-sync", {
                type: "GM_xmlhttpRequest",
                method: "get",
                responseType: "text"
              });
              if (open_sync !== "true") {
                this.cfg.sync_status = "not_open_sync";
                return;
              }
              if (Object.keys(res).length === 0) {
                this.cfg.sync_status = "not_open_sync";
                return;
              }
              const environment_res = await request("/ocs-environment", {
                type: "fetch",
                method: "get"
              });
              const environment = environment_res == null ? void 0 : environment_res.environment;
              if (!environment || environment !== "playwright") {
                this.cfg.sync_status = "not_playwright_environment";
                return;
              }
              for (const key in res) {
                if (Object.prototype.hasOwnProperty.call(res, key)) {
                  if (RenderScript.namespace && key.startsWith(RenderScript.namespace)) {
                    Reflect.deleteProperty(res, key);
                  }
                  for (const scriptKey in BackgroundProject.scripts) {
                    if (Object.prototype.hasOwnProperty.call(BackgroundProject.scripts, scriptKey)) {
                      const script2 = Reflect.get(BackgroundProject.scripts, scriptKey);
                      if (script2.namespace && key.startsWith(script2.namespace)) {
                        Reflect.deleteProperty(res, key);
                      }
                    }
                  }
                }
              }
              for (const project2 of definedProjects()) {
                for (const key in project2.scripts) {
                  if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
                    const script2 = project2.scripts[key];
                    for (const ck in script2.configs) {
                      if (Object.prototype.hasOwnProperty.call(script2.configs, ck)) {
                        if (((_a = script2.configs[ck].extra) == null ? void 0 : _a.appConfigSync) === false) {
                          Reflect.deleteProperty(res, lib.$.namespaceKey(script2.namespace, ck));
                        }
                      }
                    }
                  }
                }
              }
              for (const key in res) {
                if (Object.prototype.hasOwnProperty.call(res, key)) {
                  lib.$store.set(key, res[key]);
                }
              }
              for (const project2 of definedProjects()) {
                if (project2.name === BackgroundProject.name) {
                  continue;
                }
                for (const key in project2.scripts) {
                  if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
                    const script2 = project2.scripts[key];
                    const originalRender = script2.onrender;
                    script2.onrender = ({ panel, header: header2 }) => {
                      var _a2, _b;
                      originalRender == null ? void 0 : originalRender({ panel, header: header2 });
                      if (panel.configsContainer.children.length) {
                        panel.configsContainer.classList.add("lock");
                        panel.lockWrapper.style.width = ((_a2 = panel.configsContainer.clientWidth) != null ? _a2 : panel.clientWidth) + "px";
                        panel.lockWrapper.style.height = ((_b = panel.configsContainer.clientHeight) != null ? _b : panel.clientHeight) + "px";
                        panel.configsContainer.prepend(panel.lockWrapper);
                        panel.lockWrapper.title = "馃毇宸插悓姝CS妗岄潰鐗堣蒋浠堕厤缃紝濡傞渶淇敼璇峰湪妗岄潰鐗堣蒋浠剁殑宸︿晶鏍忚锟?閫氱敤璁剧疆-OCS閰嶇疆锛屼腑杩涜淇敼銆俓n\n鎴栬€呭墠寰€鑴氭湰鎮诞锟?鍚庡彴-杞欢閰嶇疆鍚屾 鍏抽棴閰嶇疆鍚屾鍔熻兘銆俓n\n鍙弻鍑诲己鍒朵慨鏀癸紝骞跺叧闂悓姝ラ厤锟?;
                        panel.lockWrapper = lib.$ui.tooltip(panel.lockWrapper);
                        panel.lockWrapper.addEventListener("dblclick", () => {
                          var _a3;
                          panel.configsContainer.classList.remove("lock");
                          panel.lockWrapper.remove();
                          script2.onrender = originalRender;
                          lib.$message.warn({
                            content: "宸茶В闄ら厤缃悓姝ワ紝鍙甯镐慨鏀归厤缃€傛兂寮€鍚悓姝ヨ鍓嶅線锛氬悗锟?杞欢閰嶇疆鍚屾",
                            duration: 10
                          });
                          this.cfg.closeSync = true;
                          if (script2.panel && script2.header) {
                            (_a3 = script2.onrender) == null ? void 0 : _a3.call(script2, { panel: script2.panel, header: script2.header });
                          }
                        });
                      }
                    };
                    if (script2.panel && script2.header) {
                      script2.onrender({ panel: script2.panel, header: script2.header });
                    }
                  }
                }
              }
              this.cfg.sync_status = "synced";
            } catch (e) {
              console.error(e);
              this.cfg.sync_status = "unconnect";
            }
          }
        }
      }),
      update: new lib.Script({
        name: "馃摜 鏇存柊妯″潡",
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        namespace: "background.update",
        configs: {
          notes: {
            defaultValue: "鑴氭湰鑷姩鏇存柊妯″潡锛屽鏋滄湁鏂扮殑鐗堟湰浼氳嚜鍔ㄩ€氱煡锟?
          },
          autoNotify: {
            defaultValue: true,
            label: "寮€鍚洿鏂伴€氱煡",
            attrs: { type: "checkbox", title: "褰撴湁鏈€鏂扮殑鐗堟湰鏃惰嚜鍔ㄥ脊绐楅€氱煡锛岄粯璁ゅ紑锟? }
          },
          notToday: {
            defaultValue: -1
          },
          ignoreVersions: {
            defaultValue: []
          }
        },
        methods() {
          return {
            getLastVersion: async () => {
              return await request("https://cdn.ocsjs.com/ocs-version.json?t=" + Date.now(), {
                method: "get",
                type: "GM_xmlhttpRequest"
              });
            }
          };
        },
        async onrender({ panel }) {
          var _a;
          const version = await this.methods.getLastVersion();
          const infos = lib.$gm.getInfos();
          if (!infos) {
            return;
          }
          const changeLog = lib.h("button", { className: "base-style-button-secondary" }, "馃搫鏌ョ湅鏇存柊鏃ュ織");
          changeLog.onclick = () => CommonProject.scripts.apps.methods.showChangelog();
          const updatePage = ((_a = this.startConfig) == null ? void 0 : _a.updatePage) || "";
          panel.body.replaceChildren(
            lib.h("div", { className: "card" }, [
              lib.h("hr"),
              lib.h("div", ["鏈€鏂扮増鏈細" + version["last-version"] + " - ", changeLog]),
              lib.h("hr"),
              lib.h("div", "褰撳墠鐗堟湰锟? + infos.script.version),
              lib.h("div", "鑴氭湰绠＄悊鍣細" + infos.scriptHandler),
              lib.h("div", ["鑴氭湰鏇存柊閾炬帴锟?, lib.h("a", { target: "_blank", href: updatePage }, [updatePage || "锟?])])
            ])
          );
          console.log("versions", {
            notToday: this.cfg.notToday,
            ignoreVersions: this.cfg.ignoreVersions,
            version
          });
        },
        oncomplete() {
          if (this.cfg.autoNotify && lib.$.isInTopWindow()) {
            if (this.cfg.notToday === -1 || this.cfg.notToday !== new Date().getDate()) {
              const infos = lib.$gm.getInfos();
              if (infos) {
                if (!!valid_1(infos.script.version) === false) {
                  lib.$message.error(`褰撳墠鐗堟湰锟?(${infos.script.version}) 涓嶇鍚坰emver鐗堟湰涔﹀啓瑙勮寖锛岃閲嶆柊淇敼鐗堟湰銆俙);
                  return;
                }
                setTimeout(async () => {
                  var _a;
                  const version = await this.methods.getLastVersion();
                  const last = version["last-version"];
                  if (this.cfg.ignoreVersions.includes(last) === false && gt_1(last, infos.script.version)) {
                    const updatePage = ((_a = this.startConfig) == null ? void 0 : _a.updatePage) || "";
                    const modal2 = lib.$modal.confirm({
                      maskCloseable: false,
                      width: 600,
                      content: lib.$ui.notes([`妫€娴嬪埌鏂扮増鏈彂锟?${last} 锛歚, [...version.notes || []]]),
                      footer: lib.h("div", [
                        lib.h("button", { className: "base-style-button-secondary", innerText: "璺宠繃姝ょ増锟? }, (btn) => {
                          btn.onclick = () => {
                            this.cfg.ignoreVersions = [...this.cfg.ignoreVersions, last];
                            modal2 == null ? void 0 : modal2.remove();
                          };
                        }),
                        lib.h("button", { className: "base-style-button-secondary", innerText: "浠婃棩涓嶅啀鎻愮ず" }, (btn) => {
                          btn.onclick = () => {
                            this.cfg.notToday = new Date().getDate();
                            modal2 == null ? void 0 : modal2.remove();
                          };
                        }),
                        lib.h("button", { className: "base-style-button", innerText: "鍓嶅線鏇存柊" }, (btn) => {
                          btn.onclick = () => {
                            if (updatePage) {
                              window.open(updatePage, "_blank");
                              modal2 == null ? void 0 : modal2.remove();
                            } else {
                              lib.$message.error({ content: "鏃犳硶鍓嶅線鏇存柊椤甸潰锛屾洿鏂伴摼鎺ヤ负锟? });
                            }
                          };
                        })
                      ])
                    });
                  }
                }, 5 * 1e3);
              }
            }
          }
        }
      }),
      dev: new lib.Script({
        name: "馃洜锟?寮€鍙戣€呰皟锟?,
        namespace: "background.dev",
        matches: [["鎵€鏈夐〉锟?, /./]],
        configs: {
          notes: {
            defaultValue: "寮€鍙戜汉鍛樿皟璇曠敤锟?br>娉ㄥ叆OCS_CONTEXT鍏ㄥ眬鍙橀噺銆傜敤鎴峰彲蹇界暐姝ら〉闈拷?
          },
          show_debug_cursor: {
            defaultValue: true,
            label: "杞欢杈呭姪鐐瑰嚮鏃舵樉绀洪紶鏍囦綅锟?,
            attrs: { type: "checkbox" }
          }
        },
        methods() {
          return {
            getRemotePlaywrightCurrentPage: () => {
              return RemotePlaywright.getRemotePage(this.cfg.show_debug_cursor, console.debug);
            }
          };
        },
        onrender({ panel }) {
          const injectBtn = lib.h("button", { className: "base-style-button" }, "鐐瑰嚮娉ㄥ叆鍏ㄥ眬鍙橀噺");
          injectBtn.addEventListener("click", () => {
            lib.$gm.unsafeWindow.OCS_CONTEXT = self;
          });
          const showTabDataBtn = lib.h("button", { className: "base-style-button" }, "鏄剧ずTab瀛樺偍");
          lib.$gm.getTab((tab) => {
            const els = [];
            for (const key in tab) {
              if (Object.prototype.hasOwnProperty.call(tab, key)) {
                els.push(lib.h("div", [lib.h("b", key + " : "), lib.h("code", JSON.stringify(tab[key]))]));
              }
            }
            showTabDataBtn.addEventListener("click", () => {
              lib.$modal.simple({
                content: lib.h("div", els),
                width: window.document.documentElement.clientWidth / 2
              });
            });
          });
          panel.body.replaceChildren(lib.h("div", { className: "card" }, [lib.h("hr"), injectBtn, showTabDataBtn]));
        }
      }),
      appLoginHelper: new lib.Script({
        name: "杞欢鐧诲綍杈呭姪",
        matches: [
          ["瓒呮槦鐧诲綍", "passport2.chaoxing.com/login"],
          ["鏅烘収鏍戠櫥锟?, "passport.zhihuishu.com/login"],
          ["鑱屾暀浜戠櫥锟?, "zjy2.icve.com.cn/portal/login.html"],
          ["鏅烘収鑱屾暀鐧诲綍", "sso.icve.com.cn/sso/auth"]
        ],
        hideInPanel: true,
        oncomplete() {
          if (lib.$.isInTopWindow()) {
            $render.moveToEdge();
          }
        }
      }),
      errorHandle: new lib.Script({
        name: "鍏ㄥ眬閿欒鎹曡幏",
        matches: [["", /.*/]],
        hideInPanel: true,
        onstart() {
          const projects = definedProjects();
          for (const project2 of projects) {
            for (const key in project2.scripts) {
              if (Object.prototype.hasOwnProperty.call(project2.scripts, key)) {
                const script2 = project2.scripts[key];
                script2.on("scripterror", (err) => {
                  const msg = `[${project2.name} - ${script2.name}] : ${err}`;
                  console.error(msg);
                  $console.error(msg);
                });
              }
            }
          }
        }
      }),
      requestList: new lib.Script({
        name: "馃搫 璇锋眰璁板綍",
        matches: [["", /.*/]],
        priority: 99,
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "寮€鍙戜汉鍛樿姹傝皟璇曡褰曢〉闈紝灏忕櫧鍕垮叆锛屾渶澶氬彧璁板綍鏈€杩戠殑100涓姹傛暟锟?,
              "鍙墦寮€F12鎺у埗鍙版煡鐪嬭姹傛棩蹇楋紝鎴栬€呬笅鏂圭殑璇锋眰鍒楄〃"
            ]).outerHTML
          },
          enable: {
            label: "寮€鍚姹傝锟?,
            attrs: { type: "checkbox" },
            defaultValue: false
          },
          methodFilter: {
            label: "鏂规硶杩囨护",
            tag: "select",
            attrs: { placeholder: "閫夋嫨閫夐」" },
            options: [["none", "锟?], ["GET"], ["POST"], ["OPTIONS"], ["HEAD"]],
            defaultValue: "none"
          },
          typeFilter: {
            label: "绫诲瀷杩囨护",
            tag: "select",
            attrs: { placeholder: "閫夋嫨閫夐」" },
            options: [
              ["none", "锟?],
              ["gmxhr", "娌圭尨API璇锋眰锛坓mxhr锟?],
              ["fetch", "鏅€氳姹傦紙fetch锟?]
            ],
            defaultValue: "none"
          },
          searchValue: {
            label: "鍐呭鎼滅储",
            attrs: { placeholder: "鎼滅储 URL/璇锋眰锟?鍝嶅簲" },
            defaultValue: ""
          },
          list: {
            defaultValue: []
          }
        },
        methods() {
          const render2 = (list) => {
            var _a, _b;
            (_a = this.panel) == null ? void 0 : _a.body.replaceChildren();
            (_b = this.panel) == null ? void 0 : _b.body.append(
              lib.h("div", { className: "card" }, [
                lib.h("div", { style: { padding: "8px 0px", textAlign: "end" } }, [
                  lib.h(
                    "button",
                    {
                      className: "base-style-button-secondary",
                      style: { marginRight: "12px" },
                      innerText: "馃棏锔忔竻绌鸿锟?
                    },
                    (btn) => {
                      btn.onclick = () => {
                        this.cfg.list = [];
                        render2(this.cfg.list);
                      };
                    }
                  ),
                  lib.h("button", { className: "base-style-button", innerText: "馃攳鎵ц鎼滅储" }, (btn) => {
                    btn.onclick = () => {
                      if (this.cfg.methodFilter === "none" && this.cfg.typeFilter === "none" && this.cfg.searchValue === "") {
                        render2(this.cfg.list);
                      } else {
                        const list2 = this.cfg.list.filter((item) => {
                          if (this.cfg.methodFilter !== "none" && item.method.toLowerCase() !== this.cfg.methodFilter.toLowerCase()) {
                            return false;
                          }
                          return true;
                        }).filter((item) => {
                          if (this.cfg.typeFilter !== "none" && item.type !== this.cfg.typeFilter) {
                            return false;
                          }
                          return true;
                        }).filter((item) => {
                          var _a2, _b2;
                          if (this.cfg.searchValue && item.url.includes(this.cfg.searchValue) || ((_a2 = item.data) == null ? void 0 : _a2.includes(this.cfg.searchValue)) || ((_b2 = item.response) == null ? void 0 : _b2.includes(this.cfg.searchValue))) {
                            return true;
                          }
                          return false;
                        });
                        render2(list2);
                      }
                    };
                  })
                ]),
                lib.h(
                  "div",
                  { style: { backgroundColor: "#292929", overflow: "auto", maxHeight: window.innerHeight / 2 + "px" } },
                  [
                    ...list.length === 0 ? [lib.h("div", { style: { color: "white", textAlign: "center" } }, "鏆傛棤鏁版嵁")] : [],
                    ...list.map(
                      (item) => lib.h(
                        "div",
                        {
                          title: Object.entries(item).map(
                            ([key, val]) => key === "time" ? `${key} : ${new Date(val).toLocaleString().replace(/\//g, "-")}` : `${key} : ${val}`
                          ).join("\n"),
                          style: {
                            maxWidth: "800px",
                            padding: "4px 0px",
                            margin: "4px 0px",
                            textWrap: "nowrap"
                          }
                        },
                        [
                          lib.h("div", [
                            lib.h("span", { style: { marginRight: "8px" } }, new Date(item.time).toLocaleTimeString()),
                            lib.h(
                              "span",
                              {
                                style: {
                                  backgroundColor: "#2196f3a3",
                                  color: "#ececec",
                                  marginRight: "8px",
                                  padding: "0px 2px"
                                }
                              },
                              item.method
                            ),
                            lib.h(
                              "span",
                              { style: { color: item.response ? "#4eb74e" : "#eb6262", marginRight: "8px" } },
                              "锟?
                            ),
                            lib.h(
                              "div",
                              { style: { display: "inline-block", color: "#ececec" } },
                              item.url ? item.url.length > 100 ? item.url.slice(0, 100) + "..." : item.url : "-"
                            )
                          ]),
                          lib.h(
                            "div",
                            { style: { overflow: "hidden", fontSize: "12px", color: "#8f8f8f" } },
                            item.data ? "data: " + item.data : ""
                          ),
                          lib.h(
                            "div",
                            { style: { overflow: "hidden", fontSize: "12px", color: "#8f8f8f" } },
                            item.response ? "resp: " + item.response : item.error ? "err : " + item.error : ""
                          )
                        ]
                      )
                    )
                  ]
                )
              ])
            );
          };
          return {
            render: render2
          };
        },
        onrender() {
          this.methods.render(this.cfg.list);
        },
        onstart() {
          if (lib.$gm.isInGMContext() === false) {
            return;
          }
          const gmRequest = GM_xmlhttpRequest;
          const originalFetch = fetch;
          const getId = () => Math.random().toString(16).slice(2);
          const addRecord = (item) => {
            this.cfg.list = [item, ...this.cfg.list];
            if (this.cfg.list.length > 100) {
              this.cfg.list = this.cfg.list.slice(0, 100);
            }
          };
          const setItem = (id, response, error) => {
            const list = JSON.parse(JSON.stringify(this.cfg.list));
            const index = list.findIndex((item) => item.id === id);
            if (index !== -1) {
              list[index].response = response;
              list[index].error = error;
            }
            this.cfg.list = list;
          };
          GM_xmlhttpRequest = (details) => {
            if (this.cfg.enable) {
              const id = getId();
              const data = {
                id,
                url: details.url,
                method: details.method || "unknown",
                type: "gmxhr",
                data: details.data,
                headers: details.headers,
                response: "",
                error: "",
                time: Date.now()
              };
              addRecord(data);
              const onload = details.onload;
              const onerror = details.onerror;
              details.onload = function(response) {
                setItem(id, response.responseText, "");
                data.response = details.responseType === "json" ? response.response : response.responseText;
                console.log("%c [璇锋眰鎴愬姛]", "color: green; font-weight: bold", data.url, data);
                onload == null ? void 0 : onload.apply(this, [response]);
              };
              details.onerror = function(response) {
                setItem(id, "", response.error);
                data.error = response.error;
                console.log("%c [璇锋眰澶辫触]", "color: red; font-weight: bold", data.url, data);
                onerror == null ? void 0 : onerror.apply(this, [response]);
              };
            }
            return gmRequest.apply(this, [details]);
          };
          fetch = (input, init) => {
            if (this.cfg.enable) {
              const id = getId();
              const data = {
                id,
                url: typeof input === "string" ? input : input instanceof URL ? input.href : input.url,
                method: (init == null ? void 0 : init.method) || "unknown",
                type: "fetch",
                data: init == null ? void 0 : init.body,
                headers: init == null ? void 0 : init.headers,
                response: "",
                error: "",
                time: Date.now()
              };
              addRecord(data);
              const res = originalFetch.apply(this, [input, init]);
              res.then((result) => {
                return result.clone().text();
              }).then((result) => {
                setItem(id, result, "");
                data.response = result;
                console.log("%c [璇锋眰鎴愬姛]", "color: green; font-weight: bold", data.url, data);
              });
              res.catch((err) => {
                setItem(id, "", String(err));
                data.error = String(err);
                console.log("%c [璇锋眰澶辫触]", "color: red; font-weight: bold", data.url, data);
              });
              return res;
            } else {
              return originalFetch.apply(this, [input, init]);
            }
          };
        }
      }),
      environmentDetect: new lib.Script({
        name: "馃 鐜妫€锟?,
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        hideInPanel: true,
        oncomplete() {
          if (self !== top)
            return;
          const matches = [
            CXProject.scripts.studyDispatcher.matches,
            ZHSProject.scripts["gxk-study"].matches,
            ZHSProject.scripts.hike.matches,
            ZHSProject.scripts["smart-study"].matches,
            ZHSProject.scripts["wisdom-study"].matches,
            ZHSProject.scripts["xnk-study"].matches,
            ICourseProject.scripts.study.matches,
            IcveMoocProject.scripts.study.matches,
            ZJYProject.scripts.study.matches
          ].flat().map((m) => Array.isArray(m) ? m[1] : m);
          const url = window.location.href;
          const match = matches.some((regex) => {
            return typeof regex === "string" ? url.includes(regex) : regex.test(url);
          });
          if (!match) {
            return;
          }
          let messageElement;
          visibleDetect();
          function visibleDetect() {
            setTimeout(() => {
              if (!(messageElement == null ? void 0 : messageElement.isConnected))
                messageElement = void 0;
              if (document.visibilityState === "hidden" && !messageElement) {
                messageElement = lib.$message.warn({
                  content: "鈿狅笍妫€娴嬪埌娴忚鍣ㄦ渶灏忓寲/鍒囧睆锛岃剼鏈彲鑳芥棤娉曟甯歌繍琛岋紝璇蜂繚鎸佺綉璇鹃〉闈㈠湪鍓嶅彴锛侊紙濡傛灉鎮ㄦ鍦ㄥ叏灞忔父鎴忎腑鍙互蹇界暐姝よ鍛婏級",
                  duration: 0
                });
              }
              visibleDetect();
            }, 1e3);
          }
        }
      }),
      menus: new lib.Script({
        name: "馃搧 鑿滃崟绠＄悊",
        hideInPanel: true,
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        async onactive() {
          const currentStudyScript = [
            [CXProject.scripts.studyDispatcher, CXProject.scripts.study],
            CXProject.scripts.work,
            ZHSProject.scripts["gxk-study"],
            ZHSProject.scripts["xnk-study"],
            ZHSProject.scripts.hike,
            ZHSProject.scripts["smart-study"],
            ZHSProject.scripts["wisdom-study"],
            ZHSProject.scripts["xnk-study"],
            ZHSProject.scripts["gxk-work"],
            ZHSProject.scripts["xnk-work"],
            ZHSProject.scripts["hike-work"],
            ZHSProject.scripts["smart-work"],
            ZHSProject.scripts["xnk-work"],
            [ICourseProject.scripts.dispatcher, ICourseProject.scripts.study],
            ICourseProject.scripts.work,
            [ZJYProject.scripts.dispatcher, ZJYProject.scripts.study],
            ZJYProject.scripts.work,
            IcveMoocProject.scripts.study,
            IcveMoocProject.scripts.work
          ].map((m) => {
            const url = window.location.href;
            const data = {
              matches: Array.isArray(m) ? m[0].matches : m.matches,
              target: Array.isArray(m) ? m[1] : m
            };
            if (data.matches.some((regexp) => {
              const r = Array.isArray(regexp) ? regexp[1] : regexp;
              return typeof r === "string" ? url.includes(r) : r.test(url);
            })) {
              return data.target;
            }
            return void 0;
          }).find((m) => m !== void 0);
          await lib.$menu("馃彔", { scriptPanelLink: CommonProject.scripts.guide });
          if (currentStudyScript)
            await lib.$menu("馃枼锟?, { scriptPanelLink: currentStudyScript });
          await lib.$menu("馃攷", { scriptPanelLink: CommonProject.scripts.workResults });
          await lib.$menu("鈿欙笍", { scriptPanelLink: CommonProject.scripts.settings });
          await lib.$menu("馃摜", { scriptPanelLink: BackgroundProject.scripts.update });
          await lib.$menu("馃搫", { scriptPanelLink: BackgroundProject.scripts.console });
        }
      })
    }
  });
  const $console = new Proxy({}, {
    get(target, key) {
      return (...msg) => {
        var _a;
        let logs = BackgroundProject.scripts.console.cfg.logs;
        if (logs.length > 50) {
          logs = logs.slice(-50);
        }
        const stack_str = Error().stack || "";
        const stacks = (_a = stack_str.replace("Error", "").match(/at (.*) \(.+:\/\/.+:(.+):(.+)\)/g)) == null ? void 0 : _a.map((s) => {
          const match = s.match(/at (.*) \(.+:\/\/.+:(.+):(.+)\)/) || [];
          return [match[1], match[2], match[3]];
        });
        logs = logs.concat({
          type: key.toString(),
          content: msg.join(" "),
          time: Date.now(),
          stack: JSON.stringify([stack_str.split("\n")[0], ...stacks || []])
        });
        BackgroundProject.scripts.console.cfg.logs = logs;
      };
    }
  });
  let globalControlPanel = null;
  function commonWork(script2, options) {
    CommonProject.scripts.render.methods.pin(script2);
    let worker;
    let startBtnPressed = false;
    let checkFailed = false;
    let running = false;
    const createWorkControlPanel = () => {
      const { controlBtn, restartBtn, startBtn } = createWorkerControl({
        workerProvider: () => worker,
        onStart: async () => {
          startBtnPressed = true;
          if (checkMessage instanceof lib.MessageElement) {
            checkMessage.remove();
          }
          await closeAnswerWrapperEmptyWarning();
          start2();
        },
        onRestart: async () => {
          var _a;
          worker == null ? void 0 : worker.emit("close");
          await ((_a = options.onRestart) == null ? void 0 : _a.call(options));
          start2();
        }
      });
      startBtn.style.flex = "1";
      startBtn.style.padding = "4px";
      restartBtn.style.flex = "1";
      restartBtn.style.padding = "4px";
      controlBtn.style.flex = "1";
      controlBtn.style.padding = "4px";
      const container2 = lib.h(
        "div",
        { style: { marginTop: "12px", display: "flex" } },
        running ? [controlBtn, restartBtn] : [startBtn]
      );
      globalControlPanel = container2;
      return { container: container2, startBtn, restartBtn, controlBtn };
    };
    const workResultPanel = () => CommonProject.scripts.workResults.methods.createWorkResultsPanel();
    const sync_script = [script2];
    if (options.enable_control_panel) {
      sync_script.push(CommonProject.scripts.workResults);
    }
    for (const script22 of sync_script) {
      script22.on("render", () => {
        var _a, _b;
        let gotoSettingsBtnContainer = "";
        if (checkFailed) {
          const gotoSettingsBtn = lib.$ui.button("馃憠 鍓嶅線璁剧疆棰樺簱閰嶇疆", {
            className: "base-style-button",
            style: { flex: "1", padding: "4px" }
          });
          gotoSettingsBtn.style.flex = "1";
          gotoSettingsBtn.style.padding = "4px";
          gotoSettingsBtn.onclick = () => {
            CommonProject.scripts.render.methods.pin(CommonProject.scripts.settings);
          };
          gotoSettingsBtnContainer = lib.h("div", { style: { display: "flex" } }, [gotoSettingsBtn]);
        }
        (_b = (_a = script22.panel) == null ? void 0 : _a.body) == null ? void 0 : _b.replaceChildren(
          lib.h("div", { style: { marginTop: "12px" } }, [
            gotoSettingsBtnContainer,
            ...options.enable_control_panel ? [globalControlPanel || createWorkControlPanel().container] : [],
            workResultPanel()
          ])
        );
      });
    }
    const workOptions = CommonProject.scripts.settings.methods.getWorkOptions();
    let checkMessage = workPreCheckMessage({
      onrun: () => startBtnPressed === false && start2(),
      onclose: (_, closedMsg) => checkMessage = closedMsg,
      onNoAnswererWrappers: () => {
        checkFailed = true;
      },
      ...workOptions,
      start_delay_seconds: options.start_delay_seconds
    });
    const start2 = async () => {
      var _a, _b, _c, _d;
      await ((_a = options.beforeRunning) == null ? void 0 : _a.call(options));
      running = true;
      worker = options.workerProvider(workOptions);
      if (worker) {
        (_b = options.onWorkerCreated) == null ? void 0 : _b.call(options, worker);
      }
      const { container: container2, controlBtn } = createWorkControlPanel();
      (_d = (_c = script2.panel) == null ? void 0 : _c.body) == null ? void 0 : _d.replaceChildren(container2, workResultPanel());
      worker == null ? void 0 : worker.once("done", () => {
        running = false;
        globalControlPanel = null;
        controlBtn.disabled = true;
      });
    };
  }
  function createWorkerControl(options) {
    let stop = false;
    let stopMessage;
    const startBtn = lib.$ui.button("鈻讹笍寮€濮嬬瓟锟?);
    const restartBtn = lib.$ui.button("馃攦閲嶆柊绛旈");
    const controlBtn = lib.$ui.button("鈴告殏锟?);
    startBtn.onclick = () => {
      startBtn.remove();
      options.onStart();
    };
    restartBtn.onclick = () => {
      stopMessage == null ? void 0 : stopMessage.remove();
      options.onRestart();
    };
    controlBtn.onclick = () => {
      var _a;
      stop = !stop;
      const worker = options.workerProvider();
      (_a = worker == null ? void 0 : worker.emit) == null ? void 0 : _a.call(worker, stop ? "stop" : "continuate");
      controlBtn.value = stop ? "鈻讹笍缁х画" : "鈴革笍鏆傚仠";
      if (stop) {
        stopMessage = lib.$message.warn({ duration: 0, content: "鏆傚仠锟?.." });
      } else {
        stopMessage == null ? void 0 : stopMessage.remove();
      }
    };
    return { startBtn, restartBtn, controlBtn };
  }
  function optimizationElementWithImage(root2, clone_node = false) {
    const clone = clone_node ? root2.cloneNode(true) : root2;
    for (const img of Array.from(clone.querySelectorAll("img"))) {
      const src2 = document.createElement("span");
      src2.innerText = img.src;
      src2.style.fontSize = "0px";
      img.after(src2);
    }
    return clone;
  }
  function createUnVisibleTextOfImage(img) {
    const src2 = document.createElement("span");
    src2.innerText = img.src;
    src2.style.fontSize = "0px";
    img.after(src2);
  }
  function simplifyWorkResult(results, titleTransform) {
    var _a, _b, _c, _d, _e, _f;
    const res = [];
    let i = 0;
    for (const wr of results) {
      const ques = (titleTransform == null ? void 0 : titleTransform(((_a = wr.ctx) == null ? void 0 : _a.elements.title) || [], i)) || ((_c = (_b = wr.ctx) == null ? void 0 : _b.elements.title) == null ? void 0 : _c.map((e) => e == null ? void 0 : e.innerText.trim()).filter(Boolean).join("<br>")) || "";
      res.push({
        requested: wr.requested,
        resolved: wr.resolved,
        error: wr.error,
        type: (_d = wr.ctx) == null ? void 0 : _d.type,
        question: ques,
        finish: (_e = wr.result) == null ? void 0 : _e.finish,
        searchInfos: ((_f = wr.ctx) == null ? void 0 : _f.searchInfos.map((sr) => ({
          error: sr.error,
          name: sr.name,
          homepage: sr.homepage,
          results: sr.results.map((ans) => [ans.question, ans.answer, ans.extra_data || {}])
        }))) || []
      });
      i++;
    }
    return res;
  }
  function removeRedundantWords(str, words) {
    for (const word of words.map((w) => w.trim())) {
      str = str.replace(word, "");
    }
    return str;
  }
  let answererWrapperUnsetMessage;
  const answerWrapperEmptyWarning = lib.cors.defineTopFunction((duration) => {
    const setting = lib.h("button", { className: "base-style-button-secondary" }, "閫氱敤-鍏ㄥ眬璁剧疆");
    setting.onclick = () => {
      CommonProject.scripts.render.methods.pin(CommonProject.scripts.settings);
      setTimeout(() => {
        var _a, _b;
        (_b = (_a = lib.$elements.root) == null ? void 0 : _a.querySelector('[value="鐐瑰嚮閰嶇疆"]')) == null ? void 0 : _b.click();
      }, 500);
    };
    answererWrapperUnsetMessage == null ? void 0 : answererWrapperUnsetMessage.remove();
    answererWrapperUnsetMessage = lib.$message.warn({
      content: lib.h("span", {}, ["浣犺繕娌¤缃搴擄紝鏃犳硶鑷姩绛旈锛岃鍒囨崲锟?", setting, " 椤甸潰杩涜閰嶇疆锟?]),
      duration
    });
  });
  const closeAnswerWrapperEmptyWarning = lib.cors.defineTopFunction(() => {
    answererWrapperUnsetMessage == null ? void 0 : answererWrapperUnsetMessage.remove();
    answererWrapperUnsetMessage = void 0;
  });
  function workPreCheckMessage(options) {
    var _a;
    const { onrun, onNoAnswererWrappers, onclose, ...opts } = options;
    if (opts.answererWrappers.length === 0) {
      onNoAnswererWrappers == null ? void 0 : onNoAnswererWrappers(opts);
      return answerWrapperEmptyWarning(0);
    } else {
      options.start_delay_seconds = (_a = options.start_delay_seconds) != null ? _a : 5;
      return lib.$message.info({
        duration: options.start_delay_seconds,
        content: lib.h("span", [
          `${options.start_delay_seconds}绉掑悗鑷姩绛旈锛宍,
          lib.$ui.preventText({
            name: "鐐瑰嚮鍙栨秷",
            delay: options.start_delay_seconds,
            ondefault: (span) => {
              onrun(opts);
            },
            onprevent(span) {
              const closedMessage = lib.$message.warn({
                content: "宸插叧闂娆＄殑鑷姩绛旈锛岃鎵嬪姩寮€鍚垨鑰呭拷鐣ユ璀﹀憡锟?,
                duration: 0
              });
              if (closedMessage) {
                onclose == null ? void 0 : onclose(opts, closedMessage);
              }
            }
          })
        ])
      });
    }
  }
  function createRangeTooltip(input, defaultValue, transform) {
    input.addEventListener("change", () => {
      input.setAttribute("data-title", transform(input.value || input.getAttribute("value") || defaultValue));
    });
    input.setAttribute("data-title", transform(input.value || input.getAttribute("value") || defaultValue));
  }
  async function playMedia(playFunction) {
    const tryPlayMedia = () => {
      return new Promise((resolve, reject) => {
        try {
          const playRes = playFunction();
          if (playRes) {
            playRes.then(resolve).catch(reject);
          } else {
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      });
    };
    try {
      await tryPlayMedia();
      return true;
    } catch (err) {
      console.error(err);
      if (String(err).includes(`failed because the user didn't interact with the document first`)) {
        lib.$modal.alert({
          content: "鎾斁闊宠棰戝け璐ワ紝鐢变簬娴忚鍣ㄧ殑鐢ㄦ埛闅愮淇濇姢鎺柦锛屽鏋滆鎾斁甯︽湁闊抽噺鐨勮棰戯紝鎴栬€呮煇浜涙棤娉曡嚜鍔ㄦ挱鏀鹃煶瑙嗛鐨勭綉绔欙紝鎮ㄥ繀椤诲厛鐐瑰嚮涓€娆￠〉闈笂鐨勪换鎰忎綅缃剼鏈墠鑳借繘琛岄煶瑙嗛鐨勬挱鏀撅紝鍚庣画鏃犻渶閲嶆柊鐐瑰嚮锟?,
          onClose: async () => {
            await tryPlayMedia();
          }
        });
        return true;
      } else if (String(err).includes("The element has no supported sources")) {
        $console.error("褰撳墠瑙嗛鏃犳硶鎾斁锟?);
      } else {
        $console.error("鎾斁瑙嗛鏃跺彂鐢熸湭鐭ラ敊璇細" + String(err));
      }
      return false;
    }
  }
  function enableCopy(elements2) {
    function hackSelect(target) {
      if (target) {
        const _original_select = target.onselectstart;
        const _original_oncopy = target.oncopy;
        const _original_onpaste = target.onpaste;
        const _original_onkeydown = target.onkeydown;
        target.onselectstart = (e) => {
          _original_select == null ? void 0 : _original_select.apply(target, [e]);
          e.stopPropagation();
          e.returnValue = true;
          return true;
        };
        target.oncopy = (e) => {
          _original_oncopy == null ? void 0 : _original_oncopy.apply(target, [e]);
          e.stopPropagation();
          e.returnValue = true;
          return true;
        };
        target.onpaste = (e) => {
          _original_onpaste == null ? void 0 : _original_onpaste.apply(target, [e]);
          e.stopPropagation();
          e.returnValue = true;
          return true;
        };
        target.onkeydown = (e) => {
          _original_onkeydown == null ? void 0 : _original_onkeydown.apply(target, [e]);
          e.stopPropagation();
          e.returnValue = true;
          return true;
        };
      }
    }
    for (const el of elements2) {
      hackSelect(el);
    }
  }
  let popupWin;
  window.addEventListener("beforeunload", () => {
    popupWin == null ? void 0 : popupWin.close();
  });
  function createQuestionTitleExtra(question) {
    const space = lib.$ui.space(
      [
        lib.$ui.copy("澶嶅埗", question),
        lib.h("span", { className: "question-title-extra-btn", innerText: "馃審鐧惧害涓€锟? }, (btn) => {
          btn.onclick = () => {
            popupWin == null ? void 0 : popupWin.close();
            popupWin = $.createCenteredPopupWindow(`https://www.baidu.com/s?wd=${question}`, "鐧惧害鎼滅储", {
              width: 1e3,
              height: 800,
              resizable: true,
              scrollbars: true
            });
          };
        })
      ],
      { x: 4 }
    );
    space.style.marginTop = "6px";
    space.style.textAlign = "right";
    return lib.h("div", { style: { textAlign: "right" } }, [space]);
  }
  const playbackRate = {
    label: "瑙嗛鍊嶏拷?,
    tag: "select",
    options: [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 6, 8, 16].map((rate) => [rate.toString(), rate + " x"]),
    defaultValue: "1"
  };
  const volume = {
    label: "闊抽噺璋冭妭",
    attrs: { type: "range", step: "0.05", min: "0", max: "1" },
    defaultValue: 0,
    onload() {
      createRangeTooltip(this, "0", (val) => `${parseFloat(val) * 100}%`);
    }
  };
  const restudy = {
    label: "澶嶄範妯″紡",
    attrs: { title: "宸茬粡瀹屾垚鐨勮棰戠户缁锟?, type: "checkbox" },
    defaultValue: false
  };
  const definition = {
    label: "娓呮櫚锟?,
    tag: "select",
    defaultValue: "line1bq",
    options: [
      ["line1bq", "娴佺晠"],
      ["line1gq", "楂樻竻"]
    ]
  };
  const workNotes = {
    defaultValue: lib.$ui.notes([
      "鑷姩绛旈鍓嶈锟?鈥滈€氱敤-鍏ㄥ眬璁剧疆锟?涓缃搴撻厤缃拷?,
      "鍙互鎼厤 鈥滈€氱敤-鍦ㄧ嚎鎼滈锟?涓€璧蜂娇鐢拷?,
      "鈿狅笍绂佹鍚屾椂寮€澶氫釜浣滀笟/鑰冭瘯椤甸潰锟?
    ]).outerHTML
  };
  const dropdownStyle = {
    labelClassName: "checkbox-label",
    providerClassName: "checkbox-input",
    enableForAttribute: true,
    onload(el) {
      const checked = this.checked;
      el.classList.toggle("checked", checked);
      this.addEventListener("change", () => {
        el.classList.toggle("checked", this.checked);
      });
    }
  };
  const TAB_WORK_RESULTS_KEY = "common.work-results.results";
  const state$5 = {
    workResult: {
      questionPositionSyncHandler: {
        cx: (index) => {
          var _a;
          const el = (_a = document.querySelectorAll('[id*="sigleQuestionDiv"], .questionLi')) == null ? void 0 : _a.item(index);
          if (el) {
            window.scrollTo({
              top: el.getBoundingClientRect().top + window.pageYOffset - 50,
              behavior: "smooth"
            });
          }
        },
        "zhs-gxk": (index) => {
          var _a;
          (_a = document.querySelectorAll(".answerCard_list ul li").item(index)) == null ? void 0 : _a.click();
        },
        "zhs-xnk": (index) => {
          var _a;
          (_a = document.querySelectorAll(".jobclassallnumber-div li[questionid]").item(index)) == null ? void 0 : _a.click();
        },
        "zhs-smart": (index) => {
          var _a;
          (_a = document.querySelectorAll('[role="treeitem"] .font-sec-style-node').item(index)) == null ? void 0 : _a.click();
        },
        "zhs-fusion": (index) => {
          var _a;
          (_a = document.querySelectorAll(".right-box .list .item").item(index)) == null ? void 0 : _a.click();
        },
        "zhs-hike": (index) => {
          var _a;
          (_a = document.querySelectorAll(".q_main_right .card_ul .card_li").item(index)) == null ? void 0 : _a.click();
        },
        icve: (index) => {
          var _a;
          (_a = document.querySelectorAll(`.sheet_nums [id*="sheetSeq"]`).item(index)) == null ? void 0 : _a.click();
        },
        zjy: (index) => {
          var _a;
          (_a = document.querySelectorAll(".subjectDet").item(index)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "center" });
        },
        icourse: (index) => {
          var _a;
          (_a = document.querySelectorAll(".u-questionItem,[class*=questionBody]").item(index)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    },
    setting: {
      listenerIds: {
        aw: 0
      }
    }
  };
  const CommonProject = lib.Project.create({
    name: "閫氱敤",
    domains: [],
    scripts: {
      guide: new lib.Script({
        name: "馃彔 浣跨敤鏁欑▼",
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        namespace: "common.guide",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鎵撳紑浠绘剰缃戣骞冲彴锛岃繘鍏ヨ棰戙€佷綔涓氶〉闈㈢瓑寰呰剼鏈繍琛岋紝",
              "浠讳綍鐤戦棶璇锋煡鐪嬩笂鏂逛氦娴佺兢锛岃繘缇ゅ悗甯︽埅鍥捐繘琛屽弽棣堬拷?,
              "娓╅Θ鎻愮ず: ",
              "鈿狅笍 绂佹涓庡叾浠栬剼鏈竴璧蜂娇鐢紝鍚﹀垯浼氫笉鍏煎瀵艰嚧鏃犳硶杩愯锟?,
              "鈿狅笍 绂佹鏈€灏忓寲娴忚鍣ㄣ€佸垏灞忥紝鍚﹀垯鍙兘瀵艰嚧鑴氭湰鏃犳硶杩愯锟?
            ]).outerHTML
          }
        },
        onrender({ panel }) {
          const guide = createGuide();
          guide.style.width = "480px";
          panel.body.replaceChildren(guide);
        }
      }),
      settings: new lib.Script({
        name: "鈿欙笍 鍏ㄥ眬璁剧疆",
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        namespace: "common.settings",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鉁ㄩ紶鏍囩Щ鍔ㄥ埌鎸夐挳鎴栬€呰緭鍏ユ锛屽彲浠ョ湅鍒版彁绀猴紒",
              "鎯宠鑷姩绛旈蹇呴』璁剧疆 鈥滈搴撻厤缃拷?",
              "璁剧疆鍚庤繘鍏ョ珷鑺傛祴璇曪紝浣滀笟锛岃€冭瘯椤甸潰鍗冲彲鑷姩绛旈锟?
            ]).outerHTML
          },
          answererWrappers: {
            separator: "鑷姩绛旈璁剧疆",
            defaultValue: []
          },
          disabledAnswererWrapperNames: {
            defaultValue: []
          },
          answererWrappersButton: {
            label: "棰樺簱閰嶇疆",
            defaultValue: "鐐瑰嚮閰嶇疆",
            attrs: {
              type: "button"
            },
            onload() {
              const aws = CommonProject.scripts.settings.cfg.answererWrappers || [];
              this.value = aws.length ? "褰撳墠锟? + aws.length + "涓彲鐢ㄩ搴擄紝鐐瑰嚮閲嶆柊閰嶇疆" : "鐐瑰嚮閰嶇疆";
              this.onclick = () => {
                const aw = CommonProject.scripts.settings.cfg.answererWrappers || [];
                const copy = lib.$ui.copy("澶嶅埗棰樺簱閰嶇疆", JSON.stringify(aw, null, 4));
                const list = lib.h("div", [
                  lib.h("div", aw.length ? ["浠ヤ笅鏄凡缁忚В鏋愯繃鐨勯搴撻厤缃細", copy] : ""),
                  ...createAnswererWrapperList(aw)
                ]);
                const textarea = lib.h(
                  "textarea",
                  {
                    className: "modal-input",
                    style: { minHeight: "250px", width: "calc(100% - 20px)", maxWidth: "100%" },
                    placeholder: aw.length ? "閲嶆柊杈撳叆棰樺簱閰嶇疆" : "杈撳叆浣犵殑棰樺簱閰嶇疆...锛屼笉浼氳鐪嬩笂鏂瑰～鍐欐暀锟?
                  },
                  aw.length === 0 ? "" : JSON.stringify(aw, null, 4)
                );
                const select = lib.$ui.tooltip(
                  lib.h(
                    "select",
                    {
                      className: "base-style-active-form-control",
                      style: { backgroundColor: "#eef2f7", borderRadius: "2px", padding: "2px 8px" }
                    },
                    [
                      lib.h("option", "榛樿"),
                      lib.h(
                        "option",
                        {
                          title: "澶у鐢熺綉璇鹃搴撴帴鍙ｉ€傞厤锟? 灏嗕笉鍚岀殑棰樺簱鏁村悎涓轰竴涓狝PI鎺ュ彛銆傝缁嗘煡锟?https://github.com/DokiDoki1103/tikuAdapter"
                        },
                        "TikuAdapter"
                      )
                    ]
                  )
                );
                const modal2 = lib.$modal.prompt({
                  width: 600,
                  maskCloseable: false,
                  content: lib.$ui.notes([
                    [
                      lib.h("div", [
                        "棰樺簱閰嶇疆濉啓鏁欑▼锟?,
                        lib.h("a", { href: "https://docs.ocsjs.com/docs/work" }, "https://docs.ocsjs.com/docs/work")
                      ])
                    ],
                    [
                      lib.h("div", [
                        "鈿狅笍 濡傛灉鏃犳硶绮樿创锛岃锟?>锟?,
                        lib.h("button", "璇诲彇鍓创锟?, (btn) => {
                          btn.classList.add("base-style-button");
                          btn.onclick = () => {
                            navigator.clipboard.readText().then((result) => {
                              textarea.value = result;
                            });
                          };
                        }),
                        "锛屽苟鍚屾剰娴忚鍣ㄤ笂鏂圭殑鍓创鏉胯鍙栫敵璇凤拷?
                      ])
                    ],
                    ["鈿狅笍 濡傛灉鎯虫坊鍔犲涓笉鍚岀殑棰樺簱閰嶇疆锛岃鍦ㄦ瘡涓厤缃箣闂翠娇鐢ㄤ笁涓簳鍙烽殧寮€: ###锟?],
                    ["鈿狅笍 閰嶇疆绗笁鏂归搴撳嚭鐜扮綉椤靛脊绐楃殑锛岀偣鍑绘案涔呭厑璁歌繛鎺ワ拷?],
                    ...aw.length ? [list] : []
                  ]),
                  footer: lib.h("div", { style: { width: "100%" } }, [
                    textarea,
                    lib.h("div", { style: { display: "flex", flexWrap: "wrap", marginTop: "12px", fontSize: "12px" } }, [
                      lib.h("div", ["瑙ｆ瀽鍣細", select], (div) => {
                        div.style.marginRight = "12px";
                        div.style.flex = "1";
                      }),
                      lib.h("div", { style: { flex: "1", display: "flex", flexWrap: "wrap", justifyContent: "end" } }, [
                        lib.h("button", "娓呯┖棰樺簱閰嶇疆", (btn) => {
                          btn.className = "modal-cancel-button";
                          btn.style.marginRight = "48px";
                          btn.onclick = () => {
                            lib.$modal.confirm({
                              content: "纭畾瑕佹竻绌洪搴撻厤缃悧锟?,
                              onConfirm: () => {
                                lib.$message.success({ content: "宸叉竻绌猴紝鍦ㄧ瓟棰樺墠璇疯寰楅噸鏂伴厤缃拷? });
                                modal2 == null ? void 0 : modal2.remove();
                                CommonProject.scripts.settings.cfg.answererWrappers = [];
                                this.value = "鐐瑰嚮閰嶇疆";
                              }
                            });
                          };
                        }),
                        lib.h("button", "鍏抽棴", (btn) => {
                          btn.className = "modal-cancel-button";
                          btn.style.marginRight = "12px";
                          btn.onclick = () => modal2 == null ? void 0 : modal2.remove();
                        }),
                        lib.h("button", "淇濆瓨閰嶇疆", (btn) => {
                          btn.className = "modal-confirm-button";
                          btn.onclick = async () => {
                            const connects = lib.$gm.getMetadataFromScriptHead("connect");
                            const value = textarea.value;
                            if (!value) {
                              lib.$modal.alert({
                                content: lib.h("div", "涓嶈兘涓虹┖锟?)
                              });
                              return;
                            }
                            if (value.includes("adapter-service/search") && select.value === "TikuAdapter" === false) {
                              lib.$modal.alert({
                                content: lib.h("div", [
                                  "妫€娴嬪埌鎮ㄥ彲鑳芥鍦ㄤ娇锟?",
                                  lib.h(
                                    "a",
                                    { href: "https://github.com/DokiDoki1103/tikuAdapter#readme" },
                                    "TikuAdapter 棰樺簱"
                                  ),
                                  "锛屼絾鏄偍閫夋嫨鐨勮В鏋愬櫒涓嶆槸 TikuAdapter锛岃閫夋嫨 TikuAdapter 瑙ｆ瀽鍣紝骞跺～鍐欐帴鍙ｅ湴鍧€鍗冲彲锛屼緥濡傦細http://localhost:8060/adapter-service/search锛屾垨鑰呭拷鐣ユ璀﹀憡锟?
                                ]),
                                confirmButtonText: "鍒囨崲锟?TikuAdapter 瑙ｆ瀽鍣紝骞惰瘑鍒帴鍙ｅ湴鍧€",
                                onConfirm() {
                                  var _a;
                                  const origin = ((_a = textarea.value.match(/http:\/\/(.+)\/adapter-service\/search/)) == null ? void 0 : _a[1]) || "";
                                  textarea.value = `http://${origin}/adapter-service/search`;
                                  select.value = "TikuAdapter";
                                }
                              });
                              return;
                            }
                            try {
                              let awsResult = [];
                              if (select.value === "TikuAdapter") {
                                if (value.startsWith("http") === false) {
                                  lib.$modal.alert({
                                    content: lib.h("div", [
                                      "鏍煎紡閿欒锛孴ikuAdapter瑙ｆ瀽鍣ㄥ彧鑳借В锟?url 閾炬帴锛岃閲嶆柊杈撳叆锛佹垨鑰呮煡鐪嬶細",
                                      lib.h(
                                        "a",
                                        { href: "https://github.com/DokiDoki1103/tikuAdapter#readme" },
                                        "https://github.com/DokiDoki1103/tikuAdapter#readme"
                                      )
                                    ])
                                  });
                                  return;
                                }
                                select.value = "榛樿";
                                awsResult.push({
                                  name: "TikuAdapter棰樺簱",
                                  url: value,
                                  homepage: "https://github.com/DokiDoki1103/tikuAdapter",
                                  method: "post",
                                  type: "GM_xmlhttpRequest",
                                  contentType: "json",
                                  headers: {},
                                  data: {
                                    question: "${title}",
                                    options: {
                                      handler: "return (env)=>env.options?.split('\\n')"
                                    },
                                    type: {
                                      handler: " return (env)=> env.type === 'single' ? 0 : env.type === 'multiple' ? 1 : env.type === 'completion' ? 3 : env.type === 'judgement' ? 4 : undefined"
                                    }
                                  },
                                  handler: "return (res)=>res.answer.allAnswer.map(i=>([res.question,i.join('#')]))"
                                });
                              } else {
                                const contents = value.split("###").map((i) => i.trim()).filter(Boolean);
                                for (const content of contents) {
                                  awsResult.push(...await AnswerWrapperParser.from(content));
                                }
                              }
                              if (awsResult.length === 0) {
                                lib.$modal.alert({ content: "棰樺簱閰嶇疆涓嶈兘涓虹┖锛岃閲嶆柊閰嶇疆锟? });
                                return;
                              }
                              const result_set = [];
                              for (const res of awsResult) {
                                if (result_set.find((i) => JSON.stringify(i) === JSON.stringify(res))) {
                                  continue;
                                }
                                result_set.push(res);
                              }
                              awsResult = result_set;
                              if (JSON.stringify(CommonProject.scripts.settings.cfg.answererWrappers) === JSON.stringify(awsResult)) {
                                lib.$modal.alert({ content: lib.h("div", ["棰樺簱閰嶇疆娌℃湁鍙樺寲锛岃閲嶆柊閰嶇疆锟?]) });
                                return;
                              }
                              CommonProject.scripts.settings.cfg.answererWrappers = awsResult;
                              this.value = "褰撳墠锟? + awsResult.length + "涓彲鐢ㄩ锟?;
                              lib.$modal.confirm({
                                width: 600,
                                content: lib.h("div", [
                                  lib.h("div", [
                                    "馃帀 閰嶇疆鎴愬姛锟?,
                                    lib.h("b", " 鍒锋柊缃戦〉锟?"),
                                    "閲嶆柊杩涘叆",
                                    lib.h("b", " 绛旈椤甸潰 "),
                                    "鍗冲彲锟?,
                                    "瑙ｆ瀽鍒扮殑棰樺簱濡備笅鎵€锟?"
                                  ]),
                                  ...createAnswererWrapperList(awsResult)
                                ]),
                                onConfirm: () => {
                                  if (lib.$gm.isInGMContext()) {
                                    top == null ? void 0 : top.document.location.reload();
                                  }
                                },
                                ...lib.$gm.isInGMContext() ? {
                                  confirmButtonText: "绔嬪嵆鍒锋柊",
                                  cancelButtonText: "绋嶅悗鍒锋柊"
                                } : {}
                              });
                              textarea.value = JSON.stringify(awsResult, null, 4);
                              if (connects.length) {
                                const notAllowed = [];
                                if (connects.includes("*")) {
                                  return;
                                }
                                for (const aw2 of awsResult) {
                                  if (connects.some((connect) => new URL(aw2.url).hostname.includes(connect)) === false) {
                                    notAllowed.push(aw2.url);
                                  }
                                }
                                if (notAllowed.length) {
                                  lib.$modal.alert({
                                    width: 600,
                                    maskCloseable: false,
                                    title: "鈿狅笍璀﹀憡",
                                    content: lib.h("div", [
                                      lib.h("div", [
                                        "閰嶇疆鎴愬姛锛屼絾妫€娴嬪埌浠ヤ笅 鍩熷悕/ip 涓嶅湪鑴氭湰鐨勭櫧鍚嶅崟涓紝璇峰畨锟?: ",
                                        lib.h(
                                          "a",
                                          {
                                            href: "https://docs.ocsjs.com/docs/other/api#鍏ㄥ煙鍚嶉€氱敤鐗堟湰"
                                          },
                                          "OCS鍏ㄥ煙鍚嶉€氱敤鐗堟湰"
                                        ),
                                        "锛屾垨鑰呮墜鍔ㄦ坊锟?@connect 锛屽惁鍒欐棤娉曡繘琛岃姹傦拷?,
                                        lib.h(
                                          "ul",
                                          notAllowed.map((url) => lib.h("li", new URL(url).hostname))
                                        )
                                      ])
                                    ])
                                  });
                                }
                              }
                            } catch (e) {
                              lib.$modal.alert({
                                content: lib.h("div", [lib.h("div", "瑙ｆ瀽澶辫触锛屽師鍥犲锟?:"), lib.h("div", e.message)])
                              });
                            }
                          };
                        })
                      ])
                    ])
                  ])
                });
              };
            }
          },
          upload: {
            label: "绛旈瀹屾垚锟?,
            tag: "select",
            defaultValue: 80,
            options: [
              ["save", "鑷姩淇濆瓨", "瀹屾垚鍚庤嚜鍔ㄤ繚瀛樼瓟锟? 娉ㄦ剰濡傛灉浣犲紑鍚簡闅忔満浣滅瓟, 鏈夊彲鑳藉垎杈ㄤ笉鍑虹瓟妗堟槸鍚︽纭拷?],
              ["nomove", "涓嶄繚瀛樹篃涓嶆彁锟?, "绛夊緟鏃堕棿杩囧悗灏嗕細鑷姩涓嬩竴锟? 閫傚悎鍦ㄦ祴璇曡剼鏈椂浣跨敤锟?],
              ...[10, 20, 30, 40, 50, 60, 70, 80, 90].map((rate) => [
                rate,
                `鎼滃埌${rate}%鐨勯鐩垯鑷姩鎻愪氦`,
                `渚嬪: 100棰樹腑鏌ヨ锟?${rate} 棰樼殑绛旀,锛堢瓟妗堜笉涓€瀹氭纭級, 鍒欎細鑷姩鎻愪氦銆俙
              ]),
              ["100", "姣忎釜棰樼洰閮芥煡鍒扮瓟妗堟墠鑷姩鎻愪氦", "绛旀涓嶄竴瀹氭锟?],
              ["force", "寮哄埗鑷姩鎻愪氦", "涓嶇绛旀鏄惁姝ｇ‘鐩存帴寮哄埗鑷姩鎻愪氦锛屽闇€寮€鍚紝璇烽厤鍚堥殢鏈轰綔绛旇皑鎱庝娇鐢拷?]
            ],
            attrs: {
              title: "鑷姩绛旈瀹屾垚鍚庣殑璁剧疆锛岀洰鍓嶄粎锟?瓒呮槦瀛︿範閫氱殑绔犺妭娴嬭瘯 涓敓锟? 榧犳爣鎮诞鍦ㄩ€夐」涓婂彲浠ユ煡鐪嬫瘡涓€夐」鐨勫叿浣撹В閲婏拷?
            }
          },
          thread: {
            label: "绾跨▼鏁伴噺锛堜釜锟?,
            attrs: {
              type: "number",
              min: 1,
              step: 1,
              max: 3,
              title: "鍚屼竴鏃堕棿鍐呯瓟棰樼嚎绋嬪伐浣滅殑鏁伴噺锛堜緥瀛愶細涓変釜绾跨▼鍒欎唬琛ㄤ竴绉掑唴鍚屾椂鎼滅储涓夐亾棰橈級锛岃繃澶氬彲鑳藉鑷撮搴撴湇鍔″櫒鍘嬪姏杩囧ぇ锛岃閫傚綋璋冧綆锟?
            },
            defaultValue: 1
          },
          "work-when-no-job": {
            defaultValue: false,
            label: "(浠呰秴锟?寮哄埗绛旈",
            attrs: {
              type: "checkbox",
              title: "褰撶珷鑺傛祴璇曞乏涓婅骞舵病鏈夐粍鑹蹭换鍔＄偣鐨勬椂鍊欎緷鐒惰繘琛岀瓟棰橈紙娌℃湁浠诲姟鐐硅鏄庢浣滀笟鍙兘涓嶈鍏ユ€绘垚缁╋紝濡傛灉鑰佸笀瑕佹眰鍒欏彲浠ュ紑鍚級"
            }
          },
          "randomWork-choice": {
            defaultValue: false,
            label: "(浠呰秴锟?闅忔満閫夋嫨",
            attrs: { type: "checkbox", title: "棰樺簱鎼滅储涓嶅埌绛旀鏃讹紝闅忔満閫夋嫨浠绘剰涓€涓€夐」" }
          },
          "randomWork-complete": {
            defaultValue: false,
            label: "(浠呰秴锟?闅忔満濉┖",
            attrs: { type: "checkbox", title: "棰樺簱鎼滅储涓嶅埌绛旀鏃讹紝闅忔満濉啓浠ヤ笅浠绘剰涓€涓枃锟? }
          },
          "randomWork-completeTexts-textarea": {
            defaultValue: ["涓嶄細", "涓嶇煡锟?, "涓嶆竻锟?, "涓嶆噦", "涓嶄細锟?].join("\n"),
            label: "(浠呰秴锟?闅忔満濉┖鏂囨",
            tag: "textarea",
            showIf: "common.settings.randomWork-complete",
            attrs: { title: "姣忚涓€涓紝闅忔満濉叆", style: { minWidth: "200px", minHeight: "50px" } },
            onload(el) {
              el.addEventListener("change", () => {
                if (String(el.value).trim() === "") {
                  el.value = el.defaultValue;
                }
              });
            }
          },
          advancedSettings: {
            ...dropdownStyle,
            defaultValue: false,
            label: "楂樼骇璁剧疆",
            attrs: { type: "checkbox", title: "璇疯皑鎱庝娇鐢ㄩ珮绾ц缃紝鍙兘浼氬奖鍝嶇瓟棰樻晥鏋滐紝灏忕櫧鍦ㄦ湭鐞嗚В鐨勬儏鍐典笅璋ㄦ厧璋冩暣锟? }
          },
          answerWrapperHandlerTimeout: {
            showIf: "common.settings.advancedSettings",
            elementClassName: "config-details",
            label: "鎼滈鏈€澶ц€楁椂锛堢锟?,
            attrs: {
              type: "number",
              min: 10,
              step: 1,
              max: 3 * 60,
              title: "鎼滈瓒呮椂鏃堕棿锛屽崟浣嶄负绉掞紝瓒呰繃杩欎釜鏃堕棿鐩存帴鏀惧純锛岃繘琛屼笅涓€棰樻悳绱拷?
            },
            defaultValue: 120
          },
          stopSecondWhenFinish: {
            showIf: "common.settings.advancedSettings",
            elementClassName: "config-details",
            label: "绛旈缁撴潫鍚庢殏鍋滐紙绉掞級",
            attrs: {
              type: "number",
              min: 3,
              step: 1,
              max: 9999,
              title: "鑷姩绛旈鑴氭湰缁撴潫鍚庢殏鍋滅殑鏃堕棿锛堟柟渚挎煡鐪嬪拰妫€鏌ワ級锟?
            },
            defaultValue: 3
          },
          period: {
            showIf: "common.settings.advancedSettings",
            elementClassName: "config-details",
            label: "鎼滈闂撮殧锛堢锟?,
            attrs: {
              type: "number",
              min: 1,
              step: 1,
              max: 60,
              title: "姣忛亾棰樼殑鎼滈闂撮殧鏃堕棿锛屼笉寤鸿澶綆锛岄伩鍏嶅鍔犳湇鍔″櫒鍘嬪姏锟?
            },
            defaultValue: 3
          },
          answerSeparators: {
            showIf: "common.settings.advancedSettings",
            elementClassName: "config-details",
            label: "绛旀鍒嗛殧锟?,
            attrs: {
              title: "鍒嗛殧绛旀鐨勭鍙凤紝渚嬪锛氱瓟锟?#绛旀2#绛旀3锛屽垎闅旂锟?#锟?浣跨敤鑻辨枃閫楀彿杩涜闅斿紑 : ',' "
            },
            defaultValue: ["===", "#", "---", "###", "|", ";", "锟?].join(","),
            onload(el) {
              el.addEventListener("change", () => {
                if (String(el.value).trim() === "") {
                  el.value = el.defaultValue;
                }
              });
            }
          },
          answerMatchMode: {
            showIf: "common.settings.advancedSettings",
            elementClassName: "config-details",
            label: "绛旀鍖归厤妯″紡",
            tag: "select",
            defaultValue: "similar",
            options: [
              ["similar", "鐩镐技鍖归厤", "绛旀鐩镐技搴﹁揪锟?0%浠ヤ笂灏卞尮锟?],
              ["exact", "绮剧‘鍖归厤", "绛旀蹇呴』瀹屽叏涓€鑷存墠鍖归厤"]
            ]
          },
          redundanceWordsText: {
            showIf: "common.settings.advancedSettings",
            elementClassName: "config-details",
            defaultValue: [
              "鍗曢€夐(蹇咃拷?",
              "濉┖锟?蹇咃拷?",
              "澶氶€夐(蹇咃拷?",
              "(鍗曢€夐)",
              "(澶氶€夐)",
              "(鍒ゆ柇锟?",
              "(濉┖锟?",
              "銆愬崟閫夐锟?,
              "銆愬閫夐锟?,
              "銆愬～绌洪锟?,
              "銆愬垽鏂锟?,
              "銆愬柈閬搁锟?,
              "銆愬閬搁锟?,
              "銆愬垽鏂烽锟?,
              "銆怱ingle Choice锟?,
              "銆怣ultiple Choice锟?,
              "銆恠ingle choice锟?,
              "銆恗ultiple choice锟?,
              "銆怲rue or False锟?
            ].join("\n"),
            label: "棰樼洰鍐椾綑瀛楁鑷姩鍒犻櫎",
            tag: "textarea",
            attrs: {
              title: "鍦ㄦ悳棰樼殑鏃跺€欒嚜鍔ㄥ垹闄ゅ浣欑殑鏂囧瓧锛屼互渚挎彁楂樻悳棰樼殑鍑嗙‘搴︼紝姣忚涓€涓拷?,
              style: { minWidth: "200px", minHeight: "50px" }
            },
            onload(el) {
              el.addEventListener("change", () => {
                if (String(el.value).trim() === "") {
                  el.value = el.defaultValue;
                }
              });
            }
          },
          notification: {
            separator: "鍏朵粬璁剧疆",
            label: "绯荤粺閫氱煡",
            attrs: {
              title: "鍏佽鑴氭湰鍙戦€佺郴缁熼€氱煡锛屽彧鏈夐噸瑕佷簨鎯呭彂鐢熸椂浼氬彂閫佺郴缁熼€氱煡锛屽敖閲忛伩鍏嶇敤鎴峰彈鍒伴獨鎵帮紙鍦ㄧ數鑴戝睆骞曞彸渚ф樉绀洪€氱煡寮圭獥锛屼緥濡傝剼鏈墽琛屽畬姣曪紝鍥惧舰楠岃瘉鐮侊紝鐗堟湰鏇存柊绛夐€氱煡锛夛拷?
            },
            tag: "select",
            defaultValue: "only-notify",
            options: [
              ["only-notify", "鍙樉绀哄彸涓嬭閫氱煡"],
              ["notify-and-voice", "閫氱煡浠ュ強鎻愮ず闊筹紙鍙殑涓€澹帮級"],
              ["all", "閫氱煡锛屾彁绀洪煶锛屼互鍙婁换鍔℃爮闂儊鎻愮ず"],
              ["no-notify", "鍏抽棴绯荤粺閫氱煡"]
            ]
          },
          notificationWebhooks: {
            label: "閫氱煡鍥炶皟",
            attrs: {
              title: "鍙戦€佺郴缁熼€氱煡鏃跺彂閫佸洖璋冭姹傦紝鐢ㄤ簬涓撲笟寮€鍙戜汉鍛樺鎺ュ叾浠栭€氱煡绯荤粺銆傦紙姣忚濉啓涓€涓猆RL锛岄『搴忓彂閫丟ET璇锋眰锟?{message} 涓烘秷鎭崰浣嶇锛屽彲鐢ㄤ簬娑堟伅鍙橀噺鏇挎崲锟?
            },
            tag: "textarea",
            defaultValue: ""
          },
          enableQuestionCaches: {
            label: "棰樺簱缂撳瓨鍔熻兘",
            defaultValue: true,
            attrs: { type: "checkbox", title: "璇︽儏璇峰墠寰€ 閫氱敤-鍏朵粬搴旂敤-棰樺簱鎷撳睍鏌ョ湅锟? }
          }
        },
        methods() {
          return {
            getWorkOptions: () => {
              const workOptions = JSON.parse(JSON.stringify(this.cfg));
              workOptions.answererWrappers = workOptions.answererWrappers.filter(
                (aw) => this.cfg.disabledAnswererWrapperNames.find((daw) => daw === aw.name) === void 0
              );
              return workOptions;
            },
            notificationBySetting: (content, opts) => {
              var _a;
              if (this.cfg.notification !== "no-notify") {
                lib.$gm.notification(content, {
                  extraTitle: opts == null ? void 0 : opts.extraTitle,
                  duration: (_a = opts == null ? void 0 : opts.duration) != null ? _a : 30,
                  important: this.cfg.notification === "all",
                  silent: this.cfg.notification === "only-notify"
                });
                const message2 = ((opts == null ? void 0 : opts.extraTitle) ? (opts == null ? void 0 : opts.extraTitle) + "锟? : "") + content;
                const webhooks = this.cfg.notificationWebhooks.split("\n").map((i) => i.trim()).filter(Boolean);
                for (const webhook of webhooks) {
                  let resolved_webhook = webhook;
                  resolved_webhook = webhook.replace("${message}", encodeURIComponent(message2));
                  request(resolved_webhook, {
                    method: "get",
                    type: "GM_xmlhttpRequest"
                  }).then((result) => {
                    console.debug("閫氱煡鍥炶皟鎴愬姛", { webhook: resolved_webhook, result });
                  }).catch((err) => {
                    console.debug("閫氱煡鍥炶皟澶辫触", { webhook: resolved_webhook, err });
                  });
                }
              }
            }
          };
        },
        oncomplete() {
          AnswerWrapperHandlerConfig.timeout_seconds = this.cfg.answerWrapperHandlerTimeout;
          this.onConfigChange("answerWrapperHandlerTimeout", (sec) => {
            AnswerWrapperHandlerConfig.timeout_seconds = sec;
          });
        },
        onrender({ panel }) {
          if (lib.$gm.isInGMContext()) {
            panel.body.replaceChildren(...this.cfg.answererWrappers.length ? [lib.h("hr")] : []);
            const testNotification = lib.h(
              "button",
              { className: "base-style-button", disabled: this.cfg.answererWrappers.length === 0 },
              "馃摙娴嬭瘯绯荤粺閫氱煡"
            );
            testNotification.onclick = () => {
              this.methods.notificationBySetting("杩欐槸涓€鏉℃祴璇曢€氱煡");
            };
            const refresh = lib.h(
              "button",
              { className: "base-style-button", disabled: this.cfg.answererWrappers.length === 0 },
              "馃攧锔忓埛鏂伴搴撶姸锟?
            );
            refresh.onclick = () => {
              updateState();
            };
            const tableContainer = lib.h("div");
            refresh.style.display = "none";
            tableContainer.style.display = "none";
            panel.body.append(lib.h("div", { style: { display: "flex" } }, [testNotification, refresh]), tableContainer);
            const updateState = async () => {
              tableContainer.replaceChildren();
              let loadedCount = 0;
              if (this.cfg.answererWrappers.length) {
                refresh.style.display = "block";
                tableContainer.style.display = "block";
                refresh.textContent = "馃毇姝ｅ湪鍔犺浇棰樺簱鐘讹拷?..";
                refresh.setAttribute("disabled", "true");
                const table = lib.h("table");
                table.style.width = "100%";
                this.cfg.answererWrappers.forEach(async (item) => {
                  const t2 = Date.now();
                  let success = false;
                  let error;
                  const isDisabled = this.cfg.disabledAnswererWrapperNames.find((name) => name === item.name);
                  const res = isDisabled ? false : await Promise.race([
                    (async () => {
                      try {
                        return await request(new URL(item.url).origin + "/?t=" + t2, {
                          type: "GM_xmlhttpRequest",
                          method: "head",
                          responseType: "text"
                        });
                      } catch (err) {
                        error = err;
                        return false;
                      }
                    })(),
                    (async () => {
                      await $.sleep(10 * 1e3);
                      return false;
                    })()
                  ]);
                  if (typeof res === "string") {
                    success = true;
                  } else {
                    success = false;
                  }
                  const body = lib.h("tbody");
                  body.append(lib.h("td", item.name));
                  body.append(
                    lib.h("td", [
                      lib.$ui.tooltip(
                        lib.h(
                          "span",
                          { title: isDisabled ? "棰樼洰宸茬粡琚仠鐢紝璇峰湪涓婃柟棰樺簱閰嶇疆涓偣鍑诲紑鍚拷? : "" },
                          success ? "杩炴帴鎴愬姛馃煝" : isDisabled ? "宸插仠鐢ㄢ毆" : error ? "杩炴帴澶辫触馃敶" : "杩炴帴瓒呮椂馃煛"
                        )
                      )
                    ])
                  );
                  body.append(lib.h("td", `寤惰繜 : ${success ? Date.now() - t2 : "---"}/ms`));
                  table.append(body);
                  loadedCount++;
                  if (loadedCount === this.cfg.answererWrappers.length) {
                    setTimeout(() => {
                      refresh.textContent = "馃攧锔忓埛鏂伴搴撶姸锟?;
                      refresh.removeAttribute("disabled");
                    }, 2e3);
                  }
                });
                tableContainer.append(table);
              } else {
                refresh.style.display = "none";
                tableContainer.style.display = "none";
              }
            };
            updateState();
            this.offConfigChange(state$5.setting.listenerIds.aw);
            state$5.setting.listenerIds.aw = this.onConfigChange("answererWrappers", (_, __, remote) => {
              if (remote === false) {
                updateState();
              }
            });
          }
        }
      }),
      workResults: new lib.Script({
        name: "馃攷 鎼滅储缁撴灉",
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        namespace: "common.work-results",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["鐐瑰嚮棰樼洰搴忓彿锛屾煡鐪嬫悳绱㈢粨锟?, "濡傛灉娌℃湁鎼滃埌锛屽彲鑳芥槸棰樺簱娌℃湁鏀跺綍璇ラ鐩瓟锟?]).outerHTML
          },
          type: {
            label: "鏄剧ず绫诲瀷",
            tag: "select",
            options: [
              ["numbers", "搴忓彿鍒楄〃"],
              ["questions", "棰樼洰鍒楄〃"]
            ],
            attrs: {
              title: "浣跨敤棰樼洰鍒楄〃鍙兘浼氶€犳垚椤甸潰鍗￠】锟?
            },
            defaultValue: "numbers"
          },
          totalQuestionCount: {
            defaultValue: 0
          },
          requestedCount: {
            defaultValue: 0
          },
          resolvedCount: {
            defaultValue: 0
          },
          currentResultIndex: {
            defaultValue: 0
          },
          questionPositionSyncHandlerType: {
            defaultValue: void 0
          }
        },
        methods() {
          return {
            updateWorkStateByResults: (results) => {
              this.cfg.totalQuestionCount = results.length;
              this.cfg.requestedCount = results.filter((result) => result.requested).length;
              this.cfg.resolvedCount = results.filter((result) => result.resolved).length;
            },
            updateWorkState: (state2) => {
              this.cfg.totalQuestionCount = state2.totalQuestionCount;
              this.cfg.requestedCount = state2.requestedCount;
              this.cfg.resolvedCount = state2.resolvedCount;
            },
            refreshState: () => {
              this.cfg.totalQuestionCount = 0;
              this.cfg.requestedCount = 0;
              this.cfg.resolvedCount = 0;
            },
            clearResults: () => {
              return lib.$store.setTab(TAB_WORK_RESULTS_KEY, []);
            },
            getResults() {
              return lib.$store.getTab(TAB_WORK_RESULTS_KEY) || void 0;
            },
            setResults(results) {
              return lib.$store.setTab(TAB_WORK_RESULTS_KEY, results);
            },
            async appendResults(results) {
              const data = await lib.$store.getTab(TAB_WORK_RESULTS_KEY) || [];
              data.push(...results);
              return lib.$store.setTab(TAB_WORK_RESULTS_KEY, data);
            },
            init(opts) {
              CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = opts == null ? void 0 : opts.questionPositionSyncHandlerType;
              CommonProject.scripts.workResults.methods.refreshState();
              CommonProject.scripts.workResults.methods.clearResults();
            },
            createWorkResultsPanel: (mount2) => {
              const container2 = mount2 || lib.h("div");
              container2.style.width = "400px";
              let scrollPercent = 0;
              const list = lib.h("div", { className: "work-result-list" });
              let mouseoverIndex = -1;
              list.onscroll = () => {
                scrollPercent = list.scrollTop / list.scrollHeight;
              };
              const setNumStyle = (result, num, index) => {
                var _a;
                if (result.requested) {
                  num.classList.add("requested");
                }
                if (index === this.cfg.currentResultIndex) {
                  num.classList.add("active");
                }
                if (result.finish) {
                  num.classList.add("finish");
                } else {
                  if (result.requested && result.resolved && (((_a = result.error) == null ? void 0 : _a.trim().length) !== 0 || result.searchInfos.length === 0 || result.finish === false)) {
                    num.classList.add("error");
                  }
                }
              };
              const render2 = debounce_1$1(async () => {
                const results = await CommonProject.scripts.workResults.methods.getResults();
                if (results == null ? void 0 : results.length) {
                  if (results[this.cfg.currentResultIndex] === void 0) {
                    this.cfg.currentResultIndex = 0;
                  }
                  if (this.cfg.type === "numbers") {
                    const resultContainer = lib.h("div", { className: "work-result-container" });
                    list.style.marginBottom = "12px";
                    list.style.overflow = "auto";
                    list.style.maxHeight = "300px";
                    const nums = results.map((result, index) => {
                      return lib.h("span", { className: "search-infos-num", innerText: (index + 1).toString() }, (num) => {
                        setNumStyle(result, num, index);
                        num.onclick = () => {
                          var _a, _b;
                          for (const n of nums) {
                            n.classList.remove("active");
                          }
                          num.classList.add("active");
                          this.cfg.currentResultIndex = index;
                          resultContainer.replaceChildren(createResult(result));
                          if (this.cfg.questionPositionSyncHandlerType) {
                            (_b = (_a = state$5.workResult.questionPositionSyncHandler)[this.cfg.questionPositionSyncHandlerType]) == null ? void 0 : _b.call(
                              _a,
                              index
                            );
                          }
                        };
                      });
                    });
                    list.replaceChildren(...nums);
                    resultContainer.replaceChildren(createResult(results[this.cfg.currentResultIndex]));
                    container2.replaceChildren(list, resultContainer);
                  } else {
                    list.style.overflow = "auto";
                    list.style.maxHeight = window.innerHeight / 2 + "px";
                    const resultContainer = lib.h("div", { className: "work-result-question-container" });
                    const nums = [];
                    const questions = results.map((result, index) => {
                      const num = lib.h(
                        "span",
                        {
                          className: "search-infos-num",
                          innerHTML: (index + 1).toString()
                        },
                        (num2) => {
                          num2.style.marginRight = "12px";
                          num2.style.display = "inline-block";
                          setNumStyle(result, num2, index);
                        }
                      );
                      nums.push(num);
                      return lib.h(
                        "div",
                        [num, result.question],
                        (question) => {
                          question.onmouseover = () => {
                            mouseoverIndex = index;
                            resultContainer.replaceChildren(createResult(result));
                          };
                          question.onmouseleave = () => {
                            mouseoverIndex = -1;
                            resultContainer.replaceChildren(createResult(results[this.cfg.currentResultIndex]));
                          };
                          question.onclick = () => {
                            var _a, _b;
                            for (const n of nums) {
                              n.classList.remove("active");
                            }
                            for (const q of questions) {
                              q.classList.remove("active");
                            }
                            nums[index].classList.add("active");
                            question.classList.add("active");
                            this.cfg.currentResultIndex = index;
                            resultContainer.replaceChildren(createResult(result));
                            if (this.cfg.questionPositionSyncHandlerType) {
                              (_b = (_a = state$5.workResult.questionPositionSyncHandler)[this.cfg.questionPositionSyncHandlerType]) == null ? void 0 : _b.call(
                                _a,
                                index
                              );
                            }
                          };
                        }
                      );
                    });
                    list.replaceChildren(...questions);
                    if (mouseoverIndex === -1) {
                      resultContainer.replaceChildren(createResult(results[this.cfg.currentResultIndex]));
                    } else {
                      resultContainer.replaceChildren(createResult(results[mouseoverIndex]));
                    }
                    container2.replaceChildren(
                      lib.h("div", [list, lib.h("div", {}, [resultContainer])], (div) => {
                        div.style.display = "flex";
                      })
                    );
                  }
                } else {
                  container2.replaceChildren(
                    lib.h("div", { className: "alert-info-wrapper" }, [
                      lib.h("div", "鏆傛棤浠讳綍鎼滅储缁撴灉~", (div) => {
                        div.style.marginTop = "12px";
                        div.className = "result-info no-answer";
                      })
                    ])
                  );
                }
                list.scrollTo({
                  top: scrollPercent * list.scrollHeight,
                  behavior: "auto"
                });
                const tip = lib.h("div", [
                  lib.h("div", { className: "search-infos-num" }, "1"),
                  " 琛ㄧず绛夊緟澶勭悊锟?,
                  lib.h("br"),
                  lib.h("div", { className: "search-infos-num requested" }, "1"),
                  " 琛ㄧず宸插畬鎴愭悳锟?",
                  lib.h("br"),
                  lib.h("div", { className: "search-infos-num finish" }, "1"),
                  " 琛ㄧず宸叉悳绱㈠凡绛旈 "
                ]);
                container2.prepend(
                  lib.h("hr"),
                  lib.h(
                    "div",
                    [
                      lib.$ui.space(
                        [
                          lib.h("span", `宸叉悳锟? ${this.cfg.requestedCount}/${this.cfg.totalQuestionCount}`),
                          lib.h("span", `宸茬瓟锟? ${this.cfg.resolvedCount}/${this.cfg.totalQuestionCount}`),
                          lib.h("a", "鎻愮ず", (btn) => {
                            btn.style.cursor = "pointer";
                            btn.onclick = () => {
                              lib.$modal.confirm({ content: tip, footer: void 0 });
                            };
                          }),
                          lib.$ui.tooltip(
                            lib.h("a", "娓呯┖缁撴灉", (btn) => {
                              btn.title = "浠呯敤浜庝笉浼氳嚜鍔ㄦ竻绌烘悳绱㈢粨鏋滅殑鍦烘櫙锛屼緥濡傝秴鏄熼潪鏁村嵎棰勮妯″紡";
                              btn.style.cursor = "pointer";
                              btn.onclick = () => {
                                var _a, _b, _c, _d;
                                this.methods.clearResults();
                                const { panel, header: header2 } = CXProject.scripts.work;
                                if (panel && header2) {
                                  (_b = (_a = CXProject.scripts.work).onrender) == null ? void 0 : _b.call(_a, { panel, header: header2 });
                                  (_d = (_c = CommonProject.scripts.workResults).onrender) == null ? void 0 : _d.call(_c, { panel, header: header2 });
                                }
                              };
                            })
                          )
                        ],
                        { separator: "|" }
                      )
                    ],
                    (div) => {
                      div.style.textAlign = "center";
                      div.style.fontSize = "12px";
                    }
                  )
                );
              }, 100);
              const createResult = (result) => {
                if (result) {
                  let info = null;
                  if (result.requested === false && result.resolved === false) {
                    info = lib.h("div", { className: "result-info unresolved" }, "绛夊緟鎼滅储锟?.. 馃攳");
                  } else if (result.error) {
                    info = lib.h("div", { className: "result-info error" }, "锟?" + result.error);
                  } else if (result.searchInfos.length === 0) {
                    info = lib.h("div", { className: "result-info no-answer" }, "锟?棰樺簱娌℃悳绱㈠埌绛旀");
                  } else {
                    info = result.finish ? null : result.resolved === false ? lib.h("div", { className: "result-info unresolved" }, "绛夊緟椤哄簭绛旈锟?.. 鈴憋笍") : lib.h("div", { className: "result-info error" }, "锟?姝ら鏈畬锟? 鍙兘鏄病鏈夊尮閰嶇殑閫夐」锟?);
                  }
                  return lib.h("div", [
                    lib.h("div", { className: "alert-info-wrapper" }, [info != null ? info : lib.h("div")]),
                    lib.h(SearchInfosElement, {
                      infos: result.searchInfos,
                      question: result.question,
                      type: result.type
                    })
                  ]);
                } else {
                  return lib.h("div", "undefined");
                }
              };
              render2();
              this.onConfigChange("type", render2);
              this.onConfigChange("requestedCount", render2);
              this.onConfigChange("resolvedCount", render2);
              lib.$store.addChangeListener(TAB_WORK_RESULTS_KEY, render2);
              return container2;
            }
          };
        },
        onrender({ panel }) {
          panel.body.replaceChildren(this.methods.createWorkResultsPanel());
        }
      }),
      onlineSearch: new lib.Script({
        name: "馃攷 鍦ㄧ嚎鎼滈",
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        namespace: "common.online-search",
        configs: {
          notes: {
            defaultValue: "鏌ラ鍓嶈锟?鈥滈€氱敤-鍏ㄥ眬璁剧疆锟?涓缃搴撻厤缃紝鎵嶈兘杩涜鍦ㄧ嚎鎼滈锟?
          },
          selectSearch: {
            label: "鍒掕瘝鎼滅储",
            defaultValue: true,
            attrs: { type: "checkbox", title: "浣跨敤榧犳爣婊戝姩閫夋嫨椤甸潰涓殑棰樼洰杩涜鎼滅储锟? }
          },
          searchValue: {
            sync: true,
            label: "鎼滅储棰樼洰",
            tag: "textarea",
            attrs: {
              placeholder: "杈撳叆棰樼洰锛岃灏介噺淇濊瘉棰樼洰瀹屾暣锛屼笉瑕佹紡锟?,
              style: {
                minWidth: "300px",
                minHeight: "64px"
              }
            },
            defaultValue: ""
          }
        },
        oncomplete() {
          document.addEventListener(
            "selectionchange",
            debounce_1$1(() => {
              var _a;
              if (this.cfg.selectSearch) {
                const val = ((_a = document.getSelection()) == null ? void 0 : _a.toString()) || "";
                if (val) {
                  this.cfg.searchValue = val;
                }
              }
            }, 500)
          );
        },
        onrender({ panel }) {
          const content = lib.h("div", "", (content2) => {
            content2.style.marginBottom = "12px";
          });
          const search = async (value) => {
            if (CommonProject.scripts.settings.cfg.answererWrappers.length === 0) {
              lib.$modal.alert({ content: "璇峰厛锟?閫氱敤-鍏ㄥ眬璁剧疆 閰嶇疆棰樺簱锛屾墠鑳借繘琛屽湪绾挎悳棰橈拷? });
              return;
            }
            content.replaceChildren(lib.h("span", "鎼滅储锟?.."));
            if (value) {
              const t2 = Date.now();
              const infos = await defaultAnswerWrapperHandler(CommonProject.scripts.settings.cfg.answererWrappers, {
                title: value
              });
              const resume = ((Date.now() - t2) / 1e3).toFixed(2);
              content.replaceChildren(
                lib.h(
                  "div",
                  [
                    lib.h("hr"),
                    lib.h(
                      "div",
                      { style: { color: "#a1a1a1" } },
                      `鎼滅储锟?${infos.map((i) => i.results).flat().length} 涓粨鏋滐紝鍏辫€楁椂 ${resume} 绉抈
                    ),
                    lib.h(SearchInfosElement, {
                      infos: infos.map((info) => ({
                        results: info.results.map(
                          (res) => [res.question, res.answer, res.extra_data]
                        ),
                        homepage: info.homepage,
                        name: info.name
                      })),
                      question: value
                    })
                  ],
                  (div) => {
                    div.classList.add("card");
                    div.style.width = "480px";
                  }
                )
              );
            } else {
              content.replaceChildren(lib.h("span", "棰樼洰涓嶈兘涓虹┖锟?));
            }
          };
          const button = lib.h("button", "鎼滅储", (button2) => {
            button2.className = "base-style-button";
            button2.style.width = "120px";
            button2.onclick = () => {
              search(this.cfg.searchValue);
            };
          });
          const searchContainer = lib.h("div", { style: { textAlign: "end" } }, [button]);
          panel.body.append(lib.h("div", [content, searchContainer]));
        }
      }),
      render: RenderScript,
      hack: new lib.Script({
        name: "椤甸潰澶嶅埗绮樿创闄愬埗瑙ｉ櫎",
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        hideInPanel: true,
        onactive() {
          enableCopy([document, document.body]);
        },
        oncomplete() {
          enableCopy([document, document.body]);
          insertCopyableStyle();
          setTimeout(() => {
            enableCopy([document, document.body]);
            insertCopyableStyle();
          }, 3e3);
        }
      }),
      disableDialog: new lib.Script({
        name: "绂佹寮圭獥",
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        hideInPanel: true,
        priority: 1,
        onstart() {
          function disableDialog(msg) {
            lib.$modal.alert({
              profile: "寮圭獥鏉ヨ嚜锟? + location.origin,
              content: msg
            });
          }
          try {
            lib.$gm.unsafeWindow.alert = disableDialog;
            window.alert = disableDialog;
          } catch (e) {
            console.error(e);
          }
        }
      }),
      apps: new lib.Script({
        name: "馃摫 鎷撳睍搴旂敤",
        matches: [["", /.*/]],
        namespace: "common.apps",
        configs: {
          notes: {
            defaultValue: "杩欓噷鏄竴浜涘叾浠栫殑搴旂敤鎴栬€呮嫇灞曞姛鑳斤拷?
          },
          localQuestionCaches: {
            defaultValue: [],
            extra: {
              appConfigSync: false
            }
          }
        },
        methods() {
          return {
            addQuestionCache: async (...questionCacheItems) => {
              const questionCaches = this.cfg.localQuestionCaches;
              for (const item of questionCacheItems) {
                if (questionCaches.find((c) => c.title === item.title && c.answer === item.answer) === void 0) {
                  questionCaches.unshift(item);
                }
              }
              questionCaches.splice(200);
              this.cfg.localQuestionCaches = questionCaches;
            },
            addQuestionCacheFromWorkResult(swr) {
              CommonProject.scripts.apps.methods.addQuestionCache(
                ...swr.map(
                  (r) => r.searchInfos.map(
                    (i) => i.results.filter((res) => res[1]).map((res) => ({
                      title: r.question,
                      answer: res[1],
                      from: i.name.replace(/銆愰搴撶紦瀛橈拷?g, ""),
                      homepage: i.homepage || ""
                    })).flat()
                  ).flat()
                ).flat()
              );
            },
            searchAnswerInCaches: async (title, whenSearchEmpty) => {
              if (CommonProject.scripts.settings.cfg.enableQuestionCaches === false) {
                return await whenSearchEmpty();
              }
              let results = [];
              const caches = this.cfg.localQuestionCaches;
              for (const cache of caches) {
                if (cache.title.trim() === title.trim()) {
                  results.push({
                    name: cache.from,
                    homepage: cache.homepage,
                    results: [{ answer: cache.answer, question: cache.title, extra_data: { ai: cache.ai, cache: true } }]
                  });
                }
              }
              if (results.length === 0) {
                results = await whenSearchEmpty();
              }
              return results;
            },
            async showChangelog() {
              const changelog = lib.h("div", {
                className: "markdown card",
                innerHTML: "鍔犺浇锟?..",
                style: { maxWidth: "600px" }
              });
              lib.$modal.simple({
                width: 600,
                content: lib.h("div", [
                  lib.h("div", { className: "notes card" }, [
                    lib.$ui.notes(["姝ら〉闈㈠疄鏃舵洿鏂帮紝閬囧埌闂鍙互鏌ョ湅鏈€鏂扮増鏈槸鍚︿慨澶嶏拷?])
                  ]),
                  changelog
                ])
              });
              const md = await request("https://cdn.ocsjs.com/articles/ocs/changelog.md?t=" + Date.now(), {
                type: "GM_xmlhttpRequest",
                responseType: "text",
                method: "get"
              });
              changelog.innerHTML = markdown(md);
            }
          };
        },
        onrender({ panel }) {
          const btnStyle = {
            padding: "6px 12px",
            margin: "4px",
            marginBottom: "8px",
            boxShadow: "0px 0px 4px #bebebe",
            borderRadius: "8px",
            cursor: "pointer"
          };
          const cachesBtn = lib.h("div", { innerText: "馃捑 棰樺簱缂撳瓨", style: btnStyle }, (btn) => {
            btn.onclick = () => {
              const questionCaches = this.cfg.localQuestionCaches;
              const list = questionCaches.map(
                (c) => lib.h(
                  "div",
                  {
                    className: "question-cache",
                    style: {
                      margin: "8px",
                      border: "1px solid lightgray",
                      borderRadius: "4px",
                      padding: "8px"
                    }
                  },
                  [
                    lib.h("div", { className: "title" }, [
                      lib.$ui.tooltip(
                        lib.h(
                          "span",
                          {
                            title: `鏉ヨ嚜锟?{c.from || "鏈煡棰樺簱"}
涓婚〉锟?{c.homepage || "鏈煡涓婚〉"}`,
                            style: { fontWeight: "bold" }
                          },
                          c.title
                        )
                      )
                    ]),
                    lib.h("div", { className: "answer", style: { marginTop: "6px" } }, c.answer)
                  ]
                )
              );
              const countEl = lib.h("span", ["褰撳墠缂撳瓨鏁伴噺锟? + questionCaches.length]);
              lib.$modal.simple({
                width: 800,
                content: lib.h("div", [
                  lib.h("div", { className: "notes card" }, [
                    lib.$ui.notes([
                      "棰樺簱缂撳瓨鏄皢棰樺簱鐨勯鐩拰绛旀淇濆瓨鍦ㄥ唴瀛橈紝鍦ㄩ噸澶嶄娇鐢ㄦ椂鍙互鐩存帴浠庡唴瀛樿幏鍙栵紝涓嶉渶瑕佸啀娆¤姹傞搴擄拷?,
                      "浠ヤ笅鏄綋鍓嶅瓨鍌ㄧ殑棰樺簱锛岄粯璁ゅ瓨锟?00棰橈紝褰撳墠椤甸潰鍏抽棴鍚庝細鑷姩娓呴櫎锟?
                    ])
                  ]),
                  lib.h("div", { className: "card" }, [
                    lib.$ui.space(
                      [
                        countEl,
                        lib.$ui.button("娓呯┖棰樺簱缂撳瓨", {}, (btn2) => {
                          btn2.onclick = () => {
                            this.cfg.localQuestionCaches = [];
                            countEl.innerText = "褰撳墠缂撳瓨鏁伴噺锟?";
                            list.forEach((el) => el.remove());
                          };
                        })
                      ],
                      { separator: "|" }
                    )
                  ]),
                  lib.h(
                    "div",
                    questionCaches.length === 0 ? [lib.h("div", { style: { textAlign: "center" } }, "鏆傛棤棰樺簱缂撳瓨")] : list
                  )
                ])
              });
            };
          });
          const exportSetting = lib.$ui.tooltip(
            lib.h(
              "div",
              {
                innerText: "馃摛 瀵煎嚭鍏ㄩ儴璁剧疆",
                style: btnStyle,
                title: "瀵煎嚭鍏ㄩ儴椤甸潰鐨勮缃紝鍖呮嫭鍏ㄥ眬璁剧疆锛岄搴撻厤缃紝瀛︿範璁剧疆绛夌瓑銆傦紙鏂囦欢鍚庣紑鍚嶄负锟?ocssetting锟?
              },
              (btn) => {
                btn.onclick = () => {
                  const setting = /* @__PURE__ */ Object.create({});
                  for (const key of lib.$store.list()) {
                    const val = lib.$store.get(key);
                    if (val) {
                      Reflect.set(setting, key, val);
                    }
                  }
                  const blob = new Blob([JSON.stringify(setting, null, 2)], { type: "text/plain" });
                  const url = URL.createObjectURL(blob);
                  const a = lib.h("a", { href: url, download: "ocs-setting-export.ocssetting" });
                  a.click();
                  URL.revokeObjectURL(url);
                };
              }
            )
          );
          const importSetting = lib.$ui.tooltip(
            lib.h(
              "div",
              {
                innerText: "馃摜 瀵煎叆鍏ㄩ儴璁剧疆",
                style: btnStyle,
                title: "瀵煎叆骞朵笖瑕嗙洊褰撳墠鐨勫叏閮ㄨ缃€傦紙鏂囦欢鍚庣紑鍚嶄负锟?ocssetting锟?
              },
              (btn) => {
                btn.onclick = () => {
                  const input = lib.h("input", { type: "file", accept: ".ocssetting" });
                  input.onchange = async () => {
                    var _a;
                    const file = (_a = input.files) == null ? void 0 : _a[0];
                    if (file) {
                      const setting = await file.text();
                      const obj = JSON.parse(setting);
                      for (const key of Object.keys(obj)) {
                        lib.$store.set(key, obj[key]);
                      }
                      lib.$message.success({ content: "璁剧疆瀵煎叆鎴愬姛锛岄〉闈㈠嵆灏嗗埛鏂帮拷?, duration: 3 });
                      setTimeout(() => {
                        location.reload();
                      }, 3e3);
                    }
                  };
                  input.click();
                };
              }
            )
          );
          [cachesBtn, exportSetting, importSetting].forEach((btn) => {
            btn.onmouseover = () => {
              btn.style.boxShadow = "0px 0px 4px #0099ff9c";
            };
            btn.onmouseout = () => {
              btn.style.boxShadow = "0px 0px 4px #bebebe";
            };
          });
          const sep = (text) => lib.h("div", { className: "separator", style: { padding: "4px 0px" } }, text);
          panel.body.replaceChildren(
            lib.h("div", [sep("棰樺簱鎷撳睍"), cachesBtn, sep("鍏朵粬鍔熻兘"), exportSetting, importSetting])
          );
        }
      })
    }
  });
  function insertCopyableStyle() {
    const style = document.createElement("style");
    style.innerHTML = `
		html * {
		  -webkit-user-select: text !important;
		  -khtml-user-select: text !important;
		  -moz-user-select: text !important;
		  -ms-user-select: text !important;
		  user-select: text !important;
		}`;
    document.head.append(style);
  }
  function createAnswererWrapperList(aw) {
    return aw.map(
      (item) => lib.h(
        "details",
        [
          lib.h("summary", [
            lib.$ui.space([
              (() => {
                let isDisabled = CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames.includes(item.name);
                const checkbox = lib.h("input", { type: "checkbox", checked: !isDisabled, className: "base-style-switch" });
                checkbox.onclick = () => {
                  isDisabled = !isDisabled;
                  if (isDisabled) {
                    CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames = [
                      ...CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames,
                      item.name
                    ];
                    lib.$message.warn({
                      content: "棰樺簱锟? + item.name + " 宸茶鍋滅敤锛屽闇€寮€鍚鍦細閫氱敤-鍏ㄥ眬璁剧疆-棰樺簱閰嶇疆涓紑鍚拷?,
                      duration: 30
                    });
                  } else {
                    CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames = CommonProject.scripts.settings.cfg.disabledAnswererWrapperNames.filter(
                      (name) => name !== item.name
                    );
                    lib.$message.success({
                      content: "棰樺簱锟? + item.name + " 宸插惎鐢拷?,
                      duration: 3
                    });
                  }
                };
                checkbox.title = "鐐瑰嚮鍋滅敤鎴栬€呭惎鐢ㄩ搴擄紝鍋滅敤棰樺簱鍚庡皢鏃犳硶鍦ㄨ嚜鍔ㄧ瓟棰樹腑鏌ヨ棰樼洰";
                return lib.$ui.tooltip(checkbox);
              })(),
              lib.h("span", item.name)
            ])
          ]),
          lib.h("ul", [
            lib.h("li", ["鍚嶅瓧	", item.name]),
            lib.h("li", { innerHTML: `瀹樼綉	<a target="_blank" href=${item.homepage}>${item.homepage || "锟?}</a>` }),
            lib.h("li", ["鎺ュ彛	", item.url]),
            lib.h("li", ["璇锋眰鏂规硶	", item.method]),
            lib.h("li", ["璇锋眰绫诲瀷	", item.type]),
            lib.h("li", ["璇锋眰锟?", JSON.stringify(item.headers, null, 4) || "锟?]),
            lib.h("li", ["璇锋眰锟?", JSON.stringify(item.data, null, 4) || "锟?])
          ])
        ],
        (details) => {
          details.style.paddingLeft = "12px";
        }
      )
    );
  }
  const createGuide = () => {
    const showProjectDetails = (project2) => {
      lib.$modal.simple({
        title: project2.name,
        width: 800,
        content: lib.h("div", [
          lib.h("div", [
            "杩愯鍩熷悕锟?,
            ...(project2.domains || []).map(
              (d) => lib.h(
                "a",
                { href: d.startsWith("http") ? d : "https://" + d, target: "_blank", style: { margin: "0px 4px" } },
                d
              )
            )
          ]),
          lib.h("div", "鑴氭湰鍒楄〃锟?),
          lib.h(
            "ul",
            Object.keys(project2.scripts).sort((a, b) => project2.scripts[b].hideInPanel ? -1 : 1).map((key) => {
              const script2 = project2.scripts[key];
              return lib.h(
                "li",
                [
                  lib.h("b", script2.name),
                  lib.$ui.notes([
                    lib.h("span", ["鎿嶄綔闈㈡澘锟?, script2.hideInPanel ? "闅愯棌" : "鏄剧ず"]),
                    [
                      "杩愯椤甸潰锟?,
                      lib.h(
                        "ul",
                        script2.matches.map((m) => Array.isArray(m) ? m : ["鏃犳弿锟?, m]).map(
                          (i) => lib.h("li", [
                            i[0],
                            "锟?,
                            i[1] instanceof RegExp ? i[1].toString().replace(/\\/g, "").slice(1, -1) : lib.h("span", i[1])
                          ])
                        )
                      )
                    ]
                  ])
                ],
                (li) => {
                  li.style.marginBottom = "12px";
                }
              );
            }),
            (ul) => {
              ul.style.padding = "12px 24px";
              ul.style.border = "1px solid #e1e1e1";
              ul.style.borderRadius = "4px";
              ul.style.maxHeight = "400px";
              ul.style.overflow = "auto";
              ul.style.paddingLeft = "42px";
            }
          )
        ])
      });
    };
    const gotoHome = lib.h("button", { className: "base-style-button-secondary" }, "馃彙瀹樼綉鏁欑▼");
    gotoHome.onclick = () => window.open("https://docs.ocsjs.com", "_blank");
    const contactUs = lib.h("button", { className: "base-style-button-secondary" }, "馃棬锔忎氦娴佺兢");
    contactUs.onclick = () => window.open("https://docs.ocsjs.com/docs/about#浜ゆ祦鏂瑰紡", "_blank");
    const changeLog = lib.h("button", { className: "base-style-button-secondary" }, "馃搫鏇存柊鏃ュ織");
    changeLog.onclick = () => CommonProject.scripts.apps.methods.showChangelog();
    const cardStyle = {
      border: "1px solid #eee",
      borderRadius: "4px",
      padding: "8px",
      paddingTop: "4px"
    };
    return lib.h("div", { className: "user-guide" }, [
      lib.h("div", { style: cardStyle }, [
        lib.h("div", { style: { marginBottom: "4px", fontWeight: "bold" } }, [
          "鉁ㄥ吋瀹圭殑缃戣骞冲彴锟?,
          lib.h("span", { className: "secondary", style: { fontWeight: "normal" } }, "锛堟湭閫傞厤鐨勫钩鍙板皢鏃犳硶杩愯锛岃绛夊緟閫傞厤锟?)
        ]),
        lib.h("div", [
          ...[CXProject, ZHSProject, ZJYProject, IcveMoocProject, ICourseProject].map((project2) => {
            const btn = lib.h("button", { className: "base-style-button-secondary", style: { margin: "4px" } }, [
              project2.name
            ]);
            btn.onclick = () => {
              showProjectDetails(project2);
            };
            return btn;
          })
        ])
      ]),
      lib.h("div", { style: { ...cardStyle, marginTop: "12px" } }, [
        lib.h("div", { style: { marginBottom: "8px", fontWeight: "bold" } }, "馃寪蹇嵎璁块棶锟?),
        gotoHome,
        contactUs,
        changeLog
      ])
    ]);
  };
  async function waitForMedia(options) {
    var _a;
    const res = await Promise.race([
      new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          const video = ((options == null ? void 0 : options.root) || document).querySelector(
            `${(options == null ? void 0 : options.videoSelector) || "video"},${(options == null ? void 0 : options.audioSelector) || "audio"}`
          );
          if (video && (!(options == null ? void 0 : options.filter) || options.filter(video))) {
            clearInterval(interval);
            resolve(video);
          }
        }, 200);
      }),
      $.sleep((_a = options == null ? void 0 : options.timeout) != null ? _a : 3 * 60 * 1e3)
    ]);
    if (res) {
      return res;
    } else {
      throw new Error("瑙嗛/闊抽鏈壘鍒帮紝鎴栬€呭姞杞借秴鏃讹拷?);
    }
  }
  function waitForElement(selector, opts) {
    return new Promise((resolve, reject) => {
      let timeout;
      const interval = setInterval(() => {
        const el = typeof selector === "function" ? selector() : document.querySelector(selector);
        if (el) {
          clearInterval(interval);
          timeout && clearTimeout(timeout);
          resolve(el);
        }
      }, (opts == null ? void 0 : opts.check_period_ms) || 1e3);
      if (opts == null ? void 0 : opts.timeout_seconds) {
        timeout = setTimeout(() => {
          clearInterval(interval);
          resolve(void 0);
        }, ((opts == null ? void 0 : opts.timeout_seconds) || 10) * 1e3);
      }
    });
  }
  const $playwright = {
    showError: () => {
      const href = "https://docs.ocsjs.com/docs/script-helper";
      const errorEl = lib.h("div", [
        "褰撳墠椤甸潰闇€瑕佷笅杞絆CS妗岄潰绔紝骞跺湪妗岄潰绔腑鏂板缓娴忚鍣紝鍦ㄦ柊寤虹殑娴忚鍣ㄤ腑鎵嶈兘杩涜姝ｅ父鍒疯锛岀偣鍑婚摼鎺ユ煡鐪嬭锟?=> ",
        lib.h("a", { href, target: "_blank" }, href)
      ]);
      lib.$modal.alert({
        maskCloseable: false,
        title: "锟?閿欒",
        confirmButtonText: "鏌ョ湅璇︽儏",
        content: errorEl.cloneNode(true),
        onConfirm() {
          window.open(href, "_blank");
        }
      });
      lib.$message.error({ content: errorEl.cloneNode(true), duration: 0 });
    }
  };
  const state$4 = {
    study: {
      stop: false,
      currentMedia: void 0,
      stopInterval: 0,
      stopMessage: void 0
    }
  };
  const remote_required_pages = ["fusioncourseh5.zhihuishu.com", "studywisdomh5.zhihuishu.com"];
  const gxk_read_notes = [
    "鈿狅笍 濡傛灉鏈紑濮嬬瓟棰橈紝璇峰皾璇曞埛鏂伴〉闈拷?,
    "鈿狅笍 绂佹鍚屾椂鎵撳紑澶氫釜浣滀笟/鑰冭瘯椤甸潰锟?,
    ["鈿狅笍 绛旈涓鍕胯繘琛屼换浣曟搷浣滐紝濡傞渶鏆傚仠绛旈", "璇风瓑寰呭叏閮ㄩ鐩悳绱㈠畬鎴愬苟鎵ц鑷姩淇濆瓨鍔熻兘鍚庢墠鑳芥搷浣滐拷?],
    ["鈿狅笍 鏆傚仠鍚庢墜鍔ㄦ搷浣滆纭繚姣忎釜棰樼洰閮界偣鍑讳笅涓€锟?, "杩涜绛旀淇濆瓨锛堜笉鐒朵笉浼氫繚瀛橈紝鎻愪氦娌″垎锟?]
  ];
  class StudyVideoH5 {
    constructor() {
      this.remotePage = void 0;
    }
    async init() {
      this.remotePage = await BackgroundProject.scripts.dev.methods.getRemotePlaywrightCurrentPage();
      if (!this.remotePage) {
        throw $playwright.showError();
      }
    }
    getCourseName() {
      var _a;
      return ((_a = lib.$el(".source-name")) == null ? void 0 : _a.textContent) || "鏃犲悕锟?;
    }
    getChapterName(root2) {
      var _a;
      return ((_a = root2.querySelector(".catalogue_title")) == null ? void 0 : _a.textContent) || "鏈煡绔犺妭";
    }
    getNext(opts) {
      let videoItems = Array.from(document.querySelectorAll(".clearfix.video"));
      if (!opts.restudy) {
        videoItems = videoItems.filter((el) => el.querySelector(".time_icofinish") === null);
      }
      for (let i = 0; i < videoItems.length; i++) {
        const item = videoItems[i];
        if (item.classList.contains("current_play")) {
          return videoItems[i + (opts.next ? 1 : 0)];
        }
      }
      return videoItems[0];
    }
    async switchPlaybackRate(rate) {
      var _a;
      const controlsBar = lib.$el(".controlsBar");
      const sl = lib.$el(".speedList");
      if (controlsBar && sl) {
        controlsBar.style.display = "block";
        sl.style.display = "block";
        const rate_parsed = parseFloat(String(rate));
        const selector = `.speedList [rate="${rate_parsed === 1 ? "1.0" : rate}"],.speedList [rate="${rate_parsed === 1 ? "1" : rate}"]`;
        if (this.remotePage) {
          await this.remotePage.click(selector);
        } else {
          (_a = document.querySelector(selector)) == null ? void 0 : _a.click();
        }
      }
    }
    async switchLine(definition2) {
      const controlsBar = lib.$el(".controlsBar");
      const dl = lib.$el(".definiLines");
      if (controlsBar && dl) {
        controlsBar.style.display = "block";
        dl.style.display = "block";
        const selector = `.definiLines .${definition2}:not(.active)`;
        const el = document.querySelector(selector);
        if (el) {
          if (this.remotePage) {
            await this.remotePage.click(selector);
          } else {
            el.click();
          }
        }
      }
    }
    hasJob() {
      var _a;
      return ((_a = lib.$$el(".clearfix.video")) == null ? void 0 : _a.length) > 0;
    }
    hideDialog() {
      lib.$$el(".el-dialog__wrapper").forEach((dialog) => {
        dialog.remove();
      });
    }
    async handleTestDialog() {
      var _a, _b;
      const items = lib.$$el("#playTopic-dialog .el-pager .number");
      if (items.length) {
        for (const item of items) {
          if (item.classList.contains("active") === false) {
            item.click();
            await lib.$.sleep(500);
          }
          const options = lib.$$el("#playTopic-dialog ul .topic-item");
          if (options.length !== 0) {
            await waitForCaptcha();
            $render.moveToEdge();
            const random = Math.floor(Math.random() * options.length);
            await lib.$.sleep(1e3);
            const btn_selector = `#playTopic-dialog .topic .radio ul > li:nth-child(${random + 1})`;
            if (this.remotePage) {
              await this.remotePage.click(btn_selector);
            } else {
              (_a = lib.$el(btn_selector)) == null ? void 0 : _a.click();
            }
            await lib.$.sleep(1e3);
          }
        }
        await lib.$.sleep(1e3);
        const close_btn_selector = "#playTopic-dialog .close-btn,#playTopic-dialog .btn";
        if (this.remotePage) {
          await this.remotePage.click(close_btn_selector);
        } else {
          (_b = lib.$el(close_btn_selector)) == null ? void 0 : _b.click();
        }
      }
      await lib.$.sleep(3e3);
      await this.handleTestDialog();
    }
  }
  class FusionCourseH5 extends StudyVideoH5 {
    getCourseName() {
      return "鏅烘収璇剧▼-AI";
    }
    getChapterName(root2) {
      const is_resource_box_mode = !!document.querySelector(".resource-box");
      if (is_resource_box_mode) {
        const card_name = root2.querySelector(".file-name");
        if (card_name) {
          return card_name.textContent || "鏈煡绔犺妭";
        }
      }
      return super.getChapterName(root2);
    }
    getNext(opts) {
      const is_resource_box_mode = !!document.querySelector(".resource-box");
      if (is_resource_box_mode) {
        const getNextCard = () => {
          const cards = Array.from(document.querySelectorAll(".resources-item"));
          let target_el;
          let start2 = false;
          for (let index = 0; index < cards.length; index++) {
            const card = cards[index];
            if (start2) {
              if (opts.restudy) {
                target_el = card;
                break;
              } else {
                if (card.querySelector(".isFinish")) {
                  continue;
                }
                target_el = card;
                break;
              }
            }
            if (card.className.includes("active")) {
              start2 = true;
            }
          }
          return target_el;
        };
        const next_card = getNextCard();
        if (next_card) {
          return next_card;
        }
      }
      let videoItems = Array.from(document.querySelectorAll(".clearfix.video")).filter((el) => {
        if (is_resource_box_mode) {
          return !!el.querySelector(".resource-box");
        }
        return true;
      });
      console.log(videoItems);
      if (!opts.restudy) {
        if (is_resource_box_mode) {
          videoItems = videoItems.filter((el) => {
            var _a;
            const text = ((_a = el.querySelector(".resource-text")) == null ? void 0 : _a.textContent) || "";
            const [progress, total] = text.replace("蹇呭", "").trim().split("/").map((s) => parseInt(s));
            return progress < total;
          });
        } else {
          videoItems = videoItems.filter((el) => {
            const num_el = el.querySelector(".progress-num");
            return num_el === null || num_el.textContent !== "100%";
          });
        }
      }
      for (let i = 0; i < videoItems.length; i++) {
        const item = videoItems[i];
        if (is_resource_box_mode) {
          if (item.classList.contains("activeNode")) {
            return videoItems[i + (opts.next ? 1 : 0)];
          }
        } else {
          if (item.classList.contains("current_play")) {
            return videoItems[i + (opts.next ? 1 : 0)];
          }
        }
      }
      return videoItems[0];
    }
  }
  class StudyPlusH5 extends StudyVideoH5 {
    getCourseName() {
      var _a, _b, _c;
      return ((_c = (_b = (_a = lib.$el(".top-back-box > span:nth-child(2)")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.match(/璇剧▼鍚嶇О锟?.+)/)) == null ? void 0 : _c[1]) || "鏃犲悕锟?;
    }
    getChapterName(item) {
      var _a;
      return ((_a = item.parentElement) == null ? void 0 : _a.textContent) || "鏈煡绔犺妭";
    }
    hasJob() {
      var _a;
      return ((_a = lib.$$el(".child-main")) == null ? void 0 : _a.length) > 0;
    }
    getNext(opts) {
      let videoItems = Array.from(document.querySelectorAll(".child-main")).filter(
        (el) => el.querySelector(".child-time")
      );
      console.log(videoItems);
      if (!opts.restudy) {
        videoItems = videoItems.filter((el) => {
          if (el.querySelector(".child-check")) {
            return false;
          }
          return true;
        });
      }
      for (let i = 0; i < videoItems.length; i++) {
        const item = videoItems[i];
        if (item.classList.contains("current")) {
          return videoItems[i + (opts.next ? 1 : 0)];
        }
      }
      return videoItems[0];
    }
    hideDialog() {
      lib.$$el(".el-overlay,.el-dialog").forEach((dialog) => {
        dialog.style.display = "none";
      });
    }
    async handleTestDialog(remotePage) {
      const question_box = lib.$el(".class-question-box");
      if (question_box) {
        const options = lib.$$el(".options option");
        if (options.length !== 0) {
          await waitForCaptcha();
          $render.moveToEdge();
          const random = Math.floor(Math.random() * options.length);
          await lib.$.sleep(1e3);
          if (remotePage) {
            await remotePage.click(options[random]);
          } else {
            options[random].click();
          }
          await lib.$.sleep(1e3);
        }
        await lib.$.sleep(1e3);
        const close_btn = lib.$el(".close_btn");
        if (close_btn) {
          if (remotePage) {
            await remotePage.click(close_btn);
          } else {
            close_btn.click();
          }
        }
        const submit_btn = lib.$el(".submit-btn");
        if (submit_btn) {
          if (remotePage) {
            await remotePage.click(submit_btn);
          } else {
            submit_btn.click();
          }
        }
      }
      await lib.$.sleep(3e3);
      await this.handleTestDialog(remotePage);
    }
  }
  class WishdomH5 extends StudyVideoH5 {
    getCourseName() {
      var _a, _b, _c;
      return ((_c = (_b = (_a = lib.$el(".course-name")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.match(/璇剧▼鍚嶇О锟?.+)/)) == null ? void 0 : _c[1]) || "鏃犲悕锟?;
    }
    getChapterName(item) {
      return item.textContent || "鏈煡绔犺妭";
    }
    hasJob() {
      var _a;
      return ((_a = lib.$$el(".chapter-content .chapter-content-second")) == null ? void 0 : _a.length) > 0;
    }
    getNext(opts) {
      let jobs = Array.from(
        document.querySelectorAll(".chapter-content .chapter-item .chapter-content-second")
      );
      console.log(jobs);
      if (!opts.restudy) {
        jobs = jobs.filter((el) => {
          if (el.querySelector(".finish-icon")) {
            return false;
          }
          return true;
        });
      }
      for (let i = 0; i < jobs.length; i++) {
        const item = jobs[i];
        if (item.classList.contains("current")) {
          return jobs[i + (opts.next ? 1 : 0)];
        }
      }
      return jobs[0];
    }
    hideDialog() {
      lib.$$el(".el-overlay,.el-dialog").forEach((dialog) => {
        dialog.style.display = "none";
      });
    }
    async handleTestDialog(remotePage) {
      const question_box = lib.$el(".ai-class-exercise-dialog");
      if (question_box) {
        const options = lib.$$el(".ques-list .item .option");
        lib.$message.info("姝ｅ湪鍏抽棴寮圭獥娴嬮獙...");
        if (options.length !== 0) {
          await waitForCaptcha();
          CommonProject.scripts.render.methods.minimize();
          CommonProject.scripts.render.methods.setPosition(100, 200);
          const random = Math.floor(Math.random() * options.length);
          await lib.$.sleep(1e3);
          if (remotePage) {
            await remotePage.click(options[random]);
          } else {
            options[random].click();
          }
          await lib.$.sleep(1e3);
        }
        await lib.$.sleep(1e3);
        const submit_btn = lib.$el(".ai-class-exercise-dialog .el-dialog__footer .el-button.btn");
        if (submit_btn) {
          if (remotePage) {
            await remotePage.hover(".ai-class-exercise-dialog .el-dialog__footer .el-button.btn");
            await remotePage.click(".ai-class-exercise-dialog .el-dialog__footer .el-button.btn");
          } else {
            submit_btn.click();
          }
        }
        const close_btn = lib.$el(".ai-class-exercise-dialog .header-icon");
        if (close_btn) {
          if (remotePage) {
            await remotePage.hover(".ai-class-exercise-dialog .header-icon");
            await remotePage.click(".ai-class-exercise-dialog .header-icon");
          } else {
            close_btn.click();
          }
        }
        lib.$message.info("寮圭獥娴嬮獙宸插叧锟?);
      }
      await lib.$.sleep(3e3);
      await this.handleTestDialog(remotePage);
    }
  }
  class Hike extends StudyVideoH5 {
    getCourseName() {
      return "鏃犲悕锟?;
    }
    getChapterName(item) {
      return item.textContent || "鏈煡绔犺妭";
    }
    hasJob() {
      var _a;
      return ((_a = document.querySelectorAll(".source-icon")) == null ? void 0 : _a.length) > 0;
    }
    getNext(opts) {
      let jobs = Array.from(document.querySelectorAll(".source-icon")).map(
        (el) => {
          var _a;
          return (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        }
      );
      console.log(jobs);
      if (!opts.restudy) {
        jobs = jobs.filter((el) => {
          if (el.querySelector("i.select")) {
            return false;
          }
          return true;
        });
      }
      for (let i = 0; i < jobs.length; i++) {
        const item = jobs[i];
        if (item.querySelector(".active-file")) {
          return jobs[i + (opts.next ? 1 : 0)];
        }
      }
      return jobs[0];
    }
    hideDialog() {
      lib.$$el(".el-overlay,.el-dialog").forEach((dialog) => {
        dialog.style.display = "none";
      });
    }
  }
  const ZHSProject = lib.Project.create({
    name: "鐭ュ埌鏅烘収锟?,
    domains: [
      "zhihuishu.com",
      "hike-teaching-center.polymas.com"
    ],
    scripts: {
      guide: new lib.Script({
        name: "馃挕 浣跨敤鎻愮ず",
        matches: [
          ["瀛︿範棣栭〉", "https://onlineweb.zhihuishu.com/onlinestuh5"],
          ["棣栭〉", "https://www.zhihuishu.com/"]
        ],
        namespace: "zhs.guide",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "璇锋墜鍔ㄨ繘鍏ヨ棰戙€佷綔涓氥€佽€冭瘯椤甸潰锛岃剼鏈細鑷姩杩愯锟?,
              "鍏磋叮璇句細鑷姩涓嬩竴涓紝鎵€浠ヤ笉鎻愪緵鑴氭湰锟?
            ]).outerHTML
          }
        },
        oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
        }
      }),
      "gxk-study": new lib.Script({
        name: "馃枼锟?鍏变韩锟?瀛︿範鑴氭湰",
        matches: [
          ["鍏变韩璇惧涔犻〉锟?, "studyvideoh5.zhihuishu.com"],
          ["鏂板叡浜瀛︿範椤甸潰", "studyplush5.zhihuishu.com"],
          ["鏂扮増AI璇鹃〉锟?, "fusioncourseh5.zhihuishu.com/stuStudy"]
        ],
        namespace: "zhs.gxk.study",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "绔犺妭娴嬭瘯璇峰ぇ瀹惰鐪嬪畬瑙嗛鍚庢墜鍔ㄦ墦寮€锟?,
              [
                "璇峰ぇ瀹朵粩缁嗘墦寮€瑙嗛涓婃柟鐨勨€濆鍓嶅繀璇烩€滐紝鏌ョ湅鎴愮哗鍒嗗竷锟?,
                "濡傛灉 鈥滃钩鏃舵垚锟?瀛︿範涔犳儻鎴愮哗锟?鍗犳瘮澶氱殑璇濓紝灏遍渶瑕佽寰嬪涔狅拷?,
                "姣忓ぉ瀹氭椂鍗婂皬鏃跺彲鑾峰緱涓€鍒嗕範鎯垎锟?,
                "濡傛灉涓嶆兂瑕佷範鎯垎鍙拷鐣ワ拷?
              ],
              "璇蜂娇鐢ㄦ椂鍏抽棴鍗″反鏂熀杞欢锛屽惁鍒欎細琚娴嬪嚭寮傚父鑴氭湰锟?,
              "涓嶈鏈€灏忓寲娴忚鍣紝鍙兘瀵艰嚧鑴氭湰鏆傚仠锟?,
              "杩愯涓灏嗘祻瑙堝櫒缂╂斁璋冩暣鑷抽€傚悎鐨勫ぇ灏忥紝閬垮厤鍏冪礌閬尅锛屾棤娉曠偣锟?,
              "渚嬪锛氳皟鏁寸缉鏀惧埌 50%锛岀劧鍚庡埛鏂伴〉闈㈠嵆锟?
            ]).outerHTML
          },
          studyRecord: {
            defaultValue: [],
            extra: {
              appConfigSync: false
            }
          },
          stopTime: {
            label: "瀹氭椂鍋滄",
            tag: "select",
            attrs: { title: "鍒版椂闂村悗鑷姩鏆傚仠鑴氭湰" },
            defaultValue: "0",
            options: [
              ["0", "鍏抽棴"],
              ["0.5", "鍗婂皬鏃跺悗"],
              ["1", "涓€灏忔椂锟?],
              ["2", "涓ゅ皬鏃跺悗"]
            ]
          },
          restudy,
          reloadWhenError: {
            label: "榛戝睆鑷姩鍒锋柊",
            attrs: { title: "瑙嗛榛戝睆鎴栬€呮娴嬩笉鍒拌棰戞椂鑷姩鍒锋柊椤甸潰", type: "checkbox" },
            defaultValue: true
          },
          volume,
          definition,
          playbackRate: {
            label: "瑙嗛鍊嶏拷?,
            tag: "select",
            attrs: { title: "鐩墠鏅烘収鏍戝€嶉€熸渶楂樺彧锟?.5x锛岃秴鍑烘湁灏佸彿椋庨櫓" },
            defaultValue: 1,
            options: [
              ["1", "1 x"],
              ["1.25", "1.25 x"],
              ["1.5", "1.5 x"]
            ]
          }
        },
        methods() {
          return {
            increaseStudyTime: (courseName, val) => {
              const records = this.cfg.studyRecord;
              const record = records.find(
                (r) => new Date(r.date).toLocaleDateString() === new Date().toLocaleDateString()
              );
              let courses = [];
              if (record) {
                courses = record.courses;
              } else {
                records.push({ date: Date.now(), courses });
              }
              const course = courses.find((c) => c.name === courseName);
              if (course) {
                course.time = course.time + val;
                if (typeof course.time === "string") {
                  course.time = parseFloat(course.time);
                }
              } else {
                courses.push({ name: courseName, time: 0 });
              }
              this.cfg.studyRecord = records;
            }
          };
        },
        onrender({ panel }) {
          panel.body.replaceChildren(
            lib.h("hr"),
            lib.$ui.button("鈴版娴嬫槸鍚﹂渶瑕佽寰嬪锟?, {}, (btn) => {
              btn.style.marginRight = "12px";
              btn.onclick = () => {
                var _a;
                const href = ((_a = document.querySelector("[href*=stuLearnReportNew]")) == null ? void 0 : _a.getAttribute("href")) || "";
                if (href) {
                  lib.$modal.alert({
                    title: "瑙勫緥瀛︿範妫€锟?,
                    content: `鑷姩妫€娴嬪姛鑳藉凡澶辨晥锟?a href="${href}"> -> 鐐瑰嚮姝ゅ <- </a> 鍓嶅線鎴愮哗鍒嗘瀽椤甸潰锛岀偣锟?<b>鈥滃涔犱範鎯拷?/b> 鍗冲彲鏌ョ湅涔犳儻鍒嗚鎯呫€俙
                  });
                } else {
                  lib.$modal.alert({
                    title: "鎻愮ず",
                    content: "鑷姩妫€娴嬪姛鑳藉凡澶辨晥锛岃鑷鍓嶅線鎴愮哗鍒嗘瀽椤甸潰锛岀偣鍑诲涔犱範鎯嵆鍙煡鐪嬩範鎯垎璇︽儏锟?
                  });
                }
              };
            }),
            lib.$ui.button("馃摌鏌ョ湅瀛︿範璁板綍", {}, (btn) => {
              btn.onclick = () => {
                lib.$modal.alert({
                  title: "瀛︿範璁板綍",
                  content: lib.$ui.notes(
                    this.cfg.studyRecord.map((r) => {
                      const date = new Date(r.date);
                      return [
                        `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`,
                        lib.$ui.notes(r.courses.map((course) => `${course.name} - ${optimizeSecond(course.time)}`))
                      ];
                    })
                  )
                });
              };
            })
          );
        },
        onactive() {
          this.cfg.stopTime = "0";
          if (this.cfg.playbackRate) {
            this.cfg.playbackRate = parseFloat(this.cfg.playbackRate.toString());
          }
        },
        async oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
          const type = location.href.includes("fusioncourseh5") ? "AI璇剧▼" : location.href.includes("studyplush5") ? "鏂板叡浜" : "鍏变韩锟?;
          const ProcessorConstructor = location.href.includes("fusioncourseh5") ? FusionCourseH5 : location.href.includes("studyplush5") ? StudyPlusH5 : StudyVideoH5;
          const processor = new ProcessorConstructor();
          setTimeout(() => {
            if (processor.hasJob() === false) {
              finishAlert();
            }
          }, 10 * 1e3);
          const waitForVideoJob = () => {
            return new Promise((resolve, reject) => {
              if (processor.hasJob()) {
                resolve();
              } else {
                setTimeout(() => {
                  resolve(waitForVideoJob());
                }, 1e3);
              }
            });
          };
          await waitForVideoJob();
          await processor.init();
          this.onConfigChange("stopTime", (stopTime) => {
            if (stopTime === "0") {
              lib.$message.info({ content: "瀹氭椂鍋滄宸插叧锟? });
            } else {
              autoStop(stopTime);
            }
          });
          this.onConfigChange("volume", (curr) => {
            state$4.study.currentMedia && (state$4.study.currentMedia.volume = curr);
          });
          this.onConfigChange("playbackRate", (curr) => {
            if (typeof curr === "string") {
              this.cfg.playbackRate = parseFloat(curr);
            }
            processor.switchPlaybackRate(curr);
          });
          this.onConfigChange("definition", (curr) => {
            processor.switchLine(curr);
          });
          const recordStudyTimeLoop = () => {
            this.methods.increaseStudyTime(processor.getCourseName(), this.cfg.playbackRate);
            setTimeout(recordStudyTimeLoop, 1e3);
          };
          closeDialogRead();
          recordStudyTimeLoop();
          autoStop(this.cfg.stopTime);
          processor.hideDialog();
          processor.handleTestDialog();
          setInterval(async () => {
            lib.$$el(".v-modal,.mask").forEach((modal2) => {
              modal2.remove();
            });
            fixProcessBar();
          }, 3e3);
          lib.$message.info({ content: "3绉掑悗寮€濮嬪锟?, duration: 3 });
          const remotePage = processor.remotePage;
          const study2 = async (opts) => {
            if (state$4.study.stop === false) {
              const item = processor.getNext({ next: opts.next, restudy: this.cfg.restudy });
              if (item) {
                const msg = "鍗冲皢瀛︿範锟? + processor.getChapterName(item);
                lib.$message.info({ content: msg });
                $console.log(msg);
                await lib.$.sleep(3e3);
                $render.moveToEdge();
                if (remotePage) {
                  if (type === "鏂板叡浜") {
                    await remotePage.click(".title-box");
                    await lib.$.sleep(200);
                  }
                  await remotePage.click(item);
                  await lib.$.sleep(1e3);
                  await remotePage.click(item);
                  await lib.$.sleep(1e3);
                } else {
                  item.click();
                }
                if (type === "AI璇剧▼" && document.querySelector(".preview-warp .doc-box,.preview-warp .ppt-box")) {
                  lib.$message.info({ content: "妫€娴嬪埌PPT璧勬簮锛屽嵆灏嗚烦锟?.." });
                  await lib.$.sleep(2e3);
                  study2({ next: true });
                  return;
                }
                watch(
                  processor,
                  {
                    reloadWhenError: this.cfg.reloadWhenError,
                    volume: this.cfg.volume,
                    playbackRate: this.cfg.playbackRate,
                    definition: this.cfg.definition
                  },
                  {
                    reload() {
                      if (type === "鍏变韩锟?) {
                        study2({ next: false });
                      } else {
                        location.reload();
                      }
                    },
                    onended({ next: next2 }) {
                      study2({ next: next2 });
                    }
                  }
                );
              } else {
                finishAlert();
              }
            } else {
              const msg = "妫€娴嬪埌褰撳墠瑙嗛鍏ㄩ儴鎾斁瀹屾瘯锛屽鏋滆繕鏈夋湭瀹屾垚鐨勮棰戣鍒锋柊閲嶈瘯锛屾垨鑰呮墦寮€澶嶄範妯″紡锟?;
              lib.$message.warn({ content: msg });
              CommonProject.scripts.settings.methods.notificationBySetting(msg, {
                duration: 0,
                extraTitle: "鐭ラ亾鏅烘収鏍戝涔犺剼锟?
              });
            }
          };
          study2({ next: false });
        }
      }),
      "gxk-work": new lib.Script({
        name: "鉁嶏笍 鍏变韩锟?浣滀笟鑰冭瘯鑴氭湰",
        matches: [
          ["鍏变韩璇句綔涓氶〉锟?, "zhihuishu.com/stuExamWeb.html#/webExamList/dohomework"],
          ["鍏变韩璇捐€冭瘯椤甸潰", "zhihuishu.com/stuExamWeb.html#/webExamList/doexamination"],
          ["浣滀笟鑰冭瘯鍒楄〃", "zhihuishu.com/stuExamWeb.html#/webExamList\\?"]
        ],
        namespace: "zhs.gxk.work",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鑷姩绛旈鍓嶈锟?鈥滈€氱敤-鍏ㄥ眬璁剧疆锟?涓缃搴撻厤缃拷?,
              "鍙互鎼厤 鈥滈€氱敤-鍦ㄧ嚎鎼滈锟?涓€璧蜂娇鐢拷?,
              ...gxk_read_notes
            ]).outerHTML
          },
          workDelay: {
            label: "浣滀笟绛旈寮€濮嬫椂闂村欢杩燂紙绉掞級",
            defaultValue: 3,
            attrs: { type: "number", min: 1, step: 1, max: 10 }
          },
          readNotes: {
            defaultValue: false
          }
        },
        methods() {
          async function getWorkInfo(remotePage) {
            const isExam2 = location.href.includes("doexamination");
            let url = "";
            if (isExam2) {
              url = "/taurusExam/gateway/t/v1/student/doExam";
            } else {
              url = "/studentExam/gateway/t/v1/student/doHomework";
            }
            return JSON.parse((await remotePage.waitForResponse(url)).body);
          }
          return {
            getWorkInfo,
            work: async () => {
              const remotePage = await BackgroundProject.scripts.dev.methods.getRemotePlaywrightCurrentPage();
              if (!remotePage) {
                return $playwright.showError();
              }
              const isExam2 = location.href.includes("doexamination");
              const isWork2 = location.href.includes("dohomework");
              if (isExam2 || isWork2) {
                const workInfo = await getWorkInfo(remotePage);
                $render.moveToEdge();
                CommonProject.scripts.render.methods.normal();
                CommonProject.scripts.render.methods.pin(this);
                if (this.cfg.readNotes === false) {
                  const notes = lib.$ui.notes(gxk_read_notes).outerHTML;
                  const start2 = await new Promise((resolve, reject) => {
                    lib.$modal.confirm({
                      title: isExam2 ? "鑴氭湰鑰冨墠椤荤煡" : "鑴氭湰浣滀笟椤荤煡",
                      content: notes,
                      confirmButtonText: "鎴戝凡鐭ユ檽锛屽紑濮嬭嚜鍔ㄧ瓟锟?,
                      cancelButtonText: "鍙栨秷绛旈",
                      maskCloseable: false,
                      onConfirm: () => {
                        this.cfg.readNotes = true;
                        resolve(true);
                      },
                      onCancel() {
                        resolve(false);
                      }
                    });
                  });
                  if (!start2) {
                    lib.$message.info({ content: "宸插彇娑堢瓟棰橈紝濡傞渶绛旈璇峰埛鏂伴〉闈㈤噸鏂板紑濮嬶拷? });
                    return;
                  }
                }
                setTimeout(() => {
                  var _a;
                  lib.$message.info({ content: `寮€锟?{isExam2 ? "鑰冭瘯" : "浣滀笟"}` });
                  commonWork(this, {
                    workerProvider: (opts) => gxkWorkAndExam(workInfo, opts),
                    start_delay_seconds: (_a = this.cfg.workDelay) != null ? _a : 3
                  });
                }, 1e3);
              } else {
                lib.$message.info({ content: "馃摙 璇锋墜鍔ㄨ繘鍏ヤ綔锟?鑰冭瘯锛屽鏋滄湭寮€濮嬬瓟棰橈紝璇峰皾璇曞埛鏂伴〉闈拷?, duration: 0 });
                CommonProject.scripts.render.methods.pin(this);
              }
            }
          };
        },
        async onactive() {
          this.methods.work();
          this.on("historychange", () => {
            this.methods.work();
          });
        }
      }),
      "smart-study": new lib.Script({
        name: "馃枼锟?鏅烘収璇剧▼-瀛︿範鑴氭湰",
        matches: [
          ["鏅烘収璇剧▼瀛︿範椤甸潰", "smartcoursestudent.zhihuishu.com/learnPage"],
          ["鏅烘収璇剧▼鏂板煙鍚嶅涔犻〉锟?, "ai-smart-course-student-pro.zhihuishu.com/learnPage"],
          ["鏅烘収璇剧▼棣栭〉", "smartcoursestudent.zhihuishu.com/singleCourse"],
          ["鏅烘収璇剧▼鏂板煙鍚嶈绋嬮锟?, "ai-smart-course-student-pro.zhihuishu.com/singleCourse"]
        ],
        namespace: "zhs.smart.study",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鎺屾彙搴﹀拰浣滀笟璇疯棰戠湅瀹屽悗鑷鎵嬪姩杩涘叆",
              "涓嶈鏈€灏忓寲娴忚锟?鍏抽棴鐢佃剳灞忓箷锛屽彲鑳藉鑷磋剼鏈殏鍋滐拷?,
              "浠绘剰閫夋嫨涓€涓珷鑺傦紝鑴氭湰浼氳嚜鍔ㄥ線涓嬪鈥滃繀瀛︹€濊绋嬶拷?,
              "杩愯涓灏嗘祻瑙堝櫒缂╂斁璋冩暣鑷抽€傚悎鐨勫ぇ灏忥紝閬垮厤鍏冪礌閬尅锛屾棤娉曠偣锟?,
              "渚嬪锛氳皟鏁寸缉鏀惧埌 50%锛岀劧鍚庡埛鏂伴〉闈㈠嵆锟?
            ]).outerHTML
          },
          switchMode: {
            label: "璺宠浆妯″紡",
            tag: "select",
            defaultValue: "job",
            options: [
              ["job", "鍙烦杞繀瀛︾珷锟?, "绔犺妭鍚庨潰鏈夊繀瀛︼紝骞朵笖蹇呭鏁伴噺鏈畬鎴愮殑绔犺妭锛屽鏋滃叏閮ㄥ畬鎴愬皢鍋滄瀛︿範"],
              ["all", "椤哄簭璺宠浆"]
            ]
          },
          restudy,
          volume,
          definition,
          playbackRate: {
            label: "瑙嗛鍊嶏拷?,
            tag: "select",
            defaultValue: 1,
            attrs: { title: "鐩墠鏅烘収鏍戝€嶉€熸渶楂樺彧锟?.5x锛岃秴鍑烘湁灏佸彿椋庨櫓" },
            options: [
              ["1", "1 x"],
              ["1.25", "1.25 x"],
              ["1.5", "1.5 x"]
            ]
          }
        },
        oncomplete() {
          this.methods.start();
        },
        onhistorychange(type, ...args) {
          if (type === "push") {
            this.methods.start();
          }
        },
        methods() {
          return {
            start: async () => {
              if (location.href.includes("singleCourse")) {
                lib.$message.info({ content: "璇风偣鍑讳换鎰忕珷鑺傚紑濮嬭繘琛岃嚜鍔ㄥ锟?, duration: 60 });
                return;
              }
              CommonProject.scripts.render.methods.pin(this);
              const processor = new StudyVideoH5();
              const getInfos = () => Array.from(document.querySelectorAll(".section-item-collapse-info"));
              const getChapterName = () => {
                var _a, _b;
                return (((_a = document.querySelector(".point-title-text")) == null ? void 0 : _a.textContent) || "鏈煡绔犺妭") + "-" + (((_b = document.querySelector(".resources-item .active .video-title")) == null ? void 0 : _b.textContent) || "鏈煡灏忚妭");
              };
              const include_jobs = ["video", "book", "other", "text"];
              const getNextJob = () => {
                const cards = Array.from(document.querySelectorAll(".resources-item"));
                if (cards.some((card) => card.querySelector(".active")) === false) {
                  return cards[0];
                }
                let target_el;
                let start2 = false;
                for (let index = 0; index < cards.length; index++) {
                  const card = cards[index];
                  if (start2) {
                    if (this.cfg.restudy) {
                      target_el = card;
                      break;
                    } else {
                      if (card.querySelector(".finished-icon")) {
                        continue;
                      }
                      target_el = card;
                      break;
                    }
                  }
                  if (card.querySelector(".active")) {
                    start2 = true;
                  }
                }
                return target_el;
              };
              const getNext = () => {
                var _a, _b;
                const infos = getInfos();
                const works = [];
                for (let index = 0; index < infos.length; index++) {
                  const info = infos[index];
                  const text = ((_a = info.querySelector(".collapse-info-progress .progress-text")) == null ? void 0 : _a.textContent) || "";
                  if (this.cfg.switchMode === "all") {
                    works.push({
                      info,
                      progress: 0,
                      total: 1
                    });
                  } else {
                    const [progress, total] = text.replace("蹇呭", "").trim().split("/").map((s) => parseInt(s));
                    if (progress < total) {
                      works.push({ progress, total, info });
                    }
                  }
                }
                let start2 = false;
                for (let index = 0; index < works.length; index++) {
                  const work2 = works[index];
                  if (start2) {
                    if (work2.progress < work2.total) {
                      return works[index].info;
                    }
                  }
                  if (work2.info.classList.contains("active")) {
                    if (this.cfg.switchMode === "all") {
                      return works[index + 1].info;
                    } else {
                      start2 = true;
                    }
                  }
                }
                return (_b = works[0]) == null ? void 0 : _b.info;
              };
              this.onConfigChange("volume", (curr) => {
                state$4.study.currentMedia && (state$4.study.currentMedia.volume = curr);
              });
              this.onConfigChange("playbackRate", (curr) => {
                if (typeof curr === "string") {
                  this.cfg.playbackRate = parseFloat(curr);
                }
                processor.switchPlaybackRate(curr);
              });
              this.onConfigChange("definition", (curr) => {
                processor.switchLine(curr);
              });
              const doWork = async () => {
                await lib.$.sleep(5 * 1e3);
                const next2 = async () => {
                  var _a;
                  const nextJob = getNextJob();
                  if (nextJob) {
                    const nextJobTitle = nextJob.querySelector(".common-text");
                    document.querySelectorAll(".resources-item .active").forEach((el) => el.classList.remove("active"));
                    if (include_jobs.some((job) => {
                      var _a2;
                      return (_a2 = nextJob.querySelector(".icon-box")) == null ? void 0 : _a2.classList.contains(job);
                    })) {
                      nextJobTitle.click();
                      await doWork();
                    } else {
                      const _open = lib.$gm.unsafeWindow.open;
                      lib.$gm.unsafeWindow.open = () => null;
                      nextJobTitle.click();
                      (_a = nextJob.querySelector(".basic-info-video-card-container")) == null ? void 0 : _a.classList.add("active");
                      const msg = "閾炬帴浠诲姟瀹屾垚锛屽嵆灏嗚嚜鍔ㄤ笅涓€鑺傦紒";
                      lib.$message.info(msg);
                      setTimeout(async () => {
                        lib.$gm.unsafeWindow.open = _open;
                        await next2();
                      }, 3e3);
                    }
                    return;
                  }
                  const nextEl = getNext();
                  if (nextEl) {
                    nextEl.click();
                  } else {
                    finishAlert();
                  }
                };
                try {
                  const wrapper = document.querySelector(".video-player-wrapper");
                  if (!wrapper || wrapper.style.display === "none") {
                    throw new Error("瑙嗛鍔犺浇澶辫触");
                  }
                  await waitForMedia({
                    timeout: 5 * 1e3,
                    filter: (m) => m.src.length !== 0
                  });
                } catch {
                  const msg = "鏈壘鍒板涔犺棰戯紝鍗冲皢鑷姩涓嬩竴鑺傦紒";
                  lib.$message.error(msg);
                  $console.error(msg);
                  await lib.$.sleep(3e3);
                  await next2();
                  return;
                }
                const set = async () => {
                  try {
                    await processor.switchLine(this.cfg.definition || "line1bq");
                    await lib.$.sleep(1e3);
                    await processor.switchPlaybackRate(this.cfg.playbackRate);
                    await lib.$.sleep(1e3);
                    const media = await waitForMedia({ timeout: 5 * 1e3, filter: (m) => m.src.length !== 0 });
                    await lib.$.sleep(1e3);
                    state$4.study.currentMedia = media;
                    if (media) {
                      media.currentTime = 1;
                      media.volume = this.cfg.volume;
                    }
                    return state$4.study.currentMedia;
                  } catch (e) {
                    $console.log("瑙嗛鍔犺浇澶辫触锛岃灏濊瘯鍒锋柊椤甸潰锛侊細" + e);
                    lib.$message.error({ content: "瑙嗛鍔犺浇澶辫触锛岃灏濊瘯鍒锋柊椤甸潰锛侊細" + e, duration: 0 });
                  }
                };
                const video = await set();
                if (!video) {
                  return;
                }
                playMedia(() => video == null ? void 0 : video.play()).then(() => {
                  const cn = getChapterName();
                  lib.$message.info({ content: "姝ｅ湪瀛︿範锟? + cn });
                  $console.log("姝ｅ湪瀛︿範锟? + cn);
                });
                video.onpause = async () => {
                  if (!(video == null ? void 0 : video.ended) && state$4.study.stop === false) {
                    await lib.$.sleep(1e3);
                    video == null ? void 0 : video.play();
                  }
                };
                video.onended = async () => {
                  lib.$message.info({ content: "鍗冲皢鑷姩璺宠浆涓嬩竴锟? });
                  await lib.$.sleep(3e3);
                  await next2();
                };
              };
              doWork();
            }
          };
        }
      }),
      "smart-work": new lib.Script({
        name: "鉁嶏笍 鏅烘収璇剧▼-浣滀笟/鎺屾彙搴﹁剼锟?,
        matches: [
          ["鏅烘収璇剧▼浣滀笟椤甸潰", "smartcourseexam.zhihuishu.com/ReviewExam"],
          ["鏅烘収璇剧▼-鎺屾彙鎻愬崌椤甸潰", "studentexamcomh5.zhihuishu.com/studentReviewTestOrExam"],
          ["鏅烘収璇剧▼-AI鍔╂暀鎺屾彙锟?, "fusioncourseh5.zhihuishu.com/exam"],
          ["鏅烘収璇剧▼-鏂癆I鍔╂暀鎺屾彙锟?, "studywisdomh5.zhihuishu.com/exam"]
        ],
        namespace: "zhs.smart.work",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鑷姩绛旈鍓嶈锟?鈥滈€氱敤-鍏ㄥ眬璁剧疆锟?涓缃搴撻厤缃拷?,
              "鍙互鎼厤 鈥滈€氱敤-鍦ㄧ嚎鎼滈锟?涓€璧蜂娇鐢拷?,
              "鈿狅笍 濡傛灉娌″紑濮嬬瓟棰橈紝璇峰皾璇曞埛鏂伴〉闈拷?,
              "鈿狅笍 绂佹涓€娆℃€ф墦寮€澶氫釜浣滀笟/鑰冭瘯椤甸潰锟?,
              ...remote_required_pages.some((domain2) => location.href.includes(domain2)) ? [] : ["鈿狅笍 绛旈涓鍕胯繘琛屼换浣曟搷浣滐紝濡傞渶鏆傚仠绛旈", "璇风瓑寰呭叏閮ㄩ鐩悳绱㈠畬鎴愬苟鎵ц鑷姩淇濆瓨鍔熻兘鍚庢墠鑳芥搷浣滐拷?]
            ]).outerHTML
          },
          workDelay: {
            label: "浣滀笟绛旈寮€濮嬫椂闂村欢杩燂紙绉掞級",
            defaultValue: 3,
            attrs: { type: "number", min: 1, step: 1, max: 10 }
          }
        },
        methods() {
          return {
            start: async () => {
              var _a;
              CommonProject.scripts.render.methods.pin(this);
              let remotePage;
              const remote_required = remote_required_pages.some((domain2) => location.href.includes(domain2));
              remote_required ? await waitForElement(".exam-item") : await waitForElement(".questionContent");
              if (remote_required)
                ;
              else {
                remotePage = await BackgroundProject.scripts.dev.methods.getRemotePlaywrightCurrentPage();
                if (!remotePage) {
                  return $playwright.showError();
                }
                $render.moveToEdge();
                lib.$message.warn({ content: "绛旈瀹屾瘯涔嬪墠璇峰嬁鎿嶄綔椤甸潰锟?, duration: 0 });
              }
              commonWork(this, {
                workerProvider: (opts) => {
                  if (remote_required) {
                    return fusioncourseWork(remotePage, opts);
                  } else {
                    return smartWork(remotePage, opts);
                  }
                },
                start_delay_seconds: (_a = this.cfg.workDelay) != null ? _a : 3
              });
            }
          };
        },
        oncomplete() {
          this.methods.start();
        },
        onhistorychange(type, ...args) {
          if (type === "push") {
            this.methods.start();
          }
        }
      }),
      "xnk-study": new lib.Script({
        name: "馃枼锟?鏍″唴璇撅紙缈昏浆璇撅級-瀛︿範鑴氭湰",
        matches: [["鏍″唴璇惧涔犻〉锟?, "zhihuishu.com/aidedteaching/sourceLearning"]],
        namespace: "zhs.xnk.study",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["绔犺妭娴嬭瘯璇峰ぇ瀹惰鐪嬪畬瑙嗛鍚庢墜鍔ㄦ墦寮€锟?, "姝よ绋嬩笉鑳戒娇鐢ㄥ€嶉€燂拷?]).outerHTML
          },
          restudy,
          volume
        },
        oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
          const finish = () => {
            lib.$modal.alert({
              content: "妫€娴嬪埌褰撳墠瑙嗛鍏ㄩ儴鎾斁瀹屾瘯锛屽鏋滆繕鏈夋湭瀹屾垚鐨勮棰戣鍒锋柊閲嶈瘯锛屾垨鑰呮墦寮€澶嶄範妯″紡锟?
            });
            CommonProject.scripts.settings.methods.notificationBySetting(
              "妫€娴嬪埌褰撳墠瑙嗛鍏ㄩ儴鎾斁瀹屾瘯锛屽鏋滆繕鏈夋湭瀹屾垚鐨勮棰戣鍒锋柊閲嶈瘯锛屾垨鑰呮墦寮€澶嶄範妯″紡锟?,
              { duration: 0, extraTitle: "鐭ラ亾鏅烘収鏍戝涔犺剼锟? }
            );
          };
          this.onConfigChange("volume", (curr) => {
            state$4.study.currentMedia && (state$4.study.currentMedia.volume = curr);
          });
          const nextElement = () => {
            const list = document.querySelectorAll(".file-item");
            let passActive = false;
            for (let index = 0; index < list.length; index++) {
              const item = list[index];
              const finish2 = !!item.querySelector(".icon-finish");
              const needsStudy = !finish2 || finish2 && this.cfg.restudy;
              if (item.classList.contains("active")) {
                if (needsStudy) {
                  return list[index + 1];
                } else {
                  passActive = true;
                }
              }
              if (passActive && needsStudy) {
                return item;
              }
            }
          };
          const interval = setInterval(async () => {
            var _a, _b;
            const next2 = nextElement();
            if (next2) {
              clearInterval(interval);
              if (document.querySelector("#mediaPlayer")) {
                (_a = document.querySelector(".file-item.active")) == null ? void 0 : _a.scrollIntoView();
                const name = ((_b = next2.querySelector("#sourceTit")) == null ? void 0 : _b.textContent) || "鏈煡瑙嗛";
                lib.$message.info("姝ｅ湪瀛︿範锟? + name);
                watchXnk({ volume: this.cfg.volume }, () => {
                  lib.$message.info("瑙嗛瀹屾垚鎾斁锛屾鍦ㄨ嚜鍔ㄨ烦杞笅涓€鑺傦紒");
                  setTimeout(() => {
                    const next22 = nextElement();
                    if (next22)
                      next22.click();
                  }, 3e3);
                });
              } else {
                setTimeout(() => {
                  const msg = "鏈壘鍒板涔犺棰戯紝鍗冲皢鑷姩涓嬩竴鑺傦紒";
                  lib.$message.warn(msg);
                  $console.warn(msg);
                  const next22 = nextElement();
                  if (next22)
                    next22.click();
                }, 3e3);
              }
            }
          }, 1e3);
          setTimeout(() => {
            if (!nextElement()) {
              finish();
              clearInterval(interval);
            }
          }, 10 * 1e3);
        }
      }),
      "xnk-work": new lib.Script({
        name: "鉁嶏笍 鏍″唴锟?浣滀笟鑰冭瘯鑴氭湰",
        matches: [
          ["鏍″唴璇句綔涓氶〉锟?, "zhihuishu.com/atHomeworkExam/stu/homeworkQ/exerciseList"],
          ["鏍″唴璇捐€冭瘯椤甸潰", "zhihuishu.com/atHomeworkExam/stu/examQ/examexercise"]
        ],
        namespace: "zhs.xnk.work",
        configs: { notes: workNotes },
        async oncomplete() {
          commonWork(this, {
            workerProvider: xnkWork
          });
        }
      }),
      "wisdom-study": new lib.Script({
        name: "馃枼锟?鏂版櫤鎱у锟?瀛︿範鑴氭湰",
        matches: [
          ["2025-9鏈堟柊鏅烘収瀛︿範椤甸潰", "studywisdomh5.zhihuishu.com/study/index"],
          ["2025-12鏈堟柊鏅烘収瀛︿範椤甸潰", "wisdom-mooc.zhihuishu.com/study/index"]
        ],
        namespace: "zhs.wisdom.study",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鎺屾彙搴﹀拰浣滀笟璇疯棰戠湅瀹屽悗鑷鎵嬪姩杩涘叆",
              "涓嶈鏈€灏忓寲娴忚锟?鍏抽棴鐢佃剳灞忓箷锛屽彲鑳藉鑷磋剼鏈殏鍋滐拷?,
              "璇蜂娇鐢ㄦ椂鍏抽棴鍗″反鏂熀杞欢锛屽惁鍒欎細琚娴嬪嚭寮傚父鑴氭湰锟?,
              "杩愯涓灏嗘祻瑙堝櫒缂╂斁璋冩暣鑷抽€傚悎鐨勫ぇ灏忥紝閬垮厤鍏冪礌閬尅锛屾棤娉曠偣锟?,
              "渚嬪锛氳皟鏁寸缉鏀惧埌 50%锛岀劧鍚庡埛鏂伴〉闈㈠嵆锟?
            ]).outerHTML
          },
          restudy,
          skipStudyTimeWarnDialog: {
            label: "蹇界暐涔犳儻鍒嗗脊锟?,
            attrs: {
              title: "濡傛灉璇剧▼鏈変範鎯垎闇€瑕佽嚜琛屾帶鍒跺涔犳椂闀匡紝濡傛灉蹇界暐涔犳儻鍒嗘彁绀猴紝鍒欏彲鑳芥病鏈変範鎯垎锟?,
              type: "checkbox"
            },
            defaultValue: false
          },
          reloadWhenError: {
            label: "瑙嗛榛戝睆鏃惰嚜鍔ㄥ埛锟?,
            attrs: { type: "checkbox", title: "褰撹棰戝嚭鐜板姞杞藉け璐ワ紝鎴栬€呴粦灞忕瓑寮傚父鏃讹紝鑷姩鍒锋柊椤甸潰3娆″皾璇曚慨锟? },
            defaultValue: true
          },
          volume,
          definition,
          playbackRate: {
            label: "瑙嗛鍊嶏拷?,
            tag: "select",
            defaultValue: 1,
            attrs: { title: "鐩墠鏅烘収鏍戝€嶉€熸渶楂樺彧锟?.5x锛岃秴鍑烘湁灏佸彿椋庨櫓" },
            options: [
              ["1", "1 x"],
              ["1.25", "1.25 x"],
              ["1.5", "1.5 x"]
            ]
          }
        },
        async oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
          const processor = new WishdomH5();
          this.onConfigChange("volume", (curr) => {
            state$4.study.currentMedia && (state$4.study.currentMedia.volume = curr);
          });
          this.onConfigChange("playbackRate", async (curr) => {
            if (typeof curr === "string") {
              this.cfg.playbackRate = parseFloat(curr);
            }
            fixProcessBar2();
            processor.switchPlaybackRate(curr);
          });
          this.onConfigChange("definition", async (curr) => {
            fixProcessBar2();
            processor.switchLine(curr);
          });
          const next2 = async () => {
            var _a;
            const hidden = lib.$el(".chapter-wrapper.hidden");
            if (hidden) {
              if (processor.remotePage) {
                await processor.remotePage.click(".collapse-box");
              } else {
                hidden.click();
              }
            }
            const nextJob = processor.getNext({ next: true, restudy: this.cfg.restudy });
            if (nextJob) {
              if (!this.cfg.skipStudyTimeWarnDialog && hasStudyTimeWarnDialog()) {
                lib.$message.warn({
                  content: "妫€娴嬪埌涔犳儻鍒嗗脊绐楋紝褰撳ぉ瀛︿範鏃堕棿宸叉弧锛屽闇€缁х画瀛︿範锛岃鎵嬪姩鍏抽棴鍚庯紝鍒锋柊椤甸潰閲嶆柊杩愯鑴氭湰锛侊紙濡傛兂寮哄埗瀛︿範璇峰墠寰€鑴氭湰璁剧疆蹇界暐寮圭獥锟?,
                  duration: 0
                });
                return;
              } else {
                await closeStudyTimeWarnDialog();
              }
              await waitForMasteryLevelDialogClose();
              await ((_a = processor.remotePage) == null ? void 0 : _a.click(nextJob));
              nextJob.scrollIntoView({ behavior: "smooth", block: "center" });
              doWork();
            } else {
              finishAlert();
            }
          };
          const closeMasteryLevelDialog = () => {
            return new Promise((resolve, reject) => {
              const check = () => {
                var _a;
                if (document.querySelector(".masterylevel-body")) {
                  (_a = processor.remotePage) == null ? void 0 : _a.click(".header-box .close-box");
                  lib.$message.info("鎺屾彙搴﹂〉闈㈠凡鍏抽棴锛屽嵆灏嗙户缁涔狅紒");
                }
                setTimeout(check, 3e3);
              };
              check();
            });
          };
          const hasStudyTimeWarnDialog = () => {
            return !!Array.from(document.querySelectorAll(".el-overlay .content")).find(
              (el) => {
                var _a;
                return (_a = el.textContent) == null ? void 0 : _a.includes("淇濇寔鑹ソ鐨勫涔犱範锟?);
              }
            );
          };
          const closeStudyTimeWarnDialog = () => {
            return new Promise((resolve, reject) => {
              const interval = setInterval(() => {
                var _a;
                const dialog = Array.from(document.querySelectorAll(".el-overlay")).find(
                  (el) => {
                    var _a2;
                    return (_a2 = el.textContent) == null ? void 0 : _a2.includes("淇濇寔鑹ソ鐨勫涔犱範锟?);
                  }
                );
                if (dialog) {
                  const btn = dialog.querySelector(".el-dialog__header img");
                  if (btn)
                    (_a = processor.remotePage) == null ? void 0 : _a.click(btn);
                  clearInterval(interval);
                  resolve();
                }
              }, 1e3);
              setTimeout(() => {
                clearInterval(interval);
                resolve();
              }, 3 * 1e3);
            });
          };
          const waitForMasteryLevelDialogClose = async () => {
            return new Promise((resolve, reject) => {
              const check = () => {
                if (!document.querySelector(".masterylevel-body")) {
                  resolve();
                } else {
                  setTimeout(check, 200);
                }
              };
              check();
            });
          };
          const waitForLoad2 = () => {
            return new Promise((resolve, reject) => {
              const check = () => {
                if (document.querySelector(".main-container")) {
                  resolve();
                } else {
                  setTimeout(check, 1e3);
                }
              };
              check();
            });
          };
          const fixProcessBar2 = () => {
            const bar = document.querySelector(".controlsBar");
            if (bar) {
              bar.style.cssText = "z-index: 2; overflow: inherit; display: block;";
            }
          };
          await waitForLoad2();
          await lib.$.sleep(3e3);
          closeMasteryLevelDialog();
          processor.hideDialog();
          await processor.init();
          processor.handleTestDialog(processor.remotePage);
          setInterval(() => {
            fixProcessBar2();
          }, 1e3);
          lib.$message.success({ content: "鍗冲皢寮€濮嬭嚜鍔ㄥ涔狅紒" });
          const reload = async (e) => {
            $console.error(e);
            if (this.cfg.reloadWhenError) {
              const msg = "瑙嗛鍔犺浇澶辫触锛屽嵆灏嗗埛鏂伴〉闈拷?;
              const reload_count = await lib.$store.getTab("reload-count");
              if (reload_count && reload_count > 3) {
                const msg2 = "瑙嗛鍔犺浇澶辫触/榛戝睆瀵艰嚧閲嶆柊鍔犺浇椤甸潰娆℃暟瓒呰繃3娆★紝璇峰皾璇曞叧闂〉闈㈤噸鏂版墦寮€锛屾垨鑰呮鏌ョ綉缁滆繛鎺ワ紒";
                await lib.$store.setTab("reload-count", 0);
                lib.$message.error({ content: msg2, duration: 0 });
                $console.log(msg2);
                CommonProject.scripts.settings.methods.notificationBySetting(msg2, {
                  duration: 0,
                  extraTitle: "鐭ラ亾鏅烘収鏍戝涔犺剼锟?
                });
                return;
              }
              await lib.$store.setTab("reload-count", (reload_count != null ? reload_count : 0) + 1);
              lib.$message.error(msg);
              $console.log(msg);
              setTimeout(() => {
                location.reload();
              }, 3e3);
            } else {
              const msg = "瑙嗛鍔犺浇澶辫触锛屽嵆灏嗚烦杩囷拷?;
              lib.$message.error(msg);
              $console.log(msg);
              next2();
            }
          };
          const doWork = async () => {
            await waitForCaptcha();
            const set = async () => {
              try {
                await processor.switchLine(this.cfg.definition || "line1bq");
                await lib.$.sleep(1e3);
                await processor.switchPlaybackRate(this.cfg.playbackRate);
                await lib.$.sleep(1e3);
                const media = await waitForMedia({ timeout: 5 * 1e3, filter: (m) => m.src.length !== 0 });
                await lib.$.sleep(1e3);
                state$4.study.currentMedia = media;
                if (media) {
                  media.currentTime = 1;
                  media.volume = this.cfg.volume;
                }
                return state$4.study.currentMedia;
              } catch (e) {
                reload(e);
              }
            };
            lib.$message.info("寮€濮嬫挱锟?);
            try {
              const media = await waitForMedia({
                timeout: 10 * 1e3,
                filter: (m) => m.src.length !== 0
              });
              media.pause();
              fixProcessBar2();
            } catch (e) {
              reload(e);
              return;
            }
            await waitForCaptcha();
            const video = await set();
            if (!video) {
              return;
            }
            const videoCheckInterval = setInterval(async () => {
              if (!(video == null ? void 0 : video.isConnected)) {
                clearInterval(videoCheckInterval);
                lib.$message.info({ content: "妫€娴嬪埌瑙嗛鍒囨崲锟?.." });
                doWork();
              }
            }, 3e3);
            playMedia(() => video == null ? void 0 : video.play()).then(() => {
              const current = document.querySelector(".chapter-content-second.current");
              const cn = current ? processor.getChapterName(current) : "鏈煡绔犺妭";
              lib.$message.info({ content: "姝ｅ湪瀛︿範锟? + cn });
              $console.log("姝ｅ湪瀛︿範锟? + cn);
            });
            video.onpause = async () => {
              if (!(video == null ? void 0 : video.isConnected))
                return;
              if (!(video == null ? void 0 : video.ended) && state$4.study.stop === false) {
                await lib.$.sleep(1e3);
                video == null ? void 0 : video.play();
              }
            };
            video.onended = async () => {
              if (!(video == null ? void 0 : video.isConnected))
                return;
              lib.$message.info("鍗冲皢鑷姩璺宠浆涓嬩竴锟?);
              $console.info("鍗冲皢鑷姩璺宠浆涓嬩竴锟?);
              clearInterval(videoCheckInterval);
              await lib.$.sleep(3e3);
              await next2();
            };
          };
          doWork();
        }
      }),
      hike: new lib.Script({
        name: "馃枼锟?鏁欏绌洪棿-AI鏅烘収璇剧▼-瀛︿範鑴氭湰",
        matches: [
          ["瀛︿範棣栭〉", "hike-teaching-center.polymas.com/stu-hike/agent-course-hike/ai-course-center"],
          ["瀛︿範椤甸潰", "tools-hike/studentStudyResource"]
        ],
        namespace: "zhs.hike.study",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["璇锋墜鍔ㄨ繘鍏ヨ棰戙€佷綔涓氥€佽€冭瘯椤甸潰锛岃剼鏈細鑷姩杩愯锟?]).outerHTML
          },
          restudy,
          reloadWhenError: {
            label: "瑙嗛榛戝睆鏃惰嚜鍔ㄥ埛锟?,
            attrs: { type: "checkbox", title: "褰撹棰戝嚭鐜板姞杞藉け璐ワ紝鎴栬€呴粦灞忕瓑寮傚父鏃讹紝鑷姩鍒锋柊椤甸潰3娆″皾璇曚慨锟? },
            defaultValue: true
          },
          volume,
          definition,
          playbackRate: {
            label: "瑙嗛鍊嶏拷?,
            tag: "select",
            defaultValue: 1,
            attrs: { title: "鐩墠鏅烘収鏍戝€嶉€熸渶楂樺彧锟?.5x锛岃秴鍑烘湁灏佸彿椋庨櫓" },
            options: [
              ["1", "1 x"],
              ["1.25", "1.25 x"],
              ["1.5", "1.5 x"]
            ]
          }
        },
        async oncomplete(...args) {
          CommonProject.scripts.render.methods.pin(this);
          if (location.href.includes("stu-hike/agent-course-hike/ai-course-center")) {
            lib.$message.info({ content: "璇锋墜鍔ㄨ繘鍏ヨ棰戙€佷綔涓氥€佽€冭瘯椤甸潰锛岃剼鏈細鑷姩杩愯锟?, duration: 60 });
            return;
          }
          const processor = new Hike();
          this.onConfigChange("volume", (curr) => {
            state$4.study.currentMedia && (state$4.study.currentMedia.volume = curr);
          });
          this.onConfigChange("playbackRate", async (curr) => {
            if (typeof curr === "string") {
              this.cfg.playbackRate = parseFloat(curr);
            }
            fixProcessBar();
            processor.switchPlaybackRate(curr);
          });
          this.onConfigChange("definition", async (curr) => {
            fixProcessBar();
            processor.switchLine(curr);
          });
          const getChapterName = () => {
            var _a, _b;
            return ((_b = (_a = document.querySelector(".active-file")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.trim()) || "鏈煡绔犺妭";
          };
          const next2 = async () => {
            const nextJob = processor.getNext({ next: true, restudy: this.cfg.restudy });
            if (nextJob) {
              nextJob.click();
              await lib.$.sleep(3e3);
              doWork();
            } else {
              finishAlert();
            }
          };
          const waitForLoad2 = () => {
            return new Promise((resolve, reject) => {
              const check = () => {
                if (processor.hasJob()) {
                  resolve();
                } else {
                  setTimeout(check, 1e3);
                }
              };
              check();
            });
          };
          await waitForLoad2();
          await lib.$.sleep(3e3);
          setInterval(() => {
            fixProcessBar();
          }, 1e3);
          lib.$message.success({ content: "鍗冲皢寮€濮嬭嚜鍔ㄥ涔狅紒" });
          const reload = async (e) => {
            $console.error(e);
            if (this.cfg.reloadWhenError) {
              const msg = "瑙嗛鍔犺浇澶辫触锛屽嵆灏嗗埛鏂伴〉闈拷?;
              const reload_count = await lib.$store.getTab("reload-count");
              if (reload_count && reload_count > 3) {
                const msg2 = "瑙嗛鍔犺浇澶辫触/榛戝睆瀵艰嚧閲嶆柊鍔犺浇椤甸潰娆℃暟瓒呰繃3娆★紝璇峰皾璇曞叧闂〉闈㈤噸鏂版墦寮€锛屾垨鑰呮鏌ョ綉缁滆繛鎺ワ紒";
                await lib.$store.setTab("reload-count", 0);
                lib.$message.error({ content: msg2, duration: 0 });
                $console.log(msg2);
                CommonProject.scripts.settings.methods.notificationBySetting(msg2, {
                  duration: 0,
                  extraTitle: "鐭ラ亾鏅烘収鏍戝涔犺剼锟?
                });
                return;
              }
              await lib.$store.setTab("reload-count", (reload_count != null ? reload_count : 0) + 1);
              lib.$message.error(msg);
              $console.log(msg);
              setTimeout(() => {
                location.reload();
              }, 3e3);
            } else {
              const msg = "瑙嗛鍔犺浇澶辫触锛屽嵆灏嗚烦杩囷拷?;
              lib.$message.error(msg);
              $console.log(msg);
              next2();
            }
          };
          const doWork = async () => {
            var _a, _b, _c;
            await waitForCaptcha();
            if (!((_c = (_b = (_a = document.querySelector(".active-file")) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.querySelector(".icon-movie"))) {
              lib.$message.warn("褰撳墠绔犺妭涓嶆敮鎸佸涔狅紝鍗冲皢璺宠浆涓嬩竴锟?);
              await lib.$.sleep(3e3);
              await next2();
              return;
            }
            const set = async () => {
              try {
                await processor.switchLine(this.cfg.definition || "line1bq");
                await lib.$.sleep(1e3);
                await processor.switchPlaybackRate(this.cfg.playbackRate);
                await lib.$.sleep(1e3);
                const media = await waitForMedia({ timeout: 5 * 1e3, filter: (m) => m.src.length !== 0 });
                await lib.$.sleep(1e3);
                state$4.study.currentMedia = media;
                if (media) {
                  media.currentTime = 1;
                  media.volume = this.cfg.volume;
                }
                return state$4.study.currentMedia;
              } catch (e) {
                reload(e);
              }
            };
            lib.$message.info("寮€濮嬫挱锟?);
            try {
              const media = await waitForMedia({
                timeout: 10 * 1e3,
                filter: (m) => m.src.length !== 0
              });
              media.pause();
              fixProcessBar();
            } catch (e) {
              reload(e);
              return;
            }
            await waitForCaptcha();
            const video = await set();
            if (!video) {
              return;
            }
            const videoCheckInterval = setInterval(async () => {
              if (!(video == null ? void 0 : video.isConnected)) {
                clearInterval(videoCheckInterval);
                lib.$message.info({ content: "妫€娴嬪埌瑙嗛鍒囨崲锟?.." });
                doWork();
              }
            }, 3e3);
            playMedia(() => video == null ? void 0 : video.play()).then(() => {
              const cn = getChapterName();
              lib.$message.info({ content: "姝ｅ湪瀛︿範锟? + cn });
              $console.log("姝ｅ湪瀛︿範锟? + cn);
            });
            video.onpause = async () => {
              if (!(video == null ? void 0 : video.isConnected))
                return;
              if (!(video == null ? void 0 : video.ended) && state$4.study.stop === false) {
                await lib.$.sleep(1e3);
                video == null ? void 0 : video.play();
              }
            };
            video.onended = async () => {
              if (!(video == null ? void 0 : video.isConnected))
                return;
              lib.$message.info("鍗冲皢鑷姩璺宠浆涓嬩竴锟?);
              $console.info("鍗冲皢鑷姩璺宠浆涓嬩竴锟?);
              clearInterval(videoCheckInterval);
              await lib.$.sleep(3e3);
              await next2();
            };
          };
          doWork();
        }
      }),
      "hike-work": new lib.Script({
        matches: [["AI鏁欏涓績-浣滀笟浠诲姟椤甸潰", "/stu-hike/stuHomeworkDo"]],
        name: "鉁嶏笍 鏁欏绌洪棿-AI鏅烘収璇剧▼-浣滀笟鑰冭瘯鑴氭湰",
        namespace: "zhs.hike.work",
        configs: {
          notes: workNotes,
          workDelay: {
            label: "浣滀笟绛旈寮€濮嬫椂闂村欢杩燂紙绉掞級",
            defaultValue: 3,
            attrs: { type: "number", min: 1, step: 1, max: 10 }
          }
        },
        async oncomplete() {
          var _a;
          CommonProject.scripts.render.methods.pin(this);
          await waitForElement(".q_main");
          commonWork(this, {
            workerProvider: (opts) => {
              return hikeWork(void 0, opts);
            },
            start_delay_seconds: (_a = this.cfg.workDelay) != null ? _a : 3
          });
        }
      })
    }
  });
  async function watch(processor, options, actions) {
    const reload = async (e) => {
      $console.error(e);
      if (options.reloadWhenError) {
        const msg = "瑙嗛鍔犺浇澶辫触锛屽嵆灏嗗埛鏂伴〉闈拷?;
        const reload_count = await lib.$store.getTab("reload-count");
        if (reload_count && reload_count > 3) {
          const msg2 = "瑙嗛鍔犺浇澶辫触瀵艰嚧閲嶆柊鍔犺浇椤甸潰娆℃暟瓒呰繃3娆★紝璇峰皾璇曞叧闂〉闈㈤噸鏂版墦寮€锛屾垨鑰呮鏌ョ綉缁滆繛鎺ワ紒";
          await lib.$store.setTab("reload-count", 0);
          lib.$message.error({ content: msg2, duration: 0 });
          $console.log(msg2);
          CommonProject.scripts.settings.methods.notificationBySetting(msg2, {
            duration: 0,
            extraTitle: "鐭ラ亾鏅烘収鏍戝涔犺剼锟?
          });
          return;
        }
        await lib.$store.setTab("reload-count", (reload_count != null ? reload_count : 0) + 1);
        lib.$message.error(msg);
        $console.log(msg);
        setTimeout(() => {
          actions.reload();
        }, 5e3);
      } else {
        const msg = "瑙嗛鍔犺浇澶辫触锛屽嵆灏嗚烦杩囷拷?;
        lib.$message.error(msg);
        $console.log(msg);
        actions.onended({ next: true });
      }
    };
    const set = async () => {
      try {
        await lib.$.sleep(1e3);
        await processor.switchLine(options.definition || "line1bq");
        await lib.$.sleep(1e3);
        await processor.switchPlaybackRate(options.playbackRate);
        await lib.$.sleep(1e3);
        const media = await waitForMedia({ timeout: 10 * 1e3 });
        await lib.$.sleep(1e3);
        state$4.study.currentMedia = media;
        if (media) {
          media.currentTime = 1;
          media.volume = options.volume;
        }
        return state$4.study.currentMedia;
      } catch (e) {
        return await reload(e);
      }
    };
    lib.$message.info("寮€濮嬫挱锟?);
    try {
      const media = await waitForMedia({ timeout: 10 * 1e3 });
      media.volume = options.volume;
      media.pause();
      fixProcessBar();
    } catch (e) {
      return await reload(e);
    }
    await lib.$.sleep(1e3);
    const video = await set();
    if (!video) {
      return await reload("瑙嗛鍔犺浇澶辫触");
    }
    const videoCheckInterval = setInterval(async () => {
      if ((video == null ? void 0 : video.isConnected) === false) {
        clearInterval(videoCheckInterval);
        lib.$message.info({ content: "妫€娴嬪埌瑙嗛鍒囨崲锟?.." });
        actions.onended({ next: false });
      }
    }, 3e3);
    playMedia(() => video == null ? void 0 : video.play());
    video.onpause = async () => {
      if (!(video == null ? void 0 : video.ended) && state$4.study.stop === false) {
        await waitForCaptcha();
        await lib.$.sleep(1e3);
        video == null ? void 0 : video.play();
      }
    };
    video.onended = () => {
      clearInterval(videoCheckInterval);
      actions.onended({ next: true });
    };
  }
  async function watchXnk(options, onended) {
    const media = await waitForMedia();
    media.volume = options.volume;
    media.currentTime = 1;
    state$4.study.currentMedia = media;
    playMedia(() => media == null ? void 0 : media.play());
    media.onpause = async () => {
      if (!(media == null ? void 0 : media.ended)) {
        await lib.$.sleep(1e3);
        media == null ? void 0 : media.play();
      }
    };
    media.onended = () => {
      onended();
    };
  }
  function checkForCaptcha(update) {
    let modal2;
    let notified = false;
    return setInterval(() => {
      if (lib.$el(".yidun_popup")) {
        update(true);
        if (modal2 === void 0) {
          modal2 = lib.$modal.alert({ content: "褰撳墠妫€娴嬪埌楠岃瘉鐮侊紝璇疯緭鍏ュ悗鏂瑰彲缁х画杩愯锟? });
        }
        if (!notified) {
          notified = true;
          CommonProject.scripts.settings.methods.notificationBySetting(
            "鏅烘収鏍戣剼鏈細褰撳墠妫€娴嬪埌楠岃瘉鐮侊紝璇疯緭鍏ュ悗鏂瑰彲缁х画杩愯锟?,
            { duration: 0 }
          );
        }
      } else {
        if (modal2) {
          update(false);
          modal2.remove();
          modal2 = void 0;
        }
      }
    }, 1e3);
  }
  function waitForCaptcha() {
    const popup = getPopupCaptcha();
    if (popup) {
      const message2 = lib.$message.warn({ content: "褰撳墠妫€娴嬪埌楠岃瘉鐮侊紝璇疯緭鍏ュ悗鏂瑰彲缁х画杩愯锟?, duration: 0 });
      CommonProject.scripts.settings.methods.notificationBySetting(
        "鏅烘収鏍戣剼鏈細褰撳墠妫€娴嬪埌楠岃瘉鐮侊紝璇疯緭鍏ュ悗鏂瑰彲缁х画杩愯锟?,
        { duration: 0 }
      );
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          const popup2 = getPopupCaptcha();
          if (popup2 === null) {
            message2 == null ? void 0 : message2.remove();
            clearInterval(interval);
            resolve();
          }
        }, 1e3);
      });
    }
  }
  function getPopupCaptcha() {
    return document.querySelector(".yidun_popup");
  }
  function gxkWorkAndExam(workInfo, {
    answererWrappers,
    period,
    thread,
    stopSecondWhenFinish,
    redundanceWordsText,
    answerSeparators,
    answerMatchMode
  }) {
    var _a, _b, _c;
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "zhs-gxk"
    });
    const allExamParts = ((_c = ((_b = (_a = workInfo == null ? void 0 : workInfo.rt) == null ? void 0 : _a.examBase) == null ? void 0 : _b.workExamParts) || []) == null ? void 0 : _c.map((p) => p.questionDtos).flat()) || [];
    const titleTransform = (_, index) => {
      var _a2;
      const div = lib.h("div");
      div.innerHTML = ((_a2 = allExamParts[index]) == null ? void 0 : _a2.name) || "棰樼洰璇诲彇澶辫触";
      return removeRedundantWords(
        optimizationElementWithImage(div, true).innerText || "",
        redundanceWordsText.split("\n")
      );
    };
    let request_index = 0;
    const worker = new OCSWorker({
      root: ".examPaper_subject",
      elements: {
        title: ".subject_describe > div,.smallStem_describe > div:nth-child(2)",
        options: (root2) => lib.$$el(".subject_node .nodeLab", root2).map((t2) => {
          for (const img of Array.from(t2.querySelectorAll(".node_detail img"))) {
            if (img.dataset.src) {
              img.src = img.dataset.src;
            }
            createUnVisibleTextOfImage(img);
          }
          return t2;
        })
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(void 0, request_index++);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: {
        type(ctx) {
          var _a2, _b2, _c2, _d;
          const type = (_d = (_c2 = (_b2 = (_a2 = ctx.elements.title[0].parentElement) == null ? void 0 : _a2.parentElement) == null ? void 0 : _b2.querySelector(".subject_type")) == null ? void 0 : _c2.textContent) == null ? void 0 : _d.trim();
          if (type == null ? void 0 : type.includes("鍗曢€夐")) {
            return "single";
          } else if (type == null ? void 0 : type.includes("澶氶€夐")) {
            return "multiple";
          } else if (type == null ? void 0 : type.includes("鍒ゆ柇锟?)) {
            return "judgement";
          } else if (type == null ? void 0 : type.includes("濉┖锟?)) {
            return "completion";
          } else {
            return void 0;
          }
        },
        async handler(type, answer, option) {
          var _a2;
          if (type === "judgement" || type === "single" || type === "multiple") {
            if (!((_a2 = option.querySelector("input")) == null ? void 0 : _a2.checked)) {
              option.click();
              await lib.$.sleep(200);
            }
          } else if (type === "completion" && answer.trim()) {
            const text = option.querySelector("textarea");
            if (text) {
              text.value = answer;
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(curr, index, res) {
        var _a2, _b2;
        CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        if ((_a2 = curr.result) == null ? void 0 : _a2.finish) {
          const title = (_b2 = allExamParts[index]) == null ? void 0 : _b2.name;
          if (title) {
            CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
              simplifyWorkResult([curr], (_, __) => title)
            );
          }
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    checkForCaptcha((hasCaptcha) => {
      if (hasCaptcha) {
        worker.emit("stop");
      } else {
        worker.emit("continuate");
      }
    });
    worker.doWork().then(async (res) => {
      var _a2;
      if (worker.isClose === true) {
        return;
      }
      lib.$message.success({ content: `绛旈瀹屾垚锛屽皢绛夊緟 ${stopSecondWhenFinish} 绉掑悗杩涜淇濆瓨鎴栨彁浜ゃ€俙 });
      await lib.$.sleep(stopSecondWhenFinish * 1e3);
      if (worker.isClose === true) {
        return;
      }
      for (let index = 0; index < worker.totalQuestionCount; index++) {
        if (worker.isClose === true) {
          return;
        }
        const modal2 = lib.$modal.alert({
          title: "鈿狅笍鎻愮ず",
          content: `姝ｅ湪鑷姩淇濆瓨棰樼洰涓紝涓嶇劧濉啓鐨勭瓟妗堝皢鏃犳晥锟?br>褰撳墠杩涘害 ${index}/${worker.totalQuestionCount}<br>淇濆瓨瀹屾瘯鍓嶈鍕挎搷锟?..`,
          confirmButton: null,
          maskCloseable: false
        });
        await waitForCaptcha();
        await lib.$.sleep(2e3);
        (_a2 = document.querySelectorAll(".answerCard_list ul li").item(index)) == null ? void 0 : _a2.click();
        await lib.$.sleep(200);
        const next2 = lib.$el("div.examPaper_box > div.switch-btn-box > button:nth-child(2)");
        if (next2) {
          next2.click();
        } else {
          $console.error("鏈壘鍒颁笅涓€椤垫寜閽拷?);
        }
        modal2 == null ? void 0 : modal2.remove();
      }
      lib.$message.info({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: 0 });
      worker.emit("done");
    }).catch((err) => {
      lib.$message.error({ content: "绛旈绋嬪簭鍙戠敓閿欒 : " + err.message, duration: 0 });
    });
    return worker;
  }
  function xnkWork({ answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "寮€濮嬩綔锟? });
    CommonProject.scripts.workResults.methods.init();
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 ? optimizationElementWithImage(t2).innerText : "").join(",");
    };
    const workResults = [];
    let totalQuestionCount = 0;
    let requestedCount = 0;
    let resolvedCount = 0;
    const worker = new OCSWorker({
      root: ".questionBox",
      elements: {
        title: ".questionContent",
        options: ".optionUl label",
        questionTit: ".questionTit"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: {
        async handler(type, answer, option, ctx) {
          var _a;
          if (type === "judgement" || type === "single" || type === "multiple") {
            if (((_a = option.querySelector("input")) == null ? void 0 : _a.checked) === false) {
              option.click();
              await lib.$.sleep(200);
            }
          } else if (type === "completion" && answer.trim()) {
            const text = option.querySelector("textarea");
            if (text) {
              text.value = answer;
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(current, _, res) {
        var _a;
        if (current.result) {
          workResults.push(...simplifyWorkResult([current], titleTransform));
          CommonProject.scripts.workResults.methods.setResults(workResults);
          totalQuestionCount++;
          requestedCount++;
          resolvedCount++;
        }
        if ((_a = current.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], titleTransform)
          );
        }
        CommonProject.scripts.workResults.methods.updateWorkState({
          totalQuestionCount,
          requestedCount,
          resolvedCount
        });
      }
    });
    const getBtn = () => document.querySelector("span.Topicswitchingbtn:nth-child(2)");
    let next2 = getBtn();
    (async () => {
      while (next2 && worker.isClose === false) {
        await worker.doWork();
        await lib.$.sleep(1e3);
        next2 = getBtn();
        next2 == null ? void 0 : next2.click();
        await lib.$.sleep(1e3);
      }
      lib.$message.info({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: 0 });
      worker.emit("done");
      CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "zhs-xnk";
    })();
    return worker;
  }
  function smartWork(remotePage, { answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "寮€濮嬩綔锟? });
    CommonProject.scripts.workResults.methods.init();
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 ? optimizationElementWithImage(t2).innerText : "").join(",");
    };
    const workResults = [];
    let totalQuestionCount = 0;
    let requestedCount = 0;
    let resolvedCount = 0;
    const worker = new OCSWorker({
      root: ".questionContent",
      elements: {
        title: ".questionName .centent-pre",
        options: ".radio-view li.clearfix, .checkbox-views label.el-checkbox, .fillAnswer"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: {
        type(ctx) {
          var _a, _b, _c;
          const type = (_c = (_b = (_a = ctx.elements.title[0]) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.querySelector(".letterSortNum")) == null ? void 0 : _c.textContent;
          if (type == null ? void 0 : type.includes("鍗曢€夐")) {
            return "single";
          } else if (type == null ? void 0 : type.includes("澶氶€夐")) {
            return "multiple";
          } else if (type == null ? void 0 : type.includes("鍒ゆ柇锟?)) {
            return "judgement";
          } else if (type == null ? void 0 : type.includes("濉┖")) {
            return "completion";
          } else {
            return void 0;
          }
        },
        async handler(type, answer, option, ctx) {
          if (type === "judgement" || type === "single" || type === "multiple") {
            const opt = option.querySelector(
              ".el-checkbox__input:not(.is-checked),i.iconfont:not(.checkedIcon)"
            );
            if (opt) {
              if (remotePage) {
                await remotePage.click(opt);
              } else {
                opt.click();
              }
              await lib.$.sleep(200);
            }
          } else if (type === "completion") {
            const opt = option.querySelector("input");
            if (opt && answer.trim()) {
              if (remotePage) {
                await remotePage.click(opt);
                opt.value = "";
                await remotePage["keyboard.type"](answer, { delay: Math.floor(Math.random() * 100) });
              } else {
                opt.value = answer;
              }
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(current, _, res) {
        var _a;
        if (current.result) {
          workResults.push(...simplifyWorkResult([current], titleTransform));
          CommonProject.scripts.workResults.methods.setResults(workResults);
          totalQuestionCount++;
          requestedCount++;
          resolvedCount++;
        }
        if ((_a = current.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], titleTransform)
          );
        }
        CommonProject.scripts.workResults.methods.updateWorkState({
          totalQuestionCount,
          requestedCount,
          resolvedCount
        });
      }
    });
    const getNextBtn = () => document.querySelector(".next-topic.next-t");
    let next2 = getNextBtn();
    (async () => {
      const first = document.querySelector('[role="treeitem"] .font-sec-style-node');
      if (first) {
        if (remotePage)
          await remotePage.click(first);
        else
          first.click();
        await lib.$.sleep(3e3);
      }
      let count = 0;
      while (next2 && worker.isClose === false) {
        await worker.doWork({ enable_debug: true });
        next2 = getNextBtn();
        if (next2) {
          await lib.$.sleep(1e3);
          if (remotePage)
            await remotePage.click(next2);
          else
            next2.click();
          await lib.$.sleep(1e3);
          count++;
        }
      }
      lib.$message.info({
        content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?,
        duration: count > 10 ? 0 : 30
      });
      worker.emit("done");
      CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "zhs-smart";
    })();
    return worker;
  }
  function fusioncourseWork(remotePage, { answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "寮€濮嬩綔锟? });
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "zhs-fusion"
    });
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 ? optimizationElementWithImage(t2).innerText : "").join(",");
    };
    const worker = new OCSWorker({
      root: ".exam-item",
      elements: {
        type: ".quest-type",
        title: ".quest-title .option-name",
        options: "label"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: {
        type(ctx) {
          const type = ctx.elements.type[0].textContent;
          if (type == null ? void 0 : type.includes("鍗曢€夐")) {
            return "single";
          } else if (type == null ? void 0 : type.includes("澶氶€夐")) {
            return "multiple";
          } else if (type == null ? void 0 : type.includes("鍒ゆ柇锟?)) {
            return "judgement";
          } else if (type == null ? void 0 : type.includes("濉┖锟?)) {
            return "completion";
          } else {
            return void 0;
          }
        },
        async handler(type, answer, option, ctx) {
          if (type === "judgement" || type === "single" || type === "multiple") {
            const opt = option.querySelector(
              ".el-checkbox__input:not(.is-checked),.el-radio__input:not(.is-checked)"
            );
            if (opt) {
              if (remotePage) {
                await remotePage.click(opt);
              } else {
                opt.click();
              }
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(current, _, res) {
        var _a;
        if (current.result) {
          CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        }
        if ((_a = current.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], titleTransform)
          );
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    worker.doWork().then(async (res) => {
      if (worker.isClose === true) {
        return;
      }
      if (worker.isClose === true) {
        return;
      }
      lib.$message.info({
        content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?,
        duration: res.length > 10 ? 0 : 30
      });
      worker.emit("done");
    }).catch((err) => {
      lib.$message.error({ content: "绛旈绋嬪簭鍙戠敓閿欒 : " + err.message, duration: 0 });
    });
    return worker;
  }
  function hikeWork(remotePage, { answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "寮€濮嬩綔锟? });
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "zhs-hike"
    });
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 ? optimizationElementWithImage(t2).innerText : "").join(",");
    };
    const worker = new OCSWorker({
      root: ".q_main",
      elements: {
        type: ".question_score",
        title: ".question-topic",
        options: "label"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await lib.$.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: {
        type(ctx) {
          const type = ctx.elements.type[0].textContent;
          if (type == null ? void 0 : type.includes("鍗曢€夐")) {
            return "single";
          } else if (type == null ? void 0 : type.includes("澶氶€夐")) {
            return "multiple";
          } else if (type == null ? void 0 : type.includes("鍒ゆ柇锟?)) {
            return "judgement";
          } else if (type == null ? void 0 : type.includes("濉┖锟?)) {
            return "completion";
          } else {
            return void 0;
          }
        },
        async handler(type, answer, option, ctx) {
          if (type === "judgement" || type === "single" || type === "multiple") {
            const opt = option.querySelector(
              ".el-checkbox__input:not(.is-checked),.el-radio__input:not(.is-checked)"
            );
            if (opt) {
              if (remotePage) {
                await remotePage.click(opt);
              } else {
                opt.click();
              }
              await lib.$.sleep(200);
            }
          }
        }
      },
      onResultsUpdate(current, _, res) {
        var _a;
        if (current.result) {
          CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        }
        if ((_a = current.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], titleTransform)
          );
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    const getNextBtn = () => document.querySelector(".check_btn:not(.is-disabled)");
    let next2 = getNextBtn();
    let count = 0;
    (async () => {
      const first = document.querySelector(".card_ul .card_li");
      if (first) {
        if (remotePage)
          await remotePage.click(first);
        else
          first.click();
        await lib.$.sleep(3e3);
      }
      while (next2 && worker.isClose === false) {
        await worker.doWork({ enable_debug: true });
        next2 = getNextBtn();
        if (next2) {
          await lib.$.sleep(1e3);
          if (remotePage)
            await remotePage.click(next2);
          else
            next2.click();
          await lib.$.sleep(1e3);
          count++;
        }
      }
      lib.$message.info({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: count > 10 ? 0 : 30 });
      worker.emit("done");
      CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "zhs-hike";
    })();
    return worker;
  }
  function optimizeSecond(second) {
    if (second > 3600) {
      return `${Math.floor(second / 3600)}灏忔椂${Math.floor(second % 3600 / 60)}鍒嗛挓`;
    } else if (second > 60) {
      return `${Math.floor(second / 60)}鍒嗛挓${second % 60}绉抈;
    } else {
      return `${second}绉抈;
    }
  }
  function autoStop(stopTime) {
    var _a, _b;
    clearInterval(state$4.study.stopInterval);
    (_a = state$4.study.stopMessage) == null ? void 0 : _a.remove();
    if (stopTime !== "0") {
      let stopCount = parseFloat(stopTime) * 60 * 60;
      state$4.study.stopInterval = setInterval(() => {
        var _a2;
        if (stopCount > 0) {
          if (getPopupCaptcha() === null) {
            stopCount--;
          }
        } else {
          clearInterval(state$4.study.stopInterval);
          state$4.study.stop = true;
          (_a2 = lib.$el("video")) == null ? void 0 : _a2.pause();
          lib.$modal.alert({ content: "鑴氭湰鏆傚仠锛屽凡鑾峰緱浠婃棩骞虫椂鍒嗭紝濡傞渶缁х画瑙傜湅锛岃鍒锋柊椤甸潰锟? });
        }
      }, 1e3);
      const val = ((_b = ZHSProject.scripts["gxk-study"].configs.stopTime.options.find((t2) => t2[0] === stopTime)) == null ? void 0 : _b[0]) || "0";
      const date = new Date();
      date.setMinutes(date.getMinutes() + parseFloat(val) * 60);
      state$4.study.stopMessage = lib.$message.info({
        duration: 0,
        content: `锟?${date.toLocaleTimeString()} 鑴氭湰灏嗚嚜鍔ㄦ殏鍋渀
      });
    }
  }
  function fixProcessBar() {
    const bar = document.querySelector(".controlsBar");
    if (bar) {
      bar.style.display = "block";
    }
  }
  function closeDialogRead() {
    const div = document.querySelector(".dialog-read");
    if (div) {
      div.style.display = "none";
    }
  }
  function finishAlert() {
    lib.$modal.alert({
      content: "妫€娴嬪埌褰撳墠瑙嗛鍏ㄩ儴鎾斁瀹屾瘯锛屽鏋滆繕鏈夋湭瀹屾垚鐨勮棰戣鍒锋柊閲嶈瘯锛屾垨鑰呮墦寮€澶嶄範妯″紡锟?
    });
  }
  var md5$1 = { exports: {} };
  var crypt = { exports: {} };
  (function() {
    var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt$1 = {
      rotl: function(n, b) {
        return n << b | n >>> 32 - b;
      },
      rotr: function(n, b) {
        return n << 32 - b | n >>> b;
      },
      endian: function(n) {
        if (n.constructor == Number) {
          return crypt$1.rotl(n, 8) & 16711935 | crypt$1.rotl(n, 24) & 4278255360;
        }
        for (var i = 0; i < n.length; i++)
          n[i] = crypt$1.endian(n[i]);
        return n;
      },
      randomBytes: function(n) {
        for (var bytes = []; n > 0; n--)
          bytes.push(Math.floor(Math.random() * 256));
        return bytes;
      },
      bytesToWords: function(bytes) {
        for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
          words[b >>> 5] |= bytes[i] << 24 - b % 32;
        return words;
      },
      wordsToBytes: function(words) {
        for (var bytes = [], b = 0; b < words.length * 32; b += 8)
          bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
        return bytes;
      },
      bytesToHex: function(bytes) {
        for (var hex = [], i = 0; i < bytes.length; i++) {
          hex.push((bytes[i] >>> 4).toString(16));
          hex.push((bytes[i] & 15).toString(16));
        }
        return hex.join("");
      },
      hexToBytes: function(hex) {
        for (var bytes = [], c = 0; c < hex.length; c += 2)
          bytes.push(parseInt(hex.substr(c, 2), 16));
        return bytes;
      },
      bytesToBase64: function(bytes) {
        for (var base64 = [], i = 0; i < bytes.length; i += 3) {
          var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
          for (var j = 0; j < 4; j++)
            if (i * 8 + j * 6 <= bytes.length * 8)
              base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
            else
              base64.push("=");
        }
        return base64.join("");
      },
      base64ToBytes: function(base64) {
        base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
        for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
          if (imod4 == 0)
            continue;
          bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
        }
        return bytes;
      }
    };
    crypt.exports = crypt$1;
  })();
  var charenc = {
    utf8: {
      stringToBytes: function(str) {
        return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
      },
      bytesToString: function(bytes) {
        return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
      }
    },
    bin: {
      stringToBytes: function(str) {
        for (var bytes = [], i = 0; i < str.length; i++)
          bytes.push(str.charCodeAt(i) & 255);
        return bytes;
      },
      bytesToString: function(bytes) {
        for (var str = [], i = 0; i < bytes.length; i++)
          str.push(String.fromCharCode(bytes[i]));
        return str.join("");
      }
    }
  };
  var charenc_1 = charenc;
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  var isBuffer_1 = function(obj) {
    return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
  };
  function isBuffer(obj) {
    return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
  }
  function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
  }
  (function() {
    var crypt$1 = crypt.exports, utf8 = charenc_1.utf8, isBuffer2 = isBuffer_1, bin = charenc_1.bin, md52 = function(message2, options) {
      if (message2.constructor == String)
        if (options && options.encoding === "binary")
          message2 = bin.stringToBytes(message2);
        else
          message2 = utf8.stringToBytes(message2);
      else if (isBuffer2(message2))
        message2 = Array.prototype.slice.call(message2, 0);
      else if (!Array.isArray(message2) && message2.constructor !== Uint8Array)
        message2 = message2.toString();
      var m = crypt$1.bytesToWords(message2), l = message2.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
      for (var i = 0; i < m.length; i++) {
        m[i] = (m[i] << 8 | m[i] >>> 24) & 16711935 | (m[i] << 24 | m[i] >>> 8) & 4278255360;
      }
      m[l >>> 5] |= 128 << l % 32;
      m[(l + 64 >>> 9 << 4) + 14] = l;
      var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
      for (var i = 0; i < m.length; i += 16) {
        var aa = a, bb = b, cc = c, dd = d;
        a = FF(a, b, c, d, m[i + 0], 7, -680876936);
        d = FF(d, a, b, c, m[i + 1], 12, -389564586);
        c = FF(c, d, a, b, m[i + 2], 17, 606105819);
        b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
        a = FF(a, b, c, d, m[i + 4], 7, -176418897);
        d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
        c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
        b = FF(b, c, d, a, m[i + 7], 22, -45705983);
        a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
        d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
        c = FF(c, d, a, b, m[i + 10], 17, -42063);
        b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
        a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
        d = FF(d, a, b, c, m[i + 13], 12, -40341101);
        c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
        b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
        a = GG(a, b, c, d, m[i + 1], 5, -165796510);
        d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
        c = GG(c, d, a, b, m[i + 11], 14, 643717713);
        b = GG(b, c, d, a, m[i + 0], 20, -373897302);
        a = GG(a, b, c, d, m[i + 5], 5, -701558691);
        d = GG(d, a, b, c, m[i + 10], 9, 38016083);
        c = GG(c, d, a, b, m[i + 15], 14, -660478335);
        b = GG(b, c, d, a, m[i + 4], 20, -405537848);
        a = GG(a, b, c, d, m[i + 9], 5, 568446438);
        d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
        c = GG(c, d, a, b, m[i + 3], 14, -187363961);
        b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
        a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
        d = GG(d, a, b, c, m[i + 2], 9, -51403784);
        c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
        b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
        a = HH(a, b, c, d, m[i + 5], 4, -378558);
        d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
        c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
        b = HH(b, c, d, a, m[i + 14], 23, -35309556);
        a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
        d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
        c = HH(c, d, a, b, m[i + 7], 16, -155497632);
        b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
        a = HH(a, b, c, d, m[i + 13], 4, 681279174);
        d = HH(d, a, b, c, m[i + 0], 11, -358537222);
        c = HH(c, d, a, b, m[i + 3], 16, -722521979);
        b = HH(b, c, d, a, m[i + 6], 23, 76029189);
        a = HH(a, b, c, d, m[i + 9], 4, -640364487);
        d = HH(d, a, b, c, m[i + 12], 11, -421815835);
        c = HH(c, d, a, b, m[i + 15], 16, 530742520);
        b = HH(b, c, d, a, m[i + 2], 23, -995338651);
        a = II(a, b, c, d, m[i + 0], 6, -198630844);
        d = II(d, a, b, c, m[i + 7], 10, 1126891415);
        c = II(c, d, a, b, m[i + 14], 15, -1416354905);
        b = II(b, c, d, a, m[i + 5], 21, -57434055);
        a = II(a, b, c, d, m[i + 12], 6, 1700485571);
        d = II(d, a, b, c, m[i + 3], 10, -1894986606);
        c = II(c, d, a, b, m[i + 10], 15, -1051523);
        b = II(b, c, d, a, m[i + 1], 21, -2054922799);
        a = II(a, b, c, d, m[i + 8], 6, 1873313359);
        d = II(d, a, b, c, m[i + 15], 10, -30611744);
        c = II(c, d, a, b, m[i + 6], 15, -1560198380);
        b = II(b, c, d, a, m[i + 13], 21, 1309151649);
        a = II(a, b, c, d, m[i + 4], 6, -145523070);
        d = II(d, a, b, c, m[i + 11], 10, -1120210379);
        c = II(c, d, a, b, m[i + 2], 15, 718787259);
        b = II(b, c, d, a, m[i + 9], 21, -343485551);
        a = a + aa >>> 0;
        b = b + bb >>> 0;
        c = c + cc >>> 0;
        d = d + dd >>> 0;
      }
      return crypt$1.endian([a, b, c, d]);
    };
    md52._ff = function(a, b, c, d, x, s, t2) {
      var n = a + (b & c | ~b & d) + (x >>> 0) + t2;
      return (n << s | n >>> 32 - s) + b;
    };
    md52._gg = function(a, b, c, d, x, s, t2) {
      var n = a + (b & d | c & ~d) + (x >>> 0) + t2;
      return (n << s | n >>> 32 - s) + b;
    };
    md52._hh = function(a, b, c, d, x, s, t2) {
      var n = a + (b ^ c ^ d) + (x >>> 0) + t2;
      return (n << s | n >>> 32 - s) + b;
    };
    md52._ii = function(a, b, c, d, x, s, t2) {
      var n = a + (c ^ (b | ~d)) + (x >>> 0) + t2;
      return (n << s | n >>> 32 - s) + b;
    };
    md52._blocksize = 16;
    md52._digestsize = 16;
    md5$1.exports = function(message2, options) {
      if (message2 === void 0 || message2 === null)
        throw new Error("Illegal argument " + message2);
      var digestbytes = crypt$1.wordsToBytes(md52(message2, options));
      return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt$1.bytesToHex(digestbytes);
    };
  })();
  var md5 = md5$1.exports;
  var Typr = {};
  Typr.parse = function(buff) {
    var bin = Typr._bin;
    var data = new Uint8Array(buff);
    var offset = 0;
    bin.readFixed(data, offset);
    offset += 4;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var tags = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG "];
    var obj = { _data: data };
    var tabs = {};
    for (var i = 0; i < numTables; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      var toffset = bin.readUint(data, offset);
      offset += 4;
      var length = bin.readUint(data, offset);
      offset += 4;
      tabs[tag] = { offset: toffset, length };
    }
    for (var i = 0; i < tags.length; i++) {
      var t2 = tags[i];
      if (tabs[t2])
        obj[t2.trim()] = Typr[t2.trim()].parse(data, tabs[t2].offset, tabs[t2].length, obj);
    }
    return obj;
  };
  Typr._tabOffset = function(data, tab) {
    var bin = Typr._bin;
    var numTables = bin.readUshort(data, 4);
    var offset = 12;
    for (var i = 0; i < numTables; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      var toffset = bin.readUint(data, offset);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      if (tag == tab)
        return toffset;
    }
    return 0;
  };
  Typr._bin = { readFixed: function(data, o) {
    return (data[o] << 8 | data[o + 1]) + (data[o + 2] << 8 | data[o + 3]) / (256 * 256 + 4);
  }, readF2dot14: function(data, o) {
    var num = Typr._bin.readShort(data, o);
    return num / 16384;
  }, readInt: function(buff, p) {
    var a = Typr._bin.t.uint8;
    a[0] = buff[p + 3];
    a[1] = buff[p + 2];
    a[2] = buff[p + 1];
    a[3] = buff[p];
    return Typr._bin.t.int32[0];
  }, readInt8: function(buff, p) {
    var a = Typr._bin.t.uint8;
    a[0] = buff[p];
    return Typr._bin.t.int8[0];
  }, readShort: function(buff, p) {
    var a = Typr._bin.t.uint8;
    a[1] = buff[p];
    a[0] = buff[p + 1];
    return Typr._bin.t.int16[0];
  }, readUshort: function(buff, p) {
    return buff[p] << 8 | buff[p + 1];
  }, readUshorts: function(buff, p, len) {
    var arr = [];
    for (var i = 0; i < len; i++)
      arr.push(Typr._bin.readUshort(buff, p + i * 2));
    return arr;
  }, readUint: function(buff, p) {
    var a = Typr._bin.t.uint8;
    a[3] = buff[p];
    a[2] = buff[p + 1];
    a[1] = buff[p + 2];
    a[0] = buff[p + 3];
    return Typr._bin.t.uint32[0];
  }, readUint64: function(buff, p) {
    return Typr._bin.readUint(buff, p) * (4294967295 + 1) + Typr._bin.readUint(buff, p + 4);
  }, readASCII: function(buff, p, l) {
    var s = "";
    for (var i = 0; i < l; i++)
      s += String.fromCharCode(buff[p + i]);
    return s;
  }, readUnicode: function(buff, p, l) {
    var s = "";
    for (var i = 0; i < l; i++) {
      var c = buff[p++] << 8 | buff[p++];
      s += String.fromCharCode(c);
    }
    return s;
  }, _tdec: window["TextDecoder"] ? new window["TextDecoder"]() : null, readUTF8: function(buff, p, l) {
    var tdec = Typr._bin._tdec;
    if (tdec && p == 0 && l == buff.length)
      return tdec["decode"](buff);
    return Typr._bin.readASCII(buff, p, l);
  }, readBytes: function(buff, p, l) {
    var arr = [];
    for (var i = 0; i < l; i++)
      arr.push(buff[p + i]);
    return arr;
  }, readASCIIArray: function(buff, p, l) {
    var s = [];
    for (var i = 0; i < l; i++)
      s.push(String.fromCharCode(buff[p + i]));
    return s;
  } };
  Typr._bin.t = { buff: new ArrayBuffer(8) };
  Typr._bin.t.int8 = new Int8Array(Typr._bin.t.buff);
  Typr._bin.t.uint8 = new Uint8Array(Typr._bin.t.buff);
  Typr._bin.t.int16 = new Int16Array(Typr._bin.t.buff);
  Typr._bin.t.uint16 = new Uint16Array(Typr._bin.t.buff);
  Typr._bin.t.int32 = new Int32Array(Typr._bin.t.buff);
  Typr._bin.t.uint32 = new Uint32Array(Typr._bin.t.buff);
  Typr._lctf = {};
  Typr._lctf.parse = function(data, offset, length, font, subt) {
    var bin = Typr._bin;
    var obj = {};
    var offset0 = offset;
    bin.readFixed(data, offset);
    offset += 4;
    var offScriptList = bin.readUshort(data, offset);
    offset += 2;
    var offFeatureList = bin.readUshort(data, offset);
    offset += 2;
    var offLookupList = bin.readUshort(data, offset);
    offset += 2;
    obj.scriptList = Typr._lctf.readScriptList(data, offset0 + offScriptList);
    obj.featureList = Typr._lctf.readFeatureList(data, offset0 + offFeatureList);
    obj.lookupList = Typr._lctf.readLookupList(data, offset0 + offLookupList, subt);
    return obj;
  };
  Typr._lctf.readLookupList = function(data, offset, subt) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = [];
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var lut = Typr._lctf.readLookupTable(data, offset0 + noff, subt);
      obj.push(lut);
    }
    return obj;
  };
  Typr._lctf.readLookupTable = function(data, offset, subt) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = { tabs: [] };
    obj.ltype = bin.readUshort(data, offset);
    offset += 2;
    obj.flag = bin.readUshort(data, offset);
    offset += 2;
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var tab = subt(data, obj.ltype, offset0 + noff);
      obj.tabs.push(tab);
    }
    return obj;
  };
  Typr._lctf.numOfOnes = function(n) {
    var num = 0;
    for (var i = 0; i < 32; i++)
      if ((n >>> i & 1) != 0)
        num++;
    return num;
  };
  Typr._lctf.readClassDef = function(data, offset) {
    var bin = Typr._bin;
    var obj = [];
    var format = bin.readUshort(data, offset);
    offset += 2;
    if (format == 1) {
      var startGlyph = bin.readUshort(data, offset);
      offset += 2;
      var glyphCount = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < glyphCount; i++) {
        obj.push(startGlyph + i);
        obj.push(startGlyph + i);
        obj.push(bin.readUshort(data, offset));
        offset += 2;
      }
    }
    if (format == 2) {
      var count = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < count; i++) {
        obj.push(bin.readUshort(data, offset));
        offset += 2;
        obj.push(bin.readUshort(data, offset));
        offset += 2;
        obj.push(bin.readUshort(data, offset));
        offset += 2;
      }
    }
    return obj;
  };
  Typr._lctf.getInterval = function(tab, val) {
    for (var i = 0; i < tab.length; i += 3) {
      var start2 = tab[i], end = tab[i + 1];
      tab[i + 2];
      if (start2 <= val && val <= end)
        return i;
    }
    return -1;
  };
  Typr._lctf.readValueRecord = function(data, offset, valFmt) {
    var bin = Typr._bin;
    var arr = [];
    arr.push(valFmt & 1 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 1 ? 2 : 0;
    arr.push(valFmt & 2 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 2 ? 2 : 0;
    arr.push(valFmt & 4 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 4 ? 2 : 0;
    arr.push(valFmt & 8 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 8 ? 2 : 0;
    return arr;
  };
  Typr._lctf.readCoverage = function(data, offset) {
    var bin = Typr._bin;
    var cvg = {};
    cvg.fmt = bin.readUshort(data, offset);
    offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2;
    if (cvg.fmt == 1)
      cvg.tab = bin.readUshorts(data, offset, count);
    if (cvg.fmt == 2)
      cvg.tab = bin.readUshorts(data, offset, count * 3);
    return cvg;
  };
  Typr._lctf.coverageIndex = function(cvg, val) {
    var tab = cvg.tab;
    if (cvg.fmt == 1)
      return tab.indexOf(val);
    if (cvg.fmt == 2) {
      var ind = Typr._lctf.getInterval(tab, val);
      if (ind != -1)
        return tab[ind + 2] + (val - tab[ind]);
    }
    return -1;
  };
  Typr._lctf.readFeatureList = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = [];
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2;
      obj.push({ tag: tag.trim(), tab: Typr._lctf.readFeatureTable(data, offset0 + noff) });
    }
    return obj;
  };
  Typr._lctf.readFeatureTable = function(data, offset) {
    var bin = Typr._bin;
    bin.readUshort(data, offset);
    offset += 2;
    var lookupCount = bin.readUshort(data, offset);
    offset += 2;
    var indices = [];
    for (var i = 0; i < lookupCount; i++)
      indices.push(bin.readUshort(data, offset + 2 * i));
    return indices;
  };
  Typr._lctf.readScriptList = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2;
      obj[tag.trim()] = Typr._lctf.readScriptTable(data, offset0 + noff);
    }
    return obj;
  };
  Typr._lctf.readScriptTable = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    var defLangSysOff = bin.readUshort(data, offset);
    offset += 2;
    obj.default = Typr._lctf.readLangSysTable(data, offset0 + defLangSysOff);
    var langSysCount = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < langSysCount; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var langSysOff = bin.readUshort(data, offset);
      offset += 2;
      obj[tag.trim()] = Typr._lctf.readLangSysTable(data, offset0 + langSysOff);
    }
    return obj;
  };
  Typr._lctf.readLangSysTable = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    obj.reqFeature = bin.readUshort(data, offset);
    offset += 2;
    var featureCount = bin.readUshort(data, offset);
    offset += 2;
    obj.features = bin.readUshorts(data, offset, featureCount);
    return obj;
  };
  Typr.CFF = {};
  Typr.CFF.parse = function(data, offset, length) {
    var bin = Typr._bin;
    data = new Uint8Array(data.buffer, offset, length);
    offset = 0;
    data[offset];
    offset++;
    data[offset];
    offset++;
    data[offset];
    offset++;
    data[offset];
    offset++;
    var ninds = [];
    offset = Typr.CFF.readIndex(data, offset, ninds);
    var names = [];
    for (var i = 0; i < ninds.length - 1; i++)
      names.push(bin.readASCII(data, offset + ninds[i], ninds[i + 1] - ninds[i]));
    offset += ninds[ninds.length - 1];
    var tdinds = [];
    offset = Typr.CFF.readIndex(data, offset, tdinds);
    var topDicts = [];
    for (var i = 0; i < tdinds.length - 1; i++)
      topDicts.push(Typr.CFF.readDict(data, offset + tdinds[i], offset + tdinds[i + 1]));
    offset += tdinds[tdinds.length - 1];
    var topdict = topDicts[0];
    var sinds = [];
    offset = Typr.CFF.readIndex(data, offset, sinds);
    var strings = [];
    for (var i = 0; i < sinds.length - 1; i++)
      strings.push(bin.readASCII(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
    offset += sinds[sinds.length - 1];
    Typr.CFF.readSubrs(data, offset, topdict);
    if (topdict.CharStrings) {
      offset = topdict.CharStrings;
      var sinds = [];
      offset = Typr.CFF.readIndex(data, offset, sinds);
      var cstr = [];
      for (var i = 0; i < sinds.length - 1; i++)
        cstr.push(bin.readBytes(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
      topdict.CharStrings = cstr;
    }
    if (topdict.Encoding)
      topdict.Encoding = Typr.CFF.readEncoding(data, topdict.Encoding, topdict.CharStrings.length);
    if (topdict.charset)
      topdict.charset = Typr.CFF.readCharset(data, topdict.charset, topdict.CharStrings.length);
    if (topdict.Private) {
      offset = topdict.Private[1];
      topdict.Private = Typr.CFF.readDict(data, offset, offset + topdict.Private[0]);
      if (topdict.Private.Subrs)
        Typr.CFF.readSubrs(data, offset + topdict.Private.Subrs, topdict.Private);
    }
    var obj = {};
    for (var p in topdict) {
      if (["FamilyName", "FullName", "Notice", "version", "Copyright"].indexOf(p) != -1)
        obj[p] = strings[topdict[p] - 426 + 35];
      else
        obj[p] = topdict[p];
    }
    return obj;
  };
  Typr.CFF.readSubrs = function(data, offset, obj) {
    var bin = Typr._bin;
    var gsubinds = [];
    offset = Typr.CFF.readIndex(data, offset, gsubinds);
    var bias, nSubrs = gsubinds.length;
    if (nSubrs < 1240)
      bias = 107;
    else if (nSubrs < 33900)
      bias = 1131;
    else
      bias = 32768;
    obj.Bias = bias;
    obj.Subrs = [];
    for (var i = 0; i < gsubinds.length - 1; i++)
      obj.Subrs.push(bin.readBytes(data, offset + gsubinds[i], gsubinds[i + 1] - gsubinds[i]));
  };
  Typr.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0];
  Typr.CFF.glyphByUnicode = function(cff, code) {
    for (var i = 0; i < cff.charset.length; i++)
      if (cff.charset[i] == code)
        return i;
    return -1;
  };
  Typr.CFF.glyphBySE = function(cff, charcode) {
    if (charcode < 0 || charcode > 255)
      return -1;
    return Typr.CFF.glyphByUnicode(cff, Typr.CFF.tableSE[charcode]);
  };
  Typr.CFF.readEncoding = function(data, offset, num) {
    Typr._bin;
    var array = [".notdef"];
    var format = data[offset];
    offset++;
    if (format == 0) {
      var nCodes = data[offset];
      offset++;
      for (var i = 0; i < nCodes; i++)
        array.push(data[offset + i]);
    } else
      throw "error: unknown encoding format: " + format;
    return array;
  };
  Typr.CFF.readCharset = function(data, offset, num) {
    var bin = Typr._bin;
    var charset = [".notdef"];
    var format = data[offset];
    offset++;
    if (format == 0) {
      for (var i = 0; i < num; i++) {
        var first = bin.readUshort(data, offset);
        offset += 2;
        charset.push(first);
      }
    } else if (format == 1 || format == 2) {
      while (charset.length < num) {
        var first = bin.readUshort(data, offset);
        offset += 2;
        var nLeft = 0;
        if (format == 1) {
          nLeft = data[offset];
          offset++;
        } else {
          nLeft = bin.readUshort(data, offset);
          offset += 2;
        }
        for (var i = 0; i <= nLeft; i++) {
          charset.push(first);
          first++;
        }
      }
    } else
      throw "error: format: " + format;
    return charset;
  };
  Typr.CFF.readIndex = function(data, offset, inds) {
    var bin = Typr._bin;
    var count = bin.readUshort(data, offset);
    offset += 2;
    var offsize = data[offset];
    offset++;
    if (offsize == 1)
      for (var i = 0; i < count + 1; i++)
        inds.push(data[offset + i]);
    else if (offsize == 2)
      for (var i = 0; i < count + 1; i++)
        inds.push(bin.readUshort(data, offset + i * 2));
    else if (offsize == 3)
      for (var i = 0; i < count + 1; i++)
        inds.push(bin.readUint(data, offset + i * 3 - 1) & 16777215);
    else if (count != 0)
      throw "unsupported offset size: " + offsize + ", count: " + count;
    offset += (count + 1) * offsize;
    return offset - 1;
  };
  Typr.CFF.getCharString = function(data, offset, o) {
    var bin = Typr._bin;
    var b0 = data[offset], b1 = data[offset + 1];
    data[offset + 2];
    data[offset + 3];
    data[offset + 4];
    var vs = 1;
    var op = null, val = null;
    if (b0 <= 20) {
      op = b0;
      vs = 1;
    }
    if (b0 == 12) {
      op = b0 * 100 + b1;
      vs = 2;
    }
    if (21 <= b0 && b0 <= 27) {
      op = b0;
      vs = 1;
    }
    if (b0 == 28) {
      val = bin.readShort(data, offset + 1);
      vs = 3;
    }
    if (29 <= b0 && b0 <= 31) {
      op = b0;
      vs = 1;
    }
    if (32 <= b0 && b0 <= 246) {
      val = b0 - 139;
      vs = 1;
    }
    if (247 <= b0 && b0 <= 250) {
      val = (b0 - 247) * 256 + b1 + 108;
      vs = 2;
    }
    if (251 <= b0 && b0 <= 254) {
      val = -(b0 - 251) * 256 - b1 - 108;
      vs = 2;
    }
    if (b0 == 255) {
      val = bin.readInt(data, offset + 1) / 65535;
      vs = 5;
    }
    o.val = val != null ? val : "o" + op;
    o.size = vs;
  };
  Typr.CFF.readCharString = function(data, offset, length) {
    var end = offset + length;
    var bin = Typr._bin;
    var arr = [];
    while (offset < end) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2];
      data[offset + 3];
      data[offset + 4];
      var vs = 1;
      var op = null, val = null;
      if (b0 <= 20) {
        op = b0;
        vs = 1;
      }
      if (b0 == 12) {
        op = b0 * 100 + b1;
        vs = 2;
      }
      if (b0 == 19 || b0 == 20) {
        op = b0;
        vs = 2;
      }
      if (21 <= b0 && b0 <= 27) {
        op = b0;
        vs = 1;
      }
      if (b0 == 28) {
        val = bin.readShort(data, offset + 1);
        vs = 3;
      }
      if (29 <= b0 && b0 <= 31) {
        op = b0;
        vs = 1;
      }
      if (32 <= b0 && b0 <= 246) {
        val = b0 - 139;
        vs = 1;
      }
      if (247 <= b0 && b0 <= 250) {
        val = (b0 - 247) * 256 + b1 + 108;
        vs = 2;
      }
      if (251 <= b0 && b0 <= 254) {
        val = -(b0 - 251) * 256 - b1 - 108;
        vs = 2;
      }
      if (b0 == 255) {
        val = bin.readInt(data, offset + 1) / 65535;
        vs = 5;
      }
      arr.push(val != null ? val : "o" + op);
      offset += vs;
    }
    return arr;
  };
  Typr.CFF.readDict = function(data, offset, end) {
    var bin = Typr._bin;
    var dict = {};
    var carr = [];
    while (offset < end) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2];
      data[offset + 3];
      data[offset + 4];
      var vs = 1;
      var key = null, val = null;
      if (b0 == 28) {
        val = bin.readShort(data, offset + 1);
        vs = 3;
      }
      if (b0 == 29) {
        val = bin.readInt(data, offset + 1);
        vs = 5;
      }
      if (32 <= b0 && b0 <= 246) {
        val = b0 - 139;
        vs = 1;
      }
      if (247 <= b0 && b0 <= 250) {
        val = (b0 - 247) * 256 + b1 + 108;
        vs = 2;
      }
      if (251 <= b0 && b0 <= 254) {
        val = -(b0 - 251) * 256 - b1 - 108;
        vs = 2;
      }
      if (b0 == 255) {
        val = bin.readInt(data, offset + 1) / 65535;
        vs = 5;
        throw "unknown number";
      }
      if (b0 == 30) {
        var nibs = [];
        vs = 1;
        while (true) {
          var b = data[offset + vs];
          vs++;
          var nib0 = b >> 4, nib1 = b & 15;
          if (nib0 != 15)
            nibs.push(nib0);
          if (nib1 != 15)
            nibs.push(nib1);
          if (nib1 == 15)
            break;
        }
        var s = "";
        var chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"];
        for (var i = 0; i < nibs.length; i++)
          s += chars[nibs[i]];
        val = parseFloat(s);
      }
      if (b0 <= 21) {
        var keys = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"];
        key = keys[b0];
        vs = 1;
        if (b0 == 12) {
          var keys = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"];
          key = keys[b1];
          vs = 2;
        }
      }
      if (key != null) {
        dict[key] = carr.length == 1 ? carr[0] : carr;
        carr = [];
      } else
        carr.push(val);
      offset += vs;
    }
    return dict;
  };
  Typr.cmap = {};
  Typr.cmap.parse = function(data, offset, length) {
    data = new Uint8Array(data.buffer, offset, length);
    offset = 0;
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    var offs = [];
    obj.tables = [];
    for (var i = 0; i < numTables; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUint(data, offset);
      offset += 4;
      var id = "p" + platformID + "e" + encodingID;
      var tind = offs.indexOf(noffset);
      if (tind == -1) {
        tind = obj.tables.length;
        var subt;
        offs.push(noffset);
        var format = bin.readUshort(data, noffset);
        if (format == 0)
          subt = Typr.cmap.parse0(data, noffset);
        else if (format == 4)
          subt = Typr.cmap.parse4(data, noffset);
        else if (format == 6)
          subt = Typr.cmap.parse6(data, noffset);
        else if (format == 12)
          subt = Typr.cmap.parse12(data, noffset);
        else
          console.log("unknown format: " + format, platformID, encodingID, noffset);
        obj.tables.push(subt);
      }
      if (obj[id] != null)
        throw "multiple tables for one platform+encoding";
      obj[id] = tind;
    }
    return obj;
  };
  Typr.cmap.parse0 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    var len = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    obj.map = [];
    for (var i = 0; i < len - 6; i++)
      obj.map.push(data[offset + i]);
    return obj;
  };
  Typr.cmap.parse4 = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    var length = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var segCountX2 = bin.readUshort(data, offset);
    offset += 2;
    var segCount = segCountX2 / 2;
    obj.searchRange = bin.readUshort(data, offset);
    offset += 2;
    obj.entrySelector = bin.readUshort(data, offset);
    offset += 2;
    obj.rangeShift = bin.readUshort(data, offset);
    offset += 2;
    obj.endCount = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    offset += 2;
    obj.startCount = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    obj.idDelta = [];
    for (var i = 0; i < segCount; i++) {
      obj.idDelta.push(bin.readShort(data, offset));
      offset += 2;
    }
    obj.idRangeOffset = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    obj.glyphIdArray = [];
    while (offset < offset0 + length) {
      obj.glyphIdArray.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return obj;
  };
  Typr.cmap.parse6 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    obj.firstCode = bin.readUshort(data, offset);
    offset += 2;
    var entryCount = bin.readUshort(data, offset);
    offset += 2;
    obj.glyphIdArray = [];
    for (var i = 0; i < entryCount; i++) {
      obj.glyphIdArray.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return obj;
  };
  Typr.cmap.parse12 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    offset += 2;
    bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    var nGroups = bin.readUint(data, offset);
    offset += 4;
    obj.groups = [];
    for (var i = 0; i < nGroups; i++) {
      var off = offset + i * 12;
      var startCharCode = bin.readUint(data, off + 0);
      var endCharCode = bin.readUint(data, off + 4);
      var startGlyphID = bin.readUint(data, off + 8);
      obj.groups.push([startCharCode, endCharCode, startGlyphID]);
    }
    return obj;
  };
  Typr.glyf = {};
  Typr.glyf.parse = function(data, offset, length, font) {
    var obj = [];
    for (var g = 0; g < font.maxp.numGlyphs; g++)
      obj.push(null);
    return obj;
  };
  Typr.glyf._parseGlyf = function(font, g) {
    var bin = Typr._bin;
    var data = font._data;
    var offset = Typr._tabOffset(data, "glyf") + font.loca[g];
    if (font.loca[g] == font.loca[g + 1])
      return null;
    var gl = {};
    gl.noc = bin.readShort(data, offset);
    offset += 2;
    gl.xMin = bin.readShort(data, offset);
    offset += 2;
    gl.yMin = bin.readShort(data, offset);
    offset += 2;
    gl.xMax = bin.readShort(data, offset);
    offset += 2;
    gl.yMax = bin.readShort(data, offset);
    offset += 2;
    if (gl.xMin >= gl.xMax || gl.yMin >= gl.yMax)
      return null;
    if (gl.noc > 0) {
      gl.endPts = [];
      for (var i = 0; i < gl.noc; i++) {
        gl.endPts.push(bin.readUshort(data, offset));
        offset += 2;
      }
      var instructionLength = bin.readUshort(data, offset);
      offset += 2;
      if (data.length - offset < instructionLength)
        return null;
      gl.instructions = bin.readBytes(data, offset, instructionLength);
      offset += instructionLength;
      var crdnum = gl.endPts[gl.noc - 1] + 1;
      gl.flags = [];
      for (var i = 0; i < crdnum; i++) {
        var flag = data[offset];
        offset++;
        gl.flags.push(flag);
        if ((flag & 8) != 0) {
          var rep = data[offset];
          offset++;
          for (var j = 0; j < rep; j++) {
            gl.flags.push(flag);
            i++;
          }
        }
      }
      gl.xs = [];
      for (var i = 0; i < crdnum; i++) {
        var i8 = (gl.flags[i] & 2) != 0, same = (gl.flags[i] & 16) != 0;
        if (i8) {
          gl.xs.push(same ? data[offset] : -data[offset]);
          offset++;
        } else {
          if (same)
            gl.xs.push(0);
          else {
            gl.xs.push(bin.readShort(data, offset));
            offset += 2;
          }
        }
      }
      gl.ys = [];
      for (var i = 0; i < crdnum; i++) {
        var i8 = (gl.flags[i] & 4) != 0, same = (gl.flags[i] & 32) != 0;
        if (i8) {
          gl.ys.push(same ? data[offset] : -data[offset]);
          offset++;
        } else {
          if (same)
            gl.ys.push(0);
          else {
            gl.ys.push(bin.readShort(data, offset));
            offset += 2;
          }
        }
      }
      var x = 0, y = 0;
      for (var i = 0; i < crdnum; i++) {
        x += gl.xs[i];
        y += gl.ys[i];
        gl.xs[i] = x;
        gl.ys[i] = y;
      }
    } else {
      var ARG_1_AND_2_ARE_WORDS = 1 << 0;
      var ARGS_ARE_XY_VALUES = 1 << 1;
      var WE_HAVE_A_SCALE = 1 << 3;
      var MORE_COMPONENTS = 1 << 5;
      var WE_HAVE_AN_X_AND_Y_SCALE = 1 << 6;
      var WE_HAVE_A_TWO_BY_TWO = 1 << 7;
      var WE_HAVE_INSTRUCTIONS = 1 << 8;
      gl.parts = [];
      var flags;
      do {
        flags = bin.readUshort(data, offset);
        offset += 2;
        var part = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
        gl.parts.push(part);
        part.glyphIndex = bin.readUshort(data, offset);
        offset += 2;
        if (flags & ARG_1_AND_2_ARE_WORDS) {
          var arg1 = bin.readShort(data, offset);
          offset += 2;
          var arg2 = bin.readShort(data, offset);
          offset += 2;
        } else {
          var arg1 = bin.readInt8(data, offset);
          offset++;
          var arg2 = bin.readInt8(data, offset);
          offset++;
        }
        if (flags & ARGS_ARE_XY_VALUES) {
          part.m.tx = arg1;
          part.m.ty = arg2;
        } else {
          part.p1 = arg1;
          part.p2 = arg2;
        }
        if (flags & WE_HAVE_A_SCALE) {
          part.m.a = part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
          part.m.a = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        } else if (flags & WE_HAVE_A_TWO_BY_TWO) {
          part.m.a = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.b = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.c = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        }
      } while (flags & MORE_COMPONENTS);
      if (flags & WE_HAVE_INSTRUCTIONS) {
        var numInstr = bin.readUshort(data, offset);
        offset += 2;
        gl.instr = [];
        for (var i = 0; i < numInstr; i++) {
          gl.instr.push(data[offset]);
          offset++;
        }
      }
    }
    return gl;
  };
  Typr.GPOS = {};
  Typr.GPOS.parse = function(data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GPOS.subt);
  };
  Typr.GPOS.subt = function(data, ltype, offset) {
    if (ltype != 2)
      return null;
    var bin = Typr._bin, offset0 = offset, tab = {};
    tab.format = bin.readUshort(data, offset);
    offset += 2;
    var covOff = bin.readUshort(data, offset);
    offset += 2;
    tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0);
    tab.valFmt1 = bin.readUshort(data, offset);
    offset += 2;
    tab.valFmt2 = bin.readUshort(data, offset);
    offset += 2;
    var ones1 = Typr._lctf.numOfOnes(tab.valFmt1);
    var ones2 = Typr._lctf.numOfOnes(tab.valFmt2);
    if (tab.format == 1) {
      tab.pairsets = [];
      var count = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < count; i++) {
        var psoff = bin.readUshort(data, offset);
        offset += 2;
        psoff += offset0;
        var pvcount = bin.readUshort(data, psoff);
        psoff += 2;
        var arr = [];
        for (var j = 0; j < pvcount; j++) {
          var gid2 = bin.readUshort(data, psoff);
          psoff += 2;
          var value1, value2;
          if (tab.valFmt1 != 0) {
            value1 = Typr._lctf.readValueRecord(data, psoff, tab.valFmt1);
            psoff += ones1 * 2;
          }
          if (tab.valFmt2 != 0) {
            value2 = Typr._lctf.readValueRecord(data, psoff, tab.valFmt2);
            psoff += ones2 * 2;
          }
          arr.push({ gid2, val1: value1, val2: value2 });
        }
        tab.pairsets.push(arr);
      }
    }
    if (tab.format == 2) {
      var classDef1 = bin.readUshort(data, offset);
      offset += 2;
      var classDef2 = bin.readUshort(data, offset);
      offset += 2;
      var class1Count = bin.readUshort(data, offset);
      offset += 2;
      var class2Count = bin.readUshort(data, offset);
      offset += 2;
      tab.classDef1 = Typr._lctf.readClassDef(data, offset0 + classDef1);
      tab.classDef2 = Typr._lctf.readClassDef(data, offset0 + classDef2);
      tab.matrix = [];
      for (var i = 0; i < class1Count; i++) {
        var row = [];
        for (var j = 0; j < class2Count; j++) {
          var value1 = null, value2 = null;
          if (tab.valFmt1 != 0) {
            value1 = Typr._lctf.readValueRecord(data, offset, tab.valFmt1);
            offset += ones1 * 2;
          }
          if (tab.valFmt2 != 0) {
            value2 = Typr._lctf.readValueRecord(data, offset, tab.valFmt2);
            offset += ones2 * 2;
          }
          row.push({ val1: value1, val2: value2 });
        }
        tab.matrix.push(row);
      }
    }
    return tab;
  };
  Typr.GSUB = {};
  Typr.GSUB.parse = function(data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GSUB.subt);
  };
  Typr.GSUB.subt = function(data, ltype, offset) {
    var bin = Typr._bin, offset0 = offset, tab = {};
    if (ltype != 1 && ltype != 4 && ltype != 5)
      return null;
    tab.fmt = bin.readUshort(data, offset);
    offset += 2;
    var covOff = bin.readUshort(data, offset);
    offset += 2;
    tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0);
    if (ltype == 1) {
      if (tab.fmt == 1) {
        tab.delta = bin.readShort(data, offset);
        offset += 2;
      } else if (tab.fmt == 2) {
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        tab.newg = bin.readUshorts(data, offset, cnt);
        offset += tab.newg.length * 2;
      }
    } else if (ltype == 4) {
      tab.vals = [];
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < cnt; i++) {
        var loff = bin.readUshort(data, offset);
        offset += 2;
        tab.vals.push(Typr.GSUB.readLigatureSet(data, offset0 + loff));
      }
    } else if (ltype == 5) {
      if (tab.fmt == 2) {
        var cDefOffset = bin.readUshort(data, offset);
        offset += 2;
        tab.cDef = Typr._lctf.readClassDef(data, offset0 + cDefOffset);
        tab.scset = [];
        var subClassSetCount = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < subClassSetCount; i++) {
          var scsOff = bin.readUshort(data, offset);
          offset += 2;
          tab.scset.push(scsOff == 0 ? null : Typr.GSUB.readSubClassSet(data, offset0 + scsOff));
        }
      } else
        console.log("unknown table format", tab.fmt);
    }
    return tab;
  };
  Typr.GSUB.readSubClassSet = function(data, offset) {
    var rUs = Typr._bin.readUshort, offset0 = offset, lset = [];
    var cnt = rUs(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = rUs(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readSubClassRule(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readSubClassRule = function(data, offset) {
    var rUs = Typr._bin.readUshort, rule = {};
    var gcount = rUs(data, offset);
    offset += 2;
    var scount = rUs(data, offset);
    offset += 2;
    rule.input = [];
    for (var i = 0; i < gcount - 1; i++) {
      rule.input.push(rUs(data, offset));
      offset += 2;
    }
    rule.substLookupRecords = Typr.GSUB.readSubstLookupRecords(data, offset, scount);
    return rule;
  };
  Typr.GSUB.readSubstLookupRecords = function(data, offset, cnt) {
    var rUs = Typr._bin.readUshort;
    var out = [];
    for (var i = 0; i < cnt; i++) {
      out.push(rUs(data, offset), rUs(data, offset + 2));
      offset += 4;
    }
    return out;
  };
  Typr.GSUB.readChainSubClassSet = function(data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [];
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = bin.readUshort(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readChainSubClassRule(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readChainSubClassRule = function(data, offset) {
    var bin = Typr._bin, rule = {};
    var pps = ["backtrack", "input", "lookahead"];
    for (var pi = 0; pi < pps.length; pi++) {
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      if (pi == 1)
        cnt--;
      rule[pps[pi]] = bin.readUshorts(data, offset, cnt);
      offset += rule[pps[pi]].length * 2;
    }
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    rule.subst = bin.readUshorts(data, offset, cnt * 2);
    offset += rule.subst.length * 2;
    return rule;
  };
  Typr.GSUB.readLigatureSet = function(data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [];
    var lcnt = bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < lcnt; j++) {
      var loff = bin.readUshort(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readLigature(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readLigature = function(data, offset) {
    var bin = Typr._bin, lig = { chain: [] };
    lig.nglyph = bin.readUshort(data, offset);
    offset += 2;
    var ccnt = bin.readUshort(data, offset);
    offset += 2;
    for (var k = 0; k < ccnt - 1; k++) {
      lig.chain.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return lig;
  };
  Typr.head = {};
  Typr.head.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readFixed(data, offset);
    offset += 4;
    obj.fontRevision = bin.readFixed(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    obj.flags = bin.readUshort(data, offset);
    offset += 2;
    obj.unitsPerEm = bin.readUshort(data, offset);
    offset += 2;
    obj.created = bin.readUint64(data, offset);
    offset += 8;
    obj.modified = bin.readUint64(data, offset);
    offset += 8;
    obj.xMin = bin.readShort(data, offset);
    offset += 2;
    obj.yMin = bin.readShort(data, offset);
    offset += 2;
    obj.xMax = bin.readShort(data, offset);
    offset += 2;
    obj.yMax = bin.readShort(data, offset);
    offset += 2;
    obj.macStyle = bin.readUshort(data, offset);
    offset += 2;
    obj.lowestRecPPEM = bin.readUshort(data, offset);
    offset += 2;
    obj.fontDirectionHint = bin.readShort(data, offset);
    offset += 2;
    obj.indexToLocFormat = bin.readShort(data, offset);
    offset += 2;
    obj.glyphDataFormat = bin.readShort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.hhea = {};
  Typr.hhea.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readFixed(data, offset);
    offset += 4;
    obj.ascender = bin.readShort(data, offset);
    offset += 2;
    obj.descender = bin.readShort(data, offset);
    offset += 2;
    obj.lineGap = bin.readShort(data, offset);
    offset += 2;
    obj.advanceWidthMax = bin.readUshort(data, offset);
    offset += 2;
    obj.minLeftSideBearing = bin.readShort(data, offset);
    offset += 2;
    obj.minRightSideBearing = bin.readShort(data, offset);
    offset += 2;
    obj.xMaxExtent = bin.readShort(data, offset);
    offset += 2;
    obj.caretSlopeRise = bin.readShort(data, offset);
    offset += 2;
    obj.caretSlopeRun = bin.readShort(data, offset);
    offset += 2;
    obj.caretOffset = bin.readShort(data, offset);
    offset += 2;
    offset += 4 * 2;
    obj.metricDataFormat = bin.readShort(data, offset);
    offset += 2;
    obj.numberOfHMetrics = bin.readUshort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.hmtx = {};
  Typr.hmtx.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var obj = {};
    obj.aWidth = [];
    obj.lsBearing = [];
    var aw = 0, lsb = 0;
    for (var i = 0; i < font.maxp.numGlyphs; i++) {
      if (i < font.hhea.numberOfHMetrics) {
        aw = bin.readUshort(data, offset);
        offset += 2;
        lsb = bin.readShort(data, offset);
        offset += 2;
      }
      obj.aWidth.push(aw);
      obj.lsBearing.push(lsb);
    }
    return obj;
  };
  Typr.kern = {};
  Typr.kern.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var version = bin.readUshort(data, offset);
    offset += 2;
    if (version == 1)
      return Typr.kern.parseV1(data, offset - 2, length, font);
    var nTables = bin.readUshort(data, offset);
    offset += 2;
    var map = { glyph1: [], rval: [] };
    for (var i = 0; i < nTables; i++) {
      offset += 2;
      var length = bin.readUshort(data, offset);
      offset += 2;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      format &= 15;
      if (format == 0)
        offset = Typr.kern.readFormat0(data, offset, map);
      else
        throw "unknown kern table format: " + format;
    }
    return map;
  };
  Typr.kern.parseV1 = function(data, offset, length, font) {
    var bin = Typr._bin;
    bin.readFixed(data, offset);
    offset += 4;
    var nTables = bin.readUint(data, offset);
    offset += 4;
    var map = { glyph1: [], rval: [] };
    for (var i = 0; i < nTables; i++) {
      bin.readUint(data, offset);
      offset += 4;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      format &= 15;
      if (format == 0)
        offset = Typr.kern.readFormat0(data, offset, map);
      else
        throw "unknown kern table format: " + format;
    }
    return map;
  };
  Typr.kern.readFormat0 = function(data, offset, map) {
    var bin = Typr._bin;
    var pleft = -1;
    var nPairs = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < nPairs; j++) {
      var left = bin.readUshort(data, offset);
      offset += 2;
      var right = bin.readUshort(data, offset);
      offset += 2;
      var value = bin.readShort(data, offset);
      offset += 2;
      if (left != pleft) {
        map.glyph1.push(left);
        map.rval.push({ glyph2: [], vals: [] });
      }
      var rval = map.rval[map.rval.length - 1];
      rval.glyph2.push(right);
      rval.vals.push(value);
      pleft = left;
    }
    return offset;
  };
  Typr.loca = {};
  Typr.loca.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var obj = [];
    var ver = font.head.indexToLocFormat;
    var len = font.maxp.numGlyphs + 1;
    if (ver == 0)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUshort(data, offset + (i << 1)) << 1);
    if (ver == 1)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUint(data, offset + (i << 2)));
    return obj;
  };
  Typr.maxp = {};
  Typr.maxp.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    var ver = bin.readUint(data, offset);
    offset += 4;
    obj.numGlyphs = bin.readUshort(data, offset);
    offset += 2;
    if (ver == 65536) {
      obj.maxPoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxContours = bin.readUshort(data, offset);
      offset += 2;
      obj.maxCompositePoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxCompositeContours = bin.readUshort(data, offset);
      offset += 2;
      obj.maxZones = bin.readUshort(data, offset);
      offset += 2;
      obj.maxTwilightPoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxStorage = bin.readUshort(data, offset);
      offset += 2;
      obj.maxFunctionDefs = bin.readUshort(data, offset);
      offset += 2;
      obj.maxInstructionDefs = bin.readUshort(data, offset);
      offset += 2;
      obj.maxStackElements = bin.readUshort(data, offset);
      offset += 2;
      obj.maxSizeOfInstructions = bin.readUshort(data, offset);
      offset += 2;
      obj.maxComponentElements = bin.readUshort(data, offset);
      offset += 2;
      obj.maxComponentDepth = bin.readUshort(data, offset);
      offset += 2;
    }
    return obj;
  };
  Typr.name = {};
  Typr.name.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var offset0 = offset;
    for (var i = 0; i < count; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var languageID = bin.readUshort(data, offset);
      offset += 2;
      var nameID = bin.readUshort(data, offset);
      offset += 2;
      var length = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUshort(data, offset);
      offset += 2;
      var plat = "p" + platformID;
      if (obj[plat] == null)
        obj[plat] = {};
      var names = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"];
      var cname = names[nameID];
      var soff = offset0 + count * 12 + noffset;
      var str;
      if (platformID == 0)
        str = bin.readUnicode(data, soff, length / 2);
      else if (platformID == 3 && encodingID == 0)
        str = bin.readUnicode(data, soff, length / 2);
      else if (encodingID == 0)
        str = bin.readASCII(data, soff, length);
      else if (encodingID == 1)
        str = bin.readUnicode(data, soff, length / 2);
      else if (encodingID == 3)
        str = bin.readUnicode(data, soff, length / 2);
      else if (platformID == 1) {
        str = bin.readASCII(data, soff, length);
        console.log("reading unknown MAC encoding " + encodingID + " as ASCII");
      } else
        throw "unknown encoding " + encodingID + ", platformID: " + platformID;
      obj[plat][cname] = str;
      obj[plat]._lang = languageID;
    }
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 1033)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 3084)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null)
        return obj[p];
    var tname;
    for (var p in obj) {
      tname = p;
      break;
    }
    console.log("returning name table with languageID " + obj[tname]._lang);
    return obj[tname];
  };
  Typr["OS/2"] = {};
  Typr["OS/2"].parse = function(data, offset, length) {
    var bin = Typr._bin;
    var ver = bin.readUshort(data, offset);
    offset += 2;
    var obj = {};
    if (ver == 0)
      Typr["OS/2"].version0(data, offset, obj);
    else if (ver == 1)
      Typr["OS/2"].version1(data, offset, obj);
    else if (ver == 2 || ver == 3 || ver == 4)
      Typr["OS/2"].version2(data, offset, obj);
    else if (ver == 5)
      Typr["OS/2"].version5(data, offset, obj);
    else
      throw "unknown OS/2 table version: " + ver;
    return obj;
  };
  Typr["OS/2"].version0 = function(data, offset, obj) {
    var bin = Typr._bin;
    obj.xAvgCharWidth = bin.readShort(data, offset);
    offset += 2;
    obj.usWeightClass = bin.readUshort(data, offset);
    offset += 2;
    obj.usWidthClass = bin.readUshort(data, offset);
    offset += 2;
    obj.fsType = bin.readUshort(data, offset);
    offset += 2;
    obj.ySubscriptXSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptYSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptXOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptYOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptXSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptYSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptXOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptYOffset = bin.readShort(data, offset);
    offset += 2;
    obj.yStrikeoutSize = bin.readShort(data, offset);
    offset += 2;
    obj.yStrikeoutPosition = bin.readShort(data, offset);
    offset += 2;
    obj.sFamilyClass = bin.readShort(data, offset);
    offset += 2;
    obj.panose = bin.readBytes(data, offset, 10);
    offset += 10;
    obj.ulUnicodeRange1 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange2 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange3 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange4 = bin.readUint(data, offset);
    offset += 4;
    obj.achVendID = [bin.readInt8(data, offset), bin.readInt8(data, offset + 1), bin.readInt8(data, offset + 2), bin.readInt8(data, offset + 3)];
    offset += 4;
    obj.fsSelection = bin.readUshort(data, offset);
    offset += 2;
    obj.usFirstCharIndex = bin.readUshort(data, offset);
    offset += 2;
    obj.usLastCharIndex = bin.readUshort(data, offset);
    offset += 2;
    obj.sTypoAscender = bin.readShort(data, offset);
    offset += 2;
    obj.sTypoDescender = bin.readShort(data, offset);
    offset += 2;
    obj.sTypoLineGap = bin.readShort(data, offset);
    offset += 2;
    obj.usWinAscent = bin.readUshort(data, offset);
    offset += 2;
    obj.usWinDescent = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr["OS/2"].version1 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version0(data, offset, obj);
    obj.ulCodePageRange1 = bin.readUint(data, offset);
    offset += 4;
    obj.ulCodePageRange2 = bin.readUint(data, offset);
    offset += 4;
    return offset;
  };
  Typr["OS/2"].version2 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version1(data, offset, obj);
    obj.sxHeight = bin.readShort(data, offset);
    offset += 2;
    obj.sCapHeight = bin.readShort(data, offset);
    offset += 2;
    obj.usDefault = bin.readUshort(data, offset);
    offset += 2;
    obj.usBreak = bin.readUshort(data, offset);
    offset += 2;
    obj.usMaxContext = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr["OS/2"].version5 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version2(data, offset, obj);
    obj.usLowerOpticalPointSize = bin.readUshort(data, offset);
    offset += 2;
    obj.usUpperOpticalPointSize = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr.post = {};
  Typr.post.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    obj.version = bin.readFixed(data, offset);
    offset += 4;
    obj.italicAngle = bin.readFixed(data, offset);
    offset += 4;
    obj.underlinePosition = bin.readShort(data, offset);
    offset += 2;
    obj.underlineThickness = bin.readShort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.SVG = {};
  Typr.SVG.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = { entries: [] };
    var offset0 = offset;
    bin.readUshort(data, offset);
    offset += 2;
    var svgDocIndexOffset = bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    offset = svgDocIndexOffset + offset0;
    var numEntries = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < numEntries; i++) {
      var startGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var endGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var svgDocOffset = bin.readUint(data, offset);
      offset += 4;
      var svgDocLength = bin.readUint(data, offset);
      offset += 4;
      var sbuf = new Uint8Array(data.buffer, offset0 + svgDocOffset + svgDocIndexOffset, svgDocLength);
      var svg = bin.readUTF8(sbuf, 0, sbuf.length);
      for (var f = startGlyphID; f <= endGlyphID; f++) {
        obj.entries[f] = svg;
      }
    }
    return obj;
  };
  Typr.SVG.toPath = function(str) {
    var pth = { cmds: [], crds: [] };
    if (str == null)
      return pth;
    var prsr = new DOMParser();
    var doc = prsr["parseFromString"](str, "image/svg+xml");
    var svg = doc.firstChild;
    while (svg.tagName != "svg")
      svg = svg.nextSibling;
    var vb = svg.getAttribute("viewBox");
    if (vb)
      vb = vb.trim().split(" ").map(parseFloat);
    else
      vb = [0, 0, 1e3, 1e3];
    Typr.SVG._toPath(svg.children, pth);
    for (var i = 0; i < pth.crds.length; i += 2) {
      var x = pth.crds[i], y = pth.crds[i + 1];
      x -= vb[0];
      y -= vb[1];
      y = -y;
      pth.crds[i] = x;
      pth.crds[i + 1] = y;
    }
    return pth;
  };
  Typr.SVG._toPath = function(nds, pth, fill) {
    for (var ni = 0; ni < nds.length; ni++) {
      var nd = nds[ni], tn = nd.tagName;
      var cfl = nd.getAttribute("fill");
      if (cfl == null)
        cfl = fill;
      if (tn == "g")
        Typr.SVG._toPath(nd.children, pth, cfl);
      else if (tn == "path") {
        pth.cmds.push(cfl ? cfl : "#000000");
        var d = nd.getAttribute("d");
        var toks = Typr.SVG._tokens(d);
        Typr.SVG._toksToPath(toks, pth);
        pth.cmds.push("X");
      } else if (tn == "defs")
        ;
      else
        console.log(tn, nd);
    }
  };
  Typr.SVG._tokens = function(d) {
    var ts = [], off = 0, rn = false, cn = "";
    while (off < d.length) {
      var cc = d.charCodeAt(off), ch = d.charAt(off);
      off++;
      var isNum = 48 <= cc && cc <= 57 || ch == "." || ch == "-";
      if (rn) {
        if (ch == "-") {
          ts.push(parseFloat(cn));
          cn = ch;
        } else if (isNum)
          cn += ch;
        else {
          ts.push(parseFloat(cn));
          if (ch != "," && ch != " ")
            ts.push(ch);
          rn = false;
        }
      } else {
        if (isNum) {
          cn = ch;
          rn = true;
        } else if (ch != "," && ch != " ")
          ts.push(ch);
      }
    }
    if (rn)
      ts.push(parseFloat(cn));
    return ts;
  };
  Typr.SVG._toksToPath = function(ts, pth) {
    var i = 0, x = 0, y = 0, ox = 0, oy = 0;
    var pc = { M: 2, L: 2, H: 1, V: 1, S: 4, C: 6 };
    var cmds = pth.cmds, crds = pth.crds;
    while (i < ts.length) {
      var cmd = ts[i];
      i++;
      if (cmd == "z") {
        cmds.push("Z");
        x = ox;
        y = oy;
      } else {
        var cmu = cmd.toUpperCase();
        var ps = pc[cmu], reps = Typr.SVG._reps(ts, i, ps);
        for (var j = 0; j < reps; j++) {
          var xi = 0, yi = 0;
          if (cmd != cmu) {
            xi = x;
            yi = y;
          }
          if (cmu == "M") {
            x = xi + ts[i++];
            y = yi + ts[i++];
            cmds.push("M");
            crds.push(x, y);
            ox = x;
            oy = y;
          } else if (cmu == "L") {
            x = xi + ts[i++];
            y = yi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "H") {
            x = xi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "V") {
            y = yi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "C") {
            var x1 = xi + ts[i++], y1 = yi + ts[i++], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C");
            crds.push(x1, y1, x2, y2, x3, y3);
            x = x3;
            y = y3;
          } else if (cmu == "S") {
            var co = Math.max(crds.length - 4, 0);
            var x1 = x + x - crds[co], y1 = y + y - crds[co + 1];
            var x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C");
            crds.push(x1, y1, x2, y2, x3, y3);
            x = x3;
            y = y3;
          } else
            console.log("Unknown SVG command " + cmd);
        }
      }
    }
  };
  Typr.SVG._reps = function(ts, off, ps) {
    var i = off;
    while (i < ts.length) {
      if (typeof ts[i] == "string")
        break;
      i += ps;
    }
    return (i - off) / ps;
  };
  if (Typr == null)
    Typr = {};
  if (Typr.U == null)
    Typr.U = {};
  Typr.U.codeToGlyph = function(font, code) {
    var cmap = font.cmap;
    var tind = -1;
    if (cmap.p0e4 != null)
      tind = cmap.p0e4;
    else if (cmap.p3e1 != null)
      tind = cmap.p3e1;
    else if (cmap.p1e0 != null)
      tind = cmap.p1e0;
    if (tind == -1)
      throw "no familiar platform and encoding!";
    var tab = cmap.tables[tind];
    if (tab.format == 0) {
      if (code >= tab.map.length)
        return 0;
      return tab.map[code];
    } else if (tab.format == 4) {
      var sind = -1;
      for (var i = 0; i < tab.endCount.length; i++)
        if (code <= tab.endCount[i]) {
          sind = i;
          break;
        }
      if (sind == -1)
        return 0;
      if (tab.startCount[sind] > code)
        return 0;
      var gli = 0;
      if (tab.idRangeOffset[sind] != 0)
        gli = tab.glyphIdArray[code - tab.startCount[sind] + (tab.idRangeOffset[sind] >> 1) - (tab.idRangeOffset.length - sind)];
      else
        gli = code + tab.idDelta[sind];
      return gli & 65535;
    } else if (tab.format == 12) {
      if (code > tab.groups[tab.groups.length - 1][1])
        return 0;
      for (var i = 0; i < tab.groups.length; i++) {
        var grp = tab.groups[i];
        if (grp[0] <= code && code <= grp[1])
          return grp[2] + (code - grp[0]);
      }
      return 0;
    } else
      throw "unknown cmap table format " + tab.format;
  };
  Typr.U.glyphToPath = function(font, gid) {
    var path = { cmds: [], crds: [] };
    if (font.SVG && font.SVG.entries[gid]) {
      var p = font.SVG.entries[gid];
      if (p == null)
        return path;
      if (typeof p == "string") {
        p = Typr.SVG.toPath(p);
        font.SVG.entries[gid] = p;
      }
      return p;
    } else if (font.CFF) {
      var state2 = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: font.CFF.Private ? font.CFF.Private.defaultWidthX : 0, open: false };
      Typr.U._drawCFF(font.CFF.CharStrings[gid], state2, font.CFF, path);
    } else if (font.glyf) {
      Typr.U._drawGlyf(gid, font, path);
    }
    return path;
  };
  Typr.U._drawGlyf = function(gid, font, path) {
    var gl = font.glyf[gid];
    if (gl == null)
      gl = font.glyf[gid] = Typr.glyf._parseGlyf(font, gid);
    if (gl != null) {
      if (gl.noc > -1)
        Typr.U._simpleGlyph(gl, path);
      else
        Typr.U._compoGlyph(gl, font, path);
    }
  };
  Typr.U._simpleGlyph = function(gl, p) {
    for (var c = 0; c < gl.noc; c++) {
      var i0 = c == 0 ? 0 : gl.endPts[c - 1] + 1;
      var il = gl.endPts[c];
      for (var i = i0; i <= il; i++) {
        var pr = i == i0 ? il : i - 1;
        var nx = i == il ? i0 : i + 1;
        var onCurve = gl.flags[i] & 1;
        var prOnCurve = gl.flags[pr] & 1;
        var nxOnCurve = gl.flags[nx] & 1;
        var x = gl.xs[i], y = gl.ys[i];
        if (i == i0) {
          if (onCurve) {
            if (prOnCurve)
              Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
            else {
              Typr.U.P.moveTo(p, x, y);
              continue;
            }
          } else {
            if (prOnCurve)
              Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
            else
              Typr.U.P.moveTo(p, (gl.xs[pr] + x) / 2, (gl.ys[pr] + y) / 2);
          }
        }
        if (onCurve) {
          if (prOnCurve)
            Typr.U.P.lineTo(p, x, y);
        } else {
          if (nxOnCurve)
            Typr.U.P.qcurveTo(p, x, y, gl.xs[nx], gl.ys[nx]);
          else
            Typr.U.P.qcurveTo(p, x, y, (x + gl.xs[nx]) / 2, (y + gl.ys[nx]) / 2);
        }
      }
      Typr.U.P.closePath(p);
    }
  };
  Typr.U._compoGlyph = function(gl, font, p) {
    for (var j = 0; j < gl.parts.length; j++) {
      var path = { cmds: [], crds: [] };
      var prt = gl.parts[j];
      Typr.U._drawGlyf(prt.glyphIndex, font, path);
      var m = prt.m;
      for (var i = 0; i < path.crds.length; i += 2) {
        var x = path.crds[i], y = path.crds[i + 1];
        p.crds.push(x * m.a + y * m.b + m.tx);
        p.crds.push(x * m.c + y * m.d + m.ty);
      }
      for (var i = 0; i < path.cmds.length; i++)
        p.cmds.push(path.cmds[i]);
    }
  };
  Typr.U._getGlyphClass = function(g, cd) {
    var intr = Typr._lctf.getInterval(cd, g);
    return intr == -1 ? 0 : cd[intr + 2];
  };
  Typr.U.getPairAdjustment = function(font, g1, g2) {
    if (font.GPOS) {
      var ltab = null;
      for (var i = 0; i < font.GPOS.featureList.length; i++) {
        var fl = font.GPOS.featureList[i];
        if (fl.tag == "kern") {
          for (var j = 0; j < fl.tab.length; j++)
            if (font.GPOS.lookupList[fl.tab[j]].ltype == 2)
              ltab = font.GPOS.lookupList[fl.tab[j]];
        }
      }
      if (ltab) {
        for (var i = 0; i < ltab.tabs.length; i++) {
          var tab = ltab.tabs[i];
          var ind = Typr._lctf.coverageIndex(tab.coverage, g1);
          if (ind == -1)
            continue;
          var adj;
          if (tab.format == 1) {
            var right = tab.pairsets[ind];
            for (var j = 0; j < right.length; j++)
              if (right[j].gid2 == g2)
                adj = right[j];
            if (adj == null)
              continue;
          } else if (tab.format == 2) {
            var c1 = Typr.U._getGlyphClass(g1, tab.classDef1);
            var c2 = Typr.U._getGlyphClass(g2, tab.classDef2);
            var adj = tab.matrix[c1][c2];
          }
          return adj.val1[2];
        }
      }
    }
    if (font.kern) {
      var ind1 = font.kern.glyph1.indexOf(g1);
      if (ind1 != -1) {
        var ind2 = font.kern.rval[ind1].glyph2.indexOf(g2);
        if (ind2 != -1)
          return font.kern.rval[ind1].vals[ind2];
      }
    }
    return 0;
  };
  Typr.U.stringToGlyphs = function(font, str) {
    var gls = [];
    for (var i = 0; i < str.length; i++) {
      var cc = str.codePointAt(i);
      if (cc > 65535)
        i++;
      gls.push(Typr.U.codeToGlyph(font, cc));
    }
    var gsub = font["GSUB"];
    if (gsub == null)
      return gls;
    var llist = gsub.lookupList, flist = gsub.featureList;
    var wsep = '\n	" ,.:;!?()  貙';
    var R2 = "丌兀丐廿丕丞丿匕乇夭賵俦俨俪俚俣俜趫趬趭趮趯趰趲趶趷趹趻趽跀跁跂跅跇跈踿蹆蹌蹍蹎蹏蹐蹓蹔蹕蹗蹚蹝蹞蹠郛郫軔軙軚軛軜軝転塄塥墁墀輱輽輾輿莴莠荼莩荽莞莨唷€唷嗋唷夃唷о々唷ⅹ啖啖⒈啖侧⒐喃呧珖喃夃珚喃庎珡喃愢珣喃掄珴喃∴喃畞喈冟畡喈呧畨喈屶畮喈忇畱喈┼喈";
    var L = "辍侧珝锟?;
    for (var ci = 0; ci < gls.length; ci++) {
      var gl = gls[ci];
      var slft = ci == 0 || wsep.indexOf(str[ci - 1]) != -1;
      var srgt = ci == gls.length - 1 || wsep.indexOf(str[ci + 1]) != -1;
      if (!slft && R2.indexOf(str[ci - 1]) != -1)
        slft = true;
      if (!srgt && R2.indexOf(str[ci]) != -1)
        srgt = true;
      if (!srgt && L.indexOf(str[ci + 1]) != -1)
        srgt = true;
      if (!slft && L.indexOf(str[ci]) != -1)
        slft = true;
      var feat = null;
      if (slft)
        feat = srgt ? "isol" : "init";
      else
        feat = srgt ? "fina" : "medi";
      for (var fi = 0; fi < flist.length; fi++) {
        if (flist[fi].tag != feat)
          continue;
        for (var ti = 0; ti < flist[fi].tab.length; ti++) {
          var tab = llist[flist[fi].tab[ti]];
          if (tab.ltype != 1)
            continue;
          Typr.U._applyType1(gls, ci, tab);
        }
      }
    }
    var cligs = ["rlig", "liga", "mset"];
    for (var ci = 0; ci < gls.length; ci++) {
      var gl = gls[ci];
      var rlim = Math.min(3, gls.length - ci - 1);
      for (var fi = 0; fi < flist.length; fi++) {
        var fl = flist[fi];
        if (cligs.indexOf(fl.tag) == -1)
          continue;
        for (var ti = 0; ti < fl.tab.length; ti++) {
          var tab = llist[fl.tab[ti]];
          for (var j = 0; j < tab.tabs.length; j++) {
            if (tab.tabs[j] == null)
              continue;
            var ind = Typr._lctf.coverageIndex(tab.tabs[j].coverage, gl);
            if (ind == -1)
              continue;
            if (tab.ltype == 4) {
              var vals = tab.tabs[j].vals[ind];
              for (var k = 0; k < vals.length; k++) {
                var lig = vals[k], rl = lig.chain.length;
                if (rl > rlim)
                  continue;
                var good = true;
                for (var l = 0; l < rl; l++)
                  if (lig.chain[l] != gls[ci + (1 + l)])
                    good = false;
                if (!good)
                  continue;
                gls[ci] = lig.nglyph;
                for (var l = 0; l < rl; l++)
                  gls[ci + l + 1] = -1;
              }
            } else if (tab.ltype == 5) {
              var ltab = tab.tabs[j];
              if (ltab.fmt != 2)
                continue;
              var cind = Typr._lctf.getInterval(ltab.cDef, gl);
              var cls = ltab.cDef[cind + 2], scs = ltab.scset[cls];
              for (var i = 0; i < scs.length; i++) {
                var sc = scs[i], inp = sc.input;
                if (inp.length > rlim)
                  continue;
                var good = true;
                for (var l = 0; l < inp.length; l++) {
                  var cind2 = Typr._lctf.getInterval(ltab.cDef, gls[ci + 1 + l]);
                  if (cind == -1 && ltab.cDef[cind2 + 2] != inp[l]) {
                    good = false;
                    break;
                  }
                }
                if (!good)
                  continue;
                var lrs = sc.substLookupRecords;
                for (var k = 0; k < lrs.length; k += 2) {
                  lrs[k];
                  lrs[k + 1];
                }
              }
            }
          }
        }
      }
    }
    return gls;
  };
  Typr.U._applyType1 = function(gls, ci, tab) {
    var gl = gls[ci];
    for (var j = 0; j < tab.tabs.length; j++) {
      var ttab = tab.tabs[j];
      var ind = Typr._lctf.coverageIndex(ttab.coverage, gl);
      if (ind == -1)
        continue;
      if (ttab.fmt == 1)
        gls[ci] = gls[ci] + ttab.delta;
      else
        gls[ci] = ttab.newg[ind];
    }
  };
  Typr.U.glyphsToPath = function(font, gls, clr) {
    var tpath = { cmds: [], crds: [] };
    var x = 0;
    for (var i = 0; i < gls.length; i++) {
      var gid = gls[i];
      if (gid == -1)
        continue;
      var gid2 = i < gls.length - 1 && gls[i + 1] != -1 ? gls[i + 1] : 0;
      var path = Typr.U.glyphToPath(font, gid);
      for (var j = 0; j < path.crds.length; j += 2) {
        tpath.crds.push(path.crds[j] + x);
        tpath.crds.push(path.crds[j + 1]);
      }
      if (clr)
        tpath.cmds.push(clr);
      for (var j = 0; j < path.cmds.length; j++)
        tpath.cmds.push(path.cmds[j]);
      if (clr)
        tpath.cmds.push("X");
      x += font.hmtx.aWidth[gid];
      if (i < gls.length - 1)
        x += Typr.U.getPairAdjustment(font, gid, gid2);
    }
    return tpath;
  };
  Typr.U.pathToSVG = function(path, prec) {
    if (prec == null)
      prec = 5;
    var out = [], co = 0, lmap = { M: 2, L: 2, Q: 4, C: 6 };
    for (var i = 0; i < path.cmds.length; i++) {
      var cmd = path.cmds[i], cn = co + (lmap[cmd] ? lmap[cmd] : 0);
      out.push(cmd);
      while (co < cn) {
        var c = path.crds[co++];
        out.push(parseFloat(c.toFixed(prec)) + (co == cn ? "" : " "));
      }
    }
    return out.join("");
  };
  Typr.U.pathToContext = function(path, ctx) {
    var c = 0, crds = path.crds;
    for (var j = 0; j < path.cmds.length; j++) {
      var cmd = path.cmds[j];
      if (cmd == "M") {
        ctx.moveTo(crds[c], crds[c + 1]);
        c += 2;
      } else if (cmd == "L") {
        ctx.lineTo(crds[c], crds[c + 1]);
        c += 2;
      } else if (cmd == "C") {
        ctx.bezierCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3], crds[c + 4], crds[c + 5]);
        c += 6;
      } else if (cmd == "Q") {
        ctx.quadraticCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3]);
        c += 4;
      } else if (cmd.charAt(0) == "#") {
        ctx.beginPath();
        ctx.fillStyle = cmd;
      } else if (cmd == "Z") {
        ctx.closePath();
      } else if (cmd == "X") {
        ctx.fill();
      }
    }
  };
  Typr.U.P = {};
  Typr.U.P.moveTo = function(p, x, y) {
    p.cmds.push("M");
    p.crds.push(x, y);
  };
  Typr.U.P.lineTo = function(p, x, y) {
    p.cmds.push("L");
    p.crds.push(x, y);
  };
  Typr.U.P.curveTo = function(p, a, b, c, d, e, f) {
    p.cmds.push("C");
    p.crds.push(a, b, c, d, e, f);
  };
  Typr.U.P.qcurveTo = function(p, a, b, c, d) {
    p.cmds.push("Q");
    p.crds.push(a, b, c, d);
  };
  Typr.U.P.closePath = function(p) {
    p.cmds.push("Z");
  };
  Typr.U._drawCFF = function(cmds, state2, font, p) {
    var stack = state2.stack;
    var nStems = state2.nStems, haveWidth = state2.haveWidth, width = state2.width, open = state2.open;
    var i = 0;
    var x = state2.x, y = state2.y, c1x = 0, c1y = 0, c2x = 0, c2y = 0, c3x = 0, c3y = 0, c4x = 0, c4y = 0, jpx = 0, jpy = 0;
    var o = { val: 0, size: 0 };
    while (i < cmds.length) {
      Typr.CFF.getCharString(cmds, i, o);
      var v = o.val;
      i += o.size;
      if (v == "o1" || v == "o18") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
      } else if (v == "o3" || v == "o23") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
      } else if (v == "o4") {
        if (stack.length > 1 && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
          haveWidth = true;
        }
        if (open)
          Typr.U.P.closePath(p);
        y += stack.pop();
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o5") {
        while (stack.length > 0) {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o6" || v == "o7") {
        var count = stack.length;
        var isX = v == "o6";
        for (var j = 0; j < count; j++) {
          var sval = stack.shift();
          if (isX)
            x += sval;
          else
            y += sval;
          isX = !isX;
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o8" || v == "o24") {
        var count = stack.length;
        var index = 0;
        while (index + 6 <= count) {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
          index += 6;
        }
        if (v == "o24") {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o11")
        break;
      else if (v == "o1234" || v == "o1235" || v == "o1236" || v == "o1237") {
        if (v == "o1234") {
          c1x = x + stack.shift();
          c1y = y;
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y;
          c3x = jpx + stack.shift();
          c3y = c2y;
          c4x = c3x + stack.shift();
          c4y = y;
          x = c4x + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1235") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y + stack.shift();
          c3x = jpx + stack.shift();
          c3y = jpy + stack.shift();
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          x = c4x + stack.shift();
          y = c4y + stack.shift();
          stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1236") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y;
          c3x = jpx + stack.shift();
          c3y = c2y;
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          x = c4x + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1237") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y + stack.shift();
          c3x = jpx + stack.shift();
          c3y = jpy + stack.shift();
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          if (Math.abs(c4x - x) > Math.abs(c4y - y)) {
            x = c4x + stack.shift();
          } else {
            y = c4y + stack.shift();
          }
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
      } else if (v == "o14") {
        if (stack.length > 0 && !haveWidth) {
          width = stack.shift() + font.nominalWidthX;
          haveWidth = true;
        }
        if (stack.length == 4) {
          var adx = stack.shift();
          var ady = stack.shift();
          var bchar = stack.shift();
          var achar = stack.shift();
          var bind = Typr.CFF.glyphBySE(font, bchar);
          var aind = Typr.CFF.glyphBySE(font, achar);
          Typr.U._drawCFF(font.CharStrings[bind], state2, font, p);
          state2.x = adx;
          state2.y = ady;
          Typr.U._drawCFF(font.CharStrings[aind], state2, font, p);
        }
        if (open) {
          Typr.U.P.closePath(p);
          open = false;
        }
      } else if (v == "o19" || v == "o20") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
        i += nStems + 7 >> 3;
      } else if (v == "o21") {
        if (stack.length > 2 && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
          haveWidth = true;
        }
        y += stack.pop();
        x += stack.pop();
        if (open)
          Typr.U.P.closePath(p);
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o22") {
        if (stack.length > 1 && !haveWidth) {
          width = stack.shift() + font.Private.nominalWidthX;
          haveWidth = true;
        }
        x += stack.pop();
        if (open)
          Typr.U.P.closePath(p);
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o25") {
        while (stack.length > 6) {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
        c1x = x + stack.shift();
        c1y = y + stack.shift();
        c2x = c1x + stack.shift();
        c2y = c1y + stack.shift();
        x = c2x + stack.shift();
        y = c2y + stack.shift();
        Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
      } else if (v == "o26") {
        if (stack.length % 2) {
          x += stack.shift();
        }
        while (stack.length > 0) {
          c1x = x;
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x;
          y = c2y + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        }
      } else if (v == "o27") {
        if (stack.length % 2) {
          y += stack.shift();
        }
        while (stack.length > 0) {
          c1x = x + stack.shift();
          c1y = y;
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y;
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        }
      } else if (v == "o10" || v == "o29") {
        var obj = v == "o10" ? font.Private : font;
        if (stack.length == 0) {
          console.log("error: empty stack");
        } else {
          var ind = stack.pop();
          var subr = obj.Subrs[ind + obj.Bias];
          state2.x = x;
          state2.y = y;
          state2.nStems = nStems;
          state2.haveWidth = haveWidth;
          state2.width = width;
          state2.open = open;
          Typr.U._drawCFF(subr, state2, font, p);
          x = state2.x;
          y = state2.y;
          nStems = state2.nStems;
          haveWidth = state2.haveWidth;
          width = state2.width;
          open = state2.open;
        }
      } else if (v == "o30" || v == "o31") {
        var count, count1 = stack.length;
        var index = 0;
        var alternate = v == "o31";
        count = count1 & ~2;
        index += count1 - count;
        while (index < count) {
          if (alternate) {
            c1x = x + stack.shift();
            c1y = y;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            y = c2y + stack.shift();
            if (count - index == 5) {
              x = c2x + stack.shift();
              index++;
            } else
              x = c2x;
            alternate = false;
          } else {
            c1x = x;
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            if (count - index == 5) {
              y = c2y + stack.shift();
              index++;
            } else
              y = c2y;
            alternate = true;
          }
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
          index += 4;
        }
      } else if ((v + "").charAt(0) == "o") {
        console.log("Unknown operation: " + v, cmds);
        throw v;
      } else
        stack.push(v);
    }
    state2.x = x;
    state2.y = y;
    state2.nStems = nStems;
    state2.haveWidth = haveWidth;
    state2.width = width;
    state2.open = open;
  };
  var typr_js = Typr;
  try {
    top.typrMapping = top.typrMapping || void 0;
    top.jobs = top.jobs || [];
    top.currentMedia = top.currentMedia || void 0;
  } catch {
  }
  const state$3 = {
    study: {
      videojs: /* @__PURE__ */ Object.create({}),
      hacked: false,
      answererWrapperUnsetMessage: void 0,
      playbackRateWarningListenerId: 0
    }
  };
  const CXProject = lib.Project.create({
    name: "瓒呮槦瀛︿範锟?,
    domains: [
      "chaoxing.com",
      "edu.cn",
      "org.cn",
      "xueyinonline.com",
      "hnsyu.net",
      "qutjxjy.cn",
      "ynny.cn",
      "hnvist.cn",
      "fjlecb.cn",
      "gdhkmooc.com",
      "cugbonline.cn",
      "zjelib.cn",
      "cqrspx.cn",
      "neauce.com",
      "zhihui-yun.com",
      "cqie.cn",
      "ccqmxx.com",
      "jxgmxy.com",
      "sslibrary.com"
    ],
    scripts: {
      env: new lib.Script({
        name: "鐜鍑嗗鑴氭湰",
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        hideInPanel: true,
        onstart() {
          let top2 = window.top;
          try {
            let _self = lib.$gm.unsafeWindow;
            let _try_count = 10;
            while (_self.parent !== void 0 && _try_count > 0) {
              if (_self.location.href.includes("/mycourse/studentstudy")) {
                top2 = _self;
                console.log("[ocsjs] top change to :" + top2.location.href);
                break;
              } else {
                _try_count--;
                _self = _self.parent;
              }
            }
          } catch (e) {
            console.warn("[ocsjs] fail of find top");
            console.warn(e);
            top2 = window.top;
          }
        }
      }),
      guide: new lib.Script({
        name: "馃挕 浣跨敤鎻愮ず",
        matches: [
          ["棣栭〉", "https://www.chaoxing.com"],
          ["鏃х増涓汉棣栭〉", "chaoxing.com/space/index"],
          ["鏂扮増涓汉棣栭〉", "chaoxing.com/base"],
          ["瀛︿範椤甸潰", "chaoxing.com/mycourse"],
          ["鏂扮増瀛︿範椤甸潰", "chaoxing.com/mooc2-ans/mycourse"]
        ],
        namespace: "cx.guide",
        configs: {
          notes: {
            defaultValue: `璇锋墜鍔ㄨ繘鍏ヨ棰戙€佷綔涓氥€佽€冭瘯椤甸潰锛岃剼鏈細鑷姩杩愯銆俙
          }
        },
        oncomplete() {
          if (["mycourse/studentstudy"].some((path) => location.href.includes(path))) {
            lib.$message.success("宸茶繘鍏ュ涔犻〉闈紝璇风瓑寰呰嚜鍔ㄨ繍锟?..");
            return;
          }
          lib.$message.info("璇锋墜鍔ㄨ繘鍏ヨ棰戙€佷綔涓氥€佽€冭瘯椤甸潰锛岃剼鏈細鑷姩杩愯锟?);
        }
      }),
      study: new lib.Script({
        name: "馃枼锟?璇剧▼瀛︿範",
        namespace: "cx.new.study",
        matches: [
          ["浠诲姟鐐归〉锟?, "/knowledge/cards"],
          ["闃呰浠诲姟锟?, "/readsvr/book/mooc"]
        ],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              ["浠诲姟鐐逛笉鏄『搴忔墽琛岋紝濡傛灉鏌愪竴涓换鍔℃病鏈夊姩", "璇锋煡鐪嬫槸鍚︽湁鍏朵粬浠诲姟姝ｅ湪瀛︿範锛岃€愬績绛夊緟鍗冲彲锟?],
              "闂叧妯″紡璇锋敞鎰忛搴撳鏋滄病瀹屾垚锛岄渶瑕佽嚜宸卞畬鎴愭墠鑳借В閿佺珷鑺傦拷?,
              "璇峰嬁鍑屾櫒鍒疯锛岄儴鍒嗗鏍¤绋嬪彲鑳戒細娓呯┖杩涘害锟?,
              ["鈿狅笍鐩墠瓒呮槦鍊嶉€熼鎺т弗閲嶏紝濡傛灉楂樺€嶏拷?, "瀹屾垚鍚庤娓呯┖杩樺師锛岃璋冨埌1-2鍊嶉€熷涔狅紒"]
            ]).outerHTML
          },
          playbackRate,
          volume,
          videoQuizStrategy: {
            label: "瑙嗛鍐呴锟?,
            tag: "select",
            options: [
              ["random", "闅忔満绛旈"],
              ["ignore", "蹇界暐"]
            ],
            attrs: {
              title: "瑙嗛鏈夋椂鍦ㄥ涔犺繃绋嬩腑浼氬脊鍑洪鐩紝杩欎釜濂藉儚骞朵笉璁＄畻鍦ㄥ垎鏁板唴锛屾墍浠ュ彲浠ュ拷鐣ワ紝瑙嗛鍙互姝ｅ父瑙傜湅锛岃繖閲屾彁渚涘嚑涓柟娉曞鐞嗛锟?
            },
            defaultValue: "random"
          },
          mode: {
            label: "璺宠浆妯″紡",
            tag: "select",
            options: [
              ["next", "瀹屾垚鍚庤烦杞笅涓€锟?, "瀹屾垚灏忚妭鍚庯紝鑷姩鐐瑰嚮涓嬩竴鑺傛寜锟?],
              ["job", "瀹屾垚鍚庤烦杞湭瀹屾垚浠诲姟锟?, "濡傛灉鏈壘鍒颁换鍔＄偣锛屽垯浼氱洿鎺ョ粨鏉熻剼鏈繍琛岋紝鐩墠澶勪簬璇曢獙闃舵锟?],
              ["manually", "瀹屾垚鍚庢殏鍋滐紝绛夊緟鎵嬪姩璺宠浆", "閫傜敤浜庤嚜宸辨墜鍔ㄨ繍锟?]
            ],
            defaultValue: "next"
          },
          restudy: {
            label: "澶嶄範妯″紡",
            attrs: { title: "宸茬粡瀹屾垚鐨勮棰戠户缁涔狅紝骞朵粠褰撳墠鐨勭珷鑺傚線涓嬪紑濮嬪锟?, type: "checkbox" },
            defaultValue: false
          },
          forceLearn: {
            label: "寮哄埗瀛︿範",
            attrs: {
              title: "瑙嗛涓€鑸垎涓猴細闈炰换鍔＄偣銆佷换鍔＄偣銆佸拰宸插畬鎴愪换鍔＄偣锛屽綋閬囧埌鈥滈潪浠诲姟鐐光€濇椂闇€瑕佸紑鍚閫夐」鎵嶄細杩涜瀛︿範",
              type: "checkbox"
            },
            defaultValue: false
          },
          backToFirstWhenFinish: {
            label: "瀹屾垚鍏ㄩ儴鍚庨噸鏂板锟?,
            attrs: {
              type: "checkbox",
              title: "褰撶珷鑺傚凡缁忓涔犲畬鎴愯嚦鏈€鍚庝竴绔犳椂锛岃烦杞埌绗竴涓珷鑺傞噸鏂板紑濮嬪涔狅拷?
            },
            defaultValue: false
          },
          showTextareaWhenEdit: {
            label: "缂栬緫鏃舵樉绀鸿嚜瀹氫箟缂栬緫锟?,
            attrs: {
              type: "checkbox",
              title: "瓒呮槦榛樿绂佹鍦ㄧ紪杈戞涓鍒剁矘璐达紝寮€鍚閫夐」鍙互鍦ㄦ枃鏈缂栬緫鏃剁敓鎴愪竴涓嚜瀹氫箟缂栬緫妗嗚繘琛岀紪杈戯紝鑴氭湰浼氬皢鍐呭鍚屾鍒扮紪杈戞涓拷?
            },
            defaultValue: true
          },
          notifyWhenHasFaceRecognition: {
            label: "鍑虹幇浜鸿劯璇嗗埆鏃堕€氱煡锟?,
            attrs: {
              type: "checkbox"
            },
            defaultValue: true
          },
          enables: {
            ...dropdownStyle,
            label: "楂樼骇璁剧疆",
            attrs: { type: "checkbox" },
            defaultValue: false
          },
          enableMedia: {
            elementClassName: "config-details",
            showIf: "cx.new.study.enables",
            label: "瑙嗛/闊抽鑷姩鎾斁",
            attrs: { type: "checkbox", title: "寮€鍚細闊抽鍜岃棰戠殑鑷姩鎾斁" },
            defaultValue: true
          },
          enablePPT: {
            elementClassName: "config-details",
            showIf: "cx.new.study.enables",
            label: "PPT/涔︾睄鑷姩瀹屾垚",
            attrs: { type: "checkbox", title: "寮€鍚細PPT/涔︾睄鑷姩缈婚槄" },
            defaultValue: true
          },
          enableChapterTest: {
            elementClassName: "config-details",
            showIf: "cx.new.study.enables",
            label: "绔犺妭娴嬭瘯鑷姩绛旈",
            attrs: { type: "checkbox", title: "寮€鍚細绔犺妭娴嬭瘯鑷姩绛旈" },
            defaultValue: true
          },
          enableHyperlink: {
            elementClassName: "config-details",
            showIf: "cx.new.study.enables",
            label: "閾炬帴浠诲姟鑷姩瀹屾垚",
            attrs: { type: "checkbox", title: "寮€鍚細閾炬帴浠诲姟鑷姩瀹屾垚" },
            defaultValue: true
          }
        },
        onrender({ panel }) {
          var _a;
          if (!((_a = CommonProject.scripts.settings.cfg.answererWrappers) == null ? void 0 : _a.length)) {
            answerWrapperEmptyWarning(10);
          }
          this.offConfigChange(state$3.study.playbackRateWarningListenerId);
          state$3.study.playbackRateWarningListenerId = this.onConfigChange("playbackRate", (playbackRate2) => {
            if (playbackRate2 > 2) {
              lib.$modal.alert({
                title: "鈿狅笍楂樺€嶉€熻锟?,
                content: lib.$ui.notes([
                  "鈿狅笍楂樺€嶉€熷彲鑳藉鑷村涔犺褰曟竻锟?鍥為€€",
                  "鈿狅笍瓒呮槦鍚庡彴鍙互鐪嬪埌瀛︿範鏃堕暱锛岃璋ㄦ厧璁剧疆",
                  "鈿狅笍濡傚凡娓呯┖/鍥為€€锛岃闄嶄綆鍊嶉€熻嚦1-2锟?
                ]),
                maskCloseable: false,
                confirmButtonText: "鎴戝凡鐭ユ檽椋庨櫓"
              });
            }
          }) || 0;
        },
        async oncomplete() {
          if (/\/readsvr\/book\/mooc/.test(location.href)) {
            $console.log("姝ｅ湪瀹屾垚涔︾睄/PPT...");
            setTimeout(() => {
              readweb.goto(epage);
            }, 5e3);
            return;
          }
          if (/\/knowledge\/cards/.test(location.href)) {
            const updateMediaState = () => {
              if (top.currentMedia) {
                top.currentMedia.playbackRate = parseFloat(this.cfg.playbackRate.toString());
                top.currentMedia.volume = this.cfg.volume;
              }
            };
            this.onConfigChange("playbackRate", updateMediaState);
            this.onConfigChange("volume", updateMediaState);
            await study({
              ...this.cfg,
              playbackRate: parseFloat(this.cfg.playbackRate.toString()),
              workOptions: CommonProject.scripts.settings.methods.getWorkOptions()
            });
          }
        }
      }),
      work: new lib.Script({
        name: "鉁嶏笍 浣滀笟鑰冭瘯鑴氭湰",
        matches: [
          ["浣滀笟椤甸潰", "/mooc2/work/dowork"],
          ["鑰冭瘯鏁村嵎棰勮椤甸潰", "/mooc2/exam/preview"]
        ],
        namespace: "cx.new.work",
        configs: { notes: workNotes },
        async oncomplete() {
          const isExam2 = /\/exam\/preview/.test(location.href);
          commonWork(this, {
            workerProvider: (opts) => workOrExam$1(isExam2 ? "exam" : "work", { ...opts, preview_mode: true }),
            enable_control_panel: true
          });
        }
      }),
      autoRead: new lib.Script({
        name: "馃枼锟?鑷姩闃呰",
        matches: [
          ["闃呰椤甸潰", "/ztnodedetailcontroller/visitnodedetail"],
          ["璇剧▼鐩綍", /chaoxing.com\/course\/\d+\.html/],
          ["璇剧▼鐩綍", /chaoxing.com\/mooc-ans\/course\/\d+\.html/]
        ],
        namespace: "cx.new.auto-read",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["闃呰浠诲姟娆℃棩鎵嶄細缁熻闃呰鏃堕暱"]).outerHTML
          },
          restartAfterFinish: {
            label: "鏃犻檺闃呰",
            attrs: { type: "checkbox", title: "闃呰瀹屾垚鏈€鍚庝竴绔犲悗浠庡ご绗竴绔犵户缁槄锟? },
            defaultValue: false
          }
        },
        oncomplete() {
          if (location.href.includes("/ztnodedetailcontroller/visitnodedetail") === false) {
            startAtFirst();
            return;
          }
          let top2 = 0;
          const interval = setInterval(() => {
            top2 += (document.documentElement.scrollHeight - window.innerHeight) / 60;
            window.scrollTo({
              behavior: "smooth",
              top: top2
            });
          }, 1e3);
          setTimeout(() => {
            clearInterval(interval);
            const next2 = lib.$el(".nodeItem.r i");
            if (next2) {
              next2.click();
            } else {
              if (this.cfg.restartAfterFinish) {
                setTimeout(() => startAtFirst(), 3e3);
                lib.$message.info({ content: "鍗冲皢閲嶆柊浠庡ご寮€濮嬮槄锟?, duration: 10 });
                $console.log("鍗冲皢閲嶆柊浠庡ご寮€濮嬮槄锟?);
              } else {
                lib.$message.success({ content: "闃呰浠诲姟宸插畬锟?, duration: 0 });
                $console.log("鏈娴嬪埌涓嬩竴锟?);
              }
            }
          }, (60 + 3) * 1e3);
          function startAtFirst() {
            const texts = lib.$$el(".course_section .chapterText");
            if (texts.length) {
              texts[0].click();
            }
          }
        }
      }),
      pageRedirect: new lib.Script({
        name: "绔犺妭椤甸潰鑷姩鍒囨崲鑴氭湰",
        matches: [["璇剧▼浠诲姟椤甸潰", "pageHeader=0"]],
        hideInPanel: true,
        async oncomplete() {
          if (top === window) {
            const a = document.querySelector('a[title="绔犺妭"]');
            if (a) {
              await $.sleep(1e3);
              a.click();
              lib.$message.info({
                content: "宸茬粡涓烘偍鑷姩鍒囨崲鍒扮珷鑺傚垪琛ㄩ〉闈紝鎵嬪姩杩涘叆浠绘剰绔犺妭鍗冲彲寮€濮嬭嚜鍔ㄥ涔狅紒"
              });
            }
          }
        }
      }),
      versionRedirect: new lib.Script({
        name: "鐗堟湰鍒囨崲鑴氭湰",
        matches: [
          ["", "mooc2=0"],
          ["", "mycourse/studentcourse"],
          ["", "work/getAllWork"],
          ["", "work/doHomeWorkNew"],
          ["", "exam/test\\?"],
          ["", "mooc-ans/mycourse/studentstudy"]
        ],
        hideInPanel: true,
        async oncomplete() {
          if (top === window) {
            lib.$message.warn({
              content: "OCS缃戣鍔╂墜涓嶆敮鎸佹棫鐗堣秴锟? 鍗冲皢鍒囨崲鍒拌秴鏄熸柊锟? 濡傛湁鍏朵粬绗笁鏂规彃浠惰鍏抽棴, 鍙兘鏈夊吋瀹归棶棰樺鑷撮绻佸垏鎹拷?,
              duration: 0
            });
            await $.sleep(2e3);
            await waitForFaceRecognition();
            const experience = document.querySelector(".experience");
            if (experience) {
              experience.click();
            } else {
              const newUrl = new URL(window.location.href);
              if (window.location.href.includes("mooc-ans/mycourse/studentstudy")) {
                newUrl.pathname = "/mycourse/studentstudy";
              }
              const params = newUrl.searchParams;
              let changed = false;
              if (params.get("mooc2") !== "1") {
                params.set("mooc2", "1");
                changed = true;
              }
              if (params.get("newMooc") !== "true") {
                params.set("newMooc", "true");
                changed = true;
              }
              if (changed)
                window.location.replace(newUrl);
            }
          }
        }
      }),
      examRedirect: new lib.Script({
        name: "鑰冭瘯鏁村嵎棰勮鑴氭湰",
        matches: [
          ["鏂扮増鑰冭瘯椤甸潰", "exam-ans/exam/test/reVersionTestStartNew"],
          ["鏂扮増鑰冭瘯椤甸潰2", "mooc-ans/exam/test/reVersionTestStartNew"]
        ],
        hideInPanel: true,
        oncomplete() {
          var _a, _b;
          if ((_b = (_a = lib.$gm.unsafeWindow.document.querySelector(".mark_info")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.includes("涓嶅厑璁告暣鍗烽锟?)) {
            lib.$message.warn({
              content: lib.$ui.notes([
                "鐢变簬褰撳墠鑰冭瘯绂佹鏁村嵎棰勮锛屽悇棰樹负鐙珛鏂伴〉闈紝鍙兘涓€涓釜绛旈",
                "鍦ㄨ€冨畬鍓嶇姝㈡墜鍔ㄥ垏鎹㈤鐩紝鍚﹀垯浼氬鑷撮噸澶嶇瓟棰橈紒",
                "瀹屾垚鍚庢垨鑰呭紑鑰冨墠璇锋墜鍔ㄥ垹闄ゆ悳绱㈢粨鏋滐紒",
                "鎯冲姞蹇€熷害璇锋洿鏀归€氱敤-鍏ㄥ眬璁剧疆-楂樼骇璁剧疆-鎼滈闂撮殧锛岃缃负 1-3 绉掑嵆鍙拷?
              ]),
              duration: 0
            });
            const isExam2 = /\/exam\/test/.test(location.href);
            const workOptions = CommonProject.scripts.settings.methods.getWorkOptions();
            commonWork(CXProject.scripts.work, {
              start_delay_seconds: workOptions.period,
              enable_control_panel: true,
              workerProvider: (opts) => workOrExam$1(isExam2 ? "exam" : "work", { ...opts, preview_mode: false, thread: 1 })
            });
            return;
          }
          lib.$message.info({ content: "鍗冲皢璺宠浆鍒版暣鍗烽瑙堥〉闈㈣繘琛岃€冭瘯锟? });
          setTimeout(() => lib.$gm.unsafeWindow.topreview(), 3e3);
        }
      }),
      rateHack: new lib.Script({
        name: "灞忚斀鍊嶉€熼檺锟?,
        hideInPanel: true,
        matches: [["", "/ananas/modules/video/"]],
        onstart() {
          rateHack();
        }
      }),
      copyHack: new lib.Script({
        name: "灞忚斀澶嶅埗绮樿创闄愬埗",
        hideInPanel: true,
        matches: [["鎵€鏈夐〉锟?, /.*/]],
        methods() {
          return {
            hackEditorPaste() {
              var _a, _b;
              try {
                const instants = ((_b = (_a = lib.$gm.unsafeWindow) == null ? void 0 : _a.UE) == null ? void 0 : _b.instants) || [];
                for (const key in instants) {
                  const ue = instants[key];
                  if (ue == null ? void 0 : ue.textarea) {
                    ue.body.addEventListener("click", async () => {
                      if (CXProject.scripts.study.cfg.showTextareaWhenEdit) {
                        const defaultText = lib.h("span", { innerHTML: ue.textarea.value }).textContent;
                        lib.$modal.prompt({
                          content: "璇峰湪姝ゆ枃鏈杩涜缂栬緫锛岄槻姝㈣秴鏄熸棤娉曞鍒剁矘璐达拷?濡傞渶鍏抽棴璇峰墠寰€璁剧疆: 璇剧▼瀛︿範-缂栬緫鏃舵樉绀鸿嚜瀹氫箟缂栬緫锟?",
                          width: 800,
                          inputDefaultValue: defaultText || "",
                          modalInputType: "textarea",
                          onConfirm: (val = "") => {
                            ue.setContent(
                              val.split("\n").map((line) => `<p>${line}</p>`).join("")
                            );
                          }
                        });
                      }
                    });
                    if (lib.$gm.unsafeWindow.editorPaste) {
                      ue.removeListener("beforepaste", lib.$gm.unsafeWindow.editorPaste);
                    }
                    if (lib.$gm.unsafeWindow.myEditor_paste) {
                      ue.removeListener("beforepaste", lib.$gm.unsafeWindow.myEditor_paste);
                    }
                  }
                }
              } catch {
              }
            }
          };
        },
        oncomplete() {
          const hackInterval = setInterval(() => {
            if (typeof lib.$gm.unsafeWindow.UE !== "undefined") {
              clearInterval(hackInterval);
              this.methods.hackEditorPaste();
              console.log("宸茶В闄よ緭鍏ユ鏃犳硶澶嶅埗绮樿创闄愬埗");
            }
          }, 500);
        }
      }),
      studyDispatcher: new lib.Script({
        name: "璇剧▼瀛︿範璋冨害锟?,
        matches: [["璇剧▼瀛︿範椤甸潰", "/mycourse/studentstudy"]],
        namespace: "cx.new.study-dispatcher",
        hideInPanel: true,
        async oncomplete() {
          const restudy2 = CXProject.scripts.study.cfg.restudy;
          CommonProject.scripts.render.methods.pin(CXProject.scripts.study);
          let chapters = await CXAnalyses.waitForChapterInfos();
          if (!restudy2) {
            const params = new URLSearchParams(window.location.href);
            const mooc = params.get("mooc2");
            if (mooc === null) {
              params.set("mooc2", "1");
              window.location.replace(decodeURIComponent(params.toString()));
              return;
            }
            if (!CXProject.scripts.study.cfg.forceLearn) {
              chapters = chapters.filter((chapter) => chapter.unFinishCount !== 0);
            }
            if (chapters.length === 0) {
              lib.$message.warn({ content: "椤甸潰浠诲姟鐐规暟閲忎负锟? 璇峰埛鏂伴噸锟?" });
            } else {
              const params2 = new URLSearchParams(window.location.href);
              const courseId = params2.get("courseId");
              const classId = params2.get("clazzid");
              setTimeout(() => {
                if (lib.$$el(`.posCatalog_active[id="cur${chapters[0].chapterId}"]`).length === 0) {
                  lib.$gm.unsafeWindow.getTeacherAjax(courseId, classId, chapters[0].chapterId);
                  setTimeout(() => {
                    CXAnalyses.scrollToActiveChapter();
                  }, 1e3);
                }
              }, 1e3);
            }
          } else {
            setTimeout(() => {
              CXAnalyses.scrollToActiveChapter();
            }, 1e3);
          }
        }
      }),
      cxSecretFontRecognize: new lib.Script({
        name: "绻佷綋瀛楄瘑锟?,
        hideInPanel: true,
        matches: [
          ["棰樼洰椤甸潰", "work/doHomeWorkNew"],
          ["鑰冭瘯鏁村嵎棰勮", "/mooc2/exam/preview"],
          ["浣滀笟", "/mooc2/work/dowork"]
        ],
        async oncomplete() {
          await mappingRecognize();
        }
      }),
      jfkGuide: new lib.Script({
        name: "馃挕 绉垎璇句娇鐢ㄦ彁锟?,
        matches: [["绉垎璇鹃〉锟?, "/plaza"]],
        namespace: "cx.jfk.guide",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "绉垎璇捐杩涘叆璇剧▼鍚庯紝寮€鍚涔犳ā寮忥紝骞朵笖鍏抽棴鑷姩涓嬩竴锟?,
              "璇剧▼瀹屾垚鍚庤鎵嬪姩鍒囨崲锛屽鏋滅敱鑴氭湰杩涜鑷姩璺宠浆浼氬嚭鐜颁贡璺宠浆鐨勫彲鑳斤拷?
            ]).outerHTML
          }
        },
        oncomplete(...args) {
          CommonProject.scripts.render.methods.pin(this);
        }
      })
    }
  });
  function workOrExam$1(type = "work", {
    answererWrappers,
    period,
    thread,
    redundanceWordsText,
    answerSeparators,
    answerMatchMode,
    preview_mode
  }) {
    lib.$message.info(`寮€锟?{type === "work" ? "浣滀笟" : "鑰冭瘯"}`);
    if (preview_mode) {
      CommonProject.scripts.workResults.methods.init({
        questionPositionSyncHandlerType: "cx"
      });
    }
    const workOrExamQuestionTitleTransform = (titles) => {
      const optimizationTitle = titles.map((titleElement) => {
        if (titleElement) {
          const titleCloneEl = titleElement.cloneNode(true);
          const childNodes = titleCloneEl.childNodes;
          childNodes[0].remove();
          childNodes[0].remove();
          return optimizationElementWithImage(titleCloneEl, true).innerText;
        }
        return "";
      }).join(",");
      return removeRedundantWords(
        StringUtils.of(optimizationTitle).nowrap(" ").nospace().toString().trim(),
        redundanceWordsText.split("\n")
      );
    };
    const worker = new OCSWorker({
      root: ".questionLi",
      elements: {
        title: [
          (root2) => lib.$el("h3", root2)
        ],
        options: ".answerBg .answer_p, .textDIV, .eidtDiv",
        type: type === "exam" ? 'input[name^="type"]' : 'input[id^="answertype"]',
        lineAnswerInput: ".line_answer input[name^=answer]",
        lineSelectBox: ".line_answer_ct .selectBox ",
        reading: ".reading_answer",
        filling: ".filling_answer"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        if (elements2.title) {
          const title = workOrExamQuestionTitleTransform(elements2.title);
          if (title) {
            const typeInput = elements2.type[0];
            return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
              await $.sleep((period != null ? period : 3) * 1e3);
              return defaultAnswerWrapperHandler(answererWrappers, {
                type: (typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0) || "unknown",
                title,
                options: ctx.type === "completion" ? "" : ctx.elements.options.map((o) => optimizationElementWithImage(o, true).innerText).join("\n"),
                optionsArray: ctx.type === "completion" ? [] : ctx.elements.options.map((o) => optimizationElementWithImage(o, true).innerText)
              });
            });
          } else {
            throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
          }
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: async (ctx) => {
        var _a;
        const { elements: elements2, searchInfos } = ctx;
        const typeInput = elements2.type[0];
        const type2 = getQuestionType(parseInt(typeInput.value));
        if (type2 && (type2 === "completion" || type2 === "multiple" || type2 === "judgement" || type2 === "single")) {
          const resolver = createDefaultQuestionResolver(ctx)[type2];
          return await resolver(
            searchInfos,
            elements2.options.map((option) => optimizationElementWithImage(option)),
            async (type3, answer, option) => {
              var _a2, _b, _c;
              if (type3 === "judgement" || type3 === "single" || type3 === "multiple") {
                if ((option == null ? void 0 : option.parentElement) && lib.$$el('[class*="check_answer"]', option.parentElement).length === 0) {
                  option.click();
                  await $.sleep(500);
                }
              } else if (type3 === "completion" && answer.trim()) {
                const text = option == null ? void 0 : option.querySelector("textarea");
                const textareaFrame = option == null ? void 0 : option.querySelector("iframe");
                if (text) {
                  text.value = answer;
                }
                if (textareaFrame == null ? void 0 : textareaFrame.contentDocument) {
                  textareaFrame.contentDocument.body.innerHTML = answer;
                }
                if ((_a2 = option == null ? void 0 : option.parentElement) == null ? void 0 : _a2.parentElement) {
                  (_c = lib.$el("[onclick*=saveQuestion]", (_b = option == null ? void 0 : option.parentElement) == null ? void 0 : _b.parentElement)) == null ? void 0 : _c.click();
                  await $.sleep(500);
                }
              }
            }
          );
        } else if (type2 && type2 === "line") {
          for (const answers of searchInfos.map((info) => info.results.map((res) => res.answer))) {
            let ans = answers;
            if (ans.length === 1) {
              ans = splitAnswer(ans[0]);
            }
            if (ans.filter(Boolean).length !== 0 && elements2.lineAnswerInput) {
              for (let index = 0; index < elements2.lineSelectBox.length; index++) {
                const box = elements2.lineSelectBox[index];
                if (ans[index]) {
                  (_a = lib.$el(`li[data=${ans[index]}] a`, box)) == null ? void 0 : _a.click();
                  await $.sleep(200);
                }
              }
              return { finish: true };
            }
          }
          return { finish: false };
        } else if (type2 && type2 === "fill") {
          return readerAndFillHandle(searchInfos, elements2.filling);
        } else if (type2 && type2 === "reader") {
          return readerAndFillHandle(searchInfos, elements2.reading);
        }
        return { finish: false };
      },
      async onResultsUpdate(current, _, res) {
        var _a, _b;
        if (!preview_mode) {
          if ((_a = current.result) == null ? void 0 : _a.finish) {
            await CommonProject.scripts.workResults.methods.appendResults(
              simplifyWorkResult(res, workOrExamQuestionTitleTransform)
            );
            CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
              simplifyWorkResult([current], workOrExamQuestionTitleTransform)
            );
          }
          return;
        }
        CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, workOrExamQuestionTitleTransform));
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
        if ((_b = current.result) == null ? void 0 : _b.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
            simplifyWorkResult([current], workOrExamQuestionTitleTransform)
          );
        }
      }
    });
    if (preview_mode) {
      worker.doWork().then(() => {
        lib.$message.info({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: 0 });
        worker.emit("done");
      }).catch((err) => {
        console.error(err);
        lib.$message.error("绛旈绋嬪簭鍙戠敓閿欒 : " + err.message);
      });
    } else {
      const getNextBtn = () => document.querySelector('[onclick="getTheNextQuestion(1)"]');
      let next2 = getNextBtn();
      (async () => {
        while (next2 && worker.isClose === false) {
          await worker.doWork({ enable_debug: true });
          await $.sleep(1e3);
          next2 = getNextBtn();
          next2 == null ? void 0 : next2.click();
          await $.sleep(1e3);
        }
        lib.$message.success({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: 0 });
        worker.emit("done");
        CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "cx";
      })();
    }
    return worker;
  }
  async function mappingRecognize(doc = document) {
    var _a, _b;
    let typrMapping = /* @__PURE__ */ Object.create({});
    try {
      top.typrMapping = top.typrMapping || await loadTyprMapping();
      typrMapping = top.typrMapping;
    } catch {
      typrMapping = await loadTyprMapping();
    }
    const fontFaceEl = Array.from(doc.head.querySelectorAll("style")).find(
      (style) => {
        var _a2;
        return (_a2 = style.textContent) == null ? void 0 : _a2.includes("font-cxsecret");
      }
    );
    const base64ToUint8Array = (base64) => {
      const data = window.atob(base64);
      const buffer = new Uint8Array(data.length);
      for (let i = 0; i < data.length; ++i) {
        buffer[i] = data.charCodeAt(i);
      }
      return buffer;
    };
    const fontMap = typrMapping;
    if (fontFaceEl && Object.keys(fontMap).length > 0) {
      const font = (_b = (_a = fontFaceEl.textContent) == null ? void 0 : _a.match(/base64,([\w\W]+?)'/)) == null ? void 0 : _b[1];
      if (font) {
        $console.log("姝ｅ湪璇嗗埆绻佷綋锟?);
        const code = typr_js.parse(base64ToUint8Array(font));
        const match = {};
        for (let i = 19968; i < 40870; i++) {
          const Glyph = typr_js.U.codeToGlyph(code, i);
          if (!Glyph)
            continue;
          const path = typr_js.U.glyphToPath(code, Glyph);
          const hex = md5(JSON.stringify(path)).slice(24);
          match[i.toString()] = fontMap[hex];
        }
        const fonts = CXAnalyses.getSecretFont(doc);
        fonts.forEach((el, index) => {
          let html = el.innerHTML;
          for (const key in match) {
            const word = String.fromCharCode(parseInt(key));
            const value = String.fromCharCode(match[key]);
            if (word === value) {
              continue;
            }
            while (html.indexOf(word) !== -1) {
              html = html.replace(word, value);
            }
          }
          el.innerHTML = html;
          el.classList.remove("font-cxsecret");
        });
        $console.log("璇嗗埆绻佷綋瀛楀畬鎴愶拷?);
      } else {
        $console.log("鏈娴嬪埌绻佷綋瀛楋拷?);
      }
    }
  }
  async function loadTyprMapping() {
    try {
      $console.log("姝ｅ湪鍔犺浇绻佷綋瀛楀簱锟?);
      return await request("https://cdn.ocsjs.com/resources/font/table.json", {
        type: "GM_xmlhttpRequest",
        method: "get",
        responseType: "json"
      });
    } catch (err) {
      $console.error("杞界箒浣撳瓧搴撳姞杞藉け璐ワ紝璇峰埛鏂伴〉闈㈤噸璇曪細", String(err));
    }
  }
  const CXAnalyses = {
    isInSpecialMode() {
      return Array.from((top == null ? void 0 : top.document.querySelectorAll(".catalog_points_sa,.catalog_points_er")) || []).length !== 0;
    },
    async isStuckInBreakingMode() {
      if (this.isInSpecialMode()) {
        const chapter = top == null ? void 0 : top.document.querySelector(".posCatalog_active");
        if (chapter) {
          const id = chapter.getAttribute("id");
          if (id) {
            const counter = await lib.$store.getTab("chapter_counter") || /* @__PURE__ */ Object.create({});
            let count = Reflect.get(counter, id);
            count = count ? count + 1 : 1;
            Reflect.set(counter, id, count);
            let res = false;
            if (count >= 3) {
              Reflect.set(counter, id, 1);
              res = true;
            }
            await lib.$store.setTab("chapter_counter", counter);
            return res;
          }
        }
      }
      return false;
    },
    isInFinalTab() {
      const tabs = Array.from((top == null ? void 0 : top.document.querySelectorAll(".prev_ul li")) || []);
      if (tabs.length === 0) {
        return true;
      }
      return tabs[tabs.length - 1].classList.contains("active");
    },
    isInFinalChapter() {
      var _a;
      return (_a = Array.from((top == null ? void 0 : top.document.querySelectorAll(".posCatalog_select")) || []).pop()) == null ? void 0 : _a.classList.contains("posCatalog_active");
    },
    isFinishedAllChapters() {
      return this.getChapterInfos().every((chapter) => chapter.unFinishCount === 0);
    },
    getChapterInfos() {
      return Array.from((top == null ? void 0 : top.document.querySelectorAll('[onclick^="getTeacherAjax"]')) || []).map((el) => {
        var _a, _b, _c;
        return {
          element: el,
          chapterId: (_b = (_a = el.getAttribute("onclick")) == null ? void 0 : _a.match(/\('(.*)','(.*)','(.*)'\)/)) == null ? void 0 : _b[3],
          unFinishCount: parseInt(((_c = el.parentElement.querySelector(".jobUnfinishCount")) == null ? void 0 : _c.value) || "0")
        };
      });
    },
    scrollToActiveChapter() {
      const activeChapter = top == null ? void 0 : top.document.querySelector(".posCatalog_active");
      if (activeChapter) {
        activeChapter.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
    waitForChapterInfos(timeout = 10) {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          const res = this.getChapterInfos();
          if (res.length > 0) {
            clearInterval(interval);
            clearInterval(to);
            resolve(res);
          }
        }, 1e3);
        const to = setTimeout(() => {
          clearInterval(interval);
          resolve([]);
        }, timeout * 1e3);
      });
    },
    getSecretFont(doc = document) {
      return Array.from(doc.querySelectorAll(".font-cxsecret")).map((font) => {
        const after = font.querySelector(".after");
        return after === null ? font : after;
      });
    },
    isCurrentChapterFinished() {
      const job = top == null ? void 0 : top.document.querySelector(".posCatalog_active");
      if (job) {
        if (job.querySelector(".icon_Completed") !== null) {
          return true;
        }
      }
      return false;
    }
  };
  function rateHack() {
    state$3.study.hacked = false;
    let dragCount = 0;
    try {
      hack();
      window.document.addEventListener("readystatechange", hack);
      window.addEventListener("load", hack);
    } catch (e) {
      console.error(e);
    }
    function hack() {
      const videojs = lib.$gm.unsafeWindow.videojs;
      const Ext = lib.$gm.unsafeWindow.Ext;
      if (typeof videojs !== "undefined" && typeof Ext !== "undefined") {
        if (state$3.study.hacked) {
          return;
        }
        state$3.study.hacked = true;
        const _origin = videojs.getPlugin("seekBarControl");
        const plugin = videojs.extend(videojs.getPlugin("plugin"), {
          constructor: function(videoExt, data) {
            const _sendLog = data.sendLog;
            data.sendLog = (...args) => {
              var _a;
              if (args[1] === "drag") {
                dragCount++;
                if (dragCount > 100) {
                  dragCount = 0;
                  (_a = lib.$el("video")) == null ? void 0 : _a.pause();
                }
              } else {
                _sendLog.apply(data, args);
              }
            };
            _origin.apply(_origin.prototype, [videoExt, data]);
          }
        });
        videojs.registerPlugin("seekBarControl", plugin);
        Ext.define("ans.VideoJs", {
          override: "ans.VideoJs",
          constructor: function(data) {
            this.addEvents(["seekstart"]);
            this.mixins.observable.constructor.call(this, data);
            const vjs = videojs(data.videojs, this.params2VideoOpt(data.params), function() {
            });
            Ext.fly(data.videojs).on("contextmenu", function(f) {
              f.preventDefault();
            });
            Ext.fly(data.videojs).on("keydown", function(f) {
              if (f.keyCode === 32 || f.keyCode === 37 || f.keyCode === 39 || f.keyCode === 107) {
                f.preventDefault();
              }
            });
            if (vjs.videoJsResolutionSwitcher) {
              vjs.on("resolutionchange", function() {
                const cr = vjs.currentResolution();
                const re2 = cr.sources ? cr.sources[0].res : false;
                Ext.setCookie("resolution", re2);
              });
            }
            if (vjs.videoJsPlayLine) {
              vjs.on("playlinechange", function() {
                const cp = vjs.currentPlayline();
                Ext.setCookie("net", cp.net);
              });
            }
          }
        });
      }
    }
  }
  async function study(opts) {
    var _a;
    await $.sleep(3e3);
    const searchedJobs = [];
    let searching = true;
    let attachmentCount = ((_a = lib.$gm.unsafeWindow.attachments) == null ? void 0 : _a.length) || 0;
    setTimeout(() => {
      searching = false;
    }, 10 * 1e3);
    const runJobs = async () => {
      const job = searchJob(opts, searchedJobs);
      if (job && job.func) {
        try {
          await job.func();
        } catch (e) {
          $console.error("鏈煡閿欒", e);
        }
        await $.sleep(1e3);
        await runJobs();
      } else if (attachmentCount > 0) {
        attachmentCount--;
        await $.sleep(1e3);
        await runJobs();
      } else if (searching) {
        await $.sleep(1e3);
        await runJobs();
      }
    };
    await runJobs();
    top._preChapterId = "";
    const next2 = async () => {
      if (CXAnalyses.isInFinalTab()) {
        if (await CXAnalyses.isStuckInBreakingMode()) {
          return lib.$modal.alert({
            content: "妫€娴嬪埌姝ょ珷鑺傞噸澶嶈繘锟? 涓轰簡閬垮厤鏃犻檺閲嶅, 璇疯嚜琛屾墜鍔ㄥ畬鎴愬悗鎵嬪姩鐐瑰嚮涓嬩竴锟? 鎴栬€呭埛鏂伴噸璇曪拷?
          });
        }
      }
      if (CXAnalyses.isInFinalChapter()) {
        let content = "";
        if (opts.backToFirstWhenFinish) {
          content = "宸茬粡鎶佃揪鏈€鍚庝竴涓珷鑺傦紝10绉掑悗杩斿洖绗竴涓珷鑺傞噸鏂板紑濮嬶拷?;
          setTimeout(() => {
            var _a2;
            (_a2 = top == null ? void 0 : top.document.querySelector(".posCatalog_name")) == null ? void 0 : _a2.click();
          }, 10 * 1e3);
          lib.$message.info({ content, duration: 30 });
        } else {
          if (CXAnalyses.isFinishedAllChapters()) {
            content = "鍏ㄩ儴浠诲姟鐐瑰凡瀹屾垚锟?;
          } else {
            content = "宸茬粡鎶佃揪鏈€鍚庝竴涓珷鑺傦紒浣嗕粛鐒舵湁浠诲姟鐐规湭瀹屾垚锛岃鎵嬪姩鍒囨崲鑷虫湭瀹屾垚鐨勭珷鑺傦拷?;
          }
          lib.$modal.alert({ content });
        }
        CommonProject.scripts.settings.methods.notificationBySetting(content, {
          duration: 0,
          extraTitle: "瓒呮槦瀛︿範閫氬涔犺剼锟?
        });
        return;
      }
      if (CXProject.scripts.study.cfg.mode === "job") {
        if (CXAnalyses.isInFinalTab()) {
          const elements2 = CXAnalyses.getChapterInfos().filter((el) => {
            var _a2;
            return el.unFinishCount > 0 || ((_a2 = el.element.parentElement) == null ? void 0 : _a2.classList.contains("posCatalog_active"));
          }).map((el) => el.element.parentElement);
          if (elements2.length === 0) {
            const content = "鍏ㄩ儴浠诲姟鐐瑰凡瀹屾垚锟?;
            lib.$modal.alert({ content });
            CommonProject.scripts.settings.methods.notificationBySetting(content, {
              duration: 0,
              extraTitle: "瓒呮槦瀛︿範閫氬涔犺剼锟?
            });
            return;
          }
          let nextChapter = elements2[0];
          const currentIndex = elements2.findIndex((el) => el.classList.contains("posCatalog_active"));
          if (currentIndex !== -1 && currentIndex + 1 < elements2.length) {
            nextChapter = elements2[currentIndex + 1];
            CXAnalyses.scrollToActiveChapter();
            setTimeout(() => {
              var _a2;
              (_a2 = nextChapter.querySelector(".posCatalog_name")) == null ? void 0 : _a2.click();
            }, 1e3);
          }
        }
      } else if (CXProject.scripts.study.cfg.mode === "next") {
        const curCourseId = lib.$el("#curCourseId", top == null ? void 0 : top.document);
        const curChapterId = lib.$el("#curChapterId", top == null ? void 0 : top.document);
        const curClazzId = lib.$el("#curClazzId", top == null ? void 0 : top.document);
        const count = lib.$$el("#prev_tab .prev_ul li", top == null ? void 0 : top.document);
        if (curChapterId && curCourseId && curClazzId) {
          top._preChapterId = curChapterId.value;
          CXAnalyses.scrollToActiveChapter();
          await $.sleep(200);
          top == null ? void 0 : top.PCount.next(count.length.toString(), curChapterId.value, curCourseId.value, curClazzId.value, "");
        } else {
          $console.warn("鍙傛暟閿欒锛屾棤娉曡烦杞笅涓€绔狅紝璇峰皾璇曟墜鍔ㄥ垏鎹拷?);
        }
      } else {
        $console.warn("鏈煡鐨勮烦杞ā寮忥紝璇疯仈绯讳綔鑰呭弽锟?);
      }
    };
    if (CXProject.scripts.study.cfg.mode !== "manually") {
      const msg = "椤甸潰浠诲姟鐐瑰凡瀹屾垚锛屽嵆灏嗚烦杞拷?;
      lib.$message.success({ content: msg });
      $console.info(msg);
      await $.sleep(5e3);
      next2();
    } else {
      const msg = "椤甸潰浠诲姟鐐瑰凡瀹屾垚锛岃嚜鍔ㄨ烦杞凡鍏抽棴锛岃鎵嬪姩璺宠浆锟?;
      lib.$message.warn({ content: msg, duration: 0 });
      $console.warn(msg);
    }
  }
  function searchIFrame(root2) {
    var _a, _b;
    let list = Array.from(root2.querySelectorAll("iframe"));
    const result = [];
    while (list.length) {
      const frame = list.shift();
      try {
        if (frame && ((_a = frame == null ? void 0 : frame.contentWindow) == null ? void 0 : _a.document)) {
          result.push(frame);
          const frames = (_b = frame == null ? void 0 : frame.contentWindow) == null ? void 0 : _b.document.querySelectorAll("iframe");
          list = list.concat(Array.from(frames || []));
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    return result;
  }
  function searchJob(opts, searchedJobs) {
    const knowCardWin = lib.$gm.unsafeWindow;
    const searchJobElement = (root2) => {
      return domSearch(
        {
          videojs: "#video,#audio",
          chapterTest: ".TiMu",
          read: "#img.imglook",
          pptWithAudio: ".swiper-container",
          hyperlink: "#hyperlink"
        },
        root2.contentWindow.document
      );
    };
    const search = (root2) => {
      var _a, _b, _c, _d;
      const win = root2.contentWindow;
      const { videojs, read, chapterTest, hyperlink, pptWithAudio } = searchJobElement(root2);
      if (win && (videojs || read || chapterTest || hyperlink || pptWithAudio)) {
        const frame_data_str = ((_a = win.frameElement) == null ? void 0 : _a.getAttribute("data")) || ((_d = (_c = (_b = win.frameElement) == null ? void 0 : _b.contentWindow) == null ? void 0 : _c.parent.frameElement) == null ? void 0 : _d.getAttribute("data")) || "{}";
        const frame_data = JSON.parse(frame_data_str);
        const target_jobid = frame_data.jobid || frame_data._jobid;
        const attachment = target_jobid ? knowCardWin.attachments.find((attachment2) => {
          const attachment_jobid = attachment2.jobid || attachment2.property._jobid;
          if (!attachment_jobid) {
            return false;
          }
          return String(attachment_jobid) === String(target_jobid);
        }) : undefined;
        if (attachment && searchedJobs.find((job2) => job2.mid === attachment.property.mid) === void 0) {
          const { name, title, bookname, author } = attachment.property;
          const jobName = name || title || (bookname ? bookname + author : void 0) || "鏈煡浠诲姟";
          const work_type = attachment.job ? "job" : attachment.isPassed ? "finished" : "not-job";
          let func;
          if (videojs) {
            if (!CXProject.scripts.study.cfg.enableMedia) {
              const msg = `闊宠棰戣嚜鍔ㄥ涔犲姛鑳藉凡琚叧闂紙鍦ㄤ笂鏂硅彍鍗曟爮锛岃秴鏄熷涔狅拷?璇剧▼瀛︿範涓紑鍚級锟?{jobName} 鍗冲皢璺宠繃`;
              lib.$message.warn({ content: msg, duration: 10 });
              $console.warn(msg);
            } else {
              if (work_type === "job" || work_type === "finished" && opts.restudy || work_type === "not-job" && opts.forceLearn) {
                func = () => {
                  const msg = `鍗冲皢${work_type === "finished" && opts.restudy ? "閲嶆柊" : work_type === "not-job" && opts.forceLearn ? "寮哄埗" : ""}鎾斁 : ` + jobName;
                  lib.$message.info({ content: msg });
                  $console.log(msg);
                  return JobRunner.media(opts, win.document);
                };
              }
            }
          } else if (chapterTest) {
            if (!CXProject.scripts.study.cfg.enableChapterTest) {
              const msg = `绔犺妭娴嬭瘯鑷姩绛旈鍔熻兘宸茶鍏抽棴锛堝湪涓婃柟鑿滃崟鏍忥紝瓒呮槦瀛︿範锟?璇剧▼瀛︿範涓紑鍚級锟?{jobName} 鍗冲皢璺宠繃`;
              lib.$message.warn({ content: msg, duration: 10 });
              $console.warn(msg);
            } else {
              const status = win.document.querySelector(".testTit_status");
              if (status == null ? void 0 : status.classList.contains("testTit_status_complete")) {
                const msg = `绔犺妭娴嬭瘯宸插畬锟?: ` + jobName;
                lib.$message.success({ content: msg });
                $console.log(msg);
              } else {
                if (work_type === "job" || work_type === "finished" && opts.forceLearn || work_type === "not-job" && CommonProject.scripts.settings.cfg["work-when-no-job"]) {
                  if (opts.workOptions.answererWrappers === void 0 || opts.workOptions.answererWrappers.length === 0) {
                    answerWrapperEmptyWarning(0);
                  } else {
                    func = () => {
                      const msg = `寮€濮嬬瓟锟?: ` + jobName;
                      lib.$message.info({ content: msg });
                      $console.log(msg);
                      return JobRunner.chapter(root2, opts.workOptions);
                    };
                  }
                }
                if (work_type === "not-job" && CommonProject.scripts.settings.cfg["work-when-no-job"] === false) {
                  const msg = `褰撳墠浣滀笟 ${jobName} 涓嶆槸浠诲姟鐐癸紝浣嗗緟瀹屾垚锛屽闇€寮€鍚嚜鍔ㄧ瓟棰樿鍓嶅線锛氶€氱敤-鍏ㄥ眬璁剧疆锛屽紑鍚己鍒剁瓟棰樸€俙;
                  lib.$message.warn({ content: msg });
                  $console.warn(msg);
                }
                if (work_type === "finished" && !opts.forceLearn) {
                  const msg = `褰撳墠浣滀笟 ${jobName} 绯荤粺鏍囪涓哄凡瀹屾垚锛屼絾椤甸潰鏄剧ず鏈畬鎴愶紝濡傞渶寮哄埗瀛︿範绛旈璇峰紑锟?寮哄埗瀛︿範"銆俙;
                  lib.$message.warn({ content: msg });
                  $console.warn(msg);
                }
              }
            }
          } else if (read || pptWithAudio) {
            if (!CXProject.scripts.study.cfg.enablePPT) {
              const msg = `PPT/涔︾睄闃呰鍔熻兘宸茶鍏抽棴锛堝湪涓婃柟鑿滃崟鏍忥紝瓒呮槦瀛︿範锟?璇剧▼瀛︿範涓紑鍚級锟?{jobName} 鍗冲皢璺宠繃`;
              lib.$message.warn({ content: msg, duration: 10 });
              $console.warn(msg);
            } else {
              if (attachment.job) {
                func = () => {
                  const msg = `姝ｅ湪瀛︿範 : ` + jobName;
                  lib.$message.info({ content: msg });
                  $console.log(msg);
                  if (read) {
                    return JobRunner.read(win);
                  } else {
                    return JobRunner.readPPTWithAudio(win);
                  }
                };
              }
            }
          } else if (hyperlink) {
            if (!CXProject.scripts.study.cfg.enableHyperlink) {
              const msg = `閾炬帴浠诲姟鐐瑰凡琚叧闂紙鍦ㄤ笂鏂硅彍鍗曟爮锛岃秴鏄熷涔狅拷?璇剧▼瀛︿範涓紑鍚級锟?{jobName} 鍗冲皢璺宠繃`;
              lib.$message.warn({ content: msg, duration: 10 });
              $console.warn(msg);
            } else {
              if (attachment.job) {
                func = () => {
                  const msg = `姝ｅ湪瀹屾垚閾炬帴闃呰浠诲姟 : ` + jobName;
                  lib.$message.info({ content: msg });
                  $console.log(msg);
                  return JobRunner.hyperlink(hyperlink);
                };
              }
            }
          }
          const job2 = {
            mid: attachment.property.mid,
            attachment,
            func
          };
          searchedJobs.push(job2);
          return job2;
        }
        if (chapterTest && CXProject.scripts.study.cfg.enableChapterTest) {
          const status = win.document.querySelector(".testTit_status");
          if (!(status == null ? void 0 : status.classList.contains("testTit_status_complete"))) {
            const jobKey = root2.src || root2.name || "orphan_timu_" + Date.now();
            if (searchedJobs.find((j) => j.mid === jobKey) === void 0) {
              let testFunc;
              if (opts.workOptions.answererWrappers && opts.workOptions.answererWrappers.length > 0) {
                const msg = "寮€濮嬬瓟锟?鐙珛妫€锟?: " + ((win.document.title || "").replace(/<[^>]*>/g, "") || "绔犺妭娴嬭瘯");
                lib.$message.info({ content: msg });
                $console.log(msg);
                testFunc = () => JobRunner.chapter(root2, opts.workOptions);
              }
              const orphanJob = { mid: jobKey, func: testFunc };
              searchedJobs.push(orphanJob);
              return orphanJob;
            }
          }
        }
      }
    };
    let job;
    for (const iframe of searchIFrame(knowCardWin.document)) {
      job = search(iframe);
      if (job) {
        return job;
      }
    }
    if (!job) {
      const mainDoc = knowCardWin.document;
      if (mainDoc.querySelector(".TiMu") && CXProject.scripts.study.cfg.enableChapterTest) {
        const status = mainDoc.querySelector(".testTit_status");
        if (!(status == null ? void 0 : status.classList.contains("testTit_status_complete"))) {
          const jobKey = "main_timu_" + Date.now();
          if (searchedJobs.find((j) => j.mid === jobKey) === void 0) {
            let mainFunc;
            if (opts.workOptions.answererWrappers && opts.workOptions.answererWrappers.length > 0) {
              const msg = "寮€濮嬬瓟锟?涓绘枃锟?: " + ((mainDoc.title || "").replace(/<[^>]*>/g, "") || "绔犺妭娴嬭瘯");
              lib.$message.info({ content: msg });
              $console.log(msg);
              mainFunc = () => JobRunner.chapter({ contentWindow: knowCardWin }, opts.workOptions);
            }
            const mainJob = { mid: jobKey, func: mainFunc };
            searchedJobs.push(mainJob);
            return mainJob;
          }
        }
      }
    }
    return job;
  }
  function fixedVideoProgress() {
    if (state$3.study.videojs) {
      const { bar } = domSearch({ bar: ".vjs-control-bar" }, state$3.study.videojs);
      if (bar) {
        bar.style.opacity = "1";
      }
    }
  }
  const JobRunner = {
    async media(setting, doc) {
      const { playbackRate: playbackRate2 = 1, volume: volume2 = 0 } = setting;
      const media = await waitForMedia({ root: doc });
      const { videojs } = domSearch({ videojs: "#video,#audio" }, doc);
      if (!videojs || !media) {
        $console.error("瑙嗛妫€娴嬩笉鍒帮紝璇峰皾璇曞埛鏂版垨鑰呮墜鍔ㄥ垏鎹笅涓€绔狅拷?);
        return;
      }
      state$3.study.videojs = videojs;
      top.currentMedia = media;
      fixedVideoProgress();
      if (setting.videoQuizStrategy === "random") {
        const loop = async () => {
          var _a;
          const submitBtn = () => doc.querySelector("#videoquiz-submit");
          if (submitBtn()) {
            const list = Array.from(doc.querySelectorAll(".ans-videoquiz-opt label"));
            const answer = list[Math.floor(Math.random() * list.length)];
            answer == null ? void 0 : answer.click();
            (_a = submitBtn()) == null ? void 0 : _a.click();
            await $.sleep(3e3);
            const container2 = doc.querySelector("#video .ans-videoquiz");
            const components = Array.from(doc.querySelectorAll(".x-component-default"));
            if (container2) {
              container2.remove();
            }
            if (components.length) {
              for (const com of components) {
                com.style.display = "none";
              }
            }
          }
          await $.sleep(3e3);
          await loop();
        };
        loop();
      }
      return new Promise((resolve, reject) => {
        const reloadInterval = setInterval(() => {
          const errorDiv = doc.querySelector(".vjs-modal-dialog-content");
          if (["瑙嗛鏂囦欢鎹熷潖", "缃戠粶閿欒瀵艰嚧瑙嗛涓嬭浇涓€斿け锟?, "瑙嗛鍥犳牸寮忎笉鏀寔", "缃戠粶鐨勯棶棰樻棤娉曞姞锟?].some(
            (s) => errorDiv == null ? void 0 : errorDiv.innerText.includes(s)
          )) {
            $console.error("妫€娴嬪埌瑙嗛鍔犺浇澶辫触锛屽嵆灏嗚烦杩囪棰戯拷?);
            lib.$message.error("妫€娴嬪埌瑙嗛鍔犺浇澶辫触锛屽嵆灏嗚烦杩囪棰戯拷?);
            setTimeout(resolve, 3e3);
          }
        }, 3e3);
        const playFunction = async () => {
          if (hasFaceRecognition())
            await waitForFaceRecognition();
          if (hasNewFaceRecognition())
            await waitForNewFaceRecognition();
          if (media.ended === false) {
            await $.sleep(1e3);
            media.play();
            media.playbackRate = playbackRate2;
          }
        };
        media.addEventListener("pause", playFunction);
        media.addEventListener("ended", () => {
          media.removeEventListener("pause", playFunction);
          $console.log("瑙嗛鎾斁瀹屾瘯");
          clearInterval(reloadInterval);
          resolve();
        });
        $console.log("瑙嗛寮€濮嬫挱锟?);
        media.volume = volume2;
        media.currentTime = 0;
        setTimeout(() => {
          playMedia(() => media.play()).then(() => {
            media.playbackRate = playbackRate2;
          }).catch(reject);
        }, 200);
      });
    },
    async read(win) {
      const finishJob = win.finishJob;
      if (finishJob)
        finishJob();
      await $.sleep(3e3);
    },
    async chapter(frame, {
      answererWrappers,
      period,
      upload,
      thread,
      stopSecondWhenFinish,
      redundanceWordsText,
      answerSeparators,
      answerMatchMode
    }) {
      if (answererWrappers === void 0 || answererWrappers.length === 0) {
        return answerWrapperEmptyWarning(0);
      }
      $console.info("寮€濮嬬珷鑺傛祴锟?);
      const visual_state = CommonProject.scripts.render.cfg.visual;
      const frameWindow = frame.contentWindow;
      const { TiMu } = domSearchAll({ TiMu: ".TiMu" }, frameWindow.document);
      CORSUtils.panelNormal();
      CommonProject.scripts.workResults.methods.init();
      CORSUtils.pinWorkPanel();
      const chapterTestTaskQuestionTitleTransform = (titles) => {
        const removed = removeRedundantWords(
          titles.map((t2) => t2 ? optimizationElementWithImage(t2, true).innerText : "").join(","),
          redundanceWordsText.split("\n")
        );
        return removed.trim().replace(/^\d+[銆傦拷?]/, "").replace(/锛圽d+\.\d+鍒嗭級/, "").replace(/\(..锟? \d+?鍒哱)/, "").replace(/\(..锟? \d+\.\d+鍒哱)/, "").replace(/[[(銆愶紙](..棰榺鍚嶈瘝瑙ｉ噴|瀹屽舰濉┖|闃呰鐞嗚В)[\])銆戯級]/, "").trim();
      };
      const worker = new OCSWorker({
        root: TiMu,
        elements: {
          title: ".Zy_TItle .clearfix",
          options: "ul li .after,ul li textarea,ul textarea,ul li label:not(.before)",
          type: 'input[id^="answertype"]',
          lineAnswerInput: ".line_answer input[name^=answer]",
          lineSelectBox: ".line_answer_ct .selectBox "
        },
        thread: thread != null ? thread : 1,
        answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
        answerMatchMode,
        answerer: (elements2, ctx) => {
          const title = chapterTestTaskQuestionTitleTransform(elements2.title);
          if (title) {
            const typeInput = elements2.type[0];
            return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
              await $.sleep((period != null ? period : 3) * 1e3);
              return defaultAnswerWrapperHandler(answererWrappers, {
                type: (typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0) || "unknown",
                title,
                options: ctx.type === "completion" ? "" : ctx.elements.options.map((o) => optimizationElementWithImage(o, true).innerText).join("\n"),
                optionsArray: ctx.type === "completion" ? [] : ctx.elements.options.map((o) => optimizationElementWithImage(o, true).innerText)
              });
            });
          } else {
            throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
          }
        },
        work: async (ctx) => {
          var _a;
          const { elements: elements2, searchInfos } = ctx;
          const typeInput = elements2.type[0];
          const type = typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0;
          if (type && (type === "completion" || type === "multiple" || type === "judgement" || type === "single")) {
            const resolver = createDefaultQuestionResolver(ctx)[type];
            const handler = (type2, answer, option, ctx2) => {
              var _a2, _b, _c, _d, _e, _f, _g;
              if (type2 === "judgement" || type2 === "single" || type2 === "multiple") {
                const checked = ((_b = (_a2 = option == null ? void 0 : option.parentElement) == null ? void 0 : _a2.querySelector("label input")) == null ? void 0 : _b.getAttribute("checked")) === "checked" || ((_c = option == null ? void 0 : option.parentElement) == null ? void 0 : _c.getAttribute("aria-checked")) === "true";
                if (checked)
                  ;
                else {
                  option == null ? void 0 : option.click();
                }
              } else if (type2 === "completion" && answer.trim()) {
                const text = (_d = option == null ? void 0 : option.parentElement) == null ? void 0 : _d.querySelector("textarea");
                const textareaFrame = (_e = option == null ? void 0 : option.parentElement) == null ? void 0 : _e.querySelector("iframe");
                if (text) {
                  text.value = answer;
                }
                if (textareaFrame == null ? void 0 : textareaFrame.contentDocument) {
                  textareaFrame.contentDocument.body.innerHTML = answer;
                }
                if ((_f = option == null ? void 0 : option.parentElement) == null ? void 0 : _f.parentElement) {
                  (_g = lib.$el("[onclick*=saveQuestion]", option.parentElement.parentElement)) == null ? void 0 : _g.click();
                }
              }
            };
            return await resolver(
              searchInfos,
              elements2.options.map((option) => optimizationElementWithImage(option)),
              handler
            );
          } else if (type && type === "line") {
            for (const answers of searchInfos.map((info) => info.results.map((res) => res.answer))) {
              let ans = answers;
              if (ans.length === 1) {
                ans = splitAnswer(ans[0]);
              }
              if (ans.filter(Boolean).length !== 0 && elements2.lineAnswerInput) {
                for (let index = 0; index < elements2.lineSelectBox.length; index++) {
                  const box = elements2.lineSelectBox[index];
                  if (ans[index]) {
                    (_a = lib.$el(`li[data=${ans[index]}] a`, box)) == null ? void 0 : _a.click();
                    await $.sleep(200);
                  }
                }
                return { finish: true };
              }
            }
            return { finish: false };
          }
          return { finish: false };
        },
        async onResultsUpdate(curr, _, res) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          CommonProject.scripts.workResults.methods.setResults(
            simplifyWorkResult(res, chapterTestTaskQuestionTitleTransform)
          );
          if ((_a = curr.result) == null ? void 0 : _a.finish) {
            CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
              simplifyWorkResult([curr], chapterTestTaskQuestionTitleTransform)
            );
          }
          CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
          if (((_b = curr.result) == null ? void 0 : _b.finish) === false && curr.resolved === true) {
            const options = ((_d = (_c = curr.ctx) == null ? void 0 : _c.elements) == null ? void 0 : _d.options) || [];
            const typeInput = (_f = (_e = curr.ctx) == null ? void 0 : _e.elements) == null ? void 0 : _f.type[0];
            const type = typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0;
            const commonSetting = CommonProject.scripts.settings.cfg;
            if (commonSetting["randomWork-choice"] && (type === "judgement" || type === "single" || type === "multiple")) {
              $console.log("姝ｅ湪闅忔満浣滅瓟");
              const option = options[Math.floor(Math.random() * options.length)];
              (_h = (_g = option == null ? void 0 : option.parentElement) == null ? void 0 : _g.querySelector("a,label")) == null ? void 0 : _h.click();
            } else if (commonSetting["randomWork-complete"] && type === "completion") {
              $console.log("姝ｅ湪闅忔満浣滅瓟");
              for (const option of options) {
                const textarea = (_i = option == null ? void 0 : option.parentElement) == null ? void 0 : _i.querySelector("textarea");
                const completeTexts = commonSetting["randomWork-completeTexts-textarea"].split("\n").filter(Boolean);
                const text = completeTexts[Math.floor(Math.random() * completeTexts.length)];
                const textareaFrame = (_j = option == null ? void 0 : option.parentElement) == null ? void 0 : _j.querySelector("iframe");
                if (text) {
                  if (textarea) {
                    textarea.value = text;
                  }
                  if (textareaFrame == null ? void 0 : textareaFrame.contentDocument) {
                    textareaFrame.contentDocument.body.innerHTML = text;
                  }
                } else {
                  $console.error("璇疯缃殢鏈哄～绌虹殑鏂囨");
                }
                await $.sleep(500);
              }
            }
          }
        },
        async onElementSearched(elements2) {
          const typeInput = elements2.type[0];
          const type = typeInput ? getQuestionType(parseInt(typeInput.value)) : void 0;
          if (type === "judgement") {
            elements2.options.forEach((option) => {
              var _a;
              const opt = ((_a = option == null ? void 0 : option.textContent) == null ? void 0 : _a.trim()) || "";
              if (opt.includes("锟?) || opt.includes("锟?))
                ;
              else if (opt === "True") {
                option.textContent = "锟?;
              } else if (opt === "False") {
                option.textContent = "x";
              } else if (opt === "锟?) {
                option.textContent = "锟?;
              } else if (opt === "锟?) {
                option.textContent = "x";
              } else {
                const ri = option.querySelector(".ri");
                const span = document.createElement("span");
                span.innerText = ri ? "锟? : "脳";
                option.appendChild(span);
              }
            });
          }
        }
      });
      const results = await worker.doWork();
      const msg = `绛旈瀹屾垚锛屽皢绛夊緟 ${stopSecondWhenFinish} 绉掑悗杩涜淇濆瓨鎴栨彁浜ゃ€俙;
      $console.info(msg);
      lib.$message.info({ content: msg, duration: stopSecondWhenFinish });
      await $.sleep(stopSecondWhenFinish * 1e3);
      await worker.uploadHandler({
        type: upload,
        results,
        async callback(finishedRate, uploadable) {
          const msg2 = `瀹屾垚锟?${finishedRate.toFixed(2)}% :  ${uploadable ? "3绉掑悗灏嗚嚜鍔ㄦ彁锟? : "3绉掑悗灏嗚嚜鍔ㄤ繚锟?} `;
          $console.info(msg2);
          lib.$message.success({ content: msg2, duration: 3 });
          await $.sleep(3e3);
          if (uploadable) {
            frameWindow.btnBlueSubmit();
            await $.sleep(3e3);
            frameWindow.submitCheckTimes();
            top.$("#workpop").hide();
          } else {
            frameWindow.alert = () => {
            };
            frameWindow.noSubmit();
          }
        }
      });
      if (visual_state === "minimize" && CommonProject.scripts.render.cfg.visual !== "minimize") {
        CORSUtils.panelMinimize();
      }
      worker.emit("done");
    },
    async readPPTWithAudio(win) {
      var _a;
      win.document.querySelectorAll("audio").forEach((audio) => {
        audio.addEventListener("play", () => {
          audio.muted = true;
        });
      });
      const len = win.document.querySelectorAll(".swiper-container .swiper-slide").length;
      for (let index = 0; index < len; index++) {
        (_a = win.swiperNext) == null ? void 0 : _a.call(win);
        await $.sleep(1e3);
      }
      await $.sleep(3e3);
    },
    async hyperlink(a) {
      const _click = a.onclick;
      a.onclick = () => false;
      a.click();
      a.onclick = _click;
      await $.sleep(3e3);
    }
  };
  function getQuestionType(val) {
    return val === 0 ? "single" : val === 1 ? "multiple" : val === 3 ? "judgement" : [2, 4, 5, 6, 7, 8, 9, 10].some((t2) => t2 === val) ? "completion" : val === 11 ? "line" : val === 14 ? "fill" : val === 15 ? "reader" : void 0;
  }
  async function readerAndFillHandle(searchInfos, list) {
    var _a;
    for (const answers of searchInfos.map((info) => info.results.map((res) => res.answer))) {
      let ans = answers;
      if (ans.length === 1) {
        ans = splitAnswer(ans[0]);
      }
      if (ans.filter(Boolean).length !== 0 && list.length !== 0) {
        for (let index = 0; index < ans.length; index++) {
          const item = list[index];
          if (item) {
            (_a = lib.$el(`span.saveSingleSelect[data="${ans[index]}"]`, item)) == null ? void 0 : _a.click();
            await $.sleep(200);
          }
        }
        return { finish: true };
      }
    }
    return { finish: false };
  }
  function hasFaceRecognition() {
    const faces = lib.$$el("#fcqrimg", top == null ? void 0 : top.document);
    let active = false;
    for (const face of faces) {
      const src2 = face.getAttribute("src");
      if (src2) {
        active = true;
        break;
      }
    }
    return active;
  }
  function hasNewFaceRecognition() {
    const faces = lib.$$el(".chapterVideoFaceMaskDiv", top == null ? void 0 : top.document);
    let active = false;
    for (const face of faces) {
      if (face.style.display !== "none") {
        active = true;
        break;
      }
    }
    return active;
  }
  function waitForNewFaceRecognition() {
    let notified = false;
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const active = hasNewFaceRecognition();
        if (active) {
          if (!notified) {
            notified = true;
            const msg = "妫€娴嬪埌浜鸿劯璇嗗埆锛岃鎵嬪姩杩涜璇嗗埆鍚庤剼鏈墠浼氱户缁繍琛岋拷?;
            if (CXProject.scripts.study.cfg.notifyWhenHasFaceRecognition) {
              CommonProject.scripts.settings.methods.notificationBySetting(msg, { duration: 0 });
            }
            lib.$message.warn({ content: msg, duration: 0 });
            $console.warn(msg);
          }
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 3e3);
    });
  }
  function waitForFaceRecognition() {
    let notified = false;
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const active = hasFaceRecognition();
        if (active) {
          if (!notified) {
            notified = true;
            const msg = "妫€娴嬪埌浜鸿劯璇嗗埆锛岃鎵嬪姩杩涜璇嗗埆鍚庤剼鏈墠浼氱户缁繍琛岋拷?;
            if (CXProject.scripts.study.cfg.notifyWhenHasFaceRecognition) {
              CommonProject.scripts.settings.methods.notificationBySetting(msg, { duration: 0 });
            }
            lib.$message.warn({ content: msg, duration: 0 });
            $console.warn(msg);
          }
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 3e3);
    });
  }
  const CORSUtils = {
    pinWorkPanel: lib.cors.defineTopFunction(() => {
      CommonProject.scripts.render.methods.pin(CommonProject.scripts.workResults);
    }),
    panelNormal: lib.cors.defineTopFunction(() => {
      CommonProject.scripts.render.methods.normal();
    }),
    panelMinimize: lib.cors.defineTopFunction(() => {
      CommonProject.scripts.render.methods.minimize();
    })
  };
  const state$2 = {
    study: {
      currentMedia: void 0,
      currentStudyLockId: 0,
      playbackRateWarningListenerId: 0,
      courseLengthListenerId: 0
    }
  };
  const $msg_and_log$1 = (type, msg) => {
    lib.$message[type](msg);
    $console[type](msg);
  };
  const _StudyLock = class {
    constructor() {
      _StudyLock.auto_inc++;
      this.id = _StudyLock.auto_inc;
      state$2.study.currentStudyLockId = this.id;
    }
    canStudy() {
      return this.id === state$2.study.currentStudyLockId;
    }
    static getLock() {
      return new _StudyLock();
    }
  };
  let StudyLock = _StudyLock;
  StudyLock.auto_inc = 0;
  const IcveMoocProject = lib.Project.create({
    name: "鏅烘収鑱屾暀",
    domains: [
      "icve.com.cn",
      "ai.icve.com.cn",
      "course.icve.com.cn",
      "courshare.cn",
      "webtrn.cn"
    ],
    scripts: {
      guide: new lib.Script({
        name: "馃挕 浣跨敤鎻愮ず",
        matches: [
          ["涓汉棣栭〉", "icve.com.cn/studycenter"],
          ["瀛︿範椤甸潰", "icve.com.cn/study/directory"],
          ["MOOC瀛﹂櫌-涓汉棣栭〉", "user.icve.com.cn"],
          ["MOOC瀛﹂櫌-棣栭〉", "mooc.icve.com.cn"]
        ],
        namespace: "icve.guide",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["璇风偣鍑讳换鎰忚绋嬭繘锟?, "杩涘叆璇剧▼鍚庣偣鍑讳换鎰忕珷鑺傝繘鍏ワ紝鍗冲彲鑷姩瀛︿範"]).outerHTML
          }
        },
        oncomplete() {
          CommonProject.scripts.render.methods.pin(this);
        }
      }),
      studyCenter: new lib.Script({
        name: "馃枼锟?鏅烘収鑱屾暀-瀛︿範涓績",
        namespace: "icve.study.center",
        matches: [
          ["瀛︿範涓績椤甸潰", "/study/directory/dir_course.html"],
          ["璇剧▼鍒楄〃", "icve.com.cn/study/directory/directory_list.html"]
        ],
        configs: {
          playbackRate,
          volume,
          currentCourseUrlList: {
            defaultValue: []
          }
        },
        async oncomplete() {
          if (location.href.includes("icve.com.cn/study/directory/directory_list.html")) {
            await waitForElement(".h_cells a");
            this.cfg.currentCourseUrlList = Array.from(document.querySelectorAll(".h_cells a")).map(
              (a) => a.href
            );
            return;
          }
          if (this.cfg.currentCourseUrlList.length === 0) {
            try {
              const url = "https://www.icve.com.cn/study/directory/directory_list.html?courseId=" + new URL(location.href).searchParams.get("courseId");
              const res = await fetch(url).then((res2) => res2.text());
              const doc = new DOMParser().parseFromString(res, "text/html");
              this.cfg.currentCourseUrlList = Array.from(doc.querySelectorAll(".h_cells a")).map(
                (a) => a.href
              );
            } catch (e) {
              console.error(e);
              lib.$message.error("璇剧▼鍒楄〃鑾峰彇澶辫触锛岃鍒锋柊椤甸潰閲嶈瘯锟?);
              return;
            }
          }
          CommonProject.scripts.render.methods.pin(this);
          this.onConfigChange("playbackRate", (playbackRate2) => {
            state$2.study.currentMedia && (state$2.study.currentMedia.playbackRate = parseFloat(playbackRate2.toString()));
          });
          this.onConfigChange("volume", (v) => state$2.study.currentMedia && (state$2.study.currentMedia.volume = v));
          const study2 = async () => {
            var _a;
            const res = await Promise.race([waitForElement("video, audio"), waitForElement(".docBox")]);
            if (res) {
              const jobName = ((_a = document.querySelector(".tabsel.seled")) == null ? void 0 : _a.getAttribute("title")) || "-";
              lib.$message.info("寮€濮嬩换鍔★細" + jobName);
              $console.log(`浠诲姟 ${jobName} 寮€濮嬨€俙);
              if (document.querySelector("video, audio")) {
                const media = await waitForMedia();
                state$2.study.currentMedia = media;
                media.volume = this.cfg.volume;
                await new Promise((resolve, reject) => {
                  try {
                    console.log(document.hasFocus());
                    window.focus();
                    lib.$gm.unsafeWindow.jwplayer().onComplete(async () => {
                      $console.log("瑙嗛/闊抽鎾斁瀹屾垚锟?);
                      await $.sleep(3e3);
                      resolve();
                    });
                    const play = () => {
                      lib.$gm.unsafeWindow.jwplayer().play();
                      lib.$gm.unsafeWindow.jwplayer().play();
                      media.playbackRate = parseFloat(this.cfg.playbackRate.toString());
                    };
                    media.addEventListener("pause", async () => {
                      if (!media.ended) {
                        await $.sleep(1e3);
                        playMedia(play);
                      }
                    });
                    playMedia(play);
                  } catch (err) {
                    reject(err);
                  }
                });
              }
              lib.$message.success(`浠诲姟 ${jobName} 瀹屾垚锛屼笁绉掑悗涓嬩竴绔燻);
              $console.log(`浠诲姟 ${jobName} 瀹屾垚锛屼笁绉掑悗涓嬩竴绔燻);
            } else {
              $console.error(`涓嶆敮鎸佺殑浠诲姟椤甸潰锛岃璺熶綔鑰呰繘琛屽弽棣堛€備笁绉掑悗涓嬩竴绔燻);
            }
            await $.sleep(3e3);
            next2();
          };
          const next2 = () => {
            for (let index = 0; index < this.cfg.currentCourseUrlList.length; index++) {
              const url = this.cfg.currentCourseUrlList[index];
              const nextUrl = this.cfg.currentCourseUrlList[index + 1];
              if (new URL(url).hash === new URL(location.href).hash) {
                if (!nextUrl) {
                  lib.$modal.alert({ content: "鍏ㄩ儴浠诲姟宸插畬锟? });
                  CommonProject.scripts.settings.methods.notificationBySetting("鍏ㄩ儴浠诲姟鐐瑰凡瀹屾垚锟?, {
                    duration: 0,
                    extraTitle: "鏅烘収鑱屾暀瀛︿範鑴氭湰"
                  });
                  return;
                } else {
                  window.location.href = this.cfg.currentCourseUrlList[index + 1];
                }
              }
            }
          };
          study2();
        }
      }),
      study: new lib.Script({
        name: "馃枼锟?MOOC瀛﹂櫌-璇剧▼瀛︿範",
        namespace: "icve.study.main",
        matches: [["璇剧▼瀛︿範椤甸潰", "/learnspace/learn/learn/templateeight/index.action"]],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "濡傛灉瑙嗛鏃犳硶鎾斁锛屽彲浠ユ墜鍔ㄧ偣鍑诲叾浠栦换鍔¤烦杩囪棰戯拷?,
              "缁忚繃娴嬭瘯瑙嗛鍊嶉€熸渶澶氫簩鍊嶏紝鍚﹀垯浼氬垽瀹氭棤鏁堬拷?,
              "鎵嬪姩杩涘叆浣滀笟椤甸潰鎵嶈兘浣跨敤鑷姩绛旈锟?
            ]).outerHTML
          },
          playbackRate,
          volume,
          restudy,
          showScrollBar: {
            label: "鏄剧ず鍙充晶婊氬姩锟?,
            attrs: { type: "checkbox" },
            defaultValue: true
          },
          expandAll: {
            label: "灞曞紑鎵€鏈夌珷锟?,
            attrs: { type: "checkbox" },
            defaultValue: true
          },
          switchPeriod: {
            label: "涓嬩竴绔犺妭鍒囨崲闂撮殧锛堢锟?,
            defaultValue: 10,
            attrs: {
              type: "number",
              min: 0,
              max: 999,
              step: 1
            }
          }
        },
        onrender() {
          this.offConfigChange(state$2.study.playbackRateWarningListenerId);
          state$2.study.playbackRateWarningListenerId = this.onConfigChange("playbackRate", (playbackRate2) => {
            if (playbackRate2 > 4) {
              lib.$modal.alert({
                title: "鈿狅笍楂樺€嶉€熻锟?,
                content: lib.$ui.notes(["楂樺€嶉€熷彲鑳藉鑷磋棰戞棤娉曞畬鎴愶紒"])
              });
            }
          }) || 0;
        },
        async oncomplete() {
          var _a;
          CommonProject.scripts.render.methods.pin(this);
          await $.sleep(3e3);
          this.onConfigChange("volume", (v) => state$2.study.currentMedia && (state$2.study.currentMedia.volume = v));
          this.onConfigChange(
            "playbackRate",
            (r) => state$2.study.currentMedia && (state$2.study.currentMedia.playbackRate = parseFloat(r.toString()))
          );
          const mainContentWin = (_a = lib.$el("#mainContent")) == null ? void 0 : _a.contentWindow;
          if (mainContentWin) {
            lib.$modal.confirm({
              content: lib.h("div", [
                "鏄惁寮€濮嬭嚜鍔ㄥ涔犲綋鍓嶇珷鑺傦紵",
                lib.h("br"),
                "浣犱篃鍙互閫夋嫨浠绘剰鐨勭珷鑺傝繘琛岀偣鍑伙紝鑴氭湰浼氳嚜鍔ㄥ涔狅紝骞朵竴鐩村線涓嬪鎵剧珷鑺傦拷?
              ]),
              cancelButtonText: "鎴戞兂鎵嬪姩閫夋嫨绔犺妭",
              confirmButtonText: "寮€濮嬪锟?,
              async onConfirm() {
                study2(StudyLock.getLock());
                scrollToJob();
              }
            });
          }
          if (this.cfg.showScrollBar) {
            const bar = lib.$el(".dumascroll_area", mainContentWin.document);
            bar && (bar.style.overflow = "auto");
          }
          if (this.cfg.expandAll) {
            lib.$$el(".s_sectionlist,.s_sectionwrap", mainContentWin.document).forEach((el) => el.style.display = "block");
          }
          for (const job of lib.$$el(".s_point[itemtype]", mainContentWin.document)) {
            job.addEventListener("click", (e) => {
              const lock = StudyLock.getLock();
              if (e.isTrusted) {
                if (job.getAttribute("itemtype") === "exam") {
                  return lib.$message.info({
                    duration: 60,
                    content: "妫€娴嬪埌鎮ㄦ墜鍔ㄩ€夋嫨浜嗕綔锟?鑰冭瘯绔犺妭锛屽皢涓嶄細鑷姩璺宠浆锛岃瀹屾垚鍚庢墜鍔ㄩ€夋嫨鍏朵粬绔犺妭锛岃剼鏈細鑷姩瀛︿範锟?
                  });
                } else {
                  lib.$message.info("妫€娴嬪埌绔犺妭鍒囨崲锛屽嵆灏嗚嚜鍔ㄥ锟?..");
                }
              }
              setTimeout(() => {
                study2(lock);
              }, 3e3);
            });
          }
          const scrollToJob = () => {
            var _a2;
            return (_a2 = lib.$el(".s_pointerct", mainContentWin.document)) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "center" });
          };
          const study2 = async (studyLock) => {
            var _a2;
            const iframe = lib.$el("iframe", mainContentWin.document);
            const win = iframe == null ? void 0 : iframe.contentWindow;
            if (win) {
              const doc = win.document;
              if (iframe.src.includes("content_video.action") || iframe.src.includes("content_audio.action")) {
                $console.log("瑙嗛/闊抽鎾斁锟?..");
                try {
                  const media = await waitForMedia({ root: doc });
                  state$2.study.currentMedia = media;
                  media.playbackRate = parseFloat(this.cfg.playbackRate.toString());
                  media.volume = this.cfg.volume;
                  media.currentTime = 0;
                  await new Promise((resolve, reject) => {
                    try {
                      win.jwplayer().onComplete(async () => {
                        $console.log("瑙嗛/闊抽鎾斁瀹屾垚锟?);
                        await $.sleep(3e3);
                        resolve();
                      });
                      media.addEventListener("pause", async () => {
                        if (!media.ended) {
                          await Promise.race([
                            waitForPopupQuestion(doc),
                            handleContinueDialog()
                          ]);
                          await $.sleep(1e3);
                          playMedia(() => media.play());
                        }
                      });
                      playMedia(() => media.play());
                    } catch (err) {
                      reject(err);
                    }
                  });
                } catch (err) {
                  lib.$message.error(String(err));
                }
              } else if (iframe.src.includes("content_doc.action")) {
                await $.sleep(5e3);
              }
            }
            $console.log(this.cfg.switchPeriod + " 绉掑悗鍒囨崲涓嬩竴绔犺妭锟?);
            await $.sleep(this.cfg.switchPeriod * 1e3);
            if (studyLock.canStudy()) {
              let nextEl;
              let isBellowCurrentJob = false;
              const jobs = lib.$$el(".s_point[itemtype]", mainContentWin.document);
              for (let index = 0; index < jobs.length; index++) {
                const job = jobs[index];
                if (job.classList.contains("s_pointerct")) {
                  isBellowCurrentJob = true;
                } else if (isBellowCurrentJob) {
                  if (job.querySelector(".done_icon_show") === null || this.cfg.restudy) {
                    $console.log("涓嬩竴绔狅細", job.title || ((_a2 = lib.$el(".s_pointti", job)) == null ? void 0 : _a2.title) || "鏈煡");
                    nextEl = job;
                    break;
                  }
                }
              }
              if (nextEl) {
                nextEl.click();
                scrollToJob();
              } else {
                lib.$modal.alert({ content: "鍏ㄩ儴浠诲姟宸插畬锟? });
                CommonProject.scripts.settings.methods.notificationBySetting("鍏ㄩ儴浠诲姟鐐瑰凡瀹屾垚锟?, {
                  duration: 0,
                  extraTitle: "鏅烘収鑱屾暀瀛︿範鑴氭湰"
                });
              }
            }
          };
        }
      }),
      work: new lib.Script({
        name: "鉁嶏笍 浣滀笟鑰冭瘯鑴氭湰",
        matches: [["浣滀笟鑰冭瘯椤甸潰", "/exam"]],
        namespace: "icve.work",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鑷姩绛旈鍓嶈锟?鈥滈€氱敤-鍏ㄥ眬璁剧疆锟?涓缃搴撻厤缃拷?,
              "鍙互鎼厤 鈥滈€氱敤-鍦ㄧ嚎鎼滈锟?涓€璧蜂娇鐢拷?,
              "璇锋墜鍔ㄨ繘鍏ヤ綔涓氳€冭瘯椤甸潰鎵嶈兘浣跨敤鑷姩绛旈锟?
            ]).outerHTML
          }
        },
        async oncomplete() {
          lib.$message.warn({ content: "鑷姩绛旈鏃惰鍕垮垏鎹㈤鐩紝鍚﹀垯鍙兘瀵艰嚧閲嶅鎼滈鎴栬€呰剼鏈崱涓伙拷?, duration: 0 });
          const resetToBegin = () => {
            var _a;
            (_a = document.querySelectorAll(`.sheet_nums [id*="sheetSeq"]`).item(0)) == null ? void 0 : _a.click();
          };
          commonWork(this, {
            workerProvider: work,
            beforeRunning: async () => {
              resetToBegin();
              await $.sleep(1e3);
            },
            onRestart: () => resetToBegin()
          });
        }
      }),
      workDispatcher: new lib.Script({
        name: "浣滀笟璋冨害鑴氭湰",
        matches: [
          ["浣滀笟杩涘叆椤甸潰", "/platformwebapi/student/exam/"],
          ["纭浣滀笟椤甸潰", "/student/exam/studentExam_studentInfo.action"]
        ],
        hideInPanel: true,
        oncomplete() {
          if (/\/platformwebapi\/student\/exam/.test(window.location.href)) {
            lib.cors.on("icve-work-start", () => {
              setTimeout(() => {
                lib.$gm.unsafeWindow.openExamInfo();
              }, 3e3);
            });
          }
          if (/\/student\/exam\/studentExam_studentInfo.action/.test(window.location.href)) {
            setTimeout(() => {
              lib.$gm.unsafeWindow.enterExamPage();
            }, 3e3);
          }
        }
      }),
      "ai-study": new lib.Script({
        name: "馃枼锟?AI璇剧▼",
        namespace: "icve.ai.study",
        matches: [
          ["璇剧▼椤甸潰", "ai.icve.com.cn/app/coursedetails-excellent"],
          ["瀛︿範椤甸潰", "ai.icve.com.cn/excellent-study"]
        ],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              [
                "濡傛灉鑴氭湰鍗℃鎴栬€呮偍涓嶆兂瀛︿範锟?,
                "鍙互鐐瑰嚮鍏朵粬浠绘剰绔犺妭缁х画杩涜瀛︿範锟?,
                "PPT璇峰嬁鍔犲揩鐐瑰嚮锛屽惁鍒欏彲鑳芥棤娉曡褰曞涔犺繘搴︼拷?
              ]
            ]).outerHTML
          },
          volume,
          playbackRate: {
            label: "瑙嗛鍊嶏拷?,
            tag: "select",
            options: [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 6, 8, 16].map((rate) => [
              rate.toString(),
              rate + " x"
            ]),
            defaultValue: "1"
          },
          autoOpenAllChapter: {
            label: "鑷姩鎵撳紑鍏ㄩ儴绔犺妭",
            attrs: {
              title: "濡傛灉娌℃湁鎵撳紑鍏ㄩ儴绔犺妭锛岄偅涔堝綋浠诲姟鐐硅揪鍒板綋鍓嶇珷鑺傛渶鍚庝竴涓椂灏嗘棤娉曡烦杞埌鍏朵粬绔犺妭鍒楄〃锟?,
              type: "checkbox"
            },
            defaultValue: true
          },
          restudy
        },
        onhistorychange(type) {
          if (type !== "replace") {
            return;
          }
          if (location.href.includes("kcnr")) {
            location.reload();
          }
        },
        async oncomplete(type) {
          CommonProject.scripts.render.methods.pin(this);
          this.onConfigChange("volume", (val) => {
            if (state$2.study.currentMedia) {
              state$2.study.currentMedia.volume = parseFloat(val.toString());
            }
          });
          this.onConfigChange("playbackRate", (val) => {
            if (state$2.study.currentMedia) {
              state$2.study.currentMedia.playbackRate = parseFloat(val.toString());
            }
          });
          const waitForLoad2 = () => {
            return new Promise((resolve) => {
              const check = () => {
                if (document.querySelector(".contentBox")) {
                  resolve();
                } else {
                  setTimeout(check, 100);
                }
              };
              check();
            });
          };
          const closeStudyContinueDialog = () => {
            return new Promise((resolve) => {
              let stop = false;
              const check = () => {
                var _a, _b;
                if (document.querySelector(".el-message-box__wrapper")) {
                  (_a = lib.$el(".el-message-box__wrapper")) == null ? void 0 : _a.remove();
                  (_b = lib.$el(".v-modal")) == null ? void 0 : _b.remove();
                  resolve();
                } else {
                  !stop && setTimeout(check, 100);
                }
              };
              check();
              setTimeout(() => {
                stop = true;
                resolve();
              }, 3 * 1e3);
            });
          };
          await waitForLoad2();
          await closeStudyContinueDialog();
          await waitForLoad2();
          await $.sleep(3e3);
          $msg_and_log$1("info", "鍗冲皢鎵撳紑鍏ㄩ儴绔犺妭鍒楄〃锛岃绋嶇瓑");
          const openAllChapter = async () => {
            var _a;
            const model = lib.$modal.simple({
              maskCloseable: false,
              footer: void 0,
              content: "姝ｅ湪灞曞紑鍏ㄩ儴绔犺妭鍒楄〃锛岃鑰愬績绛夊緟涓嶈鎿嶄綔..."
            });
            const titles = Array.from(document.querySelectorAll(".one-title")).filter(
              (el) => !el.querySelector(".zhankai")
            );
            const waitForChapterOpen = (title) => {
              return new Promise((resolve) => {
                let stop = false;
                const check = () => {
                  var _a2;
                  const parent = (_a2 = title.parentElement) == null ? void 0 : _a2.parentElement;
                  const content = parent == null ? void 0 : parent.querySelector(".panel-content");
                  if ((content == null ? void 0 : content.style.display) !== "none" && ((content == null ? void 0 : content.querySelectorAll(".node").length) || 0) > 0) {
                    resolve();
                  } else {
                    !stop && setTimeout(check, 100);
                  }
                };
                check();
                setTimeout(() => {
                  stop = true;
                  resolve();
                }, 10 * 1e3);
              });
            };
            for (const title of titles) {
              try {
                (_a = title.querySelector(".jiantou")) == null ? void 0 : _a.click();
                title.focus();
                title.scrollIntoView({ behavior: "smooth", block: "center" });
                await waitForChapterOpen(title);
                await $.sleep(1e3);
              } catch (e) {
                $console.error("鎵撳紑绔犺妭澶辫触", e);
              }
            }
            model == null ? void 0 : model.remove();
          };
          if (this.cfg.autoOpenAllChapter)
            await openAllChapter();
          let study_id = "";
          document.querySelectorAll(".node").forEach((el) => {
            el.addEventListener("click", () => {
              study2(study_id = Math.random().toString(36).substr(2, 9));
            });
          });
          const study2 = async (id) => {
            var _a;
            $msg_and_log$1("info", "鍗冲皢寮€濮嬪涔狅細" + (((_a = lib.$el(".contentBox")) == null ? void 0 : _a.__vue__.nrdata.name) || "鏈煡浠诲姟锟?));
            await $.sleep(3e3);
            await (async () => {
              var _a2;
              const active = document.querySelector(".panelList .node.active");
              active == null ? void 0 : active.focus();
              active == null ? void 0 : active.scrollIntoView({ behavior: "smooth", block: "center" });
              if ((active == null ? void 0 : active.querySelector(".wc")) && !this.cfg.restudy) {
                return $msg_and_log$1("info", "褰撳墠浠诲姟宸插畬鎴愶紝鍗冲皢璺宠繃");
              }
              const vue = (_a2 = lib.$el(".FilePreview")) == null ? void 0 : _a2.__vue__;
              const img = lib.$el(".ql-editor");
              const work2 = lib.$el(".shiti");
              if (work2) {
                return $msg_and_log$1("warn", "妫€娴嬪埌褰撳墠涓轰綔涓氫换鍔★紝璇峰畬鎴愯绋嬪悗鎵嬪姩杩涘叆鑷姩绛旈锟?);
              } else if (img) {
                return $msg_and_log$1("warn", "妫€娴嬪埌褰撳墠涓哄浘鐗囦换鍔★紝鍗冲皢璺宠繃");
              } else {
                if (!vue) {
                  return lib.$message.error({ content: "鑾峰彇璇剧▼鏁版嵁澶辫触锛屾垨鑰呮湭鐭ヤ换鍔＄偣锛屽嵆灏嗚烦锟? });
                }
                const watchOffice = async () => {
                  const total = vue.photoList.length;
                  for (let index = 0; index < total + 1; index++) {
                    if (id !== study_id)
                      return;
                    vue.next();
                    await $.sleep(3e3);
                  }
                };
                lib.$message.info("寮€濮嬪锟?);
                if (["video", "audio"].includes(vue.curType)) {
                  await closeStudyContinueDialog();
                  await watchMedia$2();
                } else if (["office", "ppt"].includes(vue.curType)) {
                  await watchOffice();
                  if (id !== study_id)
                    return;
                  await $.sleep(1e3);
                } else {
                  $msg_and_log$1("warn", "鏈煡鐨勪换鍔＄偣锛屽嵆灏嗚烦锟?);
                }
              }
            })();
            if (id !== study_id)
              return;
            const next2 = getNext();
            if (!next2) {
              return $msg_and_log$1("warn", "娌℃湁鎵惧埌涓嬩竴绔犺妭锟?);
            }
            $msg_and_log$1("info", "鍗冲皢杩涘叆涓嬩竴绔犺妭");
            await $.sleep(3e3);
            if (id !== study_id)
              return;
            next2.click();
          };
          const getNext = () => {
            const list = Array.from(document.querySelectorAll(".panelList .node"));
            for (let index = 0; index < list.length; index++) {
              const element = list[index];
              if (element.classList.contains("active")) {
                return list[index + 1];
              }
            }
          };
          study2(study_id);
        }
      }),
      "ai-work": new lib.Script({
        name: "鉁嶏笍 AI浣滀笟",
        namespace: "icve.ai.work",
        matches: [["浣滀笟椤甸潰", "ai.icve.com.cn/preview-exam"]],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鑷姩绛旈鍓嶈锟?鈥滈€氱敤-鍏ㄥ眬璁剧疆锟?涓缃搴撻厤缃拷?,
              "鍙互鎼厤 鈥滈€氱敤-鍦ㄧ嚎鎼滈锟?涓€璧蜂娇鐢拷?,
              "璇锋墜鍔ㄨ繘鍏ヤ綔涓氳€冭瘯椤甸潰鎵嶈兘浣跨敤鑷姩绛旈锟?,
              "鑷姩绛旈鏃惰鍕垮垏鎹㈤鐩紝鍚﹀垯鍙兘瀵艰嚧閲嶅鎼滈鎴栬€呰剼鏈崱涓伙紒"
            ]).outerHTML
          }
        },
        oncomplete() {
          lib.$message.warn({ content: "鑷姩绛旈鏃惰鍕垮垏鎹㈤鐩紝鍚﹀垯鍙兘瀵艰嚧閲嶅鎼滈鎴栬€呰剼鏈崱涓伙拷?, duration: 0 });
          const resetToBegin = () => {
            var _a;
            (_a = document.querySelectorAll(`.list-box span`).item(0)) == null ? void 0 : _a.click();
          };
          commonWork(this, {
            workerProvider: aiWork,
            beforeRunning: async () => {
              resetToBegin();
              await $.sleep(1e3);
            },
            onRestart: () => resetToBegin()
          });
        }
      })
    }
  });
  async function watchMedia$2() {
    const media = await waitForMedia();
    media.volume = parseFloat(IcveMoocProject.scripts["ai-study"].cfg.volume.toString());
    media.playbackRate = parseFloat(IcveMoocProject.scripts["ai-study"].cfg.playbackRate.toString());
    state$2.study.currentMedia = media;
    const success = await playMedia(() => media.play());
    if (!success) {
      return;
    }
    return new Promise((resolve, reject) => {
      media.addEventListener("ended", () => {
        resolve();
      });
      media.addEventListener("pause", () => {
        setTimeout(() => {
          if (media.ended) {
            resolve();
          } else if (media.paused) {
            media.play();
            media.volume = parseFloat(IcveMoocProject.scripts["ai-study"].cfg.volume.toString());
            media.playbackRate = parseFloat(IcveMoocProject.scripts["ai-study"].cfg.playbackRate.toString());
          }
        }, 1e3);
      });
    });
  }
  function work({ answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info("寮€濮嬩綔锟?);
    CommonProject.scripts.workResults.methods.init();
    console.log({ answererWrappers, period, thread });
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => {
        var _a, _b;
        if (t2) {
          const title = t2.cloneNode(true);
          (_a = title.querySelector('[name*="questionIndex"]')) == null ? void 0 : _a.remove();
          (_b = title.querySelector(".q_score")) == null ? void 0 : _b.remove();
          return title.innerText.trim().replace(/^锟?, "") || "";
        }
        return "";
      }).join(",");
    };
    const workResults = [];
    let totalQuestionCount = 0;
    let requestedCount = 0;
    let resolvedCount = 0;
    function getType(options) {
      const radio_len = options.map((o) => o.querySelector('[type="radio"]')).reduce((a, b) => {
        return a + (b ? 1 : 0);
      }, 0);
      return radio_len > 0 ? radio_len === 2 ? "judgement" : "single" : options.some((o) => o.querySelector('[type="checkbox"]')) ? "multiple" : options.some((o) => o.querySelector("textarea")) ? "completion" : options.some((o) => o.querySelector(".fillblank_input input")) ? "fill-blank" : void 0;
    }
    const worker = new OCSWorker({
      root: ".q_content",
      elements: {
        title: '.divQuestionTitle, [name="fillblankTitle"]',
        options: ".questionOptions .q_option, .questionOptions.divTextarea, .answerOption"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await $.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: getType(ctx.elements.options) || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      async work(ctx) {
        const options = ctx.elements.options;
        const type = getType(options);
        if (!type) {
          throw new Error("鏃犳硶鑾峰彇棰樼洰绫诲瀷锟?);
        }
        if (type === "fill-blank") {
          const inputs = options.map((o) => Array.from(o.querySelectorAll(".fillblank_input input"))).flat();
          for (const searchInfo of ctx.searchInfos) {
            for (const result of searchInfo.results) {
              const answers = splitAnswer(result.answer);
              if (answers.length === inputs.length) {
                for (let index = 0; index < inputs.length; index++) {
                  inputs[index].value = answers[index];
                }
                return { finish: true };
              }
            }
          }
        } else {
          const resolver = createDefaultQuestionResolver(ctx)[type];
          const res = await resolver(ctx.searchInfos, ctx.elements.options, (type2, answer, option) => {
            var _a, _b;
            if (type2 === "judgement" || type2 === "single" || type2 === "multiple") {
              if (option.querySelector(".checkbox_on") === null) {
                (_a = lib.$el("div", option)) == null ? void 0 : _a.click();
              }
            } else if (type2 === "completion" && answer.trim()) {
              const text = option.querySelector("textarea");
              const textIframe = option.querySelector('iframe[id*="ueditor"]');
              if (text) {
                text.value = answer;
              }
              if (textIframe) {
                const view = (_b = textIframe.contentWindow) == null ? void 0 : _b.document.querySelector("body.view > p");
                if (view) {
                  view.innerText = answer;
                }
              }
            }
          });
          return res;
        }
        return { finish: false };
      },
      onElementSearched(elements2, root2) {
        console.log("elements", elements2);
      },
      onResultsUpdate(currentResult) {
        var _a;
        if (currentResult.resolved) {
          workResults.push(...simplifyWorkResult([currentResult], titleTransform));
          CommonProject.scripts.workResults.methods.setResults(workResults);
          totalQuestionCount++;
          requestedCount++;
          resolvedCount++;
          if ((_a = currentResult.result) == null ? void 0 : _a.finish) {
            CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
              simplifyWorkResult([currentResult], titleTransform)
            );
          }
          CommonProject.scripts.workResults.methods.updateWorkState({
            totalQuestionCount,
            requestedCount,
            resolvedCount
          });
        }
      }
    });
    const getNextBtn = () => document.querySelector(".paging_next");
    let next2 = getNextBtn();
    (async () => {
      while (next2 && worker.isClose === false) {
        await worker.doWork({ enable_debug: true });
        await $.sleep(1e3);
        next2 = getNextBtn();
        if (next2.style.display === "none") {
          break;
        } else {
          next2 == null ? void 0 : next2.click();
          await $.sleep(1e3);
        }
      }
      lib.$message.success({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: 0 });
      worker.emit("done");
      CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "icve";
    })();
    return worker;
  }
  function aiWork({ answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info("寮€濮嬩綔锟?);
    CommonProject.scripts.workResults.methods.init();
    console.log({ answererWrappers, period, thread });
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => {
        if (t2) {
          return t2.innerText.trim();
        }
        return "";
      }).join(",");
    };
    const workResults = [];
    let totalQuestionCount = 0;
    let requestedCount = 0;
    let resolvedCount = 0;
    function getType(options) {
      const radio_len = options.map((o) => o.querySelector('[type="radio"]')).reduce((a, b) => {
        return a + (b ? 1 : 0);
      }, 0);
      return radio_len > 0 ? radio_len === 2 ? "judgement" : "single" : options.some((o) => o.querySelector('[type="checkbox"]')) ? "multiple" : options.some((o) => o.querySelector("textarea")) ? "completion" : options.some((o) => o.querySelector(".fillblank_input input")) ? "fill-blank" : void 0;
    }
    const worker = new OCSWorker({
      root: ".content-item",
      elements: {
        title: ".questions-content [class*=title-content]",
        options: "label[class*=group-item]"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await $.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: getType(ctx.elements.options) || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: {
        async handler(type, answer, option, ctx) {
          if (type === "judgement" || type === "single" || type === "multiple") {
            if (option.querySelector(".ivu-radio-checked") === null) {
              option == null ? void 0 : option.click();
            }
          } else if (type === "completion" && answer.trim())
            ;
        }
      },
      onElementSearched(elements2, root2) {
        console.log("elements", elements2);
      },
      onResultsUpdate(currentResult) {
        var _a;
        if (currentResult.resolved) {
          workResults.push(...simplifyWorkResult([currentResult], titleTransform));
          CommonProject.scripts.workResults.methods.setResults(workResults);
          totalQuestionCount++;
          requestedCount++;
          resolvedCount++;
          if ((_a = currentResult.result) == null ? void 0 : _a.finish) {
            CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(
              simplifyWorkResult([currentResult], titleTransform)
            );
          }
          CommonProject.scripts.workResults.methods.updateWorkState({
            totalQuestionCount,
            requestedCount,
            resolvedCount
          });
        }
      }
    });
    const getNextBtn = () => document.querySelector("div.center_btn > button:nth-child(2)");
    let next2 = getNextBtn();
    (async () => {
      while (next2 && worker.isClose === false) {
        await worker.doWork({ enable_debug: true });
        await $.sleep(1e3);
        next2 = getNextBtn();
        if (next2.getAttribute("disabled")) {
          break;
        } else {
          next2 == null ? void 0 : next2.click();
          await $.sleep(1e3);
        }
      }
      lib.$message.success({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: 0 });
      worker.emit("done");
      CommonProject.scripts.workResults.cfg.questionPositionSyncHandlerType = "icve";
    })();
    return worker;
  }
  function waitForPopupQuestion(dom2) {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        var _a, _b;
        const el = lib.$el(".popup-test", dom2);
        if (el) {
          clearInterval(interval);
          const right_answer = ((_a = lib.$el("#right_answer", el)) == null ? void 0 : _a.value) || "A";
          for (const answer of right_answer.split("")) {
            const item = lib.$el(`li.test-item-cell[curval="${answer}"]`, el);
            item == null ? void 0 : item.click();
          }
          (_b = lib.$el('[name="save_btn"]', el)) == null ? void 0 : _b.click();
          setTimeout(() => {
            var _a2;
            (_a2 = lib.$el('[name="continue_btn"]', el)) == null ? void 0 : _a2.click();
            resolve();
          }, 3e3);
        }
      }, 1e3);
      setTimeout(() => {
        clearInterval(interval);
        resolve();
        console.log("鏈壘鍒板脊绐楋紝缁х画鎵ц");
      }, 60 * 1e3);
    });
  }
  function handleContinueDialog() {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        const el = document.querySelector(".layui-layer-btn0");
        if (el) {
          el.click();
          setTimeout(() => {
            clearInterval(interval);
            resolve();
          }, 1e3);
        }
      }, 3e3);
      setTimeout(() => {
        clearInterval(interval);
        resolve();
        console.log("鏈壘鍒板脊绐楋紝缁х画鎵ц");
      }, 60 * 1e3);
    });
  }
  const state$1 = {
    studying: false,
    studyingId: "",
    media: null
  };
  const work_pages = [
    ["璧勬簮搴搆eep浣滀笟椤甸潰", "study/spockeepTest"],
    ["璧勬簮搴搄ob浣滀笟椤甸潰", "study/spocjobTest"],
    ["璧勬簮搴撹€冭瘯", "study/spoctest"],
    ["浣滀笟椤甸潰", "icve-study/coursePreview/jobTes"],
    ["鑰冭瘯椤甸潰", "icve-study/coursePreview/test"],
    ["鑰冭瘯椤甸潰", "icve-study/test"],
    ["璧勬簮搴撴祴楠岄〉锟?, "icve-study/coursePreview/keepTest"]
  ];
  const isWork = () => {
    return window.location.href.includes("icve-study/coursePreview/jobTes") || window.location.href.includes("icve-study/coursePreview/keepTest") || window.location.href.includes("study/spockeepTest") || window.location.href.includes("study/spocjobTest");
  };
  const isExam = () => {
    return window.location.href.includes("icve-study/coursePreview/test") || window.location.href.includes("icve-study/test") || window.location.href.includes("study/spoctest");
  };
  const ZJYProject = lib.Project.create({
    name: "鑱屾暀锟?,
    domains: ["icve.com.cn", "zjy2.icve.com.cn", "zyk.icve.com.cn"],
    scripts: {
      guide: new lib.Script({
        name: "馃枼锟?浣跨敤鎻愮ず",
        matches: [
          ["瀛︿範椤甸潰", "zjy2.icve.com.cn/study"],
          ["璧勬簮锟?, "zyk.icve.com.cn/icve-study/"]
        ],
        namespace: "zjy.study.guide",
        configs: {
          notes: {
            defaultValue: "璇风偣鍑讳换鎰忕珷鑺傦紝杩涘叆瀛︿範锟?
          }
        }
      }),
      dispatcher: new lib.Script({
        name: "璋冨害锟?,
        matches: [
          ["瀛︿範椤甸潰", "zjy2.icve.com.cn/study"],
          ["璧勬簮锟?, "zyk.icve.com.cn/icve-study/"],
          ["鍐呭璧勬簮椤甸潰", "zjy2.icve.com.cn/study/studentFast/classroomNow"],
          ["鍦ㄧ嚎璇惧爞瀛︿範椤甸潰", "zjy2.icve.com.cn/study/studentFast/courseware"]
        ],
        hideInPanel: true,
        methods() {
          return {
            dispatch: async () => {
              var _a, _b, _c;
              if (["zjy2.icve.com.cn/study/studentFast/classroomNow"].some((i) => window.location.href.includes(i))) {
                await waitForElement(".classroom_activities .active_list");
                const courseData = getCourseDataInClassroomNowPage();
                console.log(courseData);
                const courseId = ((_c = (_b = (_a = document.querySelector(".teacherLayout")) == null ? void 0 : _a.__vue__) == null ? void 0 : _b.courseInfo) == null ? void 0 : _c.id) || "";
                if (!courseData || !courseId) {
                  return;
                }
                ZJYProject.scripts.study.cfg.currentCourseId = courseId;
                ZJYProject.scripts.study.cfg.courseList = courseData;
                lib.$message.success("璇剧▼鏁版嵁鑾峰彇鎴愬姛锛岃鐐瑰嚮璇剧▼绔犺妭寮€濮嬪锟?);
              } else if ([
                "zyk.icve.com.cn/icve-study/coursePreview/courseware",
                "zjy2.icve.com.cn/study/coursePreview/spoccourseIndex/courseware",
                "zjy2.icve.com.cn/study/studentFast/courseware"
              ].some((i) => window.location.href.includes(i))) {
                const isClassroomNowStudy = location.href.includes("zjy2.icve.com.cn/study/studentFast/courseware");
                ZJYProject.scripts.study.methods.main(isClassroomNowStudy ? "classroomNow" : "normal");
              } else if (work_pages.map(([_, p]) => p).some((i) => window.location.href.includes(i))) {
                ZJYProject.scripts.work.methods.main();
              }
            }
          };
        },
        onhistorychange(type) {
          if (type === "push") {
            this.methods.dispatch();
          }
        },
        oncomplete() {
          this.methods.dispatch();
        }
      }),
      study: new lib.Script({
        matches: [
          ["瀛︿範椤甸潰", "zjy2.icve.com.cn/study/coursePreview/spoccourseIndex/courseware"],
          ["鍦ㄧ嚎璇惧爞瀛︿範椤甸潰", "zjy2.icve.com.cn/studentFast/courseware"],
          ["璧勬簮搴撳涔犻〉锟?, "zyk.icve.com.cn/icve-study/coursePreview/courseware"]
        ],
        name: "鉁嶏笍 璇剧▼瀛︿範",
        namespace: "zjy.study.main",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              ["濡傛灉鑴氭湰鍗℃鎴栬€呮偍涓嶆兂瀛︿範锟?, "鍙互鐐瑰嚮鍏朵粬浠绘剰绔犺妭缁х画杩涜瀛︿範锟?],
              "鎻愮ず锛氳亴鏁欎簯鏃犳硶浣跨敤鍊嶉€燂拷?
            ]).outerHTML
          },
          volume,
          playbackRate: {
            label: "瑙嗛鍊嶏拷?,
            tag: "select",
            options: [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3, 3.5, 4, 6, 8].map((rate) => [
              rate.toString(),
              rate + " x"
            ]),
            defaultValue: "1"
          },
          pptReadPeriod: {
            label: "PPT 闃呰姣忛〉鍋滅暀鏃堕棿锛堢锟?,
            defaultValue: 1,
            attrs: { type: "number", min: 1, step: 1, max: 10 }
          },
          currentCourseId: {
            defaultValue: ""
          },
          courseList: {
            defaultValue: []
          }
        },
        methods() {
          return {
            main: async (type) => {
              var _a;
              const id = new URL(window.location.href).searchParams.get(type === "classroomNow" ? "activityId" : "id");
              if (!id) {
                return;
              }
              if (state$1.studying && id === state$1.studyingId) {
                return;
              }
              state$1.studyingId = id;
              state$1.studying = true;
              CommonProject.scripts.render.methods.pin(this);
              this.onConfigChange("volume", (val) => {
                if (state$1.media) {
                  state$1.media.volume = parseFloat(val.toString());
                }
              });
              this.onConfigChange("playbackRate", (val) => {
                if (state$1.media) {
                  state$1.media.playbackRate = parseFloat(val.toString());
                }
              });
              await waitForLoad();
              setTimeout(() => {
                var _a2, _b;
                (_a2 = lib.$el(".el-message-box__wrapper")) == null ? void 0 : _a2.remove();
                (_b = lib.$el(".v-modal")) == null ? void 0 : _b.remove();
              }, 3e3);
              await waitForLoad();
              if (type === "normal") {
                const courseId = getUniqueCourseId();
                if (!courseId) {
                  lib.$message.error({ content: "鑾峰彇璇剧▼鏁版嵁澶辫触锛岃鎵嬪姩鍒锋柊椤甸潰" });
                  return;
                }
                const not_same_class = !ZJYProject.scripts.study.cfg.currentCourseId || ZJYProject.scripts.study.cfg.currentCourseId !== courseId;
                if (not_same_class || !ZJYProject.scripts.study.cfg.courseList || ZJYProject.scripts.study.cfg.courseList.length === 0) {
                  const courseData = await getCourseData();
                  if (!courseData) {
                    return;
                  }
                  ZJYProject.scripts.study.cfg.currentCourseId = courseId;
                  ZJYProject.scripts.study.cfg.courseList = courseData;
                }
              }
              const courseInfo = ZJYProject.scripts.study.cfg.courseList.find((i) => i.id === id);
              if (!courseInfo) {
                const btn = lib.h("button", { className: "base-style-button" }, "淇鏁版嵁");
                btn.onclick = async () => {
                  const courseId = getUniqueCourseId();
                  if (!courseId) {
                    lib.$message.error({ content: "鑾峰彇璇剧▼鏁版嵁澶辫触锟? });
                    return;
                  }
                  const courseData = await getCourseData();
                  if (!courseData) {
                    return;
                  }
                  ZJYProject.scripts.study.cfg.currentCourseId = courseId;
                  ZJYProject.scripts.study.cfg.courseList = courseData;
                  lib.$modal.simple({
                    title: "鎻愮ず",
                    content: "鏁版嵁宸蹭慨澶嶅畬姣曪紝璇峰埛鏂伴〉闈㈤噸鏂板皾璇曡繍琛岋拷?
                  });
                };
                const err = "鑾峰彇璇剧▼淇℃伅澶辫触锛岃鎵嬪姩鍒锋柊椤甸潰锛屾垨鑰呭皾璇曚慨澶嶆暟鎹細";
                lib.$message.error({ content: lib.h("span", [err, btn]), duration: 0 });
                $console.error(err);
                return;
              }
              const vue = getVueBindElement();
              const courseType = vue.curType === "video" ? "video" : (courseInfo == null ? void 0 : courseInfo.fileType) || "";
              const started_url = window.location.href;
              let msg = "寮€濮嬪涔狅細" + courseType + "-" + courseInfo.name;
              lib.$message.success(msg);
              $console.info(msg);
              if (["ppt", "doc", "pptx", "docx", "pdf", "txt", "ppt鏂囨。"].some((i) => courseType === i)) {
                await watchFile(this.cfg.pptReadPeriod);
              } else if (["video", "audio", "mp4", "mp3", "flv", "瑙嗛"].some((i) => courseType === i)) {
                const text = ((_a = lib.$el(".guide")) == null ? void 0 : _a.textContent) || "";
                msg = `浠诲姟锟?${courseInfo.name}锛屼笉鏀寔鎾斁銆俙;
                if (text.includes("寰堟姳姝夛紝鎮ㄧ殑娴忚鍣ㄤ笉鏀寔鎾斁姝ょ被鏂囦欢") || text.includes("姝よ棰戞殏鏃犳硶鎾斁")) {
                  msg = `浠诲姟锟?${courseInfo.name}锛屼笉鏀寔鎾斁銆俙;
                  lib.$message.error(msg);
                  $console.error(msg);
                } else {
                  await watchMedia$1();
                }
              } else if (["png", "jpg", "鍥剧墖"].some((i) => courseType === i)) {
                msg = `宸叉煡鐪嬪浘鐗囦换鍔＄偣 ${courseInfo.name}锛屽嵆灏嗚烦杩囥€俙;
                lib.$message.info(msg);
                $console.info(msg);
              } else {
                msg = `鏈煡鐨勪换鍔＄偣 ${courseInfo.name}锛岀被锟?${courseType}锛岃璺熶綔鑰呰繘琛屽弽棣堛€俙;
                lib.$message.error(msg);
                $console.error(msg);
              }
              if (started_url === window.location.href) {
                msg = courseInfo.name + " 浠诲姟鐐圭粨鏉燂紝浜旂鍚庝笅涓€锟?;
                lib.$message.warn("濡傛灉鑱屾暀浜戜竴鐩村崱鍦ㄦ樉绀猴細鈥滆祫婧愮被鍨嬫棤娉曞涔狅紝璇锋牳瀵规暟鎹紒锟?璇锋墜鍔ㄥ垏鎹笅涓€绔狅拷?);
                lib.$message.info(msg);
                $console.info(msg);
                await $.sleep(5e3);
                await next(type);
              }
            }
          };
        }
      }),
      work: new lib.Script({
        matches: work_pages,
        name: "鉁嶏笍 浣滀笟鑰冭瘯鑴氭湰",
        namespace: "zjy.work.main",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "鑷姩绛旈鍓嶈锟?鈥滈€氱敤-鍏ㄥ眬璁剧疆锟?涓缃搴撻厤缃拷?,
              "鍙互鎼厤 鈥滈€氱敤-鍦ㄧ嚎鎼滈锟?涓€璧蜂娇鐢拷?,
              "璇锋墜鍔ㄨ繘鍏ヤ綔涓氳€冭瘯椤甸潰鎵嶈兘浣跨敤鑷姩绛旈锟?
            ]).outerHTML
          }
        },
        methods() {
          return {
            main: async () => {
              if (isWork() || isExam()) {
                await waitForQuestions();
                commonWork(this, {
                  workerProvider: (opt) => workOrExam(isWork() ? "work" : "exam", opt)
                });
              }
            }
          };
        }
      })
    }
  });
  async function watchMedia$1() {
    const media = await waitForMedia();
    media.volume = parseFloat(ZJYProject.scripts.study.cfg.volume.toString());
    media.playbackRate = parseFloat(ZJYProject.scripts.study.cfg.playbackRate.toString());
    state$1.media = media;
    const success = await playMedia(() => media.play());
    if (!success) {
      return;
    }
    return new Promise((resolve, reject) => {
      media.addEventListener("ended", () => {
        resolve();
      });
      media.addEventListener("pause", () => {
        setTimeout(() => {
          if (media.ended) {
            resolve();
          } else if (media.paused) {
            media.play();
            media.volume = parseFloat(ZJYProject.scripts.study.cfg.volume.toString());
            media.playbackRate = parseFloat(ZJYProject.scripts.study.cfg.playbackRate.toString());
          }
        }, 1e3);
      });
    });
  }
  async function watchFile(pptReadPeriod) {
    var _a, _b;
    const vue = getPPTVueBindElement();
    if (!vue) {
      return;
    }
    while (true) {
      const [current, total] = ((_b = (_a = document.querySelector(".preview .page")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.trim().replace("涓婁竴锟?, "").replace("涓嬩竴锟?, "").split("/").map((i) => parseInt(i.trim()))) || [];
      if (!current || !total) {
        break;
      }
      if (current >= total - 1) {
        break;
      }
      await $.sleep(pptReadPeriod * 1e3);
      try {
        vue.next && vue.next();
      } catch {
      }
      try {
        vue.skip && vue.skip();
      } catch {
      }
    }
  }
  function getUniqueCourseId() {
    var _a, _b, _c, _d;
    return ((_d = (_c = (_b = (_a = document.querySelector(".coursePreviewIndex")) == null ? void 0 : _a.__vue__) == null ? void 0 : _b.list) == null ? void 0 : _c[0]) == null ? void 0 : _d.courseId) || "";
  }
  function isZyk() {
    return location.href.includes("zyk.icve.com.cn");
  }
  function getVueBindElement() {
    var _a, _b;
    return ((_a = lib.$el(".guide")) == null ? void 0 : _a.__vue__) || ((_b = lib.$el(".teach")) == null ? void 0 : _b.__vue__);
  }
  function getPPTVueBindElement() {
    var _a, _b, _c;
    return ((_a = lib.$el(".FilePreview")) == null ? void 0 : _a.__vue__) || ((_b = lib.$el(".guide")) == null ? void 0 : _b.__vue__) || ((_c = lib.$el(".teach")) == null ? void 0 : _c.__vue__);
  }
  async function next(type) {
    var _a;
    const field = type === "classroomNow" ? "activityId" : "id";
    const id = new URL(window.location.href).searchParams.get(field);
    let nextObject;
    const data = ZJYProject.scripts.study.cfg.courseList;
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      if (["娴嬮獙", "璁ㄨ"].some((i) => item.fileType === i)) {
        continue;
      }
      if (item.id === id) {
        nextObject = data[index + 1];
        break;
      }
    }
    if (id && nextObject) {
      const vue = getVueBindElement();
      if (((_a = vue == null ? void 0 : vue.nextObj) == null ? void 0 : _a.id) && nextObject.id === vue.nextObj.id) {
        vue.preNext(vue.nextObj);
        return;
      }
      await $.sleep(3e3);
      const url = new URL(window.location.href);
      if (nextObject.courseDesignId) {
        url.searchParams.set("courseDesignId", nextObject.courseDesignId);
      }
      url.searchParams.set(field, nextObject.id);
      window.location.replace(url.href);
    } else {
      lib.$message.success({
        duration: 0,
        content: "鍏ㄩ儴浠诲姟宸插畬鎴愶拷?
      });
      $console.info("鍏ㄩ儴浠诲姟宸插畬鎴愶拷?);
      CommonProject.scripts.settings.methods.notificationBySetting("鍏ㄩ儴浠诲姟鐐瑰凡瀹屾垚锟?, {
        duration: 0,
        extraTitle: "鑱屾暀浜戝涔犺剼锟?
      });
      state$1.studying = false;
    }
  }
  function getCourseDataInClassroomNowPage() {
    var _a, _b, _c;
    const list = ((_b = (_a = document.querySelector(".classroom_activities")) == null ? void 0 : _a.__vue__) == null ? void 0 : _b.activeList) || [];
    const data = [];
    const temp = JSON.parse(JSON.stringify(list));
    while (temp.length > 0) {
      const item = temp.shift();
      if (((_c = item == null ? void 0 : item.children) == null ? void 0 : _c.length) > 0) {
        temp.unshift(...item.children);
      } else {
        data.push({
          name: item.title,
          id: item.activityId,
          fileType: item.fileType,
          courseDesignId: item.courseDesignId,
          levelName: item.levelName || ""
        });
      }
    }
    return data;
  }
  async function getCourseData() {
    var _a;
    const getDataList = () => {
      var _a2, _b, _c;
      const list = ((_b = (_a2 = document.querySelector(".coursePreviewIndex")) == null ? void 0 : _a2.__vue__) == null ? void 0 : _b.list) || [];
      const data = [];
      const temp = JSON.parse(JSON.stringify(list));
      while (temp.length > 0) {
        const item = temp.shift();
        if (((_c = item == null ? void 0 : item.children) == null ? void 0 : _c.length) > 0) {
          temp.unshift(...item.children);
        } else {
          data.push({
            name: item.name,
            id: item.id,
            fileType: item.fileType,
            levelName: item.levelName || "",
            courseDesignId: item.courseDesignId || ""
          });
        }
      }
      return data;
    };
    if (isZyk() === false) {
      const progress = lib.h("div");
      const modal_content = lib.h("div", [
        lib.h("div", { className: "notes card" }, [
          lib.$ui.notes([
            "鑱屾暀浜戠敱浜庡ぇ绔犺妭涔嬮棿鏃犺嚜鍔ㄤ笅涓€鑺傛寜閽紝闇€瑕佸湪璇剧▼寮€濮嬪墠",
            "鐢辩▼搴忚鍙栧叏閮ㄧ珷鑺傛暟鎹紝杩欐牱鎵嶈兘鑷姩杩愯",
            "鏁版嵁鍙渶璇诲彇涓€閬嶅嵆鍙紝鍚庣画鏃犻渶閲嶆柊璇诲彇"
          ])
        ]),
        progress
      ]);
      let force_pause = false;
      const modal2 = lib.$modal.confirm({
        content: modal_content,
        maskCloseable: false,
        title: "姝ｅ湪鑾峰彇璇剧▼鏁版嵁涓紝璇峰嬁鎿嶄綔...",
        confirmButton: null,
        cancelButtonText: "寮哄埗鏆傚仠",
        onCancel() {
          force_pause = true;
        }
      });
      const kejianListEl = document.querySelector(".kejianList");
      if (!kejianListEl) {
        lib.$message.error({ content: "鑾峰彇璇剧▼鏁版嵁澶辫触锛岃鎵嬪姩鍒锋柊椤甸潰" });
        return void 0;
      }
      if (kejianListEl.style.display === "none") {
        (_a = Array.from(document.querySelectorAll(".courseBtn div.customBtn")).find((el) => {
          var _a2;
          return (_a2 = el.textContent) == null ? void 0 : _a2.includes("璇句欢鐩綍");
        })) == null ? void 0 : _a.click();
        await $.sleep(1e3);
      }
      const folders = [];
      while (true) {
        const itemsElList = Array.from(document.querySelectorAll(".items"));
        const unsaved = itemsElList.find((item) => folders.includes(item) === false);
        if (!unsaved) {
          break;
        }
        const list = getDataList();
        const course_info = list.find(
          (item) => {
            var _a2;
            return `${item.levelName || ""}${item.name}`.replace(/\s/g, "") === (((_a2 = unsaved.textContent) == null ? void 0 : _a2.trim().replace(/\s/g, "")) || "");
          }
        );
        if (!course_info || ["鐖惰妭锟?, "瀛愯妭锟?].includes(course_info.fileType) === false) {
          folders.push(unsaved);
          continue;
        }
        if (force_pause) {
          const err = "宸插己鍒舵殏鍋滐紝璇锋墜鍔ㄥ埛鏂伴〉闈㈠悗鎵嶈兘閲嶆柊杩愯";
          lib.$message.error({ content: err, duration: 0 });
          lib.$modal.alert({ content: err });
          return void 0;
        }
        folders.push(unsaved);
        if (modal2) {
          progress.innerHTML = "<br><b>褰撳墠宸茶幏锟?" + document.querySelectorAll(".fIteml,.iChild").length + " 涓皬锟?/b>";
        }
        unsaved.click();
        await $.sleep(1e3);
      }
      modal2 == null ? void 0 : modal2.remove();
    }
    return getDataList();
  }
  function waitForLoad() {
    return waitForElement(() => getVueBindElement());
  }
  async function waitForQuestions() {
    return waitForElement(".subjectList");
  }
  function workOrExam(type, { answererWrappers, period, thread, answerSeparators, answerMatchMode }) {
    lib.$message.info({ content: "寮€濮嬩綔锟? });
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "zjy"
    });
    const titleTransform = (titles) => {
      return titles.filter((t2) => t2 == null ? void 0 : t2.innerText).map((t2) => t2 == null ? void 0 : t2.innerText).join(",");
    };
    const worker = new OCSWorker({
      root: ".subjectDet",
      elements: {
        title: type === "work" ? "h2,h3,h4,h5,h6" : ".titleTest span:not(.xvhao)",
        options: ".optionList div , .tkInput .el-input, .tkInput .el-textarea"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await $.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: {
        type(ctx) {
          const options = ctx.elements.options;
          const radio_len = options.map((o) => o.querySelector('[type="radio"]')).reduce((a, b) => {
            return a + (b ? 1 : 0);
          }, 0);
          return radio_len > 0 ? radio_len === 2 ? "judgement" : "single" : options.some((o) => o.querySelector('[type="checkbox"]')) ? "multiple" : options.some((o) => o.querySelector('[type="text"]')) || options.some((o) => o.querySelector("textarea")) ? "completion" : void 0;
        },
        handler(type2, answer, option, ctx) {
          var _a, _b;
          if (type2 === "judgement" || type2 === "single" || type2 === "multiple") {
            if (((_a = option.querySelector("input")) == null ? void 0 : _a.checked) !== true) {
              (_b = option.querySelector("label")) == null ? void 0 : _b.click();
            }
          } else if (type2 === "completion" && answer.trim()) {
            const text = option.querySelector('input[type="text"]');
            const textarea = option.querySelector("textarea");
            if (text) {
              text.value = answer;
              text.dispatchEvent(new Event("input", { bubbles: true }));
            } else if (textarea) {
              textarea.value = answer;
              textarea.dispatchEvent(new Event("input", { bubbles: true }));
            }
          }
        }
      },
      onResultsUpdate(curr, _, res) {
        var _a;
        CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        if ((_a = curr.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(simplifyWorkResult([curr], titleTransform));
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    worker.doWork({ enable_debug: true }).then(() => {
      lib.$message.info({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: 0 });
      worker.emit("done");
    }).catch((err) => {
      lib.$message.error({ content: `浣滀笟/鑰冭瘯澶辫触: ${err}`, duration: 0 });
    });
    return worker;
  }
  const $msg_and_log = (type, msg) => {
    lib.$message[type](msg);
    $console[type](msg);
  };
  const state = {
    currentMedia: void 0,
    currentUrlHash: "",
    currentRunningScriptName: "",
    current_job_id: ""
  };
  const ICourseProject = lib.Project.create({
    name: "涓浗澶уMOOC",
    domains: ["icourse163.org"],
    scripts: {
      dispatcher: new lib.Script({
        name: "璋冨害锟?,
        hideInPanel: true,
        matches: [["鎵€鏈夐〉锟?, "icourse163.org"]],
        oncomplete() {
          setInterval(() => {
            var _a, _b;
            const hash = new URL(window.location.href).hash;
            if (state.currentUrlHash !== hash) {
              state.currentRunningScriptName = "";
            }
            state.currentUrlHash = hash;
            for (const key in ICourseProject.scripts) {
              if (Object.prototype.hasOwnProperty.call(ICourseProject.scripts, key)) {
                const script2 = ICourseProject.scripts[key];
                const runAtHash = Array.isArray(script2.cfg.runAtHash) ? script2.cfg.runAtHash : [script2.cfg.runAtHash];
                if (runAtHash.length && runAtHash.some((h2) => state.currentUrlHash.includes(h2))) {
                  if (state.currentRunningScriptName !== script2.name) {
                    state.currentRunningScriptName = script2.name;
                    state.current_job_id = Math.random().toString(16).slice(2);
                    (_b = (_a = script2.methods) == null ? void 0 : _a.main) == null ? void 0 : _b.call(_a, {
                      canRun: () => {
                        return state.currentUrlHash && runAtHash.some((h2) => state.currentUrlHash.includes(h2));
                      },
                      job_id: state.current_job_id
                    });
                  }
                  break;
                }
              }
            }
          }, 1e3);
        }
      }),
      guide: new lib.Script({
        name: "馃挕 浣跨敤鎻愮ず",
        matches: [["", "icourse163.org"]],
        namespace: "icourse.guide-v1",
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["鎵嬪姩杩涘叆浠绘剰璇剧▼閲岀殑璇句欢/浣滀笟锛屽嵆鍙紑濮嬭嚜鍔ㄥ锟?]).outerHTML
          },
          runAtHash: {
            defaultValue: ["/home/course"]
          }
        },
        methods() {
          return {
            main: async () => {
              console.log(state, this.cfg.runAtHash);
              CommonProject.scripts.render.methods.pin(this);
            }
          };
        }
      }),
      study: new lib.Script({
        name: "馃枼锟?瀛︿範鑴氭湰",
        namespace: "icourse.study-v1",
        matches: [
          ["MOOC浣滀笟椤甸潰", "icourse163.org/learn"],
          ["SPOC浣滀笟椤甸潰", "icourse163.org/spoc/learn"]
        ],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes([
              "璇峰嬁鍦ㄤ娇鐢ㄨ繃绋嬩腑鏈€灏忓寲娴忚锟?,
              "鑷姩璁ㄨ榛樿鍏抽棴锛屽闇€寮€鍚鍦ㄤ笅鏂硅缃腑璁剧疆",
              "浣滀笟璇峰畬鎴愯绋嬪悗鎵嬪姩杩涘叆"
            ]).outerHTML
          },
          runAtHash: {
            defaultValue: "/learn/content?type=detail"
          },
          playbackRate,
          volume,
          readSpeed: {
            label: "PPT缈婚槄閫熷害锛堢锟?,
            attrs: { type: "number", step: "1", min: "1", max: "10" },
            defaultValue: 1
          },
          discussionStrategy: {
            label: "璁ㄨ鑷姩鍥炲鏂瑰紡",
            tag: "select",
            defaultValue: "not-reply",
            options: [
              ["not-reply", "涓嶈璁哄洖锟?],
              ["max-show-up", "鑾峰彇鍑虹幇鏈€澶氱殑璇勮杩涜鍥炲"],
              ["max-fav", "鑾峰彇鏈€澶氱偣璧炵殑璇勮杩涜鍥炲"],
              ["use-newest", "鑾峰彇鏈€鏂扮殑璇勮杩涜鍥炲"]
            ]
          },
          enableChapterTest: {
            label: "闅忓爞娴嬮獙鑷姩绛旈",
            attrs: {
              type: "checkbox",
              title: "鏄惁寮€鍚殢鍫傛祴楠岃嚜鍔ㄧ瓟棰橈紝榛樿鍏抽棴锛屾祴璇曟椂鍙渶鐐瑰嚮鍗冲彲瀹屾垚娴嬮獙锛屼絾杩欓噷淇濈暀閫夐」闃叉闇€瑕佸紑鍚拷?
            },
            defaultValue: false
          }
        },
        oncomplete() {
          this.onConfigChange("playbackRate", (playbackRate2) => {
            state.currentMedia && (state.currentMedia.playbackRate = parseFloat(playbackRate2.toString()));
          });
          this.onConfigChange("volume", (v) => state.currentMedia && (state.currentMedia.volume = v));
        },
        methods() {
          return {
            main: async ({ canRun, job_id }) => {
              CommonProject.scripts.render.methods.pin(this);
              const remotePage = await BackgroundProject.scripts.dev.methods.getRemotePlaywrightCurrentPage();
              if (!remotePage) {
                return $playwright.showError();
              }
              $render.moveToEdge();
              const handleVideoTest = async () => {
                if (!canRun() || job_id !== state.current_job_id)
                  return;
                setTimeout(async () => {
                  const question = document.querySelector(".u-questionItem");
                  const media = document.querySelector("video,audio");
                  if (question && media) {
                    $msg_and_log("info", "妫€娴嬪埌瑙嗛寮圭獥娴嬮獙锛屽紑濮嬬瓟锟?);
                    await new Promise((resolve) => {
                      ICourseProject.scripts.work.methods.start("chapter-test", canRun, (worker) => {
                        console.log("worker", worker);
                        worker.once("done", resolve);
                        worker.once("close", resolve);
                        worker.once("stop", resolve);
                      });
                    });
                    await $.sleep(1e3);
                    await remotePage.click(".j-unitctBox .u-btn-default.j-continue");
                    $msg_and_log("info", "娴嬮獙瀹屾垚");
                  }
                  handleVideoTest();
                }, 3e3);
              };
              handleVideoTest();
              const study2 = async () => {
                var _a, _b;
                const lessonName = (_a = document.querySelector(".j-lesson .j-up")) == null ? void 0 : _a.textContent;
                const currentUnitItem = document.querySelector(".j-unitslist  li.current");
                const unitName = (_b = currentUnitItem == null ? void 0 : currentUnitItem.querySelector(".unit-name")) == null ? void 0 : _b.textContent;
                $msg_and_log("info", `姝ｅ湪瀛︿範锟?{lessonName || ""} - ${unitName || ""}`);
                const isJob = (iconName) => currentUnitItem == null ? void 0 : currentUnitItem.querySelector(`[class*=${iconName}]`);
                let hasJob = true;
                if (isJob("u-icon-video")) {
                  await waitForElement("video, audio");
                  await watchMedia(this.cfg.playbackRate, this.cfg.volume);
                  $msg_and_log("info", "瑙嗛瀛︿範瀹屾垚");
                } else if (isJob("u-icon-doc")) {
                  await waitForElement(".ux-pdf-reader");
                  await readPPT(remotePage, this.cfg.readSpeed);
                  $msg_and_log("info", "PPT瀹屾垚");
                } else if (isJob("u-icon-discuss")) {
                  await waitForElement(".j-reply-all");
                  await discussion(remotePage, this.cfg.discussionStrategy);
                  $msg_and_log("info", "璁ㄨ瀹屾垚");
                } else if (isJob("u-icon-test")) {
                  const replay = await waitForElement(".j-replay");
                  if ((replay == null ? void 0 : replay.style.display) === "none") {
                    if (this.cfg.enableChapterTest) {
                      await new Promise((resolve) => {
                        ICourseProject.scripts.work.methods.start("chapter-test", canRun, (worker) => {
                          console.log("worker", worker);
                          worker.once("done", resolve);
                          worker.once("close", resolve);
                          worker.once("stop", resolve);
                        });
                      });
                      $msg_and_log("info", "娴嬮獙瀹屾垚");
                    } else {
                      $msg_and_log(
                        "warn",
                        "闅忓爞娴嬮獙鑷姩绛旈鍔熻兘宸插叧闂紙涓婃柟鑿滃崟锟?涓浗澶уMOOC-瀛︿範鑴氭湰涓紑鍚級锛屽嵆灏嗚烦杩囷拷?
                      );
                    }
                  } else {
                    $msg_and_log("info", "闅忓爞娴嬮獙宸插畬鎴愶紝鍗冲皢璺宠繃锟?);
                  }
                } else if (isJob("u-icon-text")) {
                  const key = "text-job-reload";
                  if (await lib.$store.getTab(key) === "1") {
                    lib.$store.setTab(key, "0");
                    $msg_and_log("info", "鏂囨。宸插畬鎴愶紝鍗冲皢璺宠繃锟?);
                  } else {
                    lib.$store.setTab(key, "1");
                    $msg_and_log("info", "鏂囨。鏃犻渶澶勭悊锛屽皢鍦ㄥ埛鏂板畬鎴愬悗璺宠繃锟?);
                    await $.sleep(3e3);
                    window.location.reload();
                    return;
                  }
                } else {
                  hasJob = false;
                }
                await $.sleep(3e3);
                if (canRun()) {
                  if (hasJob) {
                    $msg_and_log("info", "鍑嗗璺宠浆涓嬩竴锟?);
                  } else {
                    $msg_and_log("warn", "鏈壘鍒板涔犲唴瀹癸紝鎴栬€呮绔犺妭涓嶆敮鎸佽嚜鍔ㄥ涔狅紒鍗冲皢璺宠繃鏈珷锟?);
                  }
                  await gotoNextJob();
                }
              };
              study2();
              async function gotoNextJob() {
                const list = await next2();
                for (const item of list) {
                  const el = typeof item === "function" ? item() : item;
                  if (el) {
                    await (remotePage == null ? void 0 : remotePage.click(el));
                  }
                }
                if (list.length === 0) {
                  lib.$message.success({ content: "鎵€鏈夌珷鑺傚涔犲畬鎴愶紒", duration: 0 });
                  $console.info("鎵€鏈夌珷鑺傚涔犲畬鎴愶紒");
                  CommonProject.scripts.settings.methods.notificationBySetting("鎵€鏈夌珷鑺傚涔犲畬鎴愶紒", {
                    duration: 0,
                    extraTitle: "涓浗澶уMOOC瀛︿範鑴氭湰"
                  });
                }
              }
              async function next2() {
                var _a;
                const nextEl = (_a = document.querySelector(".unitslist .current")) == null ? void 0 : _a.nextElementSibling;
                if (nextEl) {
                  return [nextEl.querySelector(".unit-name")];
                }
                const getName = (node) => {
                  var _a2;
                  return (_a2 = node == null ? void 0 : node.textContent) == null ? void 0 : _a2.replace(/\s/g, "");
                };
                const lessonName = getName(document.querySelector(".j-lesson .j-up"));
                if (!lessonName) {
                  throw Error("鏃犳硶璇诲彇绔犺妭锟?");
                }
                const lessonList = Array.from(document.querySelectorAll(".j-lesson .j-list .list"));
                let nextLesson = void 0;
                for (const item of lessonList) {
                  const itemName = getName(item);
                  if (itemName === lessonName) {
                    if (item.nextElementSibling) {
                      nextLesson = item.nextElementSibling;
                      break;
                    }
                  }
                }
                if (nextLesson) {
                  return [
                    document.querySelector(".j-lesson"),
                    nextLesson
                  ];
                }
                const chapterName = getName(document.querySelector(".j-chapter .j-up"));
                if (!chapterName) {
                  throw Error("鏃犳硶璇诲彇鍗曞厓锟?");
                }
                const chapterList = Array.from(document.querySelectorAll(".j-chapter .j-list .list"));
                let nextChapter = void 0;
                for (const item of chapterList) {
                  const itemName = getName(item);
                  if (itemName === chapterName) {
                    if (item.nextElementSibling) {
                      nextChapter = item.nextElementSibling;
                      break;
                    }
                  }
                }
                if (nextChapter) {
                  return [
                    () => document.querySelector(".j-chapter"),
                    () => nextChapter,
                    () => document.querySelector(".j-lesson"),
                    () => document.querySelectorAll(".j-lesson .j-list .list")[0]
                  ];
                } else {
                  return [];
                }
              }
            }
          };
        }
      }),
      work: new lib.Script({
        name: "鉁嶏笍 浣滀笟鑰冭瘯鑴氭湰",
        namespace: "icourse.work-v2",
        matches: [
          ["MOOC浣滀笟椤甸潰", "icourse163.org/learn"],
          ["SPOC浣滀笟椤甸潰", "icourse163.org/spoc/learn"],
          ["鑰冭瘯椤甸潰", "icourse163.org/mooc/main/newExam"]
        ],
        configs: {
          notes: workNotes,
          runAtHash: {
            defaultValue: ["/learn/quiz", "/learn/examObject"]
          }
        },
        methods() {
          const start2 = async (type, canRun, onWorkerCreated) => {
            const remotePage = await BackgroundProject.scripts.dev.methods.getRemotePlaywrightCurrentPage();
            if (!remotePage) {
              return $playwright.showError();
            }
            await waitForQuestion();
            CommonProject.scripts.render.methods.pin(this);
            CommonProject.scripts.render.methods.normal();
            $msg_and_log("info", "寮€濮嬬瓟锟?);
            CommonProject.scripts.render.methods.pin(this);
            commonWork(this, {
              workerProvider: (opts) => {
                const worker = workAndExam(remotePage, type, opts);
                worker.once("close", () => {
                  clearInterval(interval);
                });
                const interval = setInterval(() => {
                  if (canRun() === false) {
                    $msg_and_log("warn", "妫€娴嬪埌椤甸潰鍒囨崲锛屾棤娉曠户缁瓟棰橈紝灏嗗叧闂嚜鍔ㄧ瓟棰橈拷?);
                    clearInterval(interval);
                    worker.emit("close");
                  }
                }, 1e3);
                return worker;
              },
              onWorkerCreated,
              enable_control_panel: true,
              start_delay_seconds: 3
            });
          };
          return {
            main: async ({ canRun }) => {
              if (location.hash.includes("learn/quizscore")) {
                lib.$message.success("褰撳墠浣滀笟宸插畬鎴愶紝鑷姩绛旈鍏抽棴锟?);
                return;
              }
              return start2("work", canRun);
            },
            start: start2
          };
        },
        oncomplete() {
          if (location.href.includes("/learn/examObject") && !location.href.includes("learn/examObjectScore") || location.href.includes("/mooc/main/newExam")) {
            this.methods.start("exam", () => true);
          }
        }
      }),
      passportRedirect: new lib.Script({
        name: "鐧诲綍閲嶅畾鍚戜慨锟?,
        matches: [["鐧诲綍閲嶅畾锟?, "passport/logingate/changeCookie.htm"]],
        configs: {
          notes: {
            defaultValue: lib.$ui.notes(["妫€娴嬪埌椤甸潰閲嶅畾鍚戝埌绌虹櫧椤甸潰", "绋嬪簭灏嗕細鑷姩淇"]).outerHTML
          }
        },
        hideInPanel: true,
        oncomplete(...args) {
          CommonProject.scripts.render.methods.pin(this);
          lib.$message.info("妫€娴嬪埌涓浗澶уMOOC绌虹櫧椤甸潰锛屽嵆灏嗛噸瀹氬悜淇...");
          setTimeout(() => {
            location.href = "https://www.icourse163.org/";
          }, 3e3);
        }
      })
    }
  });
  function waitForQuestion() {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (document.querySelector(".u-questionItem,[class*=questionBody]")) {
          clearInterval(interval);
          resolve();
        }
      }, 1e3);
    });
  }
  function workAndExam(remotePage, type, {
    answererWrappers,
    period,
    thread,
    redundanceWordsText,
    upload,
    stopSecondWhenFinish,
    answerSeparators,
    answerMatchMode
  }) {
    CommonProject.scripts.workResults.methods.init({
      questionPositionSyncHandlerType: "icourse"
    });
    const titleTransform = (titles) => {
      return removeRedundantWords(
        titles.map((t2) => t2 ? optimizationElementWithImage(t2, true).innerText : "").filter((t2) => t2.trim() !== "").join(",").replace(/[\u200A-\u200F]/g, ""),
        redundanceWordsText.split("\n")
      );
    };
    const work_type = type;
    const worker = new OCSWorker({
      root: type === "exam" ? "[class*=questionBody]" : ".u-questionItem",
      elements: {
        title: type === "exam" ? "[class*=questionInfo]" : ".j-title .j-richTxt",
        options: type === "exam" ? "[class*=index-module__optionBody]" : ".choices li,.inputArea"
      },
      thread: thread != null ? thread : 1,
      answerSeparators: answerSeparators.split(",").map((s) => s.trim()),
      answerMatchMode,
      answerer: (elements2, ctx) => {
        const title = titleTransform(elements2.title);
        if (title) {
          return CommonProject.scripts.apps.methods.searchAnswerInCaches(title, async () => {
            await $.sleep((period != null ? period : 3) * 1e3);
            return defaultAnswerWrapperHandler(answererWrappers, {
              type: ctx.type || "unknown",
              title,
              options: ctx.elements.options.map((o) => o.innerText).join("\n"),
              optionsArray: ctx.elements.options.map((o) => o.innerText)
            });
          });
        } else {
          throw new Error("棰樼洰涓虹┖锛岃鏌ョ湅棰樼洰鏄惁涓虹┖锛屾垨鑰呭拷鐣ユ锟?);
        }
      },
      work: {
        async handler(type2, answer, option) {
          if (type2 === "judgement" || type2 === "single" || type2 === "multiple") {
            if (work_type === "exam") {
              const input2 = option.querySelector("input");
              if (input2 && !(input2 == null ? void 0 : input2.checked)) {
                await $.sleep(200);
                return input2.click();
              }
            }
            const text = option.querySelector(".f-richEditorText");
            const input = option.querySelector("input");
            if (input && !(input == null ? void 0 : input.checked) && text) {
              await $.sleep(200);
              await remotePage.click(text);
            }
          } else if (type2 === "completion" && answer.trim()) {
            const text = option.querySelector("textarea");
            if (text) {
              text.value = answer.trim();
              await remotePage.fill("textarea", answer.trim());
            }
          }
        }
      },
      onElementSearched(elements2, root2) {
        elements2.options.forEach((el) => {
          const correct = el.querySelector(".u-icon-correct");
          const wrong = el.querySelector(".u-icon-wrong");
          if (correct) {
            correct.replaceWith("锟?);
          }
          if (wrong) {
            wrong.replaceWith("锟?);
          }
        });
      },
      onResultsUpdate(curr, _, res) {
        var _a;
        CommonProject.scripts.workResults.methods.setResults(simplifyWorkResult(res, titleTransform));
        if ((_a = curr.result) == null ? void 0 : _a.finish) {
          CommonProject.scripts.apps.methods.addQuestionCacheFromWorkResult(simplifyWorkResult([curr], titleTransform));
        }
        CommonProject.scripts.workResults.methods.updateWorkStateByResults(res);
      }
    });
    worker.doWork({ enable_debug: true }).then(async (results) => {
      if (worker.isClose) {
        return;
      }
      if (type === "chapter-test") {
        $msg_and_log("info", `绛旈瀹屾垚锛屽皢绛夊緟 ${stopSecondWhenFinish} 绉掑悗杩涜淇濆瓨鎴栨彁浜ゃ€俙);
        await $.sleep(stopSecondWhenFinish * 1e3);
        if (worker.isClose) {
          return;
        }
        await worker.uploadHandler({
          type: upload,
          results,
          async callback(finishedRate, uploadable) {
            const content = `瀹屾垚锟?${finishedRate.toFixed(2)}% :  ${uploadable ? "3绉掑悗灏嗚嚜鍔ㄦ彁锟? : "3绉掑悗灏嗚嚜鍔ㄨ烦杩囷紙娌′繚瀛樻寜閽級"} `;
            $console.info(content);
            lib.$message.success({ content, duration: type === "chapter-test" ? 10 : 0 });
            await $.sleep(3e3);
            if (worker.isClose) {
              return;
            }
            if (uploadable) {
              const sumbit = document.querySelector(".j-submit");
              if (sumbit) {
                await remotePage.click(sumbit);
              } else {
                $msg_and_log("warn", "娌℃湁鎵惧埌鎻愪氦鎸夐挳锛屽皢璺宠繃鎻愪氦锟?);
              }
            }
          }
        });
      } else {
        lib.$message.success({ content: "浣滀笟/鑰冭瘯瀹屾垚锛岃鑷妫€鏌ュ悗淇濆瓨鎴栨彁浜わ拷?, duration: 0 });
      }
      worker.emit("done");
    }).catch((err) => {
      lib.$message.error({ content: "绛旈绋嬪簭鍙戠敓閿欒 : " + err.message, duration: 0 });
    });
    return worker;
  }
  async function watchMedia(playbackRate2, volume2) {
    return new Promise((resolve, reject) => {
      waitForMedia().then((video) => {
        video.playbackRate = playbackRate2;
        video.volume = volume2;
        state.currentMedia = video;
        playMedia(() => video == null ? void 0 : video.play());
        video.onpause = async () => {
          if (!(video == null ? void 0 : video.ended)) {
            video == null ? void 0 : video.play();
          }
        };
        video.onended = () => {
          resolve();
        };
      }).catch(reject);
    });
  }
  async function readPPT(remotePage, readSpeed) {
    var _a, _b, _c, _d;
    const reader = document.querySelector(".ux-pdf-reader");
    if (reader) {
      const total = parseInt(
        ((_c = (_b = (_a = document.querySelector(".ux-h5pdfreader_container_footer_pages_total")) == null ? void 0 : _a.childNodes[1]) == null ? void 0 : _b.textContent) == null ? void 0 : _c.replace(/\s/, "")) || "0"
      );
      const start2 = parseInt(
        ((_d = document.querySelector(".ux-h5pdfreader_container_footer_pages_in")) == null ? void 0 : _d.value) || "1"
      );
      for (let index = start2; index < total + 1; index++) {
        const next2 = document.querySelector(".ux-h5pdfreader_container_footer_pages_next");
        if (next2) {
          await remotePage.click(next2);
        } else {
          $msg_and_log("error", "鏈壘鍒癙PT鐨勪笅涓€椤垫寜閽紒");
        }
        await $.sleep(readSpeed * 1e3);
      }
    }
  }
  async function discussion(remotePage, discussionStrategy) {
    var _a, _b, _c, _d, _e;
    if (discussionStrategy === "not-reply") {
      return $msg_and_log("warn", "璁ㄨ鑷姩鍥炲鍔熻兘宸插叧闂紙涓婃柟鑿滃崟锟?涓浗澶уMOOC-瀛︿範鑴氭湰涓紑鍚級锟?);
    }
    let res = "";
    if (discussionStrategy === "max-show-up") {
      const list = Array.from(document.querySelectorAll(".j-reply-all .f-pr .j-content"));
      const mapping = /* @__PURE__ */ new Map();
      for (const item of list) {
        mapping.set(item.textContent, (mapping.get(item.textContent) || 0) + 1);
      }
      const content = (_b = (_a = [...mapping.entries()].sort((a, b) => b[1] - a[1])) == null ? void 0 : _a[0]) == null ? void 0 : _b[0];
      if (!content) {
        $msg_and_log("error", "璇诲彇鍑虹幇鏈€澶氳瘎璁哄け璐ワ紒");
      }
      res = content;
    } else if (discussionStrategy === "max-fav") {
      const list = Array.from(document.querySelectorAll(".j-reply-all .f-pr"));
      let max = 0;
      let maxEl = void 0;
      for (const item of list) {
        const num = parseInt(((_c = item.querySelector(".bar .num")) == null ? void 0 : _c.textContent) || "0");
        if (num > max) {
          max = num;
          maxEl = item;
        }
      }
      const content = ((_d = maxEl == null ? void 0 : maxEl.querySelector(".j-content")) == null ? void 0 : _d.textContent) || "";
      if (!content) {
        $msg_and_log("error", "璇诲彇鏈€澶氱偣璧炶瘎璁哄け璐ワ紒");
      }
      res = content;
    } else if (discussionStrategy === "use-newest") {
      const content = ((_e = document.querySelector(".j-reply-all .f-pr .first .j-content")) == null ? void 0 : _e.textContent) || "";
      if (!content) {
        $msg_and_log("error", "璇诲彇鏈€鏂拌瘎璁哄け璐ワ紒");
      }
      res = content;
    }
    const p = document.querySelector(".j-reply-add div.ql-editor.ql-blank p");
    if (p) {
      p.innerText = res;
      await $.sleep(1e3);
      const submit = document.querySelector(".j-reply-add .editbtn");
      if (submit) {
        await remotePage.click(submit);
        lib.$message.info("鎻愪氦鍥炲鎴愬姛锟?);
      } else {
        $msg_and_log("error", "鑾峰彇鎻愪氦鎸夐挳澶辫触锟?);
      }
      await $.sleep(2e3);
    } else {
      $msg_and_log("error", "鑾峰彇璇勮杈撳叆妗嗗け璐ワ紒");
    }
  }
  function definedProjects() {
    return [ZHSProject, CXProject, IcveMoocProject, ZJYProject, ICourseProject, CommonProject, BackgroundProject];
  }
  exports2.$ = $;
  exports2.$const = $const;
  exports2.$elements = lib.$elements;
  exports2.$store = lib.$store;
  exports2.$string = $string;
  exports2.AnswerWrapperHandlerConfig = AnswerWrapperHandlerConfig;
  exports2.AnswerWrapperParser = AnswerWrapperParser;
  exports2.BackgroundProject = BackgroundProject;
  exports2.CXProject = CXProject;
  exports2.CommonProject = CommonProject;
  exports2.CustomOCSWorker = CustomOCSWorker;
  exports2.ICourseProject = ICourseProject;
  exports2.IcveMoocProject = IcveMoocProject;
  exports2.OCSWorker = OCSWorker;
  exports2.RemotePlaywright = RemotePlaywright;
  exports2.RenderScript = RenderScript;
  exports2.StringUtils = StringUtils;
  exports2.ZHSProject = ZHSProject;
  exports2.ZJYProject = ZJYProject;
  exports2.answerExactMatch = answerExactMatch;
  exports2.answerSimilar = answerSimilar;
  exports2.clearString = clearString;
  exports2.createDefaultQuestionResolver = createDefaultQuestionResolver;
  exports2.defaultAnswerWrapperHandler = defaultAnswerWrapperHandler;
  exports2.defaultWorkTypeResolver = defaultWorkTypeResolver;
  exports2.definedProjects = definedProjects;
  exports2.domSearch = domSearch;
  exports2.domSearchAll = domSearchAll;
  exports2.isPlainAnswer = isPlainAnswer;
  exports2.removeRedundant = removeRedundant;
  exports2.request = request;
  exports2.resolvePlainAnswer = resolvePlainAnswer;
  exports2.splitAnswer = splitAnswer;
  exports2.start = lib.start;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});


const STYLE = `/** 榛樿瀛椾綋 */
/** 杈撳叆妗嗛粯璁よ竟锟?*/
ul,
ol {
	line-height: 26px;
	padding-left: 22px;
	margin: 0px;
}
a {
	color: #1890ff;
}
hr {
	border-style: solid;
	border-color: #63636346;
	border-width: 0px;
	border-bottom: 1px solid #63636346;
	margin-block-start: 1em;
	margin-block-end: 1em;
}
.base-style-active-form-control {
	border: 1px solid #ffffff00;
}
.base-style-active-form-control:focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
.base-style-active-form-control:focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
.base-style-active-form-control:hover {
	background-color: #ebeef4;
}
.base-style-input {
	outline: none;
	border: 1px solid #ffffff00;
	padding: 2px 8px;
	margin: 0px;
	background-color: #eef2f7;
	border-radius: 2px;
	color: black;
}
.base-style-input::placeholder {
	color: #bababa;
}
.base-style-switch {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	width: fit-content;
	min-width: 36px;
	height: 20px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	padding: 2px 4px;
	transition: all 0.2s ease-in-out;
	width: auto;
	background: gainsboro;
}
.base-style-switch:checked {
	background: #1890ff;
}
.base-style-switch:disabled {
	background-color: #f7f7f78b;
}
.base-style-switch:checked::before {
	transform: translate(100%, 0px);
}
.base-style-switch::before {
	background-color: #fff;
	border-radius: 9px;
	box-shadow: 0 2px 4px #00230b33;
	width: 14px;
	height: 14px;
	content: '';
}
.base-style-button {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	background-color: white;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
}
.base-style-button:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
.base-style-button + .base-style-button {
	margin-left: 12px;
}
.base-style-button:hover {
	background-color: #7abbff24;
}
.base-style-button.danger:hover {
	background-color: #ffdede86;
}
.base-style-button:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
.base-style-button.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
.base-style-button:disabled:active {
	box-shadow: none;
}
.base-style-button-secondary {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
	color: gray;
	background-color: white;
	border: 1px solid #dcdcdc;
}
.base-style-button-secondary:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
.base-style-button-secondary + .base-style-button-secondary {
	margin-left: 12px;
}
.base-style-button-secondary:hover {
	background-color: #7abbff24;
}
.base-style-button-secondary.danger:hover {
	background-color: #ffdede86;
}
.base-style-button-secondary:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
.base-style-button-secondary.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
.base-style-button-secondary:disabled:active {
	box-shadow: none;
}
container-element.hidden {
	display: none;
}
container-element.minimize {
	min-width: unset;
}
container-element {
	position: fixed;
	top: 10%;
	left: 10%;
	z-index: 99999;
	text-align: left;
	min-width: 300px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #636363;
	box-shadow: 0 0 24px -12px #3f3f3f;
	border-radius: 8px;
	letter-spacing: 0.5px;
	border: 1px solid #c1c1c1;
}
header-element {
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 8px 8px 0px 0px;
	user-select: none;
	padding: 4px;
	padding-bottom: 0px;
}
header-element .extra-menu-bar {
	width: 100%;
	padding: 4px;
	padding-bottom: 0px;
	margin-top: 4px;
	border-top: 1px solid #e8e8e8;
	/** 榛樿闅愯棌锛屼竴鐩村埌闇€瑕佹縺娲荤殑鏃跺€欏啀鏇存敼 */
	display: none;
}
header-element .extra-menu-bar .script-panel-link {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
	color: gray;
	background-color: white;
	border: 1px solid #dcdcdc;
	padding-bottom: 2px;
	margin-bottom: 0px;
}
header-element .extra-menu-bar .script-panel-link:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
header-element .extra-menu-bar .script-panel-link + header-element .extra-menu-bar .script-panel-link {
	margin-left: 12px;
}
header-element .extra-menu-bar .script-panel-link:hover {
	background-color: #7abbff24;
}
header-element .extra-menu-bar .script-panel-link.danger:hover {
	background-color: #ffdede86;
}
header-element .extra-menu-bar .script-panel-link:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
header-element .extra-menu-bar .script-panel-link.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
header-element .extra-menu-bar .script-panel-link:disabled:active {
	box-shadow: none;
}
header-element .extra-menu-bar .script-panel-link.active {
	background-color: #1890ff1a;
	border-color: #1890ff;
	color: #1890ff;
}
header-element .extra-menu-bar .script-panel-link + .script-panel-link {
	margin-left: 4px;
}
header-element .profile {
	flex: 1;
	cursor: move;
}
header-element .switch:hover,
header-element .dropdown:hover {
	background-color: #f3f3f3;
}
header-element .close:hover {
	background-color: #ff000038;
}
header-element .switch,
header-element .close {
	cursor: pointer;
}
header-element .dropdown {
	line-height: 24px;
	text-decoration: underline;
}
header-element .switch,
header-element .close,
header-element .profile {
	display: inline-flex;
	align-items: center;
	padding: 0px 8px;
}
.logo {
	width: 18px;
	height: 18px;
	cursor: pointer;
}
.project-selector {
	display: flex;
	align-items: center;
}
.project-selector select {
	background: #ffffff00;
	border-radius: 4px;
	border: 1px solid #63636346;
	padding: 4px;
}
.project-selector.expand-all {
	display: none;
}
.body {
	overflow: auto;
	width: auto;
	height: 100%;
}
script-panel-element {
	display: block;
	background-color: white;
	border-radius: 0px 0px 8px 8px;
	padding: 0px 8px 12px 8px;
	overflow: auto;
}
script-panel-element .script-panel-body {
	padding: 0px 8px;
}
script-panel-element + script-panel-element {
	margin-top: 12px;
}
.card + .card {
	margin-top: 12px;
}
.card {
	background-color: white;
	border-radius: 2px;
	padding: 0px 8px;
}
.notes {
	background: #0099ff0e;
	border-left: 4px solid #0099ff65;
	width: -webkit-fill-available;
	margin: 0px 8px;
	line-height: 26px;
	letter-spacing: 1px;
}
.secondary {
	font-size: 12px;
	color: #8b8b8b;
}
.tooltip-container {
	z-index: 99999999999999;
	margin: 12px 0px 0px 12px;
	padding: 4px;
	color: black;
	background: #f0f0f0;
	box-shadow: 0px 0px 4px #949494;
	position: fixed;
	white-space: normal;
	max-width: 200px;
	height: auto;
	border-radius: 2px;
	line-height: 18px;
}
.configs-container.lock {
	filter: blur(1px);
	user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
}
.configs-container .lock-wrapper {
	cursor: not-allowed !important;
	border-radius: 4px;
	position: absolute;
	left: 0px;
	z-index: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
}
.configs-container .lock-message {
	background-color: #ffffff7d;
	border-radius: 4px;
	box-shadow: 0px 0px 12px #6a6a6a98;
	padding: 2px;
}
.configs {
	display: table;
	background: #e1e1e107;
	width: -webkit-fill-available;
}
.configs .configs-body {
	display: table-row-group;
}
.configs .configs-body config-element + config-element label {
	padding-top: 4px;
}
.configs .configs-body config-element + config-element .config-wrapper {
	padding-top: 4px;
}
.configs .configs-body config-element {
	width: 100%;
	display: table-row;
	line-height: 26px;
}
.configs .configs-body config-element label {
	white-space: nowrap;
	color: #4e5969;
	display: table-cell;
	padding-right: 12px;
	text-align: left;
	vertical-align: top;
	margin-right: 12px;
}
.configs .configs-body config-element .config-wrapper {
	display: table-cell;
	vertical-align: middle;
	/** check box 鐨勬牱锟?*/
}
.configs .configs-body config-element .config-wrapper select {
	outline: none;
	border: none;
	border: 1px solid #e4e4e4;
	border-radius: 4px;
	padding: 2px 8px;
	border: 1px solid #ffffff00;
}
.configs .configs-body config-element .config-wrapper select:focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
.configs .configs-body config-element .config-wrapper select:focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
.configs .configs-body config-element .config-wrapper select:hover {
	background-color: #ebeef4;
}
.configs .configs-body config-element .config-wrapper textarea {
	padding: 2px 8px;
	outline: none;
	border: none;
	border: 1px solid #ffffff00;
}
.configs .configs-body config-element .config-wrapper textarea:focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
.configs .configs-body config-element .config-wrapper textarea:focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
.configs .configs-body config-element .config-wrapper textarea:hover {
	background-color: #ebeef4;
}
.configs .configs-body config-element .config-wrapper input:not([type='button']) {
	outline: none;
	padding: 2px 8px;
	margin: 0px;
	background-color: #eef2f7;
	border-radius: 2px;
	color: black;
	border: 1px solid #ffffff00;
}
.configs .configs-body config-element .config-wrapper input:not([type='button'])::placeholder {
	color: #bababa;
}
.configs .configs-body config-element .config-wrapper input:not([type='button']):focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
.configs
	.configs-body
	config-element
	.config-wrapper
	input:not([type='button']):focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
.configs .configs-body config-element .config-wrapper input:not([type='button']):hover {
	background-color: #ebeef4;
}
.configs .configs-body config-element .config-wrapper input[type='range'] {
	padding: 0px;
}
.configs .configs-body config-element .config-wrapper input[type='button'] {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	background-color: white;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
}
.configs .configs-body config-element .config-wrapper input[type='button']:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
.configs
	.configs-body
	config-element
	.config-wrapper
	input[type='button']
	+ .configs
	.configs-body
	config-element
	.config-wrapper
	input[type='button'] {
	margin-left: 12px;
}
.configs .configs-body config-element .config-wrapper input[type='button']:hover {
	background-color: #7abbff24;
}
.configs .configs-body config-element .config-wrapper input[type='button'].danger:hover {
	background-color: #ffdede86;
}
.configs .configs-body config-element .config-wrapper input[type='button']:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
.configs .configs-body config-element .config-wrapper input[type='button'].danger {
	color: #f36669;
	border-color: #dd5a5d;
}
.configs .configs-body config-element .config-wrapper input[type='button']:disabled:active {
	box-shadow: none;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox'] {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	width: fit-content;
	min-width: 36px;
	height: 20px;
	border-radius: 100px;
	display: flex;
	align-items: center;
	padding: 2px 4px;
	transition: all 0.2s ease-in-out;
	width: auto;
	background: gainsboro;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox']:checked {
	background: #1890ff;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox']:disabled {
	background-color: #f7f7f78b;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox']:checked::before {
	transform: translate(100%, 0px);
}
.configs .configs-body config-element .config-wrapper input[type='checkbox']::before {
	background-color: #fff;
	border-radius: 9px;
	box-shadow: 0 2px 4px #00230b33;
	width: 14px;
	height: 14px;
	content: '';
}
.configs .configs-body config-element .config-wrapper input:not([type='checkbox'], [type='radio']),
.configs .configs-body config-element .config-wrapper textarea,
.configs .configs-body config-element .config-wrapper select {
	width: -webkit-fill-available;
	font-size: inherit;
}
.configs .configs-body config-element .config-wrapper input[type='checkbox'],
.configs .configs-body config-element .config-wrapper input[type='radio'],
.configs .configs-body config-element .config-wrapper input[type='range'] {
	accent-color: #0e8ee2;
}
.configs .configs-body config-element .config-wrapper > *:not(.tooltip) {
	background-color: #eef2f7;
	border-radius: 2px;
	color: black;
	float: right;
}
.configs .configs-body config-element .config-wrapper > *:disabled {
	cursor: not-allowed;
	background-color: #f7f7f78b;
}
.message-container {
	margin-bottom: 4px;
	position: absolute;
	bottom: 100%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, 0px);
	min-width: 300px;
}
.message-container message-element {
	display: flex;
	border-radius: 4px;
	padding: 4px 12px;
	margin-bottom: 4px;
}
.message-container message-element .message-content-container {
	margin-right: 8px;
	flex: auto;
}
.message-container message-element .message-text {
	letter-spacing: 1px;
	font-weight: bold;
}
.message-container message-element .message-closer {
	width: 18px;
	min-width: 18px;
	cursor: pointer;
	background-color: #ffffffb3;
	color: #a1a1a1;
	border-radius: 100%;
	text-align: center;
	height: 18px;
	vertical-align: middle;
	font-size: 12px;
}
.message-container message-element.error {
	background-color: #ffe6e6;
	color: #c70208;
	border: 1px solid #ff6b6ded;
}
.message-container message-element.info {
	background-color: #c9e7ff;
	color: #004d95;
	border: 1px solid #1890ff69;
}
.message-container message-element.success {
	background-color: #e8ffe0;
	color: #3e8d0d;
	border: 1px solid #6fd91d;
}
.message-container message-element.warn {
	background-color: #ffefc8;
	color: #9b7400;
	border: 1px solid #ffc107;
}
modal-element {
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0px 0px 24px -12px black;
	border: 1px solid #929292;
	height: fit-content;
	transform: translate(-50%, -50%);
	padding: 12px 18px 18px 18px;
	font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
	z-index: 99999999999;
	line-height: 24px;
}
modal-element .modal-profile {
	zoom: 0.9;
	color: #969696;
	user-select: none;
	margin-bottom: 4px;
}
modal-element .modal-title {
	font-size: 18px;
	font-weight: bold;
	user-select: none;
}
modal-element .modal-body {
	margin: 12px 0px;
	overflow: auto;
}
modal-element .modal-footer {
	display: flex;
	white-space: nowrap;
	justify-content: end;
	align-items: end;
}
modal-element .modal-footer > * + * {
	margin-left: 12px;
}
modal-element .modal-input {
	outline: none;
	padding: 2px 8px;
	margin: 0px;
	background-color: #eef2f7;
	border-radius: 2px;
	color: black;
	border: 1px solid #ffffff00;
	width: -webkit-fill-available;
}
modal-element .modal-input::placeholder {
	color: #bababa;
}
modal-element .modal-input:focus {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
}
modal-element .modal-input:focus:not([type='checkbox'], [type='radio']) {
	border: 1px solid #0e8de290;
	box-shadow: 0px 0px 4px #0e8de252;
	background-color: white !important;
}
modal-element .modal-input:hover {
	background-color: #ebeef4;
}
modal-element .modal-cancel-button {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
	color: gray;
	background-color: white;
	border: 1px solid #dcdcdc;
}
modal-element .modal-cancel-button:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
modal-element .modal-cancel-button + modal-element .modal-cancel-button {
	margin-left: 12px;
}
modal-element .modal-cancel-button:hover {
	background-color: #7abbff24;
}
modal-element .modal-cancel-button.danger:hover {
	background-color: #ffdede86;
}
modal-element .modal-cancel-button:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
modal-element .modal-cancel-button.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
modal-element .modal-cancel-button:disabled:active {
	box-shadow: none;
}
modal-element .modal-confirm-button {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	border-radius: 4px;
	background-color: white;
	border: 1px solid #2c92ff;
	color: #409eff;
	cursor: pointer !important;
	margin-bottom: 4px;
}
modal-element .modal-confirm-button:active {
	box-shadow: 0px 0px 8px #0e8de2a5;
}
modal-element .modal-confirm-button + modal-element .modal-confirm-button {
	margin-left: 12px;
}
modal-element .modal-confirm-button:hover {
	background-color: #7abbff24;
}
modal-element .modal-confirm-button.danger:hover {
	background-color: #ffdede86;
}
modal-element .modal-confirm-button:disabled {
	background-color: white;
	border: 1px solid #c0c0c0;
	color: #aeaeae;
	cursor: not-allowed;
}
modal-element .modal-confirm-button.danger {
	color: #f36669;
	border-color: #dd5a5d;
}
modal-element .modal-confirm-button:disabled:active {
	box-shadow: none;
}
modal-element.alert .modal-input,
modal-element.alert .modal-cancel-button {
	display: none;
}
modal-element.alert .modal-confirm-button {
	margin: 0;
}
modal-element.prompt .modal-input,
modal-element.prompt .modal-cancel-button,
modal-element.prompt .modal-confirm-button {
	display: block;
}
modal-element.confirm .modal-input {
	display: none;
}
.modal-wrapper {
	width: 100%;
	height: 100%;
	z-index: 9999;
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 9999999;
	background-color: rgba(0, 0, 0, 0.265);
	color: #636363;
	font: 14px Menlo, Monaco, Consolas, 'Courier New', monospace;
}
.pointer {
	cursor: pointer;
}
.separator {
	display: flex;
	align-items: center;
	text-align: center;
	padding: 4px 0px 8px 0px;
}
.separator::before,
.separator::after {
	content: '';
	flex: 1;
	border-bottom: 1px solid #63636346;
}
.separator:not(:empty)::before {
	margin-right: 0.25em;
}
.separator:not(:empty)::after {
	margin-left: 0.25em;
}
container-element.minimize .body,
container-element.minimize header-element .dropdown,
container-element.minimize .footer {
	display: none;
}
container-element.minimize header-element {
	padding: 8px;
	border-radius: 8px;
	box-shadow: 0px 0px 24px -12px black;
}
.user-guide > li {
	padding: 4px 0px;
}
.search-infos-num {
	width: 26px;
	margin: 2px;
	height: 20px;
	border-radius: 4px;
	display: inline-block;
	background-color: white;
	text-align: center;
	cursor: pointer;
	border: 1px solid #b6b6b6;
}
.search-infos-num.requested {
	border: 1px solid #63b4ff;
	color: #63b4ff;
}
.search-infos-num.active {
	background-color: #127de1 !important;
	color: white;
}
.search-infos-num.error {
	border: 1px solid #ff8789ed;
	background-color: #ff6b6ded;
	color: white;
}
.search-infos-num.finish {
	background-color: #63b4ff;
	border: 1px solid #63b4ff;
	color: white;
}
search-infos-element {
	display: block;
	overflow: auto;
}
search-infos-element .search-result {
	margin-bottom: 12px;
	padding-left: 12px;
}
search-infos-element .search-result .question {
	font-weight: bold;
	max-height: 200px;
	overflow: auto;
}
search-infos-element .search-result .answer {
	color: #7c7c7c;
}
search-infos-element .search-result .answer code {
	border-bottom: 1px solid #dcdcdc;
	padding: 2px 0px;
	border-radius: 2px;
	margin: 4px;
	line-height: 22px;
}
search-infos-element .search-result .answer code + code {
	margin-left: 4px;
}
search-infos-element .search-result .search-result-answer-tag {
	padding: 2px 6px;
	border-radius: 2px;
	font-size: 12px;
	cursor: pointer;
	margin-right: 6px;
}
search-infos-element .search-result .search-result-answer-tag + .search-result-answer-tag {
	margin-left: 4px;
}
search-infos-element .search-result .search-result-answer-tag.blue {
	background-color: #e6f7ff;
	border: 1px solid #91d5ff;
	color: #1890ff;
}
search-infos-element .search-result .search-result-answer-tag.green {
	background-color: #f6ffed;
	border: 1px solid #b7eb8f;
	color: #52c41a;
}
search-infos-element .search-result .search-result-answer-tag.gray {
	background-color: #fafafa;
	border: 1px solid #d9d9d9;
	color: #595959;
}
search-infos-element .search-result .search-result-answer-tag.red {
	background-color: #fff1f0;
	border: 1px solid #ffa39e;
	color: #ff4d4f;
}
search-infos-element .search-result .search-result-answer-tag.yellow {
	background-color: #fffbe6;
	border: 1px solid #ffe58f;
	color: #faad14;
}
search-infos-element .search-result-question-type {
	background-color: #e6f7ff;
	border: 1px solid #91d5ff;
	color: #1890ff;
	margin-right: 8px;
	padding: 0px 4px;
	border-radius: 4px;
}
search-infos-element .error {
	color: #ff6b6ded;
	display: inline-block;
	padding-left: 12px;
}
.copy,
.question-title-extra-btn {
	margin-left: 4px;
	padding: 2px 4px;
	border-radius: 2px;
	box-shadow: 0 0 4px #b1b1b1;
	cursor: pointer !important;
	font-weight: normal;
	font-size: 12px;
}
.work-result-question-container {
	position: absolute;
	width: 400px;
	left: -100%;
	top: 0px;
	background: white;
	border: 1px solid #cbcbcb;
	border-radius: 4px;
	box-shadow: 0px 0px 12px #d1cfcf;
	padding: 12px;
}
.work-result-question-container .close-search-result {
	font-size: 12px;
	margin-left: 8px;
	text-decoration: underline;
	color: gray;
	cursor: pointer;
}
.work-result-list {
	max-height: 400px;
	overflow: auto;
	margin: 12px 0px;
	padding: 6px;
	border: 1px solid #e1e1e1;
	border-radius: 4px;
}
.search-info-title {
	border: 1px solid #e1e1e1;
	border-radius: 4px;
	padding: 8px 12px;
	margin-bottom: 12px;
	line-height: 20px;
	max-height: 400px;
	overflow: auto;
}
.search-info-details {
	margin-left: 4px;
}
.console {
	max-height: 300px;
	max-width: 400px;
	overflow: auto;
	background-color: #292929;
	padding: 12px 6px;
	color: #ececec;
	font-size: 12px;
}
.console .item {
	padding: 3px 0px;
	border-radius: 2px;
}
.console .item .time {
	color: #757575;
}
.console .item .info {
	background-color: #2196f3a3;
}
.console .item .warn {
	background-color: #ffc107db;
}
.console .item .error {
	background-color: #f36c71cc;
}
.console .item .debug,
.console .item .log {
	background-color: #9e9e9ec4;
}
.console *::selection {
	background-color: #ffffff6b;
}
.markdown {
	max-width: 400px;
	max-height: 50vh;
	overflow: auto;
}
.markdown code {
	padding: 2px 4px;
	background-color: #f0f0f0;
	border-radius: 6px;
	font-size: 12px;
}
.markdown blockquote {
	padding: 4px 4px 4px 12px;
	margin: 0px;
	color: #b5b5b5;
	border-left: #ababab 2px solid;
}
.markdown blockquote p {
	margin: 0px;
}
.markdown h1,
.markdown h2,
.markdown h3,
.markdown h4,
.markdown h5,
.markdown h6,
.markdown p {
	margin: 8px 0px;
}
.dropdown {
	position: relative;
	display: inline-block;
}
.dropdown.active .dropdown-trigger-element {
	color: #1890ff;
}
.dropdown-trigger-element {
	cursor: pointer;
}
.dropdown-content {
	display: none;
	position: absolute;
	background-color: #ffffff;
	overflow: auto;
	box-shadow: 0px 8px 16px 0px #00000033;
	z-index: 1;
	border-radius: 4px;
	padding: 8px 12px;
	min-width: 120px;
}
.dropdown-content.show {
	display: block;
}
.dropdown-content {
	cursor: pointer;
	z-index: 999;
}
.dropdown-content .dropdown-option {
	padding-left: 4px;
	white-space: nowrap;
}
.dropdown-content .dropdown-option:hover {
	background-color: #f3f3f3;
}
.dropdown-content .dropdown-option.active {
	background-color: #1890ff1a;
	color: #1890ff;
}
.space {
	display: inline-flex;
}
.config-details {
	animation: fade-in 0.5s;
}
.config-details label {
	padding-left: 12px;
}
.alert-info-wrapper {
	margin-bottom: 8px;
}
.alert-info-wrapper .result-info {
	padding: 12px;
	text-align: center;
	border-radius: 6px;
}
.alert-info-wrapper .unresolved {
	color: #a1a1a1;
	background-color: #f7f7f7;
}
.alert-info-wrapper .no-answer {
	color: #a1a1a1;
	background-color: #f7f7f7;
}
.alert-info-wrapper .error {
	color: #ff4d4f;
	background-color: #fff1f0;
}
message-element {
	animation: show 0.5s;
}
script-panel-element > div,
script-panel-link,
container-element,
modal-element {
	animation: fade-in 0.3s;
}
@keyframes show {
	0% {
		transform: translateY(20px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}
@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes fade-out {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}
.checkbox-label {
	display: inline-block !important;
	position: relative;
	cursor: pointer;
	font-size: 16px;
	color: #2c3e50;
}
/* 闅愯棌鍘熷澶嶉€夋 */
.checkbox-input {
	position: absolute;
	opacity: 0;
	width: 0;
	height: 0;
}
/* 鑷畾涔夋寜閽牱锟?*/
.checkbox-label::after {
	content: '';
	display: inline-block;
	border-radius: 50%;
	transition: all 0.1s ease;
	position: relative;
	margin-left: 4px;
	vertical-align: middle;
}
/* 鍚戜笅绠ご锛堟湭閫変腑鐘舵€侊級 */
.checkbox-label::before {
	content: '馃斀';
	position: absolute;
	width: 0;
	height: 0;
	right: 8px;
	transition: all 0.1s ease;
	z-index: 2;
}
/* 鍚戜笂绠ご锛堥€変腑鐘舵€侊級 */
.checked .checkbox-label::before {
	content: '馃敿';
}
`;

/* eslint-disable no-undef */
/// <reference path="./global.d.ts" />

// 鐜妫€锟?if (
	[
		'GM_getTab',
		'GM_saveTab',
		'GM_setValue',
		'GM_getValue',
		'unsafeWindow',
		'GM_listValues',
		'GM_deleteValue',
		'GM_notification',
		'GM_xmlhttpRequest',
		'GM_getResourceText',
		'GM_addValueChangeListener',
		'GM_removeValueChangeListener'
	].some((api) => typeof Reflect.get(globalThis, api) === 'undefined')
) {
	const open = confirm(
		`OCS缃戣鑴氭湰涓嶆敮鎸佸綋鍓嶇殑鑴氭湰绠＄悊鍣紙${GM_info.scriptHandler}锛夈€俙 +
			'璇峰墠寰€ https://docs.ocsjs.com/docs/script 涓嬭浇鎸囧畾鐨勮剼鏈鐞嗗櫒锛屼緥锟?鈥淪criptcat 鑴氭湰鐚拷?鎴栵拷?鈥淭ampermonkey 娌圭尨锟?
	);

	if (open) {
		window.location.href = 'https://docs.ocsjs.com/docs/script';
	}
	return;
}

const { start, definedProjects, CommonProject, RenderScript } = OCS;

const infos = GM_info;

(function () {
	'use strict';

	const projects = definedProjects();

	// 杩愯鑴氭湰
	start({
		projects: projects,
		renderConfig: {
			renderScript: RenderScript,
			styles: [STYLE],
			defaultPanelName: CommonProject.scripts.guide.namespace,
			title: `OCS-鍏ㄥ煙鍚嶉€氱敤锟?${infos.script.version}`
		},
		updatePage:
			GM_info.scriptHandler === 'Tampermonkey'
				? 'https://greasyfork.org/zh-CN/scripts/481438'
				: 'https://scriptcat.org/zh-CN/script-show-page/1398'
	});
})();


