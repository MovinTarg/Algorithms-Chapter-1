$(document).ready(function() {
    
    function countdown(start) {
        newArr = [];
        for (var i = start; i >= 0; i--) {
            newArr.push(i);
        };
        console.log(newArr);
    };
    countdown(6);  
});