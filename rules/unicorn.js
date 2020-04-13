const prefixRules = require('./utils');

const rules = {
  // 文件名 foo-bar.type.ts
  'filename-case': ['error', { case: 'kebabCase' }],

  // number
  // 指数或其他进制的数字大小写规则
  'number-literal-case': 'error',
  // 禁止 2.0 或 .1 这种形式的数字
  'no-zero-fractions': 'error',
  // 使用 Number.isNaN Number.parseInt 而不是全局的函数
  'prefer-number-properties': 'error',

  // encoding
  // 转义的字符使用大写形式
  'escape-case': 'error',
  // 使用 Unicode 转义而不是 十六进制转义
  'no-hex-escape': 'error',

  // array
  // 使用 Array.isArray() 而不是 instanceof
  'no-array-instanceof': 'error',
  // Prefer .flatMap(…) over .map(…).flat()
  'prefer-flat-map': 'error',
  // 使用 Array.includes() 而不是 Array.indexOf() 或其他
  'prefer-includes': 'error',
  // Prefer negative index over .length - index for {String,Array,TypedArray}#slice() and Array#splice().
  'prefer-negative-index': 'warn',
  // 使用 for...of 而不是 for 循环
  'no-for-loop': 'error',
  // length 与具体的数字比较
  'explicit-length-check': 'error',

  // dom
  // Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement()
  'prefer-modern-dom-apis': 'error',
  // Prefer element.dataset.foo = 'foo' over element.setAttribute('data-foo', 'foo')
  'prefer-dataset': 'error',
  // Prefer Node#append() over Node#appendChild()
  'prefer-node-append': 'error',
  // Prefer childNode.remove() over parentNode.removeChild(childNode).
  'prefer-node-remove': 'error',
  // Prefer KeyboardEvent#key over KeyboardEvent#keyCode
  'prefer-event-key': 'error',
  // Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName()
  'prefer-query-selector': 'warn',
  // Prefer .textContent over .innerText
  'prefer-text-content': 'error',

  // error
  // 正确的定义 Sub Error 类
  'custom-error-definition': 'error',
  // catch error 而不是 ex / err 等
  'catch-error-name': 'error',
  // new Error 时要传递具体的 message
  'error-message': 'error',
  // 在进行类型判断时，抛出 TypeError
  'prefer-type-error': 'error',

  // function
  // 如果函数可以定义在更顶级的作用域就定义在更顶级的作用域
  'consistent-function-scoping': 'error',
  // 使用 Reflect.apply() 而不是 function.apply()
  'prefer-reflect-apply': 'error',

  // string
  // 使用 replaceAll 而不是 global flag
  'prefer-replace-all': 'error',
  // Prefer String#startsWith() & String#endsWith() over more complex alternatives.
  'prefer-starts-ends-with': 'error',
  // Prefer String#slice() over String#substr() and String#substring()
  'prefer-string-slice': 'error',
  // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
  'prefer-trim-start-end': 'error',

  // other
  // 使用简短明了的正则
  'better-regex': 'error',
  // String Number Boolean Symbol BigInt 禁止使用 new
  'new-for-builtins': 'error',
  // 使用 Buffer.from() 和 Buffer.alloc() 代替废弃的 new Buffer()
  'no-new-buffer': 'error',
  // 禁止嵌套的三元表达式，需嵌套括号
  'no-nested-ternary': 'error',
  // 使用 eslint-disable 时要明确指定禁用哪条规则
  'no-abusive-eslint-disable': 'error',
  // 使用缩写时警告
  'prevent-abbreviations': 'warn',
};

const plugin = 'unicorn';

module.exports = {
  plugins: [plugin],
  rules: prefixRules(rules, plugin),
};
