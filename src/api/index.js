import axios from "axios";

export const getWeatherData = async (endpoint, place_id, measurementSystem) => {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
        place_id,
      language: "en",
      units: measurementSystem,
    },
    headers: {
      "x-rapidapi-key": `${import.meta.env.VITE_WEATHER_API_KEY}`,
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data
  } catch (error) {
    console.error(error);
  }
};

export const searchPlaces = async (text) =>{
    const options = {
        method: 'GET',
        url: 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places',
        params: {
          text,
          language: 'en'
        },
        headers: {
          'x-rapidapi-key': `${import.meta.env.VITE_WEATHER_API_KEY}`,
          'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          return response.data
      } catch (error) {
          console.error(error);
      }
}
