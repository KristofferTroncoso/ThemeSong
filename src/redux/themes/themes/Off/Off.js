import React from 'react';
import { useDispatch } from 'react-redux';
import { addStylesheet } from '../addStylesheet';
import { off_css } from './off_css';
import { menubar } from '../selectors';
import { changeIsDark } from '../../themesSlice'

function Off() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    addStylesheet(off_css)
    dispatch(changeIsDark(true))
    menubar.content = '#131313';
  }, [])

  return <div id="Off"></div>
}

export default Off;