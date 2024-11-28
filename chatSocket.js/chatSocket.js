const chatSocket = (io) => {
    io.on('connection', (socket) => {
      console.log('Usuario conectado:', socket.id);
  
      socket.on('message', (data) => {
        console.log('Mensaje recibido:', data);
        io.emit('message', data); // Enviar mensaje a todos los clientes
      });
  
      socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
      });
    });
  };
  
  module.exports = chatSocket;
  