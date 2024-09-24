// src/components/Preloader.js
import React from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-neutral-800 flex justify-center items-center z-50">
      <ClipLoader color="#4ADE80" loading={true} css={override} size={50} />
    </div>
  );
};

export default Preloader;
