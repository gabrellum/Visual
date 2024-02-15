
export async function doneTask(taskId) {

    const statu = await fetch(`http://localhost:3333/tasks/${taskId}`)
    const done = await statu.json(statu.status)

    if(done === 1) {
        const done = 0
        const data = {done}

        fetch(`http://localhost:3333/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            
        })
    } else if(done === 0) {
        const done = 1
        const data = {done}
        
        fetch(`http://localhost:3333/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            
        })
    }
}