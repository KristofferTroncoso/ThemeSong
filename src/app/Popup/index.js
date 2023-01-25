import { createRoot } from 'react-dom/client';
import Popup from './Popup';
import './index.css';

const container = document.getElementById('app-container');
const root = createRoot(container)
root.render(<Popup />)
