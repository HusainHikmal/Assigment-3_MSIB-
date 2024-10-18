function sumArray(arr, int) {
    let sub1 = [];
    let sub2 = [];
    let sum = 0;

    
    arr.sort((a, b) => b - a);


    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] <= int) {
            sub1.push(arr[i]);
            sum += arr[i];
        } else {
            sub2.push(arr[i]);
        }
    }

   
    if (sum === int) {
        return [sub1, sub2];
    }

}


console.log(sumArray([1, 8, 10, 3], 11)); 