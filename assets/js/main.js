let weatherInput = document.getElementById('weather_input');
let txt = 'Die Wetterqualität ist ';

function weather() {
    if (weatherInput.value >= 0 && weatherInput.value <= 2) {
        weatherQuality = "schlecht";
    } else if (weatherInput.value >= 3 && weatherInput.value <= 5) {
        weatherQuality = "okay";
    } else if (weatherInput.value >= 6 && weatherInput.value <= 7) {
        weatherQuality = "gut";
    } else if (weatherInput.value >= 8 && weatherInput.value <= 10) {
        weatherQuality = "super";
    }
    document.getElementById('weather_output').innerHTML = (`${txt} ${weatherQuality} (${weatherInput.value} Punkte).`);
}
