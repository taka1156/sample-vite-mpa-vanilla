import fg from 'fast-glob';

// https://ja.vitejs.dev/config/#root
const generatePathConfig = (root = process.cwd()) => {
  const paths = fg.sync(`${root}/**/*.html`);
  return paths.map(path => path.replace(root, ''));
};

const resolveMpaConfig = vitePlugin => ({
  build: {
    rollupOptions: {
      input: generatePathConfig(vitePlugin.root)
    }
  }
});

export const viteMpaPlugin = {
  name: 'viteMpaPlugin',
  config: vitePlugin => resolveMpaConfig(vitePlugin),
  apply: 'build'
};
