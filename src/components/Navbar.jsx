import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
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
            paddingLeft: { md: "10px" },
            fontWeight: "bold",
            fontVariant: { xs: "h6", md: "h3" },
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
