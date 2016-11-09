(function(global, $){
  'use strict';

  $brand.on('click',function(){

    var props = $brand.css(['font-size','width','word-spacing']);
    var html_string = ['<h3>brand properties</h3>'];

    for (var prop in props) {
      html_string.push(`<p><code>${prop}: ${props[prop]}</code></p>`);
    }
  })

})(this, this.jQuery);
