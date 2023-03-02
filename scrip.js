const btn = document.querySelector("[data-from-btn]");

const createTask = (evento) => {
    evento.preventDefault();
    let input = document.querySelector("[data-from-input]");
    console.log(input.value);
};

btn.addEventListener("click", createTask);