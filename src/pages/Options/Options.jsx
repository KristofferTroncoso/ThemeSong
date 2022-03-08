import React from 'react';
// import { TestContext } from '../Contexts/testContext';


const Options = () => {
  React.useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }).then(res => setTabId(res[0].id));
  }, []);

  const [tabId, setTabId] = React.useState();

  // const test = React.useContext(TestContext);

  return (
    <div>
      <button onClick={e => console.log(tabId)}>tabid</button>
      <h1>ThemeSong Options</h1>
    </div>
  )
}

export default Options;
