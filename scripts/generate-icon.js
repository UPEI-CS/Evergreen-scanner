const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const size = parseInt(process.argv[2] || '192', 10);
console.log(`Generating icon for size ${size}x${size}px`);

const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Clear the canvas (transparent background)
ctx.clearRect(0, 0, size, size);

// Set text properties
ctx.fillStyle = '#22C55E'; // Green color for text
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Add a subtle shadow for better visibility on different backgrounds
ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
ctx.shadowBlur = 3;
ctx.shadowOffsetX = 1;
ctx.shadowOffsetY = 1;

// Adjust font size based on icon size
const fontSize = Math.floor(size / 5);
ctx.font = `bold ${fontSize}px Arial, sans-serif`;

// Split text into two lines
ctx.fillText('EG', size / 2, size / 2 - fontSize / 2);
ctx.fillText('Mobile', size / 2, size / 2 + fontSize / 2);

const buffer = canvas.toBuffer('image/png');
const iconPath = path.join(iconsDir, `icon-${size}x${size}.png`);
fs.writeFileSync(iconPath, buffer);
console.log(`Successfully generated green icon-${size}x${size}.png at ${iconPath}`); 