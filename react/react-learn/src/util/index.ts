type ITimeOut = ReturnType<typeof setTimeout> | null
export const debouce = (fn: (...args: Array<string>) => any, delay = 500) => {
    let timeId: ITimeOut = null
    return (...args: Array<string>) => {
        if (timeId) {
            clearTimeout(timeId)
        }
        timeId = setTimeout(() => {
            fn.apply(this, args)
            clearTimeout(timeId!)
        }, delay)
    }
}