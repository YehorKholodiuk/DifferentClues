//function declaration
function sum(a,b){
    return a + b;
}

console.log(sum(3,6))

//function execution

var multipl = function(a,b){
    return a * b;
}
console.log(multipl(3,6))

function isPalyndrome(str){
    return str === str.split('').reverse( ).join('');
}
console.log(isPalyndrome('ara'));

const isPalindrome = str => str === str.split('').reverse( ).join('');
console.log(isPalindrome('ara'))