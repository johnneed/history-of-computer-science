/* global require */
const handler = require("serve-handler");
const http = require("http");
const open = require("open");

const server = http.createServer((request, response) =>
// You pass two more arguments for config and middleware
// More details here: https://github.com/zeit/serve-handler#options
    handler(request, response, { public:"public" })
);

server.listen(3000, () => {
    console.log("Running at http://localhost:3000");
});

open("http://localhost:3000");
