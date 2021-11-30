import { track } from '@/utils/track'

const events = {
  1: 'click_xxxx',
  2: 'view_xxxx',
}

const namespace = 'v-track'

export default function (el, binding) {
  el[namespace] = el[namespace] || {}
  const event = events[binding.arg]
  const info = binding.value

  if (/^click/.test(event)) {
    el.removeEventListener('click', el[namespace].onClick)
    el[namespace].onClick = () => {
      track(event, info)
    }
    el.addEventListener('click', el[namespace].onClick)
  } else if (/^view/.test(event)) {
    if (event !== el[namespace].event || info !== el[namespace].info) {
      track(event, info)
      el[namespace].event = event
      el[namespace].info = info
    }
  }
}
