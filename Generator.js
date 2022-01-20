function* makeRangeIntegrator (start = 0, end = 4, step= 2){
    let iterationCount = 0;
    for ( let i = start; i < end; i += step ){
    iterationCount++;
    yield i;
    }
    return iterationCount;
}
const iterator = makeRangeIntegrator()

console.log(iterator.next())
console.log(iterator.next())
iterator.next();
iterator.next();