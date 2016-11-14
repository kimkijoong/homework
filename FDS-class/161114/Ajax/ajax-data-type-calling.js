/*! ajax-data-type-calling.js © yamoo9.net, 2016 */
(function(global, Ajax){
  'use strict';

  function parsePageLoad(){
    var page = this.location.hash.replace(/#!,'');
    var button;
    switch(page){
      case 'txt':
        button = button[0];
      break;
      case 'html':
      button = button[1];
      break;
      case 'xml':
      button = button[2];
      break;
      case 'json':
      button = button[3];
      break;
    }
    AjaxCalling.call(button);
  }


  var buttons  = document.querySelectorAll('.call-ajax-data');
  var print_el = document.querySelector('.ajax-data-result');

  [].forEach.call(buttons, function(button) {
    button.addEventListener('click', AjaxCalling);
  });

  function AjaxCalling() {
    var data_type = this.classList.item(1);
    // Ajax 설정
    var xhr       = new XMLHttpRequest(),
        method    = 'GET',
        url       = ('./data/' + data_type).replace(/-/, '.');
    xhr.open(method, url);
    // 비동기 통신 요청에 따른 데이터를 받는 상황(이벤트)이 오면 printData() 함수 실행
    xhr.addEventListener('readystatechange', printData.bind(xhr, url));
    xhr.send(); // 서버 데이터 요청
  }

  function printData(url) {
    url = url.split('.'); // 'txt', 'html', 'xml', 'json'
    var type = url[url.length - 1];
    if(this.status === 200 && this.readyState === 4) {
      switch(type) {
        case 'txt':
        case 'html':
          print_el.innerHTML = this.responseText;
        break;
        case 'xml':
          // print_el.innerHTML = 'print xml data type';
          var xml_doc = this.responseXML;
          var people = xml_doc.getElementsByTagName('person');
          for ( var i=0, l=people.length; i<l; i++ ) {
            var person = people[i];
            var person_name = person.getElementsByTagName('name')[0].firstChild.nodeValue;
            var person_tel  = person.getElementsByTagName('tel')[0].firstChild.nodeValue;
            var person_mail = person.getElementsByTagName('mail')[0].firstChild.nodeValue;

          }
        break;
        case 'json':
          // print_el.innerHTML = 'print json data type';
          var txt2json_obj = global.JSON.parse(this.response);
          txt2json_obj.results.forEach(function(object, index){
            json_html_template.push(`
              <ul class="personinfo">
                <li><img src="${o.picture.medium}" alt="$o.name.first" class="person-picture"></li>
                <li>
                  <h3 class="person-name">
                    <span class="name-title">${o.name}</span>
                    <span class="name-title"></span>
                    <span class="name-title"></span>
                  </h3>
                </li>
                <li>
                  <span class="person-gender"></span>
                  <span class="person-national"></span>
                </li>
                <li><span class="person-cell"></span></li>
                <li><span class="person-email"></span></li>
                <li>
                  <p class="person-address">
                    <span class="address-state"></span>
                    <span class="address-city"></span>
                    <span class="address-street"></span>
                  </p>
                </li>
              </ul>
            `);
          })
        break;
      }
    }
    global.location.hash = '!' + type;
  }

})(this, this.XMLHttpRequest);
