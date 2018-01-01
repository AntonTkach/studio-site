// JavaScript source code
function gebi(id) {
    return document.getElementById(id);
}

function StartLoading() {
    //for (;;) {
        
    //}
    var elem = document.getElementById("loadingBar");
    var width = 0;
    var speed = 0.2; // times per second 0.01-5
    var id = setInterval(frame, 10/2);
    function frame() {
        if (width >= 100) {
            //clearInterval(id);
            width = 0;
        } else {
            width += speed/2;
            elem.style.width = width + '%';
        }
    }
    
}