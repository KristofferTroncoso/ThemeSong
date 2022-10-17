/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

function TopBar() {
  const [extensionVersionName] =  React.useState(chrome.runtime.getManifest().version_name)

  return (
    <div 
      className="TopBar" 
      css={{
        backgroundColor: '#2a2a2a', 
        width: 'calc(100% - 20px)', 
        height: '26px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 10px 0'
      }}
    >
      <h1 css={{fontSize: '12px', fontWeight: '400'}}>
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
      <p css={{fontSize: '12px'}}>v{extensionVersionName}</p>
    </div>
  )
}

export default TopBar;