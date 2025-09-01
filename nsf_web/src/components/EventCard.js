import React from "react";

const EventCard = ({
  image,
  date,
  title,
  description,
  category,
  categoryColor = "bg-yellow-500",
  readMoreLink = "#",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-300 h-160 object-cover" />
        <div
          className={`absolute top-3 left-3 ${categoryColor} text-white px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide`}
        >
          {category}
        </div>
      </div>
      <div className="p-4">
        <div className="text-primary text-sm font-medium mb-2 uppercase">
          {date}
        </div>
        <h3 className="text-primaryText text-lg font-bold mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-secondaryText text-sm mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        <a
          href={readMoreLink}
          className="text-primary text-sm hover:text-primaryButtonHover transition-colors duration-200 uppercase tracking-wide"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default EventCard;
