import React from 'react';
import { off_css } from './off_css';
import { menubar, root } from '../selectors';
import { useStore } from '../../../store';

function Off() {
  const changeIsDark = useStore(state => state.theme.changeIsDark)

  React.useEffect(() => {
    changeIsDark(true)
    menubar.content = '#131313';
    root.style.setProperty("--ts-playbar-color", '#242424');
  }, [])

  return <style id="Off">{off_css}</style>
}

export default Off;