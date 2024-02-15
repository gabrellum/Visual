import { getTasks } from "./getTasks.js";



export async function deleteTask(taskId) {

    await fetch(`http://localhost:3333/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
        
    }).then((response) => { 
        if(!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`)
        }
        return response.json()
    }).then((responseData) => {
        console.log('Dados enviados com sucesso: ' + responseData);
     }).catch((error) => { 
        console.error('Erro ao enviar os dados: ', error)
     })
     
     getTasks()
     location.reload()

}