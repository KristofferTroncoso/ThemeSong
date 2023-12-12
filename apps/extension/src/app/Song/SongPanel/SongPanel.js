import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import StyledPanelDiv from "../../QuickAccessPanel/components/StyledPanelDiv";
import PanelButton from "../../QuickAccessPanel/components/PanelButton";

import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SiGenius, SiNaver } from "react-icons/si";
import { LuClipboardCopy, LuSearch } from "react-icons/lu";
import MusixmatchIcon from "../../Icon/MusixmatchIcon";
import useLocalization from "../../Extension/Localization/useLocalization";

function SongPanel() {
  const songName = useStore((state) => state.song.songName);
  const songArtist = useStore((state) => state.song.songArtist);
  const locale = useStore((state) => state.extension.prefs.locale);

  const getMessage = useLocalization();

  function sanitize(songTitle) {
    //remove parens
    let removedParens = songTitle.replace(/ *\([^)]*\) */g, "");
    //remove special characters
    let sanitized = removedParens.replace(/[^a-zA-Z0-9 ]/g, "");
    if (["en", "en_AU", "en_GB", "en_US"].includes(locale)) {
      return sanitized;
    } else {
      return songTitle;
    }
  }

  function handleYtSearch(e) {
    // let songUrl = document.querySelector(".meta-url").content; // this doesnt change on song change...
    let songUrl = document.querySelector(".ytp-title-link").href;
    let youtubeUrl = songUrl.replace("music", "www");
    // let noListUrl = youtubeUrl.substring(0, youtubeUrl.indexOf('&'))
    window.open(youtubeUrl, "_blank").focus();
  }

  function handleOpenInGoogle(e) {
    let modSongName = sanitize(songName).replace(" ", "+");
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(" ", "+");
    let googleUrlSearch = `https://google.com/search?q=${modSongName}+${modArtistName}`;
    window.open(googleUrlSearch, "_blank").focus();
  }

  function handleDefaultSearch(e) {
    chrome.runtime.sendMessage({
      search: songName + " " + songArtist,
    });
  }

  function handleOpenInNaver(e) {
    let modSongName = sanitize(songName).replace(" ", "+");
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(" ", "+");
    let naverUrlSearch = `https://search.naver.com/search.naver?query=${modSongName}+${modArtistName}`;
    window.open(naverUrlSearch, "_blank").focus();
  }

  function handleGeniusLyricsSearch(e) {
    let modSongName = sanitize(songName).replace(" ", "%20");
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(" ", "%20");
    let geniusUrlSearch = `https://genius.com/search?q=${modSongName}%20${modArtistName}`;
    window.open(geniusUrlSearch, "_blank").focus();
  }

  function handleGoogleLyricsSearch(e) {
    let modSongName = sanitize(songName).replace(" ", "+");
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(" ", "+");
    let googleUrlSearch = `https://google.com/search?q=${modSongName}+${modArtistName}+lyrics`;
    window.open(googleUrlSearch, "_blank").focus();
  }

  function handleMusixmatchSearch(e) {
    let modSongName = sanitize(songName).replace(" ", "%20");
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(" ", "%20");
    let musixmatchUrlSearch = `https://www.musixmatch.com/search/${modSongName}%20${modArtistName}`;
    window.open(musixmatchUrlSearch, "_blank").focus();
  }

  function handleYtLyricsSearch(e) {
    let modSongName = sanitize(songName).replace(" ", "+");
    let artistName = sanitize(songArtist);
    let modArtistName = artistName.replace(" ", "+");
    let ytUrlSearch = `https://www.youtube.com/results?search_query=${modSongName}+${modArtistName}+lyrics`;
    window.open(ytUrlSearch, "_blank").focus();
  }

  return (
    <StyledPanelDiv>
      <div css={{ marginBottom: "6px" }}>
        <h3
          css={css`
            padding: 0 5px 2px;
            display: flex;
            align-items: center;
          `}
        >
          <span>{getMessage("openSong")}</span>
          <OpenInNewIcon
            css={css`
              margin-left: 4px;
              font-size: 12px;
            `}
          />
        </h3>
        <div
          css={css`
            display: flex;
            justify-content: start;
            align-items: center;
          `}
        >
          <PanelButton
            title="YouTube"
            color="#fff"
            bgColor="#fd1600"
            hoverColor="#fff"
            hoverBgColor="#fd1600"
            onClick={handleYtSearch}
          >
            <YouTubeIcon
              css={css`
                font-size: 26px;
              `}
            />
          </PanelButton>
          <PanelButton
            title="Default Search"
            color="#fff"
            bgColor="#309db7"
            hoverColor="#fff"
            hoverBgColor="#309db7"
            onClick={handleDefaultSearch}
          >
            <LuSearch style={{ fontSize: "24px" }} />
          </PanelButton>
          {locale === "ko" ? (
            <PanelButton
              title="Naver"
              color="#fff"
              bgColor="#03c75a"
              hoverColor="#fff"
              hoverBgColor="#03c75a"
              onClick={handleOpenInNaver}
            >
              <SiNaver style={{ fontSize: "16px" }} />
            </PanelButton>
          ) : (
            <PanelButton
              title="Google"
              color="#fff"
              bgColor="#4c8bf5"
              hoverColor="#fff"
              hoverBgColor="#4c8bf5"
              onClick={handleOpenInGoogle}
            >
              <GoogleIcon style={{ fontSize: "24px" }} />
            </PanelButton>
          )}
          <PanelButton
            title="Copy to clipboard"
            color="#fff"
            bgColor="#878787"
            hoverColor="#fff"
            hoverBgColor="#878787"
            onClick={() => {
              navigator.clipboard.writeText(`${songName} ${songArtist}`);
            }}
          >
            <LuClipboardCopy style={{ fontSize: "24px" }} />
          </PanelButton>
        </div>
      </div>
      <div>
        <h3
          css={css`
            padding: 2px 5px;
            display: flex;
            align-items: center;
          `}
        >
          <span>{getMessage("searchForLyrics")}</span>
          <OpenInNewIcon
            css={css`
              margin-left: 4px;
              font-size: 12px;
            `}
          />
        </h3>
        <div
          css={css`
            display: flex;
            justify-content: start;
            align-items: center;
          `}
        >
          <PanelButton
            title="Genius"
            color="#000"
            bgColor="#ffff64"
            hoverColor="#000"
            hoverBgColor="#ffff64"
            onClick={handleGeniusLyricsSearch}
            css={css`
              height: 35px;
              width: 35px;
              border-radius: 6px;
            `}
          >
            <SiGenius style={{ fontSize: "16px" }} />
          </PanelButton>
          <PanelButton
            title="Musixmatch"
            color="#fff"
            bgColor="linear-gradient(0deg, rgba(243,8,123,1) 0%, rgba(243,92,52,1) 100%)"
            hoverColor="#fff"
            hoverBgColor="linear-gradient(0deg, rgba(243,8,123,1) 0%, rgba(243,92,52,1) 100%)"
            onClick={handleMusixmatchSearch}
            css={css`
              height: 35px;
              width: 35px;
              border-radius: 6px;
            `}
          >
            <MusixmatchIcon width="20px" height="17px" />
          </PanelButton>
          <PanelButton
            title="Google Lyrics"
            color="#fff"
            bgColor="#4c8bf5"
            hoverColor="#fff"
            hoverBgColor="#4c8bf5"
            onClick={handleGoogleLyricsSearch}
            css={css`
              height: 35px;
              width: 35px;
              border-radius: 6px;
            `}
          >
            <GoogleIcon style={{ fontSize: "18px" }} />
          </PanelButton>
          <PanelButton
            title="YouTube Lyrics"
            color="#fff"
            bgColor="#fd1600"
            hoverColor="#fff"
            hoverBgColor="#fd1600"
            onClick={handleYtLyricsSearch}
            css={css`
              height: 35px;
              width: 35px;
              border-radius: 6px;
            `}
          >
            <YouTubeIcon style={{ fontSize: "20px" }} />
          </PanelButton>
        </div>
      </div>
    </StyledPanelDiv>
  );
}

export default SongPanel;
