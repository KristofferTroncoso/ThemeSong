import { css } from '@emotion/react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import RatePopover from './RatePopover';
import SettingsPopover from './SettingsPopover';
import { useStore } from '../../store';

function BottomBar() {
  const store = useStore()

  return (
    <div 
      className="BottomBar" 
      css={css`
        background-color: #2e2e2e;
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
        <h3 css={css`margin-right: 5px; font-size: 13px; font-weight: 400;`}>Have a nice day</h3>
        <HeadphonesIcon css={css`font-size: 14px;`}  />
      </div>
      <div 
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
        `}
      >
        {(process.env.NODE_ENV === 'development') && (
          <div         
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: center;
              align-content: center;
            `}
          >
            <button css={css`color: white; background-color: black; margin: 0 2px; border: 0;`} onClick={e => console.log(store)}>zstore</button>
            <button css={css`color: white; background-color: black; margin: 0 2px; border: 0;`} onClick={e => {chrome.storage.local.get(null, res => console.log(res))}}>storage.local</button>
          </div>
        )}
        <RatePopover />
        <SettingsPopover />
      </div>
    </div>
  )
}

export default BottomBar;