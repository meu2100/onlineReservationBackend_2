const express = require("express");
const app = express();
const router = require("./routes/index");
const { engine } = require("express-handlebars");
const port = 3000;

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.get("/", (req, res) => {
  res.send("線上預約系統後端");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
