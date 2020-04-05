window.addEventListener('load', select, false);

function select() {
    var boxes = document.getElementsByTagName("input");
    for (i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        box.addEventListener('change', show, false);
    }
}

function show() {
    
    var ident = this.id;
    var matchedElements = document.getElementsByClassName(ident);
    for (i = 0; i < matchedElements.length; i++) {
        var matchedElement = matchedElements[i];
        
        if (matchedElement.style.visibility === "visible") {
            matchedElement.style.visibility = "hidden";
        } else {
            matchedElement.style.visibility = "visible";
        }
    }
}