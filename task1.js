function createElement(value) {
    const area = document.createElement("div");

    area.style.border = "1px solid black";
    area.style.width = "50px";
    area.style.height = "50px";


    const span = document.createElement("span");
    let text = value;
    span.innerText = text;

    area.appendChild(span);

    return area
};

function createContainer() {
    const container = document.createElement("div");
    const area1 = createElement(0);
    const area2 = createElement(0);
    const area3 = createElement(0);
    const area4 = createElement(0);
    const area5 = createElement(0);

    container.style = "display: flex"

    container.appendChild(area1);
    container.appendChild(area2);
    container.appendChild(area3);
    container.appendChild(area4);
    container.appendChild(area5);

    container.addEventListener("click", function (event, value) {
        value = +event.target.textContent;
        console.log(value, typeof value);
        return value + 1;
    })
    return container
};

const container = createContainer();

document.body.appendChild(container);

console.log(container.textContent)