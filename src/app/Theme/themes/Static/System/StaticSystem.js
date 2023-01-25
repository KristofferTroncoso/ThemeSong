import { useState, useEffect } from 'react';
import StaticDark from '../Dark/StaticDark';
import StaticLight from '../Light/StaticLight';

function StaticSystem({processColors}) {
  const [isDark, setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    console.log('Static System');
    console.log('adding event listener')
    returnDarkOrLightTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', returnDarkOrLightTheme);

    return function cleanup() {
      console.log('removing')
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', returnDarkOrLightTheme);
    };
  }, [])

  function returnDarkOrLightTheme(event) {
    console.log('StaticSystem: returnDarkOrLightTheme');
    window.matchMedia('(prefers-color-scheme: dark)').matches ? setIsDark(true) : setIsDark(false);
  }
  
  return (
    <div id="StaticSystem">
      {isDark ? <StaticDark processColors={processColors} /> : <StaticLight processColors={processColors} />}
    </div>
  )
} 

export default StaticSystem;