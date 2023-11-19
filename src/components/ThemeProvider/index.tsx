"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#12111A" },
    text: { primary: "#FFFFFF", secondary: "#D0CFD1" },
    divider: "#3A3940",
    primary: { main: "#523FD7" },
    secondary: { main: "#FF7DFF" },
  },
  typography: {
    fontFamily: "var(--font-poppins)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "2rem",
        },
        outlined: {
          border: "1px solid #616066",
          color: "#fff",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 745,
      lg: 1440,
      xl: 1728,
    },
  },
});
console.log(darkTheme);

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export default Provider;
