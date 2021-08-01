/**
 * console.logを省略
 */
const dd = v => console.log(v);

/**
 * jQueryから受け取ったものをBooleanとして返す。
 */
const toBoolean = str => {
  return JSON.parse(str);
};

export default { dd, toBoolean };
