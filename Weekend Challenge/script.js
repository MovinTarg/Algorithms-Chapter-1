$(document).ready(function() {
    function questionaire() {
        var nameQ = 'User what is your name?'
        var name = '';
        var questions = ['what is your favorite color?', 'do you like sports?', 'are your Hungry?']
        var answers = [];
        name = (window.prompt(nameQ));
        if (name.length < 1) {
            for (var i = 0; i < questions.length; i++) {
                answers.push(window.prompt('User ' + questions[i]));
            }
        } else {
            for (var l = 0; l < questions.length; l++) {
                answers.push(window.prompt(name + ' ' + questions[l]));
            }
        }
        console.log(answers);
    }
    questionaire();
});

//need to add cancel functionality.