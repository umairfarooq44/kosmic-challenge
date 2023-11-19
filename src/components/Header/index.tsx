"use client";

import Box from "@mui/material/Box";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import DriveFileRenameOutlineTwoToneIcon from "@mui/icons-material/DriveFileRenameOutlineTwoTone";
import { styled } from "@mui/material/styles";
import { Button, Typography, Link, Avatar } from "@mui/material";

const Container = styled("header")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "#09090D",
  },
  padding: "2rem",
}));

const IconContainer = styled("span")({
  background: "#18171c",
  borderRadius: "1rem",
  display: "inline-flex",
  padding: "1rem",
});

const Header = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        px: { xs: "1.25rem", md: "2rem" },
      }}
    >
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <IconContainer>
          <ArrowBackRoundedIcon />
        </IconContainer>
        <div>
          <Box sx={{ display: "flex", gap: "0.75rem" }}>
            <Typography fontWeight={500}>Media management</Typography>
            <DriveFileRenameOutlineTwoToneIcon />
          </Box>
          <Typography color="text.secondary">Draft campaign</Typography>
        </div>
      </Box>
      <Box sx={{ display: "flex", gap: "0.75rem" }}>
        <Box sx={{ textAlign: "right", display: { xs: "none", md: "block" } }}>
          <Typography fontWeight={500}>Jane Cooper</Typography>
          <Link href="#" color="secondary" fontWeight={300}>
            Change profile
          </Link>
        </Box>
        <Avatar src="/dp.png" variant="rounded" />
      </Box>
    </Container>
  );
};

export default Header;
