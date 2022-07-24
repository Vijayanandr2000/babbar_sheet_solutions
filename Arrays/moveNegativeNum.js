// Move all negative numbers to beginning and positive to end with constant extra space

/*
Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5 
*/
let arr = [-12,11,-13,-5,6,-7,5,-3,-6];

const swap = (arr,i,j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const moveNegativeNum = () => {
    let i = 0, j = arr.length - 1;
    while(i < j) {
        if(arr[i] >= 0){
            swap(arr,i,j);
            j--;
        }
        i++;

    }
}

const moveNegativeNumOtherSol = () => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0){
            let temp = arr.splice(i, 1);
            arr.push(temp[0])
        }
    }
}

// moveNegativeNum();
moveNegativeNumOtherSol();
console.log(arr);