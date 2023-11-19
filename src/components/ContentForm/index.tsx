"use client";

import { FormEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Radiobuttons from "../ui/RadioButtons";
import Slider from "../ui/Slider";
import ContentSelect from "../ui/ContentSelect";
import Footer from "../Footer";
import {
  IOption,
  contentData,
  contentMapping,
  contentOptions,
} from "@/utils/data";

const ContentForm = () => {
  const [content, setContent] = useState<string>("fun");
  const [contentValue, setContentValue] = useState<IOption | null>(null);
  const [words, setWords] = useState<number>(700);

  const onContentChange = (contentValue: string) => {
    setContent(contentValue);
  };

  const changeContentValue = (val: IOption | null) => {
    setContentValue(val);
  };

  const onWordsChange = (e: Event, newValue: number | number[]) => {
    setWords(newValue as number);
  };

  useEffect(() => {
    changeContentValue(null);
  }, [content]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(content, contentValue?.value, words);
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{ display: "flex", flexDirection: "column", flex: 1 }}
    >
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
        <ContentSelect
          value={contentValue}
          changeValue={changeContentValue}
          options={contentOptions[content]}
        />
        <Typography fontWeight={500} sx={{ mb: "2.25rem", mt: "2rem" }}>
          Set the number of words for output text.
        </Typography>
        <Slider value={words} onChange={onWordsChange} />
      </Box>
      <Footer />
    </Box>
  );
};

export default ContentForm;
