import { Todo } from "./models/Todo";

let todos: Todo[] = JSON.parse(localStorage.getItem("todos")) || [];

window.onload = function () {
	pageCreation();
	htmlCreation();
	deleted();
	setFocus();

	document.getElementById("myFormId").addEventListener("submit", addTodo);

	let theOpt: HTMLSelectElement = document.getElementById(
		"filterId"
	) as HTMLSelectElement;

	theOpt.addEventListener("change", filterTodo);
};

// PAGE CREATION --- PAGE CREATION --- PAGE CREATION

function pageCreation() {
	const myHeader: HTMLHeadElement = document.createElement("h1");
	myHeader.className = "theHead";
	myHeader.innerHTML = "WTD?";
	document.body.appendChild(myHeader);

	const myForm: HTMLFormElement = document.createElement("form");
	myForm.setAttribute("autocomplete", "off");
	myForm.className = "theForm";
	myForm.id = "myFormId";
	document.body.appendChild(myForm);

	const myInput: HTMLInputElement = document.createElement("input");
	myInput.setAttribute("placeholder", "What to do?");
	myInput.setAttribute("type", "text");
	myInput.setAttribute("autocomplete", "off");
	myInput.setAttribute("aufocous", "on");
	myInput.className = "theInput";
	myInput.id = "theInputId";
	myForm.appendChild(myInput);

	const myUl: HTMLUListElement = document.createElement("ul");
	myUl.className = "theUl";
	myUl.id = "theUlId";
	myForm.appendChild(myUl);

	const mySpanSort: HTMLSpanElement = document.createElement("span");
	mySpanSort.className = "spanSort";
	mySpanSort.innerText = "Sort";
	myForm.appendChild(mySpanSort);

	const myFilter: HTMLSelectElement = document.createElement("select");
	myFilter.className = "theFilter";
	myFilter.id = "filterId";
	myForm.appendChild(myFilter);

	// OPTIONS --- OPTIONS --- OPTIONS
	// OPTIONS --- OPTIONS --- OPTIONS
	// OPTIONS --- OPTIONS --- OPTIONS

	const optAll: HTMLOptionElement = document.createElement("option");
	optAll.id = "optAll";
	optAll.innerText = "All";
	optAll.value = "all";
	myFilter.appendChild(optAll);

	const optAct: HTMLOptionElement = document.createElement("option");
	optAct.id = "optActive";
	optAct.innerText = "Active";
	optAct.value = "active";
	myFilter.appendChild(optAct);

	const optCmp: HTMLOptionElement = document.createElement("option");
	optCmp.id = "optCompleted";
	optCmp.innerText = "Completed";
	optCmp.value = "completed";
	myFilter.appendChild(optCmp);

	// END OF OPTIONS --- END OF OPTIONS --- END OF OPTIONS
	// END OF OPTIONS --- END OF OPTIONS --- END OF OPTIONS
	// END OF OPTIONS --- END OF OPTIONS --- END OF OPTIONS

	const infoDiv: HTMLDivElement = document.createElement("div");
	infoDiv.className = "infDiv";
	document.body.appendChild(infoDiv);

	const infoOne: HTMLSpanElement = document.createElement("span");
	infoOne.className = "infSpn";
	infoOne.innerText = 'Hit "ENTER" to add your "to do"';
	infoDiv.appendChild(infoOne);

	const infoTwo: HTMLSpanElement = document.createElement("span");
	infoTwo.className = "infSpn";
	infoTwo.innerText = 'Left-click to toggle complete "on/off"';
	infoDiv.appendChild(infoTwo);

	const infoTre: HTMLSpanElement = document.createElement("span");
	infoTre.className = "infSpn";
	infoTre.innerText = "Right-click to remove";
	infoDiv.appendChild(infoTre);
}

// END OF PAGE CREATION --- END OF PAGE CREATION --- END OF PAGE CREATION

// FUNCTION ADD TO DO --- FUNCTION ADD TO DO --- FUNCTION ADD TO DO

function addTodo() {
	let input: HTMLInputElement = document.getElementById(
		"theInputId"
	) as HTMLInputElement;

	let newTodo: Todo = new Todo(input.value, false);
	todos.push(newTodo);
	input.value = "";
	false;
	htmlCreation();
}

// END ADD TO DO --- END ADD TO DO --- END ADD TO DO

// HTML CREATION TODO --- HTML CREATION TODO --- HTML CREATION TODO

function htmlCreation() {
	localStorage.setItem("todos", JSON.stringify(todos));
	let todoList: HTMLUListElement = document.getElementById(
		"theUlId"
	) as HTMLUListElement;

	todoList.innerHTML = "";

	for (let i = 0; i < todos.length; i++) {
		let myLi: HTMLLIElement = document.createElement("li") as HTMLLIElement;
		myLi.id = "liFinder";
		myLi.className = "liAll";

		let mySpan: HTMLSpanElement = document.createElement("span");
		mySpan.id = "spanTodo";

		myLi.addEventListener("click", () => {
			todos[i].completed = !todos[i].completed;
			htmlCreation();
			location.reload();
		});

		myLi.addEventListener("contextmenu", (e) => {
			e.preventDefault();
			todos.splice(i, 1);
			htmlCreation();
			location.reload();
		});

		mySpan.innerHTML = todos[i].item;

		if (todos[i].completed) {
			myLi.className = "liCmp";
		}

		todoList.appendChild(myLi);
		myLi.appendChild(mySpan);
		mySpan.innerText;
		console.log(todos[i]);
	}
}

// END CREATION TODO --- END CREATION TODO --- END CREATION TODO

// CLEAR BUTTON --- CLEAR BUTTON --- CLEAR BUTTON

function deleted() {
	const clearBtn: HTMLButtonElement = document.createElement(
		"button"
	) as HTMLButtonElement;
	clearBtn.className = "cBtn";
	clearBtn.type = "button";
	clearBtn.id = "clearButton";
	clearBtn.innerHTML = "Clear List";
	let aForm = document.getElementById("myFormId");
	aForm.appendChild(clearBtn);

	let cBtn = document.getElementById("clearButton");

	cBtn.addEventListener("click", () => {
		localStorage.clear();
		location.reload();
	});
}

// END CLEAR BUTTON --- END CLEAR BUTTON --- END CLEAR BUTTON

// INPUT FOCUS --- INPUT FOCUS --- INPUT FOCUS

function setFocus() {
	document.getElementById("theInputId").focus();
}

// END FOCUS --- END FOCUS --- END FOCUS

// FILTER TODOS --- FILTER TODOS --- FILTER TODOS

function filterTodo(e) {
	let theUnordered = document.getElementById("theUlId") as HTMLUListElement;

	const todos = [...theUnordered.children, HTMLUListElement];
	console.log(todos);
	todos.forEach((theLis: any) => {
		switch (e.target.value) {
			case "all":
				theLis.style.display = "block";
				break;
			case "active":
				if (theLis.classList.contains("liCmp")) {
					theLis.style.display = "none";
				} else {
					theLis.style.display = "block";
				}
				break;
			case "completed":
				if (!theLis.classList.contains("liAll")) {
					theLis.style.display = "block";
				} else {
					theLis.style.display = "none";
				}
				break;
		}
	});
}
// END OF FILTER --- END OF FILTER --- END OF FILTER
