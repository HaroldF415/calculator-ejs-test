//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

let sum = 0;

app.get("/addNumber", function(req, res) {

  res.render("addNumber", {
    displaySum: sum
  });

});

app.post("/addNumber", function(req, res) {

  const num1 = parseInt(req.body.userNum1);

  const num2 = parseInt(req.body.userNum2);

  sum = num1 + num2;
  res.redirect("/addNumber");

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
