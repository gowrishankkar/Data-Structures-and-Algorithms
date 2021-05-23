function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
      currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
  
  console.log(insertionSort([2, 1, 9, 76, 4]));
   



  function insertionSort(array) {
    const length = array.length;
    
    for(let i =0; i< length; i++){
  
      if(array[i] < array[0]){
        // Condition to move the number to the first index
        console.log(array.splice(i,1))
        
      }
    }
    
    return array;
  }
  
  console.log(insertionSort([2, 1, 9, 76, 4]));
   