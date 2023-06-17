import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


function stripDevCSS () {
  return {
    name: 'strip-dev-css',
    resolveId (source) {
      // console.log(source)
      // return source === 'virtual-module' ? source : null
    },
    renderStart (outputOptions, inputOptions) {
      // console.log({outputOptions, inputOptions})
      const outDir = outputOptions.dir
      // console.log(outDir)
      // const cssDir = path.resolve(outDir, 'css')
      // fs.rmdir(cssDir, { recursive: true }, () => console.log(`Deleted ${cssDir}`))
    }
  }
}


// https://vitejs.dev/config/
export default defineConfig((conf) => {
  const { TEMP, SKIN} = process.env;

  console.log({ TEMP, SKIN })

  return {
    plugins: [vue(), vueJsx(), stripDevCSS()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    optimizeDeps: {
      // exclude: [`./src/template/!${templateId}/**`],
      exclude: [`./src/template`],
    },
    // rollupOptions: {
    //   external: () => new Regexp('./src/template/.*')
    // },
  }
})
