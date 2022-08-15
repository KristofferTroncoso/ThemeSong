/** @jsx jsx */
// import React from 'react';
import { jsx, css } from '@emotion/react';
import TabButton from './TabButton';
import { useSelector, useDispatch } from 'react-redux';
import { changeActivePopupTab } from '../../../redux/extensionState/extensionStateSlice';

function TabBar() {
  const dispatch = useDispatch();
  const activePopupTab = useSelector(state => state.extensionState.activePopupTab);

  return (
    <div id="TabBar" css={css`padding-top: 4px; background-color: #000;`}>
      <TabButton key={1} id={1} isActive={activePopupTab === 1} onClick={e => dispatch(changeActivePopupTab(1))}>Themes</TabButton>
      <TabButton key={2} id={2} isActive={activePopupTab === 2} onClick={e => dispatch(changeActivePopupTab(2))}>Visualizers</TabButton>
    </div>
  )
}

export default TabBar;