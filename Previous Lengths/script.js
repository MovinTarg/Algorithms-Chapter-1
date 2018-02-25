$(document).ready(function() {
    function previousLengths(arr) {
        var newArr = [];
        newArr.push(arr[0]);
        var temp = 0;
        for (var i = 1; i < arr.length; i++) {
            temp = arr[i].length;
            newArr.push(temp);
        }
        console.log(newArr);
    }
    previousLengths(['JavaScript,', 'often', 'abbreviated', 'as', 'JS,', 'is', 'a', 'high-level,', 'interpreted', 'programming', 'language.', 'It', 'is', 'a', 'language', 'which', 'is', 'also', 'characterized', 'as', 'dynamic,', 'weakly', 'typed,', 'prototype-based', 'and', 'multi-paradigm.']);
});