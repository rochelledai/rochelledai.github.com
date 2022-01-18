(function () {
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const water = document.querySelector('#water');
    const myAudio = new Audio('media/stream.mp3');
    let ypos;
    const loading = document.querySelector('#loader');
    const instruct = document.querySelector('#instruct');

    window.addEventListener('mousemove', function(event){
        ypos = event.clientY;
        water.style.opacity = ypos / 300;
        myAudio.volume = ypos / 1000; // audio needs to be value between 0 and 1. 
    });

    myVideo.addEventListener('playing', function(){
        loading.className='hide';
    });

    window.addEventListener('load', function(){
        instruct.className='show';
    })

    instruct.addEventListener('click', function(){
        myAudio.play();
        instruct.className='hide';
    })

})();