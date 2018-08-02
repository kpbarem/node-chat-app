var socket = io();//opens up web socket and keeps connection open
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from:'Andrew',
    text:'Yup. That works for me'
  });
});
socket.on('disconnect', function(){
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
})
