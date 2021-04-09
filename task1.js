const namesLocal = [
    "Umberto",
    "Rodrigo"
];

// localStorage.setItem(`namesLocal${index}`, JSON.stringify(namesLocal));

// const names = JSON.parse(localStorage.getItem(namesLocal))

namesLocal.forEach(element => {
    const indexElement = `name - ${namesLocal.indexOf(element)}`
    const valueOfElement = element

    localStorage.setItem(indexElement, valueOfElement)
})

const names = [];

function getNames() {
    for (i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key)
        names.push(value)
    }
}
getNames();

function saveData(index, value) {
    localStorage.setItem(index, value);
};

function deleteData(index) {
    localStorage.removeItem(index);
}

// const names = JSON.parse(localStorage.getItem("namesLocal"))


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
        // const indexd = array.indexOf(element)

        // localStorage.setItem(indexd, element);
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

        addButtonDel.addEventListener("click", function (event,) {
            const deleteName = confirm("delete name?");
            if (deleteName === true) {
                ul.removeChild(li);
                const indexElement = array.indexOf(element);
                array.splice(indexElement, 1);

                deleteData(`name - ${indexElement}`)

                // localStorage.removeItem("namesLocal");
                // localStorage.setItem("namesLocal", JSON.stringify(array));
                //     localStorage.clear();
                //    localStorage.setItem(array, JSON.stringify(array))
                // localStorage.removeItem(indexElement);
            }
        })

        addButtonEdit.addEventListener("click", (event) => {
            const editName = prompt("Enter new name");
            if (editName === null) {
                return;
            }
            span.innerText = editName;
            const indexElement = array.indexOf(element);
            // console.log(array.indexOf(element))
            array[indexElement] = editName;
            console.log(indexElement);
            deleteData(`name - ${indexElement}`)

            saveData(`name - ${indexElement}`, editName)
            getNames()

            // localStorage.removeItem("namesLocal");
            // localStorage.setItem("namesLocal", JSON.stringify(array));
            // localStorage[indexElement] = editName
            // localStorage.removeItem(indexElement);
            // localStorage.setItem(indexElement, editName);
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
        const index = array.indexOf(name)
        renderListOfNames(array, list);

        saveData(`name - ${index}`, name)

        // localStorage.removeItem("namesLocal");
        // localStorage.setItem("namesLocal", JSON.stringify(array));
    });

};

const cover = document.createElement("div");
cover.className = "cover";
createFormV2(names, cover);
document.body.appendChild(cover);

// localStorage.setItem(names, JSON.stringify(names));
console.log(names)

// function addToLocalStrage(array){
//     array.forEach(element)
//     const indexElement = array.indexOf(element)

// }
// addToLocalStrage(names)
