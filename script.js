function bgChange(colorIndex) {
    const colorArray = [
        "#CDB4DB", 
        "#BDE0FE", 
        "#A3D5D3", 
        "#FFC8DD", // peach mist
        "#5DD39E"  // ocean teal
    ];

    document.body.style.background = colorArray[colorIndex];
}

const colors = ["#CDB4DB", "#BDE0FE", "#A3D5D3", "#FFC8DD", "#5DD39E"];

const colorBox = document.querySelector("#colorBox");

colors.forEach((color, index) => {
    const circle = document.createElement("span");
    circle.style.backgroundColor = color;

    circle.addEventListener("click", () => bgChange(index));

    colorBox.appendChild(circle);
});
