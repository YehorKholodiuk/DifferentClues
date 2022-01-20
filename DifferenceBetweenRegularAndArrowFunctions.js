const myObject = {
    myMethod(items){
        console.log(this); //myObject
        const callback = () => {
            console.log(this); //myObject
        };
    }
};

//constructor

const User = (name) => {
    this.name = name;
} //doesn't have an access to arguments.

//const admin = new User ('Yehor') // => TypeError. User is not a constructor

//arguments

const myFunc = () => {
    console.log(arguments)
}

myFunc('a','b') // reference error.Arguments are not defined.

const double = (num) => num * 2;
console.log(double(2)) //4

//context

class Hero {
    constructor (heroName) {
        this.heroName = heroName;
    }

    logName = () => {
        console.log(this.heroName)
    }
}

const batman = new Hero ('Batman');
setTimeout(batman.logName, 1000); //Batman