import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="The Venue Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50704.10601253513!2d-122.11628635162546!3d37.41331828556093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2sMountain+View%2C+California%2C+EE.+UU.!5e0!3m2!1ses!2scr!4v1546880547106"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
          <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
