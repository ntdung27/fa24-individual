const add_form = document.querySelector(".add_form");
const add_value = document.querySelector("#add_value");
const todo_list = document.querySelector(".todo_list");
const todo_list_item = document.querySelector(".todo_list_item");
const name_todo = document.querySelector("#name_todo");

add_form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (add_value.value != "") {
        // Create li tag and set classname
        const newTodo = document.createElement("li");
        newTodo.classList = "list-group-item d-flex";

        // checkbox div
        const divCheckbox = document.createElement("div");
        divCheckbox.classList = "col-auto";
        const inpcheckbox = document.createElement("input");
        inpcheckbox.type = "checkbox";
        divCheckbox.appendChild(inpcheckbox);

        inpcheckbox.addEventListener("click", () => {
            newTodo.classList.toggle('completed');//ee
        })

        // content div
        const divName = document.createElement("div");
        divName.classList = "col-lg-8";
        const nameTodo = document.createElement("span");
        nameTodo.textContent = add_value.value;
        divName.appendChild(nameTodo);

        // delete div
        const divDelete = document.createElement("div");
        divDelete.classList = "col-auto";
        const del = document.createElement("a");
        del.textContent = "Xóa";
        del.style.color = "#007BFF";
        del.style.cursor = "pointer";
        divDelete.appendChild(del);

        // add available div to li tag
        newTodo.appendChild(divCheckbox);
        newTodo.appendChild(divName);
        newTodo.appendChild(divDelete);
        todo_list_item.appendChild(newTodo);

        // reset value of add input
        add_value.value = "";

        // Delete Todo
        del.addEventListener("click", () => {
            todo_list_item.removeChild(newTodo);
        })

        // Change name Todo
        nameTodo.addEventListener("click", () => {
            // call function
            changeTodo(newTodo, nameTodo);
        });
    };
});

// function for update content Todo
function changeTodo(newTodo, nameTodo) {
    const tempInput = document.createElement("input");
    tempInput.type = "text";
    tempInput.value = nameTodo.textContent;

    const divSave = document.createElement("div");
    divSave.classList = "col-auto";
    const saveChange = document.createElement("a");
    saveChange.textContent = "Save";
    saveChange.style.color = "green";
    saveChange.style.cursor = "pointer";
    divSave.appendChild(saveChange);
    newTodo.appendChild(divSave);


    // Exchange Span and Input
    // Span to Input
    nameTodo.parentNode.replaceChild(tempInput, nameTodo);
    tempInput.focus();

    // Save name Todo when mouse is clicked saveChange button
    saveChange.addEventListener("click", () => {
        const newSpan = document.createElement("span");
        newSpan.textContent = tempInput.value;
        tempInput.parentNode.replaceChild(newSpan, tempInput);
        newTodo.removeChild(divSave);
        newSpan.addEventListener("click", arguments.callee);
    });
}