// Given an array of 0's 1's and 2's, sort array in descending array:

function sortArray(arr, n){
    
    for(var i=n; i>0 ;i--){
        //console.log("firstloo",i)
        for(var j=0; j<i-1; j++){
         //   console.log("secondLoop",arr[j],arr[j+1])
            if(arr[j] > arr[j+1]){
             //   console.log("ok")
                var temp= arr[j];
                arr[j]= arr[j+1]
                arr[j+1]= temp;
            }
        }
    }
    // console.log(arr)
    return arr;

}

 console.log(sortArray([0,2,1,0,2,1],6 ))