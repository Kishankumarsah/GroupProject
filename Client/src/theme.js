// color design tokens export
export const colorTokens = {
  grey: {
    0: "#f0f0e1",
    // 0: "#f2f2ce",
    // 0: "#FFFFFF",

    10: "#c3c9c9",
     //10: "#F6F6F6",
    50: "#c3c9c9",
    // 50: "#d5f5f3",
    // 50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A", //COMPONENT COLOR AT DARK MODE
    900: "#0A0A0A", //BACK GROUND COLOR AT DARK MODE
    1000: "#000000",
  },
  // grey: {
  //   0: "#FFFFFF",

  //   10: "#F6F6F6",
  //   50: "#F0F0F0",
  //   100: "#E0E0E0",
  //   200: "#C2C2C2",
  //   300: "#A3A3A3",
  //   400: "#858585",
  //   500: "#666666",
  //   600: "#4D4D4D",
  //   700: "#333333",
  //   800: "#1A1A1A", //COMPONENT COLOR AT DARK MODE
  //   900: "#0A0A0A", //BACK GROUND COLOR AT DARK MODE
  //   1000: "#000000",
  // },
  primary: {
    50: "#E6FBFF",
    100: "#F5DEB3",
    200: "#99EEFD",
    300: "#F5DEB3",
    400: "#33DDFB",
    500: "#A020F0",
    // 500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
  // primary: {
  //   50: "#E6FBFF",
  //   100: "#F5DEB3",
  //   200: "#99EEFD",
  //   300: "#F5DEB3",
  //   400: "#33DDFB",
  //   500: "#A020F0",
  //   // 500: "#00D5FA",
  //   600: "#00A0BC",
  //   700: "#006B7D",
  //   800: "#00353F",
  //   900: "#001519",
  // },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[200],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              alt: colorTokens.grey[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              alt: colorTokens.grey[0],
            },
          }),
    },
    typography: {
      fontFamily:["System-ui", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["System-ui", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["System-ui", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["System-ui", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["System-ui", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["System-ui", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["System-ui", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
    // typography: {
    //   fontFamily: ["Rubik", "sans-serif"].join(","),
    //   fontSize: 12,
    //   h1: {
    //     fontFamily: ["Rubik", "sans-serif"].join(","),
    //     fontSize: 40,
    //   },
    //   h2: {
    //     fontFamily: ["Rubik", "sans-serif"].join(","),
    //     fontSize: 32,
    //   },
    //   h3: {
    //     fontFamily: ["Rubik", "sans-serif"].join(","),
    //     fontSize: 24,
    //   },
    //   h4: {
    //     fontFamily: ["Rubik", "sans-serif"].join(","),
    //     fontSize: 20,
    //   },
    //   h5: {
    //     fontFamily: ["Rubik", "sans-serif"].join(","),
    //     fontSize: 16,
    //   },
    //   h6: {
    //     fontFamily: ["Rubik", "sans-serif"].join(","),
    //     fontSize: 14,
    //   },
    // },
  };
};
