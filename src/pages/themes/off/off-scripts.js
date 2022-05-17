const menubar = document.querySelector('meta[name="theme-color"]');

export function processOffTheme() {
  menubar.content = '#131313';
}