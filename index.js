export default fn => {
  if (typeof fn != "function") {
    return false
  }

  let proxy = new Proxy(fn, {
    construct: () => fn,
  })

  try {
    new proxy
  } catch {
    return false
  }

  return true
}
