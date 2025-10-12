let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString
$("#exerciseAmount").html(exerciseAmountString);
function exerciseTypeOne(Num) {
	const bits = [8,16,32]
	const kolvoBit = bits[Math.floor(Math.random() * 3)]
	let outputText ='<strong>' + (Num+1) + '.</strong> В одной из кодировок каждый символ кодируется ' + kolvoBit + ' битами.<br>Ученик записал текст: <br><br>"Города '
	let temp = Math.floor(Math.random() * country.length)
	outputText += country[temp] + ": "
	for(let i = 0; i < words[temp].length; i++) {
		outputText += words[temp][i] 
		if (i < words[temp].length - 1) {
			outputText += ', '
		}
		else {
			outputText += '"<br>'
		}
	}
	outputText += '<br>После этого ученик убрал из текста один из городов, а также ставшие лишними запятую и пробел. После этого размер предложения оказался на '
	const outputCorrectAnswer = words[temp][Math.floor(Math.random() * words[temp].length)]
	let kolvoBytes = (outputCorrectAnswer.length + 2) * kolvoBit / 8 
	outputText += kolvoBytes;
	if (kolvoBytes%10 == 1 && kolvoBytes%100 != 11) {
		outputText += ' байт';
	}
	else if ((kolvoBytes%10==2 && kolvoBytes%100 != 12)|| (kolvoBytes%10==3 && kolvoBytes%100 != 13) || (kolvoBytes%10==4 && kolvoBytes%100 != 14)) {
		outputText += ' байта';
	}
	else {
		outputText += ' байтов';
	}
	outputText += ' меньше чем было.<br><br>Напишите в ответе удалённое название города. Ответ должен быть с большой буквы.';
	return [outputText,outputCorrectAnswer];
}
function exerciseTypeTwo(Num) {
	const sentences =
            [
                'У лукоморья дуб зелёный',
                'Я сдам ОГЭ!!',
                'Что? Где? Когда?',
                'Аз, буки, веди',
                '20-го мая 1859',
                'Знание - сила!',
                'Привет, как дела?',
                'D=b²-4ac',
                '(a+b)*(a-b)'
            ]
        const bits = [8, 16, 32];
        const kolvoBit = bits[Math.floor(Math.random() * 3)];
        let outputText = `<strong>' + (Num+1) + '.</strong> В одной из кодировок каждый символ кодируется ${kolvoBit} битами. Определите размер в байтах следующего предложения в данной кодировке, не учитывая кавычки:<br><div style='text-align:center'>`;
        const Sentence = sentences[Math.floor(Math.random() * sentences.length)];
        outputText += '"' + Sentence + '"</div>';
        const outputCorrectAnswer = (Sentence.length * kolvoBit / 8).toString();
        return [outputText, outputCorrectAnswer];
}
function exerciseTypeThree(Num) {
	const words =
            {
                '2': ['ёж', 'юг', 'яд', 'ад', 'щи', 'ум', 'ил', ],
                '3': ['бык','дом','лес','ива','нос','мир','сон','сыр','ухо','кот','шок','мел','бег','бой','вид','газ','лак','рис','оса','миф','меч'],
                '4': ['ёлка','ёжик','авто','авиа','азия','баня','бант','бобр','бомж','бред','бюро','ватт','вдох','вера','вина','вода','волк','враг','вход','герц','гиря','гнев','гром','заяц','заря','звон','зима','июнь','июль','змея','зять','идея','йога','йети','йота','клёв','клён','конь','море','маяк','меню','мясо','мята','наём','небо','няня','нить','ночь','ноль','овёс','осёл','отёк','орёл','пень','пояс','рябь','роль','руль','слёт','съём','счёт','тёща','теле','улёт','утюг','утёс','хлеб','хрящ','цепь','цвет','цыпа','шлюз','швея','этюд','эпос','юань','юбка','юзер','яйцо','ямка','язык','язва','явно'],
                '5': ['актёр','амёба','афёра','акция','аллея','битьё','бедро','бадья','басня','башня','взаём','внаём','ведро','варяг','вафля','годно','гладь','грёзы','диван','егерь','ёмкий','жёлоб','залёт','затёс','затея','излёт','изъян','кулёк','котёл','капля','кашель','ларёк','мания','мафия','намёк','объём','почёт','осётр','отчёт','полёт','рация','ружьё','сапер','счёты','цапля','щучье','ябеда','ягода','ягуар','южный'],
                '6': ['апатия','аляска','берёза','бабуля','вахтёр','вдвоём','грядка','галдёж','далеко','дублёр','единый','ездить','жёлтый','жёстко','зверьё','запрет','изящно','йогурт','клёпка','костёр','легкий','лётчик','манёвр','маркер','отсчёт','огонёк','окунёк','подлёт','платёж','разъём','расчёт','твёрдо','тёмный','уберёг','утёнок','угроза','фикция','фуксия','хлопья','хлопок','шахтёр','штырёк','щёлочь','эгоист','юбиляр','юность','яблоко','яблоня'],
                '7': ['амнезия','амбиция','бутылёк','береста','василёк','верёвка','галёрка','гололёд','дешёвка','дирижёр','евразия','железка','жёсткий','зелёнка','заёмщик','избёнка','измятие','йоркшир','киселёк','копейка','ларёчек','лосёнок','магазин','манёвры','надёжно','наперёд','огнемёт','обёртка','паникёр','перелёт','решётка','ребятня','семёрка','свисток','топорик','тушёнка','улётный','учитель','фракция','франция','хитряга','церковь','цыплята','четверо','часовня','школьник','щенячий','эктения','этюдник','юстиция','югослав','ягнёнок','ягодник'],
                '8': ['академия','акулёнок','балансёр','бобрёнок','вахтёрка','вертолёт','гребёнка','дублёнка','единость','евросоюз','железняк','желтянка','застёжка','зверёнок','иерархия','импортёр','каптёрка','каскадёр','лёгкость','лифтёрша','маслёнок','магнезия','магнолия','налётчик','невдомёк','оленёнок','отчётный','планёрка','переплёт','разведка','режиссёр','сгущёнка','тигрёнок','учёность','фантазёр','фармация','харчевня','цыплёнок','циркуляр','черёмуха','четвёрка','шестёрка','щёточник','эволюция','экология','эпидемия','эрудиция','эссенция'],
                '9': ['отношение','результат','президент','состояние','программа','положение','федерация','искусство','структура','гражданин','начальник','изменение','население','спектакль','основание','экономика','сотрудник','продукция','хозяйство','множество','частность','профессор','поддержка','заявление','сравнение','выражение','революция','поведение','сожаление','стоимость','журналист','нарушение','заседание','поколение','противник','помещение','отделение','имущество','повышение','полковник','понимание','должность','установка','появление','получение','секретарь','сообщение','телевизор','концепция','лейтенант'],
                '10': ['информация','управление','количество','территория','специалист','требование','автомобиль','литература','содержание','технология','отсутствие','подготовка','республика','проведение','применение','разработка','показатель','исполнение','фотография','реализация','настроение','учреждение','выполнение','американец','заключение','исключение','обстановка','соглашение','достижение','назначение','творчество','инструмент','реальность','переговоры','увеличение','устройство','разрешение','губернатор','психология','наблюдение','недостаток','воспитание','начальство','инициатива','активность','библиотека','соединение','расстояние','объяснение','покупатель']
            };
        const bits = [8, 16, 32];
        const kolvoBit = bits[Math.floor(Math.random() * 3)];
        
        let randWords = {
            '2': words['2'][Math.floor(Math.random() * words['2'].length)],
            '3': words['3'][Math.floor(Math.random() * words['3'].length)],
            '4': words['4'][Math.floor(Math.random() * words['4'].length)],
            '5': words['5'][Math.floor(Math.random() * words['5'].length)],
            '6': words['6'][Math.floor(Math.random() * words['6'].length)],
            '7': words['7'][Math.floor(Math.random() * words['7'].length)],
            '8': words['8'][Math.floor(Math.random() * words['8'].length)],
            '9': words['9'][Math.floor(Math.random() * words['9'].length)],
            '10': words['10'][Math.floor(Math.random() * words['10'].length)]
        } 
        let randCorrectWordLength = Math.floor(Math.random() * (11 - 1) + 1);
        let outputCorrectAnswer = randWords[randCorrectWordLength];
        let numbersOfRandWords = ['2','3','4','5','6','7','8','9','10']
        numbersOfRandWords.sort(() => Math.random() - 0.5);
        let outputText = `<strong>' + (Num+1) + '.</strong> В одной из кодировок каждый символ кодируется ${kolvoBit} битами.<br>Студент составил текст из случайных слов: <br><br>
            "${randWords[numbersOfRandWords[0]]}, 
            ${randWords[numbersOfRandWords[1]]}, 
            ${randWords[numbersOfRandWords[2]]}, 
            ${randWords[numbersOfRandWords[3]]}, 
            ${randWords[numbersOfRandWords[4]]}, 
            ${randWords[numbersOfRandWords[5]]}, 
            ${randWords[numbersOfRandWords[6]]}, 
            ${randWords[numbersOfRandWords[7]]}, 
            ${randWords[numbersOfRandWords[8]]}"
        `;
        outputText += `<br><br>После этого ученик дублировал одно из слов в тексте, а также добавил дополнительный пробел. После этого размер предложения оказался на `;
        let kolvoBytes = (outputCorrectAnswer.length + 1) * kolvoBit / 8;
        outputText += kolvoBytes;
        if (kolvoBytes % 10 == 1 && kolvoBytes % 100 != 11) {
            outputText += ` байт`;
        }
        else if ((kolvoBytes % 10 == 2 && kolvoBytes % 100 != 12) || (kolvoBytes % 10 == 3 && kolvoBytes % 100 != 13) || (kolvoBytes % 10 == 4 && kolvoBytes % 100 != 14)) {
            outputText += ` байта`;
        }
        else {
            outputText += ` байтов`;
        }
        outputText += ` больше чем было.<br><br>Напишите в ответе добавленное слово.`;
        return [outputText, outputCorrectAnswer];
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
		randomExercise = Math.floor(Math.random() * 3);
		let output = '';
		if (randomExercise == 0)  {
			output = exerciseTypeOne(Num);
		} else if (randomExercise == 1) {
			output = exerciseTypeTwo(Num);
		} else if (randomExercise == 2) {
			output = exerciseTypeThree(Num);
			
		}
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

	
