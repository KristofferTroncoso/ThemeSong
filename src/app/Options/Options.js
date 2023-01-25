import { css } from '@emotion/react';
import CloudSyncStorageSync from '../CloudStorageSync';

function StyledDiv({children}) {
  return (
    <div css={css`
      background-color: #424242;
      border: 1px solid white;
      border-radius: 3px;
      padding: 15px;
      margin: 10px 0;
    `}>
      {children}
    </div>
  )
}

function Options() {
  function handleReset(e) {
    chrome.runtime.sendMessage('reset', response => {
      console.log(`Received response ${response}`);
    });
    alert('ThemeSong extension settings and storage reset. You may need to also refresh any open YouTube Music tabs.')
  }

  return (
    <div>
      <CloudSyncStorageSync />
      <h1 css={{marginBottom: '50px'}}>ThemeSong Options</h1>
      <StyledDiv>
        <h2 css={{marginBottom: '15px'}}>Contact:</h2>
        <p>
          Contact the Developer (Support, Questions, Suggestions, Problems):  
          <a 
            href="https://chrome.google.com/webstore/detail/themesong-for-youtube-mus/bgfiegdbajagebogifobkhambpljbfmk/support" 
            target="_blank" 
            rel="noreferrer"
            css={{
              textDecoration: 'none',
              color: 'white'
            }}
          >
            <button css={{margin: '0 5px', color: 'white', backgroundColor: '#1a73e8', border: '1px solid black', padding: '4px', borderRadius: '2px'}}>
              Chrome Web Store Support Page
            </button>     
          </a>
        </p>
      </StyledDiv>
      <StyledDiv>
        <h2 css={{marginBottom: '15px'}}>Advanced Options:</h2>
        <p>
          Repair/Reset to extension defaults: 
          <button 
            onClick={handleReset} 
            css={{margin: '0 5px', color: 'white', background: 'red', border: '1px solid black', borderRadius: '2px'}}
          >
            RESET
          </button>
        </p>
        <p>
            <button onClick={e => chrome.storage.local.get(null, res => console.log(res))}>console.log() storage</button>
        </p>
      </StyledDiv>
    </div>
  )
}

export default Options;
