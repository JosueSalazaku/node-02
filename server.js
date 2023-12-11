const path = require("path");
const fs = require("fs");
const os = require("node:os");

console.log(path.__dirnam);

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
  const htmlContent = `<!DOCTYPE html>
    <html>
      <head>
        <title>My Dynamic HTML Page</title>
        <link rel="stylesheet" href="/client/style.css">
      </head>
      <body>
        <h1>CLIENT PAGE</h1>
      </body>
    </html>`;

  createFile(newFilePath, htmlContent);

  const cssFile = path.join(clientPath, "style.css");
  createFile(cssFile, "Hello, this is CSS content!");
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
    createFile(contactHtml, "Hello, this is HTML content for contact!");
    const htmlContent = `<!DOCTYPE html>
    <html>
      <head>
        <title>My Dynamic HTML Page</title>
        <link rel="stylesheet" href="/client/contact/style.css">
      </head>
      <body>
        <h1>CONTACT PAGE</h1>
      </body>
    </html>`;

    createFile(contactHtml, htmlContent);

    const contactCss = path.join(contactFolderPath, "style.css");
    createFile(contactCss, "Hello, this is CSS content for contact!");
    const cssContent = `body {
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
    createFile(contactCss, cssContent);
  });

  const aboutFolderPath = path.join(clientPath, "about");
  createFolder(aboutFolderPath, () => {
    const aboutHtml = path.join(aboutFolderPath, "index.html");
    createFile(aboutHtml, "Hello, this is HTML content for about!");
    const htmlContent = `<!DOCTYPE html>
      <html>
        <head>
          <title>My Dynamic HTML Page</title>
          <link rel="stylesheet" href="/client/about/style.css">
        </head>
        <body>
          <h1>ABOUT PAGE</h1>
        </body>
      </html>`;

    createFile(aboutHtml, htmlContent);

    const aboutCss = path.join(aboutFolderPath, "style.css");
    createFile(aboutCss, "Hello, this is CSS content for about!");
    const cssContent = `body {
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
    createFile(aboutCss, cssContent);
  });

  const blogFolderPath = path.join(clientPath, "blog");
  createFolder(blogFolderPath, () => {
    const blogHtml = path.join(blogFolderPath, "index.html");
    createFile(blogHtml, "Hello, this is HTML content for blog!");
    const htmlContent = `<!DOCTYPE html>
      <html>
        <head>
          <title>My Dynamic HTML Page</title>
          <link rel="stylesheet" href="/client/blog/style.css">
        </head>
        <body>
          <h1>BLOG PAGE</h1>
        </body>
      </html>`;

    createFile(blogHtml, htmlContent);

    const blogCss = path.join(blogFolderPath, "style.css");
    createFile(blogCss, "Hello, this is CSS content for blog!");
    const cssContent = `body {
        font-family: "Poppins", sans-serif;
        background: purple;
        color: blueviolet;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
      }`;
    createFile(blogCss, cssContent);
  });

  const clientTxtfile = path.join(clientPath, "info.txt");
  const osInfo = `This is being run on a ${os.type()} computer!`;
  createFile(clientTxtfile, osInfo);
});
