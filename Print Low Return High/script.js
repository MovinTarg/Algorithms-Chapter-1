$(document).ready(function() {
    function lowHigh(arr) {
        var low = 0;
        var high = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < low) {
                low = arr[i];
            } else if (arr[i] > high) {
                high = arr[i];
            }
        }
        console.log(low);
        return high;
    }
    lowHigh([-10,30,6,-5, 10]);
    
});