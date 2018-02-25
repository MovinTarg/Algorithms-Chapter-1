$(document).ready(function() {
    function fahCel(f){
        var c = (f-32)*5/9;
        console.log(Math.round(c));
    }
    fahCel(90)
});