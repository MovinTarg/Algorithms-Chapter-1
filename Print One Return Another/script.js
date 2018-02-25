$(document).ready(function() {
    function printReturn(arr){
        var odd = [];
        console.log(arr[arr.length-2]);
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 != 0) {
                return arr[i];
                odd.push(arr[i]);
                break
            }
        }
        if (odd == false) {
            console.log('No odd numbers');
        }
    }
    printReturn([-10,30,6,-5, 10]);
    
});