import { createStore } from 'vuex'
import modules from './modules'

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules,
})

export default store
