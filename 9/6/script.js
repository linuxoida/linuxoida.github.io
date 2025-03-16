let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString;
$('#exerciseAmount').append(exerciseAmountString);






function logicalExpression(x,y,notLeft,signLeft,left,AndOr,notRight,signRight,right) {
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
            RightExpression = y > right;
            break;
        case "<":
            RightExpression = y < right;
            break;
        case ">=":
            RightExpression = y >= right;
            break;
        case "<=":
            RightExpression = y <= right;
            break;
    }
    if (AndOr == 'или') {
        return LeftExpression || RightExpression;
    }
    else if (AndOr == 'и') {
        return LeftExpression && RightExpression;
    }
    
}




function exerciseTypeOne(Num) {
    right = Math.floor(Math.random() * (15 - 5) + 5);
    left = Math.floor(Math.random()*((right-2) - 3) + 3);
    let outputText = `<b>${Num+1}.</b> Ниже приведена программа, записанная на двух языках программирования.`;
    const signs = ['>','<','>=','<='];
    const randNot = ['','не '];
    const randOrAnd = ['или','и']
    let outputCorrectAnswer = 0;
    let notLeft = randNot[Math.floor(Math.random()*2)];
    let notRight = randNot[Math.floor(Math.random()*2)];
    let signLeft = signs[Math.floor(Math.random()*4)];
    let signRight = signs[Math.floor(Math.random()*4)];
    let AndOr = randOrAnd[Math.floor(Math.random()*2)];
    outputText += "<div class='table_component' role='region' tabindex='0'><table><thead><tr><th>Алгоритмический язык</th><th>Python</th></tr></thead><tbody><tr style = 'font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace; '><td><b>алг</b><br><b>нач</b><br><b>цел</b> a, b<br><b>ввод</b> a<br><b>ввод</b> b<br><b>если</b> " + notLeft + "(a " + signLeft + " " + left + ") " + AndOr + " " + notRight + '(b ' + signRight + " " + right + ")<br><b>&nbsp&nbsp&nbsp&nbspто вывод</b> 'YES'<br><b>&nbsp&nbsp&nbsp&nbspиначе вывод</b> 'NO'<br><b>все</b><br><b>кон</b></td><td>a = int(input())<br>b = int(input())<br><b>if</b> " + ((notLeft === "не ") ? "not " : "") + "(a " + signLeft + " " + left + ") " + ((AndOr === "и") ? "and" : "or") + " " + ((notRight === "не ") ? "not " : "") + '(b ' + signRight + " " + right + "):<br><b>&nbsp&nbsp&nbsp&nbspprint</b>('YES')<br><b>else:</b><br><b>&nbsp&nbsp&nbsp&nbspprint</b>('NO')</td></tr></tbody></table></div>";
    //outputText += "<br>" + outputCorrectAnswer;
    let questionArray = [];
    let questionString = "<span style = 'font-family: Times New Roman; font-size: 1.2em; font-weight: 50;'>";
    for (let i = 0; i < 9; i++) {
        let temp = [Math.floor(Math.random() * (20 - (-10)) + (-10)),Math.floor(Math.random() * (20 - (-10)) + (-10))];
        questionArray.push(temp);
        questionString += `(${temp[0]}, ${temp[1]});&nbsp`;
        if (logicalExpression(temp[0],temp[1],notLeft,signLeft,left,AndOr,notRight,signRight,right)) {
            outputCorrectAnswer++;
        }
    }
    questionString += "</span>";
    outputText += `<br>Было проведено 9 запусков программы, при которых в качестве значений переменных a и b вводились следующие пары чисел:<div style = "text-align:center; margin: 1em 0 1em 0;">${questionString}</div>`;
    outputText += `Сколько было запусков, при которых программа напечатала «YES»?`;
    //`<div>${outputCorrectAnswer}</div>`;
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