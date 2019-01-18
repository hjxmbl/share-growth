/******/ (function(modules) { // webpackBootstrap IIFE，就是自执行函数
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];//["common"]
/******/ 		var moreModules = data[1];//
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
              // installedChunks 的数据结构 {	"index": 0，chunkId：[resolve, reject]}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
                 //webpackJsonp 先是 for in 遍历了一次 moreModules,将 moreModules 内的所有方法都存在 modules
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
              // 第一个元素是模块id，后面是其所需的chunk
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
                // 这里会首先判断模块所需chunk是否已经加载完毕  
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
            // 只有模块所需的chunk都加载完毕，该模块才会被执行（__webpack_require__）
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/         //installedModules 是一个缓存的容器 如果缓存中有对应的 moduleId,那么直接返回它的 exports，不然就定义并赋值一个
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {//
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {} //export 的内容
/******/ 		};
/******/      // modules[moduleId] 就是 moreModules 中的方法，此处就是将 this 指定为 module.exports，
              //再把module, module.exports, __webpack_require__ 传入去作为参数调用。

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/    //在 window 上挂了一个名为 webpackJsonp 的函数  webpackJsonpCallback 接收一个数组作为参数，
            //数组里包含chunkIds, moreModules, executeModules
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	//window["webpackJsonp"]上的.push()方法被修改为了webpackJsonpCallback()
          jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
          //第一个是模块 id 后面的是chunkid 
           //希望自动执行moduleId为 QfWi 的这个模块，
           //但是该模块需要chunkId为common的chunk已经加载后才能执行
           //执行某些模块需要保证一些chunk已经加载是因为，该模块所依赖的其他模块可能并不在当前chunk中，
           //而webpack在编译期会通过依赖分析自动将依赖模块的所属chunkId注入到此处。
/******/ 	deferredModules.push(["QfWi","common"]);
/******/ 	// run deferred modules when ready
           //模块“自动”执行的功能  webpack中的所有js源文件都是模块，
           //但如果都是不会自动执行的模块，那我们只是在前端引入了一堆“死”代码
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
/**
 * 梳理一下打包后代码执行的流程，首先 index.js 会定义一个 webpackJsonp 方法，待其他打包后的文件（也可称为 chunk）调用。
当调用 chunk 时，会先将该 chunk 中所有的 moreModules， 也就是每一个依赖的文件也可称为 module （如 test.js）存起来。
之后通过 executeModules 判断这个文件是不是入口文件，决定是否执行第一次  __webpack_require__。
而 __webpack_require__ 的作用，就是根据这个 module 所 require 的东西，不断递归调用 __webpack_require__，
__webpack_require__函数返回值后供 require 使用。当然，模块是不会重复加载的，因为 installedModules 记录着 module 调用后的 exports 的值，
只要命中缓存，就返回对应的值而不会再次调用 module。webpack 打包后的文件，就是通过一个个函数隔离 module 的作用域，以达到不互相污染的目的。
其实 webpack 就是将每一个 js 文件封装成一个函数，每个文件中的 require 方法对应的就是 __webpack_require__，
 __webpack_require__ 会根据传入的 moduleId 再去加载对应的代码。



webpack 就是将每一个 js 文件封装成一个函数，每个文件中的 require 方法对应的就是 __webpack_require__， __webpack_require__ 会根据传入的 moduleId 再去加载对应的代码。
module 其实就是打包前，import 或者 require 的一个个 js 文件，如test.js 与 index.js。chunk 是打包后的文件，即 index.ad23.js、manifest.473d.js 与 0.7f0a.js文件。一个 chunk 可能包含若干 module。
  */
