import answer from "./answer";

self.addEventListener("message", event => {
  postMessage(answer());
});
