'use client'; // VERY IMPORTANT for App Router components using browser-only APIs

import React from "react";
import BannerCarousal from '../components/BannerCarousal';
import RecentEventsOrganized from '../components/EventsOrganized';
import OurImpact from '../components/OurImapcts/OurImpacts'
import NewsAndUpdates from '../components/NewsAndUpdates/NewsAndUpdates'

export default function Home() {
  return (
    <div >
      <BannerCarousal/>
      <RecentEventsOrganized />
      <OurImpact/>
      <NewsAndUpdates />
    </div>
  );
}
