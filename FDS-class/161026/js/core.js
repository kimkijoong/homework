(function(global){
  'use strict';
  var doc = global.document;
  var gnb = doc.querySelector('#gnb');
  var gnb_links = gnb.querySelector('a');
  var print_area = doc.querySelector('#print_area');
  var updatePrintMessage =  function () {}
}

console.log('gnb_links.length:', gnb_links.length );

for (var i=0, l=gnb_links.length; i < l; i++) {
  var gnb_link = gnb_links[i];
  gnb_link.onclick = updatePrintMessages;
}

)(this)
