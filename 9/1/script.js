let askWord = 0
function stranica () {
	document.getElementById('otvetPole').value = ''
	document.getElementById('otvet').innerHTML = ''
	const bits = [8,16,32]
	let kolvoBit = bits[Math.floor(Math.random() * 3)]
	let zadanie = 'В одной из кодировок каждый символ кодируется <strong>' + kolvoBit + '</strong> битами.<br>Ученик записал текст: <br><br>"Города '
	let temp = Math.floor(Math.random() * country.length)
	zadanie += country[temp] + ": "
	for(let i = 0; i < words[temp].length; i++) {
		zadanie += words[temp][i] 
		if (i < words[temp].length - 1) {
			zadanie += ', '
		}
		else {
			zadanie += '"<br>'
		}
	}
	zadanie += '<br>После этого ученик убрал из текста один из городов, а также ставшие лишними запятую и пробел. После этого размер предложения оказался на <strong>'
	askWord = words[temp][Math.floor(Math.random() * 8)]
	kolvoBytes = askWord.length * kolvoBit / 8 + 2
	zadanie += kolvoBytes + '</strong>' 
	if (kolvoBytes%10 == 1 && kolvoBytes%100 != 11) {
		zadanie += ' байт';
	}
	else if ((kolvoBytes%10==2 && kolvoBytes%100 != 12)|| (kolvoBytes%10==3 && kolvoBytes%100 != 13) || (kolvoBytes%10==4 && kolvoBytes%100 != 14)) {
		zadanie += ' байта';
	}
	else {
		zadanie += ' байтов';
	}
	zadanie += ' меньше чем было.<br><br>Напишите в ответе удалённое название города. Ответ должен быть с большой буквы.'
	document.getElementById('example').innerHTML = zadanie 

	
}
function attempt() {
		otvet = document.getElementById('otvetPole').value
		if (otvet == askWord) {
			
			document.getElementById('otvet').innerHTML = '<br>✔ Правильно!<br>'
			document.getElementById('otvet').style.color = 'green'
		}
		else {
			document.getElementById('otvet').innerHTML = '<br>✖ Неверно<br>'
			document.getElementById('otvet').style.color = 'red'
		}
	}
stranica()
