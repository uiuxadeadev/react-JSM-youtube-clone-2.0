import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ( {videos} ) => {
  return (
    <Stack direction="row" flexWrap={"wrap"} justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        // console.log("item.id.videoId", item.id.videoId, idx)
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>  
  )
}

export default Videos