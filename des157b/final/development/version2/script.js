(function(){
    'use strict';

    const yes = document.getElementById('yes');
    const no = document.getElementById('no');
    const time = document.getElementById('time');
    const rightafter = document.getElementById('rightafter');
    const lastq = document.getElementById('4/4');
    const now = document.getElementById('now');
    const next2 = document.getElementById('next2');
    const next3 = document.getElementById('next3');
    const next4 = document.getElementById('next4');
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const p4 = document.getElementById('p4');
    const p5 = document.getElementById('p5');
    const p6 = document.getElementById('p6');
    const r1 = document.getElementById('r1');
    const r2 = document.getElementById('r2');
    const r3 = document.getElementById('r3');
    const r4 = document.getElementById('r4');
    const r5 = document.getElementById('r5');
    const r6 = document.getElementById('r6');
    let thick = document.getElementById('thick');


    yes.addEventListener('click', function(event){
        // scroll down to next question
        thick.style.width = "50%";
    });
    no.addEventListener('click', function(event){
        // scroll down to results
    });


    // Q 2/4  
    time.addEventListener('focus', function(e){
        next2.className = "next";
    });
    next2.addEventListener('click', function(e){
        // scroll to next Q
        thick.style.width = "75%";
        // submit??
    });

    time.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault(); 
            // scroll down to next Q
            // how to capture form submission?
            thick.style.width = "75%";
        }
    };

    // Q 3/4 
    let counter = 0;
    rightafter.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault();
            counter += 1;
            next3.className = "next";
            let formdata = rightafter.value;
            // need to clear entry after enter? submit??
            if (counter == 1) {
                p1.classList.remove("off");
                p1.innerHTML=`${formdata}`;
                r1.classList.remove("off");
                r1.innerHTML=`${formdata}`;
                r1.className = "notselected";
            } else if (counter == 2){
                p2.classList.remove("off");
                p2.innerHTML=`${formdata}`;
                r2.classList.remove("off");
                r2.innerHTML=`${formdata}`;
                r2.className = "notselected";
            } else if (counter == 3){
                p3.classList.remove("off");
                p3.innerHTML=`${formdata}`;
                r3.classList.remove("off");
                r3.innerHTML=`${formdata}`;
                r3.className = "notselected";
            } else if (counter == 4){
                p4.classList.remove("off");
                p4.innerHTML=`${formdata}`;
                r4.classList.remove("off");
                r4.innerHTML=`${formdata}`;
                r4.className = "notselected";
            } else if (counter == 5){
                p5.classList.remove("off");
                p5.innerHTML=`${formdata}`;
                r5.classList.remove("off");
                r5.innerHTML=`${formdata}`;
                r5.className = "notselected";
            } else if (counter == 6) {
                p6.classList.remove("off");
                p6.innerHTML=`${formdata}`;
                r6.classList.remove("off");
                r6.innerHTML=`${formdata}`;
                r6.className = "notselected";
            };
        };
    };

    next3.addEventListener('click', function(e){
        // scroll to next Q
        // submit??
        thick.style.width = "100%";
    });

    // Q 4/4 
    lastq.addEventListener('click', function(e){
        e.target.className = "selected";
    });

    now.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault();
            next4.className = "next";
            let formdata1 = now.value;

            // need to clear entry after enter? submit??
            if (r2.className == "off") {
                r2.classList.remove("off");
                r2.innerHTML=`${formdata1}`;
            } else if (r3.className == "off"){
                r3.classList.remove("off");
                r3.innerHTML=`${formdata1}`;
            } else if (r4.className == "off"){
                r4.classList.remove("off");
                r4.innerHTML=`${formdata1}`;
            } else if (r5.className == "off"){
                r5.classList.remove("off");
                r5.innerHTML=`${formdata1}`;
            } else if (r6.className == "off") {
                r6.classList.remove("off");
                r6.innerHTML=`${formdata1}`;
            };
        };
    };

    next4.addEventListener('click', function(e){
        // scroll to results
    })
    

})();