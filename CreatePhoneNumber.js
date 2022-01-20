//Base
function CreatePhoneNumber(number){
    let numArr = number.toString().split('');
    numArr.splice(0,0,'(');
    numArr.splice(4,0,')');
    numArr.splice(5,0,' ');
    numArr.splice(9,0,'-');
    return numArr.join('');
}
console.log(CreatePhoneNumber(444444444))

//Advanced
const createPhonenumber1= (number1) => {
    const strNum = number1.toString();
    return `(${strNum.slice(0,3)}) ${strNum.slice(3,6)} - $${strNum.slice(6,9)}`
}
console.log(createPhonenumber1(34456695))