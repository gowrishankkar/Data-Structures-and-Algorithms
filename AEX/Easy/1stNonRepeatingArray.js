function firstNonRepeatingCharacter(string) {
    // Write your code here.
      for(let i = 0; i<string.length ; i++){
          let  duplicateFound = false;
          for(let j = 0; j < string.length; j++){
              if(string[i] === string[j] && i !== j ) {
                  duplicateFound = true ;
              }
          
              
          // return duplicateFound ? i : -1
          }		
          if(!duplicateFound) return i
      }
  return -1;
  }