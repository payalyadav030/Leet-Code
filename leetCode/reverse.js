// reverse array of strings:

// function reverse(arr){
//     console.log(arr)
//     // console.log(typeof(arr))
//     var value =[]
//     for(var i=arr.length-1; i>=0 ; i--){
//         // console.log(arr[i])
//         value.push(arr[i])
//     }
//     return value;

// }

// console.log(reverse(["H","a","n","a","h"]))


/////// reverse array of strings without using another array :
// function reverse(arr){
//     console.log(arr)
//     for(var j=arr.length-1; j>=0;j-- ){
//         console.log(arr[j])
//         for(var i=0; i<arr.length; i++){
//             console.log(arr[i])
//             var temp = arr[i];
//             arr[i]= arr[j]
//             arr[j]= temp;
//             console.log(arr)
//            // return
//         }
    
//     }
//     return arr
    
// }

// console.log(reverse(["h","e","l","l","o"]))

function reverse(arr){
    console.log(arr.length);
    for(var i=0, j=arr.length-1; i<j, i<arr.length/2; i++,j--){
        console.log(i,j);
        var temp=arr[i];
        arr[i]= arr[j]
        arr[j]=temp;
    }
    return arr


}
 console.log(reverse(["h","e","l","l","o"]))























var reverseString = function(s) {
    for(let i=0,j=s.length - 1; i<j,i<s.length / 2; i++,j--){
        console.log(i,j)
        let temp=s[i];
        s[i]=s[j];
        s[j]=temp;
    }
    return s;
}
// console.log(reverseString(["h","e","l","l","o"]))