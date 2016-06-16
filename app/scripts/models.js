var $ = require('jquery');

function CuteAnimals(config){
  config = config || {};
  $.extend(this, config);
  this.isCute = true;
}
CuteAnimals.prototype.bigEyes = true;
CuteAnimals.prototype.playWithToy = function(sound){
  return sound + ', ' + sound;
};

function Puppy(config){
  CuteAnimals.call(this, config);
}
Puppy.prototype = new CuteAnimals();
Puppy.prototype.speak = function(){
  return 'tiny bark';
}

function Kitten(config){
  CuteAnimals.call(this, config);
}
Kitten.prototype = new CuteAnimals();
Kitten.prototype.pur = function(){
  return 'purrrrrRrrrrRrrrr';
}

module.exports = {
  'Puppy': Puppy,
  'Kitten': Kitten
}
