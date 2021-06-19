function moveElementToEnd(array, toMove) {
    // Write your code here.
      let idx1 = 0;
      let idx2 = array.length - 1;
      
      while(idx1 < idx2){
          while(idx1 < idx2 && array[idx2] == toMove) idx2--;
          
          if(array[idx1] == toMove){
              let temp = array[idx2];
              array[idx2] = array[idx1];
              array[idx1] = temp;
                                                  
                                                      
          }
          idx1++;	
      }
      console.log(array)
      return array;
  }