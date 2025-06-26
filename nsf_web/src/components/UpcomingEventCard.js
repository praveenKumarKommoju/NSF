import React from 'react';
// import { ArrowRight } from 'lucide-react';

const UpcomingEventCard = ({ 
  image,
  title,
  author,
  time,
  readMoreLink = "#"
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="flex">
        {/* Image Section */}
        <div className="w-32 h-32 flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
            {title}
          </h3>
          
          {/* Author and Time */}
          <div className="text-sm text-gray-600 mb-3">
            <span>By {author}</span>
            <span className="ml-4">{time}</span>
          </div>
          
          {/* Read More Link */}
          <a 
            href={readMoreLink}
            className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            {/* <ArrowRight className="w-4 h-4 mr-2" /> */}
            <div className="w-4 h-4 mr-2">{"->"}</div>
            <span className="font-medium">Read More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;