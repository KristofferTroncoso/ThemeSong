import { addPaletteFeature } from '../../redux/palette/paletteFeature';
import { addSongDetailsObserver } from '../../redux/songDetails/addSongDetailsObserver';
import { addPlayPauseChangeObserver } from '../../redux/playerState/addPlayPauseChangeObserver';

import addPanelContainer from './modules/ThemeSongPanel';
import addSongInfoDisplay from './modules/SongInfoDisplay';
import addVisualizerFeature from '../../visualizers';
import addThemes from '../../themes'
import { addCloudSyncStorageSyncer } from '../../redux/cloudStorageSyncer';

console.log('Content Script loaded');

addPaletteFeature();
addSongDetailsObserver();
addPlayPauseChangeObserver();

addCloudSyncStorageSyncer();

addVisualizerFeature();
addPanelContainer();
addSongInfoDisplay();
addThemes();