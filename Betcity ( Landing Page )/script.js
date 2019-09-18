let modal1 = document.getElementById('myModal1');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');
let link1 = document.getElementById("location01");
let link2 = document.getElementById("location02");
let link3 = document.getElementById("location03");
let link4 = document.getElementById("location04");

link1.onclick = function () {
    modal1.style.display = "block";
};

link2.onclick = function () {
    modal2.style.display = "block";
};

link3.onclick = function () {
    modal3.style.display = "block";
};

link4.onclick = function () {
    modal4.style.display = "block";
};

let span = document.getElementByClassName("close")[0];
span.onclick = function () {
    modal1.style.display = "none";
    alert('Hello!')
};