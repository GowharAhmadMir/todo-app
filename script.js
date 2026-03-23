function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;

  let btn = document.createElement("button");
  btn.textContent = "❌";
  btn.onclick = function () {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
