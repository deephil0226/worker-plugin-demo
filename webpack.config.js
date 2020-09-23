const HTMLPlugin = require("html-webpack-plugin");
const WorkerPlugin = require("worker-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  plugins: [new HTMLPlugin(), new WorkerPlugin()]
};
