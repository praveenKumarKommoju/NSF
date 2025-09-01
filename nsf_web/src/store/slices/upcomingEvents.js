import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    events:[
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      time: "09:05AM - 01:05 AM",
      readMoreLink: "/donate"
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      time: "09:05AM - 01:05 AM",
      readMoreLink: "/donate"
    },
    {
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face",
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      time: "09:05AM - 01:05 AM",
      readMoreLink: "/donate"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      time: "09:05AM - 01:05 AM",
      readMoreLink: "/donate"
    }
  ]
}

const upcomingEventsSlice = createSlice({
  name: "upcomingEvents",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events= [...state.events, action.payload.data];
    }
    
  },
});

export const { addEvent } = upcomingEventsSlice.actions;
export default upcomingEventsSlice.reducer;
