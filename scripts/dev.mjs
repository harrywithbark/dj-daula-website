import { spawn } from 'node:child_process'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const appDir = join(root, 'artifacts', 'dj-daula')
const port = process.env.PORT ?? '3001'

const nextBin = [
  join(appDir, 'node_modules', 'next', 'dist', 'bin', 'next'),
  join(root, 'node_modules', 'next', 'dist', 'bin', 'next'),
].find(existsSync)

if (!nextBin) {
  console.error('Next.js is not installed. Run: npx pnpm install')
  process.exit(1)
}

const child = spawn(process.execPath, [nextBin, 'dev', '--port', port], {
  cwd: appDir,
  stdio: 'inherit',
  env: process.env,
})

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  process.exit(code ?? 0)
})
