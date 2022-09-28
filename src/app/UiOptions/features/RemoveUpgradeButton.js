import React from 'react';

function RemoveUpgradeButton() {
  const style = /*css*/`
    ytmusic-pivot-bar-item-renderer[tab-id="SPunlimited"] {
      display: none;
    }
  `;
  
  return (
    <style id="RemoveUpgradeButton">
      {style}
    </style>
  );
}

export default RemoveUpgradeButton;