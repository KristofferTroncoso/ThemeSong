![ThemeSong icon](/assets/icon-128.png)

# ThemeSong

Chrome and Firefox Extension for YouTube Music™

Dynamic themes, visualizers, and utilities for YouTube Music™ (https://music.youtube.com)

# Repo Setup

## Install

```
pnpm install
pnpm start
```

### Chrome

- In chrome, go to `chrome://extensions`
- Turn on `Developer mode`
- Click on `Load unpacked`
- Navigate and choose the generated `build` folder in the repo

### Firefox

- In Firefox, go to `about:debugging#/runtime/this-firefox`
- Load temporary add-on
- Navigate and choose the `manifest.json` file in the generated `build` folder
- Other options:
  - use `web-ext` cli from mozilla
    - running `web-ext` globally or from within the project can run a server and automatically open and install the add-on in a browser environment.
  - Install add-on from file. This can show what the user sees on install from the Add-On store (Prompts for permissions)
    - go to `about:addons`
    - `Install add-on from file`
    - choose compressed/zip file of add-on

## Troubleshoot dev mode / see live changes

- make sure server is running (`npm start`)
- click on refresh icon on the extension in `chrome://extensions` to see changes
- if making a change to the manifest, remove and reload extension from `chrome://extensions`
- try stopping and restarting server
