// Make connection
var socket = io.connect('http://localhost:8000');

// Refer to DOM elements.
let message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('btn'),
    messsages = document.getElementById('messages');

// Event listeners.
btn.addEventListener('click', () => {
  handleChat()
});

handleKeyboardSubmit = (event) =>{
  if(event.which == 13 || event.keyCode == 13){
    handleChat()
  }
}

handleChat = () => {
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
  message.value = "";
}

message.addEventListener('keydown', () => {
    socket.emit('typing', handle.value);
});

socket.on('chat', (data) => {
  messages.innerHTML += '<p><strong>' + data.handle + ': ' + data.message + '</strong></p>';
});

socket.on('typing', (data) => {
	console.log(data + ' is typing...');
	});
