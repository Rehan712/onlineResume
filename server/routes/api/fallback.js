module.exports = app => {
  app.get("/register", (req, res) => {
    res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
  });
  app.get("/login", (req, res) => {
    res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
  });
  app.get("/dashboard", (req, res) => {
    res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
  });
  app.get("/dashboard/createProfile", (req, res) => {
    res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
  });
  //   app.get("/register", (req, res) => {
  //     res.sendFile(require("path").join(__dirname, "../../../dist/index.html"));
  //   });
};
