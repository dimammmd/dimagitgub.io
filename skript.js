// =============== ЗАДАНИЕ 3: Функция опроса возраста с уточнением ===============
function askAgeWithConfirm() {
    let age = prompt("Введите ваш возраст:");
    
    // Если нажали "Отмена" (null) или оставили пустым, просим снова
    while (age === null || age === "") {
        age = prompt("Пожалуйста, введите ваш возраст:");
    }
    
    // Уточняем возраст через confirm (как на рисунке 5)
    let isConfirmed = confirm(`Вы уверены, что вам ${age}`);
    
    if (!isConfirmed) {
        // Если нажали "Отмена" — запускаем заново
        askAgeWithConfirm();
    } else {
        // Если нажали "ОК" — завершаем, обновляем возраст в профиле
        document.getElementById("ageValue").textContent = age + " лет";
        const msgDiv = document.getElementById("ageResultMsg");
        msgDiv.innerHTML = `✅ Возраст ${age} успешно подтверждён!`;
        msgDiv.style.color = "#2b6e3c";
        msgDiv.style.fontWeight = "500";
        setTimeout(() => {
            if (msgDiv.innerHTML.includes("успешно")) {
                // оставляем сообщение, но можно потом стереть при новом вводе
            }
        }, 3000);
        alert(`Спасибо! Ваш возраст (${age}) сохранён.`);
    }
}

// =============== ИЗМЕНЕНИЕ ФАМИЛИИ (поле ввода + кнопка) ===============
const surnameInput = document.getElementById("surnameInput");
const changeBtn = document.getElementById("changeSurnameBtn");
const lastNameSpan = document.getElementById("lastNameDisplay");

changeBtn.addEventListener("click", () => {
    let newSurname = surnameInput.value.trim();
    if (newSurname === "") {
        alert("Пожалуйста, введите фамилию!");
        return;
    }
    // Меняем текст фамилии на странице
    lastNameSpan.textContent = newSurname;
    // Добавляем анимацию (класс edited на секунду)
    lastNameSpan.classList.add("edited");
    setTimeout(() => {
        lastNameSpan.classList.remove("edited");
    }, 500);
    // Дополнительно показываем эффект в консоли
    console.log(`Фамилия изменена на: ${newSurname}`);
});

// =============== РАНДОМНЫЙ ЦВЕТ ФОНА (кнопка) ===============
const randomColorBtn = document.getElementById("randomColorBtn");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomColorBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    // Меняем фон body с плавным переходом
    document.body.style.transition = "background 0.5s ease";
    document.body.style.background = randomColor;
    // также можно поменять фон карточек? но оставим карточки светлыми, меняем только внешний фон
    // для эффекта: сохраним градиент, но по заданию - меняем цвет фона на рандомный.
    // Так как изначально был градиент, переопределим на сплошной рандомный цвет
    // Но чтобы не ломался стиль, просто установим background вместо градиента
    // Однако сохраним читаемость
});

// =============== КНОПКА ДЛЯ ЗАДАНИЯ 3 (ВОЗРАСТ) ===============
const askAgeBtn = document.getElementById("askAgeBtn");
askAgeBtn.addEventListener("click", () => {
    askAgeWithConfirm();
});

// =============== НЕБОЛЬШАЯ ДОПОЛНИТЕЛЬНАЯ ФУНКЦИЯ: если возраст уже был указан, можно обновить ===============
// Также добавим инициализацию (при загрузке показываем приветствие)
console.log("Страница резюме загружена. Доступны: изменение фамилии, рандомный фон, опрос возраста (задание 3)");
