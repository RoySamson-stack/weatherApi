const express = require("express");

const https = require("https");

const app = express();


app.get("/", function(req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e29ded393ef674cd5e29020650bec2d2"

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data" ,function(data){
      console.log(data)
    })
  })

  res.send("Server is up and running");
})


app.listen(3000, () => {
  console.log("Server running on port 3000")
})