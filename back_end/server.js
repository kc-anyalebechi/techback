const express = require("express");
console.log("express", express);
// CREATE A NEW INSTANCE OF EXPRESS
const app = express();
// SET THE DEFAULT PORT NUMBER THE WEB SERVER WILL LISTEN IN ON
const PORT = 3000;
// ACTIVATE THE SERVER TO LISTEN ON THE PORT
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.get("/somedata", (req, res) => {
  console.log("get - req", req);
  res.send("Hello world");
});

app.get("/alltechdata", (req, res) => {
  console.log("get - req", req);
  res.send({
    full_name: "Kelechuku Anyalebechi",
    expertise: "Software Engineer",
    location: "San Jose",
    linkedIn: "www.linkedin/in/meet-kc.com",
    email: "myemailaddress@email.com",
    offer: "Seminars",
  });
});
