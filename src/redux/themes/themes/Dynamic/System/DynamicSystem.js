import React from 'react';
import DynamicDark from '../Dark/DynamicDark';
import DynamicLight from '../Light/DynamicLight';

function DynamicSystem({processColors}) {
  const [isDark, setIsDark] = React.useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

  React.useEffect(() => {
    console.log('Dynamic System');
    console.log('adding event listener')
    returnDarkOrLightTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', returnDarkOrLightTheme);

    return function cleanup() {
      console.log('removing')
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', returnDarkOrLightTheme);
    };
  }, [])

  function returnDarkOrLightTheme(event) {
    console.log('DynamicSystem: returnDarkOrLightTheme');
    window.matchMedia('(prefers-color-scheme: dark)').matches ? setIsDark(true) : setIsDark(false);
  }
  
  return (
    <div id="DynamicSystem">
      {isDark ? <DynamicDark processColors={processColors} /> : <DynamicLight processColors={processColors} />}
    </div>
  )
} 

export default DynamicSystem;