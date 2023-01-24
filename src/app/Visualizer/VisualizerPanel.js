/** @jsx jsx */
import { jsx, css} from '@emotion/react';
import { useStore } from '../store';

import StyledPanelDiv from "../QuickAccessPanel/components/StyledPanelDiv";
import PanelButton from '../QuickAccessPanel/components/PanelButton';

import WavesIcon from '@mui/icons-material/Waves';
import BubbleChart from '@mui/icons-material/BubbleChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

function VisualizerVariantButton({color, bgColor, hoverColor, hoverBgColor, children, title, ...props}) {
  return (
    <button
      css={css`
        height: 30px;
        min-width: 32px;
        width: 32px;
        margin: 2px;
        background: ${bgColor || 'rgba(0,0,0,0.3)'};
        color: ${color || '#fff'};
        border: 0;
        border-radius: 4px;
        transition: background 0.2s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        filter: brightness(0.9) saturate(0.9);
        :hover {
          background: ${hoverBgColor || '#fff'};
          color: ${hoverColor || '#000'};
          filter: contrast(1) saturate(1) grayscale(0) brightness(1);
        }
      `}
      {...props}
    >
      {children}
    </button>
  )
}

function VisualizerPanel() {
  const isVisualizerOn = useStore(state => state.visualizer.isVisualizerOn);
  const activeVisualizer = useStore(state => state.visualizer.activeVisualizer);
  const toggleIsVisualizerOn = useStore(state => state.visualizer.toggleIsVisualizerOn);
  const changeActiveVisualizer = useStore(state => state.visualizer.changeActiveVisualizer);
  const visualizers = useStore(state => state.visualizer.visualizers);
  const visualizerPrefs = useStore(state => state.visualizer.visualizerPrefs);
  const changeVisualizerPrefs = useStore(state => state.visualizer.changeVisualizerPrefs);

  const handleVisualizerButtonClick = (id) => {
    if (activeVisualizer === id) {
      toggleIsVisualizerOn()
    } else {
      changeActiveVisualizer(id);
      chrome.storage.local.set({activeVisualizer: id}, () => console.log('chrome.storage.local.set({activeVisualizer}'))
      if (!isVisualizerOn) {
        toggleIsVisualizerOn();
      }
    }
  }

  return (
    <StyledPanelDiv style={{minHeight: '120px'}}>
      <div css={css`margin-bottom: 2px;`}>
        <h3 css={css`padding: 2px 5px;`}>Visualizer</h3>
        <div css={css`display: flex; justify-content: start; align-items: center;`}>
          <PanelButton
            title="Wavy"
            bgColor={isVisualizerOn && activeVisualizer === "visualizerId:0" && 'rgba(255,255,255,0.8)'}
            color={isVisualizerOn && activeVisualizer === "visualizerId:0" && '#008c7e'}
            hoverColor="#008c7e"
            css={css`
              height: 42px;
              min-width: 45px;
              width: 60px;
              margin: 0 2px;
              border: 0;
              border-radius: 8px 0 0 8px;
            `}
            onClick={e => handleVisualizerButtonClick("visualizerId:0")}
          >
            <WavesIcon title="Wavy" fontSize='large' />
          </PanelButton>
          <PanelButton
            title="Bars"
            bgColor={isVisualizerOn && activeVisualizer === "visualizerId:1" && 'rgba(255,255,255,0.8)'}
            color={isVisualizerOn && activeVisualizer === "visualizerId:1" && '#fc0303'}
            hoverColor="#fc0303"
            css={css`
              height: 42px;
              min-width: 45px;
              width: 60px;
              margin: 2px;
              border: 0;
              border-radius: 0;
            `}
            onClick={e => handleVisualizerButtonClick("visualizerId:1")}
          >
            <LeaderboardIcon title="Bars" fontSize='large' />
          </PanelButton>
          <PanelButton
            title="Circles"
            bgColor={isVisualizerOn && activeVisualizer === "visualizerId:2" && 'rgba(255,255,255,0.8)'}
            color={isVisualizerOn && activeVisualizer === "visualizerId:2" && '#fc03e3'}
            hoverColor="#fc03e3"
            css={css`
              height: 42px;
              min-width: 60px;
              width: 60px;
              margin: 0 2px;
              border: 0;
              border-radius: 0 8px 8px 0;
              padding: 0;
            `}
            onClick={e => handleVisualizerButtonClick("visualizerId:2")}
          >
            <BubbleChart title="Circles" css={css`font-size: 32px;`} />
          </PanelButton>
        </div>
      </div>
      {(isVisualizerOn && activeVisualizer !== "visualizerId:0") ? (
        <div>
          <h3 css={css`padding: 2px 5px;`}>Variants</h3>
          {{
            "visualizerId:1": (
              <div css={css`display: flex;`}>
                {
                  visualizers.find(visualizer => visualizer.visualizerId === "visualizerId:1").variants
                  .map((variant, index) => (
                    <VisualizerVariantButton 
                      key={variant.variantId}
                      disabled={variant.variantId === visualizerPrefs.find(visualizer => visualizer.visualizerId === "visualizerId:1").activeVariant}
                      onClick={
                        e => {
                          let visualizerObject = {
                            ...visualizerPrefs.find(visualizer => visualizer.visualizerId === "visualizerId:1"),
                            activeVariant: variant.variantId,
                          };
                          let visualizerPrefsCopy = [...visualizerPrefs];
                          let newCopy = visualizerPrefsCopy.map(visualizer => {
                            if (visualizer.visualizerId === "visualizerId:1") {
                              return visualizerObject;
                            } else {
                              return visualizer;
                            }
                          });
                          changeVisualizerPrefs(newCopy);
                          chrome.storage.local.set({visualizerPrefs: newCopy}, () => console.log('chrome.storage.local.set({visualizerPrefs}'))
                        }
                      }
                      bgColor={(visualizerPrefs.find(visualizer => visualizer.visualizerId === "visualizerId:1").activeVariant === variant.variantId) && 'rgba(255,255,255,0.8)'}
                      color={(visualizerPrefs.find(visualizer => visualizer.visualizerId === "visualizerId:1").activeVariant === variant.variantId) && '#fc0303'}
                      hoverColor="#fc0303"
                    >
                      {index + 1}
                    </VisualizerVariantButton>
                  ))
                }
              </div>
            ),
            "visualizerId:2": (
              <div css={css`display: flex;`}>
                {
                  visualizers.find(visualizer => visualizer.visualizerId === "visualizerId:2").variants
                  .map((variant, index) => (
                    <VisualizerVariantButton 
                      key={variant.variantId}
                      disabled={variant.variantId === visualizerPrefs.find(visualizer => visualizer.visualizerId === "visualizerId:2").activeVariant}
                      onClick={
                        e => {
                          let visualizerObject = {
                            ...visualizerPrefs.find(visualizer => visualizer.visualizerId === "visualizerId:2"),
                            activeVariant: variant.variantId,
                          };
                          let visualizerPrefsCopy = [...visualizerPrefs];
                          let newCopy = visualizerPrefsCopy.map(visualizer => {
                            if (visualizer.visualizerId === "visualizerId:2") {
                              return visualizerObject;
                            } else {
                              return visualizer;
                            }
                          });
                          changeVisualizerPrefs(newCopy);
                          chrome.storage.local.set({visualizerPrefs: newCopy}, () => console.log('chrome.storage.local.set({visualizerPrefs}'))
                        }
                      }
                      bgColor={(visualizerPrefs.find(visualizer => visualizer.visualizerId === "visualizerId:2").activeVariant === variant.variantId) && 'rgba(255,255,255,0.8)'}
                      color={(visualizerPrefs.find(visualizer => visualizer.visualizerId === "visualizerId:2").activeVariant === variant.variantId) && '#fc03e3'}
                      hoverColor="#fc03e3"
                    >
                      {index + 1}
                    </VisualizerVariantButton>
                  ))
                }
              </div>
            )
          }[activeVisualizer]}
        </div>
      ) : (
        <div>
          <h3 css={css`padding: 2px 5px; color: var(--themesong-base-40-color, rgba(255,255,255,0.2));`}>Variants</h3>
          <div
            css={css`
              background-color: rgba(0,0,0,0.15);
              width: 210px;
              height: 30px;
              margin: 1px 3px;
              border-radius: 5px;
            `}
          />
        </div>
      )}
    </StyledPanelDiv>
  )
}

export default VisualizerPanel;