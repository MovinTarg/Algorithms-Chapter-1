$(document).ready(function() {
    function whatHappensToday() {
        var i = Math.floor((Math.random()*100));
        if (i < 10) {
            console.log('Kenny died from a volcano eruption!')
        } else if (i < 24) {
            console.log('Kenny died from a tsunami!')
        } else if (i < 44) {
            console.log('Kenny died from an earthquake!')
        } else if (i < 70) {
            console.log('Kenny died from a blizzard!')
        } else {
            console.log('Kenny died from a meteor strike!')
        }     
    }
    whatHappensToday();  
});