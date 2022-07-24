// Kth smallest element

/**
Input:
    N = 6
    arr[] = 7 10 4 3 20 15
    K = 3

Output : 7

Explanation :
3rd smallest element in the given 
array is 7.
*/

let arr = [7,10,4,3,20,15]
let k = 3;
const findKthSmallelement = (arr,k) => {
    arr.sort((a,b) => a-b);
    return arr[k-1];
}

console.log(findKthSmallelement(arr,k))