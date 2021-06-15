function generateDocument(characters, document) {
	let counted = {};
	let documentPresent = false;
	for(let i = 0; i <  characters.length ; i++){
		// console.log(characters[i])
		if(!(characters[i] in counted))	counted[characters[i]] = 0;
		 counted[characters[i]]++;
	}

	for(const character of document ){
		if(!(character in counted) || counted[character] === 0){
			documentPresent = false;
		} 
			counted[character]--
			documentPresent = true;
		
	}
// 	for(let j = 0; j <  document.length ; j++){
// 		console.log(characters[j] in counted, document[j], counted)
		
	
// 	}
	// console.log(counted, documentPresent)
  // Write your code here.
  return documentPresent;
}
