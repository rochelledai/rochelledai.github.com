(function(){
    "use strict";
    console.log("reading js");
    
    const things = document.getElementById("container");

    things.addEventListener('click', function(e){
        let imgid = e.target; 
        console.log(imgid);

        let toppos = 250;
        let leftpos = 200;

        let imgstyles = window.getComputedStyle(imgid);
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
        
        //need if statements for specific img to avoid img blocking text
        for (var each of otherimg) { //loops through each "other" img
            let eachstyles = window.getComputedStyle(each);
            let eachtop = eachstyles.getPropertyValue('top');
            let eachleft = eachstyles.getPropertyValue('left');
            eachtop = parseInt(eachtop, 10); //converts to number
            eachleft = parseInt(eachleft, 10);

            each.style.top = eachtop + vartop + "px"; //moves using the same amount "panning"
            each.style.left = eachleft + varleft + "px";
        }

    });



    
   
})();