const { set } = require("./config/server");
var app = require("./config/server");

var server = app.listen(80, function () {
  console.log("Servidor Online");
});

var io = require("socket.io").listen(server);

app.set("io", io);

io.on("connection", function (socket) {
  console.log("Usuario conectou");

  socket.on("disconnect", function () {
    console.log("Usuario desconectou");
  });

  socket.on("msgParaServidor", function (data) {
    socket.emit("msgParaCliente", { nome: data.nome, mensagem: data.mensagem });

    socket.broadcast.emit("msgParaCliente", {
      nome: data.nome,
      mensagem: data.mensagem,
    });

    if (parseInt(data.apelidoAtualizado) == 0) {
      socket.emit("participantesParaCliente", { nome: data.nome });

      socket.broadcast.emit("participantesParaCliente", {
        nome: data.nome,
      });
    }
  });
});
