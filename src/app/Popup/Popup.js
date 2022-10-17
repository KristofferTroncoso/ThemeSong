/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import TabBar from './components/TabBar';
import ActivePage from './components/ActivePage';
import CloudSyncStorageSync from '../CloudStorageSync';

import { useStore } from '../store';

function Popup() {
  const store = useStore()

  return (
    <div 
      className="Popup" 
      css={css`
        background-color: rgb(30,30,30);
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
        {(process.env.NODE_ENV === 'development') && (
          <div>
            <button css={css`color: white; background-color: black; margin: 5px; border: 0; padding: 5px;`} onClick={e => console.log(store)}>log zustand store</button>
            <button css={css`color: white; background-color: black; margin: 5px; border: 0; padding: 5px;`} onClick={e => {chrome.storage.local.get(null, res => console.log(res))}}>log storage.local</button>
          </div>
        )}
      </div>
      <BottomBar /> 
    </div> 
  );
};

export default Popup;
