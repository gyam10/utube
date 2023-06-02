import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <Typography
          color="red"
          style={{
            paddingLeft: "10px",
            fontWeight: "bold",
            fontVariant: { xs: "h5", md: "h3" },
          }}
        >
          UTUBE
        </Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
