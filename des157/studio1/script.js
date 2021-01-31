(function () {
    "use strict";
    console.log("reading js");
    // your code starts here

    let form = document.querySelector('#myForm');
    let madlib = document.querySelector('#madlib');
    const closeBtn = document.querySelector('.close');

    let words =[];


    //want the CTA button to change to green when all forms are filled?????

    form.addEventListener('submit', function(e){
        e.preventDefault();
        //if the input is nothing, dont add it to the array.
        for (let eachWord of form) {
            if (eachWord.value == "Send" || eachWord.value == "" || eachWord.value == null) {
                break;
            }
            else {
                words.push(eachWord.value);
            }
        };

        //if the array doesnt contain all inputs, alert
        if (words.length < 5) {
            alert ('Please fill out all forms');  //validation, not needed bc "required" is being used?
        }
        else {
            let myText = `Florida Man Accused Of ${words[0]} ${words[1]} With ${words[2]} ${words[3]} At 2am, Says 'The ${words[3]}'s Name Is ${words[4]}' When Questioned By Authorities`;

            madlib.innerHTML=myText;
            document.querySelector('#overlay').className='showing';
        };

    });

    closeBtn.addEventListener('click', function(e){
        document.querySelector('#overlay').className='hidden';
        location.reload();
    });
    

})();