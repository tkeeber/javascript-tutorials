//1) Print out numbers
var numbers = [1,2,3,4]

//non functional
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//functional
numbers.forEach(function(number) {
    console.log(number);
})