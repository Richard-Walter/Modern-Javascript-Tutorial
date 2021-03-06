/* eslint-disable spaced-comment */
/* eslint-disable indent */
const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const weather = new Weather()

const updateUI = (data) => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  // destructure properties of above
  const { cityDets, weather } = data

  console.log(details)
  details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`

  // update night and day images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
  icon.setAttribute('src', iconSrc)

  // let timeSrc = null;
  // if (weather.IsDayTime){
  //     timeSrc = 'img/day.svg'
  // } else{
  //     timeSrc = 'img/night.svg'
  // }

  // use ternary operator for above commented code
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'

  time.setAttribute('src', timeSrc)

  // remove the d-none class if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }
}

cityForm.addEventListener('submit', e => {
  // prevent default actions
  e.preventDefault()

  //get city value
  const city = cityForm.city.value.trim()
  cityForm.reset()

  //update UI with new city
  weather.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))

  //set city to local storage
  localStorage.setItem('city', city)
})

// This will run everythime the user visits the page or re-freshers the page
if (localStorage.getItem('city')) {
  weather.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err))
}
