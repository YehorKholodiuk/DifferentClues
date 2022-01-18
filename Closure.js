const sayHi = (name) =>{
    const greeting = 'Hello, my name is';
    return `${greeting} ${name}!`
}
//console.log(greeting); // greeting is not defined
sayHi ('Jack')
console.log(sayHi('Jack'))

//Closures

const createPhrase = (greeting) => {
    return (name) => `${greeting} ${name}`
};

const sayHiYou = createPhrase('Hello')
console.log(sayHiYou('Yehor'));
const sayBye = createPhrase('Bye');
console.log (sayBye('Oxana'))