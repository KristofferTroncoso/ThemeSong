```js
function ai1() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Get the frequency and amplitude data
  analyser.getByteFrequencyData(dataArray);

  // Loop through the data and draw a circle for each frequency
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 150;
  const maxRadius = 350;
  for (let i = 0; i < bufferLength; i++) {
    // Calculate the angle and distance of the circle
    const angle = (i / bufferLength) * Math.PI * 2;
    const distance = (dataArray[i] / 255) * (maxRadius - radius) + radius;

    // Calculate the x and y position of the circle
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;

    // Draw the circle
    context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2);
    context.fillStyle = `hsl(${(i / bufferLength) * 360}, 100%, 50%)`;
    context.fill();
  }
}

function ai3() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Get the frequency and amplitude data
  analyser.getByteFrequencyData(dataArray);

  canvas.height = ytmusicplayer.clientHeight;
  canvas.width = ytmusicplayer.clientWidth;

  const barWidth = 5;
  let x = 0;
  let y = canvas.height / 2;
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(x, y);
  for (let i = 0; i < bufferLength; i++) {
    const percent = dataArray[i] / 255;
    const height = canvas.height * percent * 0.5;
    const hue = (i / bufferLength) * 360;
    const saturation = 80;
    const lightness = 50;
    context.strokeStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    context.lineTo(x, y - height);
    x += barWidth;
    context.lineTo(x, y + height);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
  }
}
```
