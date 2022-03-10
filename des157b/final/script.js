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
    const results = document.getElementById('results');
    const popupbox = document.getElementById('popupbox');
    
    

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
        thick.style.width = "20%";
    });
    no.addEventListener('click', function(event){
        no.style.color = '#EA9414';
        q3q4counter("rightafter");
        q3q4counter("now");
    });

    
    // Q 2/4  
    time.addEventListener('focus', function(e){
        next2.classList.add("next");
    });
    next2.addEventListener('click', function(e){
        data.when = time.value;
        window.scrollTo(0,viewportHeight*2);
        thick.style.width = "40%";
    });

    time.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault(); 
            data.when = time.value;
            window.scrollTo(0,viewportHeight*2);
            thick.style.width = "40%";
        }
    };

    // Q 3/5 
    const description = document.getElementById('description');
    description.addEventListener('focus', function(e){
        next5.classList.add('next');
    });
    next5.addEventListener('click', function(e){
        data.when = time.value;
        window.scrollTo(0,viewportHeight*3);
        thick.style.width = "60%";
    });
    description.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault(); 
            data.descripq5 = description.value;
            window.scrollTo(0,viewportHeight*3);
            thick.style.width = "60%";
        }
    };

    // Q 3/4 
    let q3 = [];
    let counter = 0;
    rightafter.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault();
            counter += 1;
            next3.classList.add("next");
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
        window.scrollTo(0,viewportHeight*4);
        thick.style.width = "80%";
    });

    // Q 4/4 
    lastq.addEventListener('click', function(e){
        e.target.className = "selected";
    });

    now.onkeydown = function(e){
        if (e.keyCode == 13){
            e.preventDefault();
            next4.classList.add("next");
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

        submitForm(data.when, data.rightafterq3, data.nowq4, data.descripq5);
    })
    

    // saves new form submission
    async function submitForm(q2, q3, q4, q5){
        const newentry = new Parse.Object('Submissions');
        newentry.set('when', q2);
        newentry.set('rightafter', q3);
        newentry.set('now', q4);
        newentry.set('descrip', q5);
        try {
            let result = await newentry.save();
            // counts the words and displays them
            await q3q4counter("rightafter");
            await q3q4counter("now");
        } catch (error) {
            console.log('Error while saving', error);
        }
        // if someone adds a new record, get data again?
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
            let qarray = results[i].get(`${column}`);

            for (let i=0; i<qarray.length; i++){
                let lowercase = qarray[i].toLowerCase();
                counterarray.push(lowercase);
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

                if (value > 1){
                    newword.style.fontSize = value + 'em';
                    newword.style.opacity = '100%';
                    newword.style.lineHeight = value/2 + 'em';
                };
            };
            
        } catch (error) {
            console.log('Error while displaying words', error);
        }
        
        // moved the scrolling action to occur AFTER all the data is put on screen
        window.scrollTo(0,viewportHeight*5);
        thick.style.width = "100%";

        popup();

    };


    let h4items = document.getElementsByTagName('h4');
    let year = document.getElementById('year');
    let descrip = document.getElementById('descrip');

    // need to call after the words are on screen, not before
    function popup (e) {
        results.addEventListener('click', function(e){
            for (const i of h4items) {
                i.classList.remove('select');
            };

            if (e.target.nodeName == 'H4') {
                e.target.className = 'select';

                // according to target, loop thru the database obj to find the first matching entry with description, then display it on screen and highlight the other matching answers
                let targetword = e.target.textContent;
                if (e.target.parentNode.id == "nowwords") {
                    updatepopup(targetword, "now");
                } else if (e.target.parentNode.id == "pastwords") {
                    updatepopup(targetword, "rightafter");
                };

                // open up a popup window
                let x = (e.clientX + 20) + 'px';
                let y = (e.clientY - popupbox.clientHeight - 20) + 'px';
                popupbox.style.top = y;
                popupbox.style.left = x;
                popupbox.style.display='block';

            } else{
                popupbox.style.display='none';
                for (const i of h4items) {
                    i.classList.remove('select');
                };
            };
        });
    };

    function updatepopup(target, column) {
        let yearhtml = "";
        let descriphtml = "";
        let savedrightafter;
        let savednow; 

        // gets all the objs in Class, loops thru them to find which entries contain target word according to the given column
        const Submissions = new Parse.Query('Submissions');
        Submissions.find().then((objids) => {
            for (const e of objids) {
                let datacolumn = e.get(`${column}`);
                let descripdata = e.get('descrip');

                // loops thru the answers of q3 or q4 depending on if user clicked a word from right after or now 
                for (const i of datacolumn){
                    if (i == target) {
                        if (descripdata != ""){
                            yearhtml = e.get('when');
                            descriphtml = descripdata;
                            if (column == 'rightafter') {
                                savedrightafter = datacolumn;
                                savednow = e.get('now');
                            } else {
                                savednow = datacolumn;
                                savedrightafter = e.get('rightafter');
                            };
                        };
                    };
                };
                // if there is no entry that has a match AND description, then it loops thru entries again to just display a year 
                if (yearhtml == "") {
                    for (const n of datacolumn) {
                        if (n == target) {
                            yearhtml = e.get('when');
                            descriphtml = descripdata;

                            if (column == 'rightafter') {
                                savedrightafter = datacolumn;
                                savednow = e.get('now');
                                
                            } else {
                                savednow = datacolumn;
                                savedrightafter = e.get('rightafter');
                                
                            };
                        };
                    };
                };
            };

            let nowwords1 = document.getElementById('nowwords');
            let pastwords1 = document.getElementById('pastwords');
    
            // displaying the data on the screen 
            year.innerHTML = yearhtml;
            if (descriphtml == undefined) {
                descrip.innerHTML = "";
                descrip.style.display='none';
            } else {
                descrip.innerHTML = descriphtml;
            };
            
            // selecting the words according to entry
            for (const e of savedrightafter) {
                for (const k of pastwords1.children) {
                    if (k.textContent == e) {
                        k.classList.add('select');
                    };
                };
            };
            for (const d of savednow) {
                for (const h of nowwords1.children) {
                    if (h.textContent == d) {
                        h.classList.add('select');
                    };
                };
            };

        }).catch((error) =>  {
            console.log(error);
        });
    };
    
})();