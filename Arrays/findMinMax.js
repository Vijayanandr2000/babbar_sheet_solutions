// Maximum and minimum of an array using minimum number of comparisons

var arr = [1000, 11, 445, 1, 330, 3000];
let min = arr[0];
let max = arr[0];

const getMinMax = () => {
    let i = 0;
    while(i<arr.length) {
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
        i++;
    }

}


getMinMax();

console.log('Maximum', max);
console.log('minimum', min);