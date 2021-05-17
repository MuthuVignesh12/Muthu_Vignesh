const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, response){
  response.sendFile(__dirname+"/index.html")
});


app.post("/", function(req, response){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1+n2;
  response.send("The answer is "+result);
});

app.listen(3000, function(){
  console.log("Server has Started on port 3000");
});
