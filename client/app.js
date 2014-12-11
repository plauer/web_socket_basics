$(document).ready(function() {
  // Initialise Socket.io
  var socket = io.connect('/');

  socket.on('user:connect', function(user_count) {
    update_user_count( user_count );
  });

  socket.on('user:disconnect', function(user_count) {
      update_user_count( user_count );
  });

});