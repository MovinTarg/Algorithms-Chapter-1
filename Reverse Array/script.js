$(document).ready(function() {
    function reverseArray(arr) {
        newArr = [];
        for (var i = arr.length-1; i > -1; i--) {
            newArr.push(arr[i]);
        }
        console.log(newArr);
    }
    reverseArray([1,2,3,4,5]);
    
});