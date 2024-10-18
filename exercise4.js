function arrSum(arr){
        let currSum = 0
        let maxSum = 0 
        let start = 0
        let count = 0
        let end = 0
        let subarray = []
        for(i = 0; i < arr.length; i++){
            currSum += arr[i]  
            if(currSum > maxSum){
                maxSum = currSum
                start = count;
                end = i;       
                subarray = arr.slice(start, end + 1) 
            }
            
            if (currSum < 0) {
                currSum = 0;
                count = i + 1; 
            }
        }
        return [subarray,maxSum]
    }
    
    console.log(arrSum([ -2, -3, 4, -1, -2, 1, 5, -3]))
    