const fg = require('fast-glob');
const fs = require('fs').promises;

const generatePathConfig = async (
  path = './src',
  output = './path.config.json'
) => {
  const fileList = {};
  const paths = fg.sync(`${path}/**/*.html`);

  paths.forEach(path => {
    const dirList = path.split('/');
    const fileName = dirList[dirList.length - 1].replace('.html', '');
    if (fileName === 'index' && dirList.length > 4) {
      fileList[`${dirList[dirList.length - 2]}`] = path;
    } else {
      fileList[`${fileName}`] = path;
    }
  });

  await fs
    .writeFile(output, JSON.stringify(fileList, null, '     '))
    .then(() => {
      console.log(fileList);
    })
    .catch(e => {
      throw e;
    });
};

generatePathConfig();
