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
  fs.writeFile(cssFile, "Hello, this is CSS content!", "utf8", (err) => {
    if (err) {
      console.error("Error creating new CSS file", err);
    } else {
      console.log("CSS file successfully created");
    }
  });
});

const contactFolderPath = path.join(clientPath, "contact");
fs.mkdir(contactFolderPath, (err) => {
  if (err) {
    console.error("Error creating new contact folder", err);
  } else {
    console.log("New contact folder successfully created");
  }

  const contactHtml = path.join(contactFolderPath, "index.html");
  fs.writeFile(
    contactHtml,
    "Hello, this is HTML content for contact!",
    "utf8",
    (err) => {
      if (err) {
        console.error("Error creating contact HTML file", err);
      } else {
        console.log("Contact HTML file successfully created");
      }
    }
  );

  const contactCss = path.join(contactFolderPath, "style.css");
  fs.writeFile(
    contactCss,
    "Hello, this is CSS content for contact!",
    "utf8",
    (err) => {
      if (err) {
        console.error("Error creating contact CSS file", err);
      } else {
        console.log("Contact CSS file successfully created");
      }
    }
  );
});

const aboutFilePaht = path.join(clientPath, "about");
fs.mkdir(aboutFilePaht, (err) => {
  if (err) {
    console.error("Error creating about folder", err);
  } else {
    console.log("Found about folder");
  }

  const aboutHtml = path.join(aboutFilePaht, "index.html");
  fs.writeFile(
    aboutHtml,
    "Hello, this is Html content for contact!",
    "utf8",
    (err) => {
      if (err) {
        console.error("Error finding about Html", err);
      } else {
        console.log("Found about Html file");
      }
    }
  );

  const aboutCss = path.join(aboutFilePaht, "style.css");
  fs.writeFile(
    aboutCss,
    "Hello, this is CSS content for contact!",
    "utf8",
    (err) => {
      if (err) {
        console.error("Error finding about CSS", err);
      } else {
        console.log("Found about Css file");
      }
    }
  );
});

const blogPath = path.join(clientPath, "blog");
fs.mkdir(blogPath, (err) => {
  if (err) {
    console.error("Error finding blog foler");
  } else {
    console.log("Found blog folder");
  }
});
