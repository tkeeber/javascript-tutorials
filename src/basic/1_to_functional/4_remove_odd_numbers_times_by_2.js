//Remove all the odd numbers from this array and times by 2 

var numbers = [1,2,3,4,5]

//non functional
var evens = []
var j = 0;
for (var i = 0; i < numbers.length; i++ ){    
    if (numbers[i] % 2 == 0) {
         evens[j] = numbers[i] * 2
         j++
    }
}
console.log(evens)

evens = numbers.filter(function(number) {
    return number % 2 == 0
}).map(function(number) {
    return number * 2
})

console.log("time sby two functional: " + evens)

var numbers = [1,2,3,4,5]


//Remove all the odd numbers from this array and times by 2 and remove all evens higher than 5
evens = numbers.filter(function(number) {
    return number % 2 == 0
}).map(function(number) {
    return number * 2
}).filter(function(number) {
    return number > 5
})
console.log(evens)

var numbers = [1,2,3,4,5]

var sum = numbers.reduce(function(sum, value) {
    return sum + value
})

console.log(sum)