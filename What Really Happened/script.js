$(document).ready(function() {
    function whatReallyHappensToday() {
        var count = 0;
        var v = Math.floor((Math.random()*100));
        var t = Math.floor((Math.random()*100));
        var e = Math.floor((Math.random()*100));
        var b = Math.floor((Math.random()*100));
        var m = Math.floor((Math.random()*100));

        if (v < 10) {
            console.log('Kenny was burnt by a volcano eruption!')
            count += 1;
        }
        if (t < 15) {
            console.log('Kenny was swept away by a tsunami!')
            count += 1;
        }
        if (e < 20) {
            console.log('Kenny was crushed by the falling debris of an earthquake!')
            count += 1;
        }
        if (b < 25) {
            console.log('Kenny froze in a blizzard!')
            count += 1;
        }
        if (m < 30) {
            console.log('Kenny was incinerated in a meteor strike!')
            count += 1;
        }
        if (count == 0)   {
            console.log('Kenny survived the day!')
        } else {
            console.log('Kenny died in agony from his wounds...')
        }
    }
    whatReallyHappensToday();  
});