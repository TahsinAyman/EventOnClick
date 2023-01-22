import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#262323",
      light: "#ffffff",
      dark: "#ffffff",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      secondary: "#534e4e",
      disabled: "#d7d2d2",
      hint: "#ffffff",
      primary: "#ffffff",
    },
    divider: "rgba(255,255,255,0.12)",
    background: {
      default: "#0f0d0d",
      paper: "rgba(48,45,45,0.6)",
    },
  },
});
export default theme;
