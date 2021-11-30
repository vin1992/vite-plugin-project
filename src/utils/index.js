// 异步等待函数
async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

export { sleep }
