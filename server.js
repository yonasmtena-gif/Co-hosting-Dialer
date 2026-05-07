const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8765;
const databasePath = path.join(__dirname, "database.json");

function readDatabase() {
  if (!fs.existsSync(databasePath)) {
    return [];
  }

  try {
    return JSON.parse(fs.readFileSync(databasePath, "utf8"));
  } catch {
    return [];
  }
}

function writeDatabase(data) {
  fs.writeFileSync(databasePath, JSON.stringify(data, null, 2));
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  });
  response.end(JSON.stringify(payload));
}

const server = http.createServer((request, response) => {
  if (request.method === "OPTIONS") {
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.url === "/api/contacts" && request.method === "GET") {
    sendJson(response, 200, readDatabase());
    return;
  }

  if (request.url === "/api/contacts" && request.method === "POST") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      try {
        const payload = JSON.parse(body);
        writeDatabase(payload);
        sendJson(response, 200, { ok: true });
      } catch {
        sendJson(response, 400, { ok: false, error: "Invalid JSON" });
      }
    });

    return;
  }

  sendJson(response, 404, { ok: false, error: "Not found" });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Co-hosting database running at http://127.0.0.1:${PORT}`);
});
