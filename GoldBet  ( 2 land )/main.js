
checkSize();

function parallax(event) {
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        layer.style.transform = `translateX(${(event.clientX*speed/500)}px)`
    })
}

function checkSize() {
    let content = document.querySelector('.content-text');
    let weight = document.querySelector('.weight');
    let h1 = document.querySelector('.text');
    let logoMobile = document.querySelector('.gold-bet-mobile');
    let logo = document.querySelector('.logo');
    let contentRow = document.querySelector('.content-row');
    document.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        if (window.innerWidth < window.innerHeight) {

            logoMobile.className = "col-12 gold-bet-mobile";
            contentRow.className = "row content-row vert-content-row";
            logo.className = "logo none";
            h1.className = "vert-h text";
            weight.className = "col-12 weight v-weight";
            content.className = "col-12 content-text d-flex align-items-center";

            if ( speed == 50 ) {
                layer.style.backgroundImage = "url('img/metafan-vert.png";
            } else {
                layer.style.backgroundImage = "url('img/object-vert.png";
            }
        } else {

            contentRow.className = "row content-row";
            logoMobile.className = "col-sm-12 gold-bet-mobile none";
            logo.className = "logo";
            h1.className = "text";
            weight.className = "col-6 weight";
            content.className = "col-6 content-text d-flex align-items-center";
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