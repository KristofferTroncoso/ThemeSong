export const nowplaying_overlay = /*css*/ `
:root {
  --ts-nowplaying-background-color: #ff2134;
  --ts-nowplaying-text-color: #ffffff;
}

ytmusic-responsive-list-item-renderer[play-button-state=loading], 
ytmusic-responsive-list-item-renderer[play-button-state=playing], 
ytmusic-responsive-list-item-renderer[play-button-state=paused] {
  background-color: var(--ts-nowplaying-background-color) !important;
  border-radius: 6px !important;
}

ytmusic-responsive-list-item-renderer[play-button-state=loading] a, 
ytmusic-responsive-list-item-renderer[play-button-state=playing] a, 
ytmusic-responsive-list-item-renderer[play-button-state=paused] a {
  color: var(--ts-nowplaying-text-color) !important;
}

ytmusic-responsive-list-item-renderer[play-button-state=loading] yt-formatted-string, 
ytmusic-responsive-list-item-renderer[play-button-state=playing] yt-formatted-string, 
ytmusic-responsive-list-item-renderer[play-button-state=paused] yt-formatted-string {
  color: var(--ts-nowplaying-text-color) !important;
}

ytmusic-responsive-list-item-renderer[play-button-state=loading] #button-shape-like button, 
ytmusic-responsive-list-item-renderer[play-button-state=playing] #button-shape-like button, 
ytmusic-responsive-list-item-renderer[play-button-state=paused] #button-shape-like button {
  color: var(--ts-nowplaying-text-color) !important;
}

ytmusic-responsive-list-item-renderer[play-button-state=loading] button, 
ytmusic-responsive-list-item-renderer[play-button-state=playing] button, 
ytmusic-responsive-list-item-renderer[play-button-state=paused] button {
  color: var(--ts-nowplaying-text-color) !important;
}

ytmusic-responsive-list-item-renderer[play-button-state=loading] yt-checkbox-renderer, 
ytmusic-responsive-list-item-renderer[play-button-state=playing] yt-checkbox-renderer, 
ytmusic-responsive-list-item-renderer[play-button-state=paused] yt-checkbox-renderer {
  color: var(--ts-nowplaying-text-color) !important;
}

ytmusic-responsive-list-item-renderer[play-button-state=loading] yt-icon, 
ytmusic-responsive-list-item-renderer[play-button-state=playing] yt-icon, 
ytmusic-responsive-list-item-renderer[play-button-state=paused] yt-icon {
  fill: var(--ts-nowplaying-text-color);
}
`;
