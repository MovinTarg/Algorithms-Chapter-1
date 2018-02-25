$(document).ready(function() {
    function biggie(arr) {
        var newArr = []
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            if (arr[i] > 0) {
                newArr.push('big')
            } else {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);
    }
    biggie([-10,30,6,-5, 10]);
    
});