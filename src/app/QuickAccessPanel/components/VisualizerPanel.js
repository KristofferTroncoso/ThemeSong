/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useStore } from '../../store';

import StyledPanelDiv from "./StyledPanelDiv";
import PanelButton from './PanelButton';

import WavesIcon from '@mui/icons-material/Waves';
import BubbleChart from '@mui/icons-material/BubbleChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';


function VisualizerPanel() {
  const isVisualizerOn = useStore(state => state.visualizer.isVisualizerOn);
  const activeVisualizer = useStore(state => state.visualizer.activeVisualizer);
  const toggleIsVisualizerOn = useStore(state => state.visualizer.toggleIsVisualizerOn);
  const changeActiveVisualizer = useStore(state => state.visualizer.changeActiveVisualizer);

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
    <StyledPanelDiv>
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
            margin: 5px 4px 5px 5px;
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
            margin: 0;
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
            margin: 5px 5px 5px 4px;
            border: 0;
            border-radius: 0 8px 8px 0;
            padding: 0;
          `}
          onClick={e => handleVisualizerButtonClick("visualizerId:2")}
        >
          <BubbleChart title="Circles" css={css`font-size: 32px;`} />
        </PanelButton>
      </div>
    </StyledPanelDiv>
  )
}

export default VisualizerPanel;