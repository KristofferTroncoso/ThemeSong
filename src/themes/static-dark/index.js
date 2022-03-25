import { static_dark_css } from './static-dark-css';
import { processStaticDark } from './staticdarkscripts';

const staticdark = {
  process: processStaticDark,
  css: static_dark_css
}

export { StaticDarkSettings } from './StaticDarkSettings';

export default staticdark;