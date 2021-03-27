function isSorted (arr: number[]):boolean {
    let result = true

    for (let i=0; i < arr.length; i=i+1){
        if (arr[i+1] < arr[i]) {
            result = false
            break
        }        
    }       
       
    return result
}

isSorted([-Infinity, -5, 0, 3, 9])