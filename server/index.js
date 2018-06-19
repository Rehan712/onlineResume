const express = require("express");
const app = express();
const mongoose = require("mongoose");

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

require("./passport")();

app.use(express.static(require("path").join(__dirname, "../dist")));

app.use("/api/user", require("./routes/api/users.js"));
app.use("/api/profile", require("./routes/api/profiles.js"));
app.use("/api/post", require("./routes/api/posts.js"));

require("./routes/api/fallback")(app);

mongoose
  .connect("mongodb://rehan007:rehan6300487@ds233320.mlab.com:33320/school")
  .then(() => console.log("connection successfull"))
  .catch(e => {
    throw e;
  });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("node is listening on port", port));
