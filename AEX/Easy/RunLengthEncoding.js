function runLengthEncoding(string) {
    // Write your code here.
      let chars = [];
      let length = 1
      
      for(let i = 1; i < string.length; i++ ){
          console.log(length)
      
              if(string[i] !== string[i-1] || length == 9){
                  chars.push(length)
                  chars.push(string[i-1])
                  length = 0
              }
          length++;
      }
      
      chars.push(length.toString())
          chars.push(string[string.length -1])
      console.log(chars)
      
      return chars.join('')
      // for(const character of string){
      // 	console.log(character)
      // }
  }