(function(){
    'use strict';
    Parse.initialize("mcCSVdBTHSKjdOsBrsJuS3jiMst8BhdDu2xsZmW4","NYl8xJJtYM3DtLihfIKb8jVsDKtKE1STjunohz8J");
    Parse.serverURL = 'https://parseapi.back4app.com/'

    const viewportHeight = window.innerHeight - 50;
    console.log(viewportHeight);

    const yes = document.getElementById('yes');
    const no = document.getElementById('no');
    const time = document.getElementById('time');
    const rightafter = document.getElementById('rightafter');
    const thirdq = document.getElementById('3/4');
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

    // forces browser to forget scroll position on refresh
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    };

    let data = {};

    yes.addEventListener('click', function(event){
        yes.style.color = '#EA9414';
        window.scrollTo(0,viewportHeight);
        thick.style.width = "50%";
    });
    no.addEventListener('click', function(event){
        no.style.color = '#EA9414';
        window.scrollTo(0,viewportHeight*4);
        thick.style.width = "100%";

        q3q4counter("rightafter");
        q3q4counter("now");
    });

    
    // Q 2/4  
    time.addEventListener('focus', function(e){
        next2.className = "next";
    });
    next2.addEventListener('click', function(e){
        data.when = time.value;
        window.scrollTo(0,viewportHeight*2);
        thick.style.width = "75%";
    });

    time.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault(); 
            data.when = time.value;
            window.scrollTo(0,viewportHeight*2);
            thick.style.width = "75%";
        }
    };

    // Q 3/4 
    let q3 = [];
    let counter = 0;
    rightafter.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault();
            counter += 1;
            next3.className = "next";
            let formdata = rightafter.value;
            
            if (counter == 1) {
                p1.classList.remove("off");
                p1.innerHTML=`${formdata}`;
                r1.classList.remove("off");
                r1.innerHTML=`${formdata}`;
                r1.className = "notselected";
                q3.push(formdata);
            } else if (counter == 2){
                p2.classList.remove("off");
                p2.innerHTML=`${formdata}`;
                r2.classList.remove("off");
                r2.innerHTML=`${formdata}`;
                r2.className = "notselected";
                q3.push(formdata);
            } else if (counter == 3){
                p3.classList.remove("off");
                p3.innerHTML=`${formdata}`;
                r3.classList.remove("off");
                r3.innerHTML=`${formdata}`;
                r3.className = "notselected";
                q3.push(formdata);
            } else if (counter == 4){
                p4.classList.remove("off");
                p4.innerHTML=`${formdata}`;
                r4.classList.remove("off");
                r4.innerHTML=`${formdata}`;
                r4.className = "notselected";
                q3.push(formdata);
            } else if (counter == 5){
                p5.classList.remove("off");
                p5.innerHTML=`${formdata}`;
                r5.classList.remove("off");
                r5.innerHTML=`${formdata}`;
                r5.className = "notselected";
                q3.push(formdata);
            } else if (counter == 6) {
                p6.classList.remove("off");
                p6.innerHTML=`${formdata}`;
                r6.classList.remove("off");
                r6.innerHTML=`${formdata}`;
                r6.className = "notselected";
                q3.push(formdata);
            };
            rightafter.value = "";
        };
    };

    next3.addEventListener('click', function(e){
        data.rightafterq3 = q3;
        window.scrollTo(0,viewportHeight*3);
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

            if (r2.className == "off") {
                r2.classList.remove("off");
                r2.innerHTML=`${formdata1}`;
                r2.className="selected";
            } else if (r3.className == "off"){
                r3.classList.remove("off");
                r3.innerHTML=`${formdata1}`;
                r3.className="selected";
            } else if (r4.className == "off"){
                r4.classList.remove("off");
                r4.innerHTML=`${formdata1}`;
                r4.className="selected";
            } else if (r5.className == "off"){
                r5.classList.remove("off");
                r5.innerHTML=`${formdata1}`;
                r5.className="selected";
            } else if (r6.className == "off") {
                r6.classList.remove("off");
                r6.innerHTML=`${formdata1}`;
                r6.className="selected";
            };
            now.value = "";
        }; 
    };

    // the last NEXT button before the RESULTS screen
    next4.addEventListener('click', function(e){
        let q4 = [];
        now.classList.remove("selected");
        let orange = document.querySelectorAll('.selected');
        for (let i = 0; i < orange.length; i++) {
            let term = orange[i];
            q4.push(term.textContent);
        }
        data.nowq4 = q4;

        submitForm(data.when, data.rightafterq3, data.nowq4);

        window.scrollTo(0,viewportHeight*4);
        thick.style.width = "100%";
    })
    

    // saves new form submission
    async function submitForm(q2, q3, q4){
        const newentry = new Parse.Object('Submissions');
        newentry.set('when', q2);
        newentry.set('rightafter', q3);
        newentry.set('now', q4);
        try {
            let result = await newentry.save();
            // counts the words and displays them
            await q3q4counter("rightafter");
            await q3q4counter("now");
        } catch (error) {
            console.log('Error while saving', error);
        }
    }

    // counts both q3 and q4 words
    function q3q4counter (column){
        let qwordcount;
        const Submissions = new Parse.Query('Submissions');
        // gets all the objs in Class
        Submissions.find().then((results) => {
            qwordcount = wordcounter(idloop(results, column));

            // put the words on the screen
            if (column =="rightafter") {
                displayresults(qwordcount, "pastwords");
            } else {
                displayresults(qwordcount, "nowwords");
            }
        }).catch((error) =>  {
            console.log(error);
        });
        return qwordcount;
    };

    // loops thru all the "rightafter" or "now" column and puts it all into one array
    function idloop (results, column){
        let counterarray = [];
        for (let i=0; i<results.length; i++){
            const qarray = results[i].get(`${column}`);

            for (let i=0; i<qarray.length; i++){
                counterarray.push(qarray[i]);
            }
        }
        return counterarray;
    };

    // loops through the array above ^ and counts all the repeats in "rightafter" or "now"
    function wordcounter (counterarray){
        let wordcount = new Map();
        for (let i=0; i<counterarray.length; i++) {
            if (wordcount.has(counterarray[i])){
                wordcount.set(counterarray[i], wordcount.get(counterarray[i])+1);
            } else {
                wordcount.set(`${counterarray[i]}`, 1);
            };
        }
        return wordcount;
    };

    function displayresults (map, when){
        try {
            for (let [key, value] of map.entries()) {
                let newword = document.createElement("h4");
                let node = document.createTextNode(key);
                newword.appendChild(node);

                let element = document.getElementById(when);
                element.appendChild(newword);
                // console.log('hi!!');

                newword.style.fontSize = value + 'em';
                newword.style.lineHeight = '.5em';
            };

        } catch (error) {
            console.log('Error while displaying words', error);
        }
    };

    // if click on words in RESULTS, show popup?
    // document.querySelector('h4').addEventListener('click', function(e) {
    //     console.log(data);
    // });

})();