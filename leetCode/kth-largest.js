// Find the kth largest element in an unsorted array. 
//Note that it is the kth largest element in the sorted order, not the kth distinct element.
// eg: input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

function largest(nums, k){
    var max, val;
  
    if(k == 1){
        val = Math.max.apply(Math, nums)
        return temp
    }
    
    for(var i=0; i< k; i++){
        val = Math.max.apply(Math, nums);
        var index = nums.indexOf(val)
        max = nums.splice(index,1)
       
    }
    console.log(max)


}
console.log(largest([3,2,1,5,6,4],3))