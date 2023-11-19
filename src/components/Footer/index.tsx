"use client";

import Image from "next/image";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";

const Container = styled("footer")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    borderTop: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#09090D",
  },
  padding: "2rem",
}));

const Footer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: { xs: "1.25rem", md: "2rem" },
        flexDirection: { xs: "column", md: "row" },
        gap: "1rem",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          borderRadius: "2rem",
          px: "2rem",
          py: "1rem",
          width: { xs: "100%", md: "9rem" },
        }}
      >
        Back
      </Button>
      <Button
        variant="outlined"
        type="submit"
        sx={{
          borderRadius: "2rem",
          px: "2rem",
          py: "1rem",
          width: { xs: "100%", md: "14.625rem" },
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack
          justifyContent={{ xs: "center", md: "space-between" }}
          flexDirection="row"
          sx={{ width: "100%" }}
        >
          <Typography
            sx={{
              background:
                "linear-gradient(90deg, #523FD7 -20.19%, #FF7DFF 168.46%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Next
          </Typography>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Image src="/next-btn.svg" alt="next-icon" width={16} height={12} />
          </Box>
        </Stack>
      </Button>
    </Container>
  );
};

export default Footer;
