import { static_light_css } from './static-light-css';
import { processStaticLight } from './staticlightscripts';

const staticlight = {
  process: processStaticLight,
  css: static_light_css
}

export { StaticLightSettings } from './StaticLightSettings';

export default staticlight;