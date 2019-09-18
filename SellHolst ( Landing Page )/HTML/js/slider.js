function fastSlide() {
    
}

function sliderLeft() {
    console.log(subjectList.length);
    let semesters = document.getElementById('semesters');
    let semestersInside = document.getElementById('semesters-inside');

    if (position < 0) {
        document.getElementById('vector-right').style.opacity = 1;
        semestersPosition = semestersPosition + 100;
        position = position + 185;
        semestersInside.style.left = position +'px';
        semesters.style.marginLeft = semestersPosition + '%';
        if (position === 0) {
            document.getElementById('vector-left').style.opacity = 0.2;
        }
    }
}


function sliderRight() {

    console.log(subjectList.length);

    let semestersInside = document.getElementById('semesters-inside');
    let semesters = document.getElementById('semesters');

    if (position > (185 * (subjectList.length - 1) * -1)) {
        document.getElementById('vector-left').style.opacity = 1;
        position = position - 185;
        semestersPosition = semestersPosition - 100;
        semestersInside.style.left = position +'px';
        semesters.style.marginLeft = semestersPosition + '%';
        if (position === (185 * (subjectList.length - 1) * -1)) {
            document.getElementById('vector-right').style.opacity = 0.2;
        }
    }
}