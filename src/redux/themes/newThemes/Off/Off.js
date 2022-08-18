import React from 'react';
import { addStylesheet } from '../addStylesheet';
import { off_css } from './off_css';
import { menubar } from '../selectors';

function Off() {
  React.useEffect(() => {
    addStylesheet(off_css)
    menubar.content = '#131313';
  }, [])

  return <div id="Off"></div>
}

export default Off;