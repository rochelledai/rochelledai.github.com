(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    // const banner = document.querySelector('#banner');
    const daybanner = document.querySelector('#daydream');
    const sections = document.querySelectorAll('section');
    const h1vars = document.querySelectorAll('h1');
    const h2vars = document.querySelectorAll('h2');
    const h3vars = document.querySelectorAll('h3');
    const avars = document.querySelectorAll('a');
    let mode = 'daydream';

    button.addEventListener('click', function() {
        if (mode === 'daydream') {
            body.className = 'switch';
            daybanner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            for (const h1var of h1vars) {
                h1var.className = 'switch';
            }
            for (const h2var of h2vars) {
                h2var.className = 'switch';
            }
            for (const h3var of h3vars) {
                h3var.className = 'switch';
            }
            for (const avar of avars) {
                avar.className = 'switch';
            }
            mode = 'reality';
        } else {
            body.removeAttribute('class');
            daybanner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            for (const h1var of h1vars) {
                h1var.removeAttribute('class');
            }
            for (const h2var of h2vars) {
                h2var.removeAttribute('class');
            }
            for (const h3var of h3vars) {
                h3var.removeAttribute('class');
            }
            for (const avar of avars) {
                avar.removeAttribute('class');
            }
            mode = 'daydream';
        }
    })
})()