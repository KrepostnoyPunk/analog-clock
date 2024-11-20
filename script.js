const hourEl = document.querySelector('.arrows--hour');
const minuteEl = document.querySelector('.arrows--minute');
const secondEl = document.querySelector('.arrows--second');


function updateTime ()  {
    // значения которые получаются  в результате выражений time / timeUnits * 360, подставляются на места значений transform: rotate(...deg) и определяют на сколько градусов повернется определенная стрелка
    let date = new Date();
    secondEl.style.transform = `rotate(${(date.getSeconds() / 60) * 360}deg)`;
    minuteEl.style.transform = `rotate(${(date.getMinutes() / 60) * 360}deg)`;
    hourEl.style.transform = `rotate(${(date.getHours() / 12) * 360}deg)`;
}

setInterval(updateTime, 1000); // каждую секунду происходит вызов функции в которой происходит запрос, сохранение и подставление актуальных значений

updateTime() // по загрузке страницы инициализируются и подставляются актуальные значения игнорируя те что заданы по дефолту в scss