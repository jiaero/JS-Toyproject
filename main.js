const todoInput = document.getElementById("searchValue");
const todoBtn = document.getElementById("add_btn");

function todoBtnClick(){
    // 공백 상태에서 button을 누를 때 list가 추가되는 것을 방지
    if(todoInput.value.length > 0) {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        const DeleteBtn = document.createElement("button");
        ul.appendChild(li);
        li.innerText = `${todoInput.value}`
        li.setAttribute("class", "li");
        li.appendChild(DeleteBtn);
        DeleteBtn.innerText = "x";
        DeleteBtn.setAttribute("class", "delete_btn");
        function deleteTodo() {
            const removeli = event.target.parentElement;
            removeli.remove();
        }

        DeleteBtn.addEventListener("click", deleteTodo);

    }
}

todoBtn.addEventListener("click", todoBtnClick);






// ul onclick Test
// const ul = document.querySelector("ul");
// ul.onclick = function(e){
//     console.log(e.target);
// }

// ul, li, button 초기 설정
// if(todoInput.value.length > 0) {
//     const ul = document.querySelector("ul");
//     const li = document.createElement("li");
//     const deleteBtn = document.createElement("button")
//     ul.appendChild(li);
//     ul.appendChild(deleteBtn);
// }

// 쥬야호의 creatTextNode 예시
// const bodyEl = document.querySelector('body'); 
// const divEl = document.createElement('div'); 
// const text = document.createTextNode('hello'); 
// divEl.appendChild(text);
// bodyEl.appendChild(divEl);
