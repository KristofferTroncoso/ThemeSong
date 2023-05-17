import { css } from "@emotion/react";

function YouTubeMusicMobileSettings() {
  return (
    <div>
      <h2
        css={css`
          color: #ff3232;
          font-size: 16px;
        `}
      >
        Active Theme: YouTube Music Mobile
      </h2>
      <p
        css={css`
          margin: 5px 0 0;
        `}
      >
        Like the mobile app
      </p>
    </div>
  );
}

export default YouTubeMusicMobileSettings;
