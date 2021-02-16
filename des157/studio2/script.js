(function(){
    "use strict";
    const cass1 = document.querySelector("#cass1");
    const cass2 = document.querySelector("#cass2");
    const cass3 = document.querySelector("#cass3");
    const cass4 = document.querySelector("#cass4");

    const things = document.querySelector("#container");
    const spotlight = document.querySelector("#spotlight");
    const spotimg = document.getElementById("spotimg");
    const title = document.getElementById("title");
    const info = document.getElementById("info");

    things.addEventListener('mouseover', function(e){
        if (e.target == cass1) {
            spotimg.src="../images/cass/cass1.png";
            title.innerHTML=`"Eye Massages"`;
            info.innerHTML=`This casette teaches you four simple massages that promote eye health and reduce stress. Great for the health-conscious individual.`
            spotlight.className="show";
        }
        else if (e.target == cass2) {
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
    
    /* spotimg.addEventListener('onclick', function(e){

    }) */
})();