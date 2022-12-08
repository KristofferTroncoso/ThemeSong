import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

// import { createUiOptionsSlice } from './UiOptions/uiOptionsSlice';
import { createPopupSlice } from './popup/popupSlice';
import { createSongSlice } from './Song/songSlice';
import { createPlayerSlice } from './Player/playerSlice';
import { createPaletteSlice } from './Palette/paletteSlice';
import { createVisualizerSlice } from './Visualizer/visualizerSlice';
import { createThemeSlice } from './Theme/themeSlice';
// import { createSnippetsSlice } from './Snippets/snippetsSlice';

export const useStore = create(immer((...a) => ({
  // uiOptions: {...createUiOptionsSlice(...a)},
  popup: {...createPopupSlice(...a)},
  song: {...createSongSlice(...a)},
  player: {...createPlayerSlice(...a)},
  palette: {...createPaletteSlice(...a)},
  visualizer: {...createVisualizerSlice(...a)},
  theme: {...createThemeSlice(...a)},
  // snippets: {...createSnippetsSlice(...a)}
})))
