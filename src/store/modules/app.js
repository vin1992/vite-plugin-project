import { nextTick } from 'vue'

const TOAST_CONFIG = 'TOAST_CONFIG'
const DIALOG_CONFIG = 'DIALOG_CONFIG'

const module = {
  namespaced: true,
  state: {
    toastConfig: {},
    dialogConfig: {},
  },
  mutations: {
    [TOAST_CONFIG](state, payload) {
      state.toastConfig = payload
    },
    [DIALOG_CONFIG](state, payload) {
      state.dialogConfig = payload
    },
  },
  actions: {
    /**
     * 展示toast提示
     * @param {string} content 文本内容
     */
    showToast({ state, commit }, content) {
      if (state.toastConfig.timer) {
        clearTimeout(state.toastConfig.timer)
        commit(TOAST_CONFIG, {})
      }
      const timer = setTimeout(() => {
        commit(TOAST_CONFIG, {})
      }, 2000)

      nextTick(() => {
        commit(TOAST_CONFIG, {
          isShow: true,
          content,
          timer,
        })
      })
    },
    /**
     * 打开弹窗
     * @param {String|Object} payload 支持字符串或者对象参数
     *  String参数：弹窗名称
     *  Object参数：{
     *    name: 弹窗名称
     *    params: 弹窗参数
     *    overlay: 遮罩配置
     *  }
     */
    openDialog({ commit }, payload) {
      const name = payload.name || payload
      const params = payload.params
      const overlay = payload.overlay

      commit(DIALOG_CONFIG, {
        isShow: true,
        name,
        params,
        overlay,
      })
    },
    /**
     * 关闭弹窗
     */
    closeDialog({ state, commit }) {
      commit(DIALOG_CONFIG, Object.assign({}, state.dialogConfig, { isShow: false }))
      setTimeout(() => {
        commit(DIALOG_CONFIG, {})
      }, 300)
    },
  },
}

export default module
