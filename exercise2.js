function threeStepAB(text){
    let check = text.split(' ').map(a => a)
    for(i = 0; i < check.length; i++){
        if(check[i].length >= 3 ||  check[i] == (/ /g,"")){
            return true
        }else{
            return false
        }
    }
    
}

console.log(threeStepAB('bacon and meat'))
console.log(threeStepAB('i am and meat'))
