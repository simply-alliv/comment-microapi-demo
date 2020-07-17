import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#2339FF",
    },
  },
  typography: {
    fontFamily: "Rosario",
    fontSize: 13,
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "white",
        },
        html: {
          overflow: "-moz-scrollbars-vertical",
          overflowY: "scroll",
        },
      },
    },
  },
});

export default theme;
