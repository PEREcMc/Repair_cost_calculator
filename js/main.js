// Определяем элементы формы
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

// Определяем базовую стоимость ремонта за кв. м и span для вывода стоимости ремонта
const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price');

// Определяем радио-кнопки для типа ремонта
const radioTypeButtons = document.querySelectorAll('input[name="type"]');

// Определяем радио-кнопки для типа дома
const radioBuildingButtons = document.querySelectorAll('input[name="building"]');

// Определяем радио-кнопки для количества комнат
const radioRoomsButtons = document.querySelectorAll('input[name="rooms"]');

// Определяем checkboxes
const checkboxCeiling = document.querySelector('input[name="ceiling"]');
const checkboxWalls = document.querySelector('input[name="walls"]');
const checkboxFloor = document.querySelector('input[name="floor"]');


// Связываем инпуты - слушаем событие input
squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value;
})

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value;
})


// Определяем стоимость ремонта
function calc() {

    let totalPrice = basePrice * parseInt(squareInput.value);


    for (const radio of radioTypeButtons) {
        radio.checked === true ? totalPrice = totalPrice * parseFloat(radio.value) : false;
    }

    for (const radio of radioBuildingButtons) {
        radio.checked === true ? totalPrice = totalPrice * parseFloat(radio.value) : false;
    }

    for (const radio of radioRoomsButtons) {
        radio.checked === true ? totalPrice = totalPrice * parseFloat(radio.value) : false;
    }


    if (checkboxCeiling.checked) {
        // totalPrice = totalPrice * parseFloat(checkboxCeiling.value);

        totalPrice =  totalPrice + parseFloat(checkboxCeiling.value) * parseInt(squareInput.value);
    }
    if (checkboxWalls.checked) {
        // totalPrice = totalPrice * parseFloat(checkboxWalls.value);

        totalPrice = totalPrice + parseFloat(checkboxWalls.value) * parseInt(squareInput.value);
    }
    if (checkboxFloor.checked) {
        totalPrice = totalPrice * parseFloat(checkboxFloor.value);
    }

    // Форматируем стоимость для необходимого вида и передаём в span: totalPriceElement
    const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);
}
    calc();

// Слушаем каждый инпут
for (const input of inputs) {
    input.addEventListener('input', function () {
        calc();
    })
}


// Form and modal-window
const btnConect = document.querySelector('#conect');
const modal = document.querySelector('#modal');
const btnSubmitForm = document.querySelector('#submit-form');


btnConect.addEventListener('click', function () {
    modal.classList.remove('hidden');
    modal.classList.add('fade');
})

btnSubmitForm.addEventListener('click', function () {
    modal.classList.add('hidden');
    modal.classList.remove('fade');
})


modal.addEventListener('click', function () {
    modal.classList.remove('fade');
    modal.classList.add('hidden');
})

modal.querySelector('.modal-wrapper').addEventListener('click', function (e) {
    e.stopPropagation();
});