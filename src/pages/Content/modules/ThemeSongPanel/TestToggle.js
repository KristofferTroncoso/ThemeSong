import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveTheme } from '../../../../redux/themes/themesSlice';

function TestToggle() {
  const activeTheme = useSelector(state => state.themes.activeTheme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    function test(changes) {
      for (let [key, { newValue }] of Object.entries(changes)) {
        switch (key) {
          case "activeTheme":
            dispatch(changeActiveTheme(newValue))
            chrome.storage.local.set({activeTheme: newValue}, () => console.log('chrome.storage.local.set({activeTheme}'));
            break;
          default:
            console.log('Test Toggle. default case')
        }
      }
    };
    chrome.storage.onChanged.addListener(test)
    return () => {chrome.storage.onChanged.removeListener(test)}
  },[])

  // React.useEffect(() => {
  //   console.log('hallo');
  //   return () => console.log('bye')
  // }, [])

  return (
    <button onClick={e => dispatch(changeActiveTheme("themeId:0"))}>
      Active theme: {activeTheme}
    </button>
  )
}

export default TestToggle;