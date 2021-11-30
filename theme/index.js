import { cssLangRE } from './constant'
import generateTheme from '@mf2e/postcss-generate-theme'
const VITE_CLIENT_ENTRY = '/@vite/client'
const cssVariableString = `const css = "`

async function getClientStyleString(code) {
  if (!code.includes(VITE_CLIENT_ENTRY)) {
    return code
  }

  code = code.replace(/\\n/g, '')
  const cssPrefix = cssVariableString
  const cssPrefixLen = cssPrefix.length

  const cssPrefixIndex = code.indexOf(cssPrefix)
  const len = cssPrefixIndex + cssPrefixLen
  const cssLastIndex = code.indexOf('\n', len + 1)

  if (cssPrefixIndex !== -1) {
    code = code.slice(len, cssLastIndex)
  }
  return code
}

export default function () {
  let config
  let outputPath
  let isServer

  return {
    name: 'theme-adapter',
    enforce: 'post',

    configResolved(resolvedConfig) {
      config = resolvedConfig
      isServer = resolvedConfig.command === 'serve'
      console.log('<<<configResolved')
    },

    resolveId(args) {
      console.log('<<<resolveId')
    },

    load(args) {
      console.log('<<<load')
    },

    async transform(code, id) {
      if (!cssLangRE.test(id)) {
        return null
      }
      console.log('<<<transform', id)

      const getResult = (content) => {
        return {
          map: null,
          code: content,
        }
      }

      const clientCode = isServer
        ? await getClientStyleString(code)
        : code.replace('export default', '').replace('"', '')

      // 插件处理逻辑
      const postcssResult = await (await import('postcss')).default([generateTheme()]).process(clientCode, {
        to: id,
        from: id,
      })

      if (!postcssResult) {
        return null
      }

      console.log('postcssResult:', postcssResult)

      return getResult(postcssResult.css)
    },

    async closeBundle() {},
  }
}
