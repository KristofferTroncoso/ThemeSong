import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import PanelButton from "../QuickAccessPanel/components/PanelButton";

function VisualizerVariantButton({ color, bgColor, hoverColor, hoverBgColor, children, title, ...props }) {
  return (
    <button
      css={css`
        height: 30px;
        min-width: 32px;
        width: 32px;
        margin: 2px;
        background: ${bgColor || "rgb(0 0 0 / 0.3)"};
        color: ${color || "#fff"};
        border: 0;
        border-radius: 4px;
        transition: background 0.2s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        filter: brightness(0.9) saturate(0.9);
        :hover {
          background: ${hoverBgColor || "#fff"};
          color: ${hoverColor || "#000"};
          filter: contrast(1) saturate(1) grayscale(0) brightness(1);
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}

function VisualizerPanel() {
  const isVisualizerOn = useStore((state) => state.visualizer.isVisualizerOn);
  const activeVisualizer = useStore((state) => state.visualizer.activeVisualizer);
  const toggleIsVisualizerOn = useStore((state) => state.visualizer.toggleIsVisualizerOn);
  const changeActiveVisualizer = useStore((state) => state.visualizer.changeActiveVisualizer);
  const visualizers = useStore((state) => state.visualizer.visualizers);
  const visualizerPrefs = useStore((state) => state.visualizer.visualizerPrefs);
  const changeVisualizerPrefs = useStore((state) => state.visualizer.changeVisualizerPrefs);

  const handleVisualizerButtonClick = (id) => {
    if (activeVisualizer === id) {
      toggleIsVisualizerOn();
    } else {
      changeActiveVisualizer(id);
      chrome.storage.local.set({ activeVisualizer: id }, () =>
        console.log("chrome.storage.local.set({activeVisualizer}")
      );
      if (!isVisualizerOn) {
        toggleIsVisualizerOn();
      }
    }
  };

  return (
    <StyledPanelDiv style={{ minHeight: "120px" }}>
      <div
        css={css`
          margin-bottom: 2px;
        `}
      >
        <h3
          css={css`
            padding: 2px 5px;
          `}
        >
          Visualizer
        </h3>
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 4px;
            grid-column-gap: 4px;
          `}
        >
          {visualizers.map((visualizer) => (
            <PanelButton
              bgColor={isVisualizerOn && activeVisualizer === visualizer.id && "rgb(255 255 255 / 0.8)"}
              color={isVisualizerOn && activeVisualizer === visualizer.id && "#008c7e"}
              hoverColor="#008c7e"
              css={css`
                height: 25px;
                width: 100%;
                margin: 0;
                border: 0;
                border-radius: 6px;
                font-size: 12px;
                padding: 2px 6px;
              `}
              onClick={(e) => handleVisualizerButtonClick(visualizer.id)}
              key={visualizer.id}
            >
              {visualizer.name}
            </PanelButton>
          ))}
        </div>
      </div>
      {(isVisualizerOn && activeVisualizer === "51dc50c8-eb06-4086-ad9c-a89758f63db6") ||
      activeVisualizer === "685d0ec7-5c52-4e48-a43d-11184a39f3da" ? (
        <div>
          <h3
            css={css`
              padding: 2px 5px;
            `}
          >
            Variants
          </h3>
          {
            {
              "51dc50c8-eb06-4086-ad9c-a89758f63db6": (
                <div
                  css={css`
                    display: flex;
                  `}
                >
                  {visualizers
                    .find((visualizer) => visualizer.id === "51dc50c8-eb06-4086-ad9c-a89758f63db6")
                    .variants.map((variant, index) => (
                      <VisualizerVariantButton
                        key={variant.id}
                        disabled={
                          variant.id ===
                          visualizerPrefs.find((visualizer) => visualizer.id === "51dc50c8-eb06-4086-ad9c-a89758f63db6")
                            .activeVariant
                        }
                        onClick={(e) => {
                          let visualizerObject = {
                            ...visualizerPrefs.find(
                              (visualizer) => visualizer.id === "51dc50c8-eb06-4086-ad9c-a89758f63db6"
                            ),
                            activeVariant: variant.id,
                          };
                          let visualizerPrefsCopy = [...visualizerPrefs];
                          let newCopy = visualizerPrefsCopy.map((visualizer) => {
                            if (visualizer.id === "51dc50c8-eb06-4086-ad9c-a89758f63db6") {
                              return visualizerObject;
                            } else {
                              return visualizer;
                            }
                          });
                          changeVisualizerPrefs(newCopy);
                          chrome.storage.local.set({ visualizerPrefs: newCopy }, () =>
                            console.log("chrome.storage.local.set({visualizerPrefs}")
                          );
                        }}
                        bgColor={
                          visualizerPrefs.find((visualizer) => visualizer.id === "51dc50c8-eb06-4086-ad9c-a89758f63db6")
                            .activeVariant === variant.id && "rgb(255 255 255 / 0.8)"
                        }
                        color={
                          visualizerPrefs.find((visualizer) => visualizer.id === "51dc50c8-eb06-4086-ad9c-a89758f63db6")
                            .activeVariant === variant.id && "#fc0303"
                        }
                        hoverColor="#fc0303"
                      >
                        {index + 1}
                      </VisualizerVariantButton>
                    ))}
                </div>
              ),
              "685d0ec7-5c52-4e48-a43d-11184a39f3da": (
                <div
                  css={css`
                    display: flex;
                  `}
                >
                  {visualizers
                    .find((visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da")
                    .variants.map((variant, index) => (
                      <VisualizerVariantButton
                        key={variant.id}
                        disabled={
                          variant.id ===
                          visualizerPrefs.find((visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da")
                            .activeVariant
                        }
                        onClick={(e) => {
                          let visualizerObject = {
                            ...visualizerPrefs.find(
                              (visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da"
                            ),
                            activeVariant: variant.id,
                          };
                          let visualizerPrefsCopy = [...visualizerPrefs];
                          let newCopy = visualizerPrefsCopy.map((visualizer) => {
                            if (visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da") {
                              return visualizerObject;
                            } else {
                              return visualizer;
                            }
                          });
                          changeVisualizerPrefs(newCopy);
                          chrome.storage.local.set({ visualizerPrefs: newCopy }, () =>
                            console.log("chrome.storage.local.set({visualizerPrefs}")
                          );
                        }}
                        bgColor={
                          visualizerPrefs.find((visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da")
                            .activeVariant === variant.id && "rgb(255 255 255 / 0.8)"
                        }
                        color={
                          visualizerPrefs.find((visualizer) => visualizer.id === "685d0ec7-5c52-4e48-a43d-11184a39f3da")
                            .activeVariant === variant.id && "#fc03e3"
                        }
                        hoverColor="#fc03e3"
                      >
                        {index + 1}
                      </VisualizerVariantButton>
                    ))}
                </div>
              ),
            }[activeVisualizer]
          }
        </div>
      ) : (
        <div>
          <h3
            css={css`
              padding: 2px 5px;
              color: var(--ts-base-40-color, rgb(255 255 255 / 0.2));
            `}
          >
            Variants
          </h3>
          <div
            css={css`
              background-color: rgb(0 0 0 / 0.15);
              width: 210px;
              height: 30px;
              margin: 1px 3px;
              border-radius: 5px;
            `}
          />
        </div>
      )}
    </StyledPanelDiv>
  );
}

export default VisualizerPanel;
