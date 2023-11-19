import { Box, Button } from "@mui/material";

interface IOption {
  label: string;
  value: string;
}

interface IRadioButtonsProps {
  value?: string;
  options: IOption[];
  onChange: (value: string) => void;
}

const Radiobuttons = (props: IRadioButtonsProps) => {
  const { value, options, onChange } = props;
  const onHandleChange = (value: string) => () => {
    onChange(value);
  };
  return (
    <Box sx={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
      {options.map((option) => (
        <Button
          key={option.value}
          variant={value === option.value ? "contained" : "outlined"}
          disableRipple={value === option.value}
          onClick={onHandleChange(option.value)}
          sx={{
            px: "1.75rem",
            py: "0.875rem",
            textTransform: "none",
            border: value === option.value ? "1px solid transparent" : "",
          }}
        >
          {option.label}
        </Button>
      ))}
    </Box>
  );
};

export default Radiobuttons;
