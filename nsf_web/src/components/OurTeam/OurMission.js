import React from "react";
import OurTeam from "./OurTeam"

const AboutPage = () => {

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-primary mb-10">Our Mission</h1>
      <p className="text-primaryText text-lg leading-relaxed">
        At the Lifeblood Foundation, our mission is to ensure a stable and safe
        blood supply for all patients in need. We are dedicated to promoting
        voluntary blood donation, providing medical assistance, and supporting
        research to improve transfusion medicine. Our commitment extends to
        educating the public about the importance of blood donation and
        fostering a culture of giving within our community. At the Lifeblood Foundation, our mission is to ensure a stable and safe
        blood supply for all patients in need. We are dedicated to promoting
        voluntary blood donation, providing medical assistance, and supporting
        research to improve transfusion medicine. Our commitment extends to
        educating the public about the importance of blood donation and
        fostering a culture of giving within our community.
      </p>
      <OurTeam />
    </div>
  );
};

export default AboutPage;
