import React from "react";
// import { Stethoscope, Users, Heart } from 'lucide-react';
import {
  FavoriteBorder as Heart,
  PeopleOutlined as Users,
  TrendingUp as Stethoscope,
} from "@mui/icons-material";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Amelia Harper",
      role: "Medical Director",
      image: "/api/placeholder/200/200",
      bgColor: "bg-orange-200",
      avatar: "👩‍⚕️",
    },
    {
      id: 2,
      name: "Dr. Ethan Carter",
      role: "Research Director",
      image: "/api/placeholder/200/200",
      bgColor: "bg-amber-200",
      avatar: "👨‍⚕️",
    },
    {
      id: 3,
      name: "Dr. Olivia Bennett",
      role: "Community Outreach Director",
      image: "/api/placeholder/200/200",
      bgColor: "bg-rose-200",
      avatar: "👩‍💼",
    },
  ];

  return (
      <section>
        <h1 className="text-3xl font-bold text-primary py-6">Meet Our Team</h1>

        <div className="grid md:grid-cols-6 gap-8">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="text-center">
              {/* Profile Image Container */}
              <div className="relative mx-auto mb-6 w-48 h-48">
                <div
                  className={`w-full h-full rounded-full ${member.bgColor} flex items-center justify-center overflow-hidden shadow-lg`}
                >
                  {/* Avatar placeholder - in a real app, you'd use actual images */}
                  <div className="text-6xl">{member.avatar}</div>

                  {/* Alternative: Using a gradient background for variety */}
                  {index === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-80 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                        <Stethoscope className="w-16 h-16 text-orange-600" />
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-400 rounded-full opacity-80 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                        <Users className="w-16 h-16 text-amber-600" />
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full opacity-80 flex items-center justify-center">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                        <Heart className="w-16 h-16 text-rose-600" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Team Member Info */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-red-600 font-medium">{member.role}</p>

                {/* Optional: Add a brief description */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600">
                    {index === 0 &&
                      "Leading our medical team with 15+ years of experience in transfusion medicine."}
                    {index === 1 &&
                      "Driving innovative research to improve blood safety and donation processes."}
                    {index === 2 &&
                      "Building community partnerships and donor engagement programs."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default OurTeam;
