import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        justifyContent: "center"
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/alltodos">ALL TODOS</Link>
    </div>
  );
};

export { Navbar };
