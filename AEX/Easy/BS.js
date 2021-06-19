function binarySearch(array, target) {
    // Write your code here.
      let leftPointer = 0;
      let rightPointer = array.length - 1;
  
      // console.log(targetIndex)
      return BS(array, target, leftPointer,  rightPointer)
  
  }
  
  function BS(array, target, leftPointer,  rightPointer){
      while(leftPointer <= rightPointer){
              let middle = Math.floor((leftPointer + rightPointer) / 2);
              if(array[middle] === target){
                          // console.log(middle)
                  return middle;
              }
              if(array[middle] > target){
                  rightPointer = middle - 1;
              } else if(array[middle] < target){
                  leftPointer = middle + 1;
              }
      } return -1
  }
  