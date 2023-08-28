import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { createPopupSlice } from "./popup/popupSlice";
import { createSongSlice } from "./Song/songSlice";
import { createPlayerSlice } from "./Player/playerSlice";
import { createPaletteSlice } from "./Palette/paletteSlice";
import { createVisualizerSlice } from "./Visualizer/visualizerSlice";
import { createThemeSlice } from "./Theme/themeSlice";
import { createExtensionSlice } from "./Extension/extensionSlice";
import { createUtilitiesSlice } from "./Utilities/utilitiesSlice";
import { createPiecesSlice } from "./Pieces/piecesSlice";

export const useStore = create(
  immer((...a) => ({
    popup: { ...createPopupSlice(...a) },
    song: { ...createSongSlice(...a) },
    player: { ...createPlayerSlice(...a) },
    palette: { ...createPaletteSlice(...a) },
    visualizer: { ...createVisualizerSlice(...a) },
    theme: { ...createThemeSlice(...a) },
    extension: { ...createExtensionSlice(...a) },
    utilities: { ...createUtilitiesSlice(...a) },
    pieces: { ...createPiecesSlice(...a) },
  }))
);
