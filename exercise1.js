function isArithmeticProgression(numbers){
    return numbers[numbers.length - 1] - numbers[numbers.length - 2 ] == numbers[1] - numbers[0] ? true : false
}

console.log(isArithmeticProgression([2,4,7,9,10]))
console.log(isArithmeticProgression([2,4,6,8,10]))







