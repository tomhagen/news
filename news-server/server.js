const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Connect to database
mongoose
  .connect("mongodb://localhost:27017/news", { useNewUrlParser: true })
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(err));

// Configure express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, fingerprint"
  );
  next();
});

app.use("/api", require("./routes/api/post"));

app.use("/", express.static(path.join(__dirname, "public")));
// app.use("/", express.static("public"));
// app.use("/", (req, res) => {
//   res.render("../news-client/public/index");
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
