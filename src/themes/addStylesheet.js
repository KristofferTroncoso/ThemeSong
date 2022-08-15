// import themes from ".";

export function addStylesheet(cssText) {
  console.log('addStylesheet');

  const tscustomstyle = document.getElementById("themesong-extension-active-theme-stylesheet");
  if (!tscustomstyle === true) {
    let style = document.createElement("style");
    style.id = "themesong-extension-active-theme-stylesheet";
    style.appendChild(document.createTextNode(cssText));
    document.head.appendChild(style);
  } else {
    tscustomstyle.firstChild && tscustomstyle.removeChild(tscustomstyle.firstChild);
    tscustomstyle.appendChild(document.createTextNode(cssText));
  }
};

export default addStylesheet;