import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div className="sidebar">
      {/* <li>
          <Link to="/">Home</Link>
        </li> */}
      <div>
        <Link style={{ color: "black", textDecoration: "none" }} to="/">
          <Typography color={colors.grey[100]}>Home</Typography>
        </Link>
      </div>
      {/* <div>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to="/cryptocurrencies"
        >
          <Typography color={colors.grey[100]}>Cryptocurrencies</Typography>
        </Link>
      </div> */}
      {/* <div>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to="/exchanges"
        >
          <Typography color={colors.grey[100]}>Exchanges</Typography>
        </Link>
      </div> */}
      <div>
        <Link style={{ color: "black", textDecoration: "none" }} to="/news">
          <Typography color={colors.grey[100]}>News</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
