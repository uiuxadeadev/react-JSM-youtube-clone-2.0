import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from './';
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    // we need to use ".then", not "const data = "" because it returns a promise with asynchronous functions
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((err) => {
        console.log(err.message)
       });
  },[SearchFeed])

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>  
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }} >
        Search Results for:
        <span style={{ color: '#F31503' }}> {searchTerm} </span> 
        videos
      </Typography>

      <Videos videos={ videos } />
    </Box>
  )
}

export default SearchFeed