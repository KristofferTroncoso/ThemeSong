import React from 'react';
import { useDispatch } from 'react-redux';
import { off_css } from './off_css';
import { menubar, root } from '../selectors';
import { changeIsDark } from '../../themesSlice'

function Off() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeIsDark(true))
    menubar.content = '#131313';
    root.style.setProperty("--ts-playbar-color", '#242424');
  }, [])

  return <style id="Off">{off_css}</style>
}

export default Off;