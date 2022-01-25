(function(){
    'use strict';
    let key;
    let globaldata;
    let time = document.querySelector('h2');
    const timehead = document.querySelector('section');
    let beanbagimg = document.getElementById('beanbagimg');
    let diningimg = document.getElementById('diningimg');
    let deskimg = document.getElementById('deskimg');
    let bedimg = document.getElementById('bedimg');

    let beanbagc = document.getElementById('beanbag');
    let diningc = document.getElementById('dining');
    let deskc = document.getElementById('desk');
    let bedc = document.getElementById('bed');
    
    
    async function getData() {
        const myChairs = await fetch('data/check.json');
        const data = await myChairs.json();
        key = Object.keys(data);
        globaldata = data;
    };

    function slowdown(item, index){
        setTimeout(function(){
            time.innerHTML=`${item}`;
            timehead.style.color = '#005999';

            if (globaldata[item]=='beanbag'){
                let imgheight = beanbagimg.height;
                beanbagimg.style.height = `${imgheight += 70}px`;
                beanbagc.className='show';
                diningc.className='hide';
                deskc.className='hide';
                bedc.className='hide';
            } else if (globaldata[item]=='dining'){
                let imgheight = diningimg.height;
                diningimg.style.height = `${imgheight += 70}px`;
                beanbagc.className='hide';
                diningc.className='show';
                deskc.className='hide';
                bedc.className='hide';
            } else if (globaldata[item]=='desk'){
                let imgheight = deskimg.height;
                deskimg.style.height = `${imgheight += 70}px`;
                beanbagc.className='hide';
                diningc.className='hide';
                deskc.className='show';
                bedc.className='hide';
            } else {
                let imgheight = bedimg.height;
                bedimg.style.height = `${imgheight += 70}px`;
                beanbagc.className='hide';
                diningc.className='hide';
                deskc.className='hide';
                bedc.className='show';
            }
        }, 1000 * index);
    }


    // change the time at the top
    timehead.addEventListener('click', function(event) {
        key.forEach(function (item, index) {
            slowdown(item, index);
        });
    });

    getData();

})();