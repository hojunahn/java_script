// 자바 스크립트에서는 원시타입을 제외한 모든 값은 참조 타입 입니다.
// 객체리터럴은 중괄호를 사용해서 만들며 속성(property)과 값(value)의 쌍으로 구성
const person = {
    name: "고길동",
    age: 45,
    addr: "서울시 성북구",
    group: "소드마스터",
    desc: function(){
        return "소드마스터는 고길동 한명뿐 입니다.";
    },
};
console.log(person.name);
console.log(person.age);
console.log(person["addr"]);
console.log(person["group"]);
console.log(person.desc());
