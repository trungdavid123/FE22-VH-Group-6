const hamburgerBtn = document.querySelector('.menu-hamburgare img');
const linkList = document.querySelector('.link-list');
const contactUsContainer = document.querySelector('.contact-us');
const header = document.querySelector('.header');
const weatherBoardList = document.querySelector('.weather-board-list');

let cities = [
    {
        lat: "55.6050",
        long: "13.0038" // Malmö
    },
    {
        lat: "67.855800", // Kiruna
        long: "20.225282"
    },
    {
        lat: "59.3294", // Helsingborg
        long: "18.0686"
    },
    {
        lat: "56.046467", // Malmö
        long: "12.694512"
    },
    {
        lat: "56.161224", // Karlskrona
        long: "15.586900"
    }
];

function getWeather() {
    cities.map((city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.long}&units=metric&&appid=ba9d1bb4264be8e0b7035753ce30c006`)
            .then((res) => res.json())
            .then((data) => {
                var date = new Date(data.dt * 1000);
                let element = `
                    <div class="weather-board">
                        <div class="left-board">
                            <div class="board-title">
                                <h3>${data.name}</h3>
                                <span class="subtitle">${date.toLocaleDateString('en-GB', { weekday: "long", month: "long", day: "numeric" })}</span>
                            </div>
                            <div class="board-main">
                                <div class="weather-img">
                                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                                </div>
                                <div class="temperature">
                                    <h2>${Math.round(data.main.temp)}°</h2>
                                    <span class="temperature-desc">${data.weather[0].description}</span>
                                </div>
                            </div>
                        </div>
                        <div class="weather-parameter">
                            <div class="weather-detail-box">
                                <div class="weather-detail-item">
                                    <p>${Math.round(data.main.temp_max)}°</p>
                                    <span>High</span>
                                </div>
                                <div class="weather-detail-item">
                                    <p>${Math.round(data.wind.speed)}mps</p>
                                    <span>Wind</span>
                                </div>
                                <div class="weather-detail-item">
                                    <p>${new Date(data.sys.sunrise * 1000).getHours()}:${new Date(data.sys.sunrise * 1000).getMinutes()}</p>
                                    <span>Sunrise</span>
                                </div>
                                <div class="weather-detail-item">
                                    <p>${Math.round(data.main.temp_min)}°</p>
                                    <span>Low</span>
                                </div>
                                <div class="weather-detail-item">
                                    <p>${Math.round(data.main.feels_like)}°</p>
                                    <span>Feels like</span>
                                </div>
                                <div class="weather-detail-item">
                                <p>${new Date(data.sys.sunset * 1000).getHours()}:${new Date(data.sys.sunrise * 1000).getMinutes()}</p>
                                <span>Sunset</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                `;
                weatherBoardList.innerHTML += element;
            })
    })
}
getWeather();

hamburgerBtn.addEventListener('click', () => {
    linkList.classList.toggle('show');
    contactUsContainer.classList.toggle('show');
    header.classList.toggle('show');
});

