function smallestDifference(arrayOne, arrayTwo) {
    // Write your code here.
      
      arrayOne.sort((a,b)=> a-b)
      arrayTwo.sort((a,b)=> a-b)
      
      let idxPointerOne = 0;
      let idxPointerTwo = 0;
      
      let smallestNumber = Infinity;
      let currentDiff = Infinity;
      let smallestDiffArray = [];
      
      while(idxPointerOne < arrayOne.length && idxPointerTwo < arrayTwo.length){
           let firstNumber  = arrayOne[idxPointerOne];
           let secondNumber = arrayTwo[idxPointerTwo];
          if(firstNumber < secondNumber) {
              currentDiff = secondNumber - firstNumber
              idxPointerOne++;
          }else if(firstNumber> secondNumber) {
              currentDiff =  firstNumber - secondNumber
              idxPointerTwo++;
          } else {
              return [firstNumber, secondNumber]
          }
          
          if(smallestNumber > currentDiff){
              smallestNumber = currentDiff
              smallestDiffArray = [firstNumber, secondNumber]
          }
          
          
      }
      console.log(smallestDiffArray)
      
      return smallestDiffArray
  }
  