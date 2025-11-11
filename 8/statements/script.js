let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString
$("#exerciseAmount").html(exerciseAmountString);
function exerciseTypeOne(Num) {
    function logicalExpression(x,signLeft,left,signRight,right,evenOrOdd) {
        let LeftExpression = false;
        let RightExpression = false;
        switch (signLeft) {
            case ">":
                LeftExpression = x > left;
                break;
            case "<":
                LeftExpression = x < left;
                break;
            case "≥":
                LeftExpression = x >= left;
                break;
            case "≤":
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
            case "≥":
                RightExpression = x >= right;
                break;
            case "≤":
                RightExpression = x <= right;
                break;
        }
        if (evenOrOdd) {
            switch (evenOrOdd) {
                case 'чётное':
                    return LeftExpression && RightExpression && x % 2 == 0;
                case 'нечётное':
                    return LeftExpression && RightExpression && x % 2 == 1;
            }
        }
        else {
            return LeftExpression && RightExpression;
        }
    }
    evenCheck = false; //при true генерируется четность нечетность
    right = Math.floor(Math.random() * (100 - 10) + 10);
    left = Math.floor(Math.random()*((right-2) - 3) + 3);
    let outputText = `<strong>${Num+1}.</strong> Укажите в ответе `;
    let MinOrMax = '';
    if(Math.floor(Math.random()*2)) {
        outputText += "наименьшее";
        MinOrMax = false;
    }
    else {
        outputText += "наибольшее";
        MinOrMax = true;
    }
    outputText += " натуральное число, для которого подходит это уравнение:<br>";
    const signs = ['>','<','≥','≤'];
    const randNot = ['',''];
    const randEvenOdd = ['чётное','нечётное'];
    let temp = false;
    let outputCorrectAnswer = '';
    let signLeft;
    let signRight;
    let evenOrOdd;
    //этот цикл - костыль, он генерирует до тех пор пока не будет решаемое выражение
    //нужно сделать так чтобы не выходило подобное: (x <= 15) и (x > 18); (x < 18) и не (x <= 33); (x <= 20) и (x >= 27)
    while (!temp) {
        notLeft = randNot[Math.floor(Math.random()*2)];
        notRight = randNot[Math.floor(Math.random()*2)];
        signLeft = signs[Math.floor(Math.random()*4)];
        signRight = signs[Math.floor(Math.random()*4)];
        if (evenCheck) evenOrOdd = randEvenOdd[Math.floor(Math.random() * 2)];
        if (MinOrMax) {
            for (let i = 0; i <= 100; i++) {
                if (evenCheck) {
                    if (logicalExpression(i,signLeft,left,signRight,right,evenOrOdd)) {
                        outputCorrectAnswer = i;
                    }
                }
                else {
                    if (logicalExpression(i,signLeft,left,signRight,right)) {
                        outputCorrectAnswer = i;
                    }
                }
            }
        }
        else {
            for (let i = 100; i >= 0; i--) {
                if (evenCheck) {
                    if (logicalExpression(i,signLeft,left,signRight,right,evenOrOdd)) {
                        outputCorrectAnswer = i;
                    }
                }
                else {
                    if (logicalExpression(i,signLeft,left,signRight,right)) {
                        outputCorrectAnswer = i;
                    }
                }
            }
        }
        if (outputCorrectAnswer >= 3 && outputCorrectAnswer <= 97) {
            temp = true;
        }
    }
    outputText += "<div style = 'margin-top:0.5em;text-align:center;'>" + notLeft + "(Число " + signLeft + " " + left + ") и " + notRight + '(Число ' + signRight + " " + right + ")";
    if (evenCheck) {
        if (evenOrOdd == 'чётное') {
            outputText += " и (Число чётное)";
        }
        else if (evenOrOdd == 'нечётное') {
            outputText += " и (Число нечётное)";
        }
    }
    outputText += " = Истина</div>";
    //outputText += "<br>" + outputCorrectAnswer;
    
	return [outputText,outputCorrectAnswer.toString()];
}
let Amount = 0;
function exercise () {
	Amount = document.getElementById('exerciseAmountNum').value
	//Amount = $("#exerciseAmountNum").attr("value");
	document.getElementById('exerciseAmount').innerHTML = '';
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div  style = "margin-top: 1em;" id = "example' + Num + '"></div><br><div class="form-example"><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" name="name" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
		//$("#exercise1").append('<div id = "example' + Num + '"></div><br><div class="form-example"><input type="text" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="Проверить результат" /></div><div id = "otvet' + Num + '"></div><h2></h2>');
		document.getElementById('otvetPole' + Num ).value = ''
		//$("#otvetPole").attr("value","");
		document.getElementById('otvet' + Num ).innerHTML = ''
		//$("#otvet").html("");
		output = exerciseTypeOne(Num);
		askWord[Num] = output[1]
		//document.getElementById('example' + Num ).innerHTML += output[0]
		$("#example" + Num).append(output[0]);
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

	
