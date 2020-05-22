const rules = {
  /* -------------------------------------------------------------------------- */
  /*                                    style                                   */
  /* -------------------------------------------------------------------------- */
  // 缩进
  'indent': ['error', 2, { SwitchCase: 1 }],
  // 禁止使用 空格 和 tab 混合缩进
  'no-mixed-spaces-and-tabs': 'error',
  // 禁用 tab
  'no-tabs': 'error',
  // 大括号换行风格
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  // 大括号之前要有一个空格，if() {} function() {} 等等
  'space-before-blocks': 'error',
  // 控制语句的大括号 { } 风格
  'curly': ['error', 'multi-line', 'consistent'],
  // 同一行的大括号之间需要空格
  'block-spacing': ['error', 'always'],
  // 圆括号内两边禁止空格
  'space-in-parens': 'error',

  // 在文件末尾新插入一行
  'eol-last': 'error',
  // 使用 unix 换行符
  'linebreak-style': 'error',
  // 一个文件最多有 400 行，忽略空白行和注释后
  'max-lines': ['error', { max: 400, skipBlankLines: true, skipComments: true }],
  // 一行的最大长度为 120
  'max-len': ['error', {
    code: 120,
    ignoreStrings: true,
    ignoreUrls: true,
    ignoreTemplateLiterals: true,
    ignoreComments: true,
    ignoreTrailingComments: true,
  }],

  /* -------------------------------- function -------------------------------- */
  // 一个函数至多有 40 行
  'max-lines-per-function': ['error', { max: 40, skipBlankLines: true, skipComments: true }],
  // 函数括号换行规则,任意参数有换行，需要换行，否则禁止换行
  'function-paren-newline': 'error',
  // 函数名与括号之间不要有空格
  'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
  // 禁止在箭头函数箭头后换行
  'implicit-arrow-linebreak': 'error',
  // 箭头函数参数风格
  'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
  // 箭头函数体风格
  'arrow-body-style': ['error', 'as-needed'],
  // 箭头前后各保留一个空格
  'arrow-spacing': 'error',
  // generator 函数前要有一个空格
  'generator-star-spacing': 'error',
  // yield* 表达式中 * 后面有一个空格
  'yield-star-spacing': 'error',
  // 函数调用与括号之间不允许空格
  'func-call-spacing': ['error', 'never'],
  // 链式调用时每个调用占据一行
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],

  // 使用单引号
  'quotes': ['error', 'single', { avoidEscape: true }],
  // jsx 中使用双引号
  'jsx-quotes': 'error',
  // 对象属性添加引号
  'quote-props': ['error', 'as-needed', { keywords: true }],
  // 使用尾逗号
  'comma-dangle': ['error', 'always-multiline'],
  // 使用后置逗号风格而不是前置
  'comma-style': 'error',
  // 逗号后添加一个空格
  'comma-spacing': ['error', { before: false, after: true }],
  // 使用分号
  'semi': 'error',
  // 禁止多余的分号
  'no-extra-semi': 'error',
  // 分号前不要有空格
  'semi-spacing': 'error',
  // 分号出现在语句末尾
  'semi-style': 'error',
  // 中缀操作符两边要有空格
  'space-infix-ops': 'error',
  // 一元操作符空格规则
  'space-unary-ops': ['error', { words: true, nonwords: false }],
  // 注释符号后要有一个空格
  'spaced-comment': 'error',

  // 语句间填充空行规则
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'class' },
    { blankLine: 'always', prev: '*', next: 'function' },
    { blankLine: 'always', prev: '*', next: 'try' },
    { blankLine: 'always', prev: 'block-like', next: 'export' },
    { blankLine: 'always', prev: '*', next: 'block-like' },
    { blankLine: 'always', prev: 'block-like', next: '*' },
    { blankLine: 'always', prev: 'multiline-const', next: '*' },
    { blankLine: 'always', prev: 'multiline-let', next: '*' },
    { blankLine: 'always', prev: 'multiline-block-like', next: 'return' },
    { blankLine: 'always', prev: 'break', next: '*' },
  ],

  /* ------------------------------- whitespace ------------------------------- */
  // 禁止连续的空行
  'no-multiple-empty-lines': ['error', { max: 1 }],
  // 禁止不规则的空白
  'no-irregular-whitespace': 'error',
  // 禁止出现多余的空格
  'no-multi-spaces': 'error',
  // 禁止行尾的空格
  'no-trailing-spaces': 'error',

  // 剩余和扩展运算符与表达式之间不要有空格
  'rest-spread-spacing': ['error', 'never'],
  // 模板字符创中花括号之间不需要空格
  'template-curly-spacing': ['error', 'never'],

  // 数组括号前后换行规则，数组为多行时，要求括号必须换行
  'array-bracket-newline': 'error',
  // 数组元素换行规则, 保持所有元素不换行或都换行
  'array-element-newline': ['error', 'consistent'],
  // 数组括号空白规则
  'array-bracket-spacing': 'error',
  // 禁止在计算属性中使用空格
  'computed-property-spacing': 'error',
  // 键值对中冒号前禁止空格，冒号后有一个空格
  'key-spacing': 'error',
  // 关键字周围要保留一个空格
  'keyword-spacing': 'error',
  // 禁止属性前有空白
  'no-whitespace-before-property': 'error',
  // 强制大括号内换行符的一致性
  'object-curly-newline': 'off',
  // 要求大括号中有空格
  'object-curly-spacing': ['error', 'always'],
  // 对象属性如果换行，应该每个属性占一行
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  // 操作符如果要换行放在前面
  'operator-linebreak': ['error', 'before'],
  // 冒号后有一个空格，前面禁止空格
  'switch-colon-spacing': ['error', { before: false, after: true }],
  // 禁止在模板标记和它们的字面量之间有空格
  'template-tag-spacing': ['error', 'never'],

  /* -------------------------------------------------------------------------- */
  /*                              declare variables                             */
  /* -------------------------------------------------------------------------- */
  // 不要在声明前使用
  'no-use-before-define': 'error',
  // 不要有未使用的声明
  'no-unused-vars': 'error',
  // 禁止多次声明同一变量
  'no-redeclare': 'error',
  // 如果能使用 const 就使用 const
  'prefer-const': 'error',
  // 禁止对常亮重新赋值
  'no-const-assign': 'error',
  // 禁止使用 var 声明变量
  'no-var': 'error',
  // 要求将变量声明放在它们作用域的顶部
  'vars-on-top': 'error',
  // 禁止变量声明与外层作用域的变量同名
  'no-shadow': 'error',
  // 禁止自身赋值
  'no-self-assign': 'error',
  // 不需要将变量值初始化为 undefined
  'no-undef-init': 'warn',
  // 把 var 语句看作是在块级作用域范围之内
  'block-scoped-var': 'error',
  // 禁止使用关键字声明变量
  'no-shadow-restricted-names': 'error',
  // 禁用未声明的变量
  'no-undef': 'error',
  // Symbol 变量不能使用 new
  'no-new-symbol': 'error',
  // 生成 symbol 变量时需要描述
  'symbol-description': 'error',

  /* -------------------------------------------------------------------------- */
  /*                               number & string                              */
  /* -------------------------------------------------------------------------- */
  'no-magic-numbers': ['error', {
    ignore: [-1, 0, 1, 10, 100, 1000, 7, 24, 30, 60, 200, 400],
    ignoreArrayIndexes: true,
  }],
  // 禁用八进制字面量
  'no-octal': 'error',
  // 禁止在字符串中使用八进制转义序列
  'no-octal-escape': 'error',
  // 强制在 parseInt() 使用基数参数
  'radix': 'error',
  // 要求使用 isNaN() 检查 NaN
  'use-isnan': 'error',
  // 禁用一元操作符 ++ 和 --
  'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  'no-octal': 'error',
  'no-octal-escape': 'error',
  // 禁止多行字符串
  'no-multi-str': 'error',
  // 禁止没不必要的字符拼接
  'no-useless-concat': 'error',
  // 禁止不必要的转义
  'no-useless-escape': 'error',
  // 使用模板字面量而非字符串连接
  'prefer-template': 'error',
  // 禁止在常规字符串中出现模板字面量占位符语法
  'no-template-curly-in-string': 'error',
  // 小数点前后要有数字 not .1 而是 0.1
  'no-floating-decimal': 'error',

  /* -------------------------------------------------------------------------- */
  /*                               object & array                               */
  /* -------------------------------------------------------------------------- */
  // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
  'prefer-object-spread': 'error',
  // 使用 for-in 遍历对象时要检查是否是原型上的属性，建议使用 Object.keys/values/entries 等方法
  'guard-for-in': 'error',
  // 读取对象值使用 obj.xxx 而不是 obj['xxx']
  'dot-notation': 'error',
  // 禁止在对象中使用不必要的计算属性
  'no-useless-computed-key': 'error',
  // 要求或禁止对象字面量中方法和属性使用简写语法
  'object-shorthand': ['error', 'consistent-as-needed'],
  // 禁止重复则字段
  'no-dupe-keys': 'error',
  // 禁用稀疏数组
  'no-sparse-arrays': 'error',
  // 不要使用 Array 构造函数
  'no-array-constructor': 'error',
  // 不要使用 Object 构造函数
  'no-new-object': 'error',
  // 强制数组方法的回调函数中有 return 语句
  'array-callback-return': 'error',
  // 优先使用数组和对象解构
  'prefer-destructuring': 'error',
  // 禁止使用空解构模式
  'no-empty-pattern': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                   promise                                  */
  /* -------------------------------------------------------------------------- */
  // promise 构造函数中传参不能为异步函数
  'no-async-promise-executor': 'error',
  // 不要在循环中 await ，而应该集合起来使用 Promise#all
  'no-await-in-loop': 'error',
  // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
  'require-atomic-updates': 'error',
  // 要求使用 Error 对象作为 Promise 拒绝的原因
  'prefer-promise-reject-errors': 'error',
  // 除了在 try-catch 中，return promise 前不需要 await
  'no-return-await': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                  condition                                 */
  /* -------------------------------------------------------------------------- */
  // 禁止不必要的条件判断
  'no-constant-condition': 'error',
  // 使用严格等
  'eqeqeq': 'error',
  // 不要在条件表达式中赋值
  'no-cond-assign': 'error',
  // 判断语句为 color === 'red' 而不是 'red' === color
  'yoda': 'error',
  // 不要同 -0 进行比较
  'no-compare-neg-zero': 'error',
  // 禁止不必要的强制类型转换
  'no-extra-boolean-cast': 'error',
  // 禁止自身比较
  'no-self-compare': 'error',
  // 禁止不必要的三元表达式
  'no-unneeded-ternary': 'error',

  /* -------------------------------------------------------------------------- */
  /*                               if else switch                               */
  /* -------------------------------------------------------------------------- */
  // 禁止 case 落空，记得 break
  'no-fallthrough': 'error',
  // 禁止在 case 或 default 子句中出现词法声明
  'no-case-declarations': 'error',
  // 要有 default case
  'default-case': 'error',
  // 禁止重复的 case
  'no-duplicate-case': 'error',
  // 禁止在 finally 语句块中出现控制流语句
  'no-unsafe-finally': 'error',
  // 禁止重复的 if 判断
  'no-dupe-else-if': 'error',
  // 禁止多余的 else 语句
  'no-else-return': ['error', { allowElseIf: false }],
  // 禁止 if 语句作为唯一语句出现在 else 语句块中
  'no-lonely-if': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                  function                                  */
  /* -------------------------------------------------------------------------- */
  // 禁止空函数
  'no-empty-function': 'error',
  // 默认参数和可选参数放在最后
  'default-param-last': 'error',
  // 禁止对函数声明重新赋值
  'no-func-assign': 'error',
  // 使用 function 声明函数，允许使用表达式声明箭头函数
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  // 要求函数名与赋值给它们的变量名或属性名相匹配
  'func-name-matching': ['error', 'always', { considerPropertyDescriptor: true }],
  // function.name 无法被自动赋值时，需要提供名字以方便调试
  'func-names': ['error', 'as-needed'],
  // 禁止对 function 的参数进行重新赋值
  'no-param-reassign': 'error',
  // 使用剩余参数而不是 arguments
  'prefer-rest-params': 'error',
  // 可以使用扩展语法不要使用 apply
  'prefer-spread': 'error',
  // 函数体最多有 20 条声明语句
  'max-statements': ['error', 20],
  // 回调函数最多嵌套 3 层
  'max-nested-callbacks': ['error', 3],
  // 函数最大参数个数不要超过 3 个
  'max-params': ['error', 3],
  // 禁止不必要的 .bind() 调用
  'no-extra-bind': 'error',
  // 禁止参数重名
  'no-dupe-args': 'error',
  // 要求使用一致的 return 语句
  'consistent-return': 'error',
  // 禁止在返回语句中赋值
  'no-return-assign': ['error', 'always'],
  // 禁用不必要的 .call() 和 .apply()
  'no-useless-call': 'error',
  // 禁止多余的 return 语句
  'no-useless-return': 'error',
  // 需要把立即执行的函数包裹起来
  'wrap-iife': ['error', 'inside'],
  // 禁止循环中创建函数
  'no-loop-func': 'error',
  // 回调函数和函数参数中尽可能使用箭头函数
  'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
  // generator 函数内有 yield
  'require-yield': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                    class                                   */
  /* -------------------------------------------------------------------------- */
  // 禁止没必要的构造函数
  'no-useless-constructor': 'error',
  // 禁止重复的类成员
  'no-dupe-class-members': 'error',
  // 一个文件中最多有一个类
  'max-classes-per-file': ['error', 1],
  // 禁止修改声明为类的变量
  'no-class-assign': 'error',
  // 使用 new 语句要进行赋值操作
  'no-new': 'error',
  // 使用 new 时，构造函数后要加括号
  'new-parens': 'error',
  // 构造函数首字母要大写
  'new-cap': 'error',
  // 禁止 this 关键字在类或类对象之外出现
  'no-invalid-this': 'error',
  // 正确使用 super
  'constructor-super': 'error',
  // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
  'no-this-before-super': 'error',
  // 强制类方法使用 this
  'class-methods-use-this': 'warn',
  // 强制 getter 和 setter 在对象中成对出现
  'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: false }],
  // getter 要放在 setter 之前
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  // getter 语句需要返回值
  'getter-return': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                best-practice                               */
  /* -------------------------------------------------------------------------- */
  // 不要有未使用的表达式
  'no-unused-expressions': 'error',
  // throw 要抛出 Error 类型
  'no-throw-literal': 'error',
  // 禁止连续赋值
  'no-multi-assign': 'error',
  // 禁止代码块嵌套深度超过 4 层
  'max-depth': ['error', 4],
  // 一行中最多有一条语句
  'max-statements-per-line': 'error',
  // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
  'no-useless-rename': 'error',
  // 禁止在可能与比较操作符相混淆的地方使用箭头函数
  'no-confusing-arrow': 'error',
  // 禁止空的代码块
  'no-empty': ['error', { allowEmptyCatch: true }],
  // 禁用不必要的嵌套块
  'no-lone-blocks': 'error',
  // 禁用一成不变的循环条件
  'no-unmodified-loop-condition': 'error',
  // 禁止不必要的 catch 子句
  'no-useless-catch': 'error',
  // 强制 typeof 表达式与有效的字符串进行比较
  'valid-typeof': 'error',
  // 禁止使用较短的符号实现类型转换
  'no-implicit-coercion': 'error',
  // 限制圈复杂度
  'complexity': 'error',
  // 含有 TODO 等关键词的注释进行提醒
  'no-warning-comments': ['warn', { terms: ['TODO', 'BUG', 'FIX', 'FIXME'], location: 'anywhere' }],
  // 不同的操作符之间添加括号以使逻辑清晰
  'no-mixed-operators': 'error',
  // 禁止给抛出的异常重新赋值
  'no-ex-assign': 'error',
  // 不要在嵌套的块中声明函数
  'no-inner-declarations': 'error',
  // 禁止出现令人困惑的多行表达式
  'no-unexpected-multiline': 'error',
  // 禁止在 return、throw、continue 和 break 语句后出现不可达代码 ts 可检测到但不会报错
  'no-unreachable': 'error',
  // 禁止对关系运算符的左操作数使用否定操作符
  'no-unsafe-negation': 'error',
  // 禁止删除变量
  'no-delete-var': 'error',
  // 禁止对导入的值重新赋值，ts 无效
  'no-import-assign': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                   regexp                                   */
  /* -------------------------------------------------------------------------- */
  // 使用字面量而不是 RegExp 构造函数创建正则
  'prefer-regex-literals': 'error',
  // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
  'no-invalid-regexp': 'error',
  // 不允许在字符类语法中出现由多个代码点组成的字符
  'no-misleading-character-class': 'error',
  // 禁止正则表达式字面量中出现多个空格
  'no-regex-spaces': 'error',
  // 不要在正则中使用控制字符
  'no-control-regex': 'error',
  // 正则表达式中字符集合不能为空
  'no-empty-character-class': 'error',
  // 禁止使用看起来像除法的正则表达式
  'no-div-regex': 'error',
  // 建议在正则表达式中使用命名捕获组
  'prefer-named-capture-group': 'error',
  // 强制在 RegExp 上使用 u 标志
  'require-unicode-regexp': 'error',

  /* -------------------------------------------------------------------------- */
  /*                              ban some grammar                              */
  /* -------------------------------------------------------------------------- */
  // 不要使用 Function 构造函数
  'no-new-func': 'error',
  //禁止使用隐式的 eval, 如 setTimeout 中
  'no-implied-eval': 'error',
  // 禁止直接使用 Object.prototypes 的内置属性
  'no-prototype-builtins': 'error',
  // 在生产环境时应去除 console 语句
  'no-console': 'warn',
  // 禁用 Script URL
  'no-script-url': 'error',
  // 禁止使用 debugger
  'no-debugger': 'error',
  // 禁用 alert, confirm, prompt
  'no-alert': 'error',
  // 禁止使用 eval
  'no-eval': 'error',
  // 禁止使用 with
  'no-with': 'error',
  // 禁止使用 labels
  'no-labels': 'error',
  // 禁止使用 arguments.caller 或 arguments.callee
  'no-caller': 'error',
  // 禁止使用二进制操作符
  'no-bitwise': 'error',
  // 禁用 __iterator__ 属性
  'no-iterator': 'error',
  // 禁止使用 void
  'no-void': 'error',
  // 禁止使用逗号操作符
  'no-sequences': 'error',
  // 禁止将 Math、JSON 和 Reflect 对象当作函数进行调用
  'no-obj-calls': 'error',
  // 禁止扩展原生对象
  'no-extend-native': 'error',
  // 禁用 __proto__ 属性
  'no-proto': 'error',
  // 禁止对原生对象或只读的全局对象进行赋值
  'no-global-assign': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                     off                                    */
  /* -------------------------------------------------------------------------- */
  'no-new-wrappers': 'off', // use unicorn new-for-builtins
  'no-duplicated-import': 'off', // import plugin
  'sort-imports': 'off', // import plugin
  // 所有变量使用一个声明语句声明
  'one-var': 'off',
  // 使用驼峰拼写
  'camelcase': 'off',
};

module.exports = { rules };
