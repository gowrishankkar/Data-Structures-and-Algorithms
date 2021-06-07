function caesarCipherEncryptor(string, key) {
    // Write your code here.
      const encryptedLetters = [];
      const keyValue = key % 26;
      console.log(key, keyValue)
      for(const letter of string){
          encryptedLetters.push(encryptFunction(letter, keyValue))
  
      }
      
      return encryptedLetters.join('')
  }
  
  
  function encryptFunction(letter, key){
      const encryptedLetterCode = letter.charCodeAt() + key;
      console.log(encryptedLetterCode);
      return encryptedLetterCode <= 122 ? String.fromCharCode(encryptedLetterCode) : String.fromCharCode(96 + (encryptedLetterCode % 122))
      
  }