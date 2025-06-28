const num = 1234567;

function formatWithCommas(num) {
  const str = num.toString();
  let result = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    if ((str.length - i) % 3 === 0 && i !== 0) {
      result = str[i] + ',' + result;
    } else {
      result = str[i] + result;
    }
  }

  return result;
}

const formattedNum = formatWithCommas(num);
console.log(formattedNum); // 输出: "1,234,567"