/* Rock Paper Scissors */

var playCounter = 0;

function rock(){
    var uChoice = 0;
    hideSelector();
    showChoice(uChoice)
    getResult(uChoice)
}

function paper(){
    var uChoice = 1;
    hideSelector();
    showChoice(uChoice)
    getResult(uChoice)
}

function scissors(){
    var uChoice = 2;
    hideSelector();
    showChoice(uChoice)
    getResult(uChoice)
}

function hideSelector(){
    document.getElementById("choiceSurface").style.display = "none";
}

function showChoice(uChoice){
    self.uChoice=uChoice;
    document.getElementById("invite").innerHTML = "You chose:";
    imagePicker(uChoice,0);
    document.getElementById("chosen").style.display = "flex";
}

/* First if/else section. Used to display chosen option.
Reusable so that this can be used for both the player and the PC choice.
Two separate queries, first to determine if this is to display the Player's or the PC's choice,
and second query to determine which image/choice to display.*/

function imagePicker(contest,player){
    if(player==0){
        var pic="chosenPic";
        var tag="chosenTag";
    } else if (player==1){
        var pic="pcPic";
        var tag="pcTag";
    };
    if(contest==0){
        document.getElementById(pic).src="../images/rock.png";
        document.getElementById(pic).alt="Rock";
        document.getElementById(tag).innerHTML="Rock";
    }else if (contest==1){
        document.getElementById(pic).src="../images/paper.png";
        document.getElementById(pic).alt="Paper";
        document.getElementById(tag).innerHTML="Paper";
    }else if (contest==2){
        document.getElementById(pic).src="../images/scissors.png";
        document.getElementById(pic).alt="Scissors";
        document.getElementById(tag).innerHTML="Scissors";
    };
}

function getResult(uChoice){
    document.getElementById("game").style.display = "flex";
    var result = parseInt(Math.random()*3);
    setTimeout(function(){
        imagePicker(result,1);
        showResult(uChoice,result);
    },2000);
}

/* Second if/else section, for determining the actual result of the game.
Made a deliberate choice to use a full set of logical statements rather than nesting if/else queries, for easier readability. */

function showResult(uChoice,result){
    console.log(playCounter);
    playCounter++;
    console.log(playCounter);
    self.uChoice= uChoice;
    self.result=result;
    if (uChoice==result){
        document.getElementById("result").innerHTML="Draw!";
    }else if ((uChoice==0 && result==1) || (uChoice==1 && result==2) || (uChoice==2 && result==0)){
        document.getElementById("result").innerHTML="You lose!";
    }else if ((uChoice==0 && result==2) || (uChoice==1 && result==0) || (uChoice==2 && result==1)){
        document.getElementById("result").innerHTML="You win!";
        var victory = true;
    }
    document.getElementById("shuffler").innerHTML="The PC chose:";
    console.log("Victory: "+victory+"\nCount: "+playCounter);
    if (victory != true && playCounter<3){
        setTimeout(function(){
            document.getElementById("refresh").style.display = "flex";
        },1500);
    }
};

function reset(){
    document.getElementById("pcPic").src="../images/shuffle.gif";
    document.getElementById("pcPic").alt="Selection shuffle";
    document.getElementById("pcTag").innerHTML="";
    document.getElementById("choiceSurface").style.display = "flex";
    document.getElementById("chosen").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("refresh").style.display = "none";
};