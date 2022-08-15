import { addStylesheet } from '../addStylesheet';
import { off_css } from './off-css';
import { menubar } from '../selectors';

export function processOffTheme() {
  addStylesheet(off_css);
  menubar.content = '#131313';
}