const flat = (arr) => {
    return arr.reduce((acc, cur) => {
        const res = Array.isArray(cur) ? flat(cur) : [cur]
        return [...acc, ...res]
    }, [])
}
const arr1 = [1, 2, 3, 4, [2, 3, [3, 4, 5]], 7, 8, 9]

const num = 1234567;
const formattedNum = num.toLocaleString("en-US");
console.log(formattedNum);
