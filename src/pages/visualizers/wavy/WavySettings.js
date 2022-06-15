import React from 'react';

function WavySettings({visualizers, handleVisualizersChange}) {
  const [wavyStorageObject, setWavyStorageObject] = React.useState({
    visualizerId: "visualizerId:0",
    name: "Wavy",
    lineWidth: 8
  });

  React.useEffect(() => {
    let obj = visualizers.find(visualizer => visualizer.visualizerId === "visualizerId:0")
    setWavyStorageObject(obj);
  }, [visualizers])

  const handleWavySettingsChange = (e, id) => {
    let copy = {...wavyStorageObject};
    copy[e.target.name] = Number(e.target.value);
    console.log(copy);
    setWavyStorageObject(copy);
    handleVisualizersChange(copy);
  }

  if (!wavyStorageObject) {
    return <h1>hi</h1>
  } else {
    return (
      <div>
        <h2 style={{color: '#ff4f61'}}>Active Visualizer: Wavy</h2>
        <p style={{margin: '5px 0 10px'}}>🌊🌊🌊</p>
        <div>
          <form onSubmit={e => e.preventDefault()}>
              <div style={{display: 'flex', justifyContent: 'space-between', height: '21px'}}>
                <label htmlFor="lineWidth">Line Width:</label>
                <div style={{display: 'flex', alignContent: 'center', alignItems: 'center'}}>
                  <input 
                    type="range" 
                    name="lineWidth" 
                    min="4" 
                    max="14" 
                    value={wavyStorageObject.lineWidth} 
                    step="1" 
                    onChange={handleWavySettingsChange} 
                    style={{width: '180px'}} 
                  />
                  <input 
                    type="number" 
                    min="4" 
                    max="14" 
                    name="lineWidth" 
                    value={wavyStorageObject.lineWidth} 
                    onChange={handleWavySettingsChange} 
                    style={{maxWidth: '40px', backgroundColor: 'inherit', border: 0, borderBottom: '1px solid black', color: 'white'}} 
                  />
                </div>
              </div>
            </form>
        </div>
      </div>
    )
  }
}

export default WavySettings;