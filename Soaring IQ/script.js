$(document).ready(function() {
    function soaringIQ(q) {
        var mutiplier = .01;
        for (var i = 0; i < 99; i++) {
            q += mutiplier;
            mutiplier = mutiplier + .01;
        }
        console.log('IQ at the end of the bootcamp: ' + q + '.');
    }
    soaringIQ(101);
    
});