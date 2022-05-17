/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';


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
  const [options, setOptions] = React.useState();

  React.useEffect(() => {
    chrome.storage.sync.get('options', (res) => {
      setOptions(res.options);
    });
  }, []);

  function handleReset(e) {
    chrome.runtime.sendMessage('reset', response => {
      console.log(`Received response ${response}`);
    })
  }


  function handleOption1Change(e) {
    
  }

  if (!options) {
    return <div>loading...</div>
  } else {
    return (
      <div>
        <h1 css={{marginBottom: '100px'}}>ThemeSong Options</h1>
        <button onClick={e => console.log(options)}>click</button>
        <StyledDiv>
          <h2 css={{marginBottom: '15px'}}>Options:</h2>
          <p>
            {options[0].optionName}: 
            <input type="checkbox" checked={options[0].value} onChange={handleOption1Change} />
          </p>
        </StyledDiv>
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
            Repair/Reset to extension defaults: <button onClick={handleReset} css={{color: 'white', background: 'red', border: '1px solid black', borderRadius: '2px'}}>RESET</button>
          </p>
          <p>
              <button onClick={e => chrome.storage.sync.get(null, res => console.log(res))}>console.log() storage</button>
          </p>
        </StyledDiv>
      </div>
    )
  }
}

export default Options;
