(function(){
    "use strict";
    console.log("reading js");
    /* alert(`Hello! Thank you for testing my site. Please try to perform these 3 tasks:
            1. Listen to one of the audio tapes
            2. Pause the audio
            3. Navigate to the old photos`); */
    
    const things = document.getElementById("container");

    let nurse = document.getElementById("nurse");
    let cd = document.getElementById("cd");
    let english = document.getElementById("english");
    let eyes = document.getElementById("eyes");
    let costco = document.getElementById("costco");

    let descrip = document.getElementById("details"); 
    let destitle = descrip.querySelector("h2");
    let desdate = descrip.querySelector("h3");
    let desbody = descrip.querySelector("p");
    let lyrics = document.getElementById("lyrics");
    let deschn = document.getElementById("chn");
    let deseng = document.getElementById("eng");
    const close = document.getElementById("close");
    //let imghover = document.getElementsByClassName("red");
    let objects = things.querySelectorAll('img');

    const chnsong = new Audio('audio/chinesesong.mp3');
    const englishmp = new Audio('audio/english.mp3');
    const eyehealth = new Audio('audio/eyehealth.mp3');

    let home = true; //true means that the page is in home position. 
    let nurseobj = false;
    let cdobj = false;
    let engobj = false;
    let eyeobj = false;
    let costcoobj = false;





    //using mouseover listener so that it checks everytime the mouse moves?
    things.addEventListener('mouseover', mouseevent); 

    //close button
    close.addEventListener('click', closebttn);

    function mouseevent(e){
        if (home==true) {
            things.addEventListener('click', homeclick);
        }
        //if in specific object view,
        else if (home==false) {
            things.removeEventListener('click', homeclick); //removing the first click event to avoid bugs
            let mainobj = e.target;
            if (mainobj.id == "cd") {
                playpause(mainobj, chnsong);
                clickaudio(mainobj, chnsong);
            }
            else if (mainobj.id == "english") {
                playpause(mainobj, englishmp); 
                clickaudio(mainobj, englishmp);
            }
            else if (mainobj.id == "eyes") {
                playpause(mainobj, eyehealth);
                clickaudio(mainobj, eyehealth);
            };
        }
    }

    //pans over the imgs and shows descriptions
    function homeclick(e) {
        console.log('first click event, homeclick');
        let imgid = e.target; 
        let toppos = 190; //the end position that we want the img to be in
        let leftpos = 110;

        let imgstyles = window.getComputedStyle(imgid); //selecting the CSS properties
        let targettop = imgstyles.getPropertyValue('top'); //getting the current top position
        let targetleft = imgstyles.getPropertyValue('left');
        targettop = parseInt(targettop, 10); //converts to number
        targetleft = parseInt(targetleft, 10);

        let vartop = toppos - targettop; //finds the difference between the current and end positions
        let varleft = leftpos - targetleft;

        imgid.style.top = targettop + vartop + "px"; //moving the element using the difference calculated
        imgid.style.left = targetleft + varleft + "px";

        //moving all the other imgs
        let otherimg = document.querySelectorAll(`#container > :not(#${imgid.id})`);
        //loops through each "other" img
        for (let each of otherimg) { 
            let eachstyles = window.getComputedStyle(each);
            let eachtop = eachstyles.getPropertyValue('top');
            let eachleft = eachstyles.getPropertyValue('left');
            eachtop = parseInt(eachtop, 10); //converts to number
            eachleft = parseInt(eachleft, 10);

            //moves using the same amount of "panning"/difference that was calulated earlier
            each.style.top = eachtop + vartop + "px"; 
            each.style.left = eachleft + varleft + "px";

            each.style.opacity = "0.1"; //changes other imgs to opaque
            each.style.pointerEvents = "none";  //disables click action
        };

        //showing descriptions depending on what object is in view
        descrip.className= "show";
        switch (imgid.id) {
            case "nurse":
                destitle.innerHTML="OLD PHOTOS";
                desdate.innerHTML="1994, BEIJING, CHINA";
                desbody.innerHTML="After two years of highschool, my mother attended a vocational school where she practiced nursing for 5 years.";
                lyrics.className ="hidden";
                imgid.style.pointerEvents = "none";
                nurseobj = true;
            break;
            case "cd":
                destitle.innerHTML="BLANK AUDIO CASSETTES (空白錄音帶）by Shelly Yu (于台烟)";
                desdate.innerHTML="1988, BEIJING, CHINA";
                desbody.innerHTML="This was one of my mother's favorite songs when she was in her twenties.";

                lyrics.className ="show";
                deschn.innerHTML= `我只敢在無人的深夜裡，把心打開，<br>
                反反覆覆的聽那敲打心靈的節拍。<br>
                <br>
                喔....我知道你唱的多無奈，<br>
                長久的空白，是你對我沈默的愛。`;
                deseng.innerHTML= `I only dare to open my heart in the middle of the night when there is no one,<br>
                Repeatedly listen to the beat that beats the soul.<br>
                <br>
                Oh... I know how helpless you sing,<br>
                The long blankness is your silent love for me.`;
                cdobj=true;
            break;
            case "english":
                destitle.innerHTML="ENGLISH LISTENING TEST";
                desdate.innerHTML="1996, MICHIGAN, US";
                desbody.innerHTML="After studying as a nurse in China, my mother immigrated to the US. She learned English through cassettes like these. Even today, she makes sure to take note of words she doesn't recognize, so that she can later ask me about them.";
                
                lyrics.className ="show";
                deschn.innerHTML= `WOMAN: What else do we need?<br><br>MAN: A gallon of milk, two pounds of steak, a loaf of bread, and a chocolate cake!`;
                deseng.innerHTML= ``;
                engobj=true;
            break;
            case "eyes":
                destitle.innerHTML="EXERCISES FOR EYE HEALTH (眼保操磁带)";
                desdate.innerHTML="2003, CALIFORNIA, USA";
                desbody.innerHTML="After spending 4 years in Michigan, my mother moved to California, where her first job was a Chinese language instructor. She specifically asked her father in China to mail over these cassettes so that she can use them in class.";
                
                lyrics.className ="show";
                deschn.innerHTML= `保护，视力预防近视，眼宝健康。`;
                deseng.innerHTML= `Protecting your vision, preventing myopia, and treasuring your eye health.`;
                eyeobj=true;
            break;
            case "costco":
                destitle.innerHTML="COSTCO RECEIPT";
                desdate.innerHTML="2021, CALIFORNIA, USA";
                desbody.innerHTML="My mother's favorite part of shopping is browsing the sale/clearance sections and snagging the best deals. Recently, we bought ingredients for a charcuterie board, which is something new and western that we had never made before.";
                lyrics.className ="hidden";
                imgid.style.pointerEvents = "none";
                costcoobj=true;
            break;
        };

        home = false; //no longer at home position, so change value to False
        console.log(`expanded object, ${home}`);
    }

    //closing the details
    function closebttn(e) {
        //hiding the description 
        descrip.className="hidden";
        lyrics.className="hidden";

        //pauses song if they click close
        if (isPlaying(chnsong ===false || englishmp===false || eyehealth===false)) { 
            chnsong.pause();
            chnsong.currentTime = 0; //resets the audio to the start
            englishmp.pause();
            englishmp.currentTime = 0;
            eyehealth.pause();
            eyehealth.currentTime = 0;
        };

        //using the original css positition of the "nurse" img as a reference to figure out how much to shift the imgs. my first idea was to call the homeclick function and reuse the same vartop and varleft, but apparently that function is unable to return values from a click event listener 
        let toppos = 60; 
        let leftpos = 50;

        let imgstyles = window.getComputedStyle(nurse); //selecting the current CSS values of nurse img
        let currenttop = imgstyles.getPropertyValue('top');
        let currentleft = imgstyles.getPropertyValue('left');
        currenttop = parseInt(currenttop, 10); //converts to number
        currentleft = parseInt(currentleft, 10);

        let vartop = currenttop - toppos; //computing the difference in position 
        let varleft = currentleft - leftpos;

        //moves imgs back to original posiiton
        for (let each of objects) { 
            let eachstyles = window.getComputedStyle(each); //selecting the current CSS
            let eachtop = eachstyles.getPropertyValue('top');
            let eachleft = eachstyles.getPropertyValue('left');
            eachtop = parseInt(eachtop, 10); //converts to number
            eachleft = parseInt(eachleft, 10);

            each.style.top = eachtop - vartop + "px"; //moving the img
            each.style.left = eachleft - varleft + "px";

            each.style.opacity = "1"; 
            each.style.pointerEvents = "all";  //enables click action
            each.className="red";  //revert cursor back to normal
        };

        home = true; //going back to home position, so it is True
        console.log(`closed, ${home}`);
    }

    //changes cursor for audio
    function playpause(mainobj, song){
        if (isPlaying(song)==false){
            mainobj.className="playbttn";
            //ONLY WORKS IF THE FUNCTION IS ANONYMOUS. BUT ALSO ERROR BC MULTIPLE CLICK EVENTS. HOW TO FIX???
            /* mainobj.addEventListener('click', function(e){
                song.play();
                mainobj.className = "pausebttn";
                //playpause(mainobj, song);
            }); */
        }
        else {
            mainobj.className="pausebttn";  
        }
    }

    //plays or pauses audio
    function clickaudio(mainobj, song){
        //if the cursor is a play button (basically the music is paused)
        if (mainobj.className == 'playbttn') {
            //prevents the mouseover event listener by using anonymous function
            mainobj.addEventListener('click', function(e) { 
                song.play();
            });
        }
        else if (mainobj.className=='pausebttn') { 
            //if user clicks the specific object, pause
            mainobj.addEventListener('click', function(e) {
                song.pause();
            })
        };
    }

    //checks if audio is currently playing
    function isPlaying(audelem) { return !audelem.paused; } 

    function playaudio(song) {
        song.play();
    }
    function pauseaudio(song) {
        song.pause();
    }
    
    
})();