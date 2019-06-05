class Weather {
  constructor() {
    this.key = 'vd10BzG5pEfSLGAqEoX6krNtTv1bO5PR'
    this.WeatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  }

  async updateCity(city) {
    // returns a promise due to async keyword
    const cityDets = await this.getCity(city) // wait unit we get city before calling next function
    const weather = await this.getWeather(cityDets.Key)

    // return {cityDets: cityDets, weather: weather}
    // object short-hand notation: simpfly above statement
    return { cityDets, weather }
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`
    const response = await fetch(this.cityURI + query)
    const data = await response.json()

    return data[0]
  }

  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`
    const response = await fetch(this.WeatherURI + query)
    const data = await response.json()
    return data[0]
  }
}
