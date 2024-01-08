// src/Images/index.js
const images = {};

function importAll(r) {
  r.keys().forEach((key) => {
    const imageName = key.replace('./', '').replace(/\.\w+$/, '');
    images[imageName] = r(key);
  });
}

importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default images;