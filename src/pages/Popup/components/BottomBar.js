/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import RatePopover from './RatePopover';
import SettingsPopover from './SettingsPopover';

function BottomBar() {
  return (
    <div 
      className="BottomBar" 
      css={css`
        * {
          /* border: 1px solid tomato; */
        }
        background-color: #4d4d4d;
        height: 28px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        padding: 0 10px;
      `}
    >
      <div 
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
        `}
      >
        <h3 css={css`margin-right: 5px; font-size: 14px;`}>Have a nice day</h3>
        <HeadphonesIcon css={css`font-size: 16px;`}  />
      </div>
      <div 
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
        `}
      >
        <RatePopover />
        <SettingsPopover />
      </div>
    </div>
  )
}

export default BottomBar;