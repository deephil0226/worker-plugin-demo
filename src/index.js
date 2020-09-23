const worker = new Worker("./worker.js", { type: "module" });

console.log("aaa")
worker.onmessage = event => {
  console.log("response: " + event.data);
};
worker.onerror = errr => {
  console.log("onerror: ", errr);
};

worker.postMessage(0);
