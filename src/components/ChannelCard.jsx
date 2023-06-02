import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "356px", md: "350px" },
          height: "326px",
          margin: "auto",
          marginTop,
        }}
      >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              Color: "white",
            }}
          >
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high?.url}
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px solid #f5f5f5",
              }}
            />
            <Typography variant="h6" sx={{ color: "white" }}>
              {channelDetail?.snippet?.title}
              <CheckCircle
                sx={{
                  fontSize: 14,
                  color: "gray",
                  ml: "4px",
                }}
              />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography sx={{ color: "#cccdc6" }}>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                Subscribers
              </Typography>
            )}
          </CardContent>
        </Link>
      </Box>
    </>
  );
};

export default ChannelCard;
