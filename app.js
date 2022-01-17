let inputScreen = document.getElementById('inPut');
let outputScreen = document.getElementById("output");
let icon = document.getElementById("icon");
function display(num) {
    inputScreen.value += num;
}
function calculate() {
    try {
        outputScreen.innerHTML = eval(inputScreen.value);
    }
    catch (err) {
        outputScreen.innerHTML = "Math Error"
    }
}
function clr() {
    inputScreen.value = '';
    outputScreen.innerHTML = '';
}
function del() {
    inputScreen.value = inputScreen.value.slice(0, -1);
}
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.classList.remove("fa-sun")
        icon.classList.add("fa-moon")
    }
    else {
        icon.classList.remove("fa-moon")
        icon.classList.add("fa-sun")
    }
}
