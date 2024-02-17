"use client";

import { ThreeDots } from "react-loader-spinner";
import "../css/Loading.css";

export default function Loading() {
  return (
    <div className="loader-container">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
