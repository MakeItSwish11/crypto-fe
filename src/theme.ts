import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { createThemePalette, createThemeComponent } from "./themeConfig";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const palette = createThemePalette();

// Create a theme instance.
const muiTheme = createTheme({
  palette,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const theme = createThemeComponent(muiTheme); // Pass the theme object here

export default theme;
