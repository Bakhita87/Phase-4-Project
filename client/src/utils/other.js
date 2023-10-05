import React from "react";

function OtherContent({ amenities, description }) {
  return (
    <section>
      <h2>Description</h2>
      <p>{description}</p>
      <h2>Amenities</h2>
      <p>{amenities}</p>
      {/* Other content */}
    </section>
  );
}

export default OtherContent;
