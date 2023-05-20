import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import AdvertWidget from "scenes/widgets/AdvertWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import { blue } from "@mui/material/colors";
import Abouts from "./abouts";
import Contact from "./contact";
import Footer from "./footer";



 const AboutPage=()=>{
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  

  return (
    <Box>
      <Navbar />
      <Abouts/>
      <Contact/>
      <Footer/>
    </Box>
  );
}


export default AboutPage;