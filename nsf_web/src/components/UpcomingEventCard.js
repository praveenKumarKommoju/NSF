import React from 'react';
import TrendingFlatOutlinedIcon from '@mui/icons-material/TrendingFlatOutlined';

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
        <div className="w-96 h-96 p-4">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
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
            className="inline-flex items-center text-primary text-sm font-semibold hover:text-primaryButtonHover transition-colors duration-200 captalize tracking-wide"
          >
            <TrendingFlatOutlinedIcon fontSize='medium' className='mr-2'/>
            <span className="">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;