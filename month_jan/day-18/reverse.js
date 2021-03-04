// program to reverse an array or string without using inbuilt methods:

function reverse(val){
    console.log(typeof(val));
    var sum=[];
    var str=""

    for(var i=val.length-1; i>=0;i--){
        //console.log(val[i])
        if(typeof(val) == "object"){
            sum.push(val[i])
        } else{
            str = str.concat(val[i])
        }
        
    }
    console.log(sum)
    console.log(str)

    


}

console.log(reverse("hello"));