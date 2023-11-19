import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MuiAutocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { IOption } from "@/utils/data";

const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: 12,
    backgroundColor: "rgba(58, 57, 64, 0.30)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& + .MuiAutocomplete-popper": {
    "& .MuiAutocomplete-paper": {
      marginTop: 8,
      borderRadius: 12,
    },
    "& .MuiAutocomplete-option.Mui-focused": {
      "&[aria-selected='false']": {
        background: "inherit",
      },
      borderRight: `2px solid ${theme.palette.primary.main}`,
    },
  },
  "& .MuiAutocomplete-input::placeholder": {
    color: "#fff",
    opacity: 1,
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline::before": {
    borderRadius: 12,
    position: "absolute",
    content: '""',
    inset: 0,
    padding: 1,
    background: "linear-gradient( to right, #523FD7, #FF7DFF)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
})) as typeof MuiAutocomplete;

interface IContentSelectProps {
  options: IOption[];
}

const ContentSelect = (props: IContentSelectProps) => {
  const { options } = props;
  return (
    <Autocomplete
      sx={{ maxWidth: "32rem" }}
      options={options}
      autoHighlight
      disablePortal
      blurOnSelect
      getOptionLabel={(option: IOption) => option.label}
      popupIcon={<KeyboardArrowDownRoundedIcon />}
      placeholder="Select"
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default ContentSelect;
