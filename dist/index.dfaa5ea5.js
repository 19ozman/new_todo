// import { Todo } from "./models/Todo";
// let todos: Todo[] = JSON.parse(localStorage.getItem("todos")) || [];
window.onload = function() {
    createPage();
};
function createPage() {
    const myHeader = document.createElement("h1");
    myHeader.className = "theHead";
    myHeader.innerHTML = "WTD?";
    document.body.appendChild(myHeader);
    const myForm = document.createElement("form");
    myForm.setAttribute("autocomplete", "off");
    myForm.className = "theForm";
    document.body.appendChild(myForm);
    const myInput = document.createElement("input");
    myInput.setAttribute("placeholder", "What to do?");
    myInput.setAttribute("type", "text");
    myInput.setAttribute("autocomplete", "off");
    myInput.className = "theInput";
    myForm.appendChild(myInput);
    const myUl = document.createElement("ul");
    myUl.className = "theUl";
    myUl.appendChild(myForm);
    const mySpanOne = document.createElement("span");
    mySpanOne.className = "theSpanOne";
    mySpanOne.innerText = "Sortera";
    myForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        doTodo();
    });
}
function addTodo() {
    let input = document.getElementById("");
    let newTodo = new Todo(input.value);
    todos.push(newTodo);
    input.value = "";
    createHtml();
}

//# sourceMappingURL=index.dfaa5ea5.js.map
