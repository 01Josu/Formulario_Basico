// Función para mostrar la hora actual
function showCurrentTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(showCurrentTime, 1000);
showCurrentTime();

// Función para mostrar el clima actual
function showWeather() {
    const weatherElement = document.getElementById('weather-info');
    // Usando una API pública gratuita (Ejemplo: OpenWeatherMap)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-12.0464&longitude=-77.0428&current_weather=true')
        .then(response => response.json())
        .then(data => {
            const temperature = data.current_weather.temperature;
            const weatherDesc = data.current_weather.weathercode;
            weatherElement.innerText = `Temperatura: ${temperature}°C, Condición: ${weatherDesc}`;
        })
        .catch(error => {
            weatherElement.innerText = "No se pudo obtener el clima";
        });
}
showWeather();

// Función para una calculadora básica
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('calc-result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Por favor, ingrese números válidos.";
    } else {
        const result = num1 + num2;
        resultElement.innerText = `Resultado: ${result}`;
    }
}

// Contador de visitas usando localStorage
function visitCounter() {
    const countElement = document.getElementById('visit-count');
    let visits = localStorage.getItem('page_visits');
    if (!visits) {
        visits = 0;
    }
    visits++;
    localStorage.setItem('page_visits', visits);
    countElement.innerText = `Visitas: ${visits}`;
}
visitCounter();
