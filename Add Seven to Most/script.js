$(document).ready(function() {
    function addSeven(arr) {
        newArr=[]
        for (var i = 1; i < arr.length; i++) {
            newArr.push(arr[i]+7);
        }
        console.log(newArr);
    }
    addSeven([1,2,3,4,5]);
    
});