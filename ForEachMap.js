const arr = [1,2,3,4,5];
const plusTwo = x => x + 2;
let newArr3 = [];

//result of forEach()

const newArr1 = arr.forEach(elem => {
    newArr3.push(plusTwo(elem));
});

//result of map()

const newArr2 = arr.map (elem =>{
    return plusTwo(elem);
    });
console.log(newArr1);
console.log(newArr2);
console.log(newArr3);
