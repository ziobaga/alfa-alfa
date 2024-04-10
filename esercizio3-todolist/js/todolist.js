const Submit = function (e) {
    e.preventDefault();
    aggiungitask();
    taskcomplete();
    taskdelete();
}

const aggiungitask = function () {
    let task = document.querySelector("#lista");
    let input = document.querySelector(".testo input");
    let addtask = `
    <div class="tasks">
        <span id="taskname">
            ${input.value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
`
task.innerHTML += addtask;
input.value = '';
}

const taskcomplete = function () {
    let alltasks = document.querySelectorAll(".task");
    for (let i = 0; i < alltasks.length; i++) {
      alltasks[i].addEventListener("click", function () {
        this.classList.toggle("completed");
      });
    }
  }

  const taskdelete = function () {
    let deletebutton = document.querySelectorAll(".delete");
    for (let i = 0; i < deletebutton.length; i++) {
      deletebutton[i].addEventListener("click", function () {
        this.parentNode.remove();
      });
    }
  }

  window.onload = function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", Submit);
  }
  