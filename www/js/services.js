angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Jim Warren',
    lastText: 'How is your last test?',
    face: 'https://www.cs.auckland.ac.nz/~jim/Jim2012.jpg'
  }, {
    id: 1,
    name: 'Karen Day',
    lastText: 'Hey, it\'s me',
    face: 'https://unimelbadventures.files.wordpress.com/2013/08/karen_day_university_of_melbourn_300.jpg'
  }, {
    id: 2,
    name: 'Sathiamoorthy Mano',
    lastText: 'This is your feedback',
    face: 'https://www.cs.auckland.ac.nz/images/staff/sman063.jpg'
  }, {
    id: 3,
    name: 'Nevil Brownlee',
    lastText: 'Check this website to view more stroke info! http://www.stroke.org.nz/',
    face: 'https://www.cs.auckland.ac.nz/images/staff/jbro111.jpg'
  }, {
    id: 4,
    name: 'Radu Nicolescu',
    lastText: 'You can do it.',
    face: 'https://www.cs.auckland.ac.nz/images/staff/rnic033.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };

});

