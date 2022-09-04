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
      chrome.storage.local.set({activeVisualizer: id}, () => console.log('chrome.storage.local.set({activeVisualizer}'))
      if (!isVisualizerOn) {
        dispatch(toggleIsVisualizerOn());
      }
    }
  }

  return (
    <div css={css`margin-bottom: 10px;`}>
      <h3 css={css`padding: 2px 5px;`}>Visualizer</h3>
      <div css={css`display: flex; justify-content: start; align-items: center;`}>
        <button
          title="Wavy"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 60px;
            margin: 5px 4px 5px 5px;
            background: ${isVisualizerOn && activeVisualizer === "visualizerId:0" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
            color: ${isVisualizerOn && activeVisualizer === "visualizerId:0" ? '#1565e6' : 'white'};
            border: 0;
            border-radius: 8px 0 0 8px;
            :hover {
              background-color: rgba(255, 255, 255, 0.4);
              color: #fcad00;
            }
          `}
          onClick={e => handleVisualizerButtonClick("visualizerId:0")}
        >
          <WavesIcon title="Wavy" fontSize='large' />
        </button>
        <button
          title="Bars"
          css={css`
            height: 42px;
            min-width: 45px;
            width: 60px;
            margin: 0;
            background: ${isVisualizerOn && activeVisualizer === "visualizerId:1" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
            color: ${isVisualizerOn && activeVisualizer === "visualizerId:1" ? '#1565e6' : 'white'};
            border: 0;
            :hover {
              background-color: rgba(255, 255, 255, 0.4);
              color: #fcad00;
            }
          `}
          onClick={e => handleVisualizerButtonClick("visualizerId:1")}
        >
          <LeaderboardIcon title="Bars" fontSize='large' />
        </button>
        <button
          title="Circles"
          css={css`
            height: 42px;
            min-width: 60px;
            width: 60px;
            margin: 5px 5px 5px 4px;
            background: ${isVisualizerOn && activeVisualizer === "visualizerId:2" ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.4)'};
            color: ${isVisualizerOn && activeVisualizer === "visualizerId:2" ? '#1565e6' : 'white'};
            border: 0;
            border-radius: 0 8px 8px 0;
            padding: 0;
            :hover {
              background-color: rgba(255, 255, 255, 0.4);
              color: #fcad00;
            }
          `}
          onClick={e => handleVisualizerButtonClick("visualizerId:2")}
        >
          <BubbleChart title="Circles" css={css`font-size: 32px;`} />
        </button>
      </div>
    </div>
  )
}

export default VisualizerPanel;