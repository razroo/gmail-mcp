import path from 'path'
import os from 'os'

export const MCP_CONFIG_DIR = process.env.MCP_CONFIG_DIR || path.join(os.homedir(), '.gmail-mcp')
export const GMAIL_OAUTH_PATH = path.join(MCP_CONFIG_DIR, 'gcp-oauth.keys.json')
export const GMAIL_CREDENTIALS_PATH = path.join(MCP_CONFIG_DIR, 'credentials.json')
export const AUTH_SERVER_PORT = process.env.AUTH_SERVER_PORT || 3000
export const PORT = process.env.PORT || 3000

// Default OAuth2 credentials for @razroo/gmail-mcp
// These allow users to run `npx @razroo/gmail-mcp auth` without setting up their own Google Cloud project.
// Users can override with CLIENT_ID/CLIENT_SECRET env vars or a gcp-oauth.keys.json file.
const DEFAULT_CLIENT_ID = '373545569898-is4ovucvlpu19pbappaehto5l35g0i8h.apps.googleusercontent.com'
const DEFAULT_CLIENT_SECRET = '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'

export const CLIENT_ID = process.env.CLIENT_ID || DEFAULT_CLIENT_ID
export const CLIENT_SECRET = process.env.CLIENT_SECRET || DEFAULT_CLIENT_SECRET
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN || ''
