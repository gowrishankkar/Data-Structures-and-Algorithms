function minimumWaitingTime(queries) {
	let waitingTime = 0;

	let sortedArray = queries.sort((a,b ) => a-b)
// 	sortedArray.unshift(0)
// 	sortedArray.map((array)=>{
				
// 		waitingTime = waitingTime + array
// 		console.log(array, waitingTime)
		
// 	})	
	console.log(sortedArray)
	for(let i = 0 ; i < sortedArray.length ; i++){
		const currentItem =  sortedArray[i];
		const length = sortedArray.length - 1 - i
		
		const currentWaitingTime = currentItem * length
		waitingTime = waitingTime + currentWaitingTime
		console.log(currentItem,length, waitingTime)
	}

  // Write your code here.
  return waitingTime;
}