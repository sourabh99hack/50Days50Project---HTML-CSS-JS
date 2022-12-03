const toggleButton = document.querySelectorAll('.faq-toggle')
toggleButton.forEach(e => {
    e.addEventListener('click', () => {
        e.parentNode.classList.toggle('active')
    })
})




