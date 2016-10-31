(function(global){}
var ironman_messages = [];
ironman_messages.push('함수는 일급 객체입니다.');
ironman_messages.push('함수는 호출이 가능한 객체입니다.');
ironman_messages.push('함수는 전달인자를 통해 다양한 코드 처리가 가능합니다.');
ironman_messages.push('함수는 함수형 프로그래밍에서 매우 중요한 역할을 합니다..');

var count = 0;
// var ironman_voice = new Audio();
var ironman_voice = document. createElement('audio');
ironman_voice.setAttribute('src', 'media/myturn.mp3');

console.log('ironman_messages:',ironman_messages);

var ironman = document.querySelector('.ironman');
var message = ironman.querySelector('.message');
var iron_button = ironman.querySelector('.ironman-print-button');

console.log(ironman);
console.log(message);
console.log(iron_button);

ironman_button.onclick = function() {
  console.log(ironmans_message.firstChild.nodeValue);
}
})(this);
