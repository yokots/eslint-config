const prefixRules = require('./utils');

const offESRules = {
  'indent': 'off',
  'brace-style': 'off',
  'func-call-spacing': 'off',
  'quotes': 'off',
  'comma-spacing': 'off',
  'semi': 'off',
  'no-extra-semi': 'off',
  'no-use-before-define': 'off',
  'no-redeclare': 'off',
  'no-unused-vars': 'off',
  'no-magic-numbers': 'off',
  'no-array-constructor': 'off',
  'no-constant-condition': 'off',
  'no-empty-function': 'off',
  'default-param-last': 'off',
  'no-useless-constructor': 'off',
  'no-dupe-class-members': 'off',
  'no-unused-expressions': 'off',
  'no-return-await': 'off',
  'no-throw-literal': 'off',
  'no-new-func': 'off',
  'no-implied-eval': 'off',
  'unicorn/prefer-starts-ends-with': 'off',
  'unicorn/prefer-includes': 'off',
  'import/export': 'off',
};

const rules = {
  /* -------------------------------------------------------------------------- */
  /*                                   naming                                   */
  /* -------------------------------------------------------------------------- */
  'naming-convention': ['error',
    {
      selector: 'default',
      format: ['camelCase'],
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'variable',
      format: ['PascalCase'],
      types: ['boolean'],
      leadingUnderscore: 'forbid',
      prefix: ['is', 'should', 'can', 'has', 'did', 'will'],
    },
    {
      selector: 'parameter',
      format: ['camelCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'property',
      format: ['PascalCase'],
      types: ['boolean'],
      prefix: ['is', 'should', 'can', 'has', 'did', 'will'],
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'enumMember',
      format: ['UPPER_CASE'],
    },
  ],

  /* -------------------------------------------------------------------------- */
  /*                                    style                                   */
  /* -------------------------------------------------------------------------- */
  // 标注类型时冒号后加一个空格
  'type-annotation-spacing': 'error',
  // 缩进用两个空格
  'indent': ['error', 2, { SwitchCase: 1 }],
  // 需要分号
  'semi': 'error',
  // 不要有多余的分号
  'no-extra-semi': 'error',
  // 大括号换行风格
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  // 逗号后有一个空格
  'comma-spacing': ['error', { before: false, after: true }],
  // 不要有多余的括号
  'no-extra-parens': ['error', 'all', {
    nestedBinaryExpressions: false,
    enforceForArrowConditionals: false,
    enforceForNewInMemberExpressions: false,
  }],
  // 使用单引号
  'quotes': ['error', 'single', { avoidEscape: true }],
  // 接口成员使用分号分割
  'member-delimiter-style': 'error',

  /* -------------------------------------------------------------------------- */
  /*                               interface, type                              */
  /* -------------------------------------------------------------------------- */
  // 使用 any 类型警告
  'no-explicit-any': ['warn', { fixToUnknown: false, ignoreRestArgs: true }],
  // 明确模块向外暴露部分的类型
  'explicit-module-boundary-types': 'warn',
  // 类型为 any 时，禁止获取 any 的属性
  'no-unsafe-member-access': 'warn',
  // 禁止使用 String / Number / Boolean 等类型，使用 string / number / boolean 代替
  'ban-types': 'error',
  // 禁止空 interface
  'no-empty-interface': 'error',
  // 定义对象类型时使用 interface
  'consistent-type-definitions': ['error', 'interface'],
  // 可推断的简单类型不需要标注
  'no-inferrable-types': 'error',
  // 禁止不必要的类型断言
  'no-unnecessary-type-assertion': 'error',
  // 一致的类型断言
  'consistent-type-assertions': ['error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow-as-parameter' }],
  // 泛型有默认类型是禁止不必要的类型参数
  'no-unnecessary-type-arguments': 'error',
  // 接口定义时使用 new 而类中使用 constructor
  'no-misused-new': 'error',
  // 禁止不必要的命名空间限定
  'no-unnecessary-qualifier': 'error',
  // 使用 as const 而不是字面量类型
  'prefer-as-const': 'error',
  // 一个类型是 any 时，禁止当做函数调用
  'no-unsafe-call': 'error',
  // 禁止函数返回 any 类型
  'no-unsafe-return': 'error',

  /* -------------------------------------------------------------------------- */
  /*                           number & string & regex                          */
  /* -------------------------------------------------------------------------- */
  // 使用 string.startsWith or string.endsWith 而不是正则或其他比较方式
  'prefer-string-starts-ends-with': 'error',
  // RegExp#exec is faster then String#match and both work the same when not using the /g flag.
  'prefer-regexp-exec': 'error',
  // +, += 两边使用同类型
  'restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
  // 模板字符串中引用的变量不能是引用类型
  'restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true, allowNullable: true }],
  // 避免输出 '[object Object]'
  'no-base-to-string': 'error',
  // 不要使用魔术数字
  'no-magic-numbers': ['error', {
    ignore: [0, 1, -1],
    ignoreArrayIndexes: true,
    ignoreNumericLiteralTypes: true,
    ignoreEnums: true,
    ignoreReadonlyClassProperties: true,
  }],

  /* -------------------------------------------------------------------------- */
  /*                                  condition                                 */
  /* -------------------------------------------------------------------------- */
  // 条件语句中表达式是严格的布尔值
  'strict-boolean-expressions': 'error',
  // 如果表达式是布尔值，不需要和布尔值比较
  'no-unnecessary-boolean-literal-compare': 'error',
  // 禁止不必要的条件判断
  'no-unnecessary-condition': 'error',

  /* -------------------------------------------------------------------------- */
  /*                               array & object                               */
  /* -------------------------------------------------------------------------- */
  // 数组类型 简单类型 使用 number[] , 复杂类型使用 Array<{foo: number}>, 只读使用 ReadonlyArray<number>
  'array-type': ['error', { default: 'array-simple', readonly: 'generic' }],
  // 不要使用 Array 构造函数构造数组
  'no-array-constructor': 'error',
  // 不要使用 for-in 遍历数组
  'no-for-in-array': 'error',
  // 使用 Array#sort 时必须提供 compare 函数
  'require-array-sort-compare': 'error',
  // 使用 includes 而不是 indexOf 或其他
  'prefer-includes': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                  function                                  */
  /* -------------------------------------------------------------------------- */
  // 函数重载声明要放在一起
  'adjacent-overload-signatures': 'error',
  // 合并可以合并的重载声明
  'unified-signatures': 'error',
  // 在方法作用域外使用方法时需要绑定 this
  'unbound-method': ['error', { ignoreStatic: true }],
  // 函数签名能用 type 定义时就用 type 定义
  'prefer-function-type': 'error',
  // 使用 property 而不是 method 方式声明函数类型
  'method-signature-style': ['error', 'property'],
  // 默认参数和可选参数放在最后
  'default-param-last': 'error',
  // 函数调用与括号之间不允许空格
  'func-call-spacing': ['error', 'never'],
  // 不要有空函数
  'no-empty-function': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                   promise                                  */
  /* -------------------------------------------------------------------------- */
  // 返回 promise 的 function 要用 async 标记
  'promise-function-async': 'error',
  // await 后面使用 thenable 对象
  'await-thenable': 'error',
  // 确保 promise 被处理
  'no-floating-promises': 'error',
  // 正确的使用 promise
  'no-misused-promises': 'error',
  // 除了在 try-catch 中，return promise 前不需要 await
  'return-await': ['error', 'in-try-catch'],

  /* -------------------------------------------------------------------------- */
  /*                                    class                                   */
  /* -------------------------------------------------------------------------- */
  // 禁止重复的类成员
  'no-dupe-class-members': 'error',
  // 禁止没必要的构造函数
  'no-useless-constructor': 'error',
  // 不要把类作为命名空间使用
  'no-extraneous-class': 'error',
  // 除 public 成员外，其余成语要明确指定 private protected
  'explicit-member-accessibility': ['error', {
    accessibility: 'no-public',
    overrides: { parameterProperties: 'explicit' },
  }],
  // 不变的属性值使用 getter 方式代替使其真正不可变
  'class-literal-property-style': 'warn',
  // 类成员排序
  'member-ordering': ['warn', {
    interfaces: {
      memberTypes: ['signature', 'constructor', 'field', 'method'],
      order: 'as-written',
    },
    classes: {
      memberTypes: [
        'signature',

        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'public-static-method',
        'protected-static-method',
        'private-static-method',

        'public-abstract-field',
        'protected-abstract-field',
        'private-abstract-field',
        'public-abstract-method',
        'protected-abstract-method',
        'private-abstract-method',

        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',

        'constructor',

        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
      ],
      order: 'as-written',
    },
  }],

  /* -------------------------------------------------------------------------- */
  /*                                best practice                               */
  /* -------------------------------------------------------------------------- */
  'no-dynamic-delete': 'error',
  // 不要有未使用的声明
  'no-unused-vars': 'error',
  // 不要有未使用的表达式
  'no-unused-expressions': 'error',
  // 不要在声明前使用
  'no-use-before-define': 'error',
  // throw 要抛出 Error 类型
  'no-throw-literal': 'error',
  // 不要使用如 self, that 之类的词来代替 this
  'no-this-alias': ['error', { allowDestructuring: true }],
  // 禁止使用 new Function 或在 setTimeout 中传入函数字符串
  'no-implied-eval': 'error',
  // 禁止在可选链操作符后使用非空断言
  'no-non-null-asserted-optional-chain': 'error',
  // case 要覆盖所有情况或者有 default
  'switch-exhaustiveness-check': 'error',
  // 使用空值合并运算符
  'prefer-nullish-coalescing': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                    other                                   */
  /* -------------------------------------------------------------------------- */
  // 使用 @ts-ignore 和 @ts-nocheck 警告
  'ban-ts-comment': 'warn',
  // 使用非空断言时警告
  'no-non-null-assertion': 'warn',
  // 不要使用三斜线引入类型
  'triple-slash-reference': 'error',
  // 禁止使用 ts 风格 import var fs = import 'fs'
  'no-var-requires': 'error',

  /* -------------------------------------------------------------------------- */
  /*                                     off                                    */
  /* -------------------------------------------------------------------------- */
  // unicorn 的 no-for-loop 更彻底
  'prefer-for-of': 'off',
  // 启用 namespace 在某些场景下可以更方便的组织代码
  'no-namespace': 'off',
  // for old ts version, ignore
  'prefer-namespace-keyword': 'off',
  // ts 参数属性简写
  'no-parameter-properties': 'off',
  // ts 开启严格模式时不需要开启
  'typedef': 'off',
  // 不使用 commonjs 风格的导入导出方式， import 插件有提供
  'no-require-import': 'off', // import no-commonjs
  // 和其他规则冲突
  'require-await': 'off',
  // 统一使用 naming-convention
  'class-name-casing': 'off',
  // private 成员如果在构造函数之外没被修改定义为 readonly
  'prefer-readonly': 'off',
  // 函数参数使用 readonly 防止参数被修改，使用 eslint: no-param-reassign 代替，虽然这个更严格
  'prefer-readonly-parameter-types': 'off',
  // 明确函数返回类型
  'explicit-function-return-type': 'off',
  // 禁用 type 设定类型
  'no-type-alias': 'off',
};

const plugin = '@typescript-eslint';

module.exports = {
  plugins: [plugin],
  rules: Object.assign(offESRules, prefixRules(rules, plugin)),
};
