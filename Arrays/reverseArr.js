// Write a program to reverse an array or string

/* 
Input  : arr[] = {1, 2, 3}
Output : arr[] = {3, 2, 1}

Input :  arr[] = {4, 5, 1, 2}
Output : arr[] = {2, 1, 5, 4}
*/
const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const reverse = (arr) => {
    let mid = Math.floor(arr.length / 2);
    for(let i=0,j=arr.length-1;i<mid;i++,j--) {
        swap(arr,i,j);
    }
    return arr;
}

console.log(reverse([1,2,3,4,5,6,7,8,9,10,11,12]));