import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ffc900d62d0f293eaac4705c45ca1a11&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError('City not found');
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(city);
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300 ease-in-out focus:outline-none"
        >
          Get Weather
        </button>
      </form>
      {error && <div className="text-red-600">{error}</div>}
      {weatherData && (
        <div className="p-8 bg-gray-100 rounded-md">
          <h1 className="text-3xl font-bold mb-4">{weatherData.name}</h1>
          <div className="flex justify-between items-center">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
              className="w-16 h-16"
            />
            <div>
              <p className="text-lg capitalize">
                {weatherData.weather[0].description}
              </p>
              <p className="text-xl">{weatherData.main.temp}&deg;C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
