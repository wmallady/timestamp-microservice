// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/:date?", function(req, res){
  const timestamp = req.params.date; // grabs the parameter from the URL 

  let date; // obj we will store data in

  const defUnix = new Date().getTime(); // default UNIX time (now)
  const defUTC = new Date().toString(); // default UTC time (now)


  if(!timestamp){
    res.json({"unix": defUnix, "utc": defUTC}) // if no timestamp, default
  }
  else {
    const isUnix = timestamp * 1; // convert string to number
    date = isNaN(isUnix) ? new Date(timestamp) : new Date(isUnix); 
    // 1. check if converted timestamp is a number
    // 2. if so, 
  }

  if(date == ""){
    res.json({"error":"Invalid Date"});
  }
  else {
    const unix = date.getTime();
    const utc = date.toUTCString();

    res.json ({"unix":unix, "utc" : utc})
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
