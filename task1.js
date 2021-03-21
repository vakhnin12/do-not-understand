const names = [
    "Tomas",
    "Rodrigo",
    "Semen",
    "Umberto"
];

function createButton(text, classes) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = classes;
    button.innerText = text;
    button.style = "width: 20%"

    return button;
};

function createInputField(title, type) {
    const container = document.createElement("div");
    container.className = "input-field";
    container.style = "width: 70%"
    const span = document.createElement("span");
    span.innerText = title;

    const inputElement = document.createElement("input");
    inputElement.type = type;
    inputElement.className = "validate";
    inputElement.value = "";





    container.appendChild(span);
    container.appendChild(inputElement);


    return { container, inputElement };
};


function renderListOfNames(array, parentElement) {
    parentElement.innerHTML = "";


    const ul = document.createElement("ul");
    ul.className = "names"

    array.forEach(element => {

        const addButtonDel = createButton("Delete", "delete");
        const addButtonEdit = createButton("Edit", "edit");
        const buttonsContainer = document.createElement("div");
        buttonsContainer.appendChild(addButtonDel);
        buttonsContainer.appendChild(addButtonEdit);

        let li = document.createElement("li");
        li.className = "name"
        let span = document.createElement("span")
        let text = document.createTextNode(element);
        span.append(text);

        li.append(span);
        li.appendChild(buttonsContainer);
        ul.appendChild(li);

        addButtonDel.addEventListener("click", function (event) {
                const deleteName = confirm("delete name?");
                if (deleteName === true) {
                    ul.removeChild(li);
                    const indexElement = array.indexOf(element);
                    console.log(array.indexOf(element));
                    // array.splice(indexElement)
                    delete array[indexElement]
                    // console.log(array);

                }
            })

        addButtonEdit.addEventListener("click", (event) => {
                const editName = prompt("Enter new name");
                if (editName === null) {
                    return;
                }
                span.innerText = editName;
                const indexElement = array.indexOf(element);
                console.log(array.indexOf(element))
                indexElement.element = indexElement.editName;
                console.log(array)
            })

    });

    parentElement.appendChild(ul);
}

function createFormV2(array, parentElement) {
    const form = document.createElement("div");
    form.className = "name-form";

    const nameField = createInputField("Name", "text");
    const addButton = createButton("Add", "add");
    const list = document.createElement("div");

    form.appendChild(nameField.container);
    form.appendChild(addButton);

    parentElement.appendChild(form);
    parentElement.appendChild(list);
    renderListOfNames(array, list);

    addButton.addEventListener("click", function () {
        const name = nameField.inputElement.value;
        array.push(name)
        renderListOfNames(array, list)
    });
}

const cover = document.createElement("div");
cover.className = "cover";
createFormV2(names, cover);
document.body.appendChild(cover);

