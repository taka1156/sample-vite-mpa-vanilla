/**
 * jQueryから受け取ったものをBooleanとして返す。
 */
const toBoolean = str => {
  return JSON.parse(str);
};

export default { toBoolean };
