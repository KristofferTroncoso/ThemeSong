import { addThemesContainer } from '../../redux/themes/themes';

import { addCloudSyncStorageSyncer } from '../../redux/cloudStorageSyncer';

import { addPaletteFeature } from '../../redux/palette/paletteFeature';
import addSongDetailsFeature from '../../redux/songDetails/addSongDetailsFeature';
import { addPlayPauseChangeObserver } from '../../redux/playerState/addPlayPauseChangeObserver';

import addPanelContainer from './modules/ThemeSongPanel';
import addSongInfoDisplay from './modules/SongInfoDisplay';
import addVisualizerFeature from '../../redux/visualizers/visualizers';

console.log('Content Script loaded');

addCloudSyncStorageSyncer();

addPaletteFeature();
addSongDetailsFeature();
addPlayPauseChangeObserver();

addThemesContainer();
addVisualizerFeature();
addPanelContainer();
addSongInfoDisplay();



