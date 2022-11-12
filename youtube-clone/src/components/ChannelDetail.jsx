import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import zIndex from "@mui/material/styles/zIndex";


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  // get the url after /channel/ on ChannelDetail page
  const { id } = useParams()

  // console.log("id, channelDetail", id, channelDetail)
  // console.log("videos", videos)
  
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0]) 
        // console.log("data: ", data)
        // console.log("data?.items[0]", data?.items[0])
      })
     
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data?.items) 
      // console.log("data: ", data)
      // console.log("data?.items[0]", data?.items[0])
    })

  }, [id])

  return (
    <Box >
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(206,3,184,1) 0%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
          }}
        />
        
        <ChannelCard 
          channelDetail={channelDetail} 
          // To apply magin-top only on ChannelDetail page, pass it in prop.
          marginTop="-110px"
        />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}
          /* To remove the extra space, this box should be a self-closing  */
        />
          <Videos videos={videos} />
      </Box>
    </Box>

  )
}

export default ChannelDetail