import { css } from "@emotion/react";
import { useStore } from "/src/app/store";

import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import PanelButton from "../QuickAccessPanel/components/PanelButton";
import { GiProtectionGlasses } from "react-icons/gi";

import { TbWaveSawTool } from "react-icons/tb";
import { ImStatsBars } from "react-icons/im";
import { RiBubbleChartFill } from "react-icons/ri";
import { AiOutlineExperiment } from "react-icons/ai";
import { GiSpiderMask } from "react-icons/gi";
import { RxGlobe } from "react-icons/rx";
import { BsSnow2, BsFillCassetteFill } from "react-icons/bs";

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
        transition: background-color 0.2s ease-in-out;
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
  const activeVisualizer = useStore((state) => state.visualizer.prefs.activeVisualizer);
  const toggleIsVisualizerOn = useStore((state) => state.visualizer.toggleIsVisualizerOn);
  const setActiveVisualizer = useStore((state) => state.visualizer.setActiveVisualizer);
  const visualizers = useStore((state) => state.visualizer.visualizers);
  const visualizerPrefs = useStore((state) => state.visualizer.prefs);
  const setSingleVisualizerPrefs = useStore((state) => state.visualizer.setSingleVisualizerPrefs);

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
          <span>Visualizer</span>
        </h3>
        <div
          css={css`
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-row-gap: 4px;
            grid-column-gap: 4px;
          `}
        >
          {visualizers.map((visualizer) => (
            <PanelButton
              title={visualizer.name}
              bgColor={isVisualizerOn && activeVisualizer === visualizer.id && "rgb(255 255 255 / 0.8)"}
              color={isVisualizerOn && activeVisualizer === visualizer.id && "#008c7e"}
              hoverColor="#008c7e"
              css={css`
                height: 38px;
                width: 100%;
                margin: 0;
                border: 0;
                border-radius: 6px;
                font-size: 20px;
                padding: 2px 6px;
              `}
              onClick={(e) => handleVisualizerButtonClick(visualizer.id)}
              key={visualizer.id}
            >
              {
                {
                  "6aa34dd4-6775-46c1-8dbb-7ac2931ff80d": <TbWaveSawTool />,
                  "51dc50c8-eb06-4086-ad9c-a89758f63db6": <ImStatsBars />,
                  "685d0ec7-5c52-4e48-a43d-11184a39f3da": <RiBubbleChartFill />,
                  "8315ac5f-0de5-4ef1-ac5d-a4bc6d7b21ae": <AiOutlineExperiment />,
                  "57e7f170-a53d-4207-87f0-67633df37959": <GiSpiderMask />,
                  "2f34a5b3-6d29-42c8-bac0-a7356ee88151": <RxGlobe />,
                  "86a81510-3e5d-4d1e-9318-3ea0750393a3": <BsSnow2 />,
                  "f8cfcb9f-6639-4702-aa44-2261ba7a543b": <BsFillCassetteFill />,
                }[visualizer.id]
              }
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
                          "rgb(255 255 255 / 0.8)"
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
                          "rgb(255 255 255 / 0.8)"
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
