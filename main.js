const todoInput = document.getElementById("searchValue");  // input 입력값
const todoBtn = document.getElementById("add_btn");  // 추가 버튼

function todoBtnClick() {

    if(!todoInput.value) {
        alert("Please enter your To Do List ! :-)");  // input에 내용을 입력하지 않고 추가 버튼 누르면 alert 발생
    
    } else {

        const ul = document.querySelector("ul");
        const li = document.createElement("li");  // html에 'li' 태그 만들기
        const div = document.createElement("div");  // html에 'div' 태그 만들기
        const DeleteBtn = document.createElement("button");  // 삭제 버튼 생성

        ul.appendChild(li);
        li.appendChild(div);  // li에 'div' 자식으로 붙이기 
        div.innerText = `${todoInput.value}`  // <li>입력된 할 일</li>
        li.appendChild(DeleteBtn);  // li에 삭제 버튼을 자식으로 붙이기
        todoInput.value = "";  // 할 일 입력창 초기화
        
        // class 추가
        li.setAttribute("class", "li");  // li 태그에 'li'라는 클래스를 부여함.
        DeleteBtn.setAttribute("class", "delete_btn");  // 삭제 버튼에 delete_btn이라는 클래스를 부여함.
        
        DeleteBtn.innerText = "x";  // 삭제 버튼 안에 "x" 추가
        
        function lineLi() {
        div.style.textDecoration = div.style.textDecoration == "none" ? "line-through" : "none";
        }
        // 완료 된 리스트에 줄 긋기


        function deleteTodo() {
            const removeli = event.target.parentElement;
            removeli.remove();                            // 클릭된 삭제 버튼의 부모 요소(li)를 삭제한다.
        }

        li.addEventListener("click", lineLi);
        DeleteBtn.addEventListener("click", deleteTodo);
    }
}


todoBtn.addEventListener("click", todoBtnClick);

