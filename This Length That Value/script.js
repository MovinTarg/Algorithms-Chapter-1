$(document).ready(function() {
    
    function lengthValue(x,y) {
        for (var i = 0; i < x; i += y) {
            if (i === y) {
                console.log('Jinx!');
            } else {
                console.log(i);
            }
        }
    }
    lengthValue(50, 5);
});