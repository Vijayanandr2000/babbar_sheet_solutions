// Sort an array of 0s, 1s and 2s

/*
Input: 
    N = 5
    arr[]= {0 2 1 2 0}

Output:
    0 0 1 2 2

Explanation:
0s 1s and 2s are segregated 
into ascending order.
*/

let arr = [0,2,1,2,1,0,0];

const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const sortArr = () => {
    let i = 0;
    let j = arr.length-1;
    let mid = 0;
    while (mid <= j) {
        if(arr[mid] == 0){
            swap(arr,i,mid);
            mid++
            i++
        } else if(arr[mid] == 2){
            swap(arr,mid,j);
            j--;
        } else{
            mid++;
        }
    }
}

sortArr();
console.log(arr);