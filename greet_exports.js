'use strict';

exports.greet = function(){
  var rando = Math.floor(Math.random() * (65 - 90) + 90);
return String.fromCharCode(rando)
};
