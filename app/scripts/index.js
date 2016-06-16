var $ = require('jquery');
var _ = require('underscore');
// var Puppy = require('./models').Puppy;
// var Kitten = require('./models').Kitten;
var models = require('./models');
var detailTemplate = require('../templates/puppy-detail.hbs');
var listTemplate = require('../templates/puppy-list.hbs');

// Wait till DOM is ready
$(function(){
  var favoritePuppy;

  var puppies = [
    new models.Puppy({name: 'Ben', image: 'http://28.media.tumblr.com/tumblr_lhdu1cg0CC1qb0fx9o1_500.jpg'}),
    new models.Puppy({name: 'Sherlock', image: 'http://images6.fanpop.com/image/photos/33000000/Hipster-Puppy-puppies-33066415-246-310.jpg'}),
  ];

  // _.each(puppies, function(puppy){
  //   var html = detailTemplate(puppy);
  //   $('.js-puppies').append(html);
  // });

  var context = {'puppies': puppies};
  $('.js-puppies').html(listTemplate(context));

  $('.js-cute-puppy').on('click', function(event){
    event.preventDefault();
    var $puppyImage = $(this);
    var puppyName = $puppyImage.data('name');
    favoritePuppy = _.filter(puppies, {'name': puppyName})[0];
  });

  $('.js-speak').on('click', function(event){
    event.preventDefault();
    if(favoritePuppy){
      alert('My name is ' + favoritePuppy.name + ' and I have a ' + favoritePuppy.speak());
      window.setTimeout(function(){
        var toySound = favoritePuppy.playWithToy('squeek');
        alert('My toy goes ' + toySound);
      }, 2000);
    }else{
      alert('Select a puppy first');
    }
  });

});
