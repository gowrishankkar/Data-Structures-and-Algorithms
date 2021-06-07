function threeNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a, b) => a-b)
      let threeSumArray = [];
      console.log(array)
      for(let i = 0; i < array.length ; i++){
          let currentNumber = array[i];
          let leftIndex = i + 1;
          let rightIndex = array.length - 1; 
      
              while(leftIndex < rightIndex){
                      let currentSum = currentNumber + array[leftIndex] +  array[rightIndex]
                      if(currentSum === targetSum){
                          threeSumArray.push([currentNumber, array[leftIndex], array[rightIndex] ])
                          
                           leftIndex++;
                           rightIndex--;
                           }
                      if(currentSum < targetSum){
                          leftIndex++;
                      } else if(currentSum > targetSum){
                          rightIndex--;
                      }
                      
              }
      }
          
      return threeSumArray;
  
      
  }