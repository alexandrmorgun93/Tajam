;
(() => {
    'use strict';

    /*variables*/


    const Parallax = require('scroll-parallax');
    let p = new Parallax('.parallax', {
        intensity: 50
    }).init();

    // video
    let video = document.querySelector('video');
    let playBtn = document.querySelector('.play_video');
    let stopBtn = document.querySelector('.stop_video');
    let videoFade = document.querySelectorAll('.video_fade');


    playBtn.addEventListener('click', () => {
        play();
        fadeGo();
        playBtn.classList.add('active');
    });
    stopBtn.addEventListener('click', () => {
        pause();
        playBtn.classList.remove('active');
        for (let i = 0; i < videoFade.length; i++) {
            videoFade.classList.remove('active');
        }
    });

    function fadeGo() {
        for (let i = 0; i < videoFade.length; i++) {
            videoFade.classList.add('active');
        }
    }

    function play() {
        video.play();
    }

    function pause() {
        video.pause();
    }

})();
