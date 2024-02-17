"use client";

import { Triangle } from "react-loader-spinner";
import "../css/Loading.css";

export default function Loading() {
  return (
    <div className="loader-container">
      <Triangle
        visible={true}
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="triangle-loading"
      />
    </div>
  );
}
