const https = require('https');
const fs = require('fs');

const files = [
  { url: 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/card.glb', path: 'public/card.glb' },
  { url: 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/assets/lanyard/lanyard.png', path: 'public/lanyard.png' }
];

files.forEach(({ url, path }) => {
  const file = fs.createWriteStream(path);
  https.get(url, response => {
    if (response.statusCode === 302 || response.statusCode === 301) {
      https.get(response.headers.location, res => {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${path}`);
        });
      });
    } else {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${path}`);
      });
    }
  }).on('error', err => {
    fs.unlink(path, () => {});
    console.error(`Error downloading ${path}: ${err.message}`);
  });
});
