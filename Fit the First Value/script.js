$(document).ready(function() {
    function fitArr(arr) {
        if (arr[0] > arr.length) {
            console.log('Too big!');
        } else if (arr[0] < arr.length) {
            console.log('Too small!');
        } else {
            console.log('Just right!');
        }
    }
    fitArr([3,2,1]);
});