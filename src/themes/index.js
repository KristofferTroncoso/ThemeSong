import off from './off';
import glass from './frosted-glass';
import dynamicdark from './dynamic-dark';
import dynamiclight from './dynamic-light';
import staticdark from './static-dark';
import staticlight from './static-light';

const themes = {
  off: {process: off.process, css: off.css},
  glass: {processInitial: glass.processInitial, processSongChange: glass.processSongChange, css: glass.css},
  dynamicdark: {process: dynamicdark.process, css: dynamicdark.css},
  dynamiclight: {process: dynamiclight.process, css: dynamiclight.css},
  staticdark: { process: staticdark.process, css: staticdark.css },
  staticlight: { process: staticlight.process, css: staticlight.css }
}

export default themes;