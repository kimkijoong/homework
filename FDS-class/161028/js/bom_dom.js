(function(global){
  var document = global.document;
  var html = document.documentElement;
  var head, body;
  head = document.head;
  body = document.body;

  var p_element = document.getElementsByTagName('p');
  var first_p = p_elements.item(0);
  console.log(p_elements[0]);
  console.log(p_elements.item[0]);

  var strong_element = first_p.firstChild;
  var last_text = first_p.lastChild;
})(this);
