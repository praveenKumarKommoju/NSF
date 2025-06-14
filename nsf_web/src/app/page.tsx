'use client'; // VERY IMPORTANT for App Router components using browser-only APIs

import React from "react";
import BannerCarousal from '../components/BannerCarousal';

export default function Home() {
  return (
    <div >
      <BannerCarousal/>
    </div>
  );
}
