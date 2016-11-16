/*! app.js © yamoo9.net, 2016 */
'use strict';

/** Sass 파일 로드 ---------------------------------------------------- */
require('./sass/app.sass');



/** JS 파일 로드 ------------------------------------------------------ */

// Node.js 모듈 로드 방법
const $       = require('jquery');
const angular = require('angular');

// ES2015 모듈 로드 방법
// import $ from 'jquery';
// import angular from 'angular';

console.log(angular.version.full);

let $twb = $('#twb');
let $twb_binding = $('#twb-bingding');
let twoWatDataBinding = (e)=>{
  let data = e.target.value;
  $twb_binding.text(data);
};

$twb.on('keyup', twoWatDataBinding);
$twb.trigger('keyup');
