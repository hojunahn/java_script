// let tmp, hour, min, calc;
// tmp = prompt("시간 입력: ", "");
// hour = Number(tmp);
// tmp = prompt("분 입력: ", "");
// min = Number(tmp);
// calc = (hour * 60) + min;
// console.log(calc);
// if(calc < 45) {
//     calc = (24 * 60) + min;
// }
// calc -= 45;
// console.log(calc);
// hour = parseInt(calc/60);
// min = calc % 60;
// document.write(hour,"시",min,"분");

let hour = prompt("시간 입력 : ", "");
hour = Number(hour); // 프롬프토 입력을 받으면 String type 임
let min = prompt("분 입력 : ", "");
min = Number(min);
let calc = (hour * 60) + min;
if(calc < 45) calc = (24 * 60) + min;
calc -= 45;
document.write("<h2>" + `${parseInt(calc / 60)}시 ${calc%60}분` + "</h2>");

