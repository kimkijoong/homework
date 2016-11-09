(function(global, $){
  'use strict';
  // 1. 클릭했을때 이동해야한다.
  // 2. 클릭을 할때 이동하려면, 버튼을 누를때 각 위치값을 기억한 변수로 가야한다.
  // 3. 기존의 높이 값을 가져와야한다.
  // 4.. 이동한 위치에서 바만큼의 높이 값을 더해야한다.

var $win = $(window);

$('.scroll-menu').on('click', function(evt){
  var target = evt.target;
  if ( target.nodeName === 'A'){
    evt.prevetnDefault();
  }
  evt.stopPropagation();

  var scroll_menu_ul_height = window.parseInt($)
  var target_id = target.getAttribute('href');
  var $target = $(target_id);

  $win.scrollTop($target.offset().top - scroollmenu_ul_height);
})



})(this, this.jQuery);
