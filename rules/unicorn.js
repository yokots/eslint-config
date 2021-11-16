const prefixRules = require('./utils');

const rules = {
  // 不要有空文件
  'no-empty-file': 'error',
  // 文件名 foo-bar.type.ts
  'filename-case': ['error', { case: 'kebabCase' }],

  // number
  // 指数或其他进制的数字大小写规则
  'number-literal-case': 'error',
  // 禁止 2.0 或 .1 这种形式的数字
  'no-zero-fractions': 'error',
  // 使用 Number.isNaN Number.parseInt 而不是全局的函数
  'prefer-number-properties': 'error',
  // 使用 Math.trunc 去除小数部分而不是二进制操作符
  'prefer-math-trunc': 'error',
  // 数字分割符规则一致
  'numeric-separators-style': 'error',
  // 使用 number.toFixed(2) 时指定小数位数
  'require-number-to-fixed-digits-argument': 'error',

  'no-lonely-if': 'error',
  'empty-brace-spaces': 'error',
  'refer-date-now': 'error',

  // encoding
  // 转义的字符使用大写形式
  'escape-case': 'error',
  // 使用 Unicode 转义而不是 十六进制转义
  'no-hex-escape': 'error',

  // array
  // 使用 Array.isArray() 而不是 instanceof
  'no-instanceof-array': 'error',
  // Prefer .flatMap(…) over .map(…).flat()
  'prefer-array-flat-map': 'error',
  // 使用 Array.includes() 而不是 Array.indexOf() 或其他
  'prefer-includes': 'error',
  // Prefer negative index over .length - index for {String,Array,TypedArray}#slice() and Array#splice().
  'prefer-negative-index': 'warn',
  // 使用 for...of 而不是 for 循环
  'no-for-loop': 'error',
  // length 与具体的数字比较
  'explicit-length-check': 'error',
  // 优先使用 Array.prototype.find
  'prefer-array-find': 'error',
  // 使用 array.some
  'prefer-array-some': 'error',
  // array.indexOf rather than array.findIndex
  'prefer-array-index-of': 'error',
  // push 连起来用时应用一个语句来完成
  'no-array-push-push': 'error',
  // 使用 array.flat
  'prefer-array-flat': 'error',
  // 在 array.join 使用明确的分隔符
  'require-array-join-separator': 'off',
  // array 可以指定 this 的方法中,不要使用该参数
  'no-array-method-this-argument': 'error',
  // Prefer array.at(-1) rather than array[array.length - 1]
  'prefer-at': 'error',
  // 避免没有用的数组为空检查
  'no-useless-length-check': 'error',

  // dom
  // Prefer .before() over .insertBefore(), .replaceWith() over .replaceChild(), prefer one of .before(), .after(), .append() or .prepend() over insertAdjacentText() and insertAdjacentElement()
  'prefer-modern-dom-apis': 'error',
  // Prefer element.dataset.foo = 'foo' over element.setAttribute('data-foo', 'foo')
  'prefer-dom-node-dataset': 'error',
  // Prefer Node#append() over Node#appendChild()
  'prefer-dom-node-append': 'error',
  // Prefer childNode.remove() over parentNode.removeChild(childNode).
  'prefer-dom-node-remove': 'error',
  // Prefer KeyboardEvent#key over KeyboardEvent#keyCode
  'prefer-keyboard-event-key': 'error',
  // Prefer .querySelector() over .getElementById(), .querySelectorAll() over .getElementsByClassName() and .getElementsByTagName()
  'prefer-query-selector': 'warn',
  // Prefer .textContent over .innerText
  'prefer-dom-node-text-content': 'error',
  // 不要直接使用 document.cookie, 使用 cookieStore API 或 cookie 库
  'no-document-cookie': 'error',
  // 使用 postMessage 时指定 targetOrigin 参数
  'require-post-message-target-origin': 'error',
  // 不要错误地移除事件监听
  'no-invalid-remove-event-listener': 'error',

  // error
  // 正确的定义 Sub Error 类
  'custom-error-definition': 'error',
  // catch error 而不是 ex / err 等
  'catch-error-name': 'error',
  // new Error 时要传递具体的 message
  'error-message': 'error',
  // 在进行类型判断时，抛出 TypeError
  'prefer-type-error': 'error',
  // 抛出的 error 没有使用的话不需要抛出
  'prefer-optional-catch-binding': 'error',

  // function
  // 如果函数可以定义在更顶级的作用域就定义在更顶级的作用域
  'consistent-function-scoping': 'error',
  // 使用 Reflect.apply() 而不是 function.apply()
  'prefer-reflect-apply': 'error',
  // 优先使用参数默认值
  'prefer-default-parameters': 'error',

  // string
  // 使用 replaceAll 而不是 global flag () chrome >= 85 firefox >= 77 safari >= 13.3
  'prefer-string-replace-all': 'error',
  // Prefer String#startsWith() & String#endsWith() over more complex alternatives.
  'prefer-string-starts-ends-with': 'error',
  // Prefer String#slice() over String#substr() and String#substring()
  'prefer-string-slice': 'error',
  // Prefer String#trimStart() / String#trimEnd() over String#trimLeft() / String#trimRight()
  'prefer-string-trim-start-end': 'error',
  // regexp.test rather than string.match
  'prefer-regexp-test': 'error',
  // 使用简短明了的正则
  'better-regex': 'error',

  // other
  'prefer-export-from': ['error', { ignoreUsedVariables: true }],
  // 禁止不必要的展开运算符
  'no-useless-spread': 'error',
  // 禁止展开运算符中不必要的默认值
  'no-useless-fallback-in-spread': 'error',
  // 使用 Object.fromEntries 来将集合类型转换为对象
  'prefer-object-from-entries': 'error',
  // 使用 Array.prototype.slice.apply 而不是 [].slice.apply
  'prefer-prototype-methods': 'error',
  // 推荐使用 Object.hasOwn 代替 Object.prototype.hasOwnProperty.call()
  'prefer-object-has-own': 'error',
  // String Number Boolean Symbol BigInt 禁止使用 new
  'new-for-builtins': 'error',
  // 使用 Buffer.from() 和 Buffer.alloc() 代替废弃的 new Buffer()
  'no-new-buffer': 'error',
  // 简单的 if-else 代码用三元操作符完成
  'prefer-ternary': 'error',
  // 把 this 赋值给其他变量时进行警告,可使用箭头函数
  'no-this-assignment': 'warn',
  // 保持一致的解构风格
  'consistent-destructuring': 'error',
  // 使用 node:fs 来引入 nodejs 内置模块
  'prefer-node-protocol': 'warn',
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
  'prefer-module': 'warn',
  // 禁止嵌套的三元表达式，需嵌套括号
  'no-nested-ternary': 'off',
  // 使用 eslint-disable 时要明确指定禁用哪条规则
  'no-abusive-eslint-disable': 'error',
  // 使用缩写时警告, 会自动修复，应该只警告
  'prevent-abbreviations': 'off',
  // 不要将对象作为默认参数
  'no-object-as-default-parameter': 'off',
};

const plugin = 'unicorn';

module.exports = {
  plugins: [plugin],
  rules: prefixRules(rules, plugin),
};
