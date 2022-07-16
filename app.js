const createp2pnode = require('./src/index');

const node = createp2pnode();
PORT = 8000
IP = "127.0.0.1"

// Start listening to connections
node.listen(PORT, () => {
  console.log('Listening to connections...');
});

// Connect to other nodes
// node.connect(IP, PORT, () => {
//   console.log('Connected to some other node.');
// });

// Send message to everyone
// data can be anything that
// you can JSON.stringify
// node.broacast(data);

// Send message to specific node
// data can be anything that
// you can JSON.stringify
// node.direct(recipientId, data);

// Some other node has connected to
// us (neighbor)
node.on('connect', ({ nodeId }) => {
  console.log('Node', nodeId, 'has connected');
});

// Neighbor has disconnected
node.on('disconnect', ({ nodeId }) => {
  console.log('Node', nodeId, 'has disconnected');
});

// Some message has been broadcasted somewhere
// on the network and has reached us
node.on('broadcast', ({ origin, message }) => {
  console.log('Message', message, 'has been broadcasted from', origin);
});

// Some message has been sent to us
node.on('direct', ({ origin, message }) => {
  console.log('Message', message, 'has been directly send to us from', origin);
});

// Shut down node
// node.close(() => {
//   console.log('Node is down');
// });