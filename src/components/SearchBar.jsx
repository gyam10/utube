import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #f5f5f5",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ p: { md: "10px", xs: "3px" } }}>
          <Search sx={{ color: "gray" }} />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
