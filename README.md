# Chat-App

> A chat app built with socket.io, a JavaScript library/engine for adding real-time, bidirectional, event-based communication to applications.

## How it works

Socket.io controls a server running on the backend which listens for 'chat' and 'typing' websocket events on port 8000. (These are custom websocket events and can be defined as needed by the developer.)

On the front end (that is, on the client), Javascript listens for two standard Javascript events:
  - a user typing into the `input#message`
  - a user hitting the `#btn` Send button

The front end also has some Socket.io code running listening for websocket events:
  - a 'chat' event from the server
  - a 'typing' event from the server

### User is typing...

When a user types, the client *emits* a 'typing' websocket event to the server on the backend. This 'typing' event contains the handle of the user typing.

When the server receives this 'typing' event, it turns around and broadcasts the details of the 'typing' event back to anyone connected to the server from a front-end client. The client, which is listening for the 'typing' websocket event, can then do something with the details in the 'typing' event. Here, it `console.log`s that the currently-typing user is typing.

### New message

When a user submits a new message, the client sends a 'chat' websocket event to the server. This 'chat' message contains the handle of the user who sent it, as well as the contents of the message itself.

By now this should sound familiar. The server is listening for a 'chat' websocket event. When it receives one, it turns around and broadcasts the 'chat' event back to all connected clients, including the handle and message.

The client, which, remember, is listening for a 'chat' websocket event from the server, then receieves this 'chat' websocket event and appends it to the `.messages` element. This way everyone can see what everyone has written.


### Demo

![Demo](https://github.com/jamesgeorge007/Lets-Chat/blob/master/assets/Demo.gif)

### Snip

![Snip](https://github.com/jamesgeorge007/Lets-Chat/blob/master/assets/snip.JPG)

## Instructions

- Clone the repository.
- Navigate to the project directory from the command line.
- Run ```npm install``` to install the dependencies
- Now run ```npm start```
- Navigate to ```localhost:8000``` within your favourite browser.

## License

> The GPL V 3.0 License
