var app = require("./config/server");

var server = app.listen(80, function () {
  console.log("Servidor Online");
});

require("socket.io").listen(server);
