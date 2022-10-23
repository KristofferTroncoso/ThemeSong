import { scrollbars } from '../../universal/scrollbars';
import { playerbar_progressbar } from '../../universal/playerbar-progressbar';
import { main_BGs } from '../../universal/main-BGs';
import { songImgStyles } from '../../universal/songImgStyles';
import { universalstyles } from '../../universal/universalstyles';

export const dynamicdark_css = /*css*/`
/* ThemeSong */
/* Dynamic Dark Theme */

:root {
  --themesong-base-00-color: #00000;
  --themesong-base-10-color: #1a1a1a;
  --themesong-base-20-color: #333333;
  --themesong-base-30-color: #4d4d4d;
  --themesong-base-40-color: #666666;
  --themesong-base-50-color: #808080;
  --themesong-base-60-color: #999999;
  --themesong-base-70-color: #b3b3b3;
  --themesong-base-80-color: #cccccc;
  --themesong-base-90-color: #e6e6e6;
  --themesong-base-100-color: #ffffff;

  --themesong-base-00-alpha10-color: rgba(255, 255, 255, 0.1);
  --themesong-base-00-alpha20-color: rgba(255, 255, 255, 0.2);

  --themesong-topbarbg-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-topbarbg-light));
  --themesong-bodybg-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-bodybg-light));
  --themesong-playpagebg-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-playpagebg-light));
  --themesong-playbarbg-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-playbarbg-light));
  --themesong-playpageavtoggle-color: hsl(var(--themesong-palette-dominant-hue), var(--themesong-theme-dynamic-saturation), var(--themesong-theme-dynamic-playpageavtoggle-light));

  --themesong-primary-text-color: var(--themesong-base-100-color);
  --themesong-secondary-text-color: var(--themesong-base-80-color);
  --themesong-tertiary-text-color: var(--themesong-base-70-color);

  --themesong-playprogress-color: var(--themesong-base-100-color);
}

${main_BGs}
${scrollbars}
${playerbar_progressbar}
${songImgStyles}
${universalstyles}

`;