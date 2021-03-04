// removing duplicate from an array - array sshould be in ascending order:

function duplicate(arr){
    // console.log(arr)
    for(var i=0; i<arr.length;i++){
        if(arr[i]== arr[i+1]){
            // console.log(arr[i], arr[i+1])
            arr.splice(arr[i+1],1)
            i--;
            //console.log(arr)
        }
    }
    return arr;
}
console.log(duplicate([-1,0,0,0,0,3,3]))