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

fs.mkdirSync("client");
