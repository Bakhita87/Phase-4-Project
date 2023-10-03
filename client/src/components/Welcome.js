import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="home container">
      <h1 className="heading">Your Opinion Matters</h1>
      <Link to="/signup" className="btn btn-primary btn-lg">
        Get Started
      </Link>
    </div>
  );
}

export default Welcome;

// import React, { useEffect, useState } from "react";
// import { css } from "@emotion/react";
// import HashLoader from "react-spinners/HashLoader";

// const [loading, setLoading] = useState(false);
// const override = css`
//   display: block;
//   border-color: red;
//   margin-top: 20%;
// `;

// useEffect(() => {
//   setLoading(true);
//   setTimeout(() => {
//     setLoading(false);
//   }, 3000);
// }, []);
// return (
//   <div>
//     {" "}
//     {loading ? (
//       <HashLoader
//         color={"#3d2514"}
//         loading={loading}
//         css={override}
//         size={40}
//       />
//     ) : (
//       <></>
//     )}
//   </div>
// );
