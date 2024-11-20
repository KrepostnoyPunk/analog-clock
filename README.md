*Превью :*

![preview](https://github.com/KrepostnoyPunk/analog-clock/blob/main/preview.png?raw=true)

*Интро :*
- Данный проект представляет собой цифровые аКа аналоговые часы.

*Технологии* :
- HTML
- SCSS
- JS

*Методологии :*
- БЭМ

*Функционал :*
- движение стрелок согласно полученным данным из `new Date()` которые подставляются в качестве значений в `transform: rotate(...deg)`.

*На будущее :*
- переключение темы(?)
- другой дизайн(?)

*Проблемы с которыми столкнулся :*
- позиционирование элементов внутри циферблата было ху..., кхм, увлекательным.
- функция `updateTime()` срабатывала один раз потому что изначально данные сохранялись в переменные которые были за пределами функции и они не обновлялись при каждом последующем вызове функции, а хранили полученное один раз значение. Решилось переносом конструкций получения данных в функцию что позволило с каждым последующим вызовом получать актуальные данные.

*Улучшил :*
- понимание логики работы и использования `Date Object`
- понимание применения интервалов
- понимание логики совместного использования HTML, SCSS, JS
- понимание верстки и позиционирования элементов
- понимание удобства применения функций как способа логично и аккуратно распределить код
- понимание важности и необходимости рефакторинга

Проект завершен.