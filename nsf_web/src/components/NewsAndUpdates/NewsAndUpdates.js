import React from "react";

const NewsAndUpdates = () => {
  return (
    <div className="mx-10 py-6 sm:py-8">
      <h1 className="text-3xl font-bold text-primary mb-10">News & Updates</h1>
      <div className="mb-4 flex gap-4 w-full justify-between">
        <div className="h-128 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-primaryText mb-4">
              Upcoming Blood Drive Event
            </h3>
            <p className="text-secondaryText">
              Join us for our annual blood drive on July 15th at the Community
              Center. Your participation can make a difference! Your
              participation can make a difference! Your participation can make a
              difference! Your participation can make a difference! Join us for
              our annual blood drive on July 15th at the Community Center. Your
              participation can make a difference! Your participation can make a
              difference! Your participation can make a difference! Your
              participation can make a difference! Join us for our annual blood
              drive on July 15th at the Community Center. Your participation can
              make a difference! Your participation can make a difference! Your
              participation can make a difference! Your participation can make a
              difference! Join us for our annual blood drive on July 15th at the
              Community Center. Your participation can make a difference! Your
              participation can make a difference! Your participation can make a
              difference! Your participation can make a difference!
            </p>
          </div>
          <div>
            <button className="inline-flex items-center px-6 py-3 bg-statsCard text-primaryText rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="min-w-300 h-128">
            {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop"
            }
            alt={""}
            className="w-300 h-160 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Additional Call to Action */}
      {/* <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Ready to Make a Difference?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Every donation counts. Join thousands of donors who have already
          helped save lives in our community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
            Schedule Donation
          </button>
          <button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            Find Location
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default NewsAndUpdates;
