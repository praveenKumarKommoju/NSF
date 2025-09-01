import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    events:[
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      date: "27 MAY, 2025",
      title: "Celebrating Veterinary Nursing Awareness Month",
      description: "May is Veterinary Nursing Awareness Month, a time to acknowledge veterinary nurses and the incredible impact they have on animal...",
      category: "COMMUNITY",
      categoryColor: "bg-yellow-500",
      readMoreLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
      date: "16 MAY, 2025",
      title: "Mayhew shortlisted for the Charity Awards 2025",
      description: "The 10 category winners, plus the recipients of the Overall Award for Excellence and the Daniel Phelan Award for Outstanding...",
      category: "INTERNATIONAL",
      categoryColor: "bg-purple-500",
      readMoreLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=250&fit=crop",
      date: "14 MAY, 2025",
      title: "Can animals help us with our mental health?",
      description: "How powerful that Mimosa, after her rocky start, is now bringing comfort to those seeking support with their mental health....",
      category: "COMMUNITY",
      categoryColor: "bg-yellow-500",
      readMoreLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      date: "12 MAY, 2025",
      title: "Mayhew's Community team features at 40th Annual ADCH Conference",
      description: "Mayhew were delighted to be part of the 40th Annual Association of Dogs and Cats Homes (ADCH) Conference this year....",
      category: "COMMUNITY",
      categoryColor: "bg-yellow-500",
      readMoreLink: "#"
    }
  ]
}

const eventsOrganizedSlice = createSlice({
  name: "eventsOrganized",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events= [...state.events, action.payload.data];
    }
    
  },
});

export const { addEvent } = eventsOrganizedSlice.actions;
export default eventsOrganizedSlice.reducer;
