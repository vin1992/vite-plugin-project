/**
 * 蚂蚁统计
 */

function track(event, info) {
  if (!window['NTESAntAnalysis']) {
    window.addEventListener('NTMReady', () => {
      track(event, info)
    })
  } else {
    window['NTESAntAnalysis'].sendData({
      projectid: '',
      val_nm: 'c-ntm',
      val_act: event,
      info,
    })
  }
}

export { track }
