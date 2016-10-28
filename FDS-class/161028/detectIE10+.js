

// [IE 10] MS IE10.0
// [IE 11] rv11.0
(function(global){
  'use strict';
  var html = global.document.documentElement,
      pre_class = html.getAttribue('class') || '',
      userAgent = global.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('msie 10.0') > -1 {
    html.setAttribute('class', pre_class + ' ' +'ie10');
  }
  if (userAgent.indexOf('rv:11.0') > -1){
    html.setAttribute('class',pre_class + '' + 'ie11');
  }
)
})
