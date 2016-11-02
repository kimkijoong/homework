this.DOM_Helper = (function(global){
  'use strict';

  // 선택 ---------------------------------------------------------
  var toString = Object.prototype.toString;
  var name = 'DOM_Helper';
  var version = '0.0.1';

  function _isDataType(data){
    return toString.call(data).slice(8,-1).toLowerCase();
  }

    function isNumber(data) {
      return _isDataType(data) === 'number';
    }
    function isString(data) {
      return _isDataType(data) === 'string';
    }
    function isBoolean(data) {
      return _isDataType(data) === 'boolean';
    }
    function isFunction(data) {
      return _isDataType(data) === 'function';
    }
    function isArray(data) {
      return _isDataType(data) === 'array';
    }
    function isObject(data) {
      return _isDataType(data) === 'object';
    }


    function isElementNode(node) { return node && node.nodeType === document.ELEMENT_NODE;}
    function isTextNode(node)    { return node && node.nodeType === document.TEXT_NODE;}
    function isNodeList(nodelist){ return nodelist && _isDataType(nodelist) === 'nodelist';}

  return {
    'name': name,
    'version': version
    'isNumber' : isNumber
    'isString' : isString
    'isBoolean' : isBoolean
    'isFunction' : isFunction
    'isArray' : isArray
    'isObject' : isObject
  };
})(this);
