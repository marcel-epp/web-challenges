import { createServer } from "node:http";

// export const server = …

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;
    response.end("Hello, try the url's /api/fish/1 and /api/fish/2");
  } else if (request.url === "/api/fish/1") {
    response.statusCode = 200;
    response.end("Shrimp");
  } else if (request.url === "/api/fish/2") {
    response.statusCode = 200;
    response.end("Anemonefish");
  } else {
    response.statusCode = 404;
    response.end("Not Found");
  }
});
