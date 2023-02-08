import { css } from "@emotion/react";
import Slider from "@mui/material/Slider";

function SaturationSlider({ ...props }) {
  return (
    <Slider
      css={css`
        width: 100%;
        height: 12px;
        border-radius: 2px;

        .MuiSlider-thumb {
          color: #fff;
          border: 1px solid #000;
          width: 16px;
          height: 16px;
        }

        .MuiSlider-thumb::after {
          width: 1px;
          height: 1px;
        }

        .MuiSlider-track {
          border: none;
          background: rgba(0, 0, 0, 0);
        }
      `}
      {...props}
    />
  );
}

export default SaturationSlider;
