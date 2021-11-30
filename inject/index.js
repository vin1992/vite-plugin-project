import { minify } from 'html-minifier'
import htmls from './htmls'

export default function () {
  return {
    name: 'inject-html',
    transformIndexHtml(html) {
      return minify(html.replace(/<\/title>/, `</title>${htmls}`), {
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true,
        removeComments: true,
      })
    },
  }
}
