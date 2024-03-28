

const inputText = document.getElementById("input-text")
const searchButton = document.getElementById("search-btn")
const weatherIcon = document.querySelector(".weather-icon")
const temperature = document.querySelector(".temp")
const city = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".wind")
const error = document.querySelector(".error")
const weather = document.querySelector(".weather")


const apiKey = "7d20b4b192c0e59fefeccfa4a5f0ac20"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
searchButton.addEventListener("click", function(){
    if(inputText.value) {
        checkWeather(inputText.value)
    }
})


async function checkWeather(input) {
    const response = await fetch(apiUrl+`&q=${input}&appid=${apiKey}`)
    var data = await response.json()
    
    if(data.message==="city not found") {
        console.log("yes, it came here")
        error.style.display = "block"
        weather.style.display = "none"
    } else {
        error.style.display = "none"
        temperature.innerHTML = Math.round(data.main.temp)+`°C`
        city.innerHTML = data.name
        windSpeed.innerHTML = data.wind.speed+`km/h`
        humidity.innerHTML = data.main.humidity+`%`
        const key = Object.keys(data)
        weatherIcon.src = `images/${key[6]}.png`
        weather.style.display = "block"
        }
    inputText.value=""
    
}
