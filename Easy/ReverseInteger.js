var reverse = function(x) {
    let n = Math.abs(x).toString().split('').reverse().join('')
    if (n > 2147483647) { return 0 }
    return (x < 0? -1: 1) * n
  };


  var reverse = function(x) {
    let result = 0
    while (x) {
      result = result * 10 + x % 10
      x = x / 10 | 0
    }
    return Math.abs(result) > 2147483647 ? 0 : result
  };