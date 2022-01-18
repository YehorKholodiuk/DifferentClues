//ES5
function createName(firstName,lastName){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // ES5 Transformation to array
    let args1 = Array.prototype.slice.call(arguments);
    // ES6 Transformation to array
    const args2 = [...arguments];
    return firstName + '' + lastName;
}
createName('Yehor','Kholodiuk')

