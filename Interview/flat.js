//数组扁平化
const arr1 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]

const isArray = (value) => {
    return Object.prototype.toString.call(value) === '[object Array]'
}

const flat = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(isArray(cur) ? flat(cur) : cur)
    }, [])
}

/**
 * 1.基线条件（退出条件）
 * 2.递归步骤
 * 3.推进条件
 */