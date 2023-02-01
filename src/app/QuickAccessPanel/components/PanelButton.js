import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#111",
    fontSize: "12px",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#111",
    top: "-7px !important",
    fontSize: "12px",
    padding: "4px 7px",
  },
}));

function PanelButton({
  color,
  bgColor,
  hoverColor,
  hoverBgColor,
  children,
  title,
  ...props
}) {
  return (
    <CustomTooltip placement="bottom" arrow title={title}>
      <button
        css={css`
          height: 45px;
          min-width: 45px;
          width: 45px;
          margin: 5px;
          padding: 0;
          background: ${bgColor || "rgba(0,0,0,0.3)"};
          color: ${color || "#fff"};
          border: 0;
          border-radius: 8px;
          transition: background 0.2s ease-in-out;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          filter: brightness(0.9) saturate(0.9);
          :hover {
            background: ${hoverBgColor || "#fff"};
            color: ${hoverColor || "#fff"};
            filter: contrast(1) saturate(1) grayscale(0) brightness(1);
          }
        `}
        {...props}
      >
        {children}
      </button>
    </CustomTooltip>
  );
}

export default PanelButton;
