/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import TabBar from './components/TabBar';
import ActivePage from './components/ActivePage';
import CloudSyncStorageSync from '../CloudStorageSync';

function Popup() {
  return (
    <div 
      className="Popup" 
      css={css`
        background-color: rgb(20,20,20);
        color: white;
        height: 600px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <CloudSyncStorageSync />
      <TopBar />
      <div css={css`height: 100%;`}>
        <TabBar />
        <ActivePage />
      </div>
      <BottomBar /> 
    </div> 
  );
};

export default Popup;
