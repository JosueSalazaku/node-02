const path = require("path");
const fs = require("fs");

function createFolder(folderPath, callback) {
  fs.mkdir(folderPath, (err) => {
    if (err) {
      console.error(`Error creating ${folderPath} folder:`, err);
    } else {
      console.log(`${folderPath} folder successfully created`);
    }
    if (callback) {
      callback(err);
    }
  });
}

function createFile(filePath, content, callback) {
  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error(`Error creating ${filePath} file:`, err);
    } else {
      console.log(`${filePath} file successfully created`);
    }
    if (callback) {
      callback(err);
    }
  });
}

const clientPath = "client";

createFolder(clientPath, () => {
  const newFilePath = path.join(clientPath, "index.html");
  createFile(newFilePath, "Hello, this is HTML content!");

  const cssFile = path.join(clientPath, "style.css");
  createFile(cssFile, "Hello, this is CSS content!");

  const contactFolderPath = path.join(clientPath, "contact");
  createFolder(contactFolderPath, () => {
    const contactHtml = path.join(contactFolderPath, "index.html");
    createFile(contactHtml, "Hello, this is HTML content for contact!");

    const contactCss = path.join(contactFolderPath, "style.css");
    createFile(contactCss, "Hello, this is CSS content for contact!");
  });

  const aboutFolderPath = path.join(clientPath, "about");
  createFolder(aboutFolderPath, () => {
    const aboutHtml = path.join(aboutFolderPath, "index.html");
    createFile(aboutHtml, "Hello, this is HTML content for about!");

    const aboutCss = path.join(aboutFolderPath, "style.css");
    createFile(aboutCss, "Hello, this is CSS content for about!");
  });

  const blogFolderPath = path.join(clientPath, "blog");
  createFolder(blogFolderPath, () => {
    const blogHtml = path.join(blogFolderPath, "index.html");
    createFile(blogHtml, "Hello, this is HTML content for blog!");

    const blogCss = path.join(blogFolderPath, "style.css");
    createFile(blogCss, "Hello, this is CSS content for blog!");
  });
});
