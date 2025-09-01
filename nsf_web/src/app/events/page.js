'use client';
import React from "react";
import RecentEventsOrganized from '../../components/EventsOrganized';
import UpcomingEvents from '../../components/UpcomingEvents';

const Events = () => {
  return <div className="mx-10 py-6">
    <h1 className="text-4xl font-bold text-primary mx-10 py-6">Events</h1>
    <div className="mx-10 text-sm text-secondaryText">Join us in making a difference. Explore our upcoming and past events, and find ways to get involved.</div>
    <UpcomingEvents />
   <RecentEventsOrganized />
  </div>;
}

export default Events;
