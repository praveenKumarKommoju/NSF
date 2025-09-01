import React from 'react';
import EventCard from "./EventCard"
import { useSelector } from 'react-redux';
const EventsOrganized = () => {
  const newsItems=useSelector(state=>state.eventsOrganized.events)
  return (
    <div className="mx-10 py-6 sm:py-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-primary mb-10">
            Events organized
          </h1>
          {/* <button className="text-gray-600 hover:text-gray-800 font-semibold text-sm sm:text-base uppercase tracking-wide transition-colors duration-200 self-start sm:self-auto">
            VIEW ALL
          </button> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {newsItems.map((item, index) => (
            <EventCard
              key={index}
              image={item.image}
              date={item.date}
              title={item.title}
              description={item.description}
              category={item.category}
              categoryColor={item.categoryColor}
              readMoreLink={item.readMoreLink}
            />
          ))}
        </div>
      </div>
  );
};

export default EventsOrganized;
