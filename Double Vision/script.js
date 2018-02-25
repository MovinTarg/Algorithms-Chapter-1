$(document).ready(function() {
    function double(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]*2);
        }
        console.log(newArr);
    }
    double([1,2,3]);
    
});