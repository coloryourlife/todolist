let modal = document.getElementById('myModal');

let btn = document.getElementById("myBtn");
let addTodo = document.getElementById("addTodo");
let span = document.getElementsByClassName("close")[0];

btn.onclick = () => {
	modal.style.display = "block";
}

addTodo.onclick = () => {
	let newTodo = document.createElement('div');
	let newTodoText = document.getElementById("newTodo").value;
	let todolist = document.querySelector("#todo");
	let doinglist = document.querySelector("#doing");
	let donelist = document.querySelector("#done");
	newTodo.onclick = (e) => {
		if(e.target.className == 'todo_component'){
			e.target.className = "doing_component";
			doinglist.appendChild(e.target);
		}else if(e.target.className == 'doing_component'){
			e.target.className = "done_component";
			donelist.appendChild(e.target);
		}else{
			e.target.remove();
		}
	}
	newTodo.setAttribute('class', 'todo_component');
	newTodo.textContent = newTodoText;
	document.getElementById("newTodo").value = "";
	todolist.appendChild(newTodo);
	modal.style.display = "none";
}
console.log(newTodo);

span.onclick = () => {
	modal.style.display = "none";
}

