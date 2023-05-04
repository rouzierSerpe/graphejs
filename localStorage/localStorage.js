const btnRebel = document.getElementById("rebel");
const btnRepublic = document.getElementById("republic");
let mode = localStorage.getItem("mode");

const chooseLightSide = () => {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("mode", "light");
};
const chooseDarkSide = () => {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("mode", "dark");
};
const chooseSide = () => {
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
    localStorage.setItem("mode", "choose");
};

if (mode === "light") {
    chooseLightSide();
} else if (mode === "dark") {
    chooseDarkSide();
} else {
    localStorage.setItem("mode", "choose");
}

btnRebel.addEventListener("click", () => {
    mode = localStorage.getItem("mode");
    mode === "choose" ? chooseLightSide() : chooseSide();
});
btnRepublic.addEventListener("click", () => {
    mode = localStorage.getItem("mode");
    mode === "choose" ? chooseDarkSide() : chooseSide();
});




