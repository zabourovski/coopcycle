(globalThis["webpackChunkglim_app"] = globalThis["webpackChunkglim_app"] || []).push([["administration"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/main/webapp/app/modules/administration/docs/docs.scss":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/main/webapp/app/modules/administration/docs/docs.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "iframe {\n  background: white;\n}", "",{"version":3,"sources":["webpack://./src/main/webapp/app/modules/administration/docs/docs.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;AACF","sourcesContent":["iframe {\n  background: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var basePick = __webpack_require__(/*! ./_basePick */ "./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/docs/docs.scss":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/docs/docs.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./docs.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[3]!./src/main/webapp/app/modules/administration/docs/docs.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_3_docs_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/configuration/configuration.tsx":
/*!************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/configuration/configuration.tsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPage": () => (/* binding */ ConfigurationPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");





const ConfigurationPage = () => {
    var _a, _b;
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const [reversePrefix, setReversePrefix] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [reverseProperties, setReverseProperties] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    const configuration = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.administration.configuration);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_2__.getConfigurations)());
        dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_2__.getEnv)());
    }, []);
    const changeFilter = evt => setFilter(evt.target.value);
    const envFilterFn = configProp => configProp.toUpperCase().includes(filter.toUpperCase());
    const propsFilterFn = configProp => configProp.prefix.toUpperCase().includes(filter.toUpperCase());
    const changeReversePrefix = () => setReversePrefix(!reversePrefix);
    const changeReverseProperties = () => setReverseProperties(!reverseProperties);
    const getContextList = contexts => Object.values(contexts)
        .map((v) => v.beans)
        .reduce((acc, e) => (Object.assign(Object.assign({}, acc), e)));
    const configProps = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.configProps) !== null && _a !== void 0 ? _a : {};
    const env = (_b = configuration === null || configuration === void 0 ? void 0 : configuration.env) !== null && _b !== void 0 ? _b : {};
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "configuration-page-heading", "data-cy": "configurationPageHeading" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "configuration.title" }, "Configuration")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "configuration.filter" }, "Filter")),
        ' ',
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Input, { type: "search", value: filter, onChange: changeFilter, name: "search", id: "search" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Spring configuration"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Table, { className: "table table-striped table-bordered table-responsive d-table" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { onClick: changeReversePrefix },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "configuration.table.prefix" }, "Prefix")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { onClick: changeReverseProperties },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "configuration.table.properties" }, "Properties")))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, configProps.contexts
                ? Object.values(getContextList(configProps.contexts))
                    .filter(propsFilterFn)
                    .map((property, propIndex) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: propIndex },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, property['prefix']),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Object.keys(property['properties']).map((propKey, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, { key: index },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, { md: "4" }, propKey),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, { md: "8" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Badge, { className: "float-end bg-secondary break" }, JSON.stringify(property['properties'][propKey]))))))))))
                : null)),
        env.propertySources
            ? env.propertySources.map((envKey, envIndex) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: envIndex },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, envKey.name)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Table, { className: "table table-sm table-striped table-bordered table-responsive d-table" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: envIndex },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "w-40" }, "Property"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "w-60" }, "Value"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, Object.keys(envKey.properties)
                        .filter(envFilterFn)
                        .map((propKey, propIndex) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: propIndex },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "break" }, propKey),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "break" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "float-end badge bg-secondary break" }, envKey.properties[propKey].value))))))))))
            : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigurationPage);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/docs/docs.tsx":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/docs/docs.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _docs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.scss */ "./src/main/webapp/app/modules/administration/docs/docs.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const DocsPage = () => (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("iframe", { src: "../swagger-ui/index.html", width: "100%", height: "800", title: "Swagger UI", seamless: true, style: { border: 'none' }, "data-cy": "swagger-frame" })));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocsPage);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/health/health-modal.tsx":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/health/health-modal.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);



const formatDiskSpaceOutput = rawValue => {
    // Should display storage space in an human readable unit
    const val = rawValue / 1073741824;
    if (val > 1) {
        // Value
        return val.toFixed(2) + ' GB';
    }
    return (rawValue / 1048576).toFixed(2) + ' MB';
};
const HealthModal = ({ handleClose, healthObject, showModal }) => {
    const data = healthObject.details || {};
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Modal, { isOpen: showModal, modalTransition: { timeout: 20 }, backdropTransition: { timeout: 10 }, toggle: handleClose },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, { toggle: handleClose }, healthObject.name),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ModalBody, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Table, { bordered: true },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "health.details.name" }, "Name")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "health.details.value" }, "Value")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, Object.keys(data).map((key, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: index },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, key),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, healthObject.name === 'diskSpace' ? formatDiskSpaceOutput(data[key]) : JSON.stringify(data[key])))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__.Button, { color: "primary", onClick: handleClose }, "Close"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HealthModal);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/health/health.tsx":
/*!**********************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/health/health.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthPage": () => (/* binding */ HealthPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");
/* harmony import */ var _health_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-modal */ "./src/main/webapp/app/modules/administration/health/health-modal.tsx");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");







const HealthPage = () => {
    const [healthObject, setHealthObject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    const health = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.administration.health);
    const isFetching = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.administration.loading);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_5__.getSystemHealth)());
    }, []);
    const fetchSystemHealth = () => {
        if (!isFetching) {
            dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_5__.getSystemHealth)());
        }
    };
    const getSystemHealthInfo = (name, healthObj) => () => {
        setShowModal(true);
        setHealthObject(Object.assign(Object.assign({}, healthObj), { name }));
    };
    const getBadgeType = (status) => (status !== 'UP' ? 'danger' : 'success');
    const handleClose = () => setShowModal(false);
    const renderModal = () => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_health_modal__WEBPACK_IMPORTED_MODULE_4__["default"], { healthObject: healthObject, handleClose: handleClose, showModal: showModal });
    const data = (health || {}).components || {};
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "health-page-heading", "data-cy": "healthPageHeading" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "health.title" }, "Health Checks")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: fetchSystemHealth, color: isFetching ? 'btn btn-danger' : 'btn btn-primary', disabled: isFetching },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sync" }),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { component: "span", contentKey: "health.refresh.button" }, "Refresh"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { md: "12" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Table, { bordered: true, "aria-describedby": "health-page-heading" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "health.table.service" }, "Service Name")),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "health.table.status" }, "Status")),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "health.details.details" }, "Details")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, Object.keys(data).map((configPropKey, configPropIndex) => configPropKey !== 'status' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: configPropIndex },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, configPropKey),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Badge, { color: getBadgeType(data[configPropKey].status) }, data[configPropKey].status)),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, data[configPropKey].details ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { onClick: getSystemHealthInfo(configPropKey, data[configPropKey]) },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "eye" }))) : null))) : null))))),
        renderModal()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HealthPage);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/index.tsx":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var app_shared_error_error_boundary_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-routes */ "./src/main/webapp/app/shared/error/error-boundary-routes.tsx");
/* harmony import */ var _user_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management */ "./src/main/webapp/app/modules/administration/user-management/index.tsx");
/* harmony import */ var _logs_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logs/logs */ "./src/main/webapp/app/modules/administration/logs/logs.tsx");
/* harmony import */ var _health_health__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health/health */ "./src/main/webapp/app/modules/administration/health/health.tsx");
/* harmony import */ var _metrics_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metrics/metrics */ "./src/main/webapp/app/modules/administration/metrics/metrics.tsx");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration/configuration */ "./src/main/webapp/app/modules/administration/configuration/configuration.tsx");
/* harmony import */ var _docs_docs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./docs/docs */ "./src/main/webapp/app/modules/administration/docs/docs.tsx");









const AdministrationRoutes = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(app_shared_error_error_boundary_routes__WEBPACK_IMPORTED_MODULE_1__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "user-management/*", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_user_management__WEBPACK_IMPORTED_MODULE_2__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "health", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_health_health__WEBPACK_IMPORTED_MODULE_4__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "metrics", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_metrics_metrics__WEBPACK_IMPORTED_MODULE_5__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "configuration", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_configuration_configuration__WEBPACK_IMPORTED_MODULE_6__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "logs", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_logs_logs__WEBPACK_IMPORTED_MODULE_3__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: "docs", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_docs_docs__WEBPACK_IMPORTED_MODULE_7__["default"], null) }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdministrationRoutes);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/logs/logs.tsx":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/logs/logs.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsPage": () => (/* binding */ LogsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");




const LogsPage = () => {
    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const logs = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.administration.logs);
    const isFetching = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(state => state.administration.loading);
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_2__.getLoggers)());
    }, []);
    const changeLevel = (loggerName, level) => () => dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_2__.changeLogLevel)(loggerName, level));
    const changeFilter = evt => setFilter(evt.target.value);
    const getClassName = (level, check, className) => (level === check ? `btn btn-sm btn-${className}` : 'btn btn-sm btn-light');
    const filterFn = l => l.name.toUpperCase().includes(filter.toUpperCase());
    const loggers = logs ? Object.entries(logs.loggers).map((e) => ({ name: e[0], level: e[1].effectiveLevel })) : [];
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "logs-page-heading", "data-cy": "logsPageHeading" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "logs.title" }, "Logs")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "logs.nbloggers", interpolate: { total: loggers.length } },
                "There are ",
                loggers.length.toString(),
                " loggers.")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "logs.filter" }, "Filter")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", value: filter, onChange: changeFilter, className: "form-control", disabled: isFetching }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { className: "table table-sm table-striped table-bordered", "aria-describedby": "logs-page-heading" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { title: "click to order" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "logs.table.name" }, "Name"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "logs.table.level" }, "Level"))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, loggers.filter(filterFn).map((logger, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { key: `log-row-${i}` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, logger.name)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'TRACE'), className: getClassName(logger.level, 'TRACE', 'primary') }, "TRACE"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'DEBUG'), className: getClassName(logger.level, 'DEBUG', 'success') }, "DEBUG"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'INFO'), className: getClassName(logger.level, 'INFO', 'info') }, "INFO"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'WARN'), className: getClassName(logger.level, 'WARN', 'warning') }, "WARN"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'ERROR'), className: getClassName(logger.level, 'ERROR', 'danger') }, "ERROR"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { disabled: isFetching, onClick: changeLevel(logger.name, 'OFF'), className: getClassName(logger.level, 'OFF', 'secondary') }, "OFF")))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogsPage);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/metrics/metrics.tsx":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/metrics/metrics.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPage": () => (/* binding */ MetricsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");







const MetricsPage = () => {
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    const metrics = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(state => state.administration.metrics);
    const isFetching = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(state => state.administration.loading);
    const threadDump = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(state => state.administration.threadDump);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_4__.getSystemMetrics)());
        dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_4__.getSystemThreadDump)());
    }, []);
    const getMetrics = () => {
        if (!isFetching) {
            dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_4__.getSystemMetrics)());
            dispatch((0,_administration_reducer__WEBPACK_IMPORTED_MODULE_4__.getSystemThreadDump)());
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "metrics-page-heading", "data-cy": "metricsPageHeading" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "metrics.title" }, "Application Metrics")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, { onClick: getMetrics, color: isFetching ? 'btn btn-danger' : 'btn btn-primary', disabled: isFetching },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sync" }),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { component: "span", contentKey: "health.refresh.button" }, "Refresh"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { sm: "12" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "metrics.jvm.title" }, "JVM Metrics")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { md: "4" }, (metrics === null || metrics === void 0 ? void 0 : metrics.jvm) ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.JvmMemory, { jvmMetrics: metrics.jvm, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_WHOLE_NUMBER_FORMAT }) : ''),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { md: "4" }, threadDump ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.JvmThreads, { jvmThreads: threadDump, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_WHOLE_NUMBER_FORMAT }) : ''),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { md: "4" }, (metrics === null || metrics === void 0 ? void 0 : metrics.processMetrics) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.SystemMetrics, { systemMetrics: metrics.processMetrics, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_WHOLE_NUMBER_FORMAT, timestampFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_TIMESTAMP_FORMAT })) : (''))))),
        (metrics === null || metrics === void 0 ? void 0 : metrics.garbageCollector) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.GarbageCollectorMetrics, { garbageCollectorMetrics: metrics.garbageCollector, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_WHOLE_NUMBER_FORMAT })) : (''),
        metrics && metrics['http.server.requests'] ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.HttpRequestMetrics, { requestMetrics: metrics['http.server.requests'], twoDigitAfterPointFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_WHOLE_NUMBER_FORMAT })) : (''),
        (metrics === null || metrics === void 0 ? void 0 : metrics.services) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.EndpointsRequestsMetrics, { endpointsRequestsMetrics: metrics.services, wholeNumberFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_WHOLE_NUMBER_FORMAT })) : (''),
        (metrics === null || metrics === void 0 ? void 0 : metrics.cache) ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { sm: "12" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.CacheMetrics, { cacheMetrics: metrics.cache, twoDigitAfterPointFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT })))) : (''),
        (metrics === null || metrics === void 0 ? void 0 : metrics.databases) && JSON.stringify(metrics.databases) !== '{}' ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Row, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Col, { sm: "12" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.DatasourceMetrics, { datasourceMetrics: metrics.databases, twoDigitAfterPointFormat: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT })))) : ('')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetricsPage);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/index.tsx":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/index.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var app_shared_error_error_boundary_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-routes */ "./src/main/webapp/app/shared/error/error-boundary-routes.tsx");
/* harmony import */ var _user_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management */ "./src/main/webapp/app/modules/administration/user-management/user-management.tsx");
/* harmony import */ var _user_management_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management-detail */ "./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx");
/* harmony import */ var _user_management_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management-update */ "./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx");
/* harmony import */ var _user_management_delete_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management-delete-dialog */ "./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx");







const UserManagementRoutes = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(app_shared_error_error_boundary_routes__WEBPACK_IMPORTED_MODULE_1__["default"], null,
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { index: true, element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_user_management__WEBPACK_IMPORTED_MODULE_2__["default"], null) }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "new", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_user_management_update__WEBPACK_IMPORTED_MODULE_4__["default"], null) }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: ":login" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { index: true, element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_user_management_detail__WEBPACK_IMPORTED_MODULE_3__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "edit", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_user_management_update__WEBPACK_IMPORTED_MODULE_4__["default"], null) }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, { path: "delete", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_user_management_delete_dialog__WEBPACK_IMPORTED_MODULE_5__["default"], null) }))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserManagementRoutes);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDeleteDialog": () => (/* binding */ UserManagementDeleteDialog),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");







const UserManagementDeleteDialog = () => {
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
    const { login } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_3__.getUser)(login));
    }, []);
    const handleClose = event => {
        event.stopPropagation();
        navigate('/admin/user-management');
    };
    const user = (0,app_config_store__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(state => state.userManagement.user);
    const confirmDelete = event => {
        dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_3__.deleteUser)(user.login));
        handleClose(event);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Modal, { isOpen: true, toggle: handleClose },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ModalHeader, { toggle: handleClose },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.delete.title" }, "Confirm delete operation")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ModalBody, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.delete.question", interpolate: { login: user.login } }, "Are you sure you want to delete this User?")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ModalFooter, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, { color: "secondary", onClick: handleClose },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "ban" }),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.action.cancel" }, "Cancel")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Button, { color: "danger", onClick: confirmDelete },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "trash" }),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.action.delete" }, "Delete")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserManagementDeleteDialog);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDetail": () => (/* binding */ UserManagementDetail),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var app_config_translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/translation */ "./src/main/webapp/app/config/translation.ts");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");









const UserManagementDetail = () => {
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_6__.useAppDispatch)();
    const { login } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_5__.getUser)(login));
    }, []);
    const user = (0,app_config_store__WEBPACK_IMPORTED_MODULE_6__.useAppSelector)(state => state.userManagement.user);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.detail.title" }, "User"),
            " [",
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, user.login),
            "]"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Row, { size: "md" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", { className: "jh-entity-details" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.login" }, "Login")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, user.login),
                    "\u00A0",
                    user.activated ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Badge, { color: "success" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.activated" }, "Activated"))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Badge, { color: "danger" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.deactivated" }, "Deactivated")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.firstName" }, "First Name")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, user.firstName),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.lastName" }, "Last Name")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, user.lastName),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.email" }, "Email")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, user.email),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.langKey" }, "Lang Key")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, user.langKey ? app_config_translation__WEBPACK_IMPORTED_MODULE_4__.languages[user.langKey].name : undefined),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.createdBy" }, "Created By")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, user.createdBy),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.createdDate" }, "Created Date")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, user.createdDate ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.TextFormat, { value: user.createdDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_DATE_FORMAT, blankOnInvalid: true }) : null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.lastModifiedBy" }, "Last Modified By")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, user.lastModifiedBy),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.lastModifiedDate" }, "Last Modified Date")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, user.lastModifiedDate ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.TextFormat, { value: user.lastModifiedDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_DATE_FORMAT, blankOnInvalid: true })) : null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.profiles" }, "Profiles")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "list-unstyled" }, user.authorities
                        ? user.authorities.map((authority, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: `user-auth-${i}` },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Badge, { color: "info" }, authority))))
                        : null)))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__.Button, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, to: "/admin/user-management", replace: true, color: "info" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "arrow-left" }),
            ' ',
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "d-none d-md-inline" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.action.back" }, "Back")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserManagementDetail);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementUpdate": () => (/* binding */ UserManagementUpdate),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/translation */ "./src/main/webapp/app/config/translation.ts");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");








const UserManagementUpdate = () => {
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    const { login } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
    const isNew = login === undefined;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        if (isNew) {
            dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.reset)());
        }
        else {
            dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.getUser)(login));
        }
        dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.getRoles)());
        return () => {
            dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.reset)());
        };
    }, [login]);
    const handleClose = () => {
        navigate('/admin/user-management');
    };
    const saveUser = values => {
        if (isNew) {
            dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.createUser)(values));
        }
        else {
            dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_4__.updateUser)(values));
        }
        handleClose();
    };
    const isInvalid = false;
    const user = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(state => state.userManagement.user);
    const loading = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(state => state.userManagement.loading);
    const updating = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(state => state.userManagement.updating);
    const authorities = (0,app_config_store__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(state => state.userManagement.authorities);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Row, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Col, { md: "8" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.home.createOrEditLabel" }, "Create or edit a User")))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Row, { className: "justify-content-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Col, { md: "8" }, loading ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...")) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedForm, { onSubmit: saveUser, defaultValues: user },
                user.id ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { type: "text", name: "id", required: true, readOnly: true, label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.field.id'), validate: { required: true } })) : null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { type: "text", name: "login", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('userManagement.login'), validate: {
                        required: {
                            value: true,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('register.messages.validate.login.required'),
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$/,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('register.messages.validate.login.pattern'),
                        },
                        minLength: {
                            value: 1,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('register.messages.validate.login.minlength'),
                        },
                        maxLength: {
                            value: 50,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('register.messages.validate.login.maxlength'),
                        },
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { type: "text", name: "firstName", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('userManagement.firstName'), validate: {
                        maxLength: {
                            value: 50,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('entity.validation.maxlength', { max: 50 }),
                        },
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { type: "text", name: "lastName", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('userManagement.lastName'), validate: {
                        maxLength: {
                            value: 50,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('entity.validation.maxlength', { max: 50 }),
                        },
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.FormText, null, "This field cannot be longer than 50 characters."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { name: "email", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.form.email.label'), placeholder: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.form.email.placeholder'), type: "email", validate: {
                        required: {
                            value: true,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.email.required'),
                        },
                        minLength: {
                            value: 5,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.email.minlength'),
                        },
                        maxLength: {
                            value: 254,
                            message: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.email.maxlength'),
                        },
                        validate: v => (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.isEmail)(v) || (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('global.messages.validate.email.invalid'),
                    } }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { type: "checkbox", name: "activated", check: true, value: true, disabled: !user.id, label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('userManagement.activated') }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { type: "select", name: "langKey", label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('userManagement.langKey') }, app_config_translation__WEBPACK_IMPORTED_MODULE_3__.locales.map(locale => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: locale, key: locale }, app_config_translation__WEBPACK_IMPORTED_MODULE_3__.languages[locale].name)))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.ValidatedField, { type: "select", name: "authorities", multiple: true, label: (0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.translate)('userManagement.profiles') }, authorities.map(role => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: role, key: role }, role)))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Button, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, to: "/admin/user-management", replace: true, color: "info" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "arrow-left" }),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "d-none d-md-inline" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.action.back" }, "Back"))),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.Button, { color: "primary", type: "submit", disabled: isInvalid || updating },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "save" }),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.action.save" }, "Save"))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserManagementUpdate);


/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management.tsx":
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagement": () => (/* binding */ UserManagement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.modern.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/util/pagination.constants */ "./src/main/webapp/app/shared/util/pagination.constants.ts");
/* harmony import */ var app_shared_util_entity_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/util/entity-utils */ "./src/main/webapp/app/shared/util/entity-utils.ts");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");
/* harmony import */ var app_config_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/config/store */ "./src/main/webapp/app/config/store.ts");










const UserManagement = () => {
    const dispatch = (0,app_config_store__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useLocation)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
    const [pagination, setPagination] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,app_shared_util_entity_utils__WEBPACK_IMPORTED_MODULE_5__.overridePaginationStateWithQueryParams)((0,react_jhipster__WEBPACK_IMPORTED_MODULE_1__.getSortState)(location, app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_4__.ITEMS_PER_PAGE, 'id'), location.search));
    const getUsersFromProps = () => {
        dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_6__.getUsersAsAdmin)({
            page: pagination.activePage - 1,
            size: pagination.itemsPerPage,
            sort: `${pagination.sort},${pagination.order}`,
        }));
        const endURL = `?page=${pagination.activePage}&sort=${pagination.sort},${pagination.order}`;
        if (location.search !== endURL) {
            navigate(`${location.pathname}${endURL}`);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getUsersFromProps();
    }, [pagination.activePage, pagination.order, pagination.sort]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const params = new URLSearchParams(location.search);
        const page = params.get('page');
        const sortParam = params.get(app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_4__.SORT);
        if (page && sortParam) {
            const sortSplit = sortParam.split(',');
            setPagination(Object.assign(Object.assign({}, pagination), { activePage: +page, sort: sortSplit[0], order: sortSplit[1] }));
        }
    }, [location.search]);
    const sort = p => () => setPagination(Object.assign(Object.assign({}, pagination), { order: pagination.order === app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_4__.ASC ? app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_4__.DESC : app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_4__.ASC, sort: p }));
    const handlePagination = currentPage => setPagination(Object.assign(Object.assign({}, pagination), { activePage: currentPage }));
    const handleSyncList = () => {
        getUsersFromProps();
    };
    const toggleActive = user => () => {
        dispatch((0,_user_management_reducer__WEBPACK_IMPORTED_MODULE_6__.updateUser)(Object.assign(Object.assign({}, user), { activated: !user.activated })));
    };
    const account = (0,app_config_store__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(state => state.authentication.account);
    const users = (0,app_config_store__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(state => state.userManagement.users);
    const totalItems = (0,app_config_store__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(state => state.userManagement.totalItems);
    const loading = (0,app_config_store__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)(state => state.userManagement.loading);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { id: "user-management-page-heading", "data-cy": "userManagementPageHeading" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.home.title" }, "Users"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "d-flex justify-content-end" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, { className: "me-2", color: "info", onClick: handleSyncList, disabled: loading },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sync", spin: loading }),
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.home.refreshListLabel" }, "Refresh List")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, { to: "new", className: "btn btn-primary jh-create-entity" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "plus" }),
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.home.createLabel" }, "Create a new user")))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Table, { responsive: true, striped: true },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "hand", onClick: sort('id') },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "global.field.id" }, "ID"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "hand", onClick: sort('login') },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.login" }, "Login"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "hand", onClick: sort('email') },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.email" }, "Email"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "hand", onClick: sort('langKey') },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.langKey" }, "Lang Key"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.profiles" }, "Profiles")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "hand", onClick: sort('createdDate') },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.createdDate" }, "Created Date"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { className: "hand", onClick: sort('lastModifiedBy') },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.lastModifiedBy" }, "Last Modified By"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { id: "modified-date-sort", className: "hand", onClick: sort('lastModifiedDate') },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.lastModifiedDate" }, "Last Modified Date"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "sort" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, users.map((user, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", { id: user.login, key: `user-${i}` },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, to: user.login, color: "link", size: "sm" }, user.id)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.login),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.email),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.activated ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, { color: "success", onClick: toggleActive(user) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.activated" }, "Activated"))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, { color: "danger", onClick: toggleActive(user) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "userManagement.deactivated" }, "Deactivated")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.langKey),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.authorities
                    ? user.authorities.map((authority, j) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: `user-auth-${i}-${j}` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Badge, { color: "info" }, authority))))
                    : null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.createdDate ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.TextFormat, { value: user.createdDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_DATE_FORMAT, blankOnInvalid: true }) : null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.lastModifiedBy),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, user.lastModifiedDate ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.TextFormat, { value: user.lastModifiedDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_3__.APP_DATE_FORMAT, blankOnInvalid: true })) : null),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { className: "text-end" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "btn-group flex-btn-group-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, to: user.login, color: "info", size: "sm" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "eye" }),
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "d-none d-md-inline" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.action.view" }, "View"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, to: `${user.login}/edit`, color: "primary", size: "sm" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "pencil-alt" }),
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "d-none d-md-inline" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.action.edit" }, "Edit"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__.Button, { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, to: `${user.login}/delete`, color: "danger", size: "sm", disabled: account.login === user.login },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, { icon: "trash" }),
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "d-none d-md-inline" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.Translate, { contentKey: "entity.action.delete" }, "Delete")))))))))),
        totalItems ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: (users === null || users === void 0 ? void 0 : users.length) > 0 ? '' : 'd-none' },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "justify-content-center d-flex" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.JhiItemCount, { page: pagination.activePage, total: totalItems, itemsPerPage: pagination.itemsPerPage, i18nEnabled: true })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "justify-content-center d-flex" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_1__.JhiPagination, { activePage: pagination.activePage, onSelect: handlePagination, maxButtons: 5, itemsPerPage: pagination.itemsPerPage, totalItems: totalItems })))) : ('')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserManagement);


/***/ }),

/***/ "./src/main/webapp/app/shared/util/entity-utils.ts":
/*!*********************************************************!*\
  !*** ./src/main/webapp/app/shared/util/entity-utils.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanEntity": () => (/* binding */ cleanEntity),
/* harmony export */   "mapIdList": () => (/* binding */ mapIdList),
/* harmony export */   "overridePaginationStateWithQueryParams": () => (/* binding */ overridePaginationStateWithQueryParams)
/* harmony export */ });
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Removes fields with an 'id' field that equals ''.
 * This function was created to prevent entities to be sent to
 * the server with an empty id and thus resulting in a 500.
 *
 * @param entity Object to clean.
 */
const cleanEntity = entity => {
    const keysToKeep = Object.keys(entity).filter(k => !(entity[k] instanceof Object) || (entity[k]['id'] !== '' && entity[k]['id'] !== -1));
    return lodash_pick__WEBPACK_IMPORTED_MODULE_0___default()(entity, keysToKeep);
};
/**
 * Simply map a list of element to a list a object with the element as id.
 *
 * @param idList Elements to map.
 * @returns The list of objects with mapped ids.
 */
const mapIdList = (idList) => idList.filter((id) => id !== '').map((id) => ({ id }));
const overridePaginationStateWithQueryParams = (paginationBaseState, locationSearch) => {
    const params = new URLSearchParams(locationSearch);
    const page = params.get('page');
    const sort = params.get('sort');
    if (page && sort) {
        const sortSplit = sort.split(',');
        paginationBaseState.activePage = +page;
        paginationBaseState.sort = sortSplit[0];
        paginationBaseState.order = sortSplit[1];
    }
    return paginationBaseState;
};


/***/ }),

/***/ "./src/main/webapp/app/shared/util/pagination.constants.ts":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/shared/util/pagination.constants.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASC": () => (/* binding */ ASC),
/* harmony export */   "DESC": () => (/* binding */ DESC),
/* harmony export */   "ITEMS_PER_PAGE": () => (/* binding */ ITEMS_PER_PAGE),
/* harmony export */   "SORT": () => (/* binding */ SORT)
/* harmony export */ });
const ITEMS_PER_PAGE = 20;
const ASC = 'asc';
const DESC = 'desc';
const SORT = 'sort';


/***/ })

}]);
//# sourceMappingURL=administration.6b09b400.chunk.js.map