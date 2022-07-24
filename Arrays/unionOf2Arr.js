// Union of two arrays

/*
Input:
    5 3
    1 2 3 4 5
    1 2 3

Output: 
    5

Explanation: 
1, 2, 3, 4 and 5 are the
elements which comes in the union set
of both arrays. So count is 5.

*/

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3];

const doUnion = () => {
    let res = a.concat(b);
    return [...new Set(res)].length
}

console.log(doUnion());