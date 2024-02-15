
export async function doneTask(taskId) {

    fetch(`http://localhost:3333/tasks/${taskId}/done`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },


    })
}
