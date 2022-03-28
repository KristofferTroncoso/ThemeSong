/** @jsx jsx */
import { jsx } from '@emotion/react';
// import HeadphonesIcon from '@mui/icons-material/Headphones';

function TopBar({storageObj}) {
  return (
    <div 
      className="TopBar" 
      css={{
        backgroundColor: '#2e2e2e', 
        width: 'calc(100% - 20px)', 
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px'
      }}
    >
      <h1 css={{fontSize: '16px'}}>
        <a 
          href="https://chrome.google.com/webstore/detail/bgfiegdbajagebogifobkhambpljbfmk" 
          target="_blank" 
          rel="noreferrer"
          css={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          ThemeSong - for YouTube Music™
        </a>
      </h1>
      <p>v{storageObj.extensionVersion}</p>
    </div>
  )
}

export default TopBar;