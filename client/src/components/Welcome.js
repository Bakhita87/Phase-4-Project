import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Hero from "./Hero";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

function Welcome() {
  const [loading, setLoading] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(true); // Manage the visibility of the Newsletter component
  const override = css`
    display: block;
    border-color: red;
    margin-top: 20%;
  `;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleNewsletterClose = () => {
    setShowNewsletter(false);
  };

  return (
    <div>
      {" "}
      {loading ? (
        <HashLoader
          color={"#3d2514"}
          loading={loading}
          css={override}
          size={500}
        />
      ) : (
        <>
          <Hero />
          {showNewsletter && <Newsletter onClose={handleNewsletterClose} />}
          <Footer />
        </>
      )}
    </div>
  );
}

export default Welcome;
