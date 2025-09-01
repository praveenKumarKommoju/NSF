import UpcomingEventCard from "./UpcomingEventCard";
import { useSelector } from "react-redux";

const UpcomingEventsSection = () => {
  const events = useSelector((state) => state.upcomingEvents.events);

  return (
    <div className="mx-10 py-6">
      <h1 className="text-3xl font-bold text-primary mb-10">Upcoming Events</h1>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events?.map((event, index) => (
          <UpcomingEventCard
            key={index}
            image={event.image}
            title={event.title}
            author={event.author}
            time={event.time}
            readMoreLink={event.readMoreLink}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
