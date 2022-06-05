import { dynamiclight_css } from './dynamiclightCSS';
import { processColors } from './dynamiclightscripts';

const dynamiclight = {
  process: processColors,
  css: dynamiclight_css
}

export { DynamicLightSettings } from './DynamicLightSettings';

export default dynamiclight;