import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

import Navbar from "./Navbar";

function Home() {
  const [loading, setLoading] = useState(false);
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
          <Navbar />
        </>
      )}
    </div>
  );
}

export default Home;
