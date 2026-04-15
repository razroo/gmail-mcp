---
"@razroo/gmail-mcp": patch
---

Make the Streamable HTTP listener resilient to port conflicts. Previously, if `PORT` (default `3000`) was already bound — typically by a zombie `gmail-mcp` from a prior session, or a second instance running in another project — `app.listen(PORT)` threw `EADDRINUSE` and the whole process crashed, which killed the stdio MCP transport too even though stdio doesn't need the port. Now we attach an `error` handler to the HTTP server: on `EADDRINUSE` we log a warning and continue, so stdio MCP clients (Claude Desktop, opencode, etc.) keep working. Also added a `DISABLE_HTTP=true` env var for consumers who only use stdio and want to skip the HTTP listener entirely.
