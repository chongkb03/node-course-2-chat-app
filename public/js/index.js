var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
  //SEND MSG TO SERVER
  socket.emit('createMessage', {
    from: 'Client',
    text: 'Yup, that works for me.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

//RECEIVE MSG FROM SERVER
socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
