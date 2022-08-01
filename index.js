const input = document.querySelector('.start-data');
const divError = document.querySelector('.error');
const div = document.querySelector('.input-data');
const outputSurname = document.querySelector('.surname');
const outputName = document.querySelector('.name');
const outputPatronymic = document.querySelector('.patronymic');

input.addEventListener("change", getData);

let inputData = '';

function getData() {
    inputData = input.value;
    div.textContent = `Введены следующие данные: ${inputData}`;
    input.value = '';

    if (inputData.search(/\d/) !== -1) {
        divError.textContent = `Поле не может содержать цифр!`;
        return;
    }

    setData(normalize(inputData));
    divError.textContent = '';
}

function normalize(data) {
    data = data.trim().toLowerCase();
    data = data.replace(/ +/g, ' ');
    data = data.replace(/[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]+/g, '');

    return data;
}

function setData(data) {
    let output = data.split(' ');
    let newOutput = [];

    output.forEach(element => {
        newOutput.push(element[0].toUpperCase() + element.slice(1));
    });

    outputSurname.value = newOutput[0];
    outputName.value = newOutput[1];
    outputPatronymic.value = newOutput[2];
}