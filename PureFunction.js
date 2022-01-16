//pure function

const add = (x, y) => x + y;
add ( 4,2); //6

//not a pure function

//has dependency on external value

let x = 4;
const addTo = (y) => {
    x = x + y;
};

addTo(4); //8
console.log(addTo(4))

