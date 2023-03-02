const btn = document.querySelector("[data-from-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    let input = document.querySelector("[data-from-input]");
    const value = input.value;
    const task = document.querySelector("[data-task]");
    input.value = '';
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;
    console.log(task);

};

btn.addEventListener("click", createTask);