/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useSelector } from 'react-redux';

function TopBar() {
  const extensionVersion = useSelector(state => state.extensionState.extensionVersion);

  return (
    <div 
      className="TopBar" 
      css={{
        backgroundColor: '#2e2e2e', 
        width: 'calc(100% - 20px)', 
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10px'
      }}
    >
      <h1 css={{fontSize: '14px'}}>
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
      <p>v{extensionVersion}</p>
    </div>
  )
}

export default TopBar;