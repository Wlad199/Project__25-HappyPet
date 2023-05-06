$(document).ready(function () {
	$('.slider').slick({
		//https://kenwheeler.github.io/slick/
		arrows: true, // стрелки
		dots: true, // точки
		adaptiveHeight: true, // адаптивная высота (false)
		slidesToShow: 3, // кол-во показ. слайдов
		slidesToScroll: 1, // кол-во прокручиваемых слайдов за раз
		speed: 1000, // скорость (400)
		easing: 'ease', // анимация
		infinite: true, // бесконечный скролл. При достижении конца - стрелке навешивается класс slick-disabled
		initialSlide: 2, // Начальный слайд
		autoplay: false, // автовоспроизведение (false)
		autoplaySpeed: 1000, // скорость (3000)
		pauseOnFocus: false, // остановка при фокусе
		pauseOnHover: false, // остановка при наведении
		pauseOnDotsHover: false, // остановка при фокусе на точки
		draggable: true, // свайп мышкой на пк
		swipe: true, // свайп пальцем на смартфоне
		touchThreshold: 5, // расстояние для считывания свайпа (5 1/5 экрана)
		touchMove: false, // свайп пальцем (анимация перетаскивания) на смартфоне
		waitForAnimate: false, // быстрый свайп (игнорирование анимации при быстром нажатии) (true)
		centerMode: false, // добавляет класс к центральному слайду (false)
		variableWidth: false, // все картинки выстраиваются в ряд. Ширины становятся исходными. Использ. для автоматического адаптива. (false)
		rows: 1, // кол-во рядов (1)
		slidesPerRow: 1, // кол-во колонок (1)
		vertical: false, // вертикальный слайд. Отключить флекс для оболочки!!!! Желательно добавить для слайда высоту.
		verticalSwiping: false, // вертикальный свайп для вертикального слайдера (false)
		fade: false, // Показ только один слайд. Перестанут листаться и будут плавно заменяться (false)
		asNavFor: ".classOtherSlider", // связать 2 слайдера. Обоим прописать asNavFor !!!

		//responsive:[
		//	{
		//		breakpoint: 768,
		//		settings: {
		//			менять свойства при брейкпоинте
		//		}
		//	},{
		//		breakpoint: 500,
		//		settings: {
		//			менять свойства при брейкпоинте
		//		}
		//	}
		//],
		mobileFirst: false, // брейкпоинты при мобайлфёрст (false)
		//appendArrows: $('.content'), // переместить стрелки в блок с классом .content. Использ когда элементы управления находятся далеко 
		//appendDots: $('.content'), // переместить точки в блок с классом .content

	});
});

//Имена классов:

///* Слайдер */
//.slick-slider{}
///* Слайдер запущен */
//.slick-slider.slick-initialized{}
///* Слайдер с точками */
//.slick-slider.slick-dotted{}
///* Ограничивающая оболочка */
//.slick-list {}
///* Лента слайдов */
//.slick-track{}


///* Слайд */
//.slick-slide{}
///* Слайд активный (показывается) */
//.slick-slide.slick-active{}
///* Слайд основной */
//.slick-slide.slick-current{}
///* Слайд по центру */
//.slick-slide.slick-center{}
///* Клонированный слайд */
//.slick-slide.slick-cloned{}


///* Стрелка */
//.slick-arrow{}
///* Стрелка влево */
//.slick-arrow.slick-prev{}
///* Стрелка вправо */
//.slick-arrow.slick-next{}
///* Стрелка не активная */
//.slick-arrow.slick-disabled{}


///* Точки (булиты) */
//.slick-dots{}
//.slick-dots li{}
///* Активная точка */
//.slick-dots li.slick-active{}
///* Элемент точки */
//.slick-dots li button{}