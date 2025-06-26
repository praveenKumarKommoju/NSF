'use client'; // VERY IMPORTANT for App Router components using browser-only APIs

import React from "react";
import BannerCarousal from '../components/BannerCarousal';
import RecentEventsOrganized from '../components/EventsOrganized';
import UpcomingEvents from '../components/UpcomingEvents';

export default function Home() {
  return (
    <div >
      <BannerCarousal/>
      <UpcomingEvents/>
      <RecentEventsOrganized />
    </div>
  );
}
