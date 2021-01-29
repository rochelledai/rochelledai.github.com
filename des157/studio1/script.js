(function () {
    "use strict";
    console.log("reading js");
    // your code starts here

    let form = document.querySelector('#myForm');
    let madlib = document.querySelector('#madlib');
    let words =[];

    form.addEventListener('submit', function(e){
        e.preventDefault();
        for (let eachWord of form) {
            words.push(eachWord.value);
            //eachWord.value="";
        }

        let myText = `Florida Man Accused Of ${words[0]} ${words[1]} With ${words[2]} ${words[3]} At 2am, Says 'The ${words[3]}'s Name Is ${words[4]}' When Questioned By Authorities`;

        madlib.innerHTML=myText;
    });
    

})();