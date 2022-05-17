import { dynamicdark_css } from './dynamicdarkCSS';
import { processColors } from './dynamicdarkscripts';

const dynamicdark = {
  process: processColors,
  css: dynamicdark_css
}

export { DynamicDarkSettings } from './DynamicDarkSettings';

export default dynamicdark;