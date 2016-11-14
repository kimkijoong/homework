//ajax.study.js
(function(global,Ajax){
  'use strict';
  var xhr = new Ajax();

  xhr.open('GET', './data/data.txt', true);

  // global.setTimeout(function(){xhr.send();}, 2000);

  var ajax_call_btn = document.querySelector('.call-ajax-data');
  var ajax_call_data_result = document.querySelector('.call-ajax-result');

  xhr.send();

  ajax_call_btn.addEventListener('click', callAjaxData);

  function callAjaxData(){
    console.log('콜백 Ajax 데이터');
    console.log(xhr.status);
    ajax_call_data_result.innerHTML = xhr.responseText;

  }
})(this,this.XMLHttpRequest);
