import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <li>
          <Link to="/">Home</Link>
        </li> */}
      <div>
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          Home
        </Link>
      </div>
      <div>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to="/cryptocurrencies"
        >
          Cryptocurrencies
        </Link>
      </div>
      <div>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to="/exchanges"
        >
          Exchanges
        </Link>
      </div>
      <div>
        <Link style={{ color: "black", textDecoration: "none" }} to="/news">
          News
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
