import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { createPopupSlice } from "./Popup/popupSlice";
import { createPlayerSlice } from "./Player/playerSlice";
import { createPaletteSlice } from "./Palette/paletteSlice";
import { createVisualizerSlice } from "./Visualizer/visualizerSlice";
import { createThemeSlice } from "./Theme/themeSlice";
import { createExtensionSlice } from "./Extension/extensionSlice";
import { createUtilitiesSlice } from "./Utilities/utilitiesSlice";
import { createPieceSlice } from "./Piece/pieceSlice";
import { createMediaSlice } from "./Media/mediaSlice";

export const useStore = create(
  immer((...a) => ({
    popup: { ...createPopupSlice(...a) },
    player: { ...createPlayerSlice(...a) },
    palette: { ...createPaletteSlice(...a) },
    visualizer: { ...createVisualizerSlice(...a) },
    theme: { ...createThemeSlice(...a) },
    extension: { ...createExtensionSlice(...a) },
    utilities: { ...createUtilitiesSlice(...a) },
    piece: { ...createPieceSlice(...a) },
    media: { ...createMediaSlice(...a) },
  }))
);
