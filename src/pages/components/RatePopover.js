/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';

function RatePopover() {
  const [userLikesExtension, setUserLikesExtension] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleRejection(e) {
    setUserLikesExtension(false);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button css={{background: 0, border: 0, color: '#cfcfcf', fontSize: '18px'}} onClick={handleClick} title="Rate and comment!">
        {userLikesExtension ? '⭐' : '😭'}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <div css={{padding: '10px', fontSize: '14px', color: 'black'}}>
          {userLikesExtension
          ? (
            <div>
              <p css={{marginBottom: '5px'}}>Liking the extension? Please rate and comment!</p>
              <div>
                <a 
                  href="https://chrome.google.com/webstore/detail/bgfiegdbajagebogifobkhambpljbfmk/reviews" 
                  target="_blank" 
                  rel="noreferrer"
                  css={{
                    textDecoration: 'none',
                    color: 'white'
                  }}
                  title="😃"
                >
                  <button css={{margin: '0 5px', color: 'white', backgroundColor: '#1b8541', border: '1px solid black', padding: '2px 110px', borderRadius: '4px'}}>
                    Okay!
                  </button>     
                </a>
                <button onClick={handleRejection} title="😦" css={{fontSize: '12px', color: 'white', backgroundColor: '#eb102d', border: '1px solid #2e2e2e', borderRadius: '4px', padding: '0 2px'}}>
                  no
                </button>
              </div>
            </div>
          )
          :
            <>
              <p css={{marginBottom: '5px'}}>Contact the dev through social media or the store page for any requests.</p>
              <a 
                href="https://chrome.google.com/webstore/detail/themesong-for-youtube-mus/bgfiegdbajagebogifobkhambpljbfmk/support" 
                target="_blank" 
                rel="noreferrer"
                css={{
                  textDecoration: 'none',
                  color: 'white'
                }}
              >
                <button css={{margin: '0 5px', color: 'white', backgroundColor: '#1a73e8', border: '1px solid black', padding: '4px', borderRadius: '4px'}}>
                  Chrome Web Store Support Page
                </button>     
              </a>
              <button 
                onClick={e => setUserLikesExtension(true)} 
                css={{backgroundColor: 'tomato', margin: '0 5px', border: '1px solid black', color: 'white', borderRadius: '4px', padding: '4px'}}
                title="😅"
              >
                jk i love it
              </button>
              <button 
                onClick={handleClose} 
                css={{backgroundColor: 'grey', border: '1px solid black', color: 'white', borderRadius: '4px', padding: '4px', margin: '0 5px'}}
                title="😐"
              >
                no
              </button>
            </>
          }

        </div>
      </Popover>
    </div>
  )
}

export default RatePopover;