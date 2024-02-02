import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "var(--ts-base-100-color, #000)",
      fontSize: "12px",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "var(--ts-base-100-color, #000)",
      top: "-7px !important",
      fontSize: "12px",
      padding: "4px 7px",
      color: "var(--ts-base-00-color, #fff)",
    },
  })
);

function PanelButton({ color, bgColor, hoverColor, hoverBgColor, children, title, ...props }) {
  return (
    <CustomTooltip placement="bottom" arrow title={title}>
      <button
        css={css`
          height: 45px;
          width: 45px;
          min-width: 45px;
          margin: 4px;
          padding: 0;
          background: ${bgColor || "var(--ts-base-100-alpha-01-color)"};
          color: ${color || "var(--ts-base-100-color)"};
          border: 0;
          border-radius: 8px;
          transition: background 0.2s ease-in-out;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          filter: brightness(1) saturate(1);
          :hover {
            background: ${hoverBgColor || "var(--ts-base-100-color)"};
            color: ${hoverColor || "var(--ts-base-100-color)"};
            filter: contrast(1.1) brightness(1.1);
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
