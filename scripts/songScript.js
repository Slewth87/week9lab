/* 99 Bottles of beer */

document.getElementById("song").addEventListener("click", function(){
    var msg = "";
    var pluralA = " bottles of beer on the wall!</br>";
    var pluralB = " bottles of beer!</br>Take 1 down</br>And pass it around</br>";
    var single = " bottle of beer on the wall!</br>";
    var gone = "No more bottles of beer on the wall</br>";
    for(i=100;i>0;i--){
        if (i>3){
            msg = msg + (i-1) + pluralA + (i-1) + pluralB + (i-2) + pluralA + "</br>"
        } else if (i>2) {
            msg = msg + (i-1) + pluralA + (i-1) + pluralB + (i-2) + single + "</br>"
        } else if (i>1) {
            msg = msg + (i-1) + single + (i-1) + " bottle of beer!</br>Take 1 down</br>And pass it around</br>" + gone + "</br>"
        } else {
            msg = msg + gone + "No more bottles of beer!"
        }
    }
    document.getElementById("lyrics").innerHTML = msg;
});