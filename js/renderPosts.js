import { doneTask } from "./checkbox.js";
import { deleteTask } from "./delete.js";
import { getTasks } from "./getTasks.js";
import { Modal } from "./modal.js";
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
        taskDescription.classList.add('task-description');


        const containerCheckbox = document.createElement('div');
        containerCheckbox.classList.add('containerCheckbox');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.onclick = () => {
                doneTask(task.id)
                checkbox.classList.toggle('checked')
                taskDescription.classList.toggle('green');
                taskTittle.classList.toggle('completed');
             }
        
        
      /*   checkbox.addEventListener("change", async () => {
            if(checkbox.checked) {
                doneTask(task.id)
                checkbox.classList.toggle('checked');

            } 
        })
        */

        checkbox.checked = task.status ? true : false ;

        if(task.status === 1) {
            checkbox.classList.toggle('checked');
            taskDescription.classList.toggle('green');
            taskTittle.classList.toggle('completed');
        }
        

        const pCheckbox = document.createElement('p');
        pCheckbox.textContent = 'Completed';

        const container = document.createElement('div');
        container.classList.add('container');

        const aEdit = document.createElement('button');
        aEdit.textContent = 'Editar';
        aEdit.classList.add('Edit');
        aEdit.onclick  =  () => {
           displayContent(task)
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
function displayContent(task) {
    const title = task.title
    const description = task.description
    const taskID = task.id
   
    Modal.title.placeholder = title
    Modal.description.placeholder = description

    Modal.saveButton.onclick = () => {
        updateTask(taskID)
        Modal.close()
    }
   
    Modal.open()
}

renderTask();