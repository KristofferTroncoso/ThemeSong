import { scrollbars } from '../../universal/scrollbars';
import { playerbar_progressbar } from '../../universal/playerbar-progressbar';
import { main_BGs } from '../../universal/main-BGs';
import { songImgStyles } from '../../universal/songImgStyles';
import { universalstyles } from '../../universal/universalstyles';

export const dynamicdark_css = /*css*/`
/* ThemeSong */
/* Dynamic Dark Theme */

:root {
  --ts-default-app-color: #171717;

  --ts-primary-text-color: #fff;
  --ts-secondary-text-color: #d5d5d5;
  --ts-tertiary-text-color: #adadad;

  --ts-topnav-color: var(--ts-default-app-color);
  --ts-mainbg-color: var(--ts-default-app-color);
  --ts-playpagebg-color: var(--ts-default-app-color);
  --ts-playbar-color: var(--ts-default-app-color);
  --ts-playpageavtoggle-color: var(--ts-default-app-color);

  --ts-playprogress-color: #fff;

  --ts-bgcolor-transition: background-color 1s ease-out;

  --ytmusic-brand-background-solid: var(--ts-mainbg-color) !important;
  --ytmusic-general-background-c: var(--ts-mainbg-color) !important;
  --ytmusic-search-background: var(--ts-playbar-color) !important;
}

${main_BGs}
${scrollbars}
${playerbar_progressbar}
${songImgStyles}

${universalstyles}
`;