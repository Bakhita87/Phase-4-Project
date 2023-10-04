// import React from 'react';

// function About() {
//   return (
//     <div>
//       <h2>About Us</h2>
//       <p>
//         Welcome to our restaurant review platform. We are a passionate team of food enthusiasts dedicated to helping you discover the best dining experiences.
//       </p>
//       <p>
//         Our mission is to provide you with honest and reliable restaurant reviews so that you can make informed dining decisions.
//       </p>
//     </div>
//   );
// }

// export default About;

import React from 'react';

// Define the function to be executed when the About page is clicked
function handleClick() {
  alert('You clicked the About page!');
  // You can replace this with any action you want to perform
}

function About() {
  return (
    <div onClick={handleClick}>
      <h2>About Us</h2>
      <p>
        Welcome to our restaurant review platform. We are a passionate team of food enthusiasts dedicated to helping you discover the best dining experiences.
      </p>
      <p>
        Our mission is to provide you with honest and reliable restaurant reviews so that you can make informed dining decisions.
      </p>
    </div>
  );
}

export default About;
