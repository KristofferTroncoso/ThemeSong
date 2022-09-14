/* the following try statement is my audioCtx.close() hack to free up the audioCtx
  and reconnect the visualizers when the extension updates. 
  I also have to not remove the visualizer container when extension updates in
  the visualizers/index.js file 

  The following should be placed in a songName change useEffect in Visualizer component
*/

/*
try {
  chrome.runtime.sendMessage('r u still there?');
} catch {
  console.log('stop visualizers');
  // need this settimeout or else it just pauses
  setTimeout(() => {
    audioCtx.close();
  }, 100)
}
*/