(function(global){
  'use strict';

  var document   = global.document;
  var location   = global.location;
  var setTimeout = global.setTimeout;
  var bg_color   = '#8b73ba';
  var duration   = 1000; // 1000ms === 1s

  // 페이지 로드 시에 주소창의 hash 값을 가져와서
  // 해당 요소를 찾아서 스타일링한다.
  var stylingHashElement = function () {

    // var target_element, hash = location.hash;

    var hash = location.hash;
    var target_element = null;

    // 임의 정의된 hash 값이 있다면
    if ( hash ) {
      target_element = document.querySelector(hash);
    }
    if ( target_element ) {
      // 스타일 추가
      target_element.style.background = bg_color;
      // 특정 시간이 지나면 스타일 제거
      setTimeout(removeStyleTargetElement, duration);
    }

  };

  var removeStyleTargetElement = function() {
    console.log('try setTimeout');
  };

  // window 객체의 load 이벤트가 발생하면
  // styleHashElement 함수를 실행하라.
  global.onload = stylingHashElement;


})(this);
