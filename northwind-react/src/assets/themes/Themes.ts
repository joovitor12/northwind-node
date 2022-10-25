import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#121212",
    800: "#2F2E31",
    700: "#59C4EC",
    600: "#FFBF00",
  },
  fontSizes: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    "2xl": "3rem",
    "3xl": "3.5rem",
    "4xl": "4rem",
    "5xl": "4.5rem",
    "6xl": "5rem",
  },
};

const fonts = {
  heading: `'Open Sans', sans-serif`,
  body: `'Raleway', sans-serif`,
};

export const Theme = extendTheme({ colors, fonts });
