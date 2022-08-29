/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

import VisualizerPanel from './components/VisualizerPanel';
import DarkModePanel from './components/DarkModePanel';
import PanelButton from './components/PanelButton';

import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import { SiGenius } from 'react-icons/si';
import { IoMdBowtie } from 'react-icons/io'
import DataObjectIcon from '@mui/icons-material/DataObject';
import SnoozeIcon from '@mui/icons-material/Snooze';
import { Tooltip } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import TuneIcon from '@mui/icons-material/Tune';

function PanelPage() {
  const songName = useSelector(state => state.songDetails.songName);
  const songArtist = useSelector(state => state.songDetails.songArtist);
  const reduxStore = useSelector(state => state);

  function sanitize(songTitle) {
    //remove parens
    let removedParens = songTitle.replace(/ *\([^)]*\) */g, "");
    //remove special characters
    return removedParens.replace(/[^a-zA-Z0-9 ]/g, "");
  }

  function handleYtSearch(e) {
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace('music', 'www');
    let noListUrl = newUrl.substring(0, newUrl.indexOf('&'))
    window.open(noListUrl, '_blank').focus();
  }

  function handleOpenInGoogle(e) {
    let modSongName = sanitize(songName).replace(' ', '+');
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(' ', '+'); 
    let googleUrlSearch = `https://google.com/search?q=${modSongName}+${modArtistName}`
    window.open(googleUrlSearch, '_blank').focus();
  }

  function handleGeniusLyricsSearch(e) {
    let modSongName = sanitize(songName).replace(' ', '%20');
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(' ', '%20'); 
    let geniusUrlSearch = `https://genius.com/search?q=${modSongName}%20${modArtistName}`
    window.open(geniusUrlSearch, '_blank').focus();
  }

  function handleGoogleLyricsSearch(e) {
    let modSongName = sanitize(songName).replace(' ', '+');
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(' ', '+'); 
    let googleUrlSearch = `https://google.com/search?q=${modSongName}+${modArtistName}+lyrics`
    window.open(googleUrlSearch, '_blank').focus();
  }

  function handleMusixmatchSearch(e) {
    let modSongName = sanitize(songName).replace(' ', '%20');
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(' ', '%20'); 
    let musixmatchUrlSearch = `https://www.musixmatch.com/search/${modSongName}%20${modArtistName}`
    window.open(musixmatchUrlSearch, '_blank').focus();
  }

  function handleYtLyricsSearch(e) {
    let modSongName = sanitize(songName).replace(' ', '+');
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(' ', '+'); 
    let ytUrlSearch = `https://www.youtube.com/results?search_query=${modSongName}+${modArtistName}+lyrics`
    window.open(ytUrlSearch, '_blank').focus();
  }

  function handleTimerClick() {
    setTimeout(() => {
      document.getElementById("play-pause-button").click()
    }, 10000)
  }

  return (
    <div
      css={css`
        padding: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background-color: var(--ts-playbar-color);
        transition: var(--ts-bgcolor-transition);
        color: var(--ts-secondary-text-color);
      `}
    >
      <div css={css`text-align: right;`}>
        <Tooltip title={<p css={css`font-size: 12px;`}>ThemeSong Quick Access Panel</p>}><HelpIcon style={{fontSize: '14px'}} /></Tooltip>
      </div>
      <div css={{marginBottom: '6px'}}>
        <h3 css={css`padding: 0 5px 2px;`}>Open song in:</h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <PanelButton title="YouTube" hoverTextColor="#fff" hoverBgColor="red" onClick={handleYtSearch}><YouTubeIcon title="YouTube" style={{fontSize: '26px'}} /></PanelButton>
          <PanelButton title="Google" hoverTextColor="#fff" hoverBgColor="#4c8bf5" onClick={handleOpenInGoogle}><GoogleIcon title="Google" fontSize='large' /></PanelButton>
        </div>
      </div>
      <div css={{marginBottom: '6px'}}>
        <h3 css={css`padding: 2px 5px;`}>Search for lyrics</h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <PanelButton title="Genius" hoverTextColor="#000" hoverBgColor="#ffff64" onClick={handleGeniusLyricsSearch}><SiGenius title="Genius" style={{fontSize: '20px'}}/></PanelButton>
          <PanelButton title="Musixmatch" hoverTextColor="#fff" hoverBgColor="#ff5353" onClick={handleMusixmatchSearch}><IoMdBowtie title="Musixmatch" style={{fontSize: '24px'}} /></PanelButton>
          <PanelButton title="Google" hoverTextColor="#fff" hoverBgColor="#4c8bf5" onClick={handleGoogleLyricsSearch}><GoogleIcon title="Google" fontSize='large' /></PanelButton>
          <PanelButton title="YouTube" hoverTextColor="#fff" hoverBgColor="red" onClick={handleYtLyricsSearch}><YouTubeIcon title="YouTube" style={{fontSize: '26px'}} /></PanelButton>
        </div>
      </div>
      <VisualizerPanel />
      <DarkModePanel />
      {/* <div css={{marginBottom: '10px'}}>
        <h3 css={css`padding: 2px 5px; color: var(--ts-secondary-text-color);`}>Tools</h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <PanelButton onClick={e => console.log(reduxStore)}><DataObjectIcon fontSize='large' /></PanelButton>
          <PanelButton onClick={handleTimerClick}><SnoozeIcon css={css`font-size: 28px;`} /></PanelButton>
        </div>
      </div> */}
      <div css={css`text-align: right;`}>
        <Tooltip 
          title={<p css={css`font-size: 12px;`}>Additional settings and options available through the ThemeSong popup icon on your toolbar.</p>}>
          <TuneIcon style={{fontSize: '16px'}} />
        </Tooltip>
      </div>
    </div>
  )
}

export default PanelPage;