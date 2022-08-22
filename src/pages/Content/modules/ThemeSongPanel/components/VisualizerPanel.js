/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleIsVisualizerOn, changeActiveVisualizer } from '../../../../../redux/visualizers/visualizersSlice';

import WavesIcon from '@mui/icons-material/Waves';
import BubbleChart from '@mui/icons-material/BubbleChart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';


function VisualizerPanel() {
  const dispatch = useDispatch();

  const isVisualizerOn = useSelector(state => state.visualizers.isVisualizerOn);
  const activeVisualizer = useSelector(state => state.visualizers.activeVisualizer);

  const handleVisualizerButtonClick = (id) => {
    if (activeVisualizer === id) {
      dispatch(toggleIsVisualizerOn())
    } else {
      dispatch(changeActiveVisualizer(id));
      if (!isVisualizerOn) {
        dispatch(toggleIsVisualizerOn());
      }
    }
  }

  return (
    <div css={{marginBottom: '10px'}}>
      <h2 css={css`padding: 2px 5px; color: var(--ts-primary-text-color);`}>Visualizer</h2>
      <button
        css={css`
          height: 45px;
          min-width: 45px;
          width: 60px;
          margin: 5px 0 5px 5px;
          background: ${isVisualizerOn && activeVisualizer === "visualizerId:0" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
          color: ${isVisualizerOn && activeVisualizer === "visualizerId:0" ? '#1565e6' : 'white'};
          border: 0;
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px 0 0 8px;
          :hover {
            background-color: rgba(255, 255, 255, 0.4);
          }
        `}
        onClick={e => handleVisualizerButtonClick("visualizerId:0")}
      >
        <WavesIcon fontSize='large' />
      </button>
      <button
        css={css`
          height: 45px;
          min-width: 45px;
          width: 60px;
          margin: 0;
          background: ${isVisualizerOn && activeVisualizer === "visualizerId:1" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
          color: ${isVisualizerOn && activeVisualizer === "visualizerId:1" ? '#1565e6' : 'white'};
          border: 0;
          :hover {
            background-color: rgba(255, 255, 255, 0.4);
          }
        `}
        onClick={e => handleVisualizerButtonClick("visualizerId:1")}
      >
        <LeaderboardIcon fontSize='large' />
      </button>
      <button
        css={css`
          height: 45px;
          min-width: 45px;
          width: 60px;
          margin: 5px 5px 5px 0;
          background: ${isVisualizerOn && activeVisualizer === "visualizerId:2" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
          color: ${isVisualizerOn && activeVisualizer === "visualizerId:2" ? '#1565e6' : 'white'};
          border: 0;
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 0 8px 8px 0;
          :hover {
            background-color: rgba(255, 255, 255, 0.4);
          }
        `}
        onClick={e => handleVisualizerButtonClick("visualizerId:2")}
      >
        <BubbleChart fontSize='large' />
      </button>
    </div>
  )
}

export default VisualizerPanel;