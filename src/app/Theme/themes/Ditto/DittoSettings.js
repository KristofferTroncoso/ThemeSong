/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { useStore } from '../../../store';
import VariantButton from '../../../Visualizer/visualizers/components/VariantButton';

function DittoSettings() {
  const dittoTheme = useStore(state => state.theme.themes.find(theme => (theme.themeId === "themeId:9")));
  const dittoThemePrefs = useStore(state => state.theme.themePrefs.find(theme => (theme.themeId === "themeId:9")));
  const themePrefs = useStore(state => state.theme.themePrefs);
  const changeThemePrefs = useStore(state => state.theme.changeThemePrefs);

  const handleVariantClick = (e, id) => {
    let copy = {...dittoThemePrefs};
    copy.activeVariant = id;
    console.log(copy);

    let themePrefsCopy = [...themePrefs];
    let newCopy = themePrefsCopy.map(themePrefs => {
      if (themePrefs.themeId === copy.themeId) {
        return copy;
      } else {
        return themePrefs;
      }
    });
    console.log(newCopy)
    changeThemePrefs(newCopy);
    chrome.storage.local.set({themePrefs: newCopy}, () => console.log('chrome.storage.local.set({themePrefs}'))
  }

  return (
    <div>
      <h2 css={css`color: #ff3232; font-size: 16px;`}>Active Theme: Ditto</h2>
      <p css={css`margin: 5px 0 0;`}>Yep, just like the Pokemon.</p>
      <p css={css`margin-bottom: 10px;`}>Pick a clone below.</p>
      <div 
        className="VariantsContainer" 
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridAutoRows: '1fr',
          gap: '10px'
        }}
      >
        {dittoTheme.variants.map(variant => (
          <VariantButton
            key={variant.variantId} 
            id={variant.variantId} 
            onClick={e => handleVariantClick(e, variant.variantId)}
            isActive={variant.variantId === dittoThemePrefs.activeVariant}
            name={variant.name}
          />
        ))}
      </div> 
    </div>
  )
}

export default DittoSettings;