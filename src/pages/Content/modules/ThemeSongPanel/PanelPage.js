/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

import VisualizerPanel from './components/VisualizerPanel';
import DarkModePanel from './components/DarkModePanel';

import VisualizerToggleButton from '../../../../redux/visualizers/visualizers/components/VisualizerToggleButton';
import PanelButton from './components/PanelButton';
import CakeIcon from '@mui/icons-material/Cake';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import { SiGenius } from 'react-icons/si';
import { IoMdBowtie } from 'react-icons/io'
import DataObjectIcon from '@mui/icons-material/DataObject';



function PanelPage() {
  const songName = useSelector(state => state.songDetails.songName);
  const songArtist = useSelector(state => state.songDetails.songArtist);
  const reduxStore = useSelector(state => state);

  function handleYtSearch(e) {
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace('music', 'www');
    let noListUrl = newUrl.substring(0, newUrl.indexOf('&'))
    window.open(noListUrl, '_blank').focus();
  }

  function handleOpenInGoogle(e) {
    let modSongName = songName.replace(' ', '+');
    let artistName = songArtist.substring(0, songArtist.indexOf('•')).trimEnd();
    let modArtistName = artistName.replace(' ', '+'); 
    let googleUrlSearch = `https://google.com/search?q=${modSongName}+${modArtistName}`
    window.open(googleUrlSearch, '_blank').focus();
  }

  function handleGeniusLyricsSearch(e) {
    // this is currently using state from another module: "addSongDetailsObserver"
    // i should probably not be doing that
    let modSongName = songName.replace(' ', '%20');
    let artistName = songArtist.substring(0, songArtist.indexOf('•')).trimEnd();
    let modArtistName = artistName.replace(' ', '%20'); 
    let geniusUrlSearch = `https://genius.com/search?q=${modSongName}%20${modArtistName}`
    window.open(geniusUrlSearch, '_blank').focus();
  }

  function handleGoogleLyricsSearch(e) {
    let modSongName = songName.replace(' ', '+');
    let artistName = songArtist.substring(0, songArtist.indexOf('•')).trimEnd();
    let modArtistName = artistName.replace(' ', '+'); 
    let googleUrlSearch = `https://google.com/search?q=${modSongName}+${modArtistName}+lyrics`
    window.open(googleUrlSearch, '_blank').focus();
  }

  function handleMusixmatchSearch(e) {
    let modSongName = songName.replace(' ', '%20');
    let artistName = songArtist.substring(0, songArtist.indexOf('•')).trimEnd();
    let modArtistName = artistName.replace(' ', '%20'); 
    let geniusUrlSearch = `https://www.musixmatch.com/search/${modSongName}%20${modArtistName}`
    window.open(geniusUrlSearch, '_blank').focus();
  }

  return (
    <div
      css={css`
        * {
          /* border:  1px solid tomato; */
        }
        height: 450px;
        width: 300px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background-color: var(--ts-playbar-color);
      `}
    >
      {/* <h1 css={css`padding: 4px; color: var(--ts-primary-text-color); font-size: 12px;`}>ThemeSong Quick Access Panel</h1> */}
      <div css={{marginBottom: '6px'}}>
        <h2 css={css`padding: 2px 5px; color: var(--ts-primary-text-color);`}>Open song in</h2>
        <PanelButton title="YouTube" onClick={handleYtSearch}><YouTubeIcon title="YouTube" fontSize='large' /></PanelButton>
        <PanelButton title="Google" onClick={handleOpenInGoogle}><GoogleIcon title="Google" fontSize='large' /></PanelButton>
      </div>
      <div css={{marginBottom: '6px'}}>
        <h2 css={css`padding: 2px 5px; color: var(--ts-primary-text-color);`}>Search for lyrics</h2>
        <PanelButton title="Genius" onClick={handleGeniusLyricsSearch}><SiGenius title="Genius" style={{fontSize: '20px'}} /></PanelButton>
        <PanelButton title="Google" onClick={handleGoogleLyricsSearch}><GoogleIcon title="Google" fontSize='large' /></PanelButton>
        <PanelButton title="Musixmatch" onClick={handleMusixmatchSearch}><IoMdBowtie title="Musixmatch" style={{fontSize: '22px'}} /></PanelButton>
      </div>
      <VisualizerPanel />
      <DarkModePanel />
      <div css={{marginBottom: '10px'}}>
        <h2 css={css`padding: 2px 5px; color: var(--ts-primary-text-color);`}>Dev Tools</h2>
        <PanelButton onClick={e => console.log(reduxStore)}><DataObjectIcon fontSize='large' /></PanelButton>
      </div>
    </div>
  )
}

export default PanelPage;