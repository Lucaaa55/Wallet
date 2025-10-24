const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Cuando un cliente se conecta
io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado:", socket.id);

  // Recibir y reenviar ofertas
  socket.on("offer", (offer) => {
    console.log("Oferta recibida");
    socket.broadcast.emit("offer", offer);
  });

  // Responder con answer
  socket.on("answer", (answer) => {
    console.log("Respuesta recibida");
    socket.broadcast.emit("answer", answer);
  });

  // Compartir candidatos ICE
  socket.on("candidate", (candidate) => {
    console.log("ICE candidate recibido");
    socket.broadcast.emit("candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

app.get("/", (req, res) => {
  res.send("Servidor de señalización WebRTC activo 🚀");
});

server.listen(3000, '192.168.86.231', () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
