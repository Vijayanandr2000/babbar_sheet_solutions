// Kadane's Algorithm

// Largest Sum Contiguous Subarray

/*
Input:
    N = 5
    Arr[] = {1,2,3,-2,5}

Output:
    9

Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.
*/

// let arr = [1,2,3,-2,5]
let arr = [-1,-2,-3,-4]
// let arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
let max = arr[0];

const findMaxSubArrSum = () => {
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        temp = temp + arr[i] ;
        if(temp > max){
            max = temp;
        }
        if(temp < 0){
            temp = 0;
        }
        
    }
}

findMaxSubArrSum();
console.log(max)