import { createSlice } from '@reduxjs/toolkit';
import {
  addEvent,
  deleteEvent,
  getEvents
//   getNoticesByTitle,


} from './operations';


const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    items: [],
    filters: [],
    isLoading: false,
    error: null,
  },

  // reducers: {
  //   // filterFavorites: (state, action) => {
  //   //   state.favorites = state.favorites.filter(favorite =>
  //   //     favorite.title.toLowerCase().includes(action.payload)
  //   //   );
  //   // },
  //   filterCategory: (state, action) => {
  //     state.items = state.items.filter(item =>
  //       item.category.toLowerCase().includes(action.payload)
  //     );
  //   },
  // },


  extraReducers: builder =>
    builder

      //* статус "pending"
      .addCase(getEvents.pending, state => {
        state.isLoading = true;
      })
      .addCase(addEvent.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteEvent.pending, state => {
        state.isLoading = true;
      })


      //* статус "rejected"
      .addCase(getEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })


      //* статус "fulfilled"
      // .addCase(getNoticesByCategories.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items = action.payload;
      // })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item._id !== action.meta.arg);
      })
      // .addCase(getNoticesByTitle.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items = action.payload;
      // })
      // .addCase(getAllOwnNotices.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.items = action.payload;
      // })
      // .addCase(getAllSelectedNotices.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.favorites = action.payload;
      // })
      // .addCase(addToFavorite.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.favorites.push(action.payload);
      // })
      // .addCase(deleteFromFavorite.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.favorites = state.favorites.filter(
      //     favorite => favorite._id !== action.meta.arg
      //   );
      // }),


});

// export const { filterFavorites, filterOwn } = noticesSlice.actions;

export const eventsReducer = eventsSlice.reducer;
