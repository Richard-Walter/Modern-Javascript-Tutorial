const cityForm = document.querySelector('form')


const updateCity = async (city) => {    //returns a promise due to async keyword

    const cityDets = await getCity(city);   //wait unit we get city before calling next function
    const weather = await getWeather(cityDets.Key)

    // return {cityDets: cityDets, weather: weather}
    //object short-hand notation: simpfly above statement
    return {cityDets, weather};

}


cityForm.addEventListener('submit', e => {
    //prevent default actions
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));

});