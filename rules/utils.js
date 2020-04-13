module.exports = function prefixRules(rules, prefix) {
  const obj = {};
  Object.entries(rules).forEach(([key, value]) => {
    obj[`${prefix}/${key}`] = value;
  });
  return obj;
};
