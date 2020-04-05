function tooltip() {
    var myspans = document.querySelectorAll('[data-exp]');
    for (var i = 0; i < myspans.length; i++) {
        myspans[i].addEventListener('click', popup, false);
    }
}


function popup(event) {
    if (! this.id) {
        var overlay = document.createElement("div");
        var x = event.pageX;
        var y = event.pageY;
        var random = "n" + Math.random();
        
        this.id = random;
        if (this.dataset.exp) {
            overlay.innerHTML = this.dataset.exp;
        }
        overlay.style.backgroundColor = "#283655";
        overlay.style.position = "absolute";
        overlay.style.left = x + "px";
        overlay.style.top = y + "px";
        overlay.style.border = "1px solid white";
        overlay.style.borderWidth = "2px";
        overlay.style.color = "black";
        overlay.style.margin = "0";
        overlay.style.padding = ".5em";
        overlay.dataset.pointer = random;
        overlay.addEventListener('click', destruir, false);
        document.body.appendChild(overlay);
    }
}

function destruir() {
    var myspan = document.getElementById(this.dataset.pointer);
    myspan.removeAttribute("id");
    document.body.removeChild(this);
}


if (window.attachEvent) {window.attachEvent('onload', tooltip);}
else if (window.addEventListener) {window.addEventListener('load', tooltip, false);}
else {document.addEventListener('load',tooltip, false);}