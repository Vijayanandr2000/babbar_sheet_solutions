// Program to cyclically rotate an array by one

/*
Input:  arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}
*/

let arr = [1, 2, 3, 4, 5];
let k = 3
const cyclicRotate = (k) => {
    for (let i = 0; i < arr.length-k; i++) {
        let t = arr.shift();
        arr.push(t);
    }
}

cyclicRotate(k);
console.log(arr);