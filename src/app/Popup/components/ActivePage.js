/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';

import { useStore } from '../../store';

import VisualizersPage from '../pages/VisualizersPage';
import ThemesPage from '../pages/ThemesPage';
import SnippetsPage from '../pages/SnippetsPage';

function ActivePage() {
  const activePopupTab = useStore(state => state.popup.activePopupTab);

  const activePageCalc = () => {
    switch (activePopupTab) {
      case 1:
        return <ThemesPage />;
      case 2:
        return <VisualizersPage />;
      case 3:
        return <SnippetsPage />;
      default:
        return (
          <div>
            <p>Active Page Compnent: something has gone wrong...</p>
            <p>Try resetting to extension defaults by clicking on ⚙ gear icon on lower right corner.</p>
          </div>
        )
    }
  }

  return <>{activePageCalc()}</>
}

export default ActivePage;