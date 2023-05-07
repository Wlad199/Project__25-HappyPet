// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера - слик(MW 3.2)
$(document).ready(function () {
	$('.pets__content').slick({
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	});
})
