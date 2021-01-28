// program to find min and max in an array without using inbuilt:

function find(arr){
    console.log(arr);
    // var elem = arr[0]
    var max, min;
    for(var i=1; i< arr.length; i++){
        if(arr[0] < arr[i]){
            max = arr[i]
        } else{
            max = arr[0]
        }
        arr[0] = max
    }
    console.log("max val",max);

    for(var i=1; i< arr.length; i++){
        if(arr[0] < arr[i]){
            min = arr[0]
        } else{
            min = arr[i]
        }
        arr[0] = min;
    }
    console.log(min)
    

}

console.log(find([316,8,11,19,65,34,77,1,88,0]))