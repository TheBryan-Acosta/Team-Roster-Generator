const fs = require("fs");

// create a file with the string literal passed into it, into the dist folder with the name of index.html
const writeFile = (fileContent) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/index.html", fileContent, (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: "File created!",
			});
		});
	});
};

// copy the style sheet from our source file to our dist folder
const copyFile = () => {
	return new Promise((resolve, reject) => {
		fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
			if (err) {
				reject(err);
				return;
			}

			resolve({
				ok: true,
				message: "Stylesheet created!",
			});
		});
	});
};

module.exports = { writeFile, copyFile };
