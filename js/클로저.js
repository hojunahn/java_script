// 클로저란? 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘
function Counter(){
    let count = 0;
    let increment = function(){
        count++;
        console.log(count);
    }
    let docrement = function(){
        count;
        console.log(count);
    };
    return{
        increment,
        decrement,
    };

}
const myCounter = Counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();