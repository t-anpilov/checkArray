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
isSorted([-32, -5.4, 10, 3, 9])
isSorted([-Infinity, -5, 0, 12, 9, 35, 44, 56, 51])