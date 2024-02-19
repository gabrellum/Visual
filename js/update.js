import { getTasks } from "./getTasks.js"


export function updateTask(taskId) {

    const title = document.getElementById('input-title').value
    const description = document.getElementById('input-description').value
    
    if(title === "") {
        alert("Preencha o campo de título")
        return
    } else if(description === "") {
        alert("Preencha o campo de descrição")
        return
    }

    const data = { 
        title,
        description
    }
    
    fetch(`http://localhost:3333/tasks/${taskId}`, {
        method: 'PUT',
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
     
     getTasks
     location.reload()

}