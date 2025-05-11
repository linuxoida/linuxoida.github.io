let askWord = [];

let exerciseAmountString = '<form><label >Кол-во заданий: </label><select  id="exerciseAmountNum" >';
for (let i = 1; i <= 100; i++) {
	exerciseAmountString += '<option value="' + i + '">' + i + '</option>';
}
exerciseAmountString += '</select> <input type="button" onclick = "exercise()" value="✔" /></form>';


//document.getElementById('exerciseAmount').innerHTML += exerciseAmountString;
$('#exerciseAmount').append(exerciseAmountString);

const typeSeven = () => {
    let outputText = '';
    let outputCorrectAnswer = '';
    const randExerciseType = Math.floor(Math.random() * 3); // выпадет 0 - тип задания с сайтами, 1 - тип задания с почтами, 2 - айпишники
    //const randExerciseType = 2;
    if (randExerciseType === 0) {
        const protocolBank = ['http', 'https', 'ftp'];
        const serverNameBank = {
            'ru': ['yandex', 'gosuslugi', 'rutube', 'beeline', 'megafon', 'yota', 'mts', 'sberbank', 'ruwiki', 'kommersant', 'hh', 'avito', 'otvet.mail', 'sdamgia', 'vk', 'ozon', 'wildberries'],
            'com': ['duolingo', 'google', 'youtube', 'bing', 'chatgpt', 'gmail', 'mail.google', 'office', 'microsoft', 'samsung', 'apple', 'aliexpess', 'weather'],
            'org': ['web.telegram', 'wikipedia', 'definition', 'unicef', 'wwf', 'apache', 'creativecommons', 'linuxfoundation', 'eff']
        }
        const fileNameBank = {
            'html': ['index', 'help', 'ratings', 'tops'],
            'js': ['script', 'sidebar', 'header', 'footer'],
            'css': ['style', 'styles', 'dark-theme', 'light-theme'],
            'svg': ['user-photo', 'menu-sidebar', 'theme-switch', 'favicon'],
            'png': ['start-photo', 'user-photo', 'example', 'favicon'],
            'jpg': ['start-photo', 'user-photo', 'example', 'favicon'],
            'jpeg': ['start-photo', 'user-photo', 'example', 'favicon'],
            'mp3': ['background-sound', 'event-sound', 'example'],
            'mp4': ['background-video', 'event-video', 'example', 'presentation', 'idea'],
            'exe': ['installer', 'app', 'programm', 'access'],
            'apk': ['installer', 'app', 'programm', 'application']
        }
        const randProtocol = protocolBank[Math.floor(Math.random() * protocolBank.length)];
        //выбирается рандомный протокол из банка протоколов для задания
        const randDomen = Object.keys(serverNameBank)[Math.floor(Math.random() * Object.keys(serverNameBank).length)];
        //выбирается рандомный домен для того чтобы далее сгенерировать рандомное доменное имя с этим доменом
        const randServerName = serverNameBank[randDomen][Math.floor(Math.random() * serverNameBank[randDomen].length)];
        //выбирается рандомное доменное имя исходя из того какой домен сгенерировался до этого
        const randFileExtension = Object.keys(fileNameBank)[Math.floor(Math.random() * Object.keys(fileNameBank).length)];
        //выбирается рандомное расширение файла для того чтобы далее сгенерировать имя файла в соответствии с этим расширением
        const randFileName = fileNameBank[randFileExtension][Math.floor(Math.random() * fileNameBank[randFileExtension].length)];
        //выбирается рандомное название файла в соответствии с тем какое сгенерировалось расширение 
        const varietiesBank = [randProtocol, '://', randServerName, `.${randDomen}`, '/', randFileName, `.${randFileExtension}`];
        let array = [...varietiesBank];
        let temp = ['1', '2', '3', '4', '5', '6', '7'];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
            [array[i], array[j]] = [array[j], array[i]];
        }
        const varietiesObject = {
            '1': [array[0], temp[0]],
            '2': [array[1], temp[1]],
            '3': [array[2], temp[2]],
            '4': [array[3], temp[3]],
            '5': [array[4], temp[4]],
            '6': [array[5], temp[5]],
            '7': [array[6], temp[6]]
        }
        const keys = Object.keys(varietiesObject);
        for (let i = 0; i < keys.length; i++) {
            for (let j = 0; j < keys.length - i - 1; j++) {
                if (varietiesObject[keys[j]][1] > varietiesObject[keys[j + 1]][1]) {
                    [keys[j], keys[j + 1]] = [keys[j + 1], keys[j]]
                }
            }
        }
        outputText = `Доступ к файлу <b>${randFileName}.${randFileExtension}</b>, находящемуся на сервере <b>${randServerName}.${randDomen}</b>, осуществляется по протоколу <b>${randProtocol}</b>. Фрагменты адреса файла закодированы цифрами от 1 до 7. Запишите последовательность этих цифр, кодирующую адрес указанного файла в сети Интернет.<br>1) ${array[0]}<br>2) ${array[1]}<br>3) ${array[2]}<br>4) ${array[3]}<br>5) ${array[4]}<br>6) ${array[5]}<br>7) ${array[6]}`;
        outputCorrectAnswer = keys.join('');
    }
    else if (randExerciseType === 1) {
        const serverNameBank = {
            'ru': ['yandex', 'mail', 'vk', 'rambler', 'rsvpu', 'urfu', 'inbox', 'bk', 'email'],
            'com': ['outlook', 'gmail', 'live', 'hotmail', 'icloud', 'yahoo', 'inbox', 'email', 'mail'],
            'pl': ['wp', 'onet', 'interia', 'poczta.onet', 'o2', 'gazeta']
        }
        const firstNamePart = {
            'male': ['nikita', 'vasilij', 'wiktor', 'mateusz', 'aleksander', 'maksim', 'iwan', 'artiom', 'daniil', 'michail', 'dmitrij', 'pawel', 'lech', 'lew', 'ruslan', 'jewgenij', 'wladimir', 'grzegorz', 'jaroslaw', 'kaziemierz', 'mieczyslaw', 'ludomir', 'mieszko', 'miroslaw', 'radoslaw', 'radzimir', 'przemyslaw', 'slawomir', 'stanislaw', 'wojciech', 'wlodziemierz'],
            'female': ['anna', 'wiktorija', 'marina', 'agnieszka', 'joanna', 'katarzyna', 'barbara', 'malgorzata', 'antonina', 'helena', 'jaroslawa', 'zuzanna', 'julia', 'angela', 'zofia', 'hanna', 'natalia', 'aleksandra', 'maja', 'ewa', 'ksenija', 'angelina', 'walentina']
        };
        const secondNamePart = {
            'male': ['alekseew', 'nowak', 'wojcik', 'kowalczyk', 'kaminski', 'lewandowski', 'szymanski', 'wozniak', 'dabrowski', 'jankowski', 'krawczyk', 'kaczmarek', 'wisniewski', 'kowalski', 'raszewski', 'rawicki', 'janiszewski'],
            'female': ['alekseewa', 'nowak', 'wojcik', 'kowalczyk', 'kaminska', 'lewandowska', 'szymanska', 'wozniak', 'dabrowska', 'jankowska', 'krawczyk', 'kaczmarek', 'wisniewska', 'kowalska', 'raszewska', 'rawicka', 'janiszewska']
        };
        const gender = (Math.floor(Math.random() * 2)) ? 'male' : 'female';
        const randFirstname = firstNamePart[gender][Math.floor(Math.random() * firstNamePart[gender].length)];
        const randSecondname = secondNamePart[gender][Math.floor(Math.random() * secondNamePart[gender].length)];
        const serverNameBankKeys = Object.keys(serverNameBank);
        const randMailDomen = serverNameBankKeys[Math.floor(Math.random() * serverNameBankKeys.length)];
        const randMailName = serverNameBank[randMailDomen][Math.floor(Math.random() * serverNameBank[randMailDomen].length)];
        const randNumber = Math.floor(Math.random() * (2010 - 1960) + 1960);
        const varietiesBank = [randFirstname, `.${randSecondname}`, randNumber, '@', `${randMailName}.`, randMailDomen];
        let array = [...varietiesBank];
        let temp = ['1', '2', '3', '4', '5', '6'];
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
            [array[i], array[j]] = [array[j], array[i]];
        }
        const varietiesObject = {
            '1': [array[0], temp[0]],
            '2': [array[1], temp[1]],
            '3': [array[2], temp[2]],
            '4': [array[3], temp[3]],
            '5': [array[4], temp[4]],
            '6': [array[5], temp[5]],
        }
        const keys = Object.keys(varietiesObject);
        for (let i = 0; i < keys.length; i++) {
            for (let j = 0; j < keys.length - i - 1; j++) {
                if (varietiesObject[keys[j]][1] > varietiesObject[keys[j + 1]][1]) {
                    [keys[j], keys[j + 1]] = [keys[j + 1], keys[j]]
                }
            }
        }
        if (Math.floor(Math.random() * 2)) {
            outputText = `На сервере <b>${randMailName}.${randMailDomen}</b> находится почтовый ящик <b>${randFirstname}.${randSecondname}${randNumber}</b>. Фрагменты адреса электронной почты закодированы цифрами от 1 до 6. Запишите последовательность букв, кодирующую этот адрес.<br>1) ${array[0]}<br>2) ${array[1]}<br>3) ${array[2]}<br>4) ${array[3]}<br>5) ${array[4]}<br>6) ${array[5]}`;
        } else {
            outputText = `Почтовый ящик <b>${randFirstname}.${randSecondname}${randNumber}</b> находится на сервере <b>${randMailName}.${randMailDomen}</b>. В таблице фрагменты адреса электронной почты закодированы цифрами от 1 до 6. Запишите последовательность цифр, кодирующую этот адрес.<br>1) ${array[0]}<br>2) ${array[1]}<br>3) ${array[2]}<br>4) ${array[3]}<br>5) ${array[4]}<br>6) ${array[5]}`;
        }
        outputCorrectAnswer = keys.join('');
    }
    else if (randExerciseType == 2) { 
        try {
            outputText = '';
            const ipAddressOctets = [
                Math.floor(Math.random() * (100 - 30) + 30),
                Math.floor(Math.random() * (100 - 30) + 30),
                Math.floor(Math.random() * (100 - 30) + 30),
                Math.floor(Math.random() * (100 - 30) + 30)
            ];
            const stringIPaddress = ipAddressOctets.join('.')
            const addressDivided = [stringIPaddress.slice(0, 4), stringIPaddress.slice(4, 7), stringIPaddress.slice(7, 9), stringIPaddress.slice(9)];

            array = [...addressDivided];
            let temp = ['А', 'Б', 'В', 'Г'];
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [temp[i], temp[j]] = [temp[j], temp[i]];
                [array[i], array[j]] = [array[j], array[i]];
            }
            const varietiesObject = {
                'А': [array[0], temp[0]],
                'Б': [array[1], temp[1]],
                'В': [array[2], temp[2]],
                'Г': [array[3], temp[3]]
            }
            
            const keys = Object.keys(varietiesObject);
            for (let i = 0; i < keys.length; i++) {
                for (let j = 0; j < keys.length - i - 1; j++) {
                    if (varietiesObject[keys[j]][1] > varietiesObject[keys[j + 1]][1]) {
                        [keys[j], keys[j + 1]] = [keys[j + 1], keys[j]];
                    }
                }
            }
            outputText += 'При передаче файлов в сети перемешались данные. Есть фрагменты IP-адреса отправителя, которые обозначены буквами А, Б, В, Г:<br>';
            outputText += `<div class='tableManage'><table><thead><tr><th>А</th><th>Б</th><th>В</th><th>Г</th></tr></thead><tbody><tr><td>${array[0]}</td><td>${array[1]}</td><td>${array[2]}</td><td>${array[3]}</td></tr></tbody></table></div>`;
            outputText += '<br>Восстановите IP-адрес. В ответе укажите последовательность букв, обозначающих фрагменты, в порядке, соответствующем IP-адресу.';
            outputCorrectAnswer = keys.join('');
        } catch (error) {
            console.log(error)
        }

    }
    return [outputText, outputCorrectAnswer];
}

let Amount = 0;
function exercise () {
	Amount = document.getElementById('exerciseAmountNum').value
	document.getElementById('exerciseAmount').innerHTML = ''
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise1').innerHTML += '<div style = "margin-top:1em;"id = "example' + Num + '"></div><br><div class="form-example" ><label for="name" style = "margin-right: 0.3em;">Ответ:  </label><input type="text" onkeydown="if (event.keyCode == ' + 13 + '){ attempt(' + Num +');}" name="name" id="otvetPole' + Num + '" required /><input type="button" id = "knopka' + Num +'" onclick = "attempt(' + Num + ')" value="✔" /></div><div id = "otvet' + Num + '"></div><div style="border: 1px solid #aaa; margin-top: 1em;"></div>'
			
		document.getElementById('otvetPole' + Num ).value = ''
		document.getElementById('otvet' + Num ).innerHTML = ''
		let output = '';
		output = typeSeven(Num);
		askWord[Num] = output[1]
		document.getElementById('example' + Num ).innerHTML += `<strong>${Num + 1}.</strong> ${output[0]}`;
		
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