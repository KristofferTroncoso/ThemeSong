import { css } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#333",
      fontSize: "14px",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#333",
      fontSize: "14px",
      padding: "4px 7px",
    },
  })
);

function TabButton({ isActive, title, children, ...props }) {
  return (
    <CustomTooltip placement="right" arrow title={title}>
      <button
        css={css`
          border-radius: 5px;
          border: 0;
          width: 44px;
          height: 44px;
          background: ${isActive ? "#444" : "#222"};
          color: ${isActive ? "#fff" : "#ccc"};
          padding: 5px 4px;
          margin: 4px 4px 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          :hover {
            background: #333;
          }
        `}
        {...props}
      >
        {children}
      </button>
    </CustomTooltip>
  );
}

export default TabButton;
