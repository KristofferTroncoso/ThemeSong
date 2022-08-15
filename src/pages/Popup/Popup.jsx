/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import TabBar from './components/TabBar';
import ActivePage from './components/ActivePage';

function Popup() {
  const store = useSelector(state => state);

  return (
    <div 
      className="Popup" 
      css={css`
        background-color: rgb(40, 40, 40);
        color: white;
        height: 600px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <TopBar />
      <div css={css`height: 100%;`}>
        <TabBar />
        <ActivePage />
        <button onClick={e => console.log(store)}>log store</button>
        <button onClick={e => {chrome.storage.local.get(null, res => console.log(res))}}>log storage.local</button>
      </div>
      <BottomBar /> 
    </div> 
  );
};

export default Popup;
