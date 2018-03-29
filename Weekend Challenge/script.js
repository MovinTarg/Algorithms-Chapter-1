$(document).ready(function() {
    function questionaire() {
        var nameQ = 'User what is your name?'
        var name = '';
        var questions = ['what is your favorite color?', 'do you like sports?', 'are your Hungry?']
        var answers = [];
        name = (window.prompt(nameQ));
        if (name === null) {
            console.log("Maybe next time!")
        } else if (name.length < 1) {
            for (var i = 0; i < questions.length; i++) {
                answers.push(window.prompt('User ' + questions[i]));
                if (answers[i] === null) {
                    console.log("Stopping Quiz")
                    if (answers.length > 1) {
                        for (var j = 0; j < answers.length-1; j++) {
                            console.log("You answered: " + answers[j]);
                        }
                    }
                    break
                }
            }
            if (answers.length > 2) {
                for (var m = 0; m < answers.length; m++) {
                    console.log("You answered: " + answers[m]);
                }
            }
        } else {
            for (var k = 0; k < questions.length; k++) {
                answers.push(window.prompt(name + ' ' + questions[k]));
                if (answers[k] === null) {
                    console.log("Stopping Quiz")
                    if (answers.length > 1) {
                        for (var l = 0; l < answers.length-1; l++) {
                            console.log(name + " answered: " + answers[l]);
                        }
                    }
                    break
                }
            }
            if (answers.length > 2) {
                for (var n = 0; n < answers.length; n++) {
                    console.log(name + " answered: " + answers[n]);
                }
            }
        }
    }
    questionaire();
});

//need to add cancel functionality.