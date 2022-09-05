const apiKey = 'e61c0866c74cb46835ba6f993937e668';

const loadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}


const displayTemperature = data => {
    console.log(data.weather[0].main)
    setInnerText('temperature', data.main.temp)
    setInnerText('weather', data.weather[0].main)


}

const setInnerText = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
    const weather = document.getElementById(id).innerText = text;
}

document.getElementById('btn').addEventListener('click', function () {
    const inputFiled = document.getElementById('input-filed');
    const inputFiledValue = inputFiled.value;
    console.log(inputFiledValue)
    //set city 
    document.getElementById('city').innerText = inputFiledValue;

    loadTemperature(inputFiledValue)
})