function changeBackgroundColor() {
    const colorInput = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = colorInput;
  
    // Determine if the background is dark or light
    const rgb = hexToRgb(colorInput);
    const brightness = calculateBrightness(rgb.r, rgb.g, rgb.b);
  
    // Set the font color based on the background brightness
    const fontColor = brightness < 128 ? 'white' : 'black';
    document.body.style.color = fontColor;
  
    document.getElementById('colorValue').innerText = colorInput;
  }
  
  function hexToRgb(hex) {
    const bigint = parseInt(hex.substring(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  }
  
  function calculateBrightness(r, g, b) {
    // Using the W3C formula for relative luminance
    return 0.299 * r + 0.587 * g + 0.114 * b;
  }

  function copyToClipboard() {
    const colorValue = document.getElementById('colorValue');
    const textArea = document.createElement('textarea');
    textArea.value = colorValue.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Color code copied to clipboard!');
  }
  
  