function handleIconColor(value) {
  const canvas = new OffscreenCanvas(128, 128);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, 128, 128);

  ctx.beginPath();
  ctx.roundRect(0, 4, 128, 120, 20);
  ctx.fillStyle = value.lightDominant;
  ctx.fill();

  ctx.beginPath();
  ctx.rect(0, 24, 128, 80);
  ctx.fillStyle = value.darkDominant;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(45, 64, 35, 0, Math.PI * 2);
  ctx.fillStyle = value.secondary;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(65, 64);
  ctx.lineTo(32, 86);
  ctx.lineTo(32, 42);
  ctx.fillStyle = value.darkDominant;
  ctx.fill();

  ctx.beginPath();
  ctx.roundRect(90, 32, 28, 14, 5);
  ctx.fillStyle = "#FFAAF6";
  ctx.fill();

  ctx.beginPath();
  ctx.roundRect(90, 55, 28, 14, 5);
  ctx.fillStyle = "#1CBBFF";
  ctx.fill();

  ctx.beginPath();
  ctx.roundRect(90, 80, 28, 14, 5);
  ctx.fillStyle = "#FFC700";
  ctx.fill();

  const imageData = ctx.getImageData(0, 0, 128, 128);
  chrome.action.setIcon({ imageData });
}

export default handleIconColor;
