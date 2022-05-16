
const buttons = document.querySelectorAll('button')

window.addEventListener('keydown', (e) => {

	buttons.forEach(button => {

		if (+button.dataset.code === e.keyCode) {
			button.classList.add('blue')
		}
		else {
			button.classList.remove('blue')
		}
	})
})


/* Другой вариант с использованием event.key

Этот вариант решения прекрасно работает,если язык ввода английский ,но если установлен другой язык ввода при нажатии на клавишу, он не работает

window.addEventListener('keydown', (e) => {

	buttons.forEach(button => {

		if (button.innerText === e.key || button.innerText.toLowerCase() === e.key) {
			button.classList.add('blue')
		} else {
			button.classList.remove('blue')
		}
	})
})
*/

