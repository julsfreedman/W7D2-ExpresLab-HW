const express = require("express");
const app = express();
const port = 3000;

const fs = require("fs");

app.engine("labHw", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<h2>" + options.content + "</h2>")
      .replace("#content2#", "<h3>" + options.content2 + "</h3>");
    return callback(null, rendered);
  });
});

app.set("views", "./views");
app.set("view engine", "labHw");

app.get("/", function (req, res) {
  res.send(
    "<a style=font-size:50px href=http://localhost:3000/1> &#127926 10 Dope Songs According to Yours Truly &#127926</a>"
  );
});

app.get("/1", (req, res) => {
  res.render("template", {
    title: "Song #1",
    message: "The Grateful Dead",
    content: "Turn On Your Love Light &#128367",
    content2:
      "The bluesy Pigpen years <br><br> <a href=http://localhost:3000/2>Next Song</a>",
  });
});

app.get("/2", (req, res) => {
  res.render("template", {
    title: "Song #2",
    message: "Sublime",
    content: "Scarlet Begonias",
    content2:
      "Inspired by The Grateful Dead &#128174 <br><br> <a href=http://localhost:3000/3>Next Song</a>",
  });
});

app.get("/3", (req, res) => {
  res.render("template", {
    title: "Song #3",
    message: "Frank Ocean",
    content: "Thinkin Bout You",
    content2:
      "From the genius album Channel Orange &#128999 <br><br> <a href=http://localhost:3000/4>Next Song</a>",
  });
});

app.get("/4", (req, res) => {
  res.render("template", {
    title: "Song #4",
    message: "The Weeknd",
    content: "Often",
    content2:
      "This song radiates endorphins &#129327 <br><br> <a href=http://localhost:3000/5>Next Song</a>",
  });
});

app.get("/5", (req, res) => {
  res.render("template", {
    title: "Song #5",
    message: "Joe",
    content: "I Wanna Know",
    content2:
      "I wish that I could take a journey through your mind and find emotions that you always try to hide. &#128173 <br><br> <a href=http://localhost:3000/6>Next Song</a>",
  });
});

//template2.labHw

app.get("/6", (req, res) => {
  res.render("template2", {
    title: "Song #6",
    message: "Old Crow Medicine Show",
    content: "Wagon Wheel &#9784",
    content2:
      "Reminds me of my sister's wedding <br><br> <a href=http://localhost:3000/7>Next Song</a>",
  });
});

app.get("/7", (req, res) => {
  res.render("template2", {
    title: "Song #7",
    message: "Tupac",
    content: "Life Goes On",
    content2:
      "Never a dry eye when this song plays &#128167<br><br> <a href=http://localhost:3000/8>Next Song</a>",
  });
});

app.get("/8", (req, res) => {
  res.render("template2", {
    title: "Song #8",
    message: "Outkast",
    content: "ATLiens",
    content2:
      "Put my Glock away I got a stronger weapon That never runs out of ammunition so I'm ready for war, okay &#9997 <br><br> <a href=http://localhost:3000/9>Next Song</a>",
  });
});

app.get("/9", (req, res) => {
  res.render("template2", {
    title: "Song #9",
    message: "Common",
    content: "The Light",
    content2:
      "Let your light shine &#x2600 <br><br> <a href=http://localhost:3000/10>Next Song</a>",
  });
});

app.get("/10", (req, res) => {
  res.render("template2", {
    title: "Song #10",
    message: "Anthony Hamilton",
    content: "Charlene",
    content2:
      "Come on home to me &#128156 <br><br> <a href=http://localhost:3000/>Back to Home Page</a>",
  });
});

app.listen(port, function () {
  console.log("Listening on port 3000");
});
