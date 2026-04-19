# @razroo/gmail-mcp

## 1.8.0

### Minor Changes

- File-path attachment support for `create_draft` and `send_message`. Callers pass
  `attachments: [{path, filename?, mimeType?}]` — the server reads each file from
  disk and builds a multipart/mixed MIME message. Previously the only attachment
  path was to pre-build a ~230KB base64url RFC-2822 blob inline in the `raw`
  parameter, which blew past tool-call argument limits for any real PDF/image.
  Empirically this blocked every mailto-apply email-with-CV workflow; observed
  2026-04-19 across CoPlane / Rinse / Gambit / DHS sends that had to bypass the
  MCP entirely.
- Subject header now auto-MIME-encodes (RFC 2047 `=?UTF-8?B?...?=`) when it
  contains non-ASCII characters, fixing em-dash / smart-quote mojibake observed
  in the same session.
- No breaking changes — existing callers using `raw` or plain text bodies behave
  identically.

## 1.7.4

### Patch Changes

- 61269f9: Return formatted response for error cases

## 1.7.3

### Patch Changes

- b2d1c69: README typo

## 1.7.2

### Patch Changes

- a3b6fd3: Add Privacy Policy and TELEMETRY_ENABLED config option

## 1.7.1

### Patch Changes

- d7826fa: Add Razroo

## 1.7.0

### Minor Changes

- 62cd4c3: Update dependencies

## 1.6.0

### Minor Changes

- df948ff: Pin Smithery SDK to last working version

### Patch Changes

- bb7fe96: Update CONTRIBUTING.md and test/README.md

## 1.5.1

### Patch Changes

- f4896af: README update
- 985e8d0: Remove changeset-status.json

## 1.5.0

### Minor Changes

- 5777168: Add test suite for local E2E testing

## 1.4.0

### Minor Changes

- e5e7c7d: Add Github workflows and proper changeset management
