function createButton(text, classes) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = classes;
    button.innerText = text;

    return button;
};

function loadData(url, onLoad, onError) {
    const buttonprev = document.querySelector(".prev");
    if (page === 1) {
        buttonprev.disabled = true
        buttonprev.classList.add("disabled")
    } else  {
        buttonprev.disabled = false
        buttonprev.classList.remove("disabled")
    }

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", url);

    xhr.onload = function () {
        if (xhr.status !== 200) {
            if (typeof onError === "function") {
                onError(new Error(`Something went wrong! Status: ${xhr.status}`));
            }

            return;
        }

        onLoad(xhr.response);
        // console.log(onLoad(xhr.response))
    }

    xhr.onerror = function () {
        if (typeof onError === "function") {
            onError(new Error("Something went wrong..."));
        }
    }
    xhr.send();
}

function renderPosts(data) {
    const container = document.createElement("div")
    const list = document.createElement("ul");
    list.className = "list"

    for (const index in data.results) {
        const li = document.createElement("li");
        li.innerText = data.results[index].name;
        list.appendChild(li)
    }
    container.appendChild(list);

    document.body.appendChild(container);
}

const addButtonNext = createButton("Next Page", "next");
const addButtonPrev = createButton("Prev Page", "prev");
const buttonsContainer = document.createElement("div");
buttonsContainer.appendChild(addButtonPrev);
buttonsContainer.appendChild(addButtonNext);
document.body.appendChild(buttonsContainer);

let page = 33;

addButtonNext.addEventListener("click", () => {
    page++;
    changeCharacters();
    activateButton()
});

addButtonPrev.addEventListener("click", () => {
    page--;
    changeCharacters();
    const button = document.querySelector(".next");
    button.disabled = false
    button.classList.remove("disabled")
});

function loadCharacters() {
    const link = `https://rickandmortyapi.com/api/character/?page=${page}`;
    loadData(link, data => renderPosts(data));
}

function changeCharacters() {
    const link = `https://rickandmortyapi.com/api/character/?page=${page}`;
    loadData(link, data => changePosts(data));
}

function changePosts(data) {
    const list = document.querySelector(".list");
    if (list.hasChildNodes()) {
        const children = list.childNodes;

        console.log(data.results)

        for (i = 0; i < children.length; i++) {
            children[i].innerText = data.results[i].name;
            if (children.length > data.results.length) {
                for (j = 0; j < children.length - data.results.length; j++)
                    list.removeChild(children[j + data.results.length])
            } else if (children.length < data.results.length) {
                for (j = 0; j < data.results.length - children.length; j++) {
                    const li = document.createElement("li");
                    list.appendChild(li)
                }
            }
            console.log(typeof data.results[i].name)
        }
    }
}

function activateButton(onLoad) {
    const link = `https://rickandmortyapi.com/api/character/?page=${page + 1}`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", link);
    console.log(xhr.status)

    xhr.onload = function () {
        const button = document.querySelector(".next");
        if (xhr.status !== 200) {

            button.disabled = true
            button.classList.add("disabled")
        }

    }
    xhr.send()
}

loadCharacters();