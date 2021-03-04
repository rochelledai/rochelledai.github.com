(function(){
    "use strict";
    console.log("reading js");
    
    const things = document.getElementById("container");
    let nurse = document.getElementById("nurse");

    things.addEventListener('click', function(e){
        if (e.target == nurse) {
            nurse.className = "show";
        }
    });

    
   
})();