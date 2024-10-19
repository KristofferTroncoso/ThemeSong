import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import StyledPanelDiv from "../../QuickAccessPanel/components/StyledPanelDiv";
import PanelButton from "../../QuickAccessPanel/components/PanelButton";

import YouTubeIcon from "@mui/icons-material/YouTube";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SiGenius } from "react-icons/si";
import { LuClipboardCopy, LuSearch } from "react-icons/lu";
import useLocalization from "../../Extension/Localization/useLocalization";

function SongPanel() {
  const locale = useStore((state) => state.extension.prefs.locale);
  const metadata = useStore((state) => state.media.metadata);

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
    // let songUrl = document.querySelector(".ytp-title-link").href;
    let youtubeUrl = metadata.url.replace("music", "www");
    // let noListUrl = youtubeUrl.substring(0, youtubeUrl.indexOf('&'))
    window.open(youtubeUrl, "_blank").focus();
  }

  function handleDefaultSearch(e) {
    chrome.runtime.sendMessage({
      search: metadata.title + " " + metadata.artist,
    });
  }

  function handleGeniusLyricsSearch(e) {
    let modSongName = sanitize(metadata.title).replace(" ", "%20");
    let artistName = sanitize(metadata.artist);
    let modArtistName = artistName.replace(" ", "%20");
    let geniusUrlSearch = `https://genius.com/search?q=${modSongName}%20${modArtistName}`;
    window.open(geniusUrlSearch, "_blank").focus();
  }

  return (
    <StyledPanelDiv>
      <div>
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
            justify-content: space-evenly;
            align-items: center;
            max-width: 300px;
          `}
        >
          <PanelButton
            title="YouTube"
            color="#fff"
            bgColor="#f03"
            hoverColor="#fff"
            hoverBgColor="#f03"
            onClick={handleYtSearch}
          >
            <YouTubeIcon
              css={css`
                font-size: 24px;
              `}
            />
          </PanelButton>
          <PanelButton
            title={getMessage("search")}
            color="#fff"
            bgColor="#00a1ff"
            hoverColor="#fff"
            hoverBgColor="#00a1ff"
            onClick={handleDefaultSearch}
          >
            <LuSearch style={{ fontSize: "22px" }} />
          </PanelButton>
          <PanelButton
            title={getMessage("copyToClipboard")}
            color="#fff"
            bgColor="#31bf42"
            hoverColor="#fff"
            hoverBgColor="#31bf42"
            onClick={() => {
              navigator.clipboard.writeText(`${metadata.title} ${metadata.artist}`);
            }}
          >
            <LuClipboardCopy style={{ fontSize: "22px" }} />
          </PanelButton>
          <PanelButton
            title="Genius"
            color="#000"
            bgColor="#ffff64"
            hoverColor="#000"
            hoverBgColor="#ffff64"
            onClick={handleGeniusLyricsSearch}
          >
            <SiGenius style={{ fontSize: "20px" }} />
          </PanelButton>
        </div>
      </div>
    </StyledPanelDiv>
  );
}

export default SongPanel;
