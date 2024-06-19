import React from "react";

const Map = () => {
  return (
    <div className="mt-8">
      <div>
        {/* <img src="/src/assets/Map.png" alt="" /> */}
        <iframe
          className=" rounded-xl w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3500.1878549092658!2d77.37371527475935!3d28.684026675636673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715165961308!5m2!1sen!2sin"
          width="1024"
          height="500"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
