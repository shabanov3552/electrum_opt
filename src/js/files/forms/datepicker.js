/* Календарь */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

if (document.querySelector('[data-datepicker]')) {
	new AirDatepicker('[data-datepicker]', {
		range: true,
		multipleDatesSeparator: ' - ',
		inline: true
	})

}

