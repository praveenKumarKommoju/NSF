import { configureStore } from "@reduxjs/toolkit";
import upcomingEvents from "./slices/upcomingEvents"
import eventsOrganized from "./slices/eventsOrgaized"

export const store = configureStore({
  reducer: {
    upcomingEvents,
    eventsOrganized
  },
});