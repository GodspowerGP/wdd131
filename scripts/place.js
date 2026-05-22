const yearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

const today = new Date();
yearSpan.textContent = today.getFullYear();
lastModifiedSpan.textContent = document.lastModified;

const temperature = 30;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

const windChillSpan = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillSpan.textContent = windChill.toFixed(1) + " °C";
} else {
    windChillSpan.textContent = "N/A";
}
