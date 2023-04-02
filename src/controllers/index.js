const fs = require("fs");
const controllerPath = "./src/controllers/";

const getControllers = (url) => {
  let controller = {};
  let dirs = fs.readdirSync(controllerPath + url);
  dirs = dirs.filter((dir) => {
    return dir !== "index.js";
  });
  dirs.forEach((dir) => {
    if (dir.includes(".controller.js")) {
      controller = {
        ...controller,
        [dir.replace(".controller.js", "")]: require("./" + url + dir),
      };
    } else if (fs.statSync(controllerPath + url + dir).isDirectory()) {
      controller = {
        ...controller,
        [dir]: getControllers(url + dir + "/"),
      };
    }
  });
  return controller;
};
let controller = getControllers("");
module.exports = controller;
