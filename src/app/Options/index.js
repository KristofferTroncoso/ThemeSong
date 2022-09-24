import React from 'react';
import { createRoot } from 'react-dom/client';

import { store } from '../store';
import { Provider  } from 'react-redux';

import Options from './Options';
import './index.css';

import cloudStorageSyncer from '../cloudStorageSyncer';

cloudStorageSyncer();

const container = document.getElementById('app-container');
const root = createRoot(container)
root.render(<Provider store={store}><Options /></Provider>)
