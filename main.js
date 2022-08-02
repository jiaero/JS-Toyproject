const todoInput = document.getElementById("searchValue");
const todoBtn = document.getElementById("add_btn");

function todoBtnClick(){
    // 공백 상태에서 button을 누를 때 list가 추가되는 것을 방지
    if(todoInput.value.length > 0) {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = 
        `<li>${todoInput.value}
        <button class="del_btn">삭제</button>
        </li>`;
    }
}

todoBtn.addEventListener("click", todoBtnClick);


const todoDiv = document.createElement("div");



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