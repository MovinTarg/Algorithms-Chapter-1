$(document).ready(function() {
    function increment(arr) {
        newArr = []
        for (var i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                newArr.push(arr[i]);
            } else {
                newArr.push(arr[i+1]);
            }
        }
        console.log(newArr);
    }
    increment([1,2,3,4,5,6,7,8,9,10]);
    
});