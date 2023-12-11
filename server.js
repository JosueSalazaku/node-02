const path = require("path");
const fs = require("fs");

console.log("Hello world, this is Node.js");
console.log(path.basename(__filename));

fs.readFile(
  "/Users/josuesalazaku/Developer/BeCode/TheHill/back-End/node-02/server.js",
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
