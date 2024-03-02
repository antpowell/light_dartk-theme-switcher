import React, { useState } from "react";

import "./ThemeSelector.css";

export const ThemeSelector = () => {
  return (
    <>
      <div className="theme-selector">
        <label>
          ThemeSelector:

          <select
            name="themeSelector"
            id="theme"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </>
  );
};
