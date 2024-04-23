let menu_list = [];
let tmp;
tmp = prompt("첫번째 햄버거 가격 입력 : ", "");
menu_list[0] = Number(tmp);
tmp = prompt("두번째 햄버거 가격 입력 : ", "");
menu_list[1] = Number(tmp);
tmp = prompt("세번째 햄버거 가격 입력 : ", "");
menu_list[2] = Number(tmp);
tmp = prompt("첫번째 음료 가격 입력 : ", "");
menu_list[3] = Number(tmp);
tmp = prompt("두번째 음료 가격 입력 : ", "");
menu_list[4] = Number(tmp);

let burger1 = menu_list[0];
let burger2 = menu_list[1];
let burger3 = menu_list[2];
let drink1 = menu_list[3];
let drink2 = menu_list[4];

let chipB;
let chipD;

if(burger1 < burger2 < burger3){
    chipB = burger1;
}else if (burger1 > burger2 > burger3){
    chipB = burger2;
}else {
    chipB = burger3;
}

if(drink1 < drink2){
    chipD = drink1;
}else{
    chipD = drink2;
}

document.write("<h2>"+"입력한 햄버거와 음료수에서 제일 싼 햄버거는" + `${chipB}이고<br>` + "제일 싼 음료는" + `${chipD}입니다. 메뉴를 50원 할인을 하면 총합을` + `${chipB + chipD -50}입니다.`+"</h2>");


