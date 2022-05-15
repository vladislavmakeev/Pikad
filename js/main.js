let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
	console.log('Клик по кнопке меню');
	menu.classList.toggle('visible');
	})
