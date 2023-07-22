import { useEffect } from "react";

function Unmounter({ root }) {
  useEffect(() => {
    let themesongContainerObserver;

    let themesongContainer = document.querySelector("#ThemeSong-MainContainer");

    themesongContainerObserver = new MutationObserver(handleThemesongMainContainerChange);

    themesongContainerObserver.observe(themesongContainer, {
      childList: true,
    });

    function handleThemesongMainContainerChange(mutationRecord) {
      try {
        chrome.runtime.sendMessage("r u still there?");
      } catch {
        root.unmount();
        setTimeout(() => {
          document.querySelectorAll("#ThemeSong-ContentContainer")[0].remove();
        }, 1000);
      }
    }

    return function () {
      themesongContainerObserver.disconnect();
    };
  }, []);

  return null;
}

export default Unmounter;
