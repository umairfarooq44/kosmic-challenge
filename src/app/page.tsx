import Image from "next/image";
import Header from "@/components/Header";
import { Box } from "@mui/material";
import ContentForm from "@/components/ContentForm";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "inherit" }}>
      <Header />
      <main>
        <ContentForm />
      </main>
    </Box>
  );
}
