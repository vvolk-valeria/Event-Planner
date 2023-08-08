import axios from 'axios';

export const getEventById = async eventId => {
  try {
    const response = await axios.get(`/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const makeData = item => {
  const formatDate = item.date.split('-').reverse().join('.');
  return formatDate;
};

export const postImageToStorage = async img => {
  try {
    const response = await axios.post(`/picture`, img);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const makeRandomNumber =()=>{
  const randomNumber= Math.floor(Math.random() * (10 - 1) + 1);
  return randomNumber;
}
