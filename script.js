const input = document.querySelector("#input-box");

const container = document.querySelector(".list-container");

document.querySelector("button").addEventListener("click", function () {
  if (input.value === "") {
    alert("please enter the value");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    container.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
});

container.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", container.innerHTML);
}

function show() {
  container.innerHTML = localStorage.getItem("data");
}

show();
