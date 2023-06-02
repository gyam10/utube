import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { apiFetch } from "../utils/apiFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    // setVideos(null);
    apiFetch(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results for:{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default SearchFeed;
