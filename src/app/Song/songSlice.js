export const createSongSlice = (set) => ({
  songName: '',
  songSubtitle: '',
  songArtist: '',
  songImg: '',
  changeSong: () => {
    console.log('songSlice: changeSong')
    let songName, songArtist, songSubtitle, songImg;

    //song name . this is like  the only thing that's guaranteed
    songName = document.querySelector("ytmusic-player-bar .title").title;

    //song subtitle . this is also kind of consistent but unreliable for extracting artist and album.
    /* this code looks strange but basically if the innerText is not empty, apply the title as normal
      but if it IS empty, just make it equal empty. There's a weird thing with YTM where if it switches
      from a normal song to a song that has no subtitle, it'll keep the old subtitle in it's details.
    */
    try {
      if (document.querySelector("ytmusic-player-bar .byline").innerText !== "") {
        songSubtitle = document.querySelector("ytmusic-player-bar .byline").title;
      } else {
        songSubtitle = "";
      }
    } catch {
      songSubtitle = "";
    }

    songArtist = songSubtitle.split(" • ")[0];
    let songImgSrc = document.querySelector(".middle-controls .thumbnail-image-wrapper img").src;
    if (songImgSrc !== "" && songImgSrc !== "https://music.youtube.com/") {
      songImg = document.querySelector(".middle-controls .thumbnail-image-wrapper img").src;
    }
    
    /*  the reason why the bottom code doesn't work all the time is the ytm dom is not consistent with its details. 
      the subtitle can contain the artist and album or if its a video it may have the channel and the view count.
    */

    //artist
    // state.songArtist = document.querySelectorAll("ytmusic-player-bar .subtitle .byline a")[0].innerText;

    //album
    // state.songAlbum = document.querySelectorAll("ytmusic-player-bar .subtitle .byline a")[1].innerText;

    set(state => {
      state.song.songName = songName;
      state.song.songArtist = songArtist;
      state.song.songSubtitle = songSubtitle;
      state.song.songImg = songImg;
    })
  }
})