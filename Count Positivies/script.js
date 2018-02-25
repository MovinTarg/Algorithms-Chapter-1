$(document).ready(function() {
    function count(arr) {
        var positivies = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                positivies +=1;
            }
        }
        arr.pop();
        arr.push(positivies)
        console.log(arr);
    }
    count([-1,1,1,1]);
    
});