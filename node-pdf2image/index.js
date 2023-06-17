import { fromPath } from "pdf2pic";
const currentPath = `${process.cwd()}`

const options = {
  saveFilename: "untitled",
  savePath: currentPath ,
  format: "png",
  width: 210 * 3,
  height: 297 * 3,
};
const storeAsImage = fromPath(currentPath + "/111010_4505.pdf", options);
// /Users/keroliao/Documents/GitHub/nodejs-tool/pdf2image/111010_4505.pdf
const pageToConvertAsImage = 2;
``
storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");

  return resolve;
});