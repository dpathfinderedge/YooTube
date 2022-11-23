import axios from 'axios';

const baseURL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: 20
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const getData = async (url) => {
  try {
    const { data } = await axios.get(`${baseURL}/${url}`, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHome = async () => {
  try {
    const { data } = await axios.get('https://youtube-v2.p.rapidapi.com/trending/', {
      params: { country: 'ng', section: 'Now', maxResults: 30 },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    
  }
};
