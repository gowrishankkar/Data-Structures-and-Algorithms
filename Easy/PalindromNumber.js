var isPalindrome = function(x) {
    return x == String(x).split('').reverse().join('')
  };



  var isPalindrome = function(x) {
    const s = String(x)
    for (let i = 0, j = s.length -1; i < j; i++, j--) {
      if (s[i] !== s[j]) {
        return false
      }
    }
    return true
  };


  var isPalindrome = function(x) {
    if (x < 0) { return false }
    return x === reverse(x)
  };
  
  /**
   * @param {number} x
   * @return {number}
   */
  function reverse (x) {
    let result = 0
    while (x) {
      result = result * 10 + x % 10
      x = x / 10 | 0
    }
    return result
  };