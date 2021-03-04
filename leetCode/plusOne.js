//Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

function plusOne(digits){
    var last = digits.pop()
    last++;
    if(last<9){
        digits.push(last)
    } else{
        // var digits = (""+last)
        var number= last.toString()
        console.log(number)
    
        for (var i = 0, len = number.length; i < len; i += 1) {
            // console.log(number.charAt(i))
            digits.push(number.charAt(i));
        }
        
        
        //console.log(arr)
    }
    
    return digits;
   

}
console.log(plusOne([1,2,3,5,9]))