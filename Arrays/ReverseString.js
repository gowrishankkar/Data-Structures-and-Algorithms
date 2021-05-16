function reverse(str){

    if(!str || str.length < 2 || typeof str !== 'string'){
        console.log('This is not a valid string ')
        return 'This is not a valid string';
    }

    const backwards = [];
    const itemsLength = str.length -1;
    for(let i = itemsLength; i>=0; i--){
        backwards.push(str[i]);
    }
    console.log(backwards)
    return backwards.join('')
}

function reverse2(str){
    return str.split('').reverse().join('')
}

function reverse3(str){
    return [...str].reverse().join('')
}

console.log(reverse('Test String'))
console.log(reverse2('Test String'))
console.log(reverse3('Test String'))