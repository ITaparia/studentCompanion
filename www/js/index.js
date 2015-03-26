/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



function opentestScores(){

    window.location = "testScores.html";

}



function goBack(){

    window.location = "index.html";

}

function openactorsat(){

    window.location = "actorsat.html";

}

function visitSite(){

   window.open('http://apexsoftwareofficial.wordpress.com', '_system', 'location=no');
    
}

function actSelect(){

window.location = "actPage.html";

}

function numericOnly(event) {
	var key = window.event.keyCode || event.keyCode;
	return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key == 8) || (key == 9));
}

function loadFour(){

window.location = "4scale.html";

}

function calculateActScore(){
    
    var score1 = document.getElementById("scoreOne").value;
    var score2 = document.getElementById("scoreTwo").value;
    var score3 = document.getElementById("scoreThree").value;
    var score4 = document.getElementById("scoreFour").value;
    
    
    
    var totalsubscores = parseInt(score1) + parseInt(score2) + parseInt(score3) + parseInt(score4);
    
    var ACTscore = totalsubscores/4;
    ACTscore = Math.round(ACTscore);
    
    
    
    
    if(score1 > 36 || score2 > 36 || score3 > 36 || score4 > 36)
    {
        document.getElementById("actScore").innerHTML = "Invalid entry(ies). Try again.";
    }
    else if(score1 == "" || score2 == "" || score3 == "" || score4 == "")
    {
        document.getElementById("actScore").innerHTML = "Invalid entry(ies). Try again.";
    }
    else
    {
        document.getElementById("actScore").innerHTML = "Your ACT composite score is a" + " " + ACTscore + "!";
    }
    
    
}

function calculate4scale()
{
    
    
    
    var classnum = 0;
    
    var actualval1 = 0;
    var actualval2 = 0;
    var actualval3 = 0;
    var actualval4 = 0;
    var actualval5 = 0;
    var actualval6 = 0;
    var actualval7 = 0;
    var actualval8 = 0;
    
    var validEntry1 = false;
    var validEntry2 = false;
    var validEntry3 = false;
    var validEntry4 = false;
    var validEntry5 = false;
    var validEntry6 = false;
    var validEntry7 = false;
    var validEntry8 = false;
    
    var grade1 = document.getElementById("firstClass");
    var grade2 = document.getElementById("secondClass");
    var grade3 = document.getElementById("thirdClass");
    var grade4 = document.getElementById("fourthClass");
    var grade5 = document.getElementById("fifthClass");
    var grade6 = document.getElementById("sixthClass");
    var grade7 = document.getElementById("seventhClass");
    var grade8 = document.getElementById("eighthClass");
    
    if(grade1.value == "")
    {
        validEntry1 = true;
    }
    if(grade2.value == "")
    {
        validEntry2 = true;
    }
    if(grade3.value == "")
    {
        validEntry3 = true;
    }
    if(grade4.value == "")
    {
        validEntry4 = true;
    }
    if(grade5.value == "")
    {
        validEntry5 = true;
    }
    if(grade6.value == "")
    {
        validEntry6 = true;
    }
    if(grade7.value == "")
    {
        validEntry7 = true;
    }
    if(grade8.value == "")
    {
        validEntry8 = true;
    }
    
    if(grade1.value == "" && grade2.value == "" && grade3.value == "" && grade4.value == "" && grade5.value == "" && grade6.value == "" && grade7.value == "" && grade8.value == "")
    {
        
        validEntry1 = false
        validEntry2 = false
        validEntry3 = false
        validEntry4 = false
        validEntry5 = false
        validEntry6 = false
        validEntry7 = false
        validEntry8 = false
        
    }
    
    if(grade1.value == "A+" || grade1.value == "a+")
    {
        actualval1 = 4;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "A" || grade1.value == "a")
    {
        actualval1 = 4;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "A-" || grade1.value == "a-")
    {
        actualval1 = 4;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "B+" || grade1.value == "b+")
    {
        actualval1 = 3;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "B" || grade1.value == "b")
    {
        actualval1 = 3;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "B-" || grade1.value == "b-")
    {
        actualval1 = 3;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "C+" || grade1.value == "c+")
    {
        actualval1 = 2;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "C" || grade1.value == "c")
    {
        actualval1 = 2;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "C-" || grade1.value == "c-")
    {
        actualval1 = 2;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "D+" || grade1.value == "d+")
    {
        actualval1 = 1;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "D" || grade1.value == "d")
    {
        actualval1 = 1;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "D-" || grade1.value == "d-")
    {
        actualval1 = 1;
        classnum = classnum+1;
        validEntry1 = true;
    }
    else if(grade1.value == "F" || grade1.value == "f")
    {
        actualval1 = 0;
        classnum = classnum+1;
        validEntry1 = true;
    }
    
    
    
    if(grade2.value == "A+" || grade2.value == "a+")
    {
        actualval2 = 4;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "A" || grade2.value == "a")
    {
        actualval2 = 4;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "A-" || grade2.value == "a-")
    {
        actualval2 = 4;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "B+" || grade2.value == "b+")
    {
        actualval2 = 3;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "B" || grade2.value == "b")
    {
        actualval2 = 3;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "B-" || grade2.value == "b-")
    {
        actualval2 = 3;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "C+" || grade2.value == "c+")
    {
        actualval2 = 2;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "C" || grade2.value == "c")
    {
        actualval2 = 2;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "C-" || grade2.value == "c-")
    {
        actualval2 = 2;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "D+" || grade2.value == "d+")
    {
        actualval2 = 1;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "D" || grade2.value == "d")
    {
        actualval2 = 1;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "D-" || grade2.value == "d-")
    {
        actualval2 = 1;
        classnum = classnum+1;
        validEntry2 = true;
    }
    else if(grade2.value == "F" || grade2.value == "f")
    {
        actualval2 = 0;
        classnum = classnum+1;
        validEntry2 = true;
    }
    
    
    
    
    if(grade3.value == "A+" || grade3.value == "a+")
    {
        actualval3 = 4;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "A" || grade3.value == "a")
    {
        actualval3 = 4;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "A-" || grade3.value == "a-")
    {
        actualval3 = 4;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "B+" || grade3.value == "b+")
    {
        actualval3 = 3;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "B" || grade3.value == "b")
    {
        actualval3 = 3;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "B-" || grade3.value == "b-")
    {
        actualval3 = 3;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "C+" || grade3.value == "c+")
    {
        actualval3 = 2;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "C" || grade3.value == "c")
    {
        actualval3 = 2;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "C-" || grade3.value == "c-")
    {
        actualval3 = 2;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "D+" || grade3.value == "d+")
    {
        actualval3 = 1;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "D" || grade3.value == "d")
    {
        actualval3 = 1;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "D-" || grade3.value == "d-")
    {
        actualval3 = 1;
        classnum = classnum+1;
        validEntry3 = true;
    }
    else if(grade3.value == "F" || grade3.value == "f")
    {
        actualval3 = 0;
        classnum = classnum+1;
        validEntry3 = true;
    }
    
    
    
    
    if(grade4.value == "A+" || grade4.value == "a+")
    {
        actualval4 = 4;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "A" || grade4.value == "a")
    {
        actualval4 = 4;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "A-" || grade4.value == "a-")
    {
        actualval4 = 4;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "B+" || grade4.value == "b+")
    {
        actualval4 = 3;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "B" || grade4.value == "b")
    {
        actualval4 = 3;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "B-" || grade4.value == "b-")
    {
        actualval4 = 3;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "C+" || grade4.value == "c+")
    {
        actualval4 = 2;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "C" || grade4.value == "c")
    {
        actualval4 = 2;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "C-" || grade4.value == "c-")
    {
        actualval4 = 2;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "D+" || grade4.value == "d+")
    {
        actualval4 = 1;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "D" || grade4.value == "d")
    {
        actualval4 = 1;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "D-" || grade4.value == "d-")
    {
        actualval4 = 1;
        classnum = classnum+1;
        validEntry4 = true;
    }
    else if(grade4.value == "F" || grade4.value == "f")
    {
        actualval4 = 0;
        classnum = classnum+1;
        validEntry4 = true;
    }
    
    
    
    
    if(grade5.value == "A+" || grade5.value == "a+")
    {
        actualval5 = 4;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "A" || grade5.value == "a")
    {
        actualval5 = 4;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "A-" || grade5.value == "a-")
    {
        actualval5 = 4;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "B+" || grade5.value == "b+")
    {
        actualval5 = 3;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "B" || grade5.value == "b")
    {
        actualval5 = 3;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "B-" || grade5.value == "b-")
    {
        actualval5 = 3;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "C+" || grade5.value == "c+")
    {
        actualval5 = 2;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "C" || grade5.value == "c")
    {
        actualval5 = 2;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "C-" || grade5.value == "c-")
    {
        actualval5 = 2;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "D+" || grade5.value == "d+")
    {
        actualval5 = 1;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "D" || grade5.value == "d")
    {
        actualval5 = 1;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "D-" || grade5.value == "d-")
    {
        actualval5 = 1;
        classnum = classnum+1;
        validEntry5 = true;
    }
    else if(grade5.value == "F" || grade5.value == "f")
    {
        actualval5 = 0;
        classnum = classnum+1;
        validEntry5 = true;
    }
    
    
    
    
    if(grade6.value == "A+" || grade6.value == "a+")
    {
        actualval6 = 4;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "A" || grade6.value == "a")
    {
        actualval6 = 4;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "A-" || grade6.value == "a-")
    {
        actualval6 = 4;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "B+" || grade6.value == "b+")
    {
        actualval6 = 3;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "B" || grade6.value == "b")
    {
        actualval6 = 3;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "B-" || grade6.value == "b-")
    {
        actualval6 = 3;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "C+" || grade6.value == "c+")
    {
        actualval6 = 2;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "C" || grade6.value == "c")
    {
        actualval6 = 2;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "C-" || grade6.value == "c-")
    {
        actualval6 = 2;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "D+" || grade6.value == "d+")
    {
        actualval6 = 1;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "D" || grade6.value == "d")
    {
        actualval6 = 1;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "D-" || grade6.value == "d-")
    {
        actualval6 = 1;
        classnum = classnum+1;
        validEntry6 = true;
    }
    else if(grade6.value == "F" || grade6.value == "f")
    {
        actualval6 = 0;
        classnum = classnum+1;
        validEntry6 = true;
    }
    
    
    
    
    if(grade7.value == "A+" || grade7.value == "a+")
    {
        actualval7 = 4;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "A" || grade7.value == "a")
    {
        actualval7 = 4;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "A-" || grade7.value == "a-")
    {
        actualval7 = 4;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "B+" || grade7.value == "b+")
    {
        actualval7 = 3;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "B" || grade7.value == "b")
    {
        actualval7 = 3;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "B-" || grade7.value == "b-")
    {
        actualval7 = 3;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "C+" || grade7.value == "c+")
    {
        actualval7 = 2;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "C" || grade7.value == "c")
    {
        actualval7 = 2;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "C-" || grade7.value == "c-")
    {
        actualval7 = 2;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "D+" || grade7.value == "d+")
    {
        actualval7 = 1;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "D" || grade7.value == "d")
    {
        actualval7 = 1;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "D-" || grade7.value == "d-")
    {
        actualval7 = 1;
        classnum = classnum+1;
        validEntry7 = true;
    }
    else if(grade7.value == "F" || grade7.value == "f")
    {
        actualval7 = 0;
        classnum = classnum+1;
        validEntry7 = true;
    }
    
    
    
    
    if(grade8.value == "A+" || grade8.value == "a+")
    {
        actualval8 = 4;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "A" || grade8.value == "a")
    {
        actualval8 = 4;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "A-" || grade8.value == "a-")
    {
        actualval8 = 4;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "B+" || grade8.value == "b+")
    {
        actualval8 = 3;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "B" || grade8.value == "b")
    {
        actualval8 = 3;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "B-" || grade8.value == "b-")
    {
        actualval8 = 3;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "C+" || grade8.value == "c+")
    {
        actualval8 = 2;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "C" || grade8.value == "c")
    {
        actualval8 = 2;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "C-" || grade8.value == "c-")
    {
        actualval8 = 2;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "D+" || grade8.value == "d+")
    {
        actualval8 = 1;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "D" || grade8.value == "d")
    {
        actualval8 = 1;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "D-" || grade8.value == "d-")
    {
        actualval8 = 1;
        classnum = classnum+1;
        validEntry8 = true;
    }
    else if(grade8.value == "F" || grade8.value == "f")
    {
        actualval8 = 0;
        classnum = classnum+1;
        validEntry8 = true;
    }
    
    
    
    
    if(validEntry1 == true && validEntry2 == true && validEntry3 == true && validEntry4 == true && validEntry5 == true && validEntry6 == true && validEntry7 == true && validEntry8 == true)
    {
        var actualvaltotal = actualval1 + actualval2 + actualval3 + actualval4 + actualval5 + actualval6 + actualval7 + actualval8;
        studentGPA = actualvaltotal / classnum
        document.getElementById("changingText").innerHTML = "Your GPA is a" + " " + studentGPA + "!";
    }
    else
    {
        document.getElementById("changingText").innerHTML = "Invalid grade(s). Try Again";
    }
    
}






function goBackToGradeSelection(){

window.location = "testScores.html";


}

function backToMenu(){

window.location = "index.html";

}



function loadFive(){

    window.location = "5scale.html";

}

function backToActSelection(){

window.location = "actorsat.html";

}

function calculateSatScore(){
    
    var score1 = document.getElementById("scoreOne").value;
    var score2 = document.getElementById("scoreTwo").value;
    var score3 = document.getElementById("scoreThree").value;
    
    
    
    var totalsubscores = parseInt(score1) + parseInt(score2) + parseInt(score3);
    
    
    
    
    
    
    if(score1>800 || score2>800 || score3>800 || score1<200 || score2<200 || score3<200)
    {
        document.getElementById("actScore").innerHTML = "Invalid entry(ies). Try again.";
    }
    else if(score1 == "" || score2 == "" || score3 == "")
    {
        document.getElementById("actScore").innerHTML = "Invalid entry(ies). Try again.";
    }
    else
    {
        document.getElementById("actScore").innerHTML = "Your SAT score is a" + " " + totalsubscores + "!";
    }
    
    
}

function calculate5scale()
{
    
    var classnum = 0;
    
    var actualval1 = 0;
    var actualval2 = 0;
    var actualval3 = 0;
    var actualval4 = 0;
    var actualval5 = 0;
    var actualval6 = 0;
    var actualval7 = 0;
    var actualval8 = 0;
    
    
    var grade1 = document.getElementById("firstClass");
    var grade2 = document.getElementById("secondClass");
    var grade3 = document.getElementById("thirdClass");
    var grade4 = document.getElementById("fourthClass");
    var grade5 = document.getElementById("fifthClass");
    var grade6 = document.getElementById("sixthClass");
    var grade7 = document.getElementById("seventhClass");
    var grade8 = document.getElementById("eighthClass");
    
    if(grade1.value == "A+")
    {
        actualval1 = 5;
        classnum = classnum+1;
    }
    else if(grade1.value == "A")
    {
        actualval1 = 5;
        classnum = classnum+1;
    }
    else if(grade1.value == "A-")
    {
        actualval1 = 4.7;
        classnum = classnum+1;
    }
    else if(grade1.value == "B+")
    {
        actualval1 = 4.3;
        classnum = classnum+1;
    }
    else if(grade1.value == "B")
    {
        actualval1 = 4;
        classnum = classnum+1;
    }
    else if(grade1.value == "B-")
    {
        actualval1 = 3.7;
        classnum = classnum+1;
    }
    else if(grade1.value == "C+")
    {
        actualval1 = 3.3;
        classnum = classnum+1;
    }
    else if(grade1.value == "C")
    {
        actualval1 = 3;
        classnum = classnum+1;
    }
    else if(grade1.value == "C-")
    {
        actualval1 = 2.7;
        classnum = classnum+1;
    }
    else if(grade1.value == "D+")
    {
        actualval1 = 1.3;
        classnum = classnum+1;
    }
    else if(grade1.value == "D")
    {
        actualval1 = 1;
        classnum = classnum+1;
    }
    else if(grade1.value == "D-")
    {
        actualval1 = 0.7;
        classnum = classnum+1;
    }
    else if(grade1.value == "F")
    {
        actualval1 = 0;
        classnum = classnum+1;
    }
    
    
    if(grade2.value == "A+")
    {
        actualval2 = 5;
        classnum = classnum+1;
    }
    else if(grade2.value == "A")
    {
        actualval2 = 5;
        classnum = classnum+1;
    }
    else if(grade2.value == "A-")
    {
        actualval2 = 4.7;
        classnum = classnum+1;
    }
    else if(grade2.value == "B+")
    {
        actualval2 = 4.3;
        classnum = classnum+1;
    }
    else if(grade2.value == "B")
    {
        actualval2 = 4;
        classnum = classnum+1;
    }
    else if(grade2.value == "B-")
    {
        actualval2 = 3.7;
        classnum = classnum+1;
    }
    else if(grade2.value == "C+")
    {
        actualval2 = 3.3;
        classnum = classnum+1;
    }
    else if(grade2.value == "C")
    {
        actualval2 = 3;
        classnum = classnum+1;
    }
    else if(grade2.value == "C-")
    {
        actualval2 = 2.7;
        classnum = classnum+1;
    }
    else if(grade2.value == "D+")
    {
        actualval2 = 1.3;
        classnum = classnum+1;
    }
    else if(grade2.value == "D")
    {
        actualval2 = 1;
        classnum = classnum+1;
    }
    else if(grade2.value == "D-")
    {
        actualval2 = 0.7;
        classnum = classnum+1;
    }
    else if(grade2.value == "F")
    {
        actualval2 = 0;
        classnum = classnum+1;
    }
    
    
    
    
    if(grade3.value == "A+")
    {
        actualval3 = 5;
        classnum = classnum+1;
    }
    else if(grade3.value == "A")
    {
        actualval3 = 5;
        classnum = classnum+1;
    }
    else if(grade3.value == "A-")
    {
        actualval3 = 4.7;
        classnum = classnum+1;
    }
    else if(grade3.value == "B+")
    {
        actualval3 = 4.3;
        classnum = classnum+1;
    }
    else if(grade3.value == "B")
    {
        actualval3 = 4;
        classnum = classnum+1;
    }
    else if(grade3.value == "B-")
    {
        actualval3 = 3.7;
        classnum = classnum+1;
    }
    else if(grade3.value == "C+")
    {
        actualval3 = 3.3;
        classnum = classnum+1;
    }
    else if(grade3.value == "C")
    {
        actualval3 = 3;
        classnum = classnum+1;
    }
    else if(grade3.value == "C-")
    {
        actualval3 = 2.7;
        classnum = classnum+1;
    }
    else if(grade3.value == "D+")
    {
        actualval3 = 1.3;
        classnum = classnum+1;
    }
    else if(grade3.value == "D")
    {
        actualval3 = 1;
        classnum = classnum+1;
    }
    else if(grade3.value == "D-")
    {
        actualval3 = 0.7;
        classnum = classnum+1;
    }
    else if(grade3.value == "F")
    {
        actualval3 = 0;
        classnum = classnum+1;
    }
    
    
    
    if(grade4.value == "A+")
    {
        actualval4 = 5;
        classnum = classnum+1;
    }
    else if(grade4.value == "A")
    {
        actualval4 = 5;
        classnum = classnum+1;
    }
    else if(grade4.value == "A-")
    {
        actualval4 = 4.7;
        classnum = classnum+1;
    }
    else if(grade4.value == "B+")
    {
        actualval4 = 4.3;
        classnum = classnum+1;
    }
    else if(grade4.value == "B")
    {
        actualval4 = 4;
        classnum = classnum+1;
    }
    else if(grade4.value == "B-")
    {
        actualval4 = 3.7;
        classnum = classnum+1;
    }
    else if(grade4.value == "C+")
    {
        actualval4 = 3.3;
        classnum = classnum+1;
    }
    else if(grade4.value == "C")
    {
        actualval4 = 3;
        classnum = classnum+1;
    }
    else if(grade4.value == "C-")
    {
        actualval4 = 2.7;
        classnum = classnum+1;
    }
    else if(grade4.value == "D+")
    {
        actualval4 = 1.3;
        classnum = classnum+1;
    }
    else if(grade1.value == "D")
    {
        actualval4 = 1;
        classnum = classnum+1;
    }
    else if(grade4.value == "D-")
    {
        actualval4 = 0.7;
        classnum = classnum+1;
    }
    else if(grade4.value == "F")
    {
        actualval4 = 0;
        classnum = classnum+1;
    }
    
    
    
    if(grade5.value == "A+")
    {
        actualval5 = 5;
        classnum = classnum+1;
    }
    else if(grade5.value == "A")
    {
        actualval5 = 5;
        classnum = classnum+1;
    }
    else if(grade5.value == "A-")
    {
        actualval5 = 4.7;
        classnum = classnum+1;
    }
    else if(grade5.value == "B+")
    {
        actualval5 = 4.3;
        classnum = classnum+1;
    }
    else if(grade5.value == "B")
    {
        actualval5 = 4;
        classnum = classnum+1;
    }
    else if(grade5.value == "B-")
    {
        actualval5 = 3.7;
        classnum = classnum+1;
    }
    else if(grade5.value == "C+")
    {
        actualval5 = 3.3;
        classnum = classnum+1;
    }
    else if(grade5.value == "C")
    {
        actualval5 = 3;
        classnum = classnum+1;
    }
    else if(grade5.value == "C-")
    {
        actualval5 = 2.7;
        classnum = classnum+1;
    }
    else if(grade5.value == "D+")
    {
        actualval5 = 1.3;
        classnum = classnum+1;
    }
    else if(grade5.value == "D")
    {
        actualval5 = 1;
        classnum = classnum+1;
    }
    else if(grade5.value == "D-")
    {
        actualval5 = 0.7;
        classnum = classnum+1;
    }
    else if(grade5.value == "F")
    {
        actualval5 = 0;
        classnum = classnum+1;
    }
    
    
    
    if(grade6.value== "A+")
    {
        actualval6 = 5;
        classnum = classnum+1;
    }
    else if(grade6.value == "A")
    {
        actualval6 = 5;
        classnum = classnum+1;
    }
    else if(grade6.value == "A-")
    {
        actualval6 = 4.7;
        classnum = classnum+1;
    }
    else if(grade6.value == "B+")
    {
        actualval6 = 4.3;
        classnum = classnum+1;
    }
    else if(grade6.value == "B")
    {
        actualval6 = 4;
        classnum = classnum+1;
    }
    else if(grade6.value == "B-")
    {
        actualval6 = 3.7;
        classnum = classnum+1;
    }
    else if(grade6.value == "C+")
    {
        actualval6 = 3.3;
        classnum = classnum+1;
    }
    else if(grade6.value == "C")
    {
        actualval6 = 3;
        classnum = classnum+1;
    }
    else if(grade6.value == "C-")
    {
        actualval6 = 2.7;
        classnum = classnum+1;
    }
    else if(grade6.value == "D+")
    {
        actualval6 = 1.3;
        classnum = classnum+1;
    }
    else if(grade6.value == "D")
    {
        actualval6 = 1;
        classnum = classnum+1;
    }
    else if(grade6.value == "D-")
    {
        actualval6 = 0.7;
        classnum = classnum+1;
    }
    else if(grade6.value == "F")
    {
        actualval6 = 0;
        classnum = classnum+1;
    }
    
    
    
    if(grade7.value == "A+")
    {
        actualval7 = 5;
        classnum = classnum+1;
    }
    else if(grade7.value == "A")
    {
        actualval7 = 5;
        classnum = classnum+1;
    }
    else if(grade7.value == "A-")
    {
        actualval7 = 4.7;
        classnum = classnum+1;
    }
    else if(grade7.value == "B+")
    {
        actualval7 = 4.3;
        classnum = classnum+1;
    }
    else if(grade7.value == "B")
    {
        actualval7 = 4;
        classnum = classnum+1;
    }
    else if(grade7.value == "B-")
    {
        actualval7 = 3.7;
        classnum = classnum+1;
    }
    else if(grade7.value == "C+")
    {
        actualval7 = 3.3;
        classnum = classnum+1;
    }
    else if(grade7.value == "C")
    {
        actualval7 = 3;
        classnum = classnum+1;
    }
    else if(grade7.value == "C-")
    {
        actualval7 = 2.7;
        classnum = classnum+1;
    }
    else if(grade7.value == "D+")
    {
        actualval7 = 1.3;
        classnum = classnum+1;
    }
    else if(grade7.value == "D")
    {
        actualval7 = 1;
        classnum = classnum+1;
    }
    else if(grade7.value == "D-")
    {
        actualval7 = 0.7;
        classnum = classnum+1;
    }
    else if(grade7.value == "F")
    {
        actualval7 = 0;
        classnum = classnum+1;
    }
    
    
    
    if(grade8.value == "A+")
    {
        actualval8 = 5;
        classnum = classnum+1;
    }
    else if(grade8.value== "A")
    {
        actualval8 = 5;
        classnum = classnum+1;
    }
    else if(grade8.value == "A-")
    {
        actualval8 = 4.7;
        classnum = classnum+1;
    }
    else if(grade8.value == "B+")
    {
        actualval8 = 4.3;
        classnum = classnum+1;
    }
    else if(grade8.value == "B")
    {
        actualval8 = 4;
        classnum = classnum+1;
    }
    else if(grade8.value == "B-")
    {
        actualval8 = 3.7;
        classnum = classnum+1;
    }
    else if(grade8.value == "C+")
    {
        actualval1 = 3.3;
        classnum = classnum+1;
    }
    else if(grade8.value == "C")
    {
        actualval8 = 3;
        classnum = classnum+1;
    }
    else if(grade8.value == "C-")
    {
        actualval8 = 2.7;
        classnum = classnum+1;
    }
    else if(grade8.value == "D+")
    {
        actualval8 = 1.3;
        classnum = classnum+1;
    }
    else if(grade8.value == "D")
    {
        actualval8 = 1;
        classnum = classnum+1;
    }
    else if(grade8.value == "D-")
    {
        actualval8 = 0.7;
        classnum = classnum+1;
    }
    else if(grade8.value == "F")
    {
        actualval8 = 0;
        classnum = classnum+1;
    }
    
    
    var actualvaltotal = actualval1 + actualval2 + actualval3 + actualval4 + actualval5 + actualval6 + actualval7 + actualval8;
    console.log(actualvaltotal)
    studentGPA = actualvaltotal / classnum
    document.getElementById("changingText").innerHTML = "Your GPA is a" + " " + studentGPA + "!";
    
    
}

function openStudentResources(){

window.location = "studentResources.html";

}

function testTipOne(){

window.location = "testTipOne.html";

}

function testTipTwo(){

window.location = "testTipTwo.html";

}

function testTipThree(){

window.location = "testTipThree.html";

}

function testTipFour(){

window.location = "testTipFour.html";

}

function testTipFive(){

window.location = "testTipFive.html";

}

function satSelect(){

window.location = "satPage.html";

}

function faqOne(){

window.location = "faqOne.html";

}

function faqTwo(){

window.location = "faqTwo.html";

}

function faqThree(){

window.location = "faqThree.html";

}

function faqFour(){

window.location = "faqFour.html";
    
}

function faqFive(){

window.location = "faqFive.html";

}



var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
