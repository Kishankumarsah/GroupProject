import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        sx={{
          backgroundImage: "linear-gradient(to right, wheat, white)",
        }}
      >
        {/* background: linear-gradient(to right, #ff6b6b, #4ecdc4); */}
        <Typography fontWeight="bold" fontSize="32px" color="purple">
          SnapLog
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        // sx={{
        //   backgroundImage: "radial-gradient( circle, wheat, white)",
        // }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to SnapLog, the Social Media for Nomad !
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
