import React from "react";
import style from "@/app/styles/loading.module.scss";
const loading = () => {
  return (
    <p
      className={style.loader}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></p>
  );
};

export default loading;
