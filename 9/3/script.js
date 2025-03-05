let askWord = [];

let exerciseAmountString = '<form><label >Выберите количество заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString;
$('#exerciseAmount').append(exerciseAmountString);

function logicalExpression(x,notLeft,signLeft,left,notRight,signRight,right) {
    let LeftExpression = false;
    let RightExpression = false;
    if (notLeft == "не ") {
        switch (signLeft) {
            case ">":
                signLeft = "<=";
                break;
            case "<":
                signLeft = ">=";
                break;
            case ">=":
                signLeft = "<";
                break;
            case "<=":
                signLeft = ">";
                break;
        }
    }
    if (notRight == "не ") {
        switch (signRight) {
            case ">":
                signRight = "<=";
                break;
            case "<":
                signRight = ">=";
                break;
            case ">=":
                signRight = "<";
                break;
            case "<=":
                signRight = ">";
                break;
        }
    }
    switch (signLeft) {
        case ">":
            LeftExpression = x > left;
            break;
        case "<":
            LeftExpression = x < left;
            break;
        case ">=":
            LeftExpression = x >= left;
            break;
        case "<=":
            LeftExpression = x <= left;
            break;
    }
    switch (signRight) {
        case ">":
            RightExpression = x > right;
            break;
        case "<":
            RightExpression = x < right;
            break;
        case ">=":
            RightExpression = x >= right;
            break;
        case "<=":
            RightExpression = x <= right;
            break;
    }
    
    return LeftExpression && RightExpression;
}




function exerciseTypeOne(Num) {
    right = Math.floor(Math.random() * (100 - 10) + 10);
    left = Math.floor(Math.random()*(right-2));
    let outputText = "<strong>" + (Num+1) + ".</strong> " +"Укажите в ответе ";
    let MinOrMax = '';
    if(Math.floor(Math.random()*2)) {
        outputText += "наименьшее";
        MinOrMax = false;
    }
    else {
        outputText += "наибольшее";
        MinOrMax = true;
    }
    outputText += " натуральное число x, для которого истинно это выражение:<br>";
    const signs = ['>','<','>=','<='];
    const randNot = ['','не '];
    let temp = false;
    let outputCorrectAnswer = '';
    let notLeft;
    let notRight;
    let signLeft;
    let signRight;
    //этот цикл - костыль, он генерирует до тех пор пока не будет решаемое выражение
    //нужно сделать так чтобы не выходило подобное: (x <= 15) и (x > 18); (x < 18) и не (x <= 33); (x <= 20) и (x >= 27)
    while (!temp) {
        notLeft = randNot[Math.floor(Math.random()*2)];
        notRight = randNot[Math.floor(Math.random()*2)];
        signLeft = signs[Math.floor(Math.random()*4)];
        signRight = signs[Math.floor(Math.random()*4)];
        if (MinOrMax) {
            for (let i = 0; i <= 100; i++) {
                if (logicalExpression(i,notLeft,signLeft,left,notRight,signRight,right)) {
                    outputCorrectAnswer = i;
                }
            }
        }
        else {
            for (let i = 100; i >= 0; i--) {
                if (logicalExpression(i,notLeft,signLeft,left,notRight,signRight,right)) {
                    outputCorrectAnswer = i;
                }
            }
        }
        if (outputCorrectAnswer >= 1 && outputCorrectAnswer <= 99) {
            temp = true;
        }
    }
    outputText += "<div style = 'margin-top:0.5em;text-align:center;'>" + notLeft + "(x " + signLeft + " " + left + ") и " + notRight + '(x ' + signRight + " " + right + ")" + "</div>";
    //outputText += "<br>" + outputCorrectAnswer;
    
	return [outputText,outputCorrectAnswer.toString()];
}








let Amount = 0;
function exercise () {
	Amount = document.getElementById('exerciseAmountNum').value
	document.getElementById('exerciseAmount').innerHTML = ''
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div style = "margin-top:1em;"id = "example' + Num + '"></div><br><div class="form-example" ><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
			
		document.getElementById('otvetPole' + Num ).value = ''
		document.getElementById('otvet' + Num ).innerHTML = ''
		//randomExercise = Math.floor(Math.random() * 3);
		let output = '';
		//if (randomExercise == 0 || randomExercise == 1 || randomExercise == 2)  {
			output = exerciseTypeOne(Num)
		//}
		//else if (randomExercise == 3) {
		//	output = exerciseTypeTwo(Num)
			
		//}
		askWord[Num] = output[1]
		document.getElementById('example' + Num ).innerHTML += output[0]
		
	}
	
}
let correct = [];
let incorrect = [];
for (let i = 0; i < 100; i++ ) {
	correct[i] = 0;
	incorrect[i] = 0;
}
function attempt(Num) {
		
		otvet = document.getElementById('otvetPole' + Num).value.toString();
		if (correct[Num] != 1) {
			if (otvet.trim().toLowerCase() == askWord[Num].trim().toLowerCase() ) {
				
				document.getElementById('otvet' + Num).innerHTML = '<br>✔ Правильно!<br>'
				document.getElementById('otvet' + Num).style.color = 'green'
				correct[Num] = 1
				document.getElementById('otvetPole' + Num).disabled  = true;
				document.getElementById('knopka' + Num).style.display  = 'none';
			}
			else if (otvet.trim() == '') {
				document.getElementById('otvet' + Num).innerHTML = ''
			}
			else {
				document.getElementById('otvet' + Num).innerHTML = '<br>✖ Неверно<br>'
				document.getElementById('otvet' + Num).style.color = 'red'
				incorrect[Num] += 1
				
			}
		}
		let correctCounter = 0;
		let incorrectCounter = 0;
		for (let i = 0; i < correct.length; i++ ) {
				correctCounter += correct[i]
		}
		for (let i = 0; i < incorrect.length; i++ ) {
				incorrectCounter += incorrect[i]
		}
		document.getElementById('counter').innerHTML = 'Правильных ответов: ' + correctCounter + ', неправильных: ' + incorrectCounter;
		percent = ((correctCounter/Amount)*100).toFixed(2);
		document.getElementById('counter').innerHTML += ' <br>Процент правильных ответов: ' + percent + '% ';
		
	}