import React from 'react';
import { FavoriteBorder as Heart, PeopleOutlined as Users, TrendingUp as Activity } from '@mui/icons-material';

const OurImpact = () => {
  const impactStats = [
    {
      title: "Lives Saved",
      value: "5,000+",
      icon: <Heart className="w-6 h-6 text-primary" />
    },
    {
      title: "Blood Units Donated",
      value: "10,000+",
      icon: <Activity className="w-6 h-6 text-primary" />
    },
    {
      title: "Medical Assistance Provided",
      value: "2,500+",
      icon: <Users className="w-6 h-6 text-primary" />
    },
    {
      title: "Food Distributed",
      value: "2,500+",
      icon: <Users className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="mx-10 py-6 sm:py-8">
        <h1 className="text-3xl font-bold text-primary mb-10">
            Our Impact
          </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-statsCard rounded-lg p-10 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-primaryText font-medium text-lg">{stat.title}</div>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primaryText">{stat.value}</div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default OurImpact;
