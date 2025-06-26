import UpcomingEventCard from './UpcomingEventCard';

const UpcomingEventsSection = () => {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      time: "09:05AM - 01:05 AM",
      readMoreLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      time: "09:05AM - 01:05 AM",
      readMoreLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face",
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      time: "09:05AM - 01:05 AM",
      readMoreLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      title: "Environmental Clean Up Day",
      author: "Brooklyn Simmons",
      time: "09:05AM - 01:05 AM",
      readMoreLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
            Events.
          </h1>
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
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
    </div>
  );
};

export default UpcomingEventsSection;
