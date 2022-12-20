window.addEventListener('load', () => {
    //resize text area
    const formTextArea = document.querySelector('#message')
    formTextArea.oninput = function() {
        this.style.height = `${this.scrollHeight}px`
        if (this.value == '') {
            this.style.height = '0px'
        }
    }
})