import { Stack, Typography, Slider as MuiSlider, Tooltip } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ReactNode } from "react";

const StyledSlider = styled(MuiSlider)(({ theme }) => ({
  "& .MuiSlider-track": {
    backgroundImage: "linear-gradient(to right, #523FD7, #FF7DFF)",
    border: "none",
  },
  "& .MuiSlider-thumb": {
    width: 12,
    height: 12,
    "&:hover, &.Mui-focusVisible": {
      boxShadow: "none",
      outline: `1px solid ${theme.palette.secondary.main}`,
      outlineOffset: 4,
    },
  },
}));

interface IValueLabelComponentProps {
  children: React.ReactElement;
  value: number;
}

const ValueLabelComponent = (props: IValueLabelComponentProps) => {
  const theme = useTheme();
  const { children, value } = props;
  return (
    <Tooltip
      enterTouchDelay={0}
      placement="top"
      title={value}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: theme.palette.primary.main,
            borderRadius: 12,
          },
        },
      }}
    >
      {children}
    </Tooltip>
  );
};

const Slider = () => (
  <Stack
    direction="row"
    alignItems="center"
    gap={1}
    width="22rem"
    px="1rem"
    pt="1.25rem"
    pb="0.75rem"
    bgcolor="#09090D"
    borderRadius="0.75rem"
  >
    <Typography variant="body2" fontWeight={500} component="span">
      100
    </Typography>
    <StyledSlider
      min={100}
      max={1000}
      defaultValue={700}
      color="secondary"
      valueLabelDisplay="auto"
      slots={{
        valueLabel: ValueLabelComponent,
      }}
    />
    <Typography variant="body2" fontWeight={500} component="span">
      1000
    </Typography>
  </Stack>
);

export default Slider;
