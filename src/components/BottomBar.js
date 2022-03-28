/** @jsx jsx */
import { jsx } from '@emotion/react';
// import HeadphonesIcon from '@mui/icons-material/Headphones';
import RatePopover from './RatePopover';
import SettingsPopover from './SettingsPopover';

function BottomBar({fetchSyncStorage}) {

  return (
    <div 
      className="BottomBar" 
      style={{
        backgroundColor: '#162875', 
        height: '30px', 
        position: 'fixed', 
        bottom: 3, 
        right: 3,
        left: 3,
        width: 'calc(100% - 16px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        padding: '0 5px',
      }}
    >
      <h3>Have a nice day 💻🎧</h3>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <RatePopover />
        <SettingsPopover fetchSyncStorage={fetchSyncStorage} />
      </div>
    </div>
  )
}

export default BottomBar;