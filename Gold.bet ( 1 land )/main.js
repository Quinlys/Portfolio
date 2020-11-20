
let videoElement = document.querySelector('video');


// videoElement.defineProperty(HTMLMediaElement.prototype, 'playing', {
//     get: function () {
//         return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//     }
// });

videoElement.addEventListener('suspend', () => {
    // suspend invoked
    // show play button
});

videoElement.addEventListener('play', () => {
    // video is played
    // remove play button UI
});

// document.querySelector('body').onclick('click touchstart', function () {
//     const videoElement = document.getElementById('home_video');
//     if (videoElement.playing) {
//         // video is already playing so do nothing
//     }
//     else {
//         // video is not playing
//         // so play video now
//         videoElement.play();
//     }
// });

checkSize();

function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${(event.clientX*speed/500)}px)`
    })
}

function checkSize() {
    document.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        if (window.innerWidth < window.innerHeight) {
            if ( speed == 50 ) {
                layer.style.backgroundImage = "url('img/metafan-vert.png";
            } else {
                layer.style.backgroundImage = "url('img/object-vert.png";
            }
        } else {
            if ( speed == 50 ) {
                layer.style.backgroundImage = "url('img/metafan.png";
            } else {
                layer.style.backgroundImage = "url('img/object.png";
            }
        }
    })
}


setInterval(function rotation() {
    let text = document.querySelectorAll('h1');
    let visionH;
    let nonVision;

    text.forEach(element => {
        if (element.className === 'none') {
            nonVision = element;
        } else {
            visionH = element;
        }
    });

    let start = Date.now();
    let animationMove = setInterval(function () {
        let timePassed = Date.now() - start;

        visionH.style.left = timePassed / 2 + 'px';
        visionH.style.opacity = (100 - (timePassed / 4)) / 100;

        if (timePassed > 400) {
            clearInterval(animationMove);
            visionH.className = 'none';
            visionH.style.left = '0px';
            visionH.style.opacity = '1';
            nonVision.style.opacity = '0';
            nonVision.className = '';


            let newStart = Date.now();
            let animationMoveFromHidden = setInterval(function () {
                let timePassed = Date.now() - newStart;

                nonVision.style.left = ((timePassed / 2) -200) + 'px';
                nonVision.style.opacity = (timePassed / 4) / 100;

                if (timePassed > 400) {
                    clearInterval(animationMoveFromHidden);
                }


            });
        }


    });
}, 5000);



document.body.onresize = checkSize;
document.addEventListener('mousemove', parallax);