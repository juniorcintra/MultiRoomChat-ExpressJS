var app = require("./config/server");

var server = app.listen(80, function () {
  console.log("Servidor Online");
});

var io = require("socket.io").listen(server);

io.on("connection", function (socket) {
  console.log("Usuario conectou");

  socket.on("disconnect", function () {
    console.log("Usuario desconectou");
  });
});
