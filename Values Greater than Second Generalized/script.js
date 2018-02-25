$(document).ready(function() {
    function greaterThan(arr) {
        if (arr.length > 2) {
            for (var i = 0; i < arr.length; i++)
                if (arr[i] > arr[1]) {
                    console.log(arr[i]);
                }
        } else {
            console.log('Array too small');
        }
    };
    greaterThan([1,3,5,7,9,13]);
});