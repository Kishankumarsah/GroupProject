import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <>
      <WidgetWrapper margin={"10px"}>
        {/* <FlexBetween>
          <Typography color={dark} variant="h5" fontWeight="500">
            Sponsored
          </Typography>
          <Typography color={medium}> Ad</Typography>
        </FlexBetween>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:3001/assets/info1.jpeg"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
        <FlexBetween>
          <Typography color={main}>Rapido</Typography>
          <Typography color={medium}>rapido.com</Typography>
        </FlexBetween>
        <Typography color={medium} m="0.5rem 0">
          Your pathway to stunning and immaculate beauty and made sure your skin
          is exfoliating skin and shining like light.
        </Typography>
      </WidgetWrapper>
      <WidgetWrapper margin={"10px"}>
        <FlexBetween>
          <Typography color={dark} variant="h5" fontWeight="500">
            Sponsored
          </Typography>
          <Typography color={medium}> Ad</Typography>
        </FlexBetween>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:3001/assets/info2.jpeg"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
        <FlexBetween>
          <Typography color={main}>KFC</Typography>
          <Typography color={medium}>kfc.com</Typography>
        </FlexBetween>
        <Typography color={medium} m="0.5rem 0">
          We believe that you should come to work as the best version of
          yourself and treat every guest like a friend.
        </Typography> */}
      </WidgetWrapper>
      {/* <WidgetWrapper margin={"10px"}>
        <FlexBetween>
          <Typography color={dark} variant="h5" fontWeight="500">
            Sponsored
          </Typography>
          <Typography color={medium}> Ad</Typography>
        </FlexBetween>
        <img
          width="100%"
          height="auto"
          alt="advert"
          src="http://localhost:3001/assets/info2.jpeg"
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
        <FlexBetween>
          <Typography color={main}>MikaCosmetics</Typography>
          <Typography color={medium}>mikacosmetics.com</Typography>
        </FlexBetween>
        <Typography color={medium} m="0.5rem 0">
          Your pathway to stunning and immaculate beauty and made sure your skin
          is exfoliating skin and shining like light.
        </Typography>
      </WidgetWrapper> */}
    </>
  );
};

export default AdvertWidget;
