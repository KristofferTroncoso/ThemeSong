import { glassCSS } from './glassCSS';
import { processGlassThemeOnInitial, processGlassThemeOnSongChange } from './glassThemeScripts';

const glass = {
  processInitial: processGlassThemeOnInitial,
  processSongChange: processGlassThemeOnSongChange,
  css: glassCSS
}

export { GlassSettings } from './GlassSettings';

export default glass;