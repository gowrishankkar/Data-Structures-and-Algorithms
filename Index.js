function fibIterative(num) {
  let arr = [0, 1];
  for (let i = 2; i < num; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr[n];
}

fibIterative(10);

function fibRecursive(num) {
  if (num < 2) {
    return num;
  }
  console.log(num);
  return fibRecursive(num - 1) + fibRecursive(num - 2);
}

console.log(fibRecursive(10));
