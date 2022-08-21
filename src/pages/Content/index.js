import { addThemesContainer } from '../../redux/themes/themes';

import { addCloudSyncStorageSyncer } from '../../redux/cloudStorageSyncer';

import { addPaletteFeature } from '../../redux/palette/paletteFeature';
import { addSongDetailsObserver } from '../../redux/songDetails/addSongDetailsObserver';
import { addPlayPauseChangeObserver } from '../../redux/playerState/addPlayPauseChangeObserver';

import addPanelContainer from './modules/ThemeSongPanel';
import addSongInfoDisplay from './modules/SongInfoDisplay';
import addLogoContainer from './Logo';
import addVisualizerFeature from '../../redux/visualizers/visualizers';

console.log('Content Script loaded');

addCloudSyncStorageSyncer();

addPaletteFeature();
addSongDetailsObserver();
addPlayPauseChangeObserver();

addThemesContainer();
addVisualizerFeature();
addPanelContainer();
addSongInfoDisplay();
addLogoContainer();


