import { defineConfig } from 'tsup'
import { exec } from 'child_process'

export default defineConfig((options) => {
  return {
    entry: {
      index: './src/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: false,
    clean: !options.watch,
    treeshake: true,
    splitting: true,
    onSuccess: async () => {
      exec('tsc --emitDeclarationOnly --declaration')
    },
  }
})
