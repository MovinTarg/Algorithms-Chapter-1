$(document).ready(function() {
    function celFah(c) {
        var f = (9/5 * c) + 32;
        console.log(Math.round(f));
    }
    celFah(32);

    function correspondingValues() {
        var f = 0
        for (var c = 200; c > -200; c--) {
            var f = (9/5 * c) + 32;
            if ( c == f) {
                console.log('Fahrenheit = Celsius at ' + c + '*');
            }
        }
    };
    correspondingValues();
    
});