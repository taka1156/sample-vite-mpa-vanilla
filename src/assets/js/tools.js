/**
 * console.logを可変長引数対応
 */
const dump = {
  row: (...args) => {
    args.forEach(v => {
      console.log(v);
    });
  },
  col: (...args) => {
    const lineLog = args.reduce((a, c) => a + c, '');
    console.log(lineLog);
  }
};

export { dump };
