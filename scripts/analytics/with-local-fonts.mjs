/** Apply the font-only migration to an older App snapshot before comparing tracking. */
export function withLocalFonts(source) {
  return source
    .replace("import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';\n", '')
    .replace("import '@/styles/globals.css';\n\nfunction", "import '@/styles/globals.css';\nimport fonts from '@/styles/fonts.module.css';\n\nfunction")
    .replace(/const (?:inter = Inter|fraunces = Fraunces|jetbrainsMono = JetBrains_Mono)\(\{[^}]*\}\);\n\n/g, '')
    .replace('${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}', '${fonts.variables}');
}
