import { lazy, Suspense } from "react";
import { useStore } from "/src/app/store";

// const PlayerPage = lazy(() => import("./PlayerPage"));
const VisualizersPage = lazy(() => import("../../Visualizer/VisualizersPage"));
const ThemesPage = lazy(() => import("../../Theme/ThemesPage"));
const PiecePage = lazy(() => import("../../Piece/PiecePage"));
const SettingsPage = lazy(() => import("./SettingsPage"));

function ActivePage() {
  const activePopupTab = useStore((state) => state.popup.prefs.activePopupTab);

  const activePageCalc = () => {
    switch (activePopupTab) {
      // case 0:
      //   return <PlayerPage />;
      case 1:
        return <ThemesPage />;
      case 2:
        return <VisualizersPage />;
      case 3:
        return <PiecePage />;
      case 4:
        return <SettingsPage />;
      default:
        return (
          <div>
            <p>Active Page Component: something has gone wrong...</p>
            <p>Try resetting to extension defaults by clicking on ⚙ gear icon on lower right corner.</p>
          </div>
        );
    }
  };

  return <Suspense fallback={<h1>💿</h1>}>{activePageCalc()}</Suspense>;
}

export default ActivePage;
