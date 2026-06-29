import {
  siClaude,
  siDocker,
  siExpress,
  siHtml5,
  siJavascript,
  siLinux,
  siMongodb,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

/** Brand SVG path data keyed by the stack item `name` in data.ts. */
const PATHS: Record<string, string> = {
  TypeScript: siTypescript.path,
  React: siReact.path,
  Tailwind: siTailwindcss.path,
  'HTML & CSS': siHtml5.path,
  JavaScript: siJavascript.path,
  'Node.js': siNodedotjs.path,
  'Express.js': siExpress.path,
  MongoDB: siMongodb.path,
  Linux: siLinux.path,
  Docker: siDocker.path,
  Claude: siClaude.path,
  'Claude Code': siClaude.path,
  'Claude Design': siClaude.path,
}

/** Renders the brand icon for a stack tool, or the `fallback` glyph if unknown. */
export function TechIcon({
  name,
  size = 18,
  fallback,
}: {
  name: string
  size?: number
  fallback?: string
}) {
  const path = PATHS[name]
  if (!path) return fallback ? <>{fallback}</> : null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable={false}
    >
      <path d={path} />
    </svg>
  )
}
