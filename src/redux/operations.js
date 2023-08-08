import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "http://63ae1642ceaabafcf172c8fe.mockapi.io/";


// export const getEventsByCategories = createAsyncThunk(
//   'notices/fetchByCategories',
//   async (category, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `/notices/category?category=${category}`
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getEvents = createAsyncThunk(
  'events/fetchEvents',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `/events`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getEventById =createAsyncThunk(
    'events/getEventById',
    async (eventId, thunkAPI) => {
      try {
        const response = await axios.get(`/events/${eventId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  ); 

export const addEvent = createAsyncThunk(
  'events/addEvent',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/events', data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',

  async (eventId, thunkAPI) => {
    try {
      const response = await axios.delete(`/events/${eventId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const getNoticesByTitle = createAsyncThunk(
//   'notices/getNoticesByTitle',
//   async (query, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `/notices/title?category=${query.category}&title=${query.queryFromSearchParams}`
//       );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getAllSelectedNotices = createAsyncThunk(
//   'notices/fetchSelectedNotices',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`/notices/selected`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const getAllOwnNotices = createAsyncThunk(
//   'notices/getOwnNotices',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`/notices/user`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addToFavorite = createAsyncThunk(
//   'favoriteNotices/addFavoriteNotice',
//   async (noticeId, thunkAPI) => {
//     try {
//       const response = await axios.post(`/notices/selected/${noticeId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteFromFavorite = createAsyncThunk(
//   'favoriteNotices/deleteFavoriteNotice',
//   async (noticeId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/notices/selected/${noticeId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );