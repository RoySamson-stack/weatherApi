const express = require("express");

const https = require("https");

const app = express();


app.get("/", function (req, res) {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e29ded393ef674cd5e29020650bec2d2"

  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      //converting to a javascript object
      const weatherData = JSON.parse(data)
      //getting data from the tree of JSON
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
      res.write("<p>The weather is currently " + weatherDescription + "</p>")
      res.write("<h1>The temperature in London is " + temp + " degree celsius </h1>");
      res.write("<img src='" + imageUrl + "'>")
      res.send()
      // const object = {
      //   name: "Roy",
      //   age: "25",
      // }
      // //stringify converts to strings 
      // console.log(JSON.stringify(object))
    })
  })
})


app.listen(3000, () => {
  console.log("Server running on port 3000")
})