


document.getElementById('saveUser').addEventListener('click', sendUserToServer)

export async function sendUserToServer(e) {
    e.preventDefault();
    const name = document.getElementById('username').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value    

    const  data = { 
        name,
        password,
        email
        
    }

    console.log(data)

    await fetch(`http://localhost:3333/users`, {
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
     
     
     

}