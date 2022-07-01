import React from 'react';
import { songName, songDetails } from '../addSongDetailsObserver'

function PanelPage() {

  function handleYtSearch(e) {
    let currentUrl = window.location.href;
    let newUrl = currentUrl.replace('music', 'www');
    let noListUrl = newUrl.substring(0, newUrl.indexOf('&'))
    window.open(noListUrl, '_blank').focus();
  }

  function handleOpenInGoogle(e) {
    let modSongName = songName.replace(' ', '+');
    let artistName = songDetails.substring(0, songDetails.indexOf('•')).trimEnd();
    let modArtistName = artistName.replace(' ', '+'); 
    let googleUrlSearch = `https://google.com/search?q=${modSongName}+${modArtistName}`
    window.open(googleUrlSearch, '_blank').focus();
  }

  function handleGeniusLyricsSearch(e) {
    // this is currently using state from another module: "addSongDetailsObserver"
    // i should probably not be doing that
    let modSongName = songName.replace(' ', '%20');
    let artistName = songDetails.substring(0, songDetails.indexOf('•')).trimEnd();
    let modArtistName = artistName.replace(' ', '%20'); 
    let geniusUrlSearch = `https://genius.com/search?q=${modSongName}%20${modArtistName}`
    window.open(geniusUrlSearch, '_blank').focus();
  }

  function handleGoogleLyricsSearch(e) {
    let modSongName = songName.replace(' ', '+');
    let artistName = songDetails.substring(0, songDetails.indexOf('•')).trimEnd();
    let modArtistName = artistName.replace(' ', '+'); 
    let googleUrlSearch = `https://google.com/search?q=${modSongName}+${modArtistName}+lyrics`
    window.open(googleUrlSearch, '_blank').focus();
  }

  function handleMusixmatchSearch(e) {
    let modSongName = songName.replace(' ', '%20');
    let artistName = songDetails.substring(0, songDetails.indexOf('•')).trimEnd();
    let modArtistName = artistName.replace(' ', '%20'); 
    let geniusUrlSearch = `https://www.musixmatch.com/search/${modSongName}%20${modArtistName}`
    window.open(geniusUrlSearch, '_blank').focus();
  }

  return (
    <div
      style={{
        height: '400px',
        width: '300px',
        border: '1px solid rgba(255,255,255,0.1)',
        // borderRadius: '10px',
        backgroundColor: 'var(--ts-playbar-color)'
      }}
    >
      <h1 style={{padding: '4px', color: '#ddd', fontSize: '12px'}}>ThemeSong Quick Access Panel</h1>
      <div>
        <h2 style={{padding: '10px', color: '#ddd'}}>Open song in</h2>
        <button onClick={handleYtSearch}>
          YouTube
        </button>
        <button onClick={handleOpenInGoogle}>
          Google
        </button>
      </div>
      <div>
        <h2 style={{padding: '10px', color: '#ddd'}}>Search for lyrics</h2>
        <button onClick={handleGeniusLyricsSearch}>
          Genius
        </button>
        <button onClick={handleGoogleLyricsSearch}>
          Google
        </button>
        <button onClick={handleMusixmatchSearch}>
          Musixmatch
        </button>
      </div>
    </div>
  )
}

export default PanelPage;