const Amount = 3
function exerciseTypeOne () {
	output = exercicesBase1[Math.floor(Math.random() * exercicesBase1.length)]
	return output;
}
function exerciseTypeTwo () {
	output = exercicesBase2[Math.floor(Math.random() * exercicesBase2.length)]
	return output;
}
function exerciseTypeThree () {
	output = exercicesBase3[Math.floor(Math.random() * exercicesBase3.length)]
	return output;
}
function exercise () {
	for (let Num = 0; Num < Amount; Num++) {
		document.getElementById('exercise').innerHTML += '<h2>Задание №' + (Num+1) + '</h2>';
			
		let output = '';
		if (Num == 0) {
			output = exerciseTypeOne();
		}
		if (Num == 1) {
			output = exerciseTypeTwo();
		}
		if (Num == 2) {
			output = exerciseTypeThree();
		}
		document.getElementById('exercise').innerHTML += '<div class="zadaniya">' + output + '</div>';
		
	}
	
}

exercise ();