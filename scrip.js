const btn = document.querySelector("[data-from-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    let input = document.querySelector("[data-from-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add('card');
    input.value = '';
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;

    list.appendChild(task);
    console.log(task);

};

btn.addEventListener("click", createTask);