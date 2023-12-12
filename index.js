const path = require("path");
const fs = require("fs");
const os = require("os");

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
  const htmlContent = `<!DOCTYPE html>
    <html>
      <head>
        <title>My Dynamic HTML Page</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h1>CLIENT PAGE</h1>
      </body>
    </html>`;

  createFile(newFilePath, htmlContent);

  const cssFile = path.join(clientPath, "style.css");
  const cssContent = `body {
    font-family: "Poppins", sans-serif;
    background: turquoise;
    color: blueviolet;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }`;

  createFile(cssFile, cssContent);

  const contactFolderPath = path.join(clientPath, "contact");
  createFolder(contactFolderPath, () => {
    const contactHtml = path.join(contactFolderPath, "index.html");
    const contactHtmlContent = `<!DOCTYPE html>
      <html>
        <head>
          <title>My Dynamic HTML Page</title>
          <link rel="stylesheet" href="../style.css">
        </head>
        <body>
          <h1>CONTACT PAGE</h1>
        </body>
      </html>`;

    createFile(contactHtml, contactHtmlContent);

    const contactCssFile = path.join(contactFolderPath, "style.css");
    const contactCssContent = `body {
      font-family: "Poppins", sans-serif;
      background: yellow;
      color: blueviolet;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }`;

    createFile(contactCssFile, contactCssContent);
  });

  const aboutFolderPath = path.join(clientPath, "about");
  createFolder(aboutFolderPath, () => {
    const aboutHtml = path.join(aboutFolderPath, "index.html");
    const aboutHtmlContent = `<!DOCTYPE html>
      <html>
        <head>
          <title>My Dynamic HTML Page</title>
          <link rel="stylesheet" href="../style.css">
        </head>
        <body>
          <h1>ABOUT PAGE</h1>
        </body>
      </html>`;

    createFile(aboutHtml, aboutHtmlContent);

    const aboutCssFile = path.join(aboutFolderPath, "style.css");
    const aboutCssContent = `body {
      font-family: "Poppins", sans-serif;
      background: blue;
      color: blueviolet;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }`;

    createFile(aboutCssFile, aboutCssContent);
  });

  const blogFolderPath = path.join(clientPath, "blog");
  createFolder(blogFolderPath, () => {
    const blogHtml = path.join(blogFolderPath, "index.html");
    const blogHtmlContent = `<!DOCTYPE html>
      <html>
        <head>
          <title>My Dynamic HTML Page</title>
          <link rel="stylesheet" href="../style.css">
        </head>
        <body>
          <h1>BLOG PAGE</h1>
        </body>
      </html>`;

    createFile(blogHtml, blogHtmlContent);

    const blogCssFile = path.join(blogFolderPath, "style.css");
    const blogCssContent = `body {
      font-family: "Poppins", sans-serif;
      background: green;
      color: blueviolet;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }`;

    createFile(blogCssFile, blogCssContent);
  });

  const clientTxtfile = path.join(clientPath, "info.txt");
  const osInfo = `This is being run on a ${os.type()} computer!`;
  createFile(clientTxtfile, osInfo);
});
