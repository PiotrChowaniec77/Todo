// const removeTask = (e) => {

//     // e.target.parentNode.style.textDecoration = "line-through"
//     // e.target.remove()
//     const index = e.target.dataset.key
//     document.querySelector(`li[data-key='${index}']`).remove()

// }

// document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask))

// zadanie 2
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");
// const liElements = document.querySelectorAll("li");

// const searchTask = e => {
//     const searchText = e.target.value.toLowerCase();
//     let tasks = [...liElements];
//     tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
//     ul.textContent= ''
//     tasks.forEach(li => ul.appendChild(li))

// };

// input.addEventListener("input", searchTask);


const todoList = []

const form = document.querySelector('form');
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector("input");


const removeTask = (e) => {
    // e.target.parentNode.remove()
    const index = e.target.parentNode.dataset.key
    todoList.splice(index, 1)
    taskNumber.textContent = listItems.length
    renderList()
}

const addTask = (e) => {
    e.preventDefault();

    const titleTask = input.value;
    if(titleTask === "") return

    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = titleTask + "<button>Usuń</button>"
    todoList.push(task)
    renderList()
    ul.appendChild(task)
    input.value = ''
    // const liItems = document.querySelectorAll('li.task').length
    taskNumber.textContent = listItems.length
    task.querySelector('button').addEventListener('click', removeTask)
};

const renderList = () =>{
    ul.textContent = ''
    todoList.forEach((todoElement, key) => {
        todoElement.dataset.key = key
        ul.appendChild(todoElement)
    })
}
form.addEventListener('submit', addTask);









