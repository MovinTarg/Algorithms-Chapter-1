$(document).ready(function() {
    function swap(arr) {
        newArr = [];
        for (var i = arr.length-1; i > -1; i--) {
            newArr.push(arr[i]);
        }
        console.log(newArr);
    }
    swap([true,42,"Ada",2,"pizza"]);
    
});