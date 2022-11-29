import { scrollbars } from '../../universal/scrollbars';
import { playerbar_progressbar } from '../../universal/playerbar-progressbar';
import { main_BGs } from '../../universal/main-BGs';
import { universalstyles } from '../../universal/universalstyles';

export const apple_dark_css = /*css*/`
/* ThemeSong */
/* Apple Dark */

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

  --themesong-theme-ditto-apple-1-color: hsl(var(--themesong-palette-dominant-hue), calc(var(--themesong-palette-dominant-saturation) * 0.2), 35%);
  --themesong-theme-ditto-apple-2-color: hsl(var(--themesong-palette-vibrant-hue), calc(var(--themesong-palette-vibrant-saturation) * 0.2), 32%);
  --themesong-theme-ditto-apple-3-color: hsl(var(--themesong-palette-muted-hue), calc(var(--themesong-palette-muted-saturation) * 0.2), 26%);
  --themesong-theme-ditto-apple-4-color: hsl(var(--themesong-palette-lightvibrant-hue), calc(var(--themesong-palette-lightvibrant-saturation) * 0.2), 35%);
  --themesong-theme-ditto-apple-5-color: hsl(var(--themesong-palette-darkvibrant-hue), calc(var(--themesong-palette-darkvibrant-saturation) * 0.2), 28%);

  --themesong-bodybg-color: #fff;
  --themesong-topbarbg-color: var(--themesong-theme-ditto-apple-4-color);
  --themesong-playpagebg-color: linear-gradient(180deg, var(--themesong-theme-ditto-apple-4-color) 0%, var(--themesong-theme-ditto-apple-2-color) 30%, var(--themesong-theme-ditto-apple-5-color) 66%, var(--themesong-theme-ditto-apple-3-color) 100%);
  --themesong-playbarbg-color: var(--themesong-theme-ditto-apple-3-color);
  --themesong-playpageavtoggle-color: hsl(var(--themesong-palette-lightvibrant-hue), calc(var(--themesong-palette-dominant-saturation) * 0.4), 27%);

  --themesong-primary-text-color: var(--themesong-base-100-color);
  --themesong-secondary-text-color: var(--themesong-base-80-color);
  --themesong-tertiary-text-color: var(--themesong-base-70-color);

  --themesong-playprogress-color: var(--themesong-base-100-color);
}

/* start PlayPage song img styling */
ytmusic-player {
  border-radius: 4px;
}
#song-image {
  box-shadow: 0 10px 40px rgba(0,0,0,0.4);
  border-radius: 4px;
}
#song-image img{
  border-radius: 4px;
  /* object-fit: contain; */
}
#song-video {
  box-shadow: 0 10px 50px rgba(0,0,0,0.4);
  border-radius: 4px;
}
#song-video .html5-video-player {
  border-radius: 4px;
}
ytmusic-player .song-media-controls {
  border-radius: 4px;
}


ytmusic-player[player-ui-state_=FULLSCREEN] #song-image {
  height: 100%;
  background: var(--themesong-playpagebg-color) !important;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

ytmusic-player[player-ui-state_=FULLSCREEN] #song-image #img {
  background-color: var(--themesong-playpagebg-color) !important;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.6);
  filter: drop-shadow(0px 0px 200px var(--themesong-palette-dominant-light50-color));
  width: 760px;
  height: 760px;
  margin: 0;
}

/* i think ytm is putting a 'padding-top: 100%' on this. i have to set it to 0 for my gradient to be good */
ytmusic-player[player-ui-state_=FULLSCREEN] #song-image.ytmusic-player {
  padding-top: 0;
}
/* end PlayPage song img styling */

${main_BGs}
${scrollbars}
${playerbar_progressbar}
${universalstyles}
`;