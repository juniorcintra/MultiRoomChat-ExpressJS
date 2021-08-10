const { emit } = require("../../config/server");

module.exports.iniciaChat = function (app, req, res) {
  var dadosForm = req.body;

  req.assert("nome", "Nome ou apelido é obrigatório.").notEmpty();
  req
    .assert("nome", "Nome ou apelido deve conter entre 3 e 15 caracteres.")
    .len(3, 15);

  var erros = req.validationErrors();

  if (erros) {
    res.render("index", { validacao: erros });
    return;
  }

  app.get("io").emit("msgParaCliente", {
    nome: dadosForm.nome,
    mensagem: " acabou de se conectar",
  });

  res.render("chat", { nome: dadosForm.nome });
};
