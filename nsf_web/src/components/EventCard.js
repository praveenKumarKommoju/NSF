import React from 'react';

const EventCard = ({ 
  image,
  date,
  title,
  description,
  category,
  categoryColor = "bg-yellow-500",
  readMoreLink = "#"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-256 h-224 object-cover"
        />
        {/* Category Badge */}
        <div className={`absolute top-3 left-3 ${categoryColor} text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide`}>
          {category}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4">
        {/* Date */}
        <div className="text-orange-500 text-sm font-medium mb-2 uppercase">
          {date}
        </div>
        
        {/* Title */}
        <h3 className="text-purple-900 text-lg font-bold mb-3 leading-tight hover:text-purple-700 transition-colors">
          <a href={readMoreLink} className="block">
            {title}
          </a>
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Read More Link */}
        <a 
          href={readMoreLink}
          className="text-gray-500 text-sm font-semibold hover:text-purple-700 transition-colors duration-200 uppercase tracking-wide"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default EventCard;
