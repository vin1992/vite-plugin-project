import apiMocker from 'connect-api-mocker'

export default function () {
  return {
    name: 'mock-api',
    configureServer(server) {
      server.middlewares.use(apiMocker('/api', './mock/api'))
    },
  }
}
