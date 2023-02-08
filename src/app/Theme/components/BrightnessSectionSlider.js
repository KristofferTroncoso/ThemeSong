import { css } from "@emotion/react";
import StyledSlider from "./StyledSlider";

function BrightnessSectionSlider({
  icon,
  name,
  handleChange,
  value,
  min,
  max,
  color,
  light,
  dark,
  ...props
}) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        height: "21px",
        alignContent: "center",
        alignItems: "center",
      }}
      {...props}
    >
      <div
        css={css`
          display: flex;
          align-content: center;
          align-items: center;
          width: 100%;
          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      >
        <div
          css={css`
            height: 14px;
            width: 16px;
            margin-right: 8px;
          `}
        >
          {icon}
        </div>
        <StyledSlider
          name={name}
          value={value}
          onChange={handleChange}
          step={1}
          min={min}
          max={max}
          color={color}
          light={light}
          dark={dark}
        />
        <input
          type="number"
          min={min}
          max={max}
          name={name}
          value={value}
          onChange={handleChange}
          css={{
            width: "26px",
            backgroundColor: "inherit",
            border: 0,
            marginLeft: "8px",
          }}
        />
      </div>
    </div>
  );
}

export default BrightnessSectionSlider;
