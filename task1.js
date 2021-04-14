function createButton(text, classes) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = classes;
    button.innerText = text;

    return button;
};

function loadData(url, onLoad, onError) {
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

    console.log(data)


    for (const index in data.results) {
        const li = document.createElement("li");
        li.innerText = data.results[index].name;
        list.appendChild(li)
    }
    console.log("PostsLoader.onLoad", data.results[0].name);

    container.appendChild(list);
    const addButtonNext = createButton("Next Page", "next");
    const addButtonPrev = createButton("Prev Page", "prev");
    const buttonsContainer = document.createElement("div");
    buttonsContainer.appendChild(addButtonPrev);
    buttonsContainer.appendChild(addButtonNext);
    container.appendChild(buttonsContainer)
    document.body.appendChild(container);

    
document.querySelector(".next").addEventListener("click", function(){
    console.log("click next")
})
    console.log(data.info.next)
}

let link = "https://rickandmortyapi.com/api/character/?page=1"
loadData(
    link,
    (data) => {

        renderPosts(data);
        // console.log("loadData.onLoad", data);
    },
    // (error) => {
    //     console.error("onerror", error);
    // }
);
