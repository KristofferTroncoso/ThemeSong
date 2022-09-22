import React from 'react';
import { render } from 'react-dom';

import { store } from '../../redux/store';
import { Provider  } from 'react-redux';

import Options from './Options';
import './index.css';

import cloudStorageSyncer from '../../redux/cloudStorageSyncer';

cloudStorageSyncer();

render(
  <Provider store={store}><Options /></Provider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
