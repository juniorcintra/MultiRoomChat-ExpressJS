module.exports = function (app) {
  app.post("/chat", function (req, res) {
    res.render("index");
  });

  app.get("/chat", function (req, res) {
    res.render("chat");
  });
};
