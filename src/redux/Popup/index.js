import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '../../redux/store';
import { Provider  } from 'react-redux';
import Popup from './Popup';
import './index.css';
import cloudStorageSyncer from '../../redux/cloudStorageSyncer';

cloudStorageSyncer();

const container = document.getElementById('app-container');
const root = createRoot(container)
root.render(<Provider store={store}><Popup /></Provider>)
