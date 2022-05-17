import { scrollbars } from '../universal/scrollbars';
import { playerbar_progressbar } from '../universal/playerbar-progressbar';
import { main_BGs } from '../universal/main-BGs';
import { logoStyles } from '../universal/logo';
import { songImgStyles } from '../universal/songImgStyles';
import { universalstyles } from '../universal/universalstyles';


export const dynamicdark_css = /*css*/`
/* ThemeSong */
/* Dynamic Dark Theme */

:root {
  --ts-default-app-color: #171717;

  --ts-topnav-color: var(--ts-default-app-color);
  --ts-mainbg-color: var(--ts-default-app-color);
  --ts-playpagebg-color: var(--ts-default-app-color);
  --ts-playbar-color: var(--ts-default-app-color);
  --ts-playpageavtoggle-color: var(--ts-default-app-color);

  --ts-playprogress-color: white;

  --ts-bgcolor-transition: background-color 1s ease-out;

  --ytmusic-general-background-c: var(--ts-mainbg-color) !important;
  --ytmusic-search-background: var(--ts-playbar-color) !important;
}

${main_BGs}
${scrollbars}
${playerbar_progressbar}
${logoStyles}
${songImgStyles}

${universalstyles}
`;