/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';

import { useSelector } from 'react-redux';

import VisualizersPage from '../pages/VisualizersPage';
import ThemesPage from '../pages/ThemesPage';

function ActivePage() {
  const activePopupTab = useSelector(state => state.popup.activePopupTab);

  const activePageCalc = () => {
    switch (activePopupTab) {
      case 1:
        return <ThemesPage />;
      case 2:
        return <VisualizersPage />;
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