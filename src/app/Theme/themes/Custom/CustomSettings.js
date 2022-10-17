/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';

function CustomSettings() {

  function handleSave(e) {
    e.preventDefault();
  }

  return (
    <div 
      className="CustomSettings" 
      css={css`
        background: #222; 
        padding: 5px; 
        border-radius: 2px;
        color: #ddd;
      `}
    >
      <form onSubmit={handleSave}>
        <input type="text" />
      </form>
    </div>
  );
};

export default CustomSettings;
