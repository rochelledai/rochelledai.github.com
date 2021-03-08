(function(){
    "use strict";
    console.log("reading js");
    
    const things = document.getElementById("container");
    let descrip = document.getElementById("details"); //descrip text 
    let destitle = descrip.querySelector("h2");
    let desdate = descrip.querySelector("h3");
    let desbody = descrip.querySelector("p");
    let lyrics = document.getElementById("lyrics");
    let deschn = document.getElementById("chn");
    let deseng = document.getElementById("eng");
    const close = document.getElementById("close");
    let imghover = document.getElementsByClassName("red");
    console.log(imghover);

    const chnsong = new Audio('audio/chinesesong.mp3');
    const englishmp = new Audio('audio/english.mp3');
    const eyehealth = new Audio('audio/eyehealth.mp3');

    things.addEventListener('click', function(e){
        let imgid = e.target; 
        /* console.log(imgid); */

        //panning the img
        let toppos = 250;
        let leftpos = 200;

        let imgstyles = window.getComputedStyle(imgid); //selecting the CSS properties
        let targettop = imgstyles.getPropertyValue('top');
        let targetleft = imgstyles.getPropertyValue('left');
        targettop = parseInt(targettop, 10); //converts to number
        targetleft = parseInt(targetleft, 10);

        let vartop = toppos - targettop; //the number we gonna add/subtract
        let varleft = leftpos - targetleft;

        imgid.style.top = targettop + vartop + "px";
        imgid.style.left = targetleft + varleft + "px";
        //imgid.style.width = "700px"; //width based on each img


        //other imgs move away-- selecting all the other imgs
        let otherimg = document.querySelectorAll(`#container > :not(#${imgid.id})`);
        
        for (var each of otherimg) { //loops through each "other" img
            let eachstyles = window.getComputedStyle(each);
            let eachtop = eachstyles.getPropertyValue('top');
            let eachleft = eachstyles.getPropertyValue('left');
            eachtop = parseInt(eachtop, 10); //converts to number
            eachleft = parseInt(eachleft, 10);

            each.style.top = eachtop + vartop + "px"; //moves using the same amount "panning"
            each.style.left = eachleft + varleft + "px";

            each.style.opacity = "0.1"; //changes other img to opaque
            each.style.pointerEvents = "none";  //disables click action
        }

        //make the descrip appear 
        descrip.className= "show";
        switch (imgid.id) {
            case "nurse":
                destitle.innerHTML="OLD PHOTOS";
                desdate.innerHTML="1980's, BEIJING, CHINA";
                desbody.innerHTML="Shortly after middle school, my mother attended a vocational school where she practiced nursing for 5 years.";
                lyrics.className ="hidden";
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

                imgid.addEventListener('mouseover', function(e){
                    
                    imgid.className = "playbttn";
                    console.log('hhhh');
                })
                imgid.addEventListener('click', function(e){
                    chnsong.play();
                })
            break;
            case "english":
                destitle.innerHTML="ENGLISH LISTENING TEST";
                desdate.innerHTML="1996, MICHIGAN, US";
                desbody.innerHTML="After studying as a nurse in China, my mother immigrated to the US. She learned English through cassettes like these. Even today, she makes sure to take note of words she doesn't recognize, so that she can later ask me about them.";
                
                lyrics.className ="show";
                deschn.innerHTML= `WOMAN: What else do we need?<br><br>MAN: A gallon of milk, two pounds of steak, a loaf of bread, and a chocolate cake!`;
                deseng.innerHTML= ``;
            break;
            case "eyes":
                destitle.innerHTML="EXERCISES FOR EYE HEALTH (眼保操磁带)";
                desdate.innerHTML="1994, BEIJING, CHINA";
                desbody.innerHTML="These cassette tapes instruct the listener to follow along and perform massages on their face to improve their eye health. My mother is a health-conscious individual. She enjoys using Chinese herbs and other traditional methods to treat her ailments.";
                
                lyrics.className ="show";
                deschn.innerHTML= `保护，视力预防近视，眼宝健康。`;
                deseng.innerHTML= `Protecting your vision, preventing myopia, and treasuring your eye health.`;
            break;
            case "costco":
                destitle.innerHTML="COSTCO RECEIPT";
                desdate.innerHTML="2021, CALIFORNIA, USA";
                desbody.innerHTML="My mother's favorite part of shopping is browsing the sale/clearance sections and snagging the best deals. Recently, we bought ingredients for a charcuterie board, which is something new and western that we had never made before.";
                
                lyrics.className ="hidden";
            break;
        };

        close.addEventListener('click', function(e) {
            descrip.className="hidden";
            lyrics.className="hidden";
            
            let objects = things.querySelectorAll('img');
            for (var each of objects) { //moves back to original posiiton
                let eachstyles = window.getComputedStyle(each);
                let eachtop = eachstyles.getPropertyValue('top');
                let eachleft = eachstyles.getPropertyValue('left');
                eachtop = parseInt(eachtop, 10); //converts to number
                eachleft = parseInt(eachleft, 10);
    
                each.style.top = eachtop - vartop + "px"; //moves using the same amount "panning"
                each.style.left = eachleft - varleft + "px";

                each.style.opacity = "1";
                each.style.pointerEvents = "all";  //enables click action
            }
        });


    });

    



    
   
})();