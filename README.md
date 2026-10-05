# limen-test

Simple HTTP API for a live Limen seat test.

## Requirements

- Node.js 18+ (no extra npm packages required)

## Run

```bash
cd /Users/overment/overment/lab/limen-test
node server.js
# or
npm start
```

Server listens on **port 3000** (override with `PORT`).

## Endpoints

| Method | Path     | Response                                      |
|--------|----------|-----------------------------------------------|
| GET    | `/health`| `{ "ok": true }`                              |
| GET    | `/`      | `{ "hello": "...", "name": "...", "version": "..." }` |

## Quick check

```bash
curl http://localhost:3000/health
curl http://localhost:3000/
```
