import { doneTask } from "./checkbox.js";
import { deleteTask } from "./delete.js";
import { getTasks } from "./getTasks.js";
import { updateTask } from "./update.js";

const page = document.querySelector('div.page');

async function renderTask() {
    const taskElement = (task) => {
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        const taskTittle = document.createElement('h2');
        taskTittle.textContent = task.title;

        const taskDescription = document.createElement('p');
        taskDescription.textContent = task.description;

        const containerCheckbox = document.createElement('div');
        containerCheckbox.classList.add('containerCheckbox');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        checkbox.addEventListener("change", async () => {
            if(checkbox.checked) {
                doneTask(task.id)
            }
        })
        checkbox.checked = task.status ? true : false ;
        

        const pCheckbox = document.createElement('p');
        pCheckbox.textContent = 'Completed';

        const container = document.createElement('div');
        container.classList.add('container');

        const aEdit = document.createElement('button');
        aEdit.textContent = 'Editar';
        aEdit.classList.add('Edit');
        aEdit.onclick  =  () => {
            updateTask(task.id)
        }

        const aDelete = document.createElement('button');
        aDelete.textContent = 'Excluir'
        aDelete.classList.add('Delete');
        aDelete.onclick  =  () => {
            deleteTask(task.id)
        }

        taskContainer.appendChild(taskTittle);
        taskContainer.appendChild(taskDescription);
        taskContainer.appendChild(containerCheckbox);
        containerCheckbox.appendChild(checkbox);
        containerCheckbox.appendChild(pCheckbox);
        taskContainer.appendChild(container);
        container.appendChild(aEdit);
        container.appendChild(aDelete);
        
        return taskContainer;
    }
    page.innerHTML = ""
    const task = await getTasks()

    task.map(task => {
        const newTask = taskElement(task)

        page.appendChild(newTask)


    })

}

renderTask();