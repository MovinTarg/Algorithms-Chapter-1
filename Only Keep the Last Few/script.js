$(document).ready(function() {
    function shorten(arr,num) {
        newArr = [];
        for (var i = arr.length-num; i < arr.length; i++) {
            newArr.push(arr[i]);
        }
        console.log(newArr);
    }
    shorten([2,4,6,8,10],3);
    
});