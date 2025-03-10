//позиция робота записывается как 'ij', где i - номер строки с нуля, и j - номер элемента в строке
let height = 7;
let width = 7;
let output = '';
output += "<table><tbody>";
for (let i = 0; i < height; i++) {
    output += "<tr>";
    
    for (let j = 0; j < width; j++) {
        output += "<td id = " + (i + 1) + '' + (j + 1) + "></td>";
    }
    output += "</tr>";
}
output += "</table></tbody>";
$("#robot").append(output);
let current = "#12";
function toRight(currentPosition) {
    $(currentPosition).html(""); // стираю клетку в которой сейчас робот

    if (parseInt(currentPosition[2]) < width) {
        
        let i = parseInt(currentPosition[1]);
        let j = parseInt(currentPosition[2]) + 1;
        $("#" + i + '' + j).html("R");
        current = "#" + i.toString() + '' + j.toString();
        $("#buttonRight").attr("onclick","toRight(" + current + ")");

    }
    else {
        alert("Ошибка" + typeof(currentPosition) + currentPosition);
    }
}


$(current).html("R");
$("#inputField").html("<input id = 'buttonRight' type = 'button' onclick = 'toRight(" + current + ")' value = 'вправо'>");
alert(current[2])