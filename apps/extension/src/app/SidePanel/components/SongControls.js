import { PiSkipBackFill, PiPlayPauseFill, PiSkipForwardFill, PiFastForwardFill, PiRewindFill } from "react-icons/pi";

function SongControls() {
  function handlePrevious() {
    chrome.tabs.query({}, (tabs) => {
      let ytmTabs = tabs.filter((tab) => "url" in tab);
      console.log(ytmTabs);
      chrome.tabs.sendMessage(ytmTabs[0].id, { message: "previous-button" });
    });
  }

  function handlePlayPause(e) {
    console.log(e);
    chrome.tabs.query({}, (tabs) => {
      let ytmTabs = tabs.filter((tab) => "url" in tab);
      console.log(ytmTabs);

      chrome.tabs.sendMessage(ytmTabs[0].id, { message: "playpause" });
    });
  }

  function handleNext() {
    chrome.tabs.query({}, (tabs) => {
      let ytmTabs = tabs.filter((tab) => "url" in tab);
      console.log(ytmTabs);
      chrome.tabs.sendMessage(ytmTabs[0].id, { message: "next-button" });
    });
  }

  return (
    <div
      css={{
        marginTop: "20px",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        minWidth: 300,
        maxWidth: 500,
        button: {
          border: 0,
          padding: "10px 16px",
          color: "#ccc",
          background: 0,
          ":hover": {
            color: "#fff",
          },
        },
      }}
    >
      <button onClick={handlePrevious}>
        <PiSkipBackFill style={{ fontSize: "20px" }} />
      </button>
      <button
        onClick={() => {
          chrome.tabs.query({}, (tabs) => {
            let ytmTabs = tabs.filter((tab) => "url" in tab);
            console.log(ytmTabs);
            chrome.tabs.sendMessage(ytmTabs[0].id, { message: "rewind" });
          });
        }}
      >
        <PiRewindFill style={{ fontSize: "25px" }} />
      </button>
      <button onClick={handlePlayPause}>
        <PiPlayPauseFill style={{ fontSize: "35px" }} />
      </button>
      <button
        onClick={() => {
          chrome.tabs.query({}, (tabs) => {
            let ytmTabs = tabs.filter((tab) => "url" in tab);
            console.log(ytmTabs);
            chrome.tabs.sendMessage(ytmTabs[0].id, { message: "fast-forward" });
          });
        }}
      >
        <PiFastForwardFill style={{ fontSize: "25px" }} />
      </button>
      <button onClick={handleNext}>
        <PiSkipForwardFill style={{ fontSize: "20px" }} />
      </button>
    </div>
  );
}

export default SongControls;
