import React from "react";
import {Slider, SliderProps, styled} from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return <PrettoSlider{...props} />;
};

export default SuperRange;

const PrettoSlider = styled(Slider)({
  width: "147px",
  color: "#52af77",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      width: 6,
      height: 6,
      borderRadius: "50%",
      boxShadow: "inset 10px 10px #52af77",
    },
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#8B8B8B",
  },
});
