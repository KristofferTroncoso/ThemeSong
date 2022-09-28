/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector } from 'react-redux';

import StyledPanelDiv from "./StyledPanelDiv";
import PanelButton from './PanelButton';

import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { SiGenius } from 'react-icons/si';


function SongPanel() {
  const songName = useSelector(state => state.song.songName);
  const songArtist = useSelector(state => state.song.songArtist);

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

  return (
    <StyledPanelDiv>
      <div css={{marginBottom: '6px'}}>
        <h3 css={css`padding: 0 5px 2px; display: flex; align-items: center;`}><span>Open song in </span><OpenInNewIcon css={css`margin-left: 4px; font-size: 12px;`} /></h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <PanelButton title="YouTube" color="#fff" bgColor="#fd1600" hoverColor="#fff" hoverBgColor="#fd1600" onClick={handleYtSearch}><YouTubeIcon css={css`font-size: 26px;`} /></PanelButton>
          <PanelButton title="Google" color="#fff" bgColor="#4c8bf5" hoverColor="#fff" hoverBgColor="#4c8bf5" onClick={handleOpenInGoogle}><GoogleIcon fontSize='large' /></PanelButton>
        </div>
      </div>
      <div>
        <h3 css={css`padding: 2px 5px; display: flex; align-items: center;`}><span>Search for lyrics </span><OpenInNewIcon css={css`margin-left: 4px; font-size: 12px;`} /></h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <PanelButton title="Genius" color="#000" bgColor="#ffff64" hoverColor="#000" hoverBgColor="#ffff64" onClick={handleGeniusLyricsSearch}><SiGenius style={{fontSize: '22px'}}/></PanelButton>
          <PanelButton title="Musixmatch" color="#fff" bgColor="linear-gradient(0deg, rgba(243,8,123,1) 0%, rgba(243,92,52,1) 100%)" hoverColor="#fff" hoverBgColor="linear-gradient(0deg, rgba(243,8,123,1) 0%, rgba(243,92,52,1) 100%)" onClick={handleMusixmatchSearch}>
            <img src={chrome.runtime.getURL("/assets/images/Musixmatch_Logo.svg")} alt="Musixmatch Logo" css={css`height: 20px;`} />
          </PanelButton>
          <PanelButton title="Google Lyrics" color="#fff" bgColor="#4c8bf5" hoverColor="#fff" hoverBgColor="#4c8bf5" onClick={handleGoogleLyricsSearch}><GoogleIcon fontSize='large' /></PanelButton>
          <PanelButton title="YouTube Lyrics" color="#fff" bgColor="#fd1600" hoverColor="#fff" hoverBgColor="#fd1600" onClick={handleYtLyricsSearch}><YouTubeIcon style={{fontSize: '26px'}} /></PanelButton>
        </div>
      </div>
    </StyledPanelDiv>
  )
}

export default SongPanel;