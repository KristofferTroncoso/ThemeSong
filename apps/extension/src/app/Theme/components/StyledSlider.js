import Slider from "@mui/material/Slider";
import { css } from "@emotion/react";

function StyledSlider({ color, light, dark, ...props }) {
  return (
    <Slider
      css={css`
        width: 100%;
        /* color: ${color || "#f58002"}; */
        color: ${color || (light && "#f58002") || (dark && "#0215bd")};

        .MuiSlider-thumb {
          color: ${color || (light && "#eee") || (dark && "#444")};
          border: 1px solid ${color || (light && "#444") || (dark && "#eee")};
          width: 12px;
          height: 12px;
        }

        .MuiSlider-thumb::after {
          width: 1px;
          height: 1px;
        }

        .MuiSlider-rail {
          opacity: 0.6;
        }
      `}
      {...props}
    />
  );
}

export default StyledSlider;
