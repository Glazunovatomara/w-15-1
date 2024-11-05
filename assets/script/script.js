//Создайте массив городов, например cities
const cities = ['Москва', 'Красноярск', 'Пекин', 'Токио'];

//Создайте пустой массив, который будет хранить температуры для каждого города
let temperature = [];

//Используя цикл, пройдитесь по массиву городов и попросите пользователя ввести температуру для каждого города, используя функцию prompt() или другие способы ввода данных пользователем
cities.forEach((city) => {
    let t = prompt (`введите погоду в городе ${city}`, '')
    if(t === '') {
    t = 0
    } 
    temperature.push(t);
    a = city;
    return a
});
console.log(temperature)

//Создайте список, в котором будет отображаться информация о каждом городе и его температуре. Тут нужно будет использовать цикл для перебора элементов массивов, создать элементы и добавить их в список, указывая название города и соответствующую температуру.
const arr = [];
for(i = 0; i<4; i++) {
    let res = `${cities[i]}: ${temperature[i]}°C`;
    arr.push(res)
}

console.log(arr)

//Найдите максимальную и минимальную температуру из массива с температурами. Для этого создайте две переменные и инициализируйте их значениями, которые гарантированно будут больше и меньше любой возможной температуры соответственно.
let temp = temperature.sort((a, b) => a - b)
let tempMin = temp[0]
let tempMax = temp[3]

//Выведите информацию с погодой в разных городах, а также максимальной и минимальной температурой на экран
const list = document.getElementById("list");

for(let i of arr) {
    let p = document.createElement('p');
    p.textContent = `Температура в городе ${i}`;
    list.append(p)
}

const subtitleMin = document.createElement('h2');
subtitleMin.textContent = `Минимальная температура: ${tempMin}°C`;
list.append(subtitleMin);

const subtitleMax = document.createElement('h2');
subtitleMax.textContent = `Максимальная температура: ${tempMax}°C`;
list.append(subtitleMax);
