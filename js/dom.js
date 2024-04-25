function newRegister() {
    let newItem = document.createElement("li"); // 요소 노드 추가
    let subject = document.querySelector("#subject"); // 폼의 텍스트 필드
    newItem.innerHTML = subject.value;

    // 추가
    let itemList = document.querySelector("#itemList");
    itemList.insertBefore(newItem, itemList.childNodes[0]);

    // 입력창 초기화
    subject.value = "";
    // 삭제를 위해 리스트 전체 가져 오기
    let items = document.querySelectorAll("li");

    // 삭제할 아이템을 찾아서 삭제 하기
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            if(this.parentNode) {
                this.parentNode.removeChild(this);
            }
        });
    }
}