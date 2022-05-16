
const buttons = document.querySelectorAll('button')

window.addEventListener('keydown', (e) => {

	buttons.forEach(button => {

		if (button.innerText === e.key || button.innerText.toLowerCase() === e.key) {
			button.classList.add('blue')
		} else {
			button.classList.remove('blue')
		}
	})
})


