import { Box, Typography } from "@mui/material";
import React from "react";

const Footer=()=>{

    return (
      <Box>
        <Typography
          sx={{
            background: "#301934",
            marginTop: "100px",
            fontSize: "30px",
            height: "8vh",

            color: "white",
          }}
        >
          <Typography
            sx={{
              justifyContent: "center",
              alignContent: "center",
              marginLeft: "45vw",
              paddingTop: "20px",
            }}
          >
            Ⓒ Created By group 5. All rights are reserved
          </Typography>
        </Typography>
      </Box>
    );
}

export default Footer;