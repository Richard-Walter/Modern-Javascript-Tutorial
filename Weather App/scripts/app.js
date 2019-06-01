const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructure properties of above
    const{cityDets, weather} = data

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`


    //update night and day images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    // let timeSrc = null;
    // if (weather.IsDayTime){
    //     timeSrc = 'img/day.svg'
    // } else{
    //     timeSrc = 'img/night.svg'
    // }

    //use ternary operator for above commented code
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'

    time.setAttribute('src', timeSrc)
    

    //remove the d-none class if present
    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}


const updateCity = async (city) => {    //returns a promise due to async keyword

    const cityDets = await getCity(city);   //wait unit we get city before calling next function
    const weather = await getWeather(cityDets.Key)

    // return {cityDets: cityDets, weather: weather}
    //object short-hand notation: simpfly above statement
    return { cityDets, weather };

}


cityForm.addEventListener('submit', e => {
    //prevent default actions
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});