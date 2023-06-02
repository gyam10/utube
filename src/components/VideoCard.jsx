import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <Card
        sx={{
          width: { md: "350px", sm: "358px", xs: "100%" },
          boxShadow: "none",
          borderRadius: "0",
        }}
      >
        <Link to={`/video/${videoId}`}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{
              width: { md: "350px", xs: "100%", sm: "358px" },
              height: 200,
            }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: "black", height: "fill" }}>
          <Link to={`/video/${videoId}`}>
            <Typography sx={{ overflow: "hidden", color: "white" }}>
              {snippet?.title.slice(0, 55)}
            </Typography>
          </Link>
          <Link to={`/video/${snippet?.channelId}`}>
            <Typography sx={{ overflow: "hidden", color: "gray" }}>
              {snippet?.channelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "4px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default VideoCard;
