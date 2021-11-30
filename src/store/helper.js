import { computed } from 'vue'
import { useStore } from 'vuex'

Object.fromEntries = Object.fromEntries || ((arr) => arr.reduce((acc, [k, v]) => ((acc[k] = v), acc), {}))

const useStates = (module) => {
  const store = useStore()
  return Object.fromEntries(
    module !== undefined
      ? Object.keys(store.state[module]).map((key) => [key, computed(() => store.state[module][key])])
      : Object.keys(store.state).map((key) => [key, computed(() => store.state[key])])
  )
}

const useGetters = (module) => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store.getters).map((getter) =>
      module !== undefined && getter.startsWith(module)
        ? [getter.substr(module.length + 1), computed(() => store.getters[getter])]
        : [getter, computed(() => store.getters[getter])]
    )
  )
}

const useMutations = (module) => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store._mutations).map((mutation) =>
      module !== undefined && mutation.startsWith(module)
        ? [mutation.substr(module.length + 1), (payload) => store.commit(mutation, payload)]
        : [mutation, (payload) => store.commit(mutation, payload)]
    )
  )
}

const useActions = (module) => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store._actions).map((action) =>
      module !== undefined && action.startsWith(module)
        ? [action.substr(module.length + 1), (payload) => store.dispatch(action, payload)]
        : [action, (payload) => store.dispatch(action, payload)]
    )
  )
}

export { useStates, useGetters, useMutations, useActions }
