/* Grades */

function grades(){
    var subjects = parseInt(prompt("How many subjects are you taking?"));
    var formContent = ""
    for (i=0;i<subjects;i++){
        formContent = formContent + "<label for='subject"+i+"'>Subject "+(i+1)+":</label></br><input type='text' id='subject"+i+"'></br>";
    }
    document.getElementById("gradeForm").innerHTML = formContent + "<input type='submit' onclick='calculate("+subjects+")'>";
};

function calculate(subjects){
    event.preventDefault();
    var total = 0;
    for (i=0;i<subjects;i++){
        total = total + parseFloat(eval("document.getElementById('subject" + (i) + "').value;"));
    }
    if (total/subjects<40 && total/subjects>=0){
        var grade = "F";
    } else if (total/subjects<50 && total/subjects>=0){
        var grade = "D";
    } else if (total/subjects<65 && total/subjects>=0){
        var grade = "C";
    } else if (total/subjects<85 && total/subjects>=0){
        var grade = "B";
    } else if (total/subjects<=100 && total/subjects>=0){
        var grade = "A";
    } else {
        var grade = "Invalid result. Incorrect subject scores entered.";
    }
    document.getElementById("gradeForm").style.display = "none";
    document.getElementById("result").innerHTML = "Average Score: "+total/subjects+"%</br>Grade: "+grade;
    document.getElementById("result").style.display = "flex";
};