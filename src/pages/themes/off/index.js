import { off_css } from './off-css';
import { processOffTheme } from './off-scripts';

const off = {
  process: processOffTheme,
  css: off_css
};

export { OffSettings } from './OffSettings';

export default off;