"use strict";
// 实现两个数字（字符串格式），相加返回正确的结果(字符串格式)
function add(a, b) {
    //数组分割字符串 逆序
    //数组累加 mod 10 设置进位值 逆序重新生成
    let a1 = a.split('').reverse();
    let b1 = b.split('').reverse();
    let result = []
    let carry = 0;
    new Array(Math.max(a1.length, b1.length)).fill("").forEach((a, index) => {
        const sum = parseInt(a1[index] || 0) + parseInt(b1[index] || 0) + carry;
        carry = Math.floor(sum / 10);
        let value = sum % 10;
        result.unshift(value);
    })
    return result.join('')
}
let a = '9007199254740991';
let b = '1234567899999999999';
add(a, b); //结果为："1243575099254740990"
console.log(add(a, b));
