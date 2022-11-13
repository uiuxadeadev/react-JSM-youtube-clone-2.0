import React from "react";
import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ( {videos, direction} ) => {
  if(!videos?.length) return 'Loading...'

  return (
    <Stack direction={direction || "row"} flexWrap={"wrap"} justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        // console.log("item.id.videoId", item.id.videoId, idx)
        // console.log("item.id.channelId", item, idx)
        // console.log("item.id.channelId", item.id.channelId, idx)
        // console.log("title", item.snippet.title, idx) 
        // console.log("title", item.snippet.thumbnails.high.url, idx) 


        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
            

      ))}
    </Stack>  
  )
}

export default Videos