(function(){
    "use strict";
    console.log("reading js");
    //selecting each individual casette 
    const cass1 = document.querySelector("#cass1");
    const cass2 = document.querySelector("#cass2");
    const cass3 = document.querySelector("#cass3");
    const cass4 = document.querySelector("#cass4");
    //selecting containers, images, titles, etc, that will be manipulated later
    const things = document.querySelector("#container");
    const spotlight = document.querySelector("#spotlight");
    let spotimg = document.getElementById("spotimg");
    let title = document.getElementById("title");
    let info = document.getElementById("info");

    //when hovering over the container holding all the casettes,
    things.addEventListener('mouseover', function(e){
        //if the mouse is hovering over casette1,  
        if (e.target == cass1) {
            //change the img and text to casette1 
            spotimg.src="../images/cass/cass1.png";
            title.innerHTML=`"Eye Massages"`;
            info.innerHTML=`This casette teaches you four simple massages that promote eye health and reduce stress. Great for the health-conscious individual.`
            //reveal the spotlight div after making the changes
            spotlight.className="show";
        }
        else if (e.target == cass2) {
            //changing the img and text to the correct casette
            spotimg.src="../images/cass/cass2.png";
            title.innerHTML=`"Protect Your Eyes"`;
            info.innerHTML=`A mysterious voice counts methodically and instructs listeners to practice massaging their face in Chinese on top of ominous instrumentals.`
            spotlight.className="show";
        }
        else if (e.target == cass3) {
            spotimg.src="../images/cass/cass3.png";
            title.innerHTML=`"English Test"`;
            info.innerHTML=`Two English speakers converse in an extremely scripted manner about what they need from the grocery store. My mom used this to study English.`
            spotlight.className="show";
        }
        else if (e.target == cass4) {
            spotimg.src="../images/cass/cd.png";
            title.innerHTML=`"Love Song"`;
            info.innerHTML=`A heartfelt Chinese love song. One of my mom's favorites.`
            spotlight.className="show";
        }
        
    })
    //when clicking on the casette img, audio plays
    /* spotimg.addEventListener('onclick', function(e){

    }) */
})();