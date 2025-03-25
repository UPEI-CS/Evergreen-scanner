const { execSync } = require('child_process');
const path = require('path');

// Icon sizes as defined in manifest.json
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

console.log('Generating icons for all required sizes...');

// Generate each size one by one
sizes.forEach(size => {
  try {
    console.log(`\nGenerating ${size}x${size} icon...`);
    execSync(`node ${path.join(__dirname, 'generate-icon.js')} ${size}`, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error generating ${size}x${size} icon:`, error.message);
  }
});

console.log('\nAll icons have been generated!'); 