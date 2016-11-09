// var box_width = 100;
// var effect_sound = new Audio();
// effect_sound.src ='../../../../FDS/2nd/DAY27/media/tong.mp3';
// var fireEffectSound = function() {
//   effect_sound.pause();
//   effect_sound.currentTime = 0;
//   effect_sound.play();
// }
//
// $('.box').one('click', function(){
//   fireEffectSound();
//   $(this).css({
//     'flex': 'none',
//     'border-radius': '50%'
//   })
//   .addClass('clicked')
//   .width(box_width)
//   .height(box_width);
//   box_width -= 10;
// })
//

(function(global, $){
  'use strict';

  var $box_offset = $('.box').offset();
  console.log($box_offset)

})(this, this.jQuery);
