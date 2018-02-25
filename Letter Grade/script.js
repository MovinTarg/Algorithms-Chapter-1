$(document).ready(function() {
    function letterGrade() {
        var i = Math.floor((Math.random()*100));
        if (i < 60) {
            console.log('Score:' + i + '. Grade: F')
        } else if (i < 70) {
            console.log('Score:' + i + '. Grade: D')
        } else if (i < 80) {
            console.log('Score:' + i + '. Grade: C')
        } else if (i < 90) {
            console.log('Score:' + i + '. Grade: B')
        } else {
            console.log('Score:' + i + '. Grade: A')
        }     
    }
    letterGrade();  
});