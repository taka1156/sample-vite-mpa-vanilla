/**
 * console.logを可変長引数対応、省略
 */
const dump = {
  row: (...args) => {
    args.forEach(v => {
      console.log(v);
    });
  },
  line: (...args) => {
    const lineLog = args.reduce((a, c) => a + c, '');
    console.log(lineLog);
  }
};

/**
 * jQueryから受け取ったものをBooleanとして返す。
 */
const toBoolean = str => {
  return JSON.parse(str);
};

export default { dump, toBoolean };
