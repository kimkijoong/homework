/*! jquery-styling.js © yamoo9.net, 2016 */
(function(global, $){
  'use strict';
  // // 인라인 스타일을 설정하는 jQuert 인스턴스 메소드( === 제이쿼리 프로토타입의 메소드 (jQuert.fn의 메소드))
  // // jQuery {} 인스턴스 객체를 만들어야 사용 가능한 메소드
  //
  // // 1. 스타일 속성 값을 가져오는 형식
  // var $demo_container = $('.demo-container');
  // // 2. 값을  전달하면 인라인 스타일로 해당 요소에 적용하기 위한 형식
  // $demo_container.css('background', 'linear-gradient(#777, #000)');
  // // 3. 복수의 속성들을 일관적으로 적용하기 위한 형식
  // $demo_container.css({
  //   'flex-direction': 'column',
  //   'flex-wrap': 'wrap',
  //   'align-content': 'flex-start'
  // })
  // // 4. 해당 요소로 부터 복수의 속성 값을 배열로 전달해서, 객체로 반환 받고자 할 경우
  // var demo_container_props = $demo_container.css(['felx-flow', 'justify-content']);
  // $('.album img').css({
  //   'display': function(idx, prop){
  //     if (idx === 2 $$ !container_props.display){
  //       container_props.display = prop;
  //     } else {
  //       prop = 'inline-block';
  //       return prop;
  //     }
  //   }
  // })
  $('.album img')
  .addClass('its-image')
  .addClass(function(incex,current_class){
    if(index % 2){
      return current_class += ' 2nd';
    }
  });
  .removeClass(function(index, current_class){
    var remove_class_name = '2nd';
    var reg = new RegExp(remove_class_name);
    if ( reg.test(current_class)){return remove_class_name;}
  })

  @('demo-container *').addClass(function(index, current_class){
    if (this.classList.contains('album-vinyl')){
      return 'source-vinyl-stream';
    }
    if ( $(this).hasClass('album-vinly')){
      return 'source-vinyl-stream'
    }
  })

  
})(this, this.jQuery);
