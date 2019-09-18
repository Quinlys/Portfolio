
let firstImg = document.getElementById('800x400');
let secondImg = document.getElementById('397x400');
let thirdImg = document.getElementById('397x3001');
let fourthImg = document.getElementById('397x3002');
let fifthImg = document.getElementById('397x3003');

let modal = document.getElementById('myModal');
let span = document.getElementById('close');
let content = document.getElementById('modal-content');

firstImg.onclick = () => {
    modal.style.display = 'block';
    let img = document.createElement('img');
    img.id = 'newImg';
    img.style.display = 'block';
    img.src = 'img/800x400/holst_1_800x400.jpg';
    content.appendChild(img);
};

span.onclick = () => {
    modal.style.display = 'none';
    document.getElementById('newImg');
    newImg.remove();
};

secondImg.onclick = () => {
    modal.style.display = 'block';
    let img = document.createElement('img');
    img.id = 'newImg';
    img.style.display = 'block';
    img.src = 'img/397x400/holst_397x400.jpg';
    content.appendChild(img);
};

thirdImg.onclick = () => {
    modal.style.display = 'block';
    let img = document.createElement('img');
    img.id = 'newImg';
    img.style.display = 'block';
    img.src = 'img/397x300/holst_1_397x300.jpg';
    content.appendChild(img);
};

fourthImg.onclick = () => {
    modal.style.display = 'block';
    let img = document.createElement('img');
    img.id = 'newImg';
    img.style.display = 'block';
    img.src = 'img/397x300/holst_2_397x300.jpg';
    content.appendChild(img);
};

fifthImg.onclick = () => {
    modal.style.display = 'block';
    let img = document.createElement('img');
    img.id = 'newImg';
    img.style.display = 'block';
    img.src = 'img/397x300/holst_3_397x300.jpg';
    content.appendChild(img);
};