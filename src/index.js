const request = require("request");

request(
  "https://api.nasa.gov/planetary/apod?api_key=YbJqa0URNcFWdA8ZrKXr1IRBUg2rY4yyXHHaXEnR",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body.url);
    console.log(body.explanation);
  }
);
