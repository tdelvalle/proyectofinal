const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const chatSocket = require('./socket/chatSocket');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const { connectMariaDB } = require('./config/database');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middlewares
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log(err));

// Conectar a MariaDB
connectMariaDB();

// Rutas
app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);

// Configurar WebSocket
chatSocket(io);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API con Express, MongoDB, MariaDB y WebSockets!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
