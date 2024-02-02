import { css } from "@emotion/react";
import { useStore } from "/src/app/store";
import useLocalization from "../Extension/Localization/useLocalization";
import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import PanelButton from "../QuickAccessPanel/components/PanelButton";
import { GiProtectionGlasses } from "react-icons/gi";

import VisualizerIcons from "./components/VisualizerIcons";

function VisualizerVariantButton({ color, bgColor, hoverColor, hoverBgColor, children, title, ...props }) {
  return (
    <button
      css={css`
        height: 30px;
        min-width: 32px;
        width: 40px;
        margin: 2px;
        background: ${bgColor || "var(--ts-base-100-alpha-01-color)"};
        color: ${color || "var(--ts-base-100-color)"};
        border: 0;
        border-radius: 4px;
        transition: background-color 0.2s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        filter: brightness(0.9) saturate(0.9);
        :hover {
          background: ${hoverBgColor || "var(--ts-base-100-color)"};
          color: ${hoverColor || "--ts-base-00-color"};
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
  const activeVisualizer = useStore((state) => state.visualizer.prefs.activeVisualizer);
  const toggleIsVisualizerOn = useStore((state) => state.visualizer.toggleIsVisualizerOn);
  const setActiveVisualizer = useStore((state) => state.visualizer.setActiveVisualizer);
  const visualizers = useStore((state) => state.visualizer.visualizers);
  const visualizerPrefs = useStore((state) => state.visualizer.prefs);
  const setSingleVisualizerPrefs = useStore((state) => state.visualizer.setSingleVisualizerPrefs);

  const getMessage = useLocalization();

  const handleVisualizerButtonClick = (id) => {
    if (activeVisualizer === id) {
      toggleIsVisualizerOn();
    } else {
      setActiveVisualizer(id);
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
            display: flex;
            align-items: center;
          `}
        >
          <GiProtectionGlasses style={{ fontSize: "20px", marginRight: "5px", paddingBottom: "2px" }} />
          <span>{getMessage("visualizers")}</span>
        </h3>
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 7px;
            padding: 0px 4px 2px;
          `}
        >
          {visualizers.map((visualizer) => (
            <PanelButton
              title={visualizer.name}
              bgColor={isVisualizerOn && activeVisualizer === visualizer.id && "var(--ts-base-100-color)"}
              color={isVisualizerOn && activeVisualizer === visualizer.id && "#008c7e"}
              hoverColor="#008c7e"
              css={css`
                height: 38px;
                width: 100%;
                margin: 0;
                border: 0;
                border-radius: 6px;
                font-size: 20px;
                padding: 6px 6px 0;
              `}
              onClick={(e) => handleVisualizerButtonClick(visualizer.id)}
              key={visualizer.id}
            >
              <VisualizerIcons visualizerId={visualizer.id} />
            </PanelButton>
          ))}
        </div>
      </div>
      {(isVisualizerOn && activeVisualizer === "51dc50c8-eb06-4086-ad9c-a89758f63db6") ||
      (isVisualizerOn && activeVisualizer === "685d0ec7-5c52-4e48-a43d-11184a39f3da") ? (
        <div>
          <h3
            css={css`
              padding: 2px 5px;
            `}
          >
            {getMessage("variants")}
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
                        disabled={variant.id === visualizerPrefs["51dc50c8-eb06-4086-ad9c-a89758f63db6"].activeVariant}
                        onClick={(e) => {
                          let visualizerObject = {
                            ...visualizerPrefs["51dc50c8-eb06-4086-ad9c-a89758f63db6"],
                            activeVariant: variant.id,
                          };
                          setSingleVisualizerPrefs("51dc50c8-eb06-4086-ad9c-a89758f63db6", visualizerObject);
                        }}
                        bgColor={
                          visualizerPrefs["51dc50c8-eb06-4086-ad9c-a89758f63db6"].activeVariant === variant.id &&
                          "var(--ts-base-100-color)"
                        }
                        color={
                          visualizerPrefs["51dc50c8-eb06-4086-ad9c-a89758f63db6"].activeVariant === variant.id &&
                          "#fc0303"
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
                        disabled={variant.id === visualizerPrefs["685d0ec7-5c52-4e48-a43d-11184a39f3da"].activeVariant}
                        onClick={(e) => {
                          let visualizerObject = {
                            ...visualizerPrefs["685d0ec7-5c52-4e48-a43d-11184a39f3da"],
                            activeVariant: variant.id,
                          };
                          setSingleVisualizerPrefs("685d0ec7-5c52-4e48-a43d-11184a39f3da", visualizerObject);
                        }}
                        bgColor={
                          visualizerPrefs["685d0ec7-5c52-4e48-a43d-11184a39f3da"].activeVariant === variant.id &&
                          "var(--ts-base-100-color)"
                        }
                        color={
                          visualizerPrefs["685d0ec7-5c52-4e48-a43d-11184a39f3da"].activeVariant === variant.id &&
                          "#fc03e3"
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
              color: var(--ts-base-100-alpha-02-color);
            `}
          >
            {getMessage("variants")}
          </h3>
          <div
            css={css`
              background-color: var(--ts-base-100-alpha-005-color);
              width: 190px;
              height: 30px;
              margin: auto;
              border-radius: 5px;
            `}
          />
        </div>
      )}
    </StyledPanelDiv>
  );
}

export default VisualizerPanel;
