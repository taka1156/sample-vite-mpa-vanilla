'use strict';
const fs = require('fs').promises;

const generatePathConfig = async (base = 'src/pages', output = '.') => {
  let pathList = {};
  await fs
    .readdir(base)
    .then(files => {
      files.forEach(file => {
        const fileName = file.replace('.html', '');
        pathList[fileName] = `${base}/${file}`;
      });
    })
    .catch(e => {
      throw e;
    });

  await fs
    .writeFile(
      `${output}/path.config.json`,
      JSON.stringify(pathList, null, '    ')
    )
    .then(() => {
      console.log(pathList);
    })
    .catch(e => {
      throw e;
    });
};

generatePathConfig();
