$(document).ready(function() {

  // -------------------------
  // INITIALIZE SOCKET CONNECTION
  var socket = io.connect('/');


  // --------------------------
  //SOCKET.IO EVENTS
  socket.on('user:connect', function(userCount) {
    updateUserCount( userCount );
  });

  socket.on('user:disconnect', function(userCount) {
      updateUserCount( userCount );
  });


  // --------------------------
  //UPDATED ACTIVE CONNECTION
  var $userCount = $("#userCount")
  var updateUserCount = function(count) {
    $userCount.text( (count === 1) ? " You seem to be alone. Invite some friends!" : " " + count );
  }

});