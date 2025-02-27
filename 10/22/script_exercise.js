function randOctal() {
	return Math.floor(Math.random() * (256 - 16) + 16)
}
function toBytes(address) {
	let arr = address.split('.').map(Number)
	for (let i = 0; i < 4; i++) {
		arr[i] = String(arr[i])
		if (arr[i].toString().length < 8) {
			for (let j = 7; j > 0; j--) {
				if (arr[i].length < 8) {
					arr[i] = '0' + arr[i]
				}
			}

		} else {
			console.log(typeof arr[i])
			continue
		}

	}
	return arr.join(".")
}
let err_func1 = 0
let err_func2 = 0
let ip = []
function func1() {
	err_func1 = 1
	ip = []
	for (let i = 0; i < 4; i++) {
		ip.push(randOctal())
	}
	document.getElementById('ip').value = ip.join(".")
	let ipbin = []

	for (let i = 0; i < 4; i++) {
		ipbin.push(ip[i].toString(2))
	}
	const temp1 = ipbin.join(".")
	document.getElementById('ipbin').innerHTML = 'В двоичном коде: ' + toBytes(temp1)

}
let mask = []
function func2() {
	err_func2 = 1
	const maskNums = [128, 192, 224, 240, 248, 252, 254, 255];
	mask = [255];

	for (let i = 1; i < 4; i++) {
		if (mask[i - 1] === 255) {
			mask.push(maskNums[Math.floor(Math.random() * 8)]);
		} else {
			mask.push(0);
		}
	}

	const element = document.getElementById('mask');
	if (element) {
		element.value = mask.join(".");
	} else {
		console.error("Элемент с ID 'mask' не найден.");
	}
	let maskbin = []

	for (let i = 0; i < 4; i++) {
		maskbin.push(mask[i].toString(2))
	}
	const temp = maskbin.join(".")

	document.getElementById('maskbin').innerHTML = "В двоичном коде: " + toBytes(temp)
}
function attempt() {
	if (err_func1 == 1 && err_func2 == 1 && document.getElementById('address').value != '') {
		let otvet = []
		const elem = document.getElementById('address').value.split('.').map(Number)
		let counter = 0
		for (let i = 0; i < 4; i++) {
			otvet.push(ip[i] & mask[i])
			if (elem[i] == otvet[i]) {
				counter++
			}
		}
		if (counter == 4) {
			document.getElementById('otvet').innerHTML = 'Правильно!'
			document.getElementById('otvet').style.color = 'green'
		} else {
			document.getElementById('otvet').innerHTML = 'Неправильно, ответ: ' + otvet.join('.')
			document.getElementById('otvet').style.color = 'black'
		}
	}
	else {
		document.getElementById('otvet').style.color = 'red'
		document.getElementById('otvet').innerHTML = 'Ошибка'
	}
}
