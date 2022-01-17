//base
function sumDigits(number){
    let moduleNumber = Math.abs(number);
    let str = moduleNumber.toString();
    let arr = str.split('');
    let res = arr.reduce (function(sum,cur){
        return Number(sum) + Number(cur);
    },0);
return res;
}
console.log(sumDigits(88))

// ES6
const sumOfDigits = number =>
    Math.abs(number)
.toString()
.split('')
.reduce((sum,cur) => +sum + +cur,0)
console.log(sumOfDigits(78))