/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

import { useSelector, useDispatch, useStore } from 'react-redux';

import PanelButton from './PanelButton';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SnoozeIcon from '@mui/icons-material/Snooze';

// import { toggleRemoveDislikeButton, changeRemoveDislikeButton } from '../../Test/testSlice';

function UtilitiesPanel() {
  const reduxStore = useSelector(state => state);
  const themes = useSelector(state => state.themes);
  const store = useStore();
  const dispatch = useDispatch();


  function handleTimerClick() {
    setTimeout(() => {
      document.getElementById("play-pause-button").click()
    }, 10000)
  }

  return (
    <div css={{marginBottom: '10px'}}>
      <h3 css={css`padding: 2px 5px; color: var(--ts-secondary-text-color);`}>Tools</h3>
      <div css={css`display: flex; justify-content: start; align-items: center;`}>
        <PanelButton onClick={e => console.log(reduxStore)} title="log store"><DataObjectIcon fontSize='large' /></PanelButton>
        <PanelButton onClick={handleTimerClick} title="Timer"><SnoozeIcon css={css`font-size: 28px;`} /></PanelButton>
        <PanelButton 
          onClick={e => {
            dispatch(store.reducers.miscSettings.toggleRemoveDislikeButton())
            // dispatch(changeMiscSettings({removeDislikeButton: false}))
            // dispatch(changeRemoveDislikeButton(false))
          }}
          title="test"
        >
          Test
        </PanelButton>
        {/* <PanelButton 
          onClick={e => {
            console.log(themes)
          }}
          title="test"
        >
          log themes
        </PanelButton> */}
        {/* <PanelButton 
          onClick={e => {
            console.log(dispatch(store.reducers.miscSettings.toggleRemoveDislikeButton()))
          }}
          title="test"
        >
          log useDispatch
        </PanelButton> */}
      </div>
    </div>
  )
}

export default UtilitiesPanel;