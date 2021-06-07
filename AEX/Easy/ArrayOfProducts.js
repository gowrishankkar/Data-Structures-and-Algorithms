function arrayOfProducts(array) {
    // Write your code here.
      let productArray = []
      for(const i in array){
  
          let product = 1;
          for(const j in array){
              if(i !== j){
                  product = product * array[j]
              }
          }
          productArray.push(product)
      }
      
      return productArray;
  }