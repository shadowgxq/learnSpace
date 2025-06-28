const debouce = (fn, delay = 500) => {
    let timeRef = null
    return (...args) => {
        if (timeRef) {
            clearTimeout(timeRef)
        }
        timeRef = setTimeout(() => {
            fn.apply(this, args)
            clearTimeout(timeRef)
        }, delay)
    }
}
const call = () => {
    console.log("calling....")
}
const debouceCall = debouce(call)
debouceCall()
debouceCall()
debouceCall()
debouceCall()