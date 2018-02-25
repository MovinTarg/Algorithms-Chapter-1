$(document).ready(function() {
    function evensOdds(arr) {
        var evenCount = [];
        var oddCount = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                evenCount.push(arr[i]);
                oddCount = [];
                console.log(arr[i]);
            } else if (arr[i] % 2 != 0) {
                oddCount.push(arr[i]);
                evenCount = [];
                console.log(arr[i]);
            }
            if (evenCount.length == 3) {
                console.log('Even more so!')
            } else if (oddCount.length == 3) {
                console.log('That’s odd!');
            }
        }
    }
    evensOdds([1,2,6,4,5,6,7,8,9,10,11,12,13,17,15])
    
});