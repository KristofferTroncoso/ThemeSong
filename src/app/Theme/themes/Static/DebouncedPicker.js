import { useState } from "react";
import { css } from "@emotion/react";
import { useDebouncyEffect } from "use-debouncy";
import { HslColorPicker } from "react-colorful";

export const DebouncedPicker = ({ color, onChange }) => {
  const [value, setValue] = useState(color);

  useDebouncyEffect(() => onChange(value), 200, [value]);

  return (
    <div
      css={css`
        margin-right: 20px;

        .react-colorful {
          width: 260px;
          height: 12px;
        }
        .react-colorful__saturation {
          display: none;
        }

        .react-colorful__last-control {
          border-radius: 2px;
        }

        .react-colorful__pointer {
          width: 20px;
          height: 20px;
        }
      `}
    >
      <HslColorPicker color={value} onChange={setValue} />
    </div>
  );
};

export default DebouncedPicker;
