const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
// Handle socket connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle video call signaling
  socket.on('offer', (offer) => {
    // Handle offer from the caller
    // Send offer to the callee
    socket.broadcast.emit('offer', offer);
  });

  socket.on('answer', (answer) => {
    // Handle answer from the callee
    // Send answer back to the caller
    socket.broadcast.emit('answer', answer);
  });

  socket.on('iceCandidate', (iceCandidate) => {
    // Handle ICE candidate exchange
    // Broadcast ICE candidate to the other peer
    socket.broadcast.emit('iceCandidate', iceCandidate);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
