function isValidSubsequence(array, sequence) {
	let arrayIndex = 0 ;
	let sequenceIndex = 0 ;
	while(arrayIndex < 	array.length && sequenceIndex < sequence.length){
		if(array[arrayIndex] == sequence[sequenceIndex]){
			sequenceIndex++;
			console.log(sequenceIndex, sequence.length)
		} 
		arrayIndex++;
	}
	return sequenceIndex == sequence.length  
}


function isValidSubsequence(array, sequence) {
	let sequenceIndex = 0 ;
	for(const value of array ){
		if(sequenceIndex == sequence.length){
			return true;
		}
		if(sequence[sequenceIndex] == value){
			sequenceIndex++;
		}
	}return sequenceIndex == sequence.length  
  // Write your code here.
}


isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])