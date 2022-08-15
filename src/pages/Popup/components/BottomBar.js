/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import RatePopover from './RatePopover';
import SettingsPopover from './SettingsPopover';

function BottomBar() {
  return (
    <div 
      className="BottomBar" 
      css={{
        backgroundColor: '#162875', 
        height: '30px', 
        width: '97%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        padding: '0 10px',
      }}
    >
      <h3>Have a nice day<HeadphonesIcon css={css`font-size: 18px;`}  /></h3>
      <div 
        css={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center'
        }}
      >
        <RatePopover />
        <SettingsPopover />
      </div>
    </div>
  )
}

export default BottomBar;