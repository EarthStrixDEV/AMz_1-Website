var root = document.querySelector('.root');
var btn = document.createElement('button');

function createButton() {
    btn.innerHTML = "click";
    btn.setAttribute('class', "btn");
    root.appendChild(btn);
};