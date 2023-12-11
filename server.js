const path = require("path");
const fs = require("fs");

console.log("Hello world, this is Node.js");
console.log(path.basename(__filename));

let myPath =
  "/Users/josuesalazaku/Developer/BeCode/TheHill/back-End/node-02/server.js";

fs.readFile(myPath, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const clientPath = "client";

fs.mkdir(clientPath, (err) => {
  if (err) {
    console.error("Error! Directory not created bro:", err);
  } else {
    console.log("Directory created successfully");

    const newFilePath = path.join(clientPath, "index.html");

    fs.writeFile(newFilePath, "Hello, this is HTML content!", "utf8", (err) => {
      if (err) {
        console.error("Error creating new HTML file", err);
      } else {
        console.log("HTML file successfully created");
      }
    });
  }

  const cssFile = path.join(clientPath, "style.css");

  fs.writeFile(cssFile, "Hello, this is HTML content!", "utf8", (err) => {
    if (err) {
      console.error("Error creating new css file", err);
    } else {
      console.log("Css file successfully created");
    }
  });

  const contactFolderPath = path.join(clientPath, "contact");

  fs.mkdir(contactFolderPath, (err) => {
    if (err) {
      console.error("Error creating new contact folder", err);
    } else {
      console.log("New contact folder successfully created");
    }
  });
});
