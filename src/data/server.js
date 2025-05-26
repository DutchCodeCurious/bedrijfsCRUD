const express = require("express");
const cors = require("cors");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const path = require("path");

// Gebruik het juiste pad naar je db.json
const dbFile = path.join(__dirname, "db.json");

const server = express();
const router = jsonServer.router(dbFile);
const SECRET = "jouw-super-secret";

// Enable CORS voor je Angular-app op localhost:4200
server.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

server.use(bodyParser.json());

// Debug: log welk database-bestand wordt gebruikt
console.log(`🔍 Laden van database bestand: ${dbFile}`);

// Login endpoint
server.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  const user = router.db.get("users").find({ email, password }).value();
  if (!user) return res.status(401).json({ message: "Ongeldige login" });

  const token = jwt.sign({ sub: user.id, email: user.email }, SECRET, {
    expiresIn: "15m",
  });
  res.json({
    accessToken: token,
    user: { id: user.id, name: user.name, email: user.email },
  });
});

// Preflight requests
server.options("*", cors());

// Mount json-server resources zonder prefix
server.use(router);

const port = process.env.PORT || 3000;
server.listen(port, () =>
  console.log(`🚀 Mock API met auth draait op http://localhost:${port}`)
);
