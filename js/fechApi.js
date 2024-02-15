import { getTasks } from "./getTasks.js";


document.getElementById('saveTask').addEventListener('click', sendDataToServer)

export async function sendDataToServer(e) {
    e.preventDefault();
    const title = document.getElementById('taskTitle').value
    const description = document.getElementById('taskDescription').value
    

    const data = { 
        title,
        description,
        
    }

      const user_id = 2
   

    await fetch(`http://localhost:3333/tasks/${user_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
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

