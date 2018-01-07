// JavaScript source code
function gebi(id) {
    return document.getElementById(id);
}
var gameData = {
    points: 0,
    isMainLoaderSold: false,
    isMainLoadBarSold: false,
    isPercentSold: false,
    isTimeSold:false,
    isMenuSold: false,
    isTabsSold: false,
    isTimeSold:false,
    isSaveSold: false,
    isToggablesSold: false,
    isManualbuySold: false
    //barSpeeds: [1, 0.5], // seconds per one run
    //currentBarSpeed: 0.1 
};
//var barSpeed = 0.1; // times per second 0.01-5
var barSpeed = 900;// seconds per one run
function StartLoading() {
    var elem = gebi("mainLoader");
    var width = 0;
    var value=0;
    var timesRun = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            //clearInterval(id);
            width = 0;
            timesRun = 0;
            gameData.points++;
            
        } else {
            timesRun++;
            
            width += 1 / barSpeed;
            if (timesRun % 10 === 0) {
                value = Math.round(width * 100 + Number.EPSILON) / 100;
            }
            //value = Math.round(width * 100 + Number.EPSILON) / 100;
            elem.style.width = width + "%";
            gebi("loadingBar").innerText = value + "%";
            
        }
    }
    Purchase(gameData.points, gameData.isManualbuySold);
    
}

function Purchase(points, mode) {
    if (mode===false) {
        BuyNext();
    }
}

function BuyNext() {
    for (var key in gameData) {
        if (gameData.hasOwnProperty(key) === false) {
            gameData[key] = true;
        }
    }
    // Loader, loading bar, loading percent, tabs, save, 
    return;
}

function EnableStuff() {
    for (var key in gameData) {
        if (gameData.hasOwnProperty(key) === true) {
            gebi(/*element*/).style.display = "block";
        }
    }
}