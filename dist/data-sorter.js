module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var sortData = {
	    getSortedData: function getSortedData(data, sortType, sortOrder, key) {
	        var actualKey = key;
	        if (Array.isArray(key)) {
	            var cloneKey = key.slice();
	            actualKey = cloneKey.pop();
	        }

	        data.sort(function (param1, param2) {
	            if (Array.isArray(key)) {
	                param1 = _.get(param1, cloneKey);
	                param2 = _.get(param2, cloneKey);
	            }
	            switch (sortType) {
	                case "Number":
	                    return (param1 && param1[actualKey] ? param1[actualKey] : 0) - (param2 && param2[actualKey] ? param2[actualKey] : 0);
	                    break;
	                default:
	                    return (param1 && param1[actualKey] ? param1[actualKey] : "").localeCompare(param2 && param2[actualKey] ? param2[actualKey] : "");
	                    break;
	            }
	        });

	        if (sortOrder === "DSC") {
	            data.reverse();
	        }
	        return data;
	    },

	    newSortData: function newSortData() {
	        Console.log('New Sort');
	    }
	};

		exports.default = sortData;

/***/ })
/******/ ]);
//# sourceMappingURL=data-sorter.js.map