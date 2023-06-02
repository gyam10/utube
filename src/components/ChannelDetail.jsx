import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiFetch } from "../utils/apiFetch";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    apiFetch(`channels?parts=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    apiFetch(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  // console.log(channelDetail);
  return (
    <>
      <Box minHeight="85vh">
        <div
          style={{
            height: "300px",
            background: `linear-gradient(90deg, rgba(85,85,85,1) 0%, rgba(157,157,157,1) 35%, rgba(80,80,80,1) 100%)`,
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "20px", xs: "25px" } }} />
        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default ChannelDetail;
