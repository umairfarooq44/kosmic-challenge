"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Radiobuttons from "../ui/RadioButtons";
import Slider from "../ui/Slider";
import ContentSelect from "../ui/ContentSelect";
import { contentData, contentMapping, contentOptions } from "@/utils/data";

const ContentForm = () => {
  const [content, setContent] = useState<string>("fun");

  const onContentChange = (contentValue: string) => {
    setContent(contentValue);
  };

  return (
    <Box
      sx={{
        px: { xs: "1.25rem", md: "2rem" },
        pt: { xs: "1.25rem", md: "3.5rem" },
        flex: { xs: "none", md: "1" },
      }}
    >
      <Typography variant="h5">Content type</Typography>
      <Typography color="text.secondary">
        Choose a content type that best fits your needs.
      </Typography>
      <Divider sx={{ my: "2rem" }} />
      <Typography fontWeight={500} sx={{ mb: "1.5rem" }}>
        What type of content are you creating?
      </Typography>
      <Radiobuttons
        onChange={onContentChange}
        options={contentData}
        value={content}
      />
      <Typography fontWeight={500} sx={{ mb: "1.5rem", mt: "2rem" }}>
        Which type of{" "}
        <Typography component="span" fontWeight={600}>
          “{contentMapping[content]}”
        </Typography>{" "}
        content do you want to create?
      </Typography>
      <ContentSelect options={contentOptions[content]} />
      <Typography fontWeight={500} sx={{ mb: "2.25rem", mt: "2rem" }}>
        Set the number of words for output text.
      </Typography>
      <Slider />
    </Box>
  );
};

export default ContentForm;
