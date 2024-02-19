export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    title: document.querySelector('.modal .title #input-title'),
    description: document.querySelector('.modal #input-description'),
    buttonClose: document.querySelector('.modal button.close'),
    saveButton: document.querySelector('.modal-wrapper #saveButton'),
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}
 
Modal.buttonClose.onclick = () => {
    Modal.close()
}
window.addEventListener('keydown', handleKeyDown)
 
function handleKeyDown(e) {
    if(e.key === 'Escape') {
        Modal.close()
    }
}

