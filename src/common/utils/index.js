// 节流
let prev = Date.now()
function throttle(fn, delay) {
    let now = Date.now()
    if (now - prev > delay) {
        fn()
        prev = Date.now()
    }
}
// 防抖
let timeout = null
function debounce(fn, wait) {
    if (timeout !== null) {
        clearTimeout(timeout)
    }
    timeout = setTimeout(fn, wait)
}
export default { debounce, throttle }
