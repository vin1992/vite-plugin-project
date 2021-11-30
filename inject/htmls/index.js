import eruda from './eruda'
import legacy from './legacy'
import adapter from './adapter'
import theme from './theme'
import antnest from './antnest'
import sentry from './sentry'

const template = {
  eruda,
  legacy,
  adapter,
  theme,
  antnest,
  sentry,
}

let htmls = ''
Object.keys(template).forEach((key) => {
  htmls += template[key]
})

export default htmls
