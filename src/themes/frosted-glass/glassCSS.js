export const glassCSS = /*css*/`
/* Theme: Glass */

:root {

  --ts-topnav-color: ;
  --ts-mainbg-color: ;
  --ts-playpagebg-color: ;
  --ts-playbar-color: ;
  --ts-bg-accents-color: ;

  --ts-playprogress-color: white;
  --ts-scrollbar-color: ;
  --ts-scrollbar-hover-color: ;

  --ts-bgcolor-transition: background-color 1s ease-out;
  --ts-bgcolor-transition-faster: background-color 200ms cubic-bezier(0.2,0,0.6,1);

  --ytmusic-general-background-c: var(--ts-bg-accents-color, --ts-mainbg-color) !important;

  --ts-img-src-url: ;
}


/* more glass tests */
html.no-focus-outline {
  background-image: var(--ts-img-src-url);
  height: 500px; 
  background-position: center;
  background-repeat: repeat;
  background-size: cover; 
  background-filter: blur(60px);
}

/* omg this one below was the real deal. in fact i may have to restructure my other CSS stylesheets cuz of this */
/* below color is main bg color */
ytmusic-app-layout > #content {
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(40px);
}

ytmusic-item-section-renderer.stuck #header.ytmusic-item-section-renderer {
  background-color: var(--ts-topnav-color);
  backdrop-filter: blur(50px);
}

/* end glass tests */

body {
  background-color: var(--ts-mainbg-color) !important;
  transition: var(--ts-bgcolor-transition) !important;
}

#player-page {
  background-color: var(--ts-playpagebg-color) !important;
  backdrop-filter: blur(50px);
}

#nav-bar-background {
  background-color: var(--ts-topnav-color) !important;
  backdrop-filter: blur(40px);
}

#player-bar-background {
  background-color: var(--ts-playbar-color) !important;
  backdrop-filter: blur(20px) !important;
}

ytmusic-player-bar {
  background-color: var(--ts-playbar-color) !important;
  backdrop-filter: blur(20px);
}

ytmusic-nav-bar {
  border-bottom: 2px solid rgba(150, 150, 150, 0.3);
}

tp-yt-paper-listbox {
  background-color: var(--ts-playbar-color);
  backdrop-filter: blur(20px);
}


/* play page glass stuff. its working */
/*
ytmusic-app-layout > #content {
  visibility: visible !important;
}
*/

/* this part below causes issues when turned on. like if u search for a song, then it's still visible haha. */
/* im finding other alternatives */
/*
ytmusic-browse-response[hidden] {
  display: block !important;
  background-color: hsl(196, 68%, 41%);
  transition: var(--ts-bgcolor-transition-faster);
}
*/

/* end of tests */






/* setting this simple transition actually affects the popup of the player page */
/* i had to include the transition-transform that they already had */
#player-page {
  transition: transform 300ms cubic-bezier(0.2,0,0.6,1), var(--ts-bgcolor-transition);
}

/* ya i have to be careful cuz its easy to break animations without noticing. */
/* the opacity thing was another one i didnt notice until later. i unknowingly overwrote it */
#nav-bar-background {
  transition: opacity 0.2s, var(--ts-bgcolor-transition) !important;
}

#player-bar-background {
  transition: var(--ts-bgcolor-transition) !important;
}

ytmusic-player-bar {
  transition: var(--ts-bgcolor-transition) !important;
}
/* --- end of working transitions */


/* --- now playing progress bar color ---- */
#progress-bar.ytmusic-player-bar {
  --paper-slider-active-color: var(--ts-playprogress-color) !important;
}

#progress-bar.ytmusic-player-bar[focused], ytmusic-player-bar:hover #progress-bar.ytmusic-player-bar {
  --paper-slider-knob-color: var(--ts-playprogress-color) !important;
  --paper-slider-knob-start-color: var(--ts-playprogress-color) !important;
  --paper-slider-knob-start-border-color: var(--ts-playprogress-color) !important;
}
/* progress bar color */

/* start of scrollbar styling */
/* basically im just not picking things specific enough. cuz there's a scrollbar on the body and a scrollbar on the
player page. i have to style them both separately cuz one look for the other doesnt look good on the other. */

/* also this selector is apparently for the whole scrollbar so when it's enabled, it overwrites what ytm has. 
that's why it justt adopts the bg color for the track */
::-webkit-scrollbar {
  width: 1.2em !important;
  height: 1.2em !important;
}

/* woah when i disabled this.. the track just adopted the background color... i think from that custom property i changed? */
::-webkit-scrollbar-track {
  background-color: rgb(0, 0, 0) !important;
  border-left: 1px solid rgba(250, 250, 250, 0.05) !important;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(250, 250, 250, 0.2) !important;
  border: 1px solid rgba(0, 0, 0, 0.342);
  /* border-radius: 8px !important; */
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(250, 250, 250, 0.5) !important;
  /* outline: 1px solid red; */
  /* border-radius: 8px !important; */
}
/* end of scrollbar styling */


/* important QoL improvements to YouTube Music */
/* hopefully temporary until they fix */
ytmusic-app-layout > [slot=player-bar] {
  width: 100vw;
}
`;