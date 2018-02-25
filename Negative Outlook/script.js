$(document).ready(function() {
    function negative(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                newArr.push(arr[i]*-1);
            } else {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);
    }
    negative([1,2,3,-4,5]);
    
});