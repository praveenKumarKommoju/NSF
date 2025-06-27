import React from 'react';
import EventCard from "./EventCard"
const EventsOrganized = () => {
  const newsItems = [
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
  ];

  return (
    <div className="bg-gray-50 py-6 sm:py-8">
      <div className="mx-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-0">
            Events organized
          </h1>
          {/* <button className="text-gray-600 hover:text-gray-800 font-semibold text-sm sm:text-base uppercase tracking-wide transition-colors duration-200 self-start sm:self-auto">
            VIEW ALL
          </button> */}
        </div>
        
        {/* News Grid */}
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
    </div>
  );
};

export default EventsOrganized;
