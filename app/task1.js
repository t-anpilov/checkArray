exports.isSorted = function (arr) {
    let result = true

    for (let i=0; i < arr.length; i=i+1){
        if (arr[i+1] < arr[i]) {
            result = false
            break           
        } 
                
    }       
    
    return result
}