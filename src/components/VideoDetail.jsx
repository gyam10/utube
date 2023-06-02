import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { apiFetch } from "../utils/apiFetch";
import { CheckCircle, ThumbUpOffAlt } from "@mui/icons-material";
import { Videos } from "./";

const VideoDetail = () => {
  const [videoDetail, setVideosDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    apiFetch(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideosDetail(data?.items[0])
    );

    apiFetch(`search?part=snippet&realtedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          {/* Video player on the left */}
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "85px" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography color="gray" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#cccdc6"
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }} gap="5px">
                    <Typography variant="body1" sx={{ opacity: 0.7 }}>
                      {parseInt(likeCount).toLocaleString()}
                    </Typography>
                    <ThumbUpOffAlt sx={{ opacity: 0.7 }} />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Box>

          {/* Recommendation or rekated videos on right */}
          <Box
            px={2}
            py={{ mD: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default VideoDetail;
