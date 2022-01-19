function minMax(arr){
    return [Math.min.apply(null,arr),Math.max.apply(null,arr)]
}
console.log(minMax([2,4,55,6,7,8]))


//ES6

const minMax1 = (arr) => [
    Math.min(...arr),Math.max(...arr)
]
console.log(minMax1([3,4,66,7,8,9]))