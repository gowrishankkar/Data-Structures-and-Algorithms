
function findThreeLargestNumbers(array) {
	let threeLartgest = [null, null, null];
			for(const num of array){
				updateLargest(threeLartgest, num)
			}
	console.log(threeLartgest)
	return threeLartgest
  // Write your code here.
}

function updateLargest(threeLartgest, num){

	if(threeLartgest[2] == null || threeLartgest[2] < num){
				updateShift(threeLartgest, 2, num)
	} else if(threeLartgest[1] == null || threeLartgest[1] < num){
				updateShift(threeLartgest, 1 , num)
	} else if(threeLartgest[0] == null || threeLartgest[0] < num){
				updateShift(threeLartgest, 0 , num)
	}
	
}

function updateShift(threeLartgest, index, num){
	for(let i = 0; i <= index; i++){
		if(i === index){
				console.log(num)
			threeLartgest[i] =  num
		} else {
			threeLartgest[i] = threeLartgest[i + 1]
		}
	}

	
}