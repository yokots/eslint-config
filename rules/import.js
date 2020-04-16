const prefixRules = require('./utils');

const rules = {
  // 禁止导入不能被解析的模块和文件
  'no-unresolved': 'error',
  // 命名引入要和命名导出一致
  'named': 'error',
  // 默认导入需要匹配默认导出
  'default': 'error',
  // import * as xxx from 'module', xxx.member 需要存在于 'module' 中
  'namespace': 'error',
  // 禁止绝对路径
  'no-absolute-path': 'error',
  // 不要导入自身
  'no-self-import': 'error',
  // 禁止循环导入
  'no-cycle': 'error',
  // 导入路径要简洁
  'no-useless-path-segments': ['error', { noUselessIndex: true }],
  // 禁止导入未使用的模块
  'no-unused-modules': 'error',
  // 检查导出错误，如重复导出等
  'export': 'error',
  // 命名导出要使用命名导入
  'no-named-as-default': 'error',
  // 禁止导入
  'no-deprecated': 'error',
  // 禁止导入 package.json 中不存在的包，依赖和开发依赖区分清楚
  'no-extraneous-dependencies': ['error', { devDependencies: false }],
  // 导出常量时使用 const 而不是 let var
  'no-mutable-exports': 'error',
  // 禁止使用 commonjs 模块
  'no-commonjs': 'error',
  // 禁止使用 amd 模块
  'no-amd': 'error',
  // 禁止导入 nodejs 模块
  'no-nodejs-modules': 'error',
  // 导入要放在文件最上方
  'first': 'error',
  // 导出放在文件末尾
  'exports-last': 'error',
  // 从一个文件导入时使用一个导入语句，不要重复的从同一个文件导入
  'no-duplicates': 'error',
  // 导入文件不需要文件后缀，导入 json 文件时需要
  'extensions': ['error', 'never', { 'json': 'always' }],
  // 导入文件排序规则 https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
  'order': ['error', { 'newlines-between': 'always' }],
  // 导入语句之后加一行空行
  'newline-after-import': 'error',
  // 禁止未使用的导入
  'no-unassigned-import': 'error',

  // 模块文件要有明确的导入导出
  'unambiguous': 'warn',
  // 尽可能不使用 import * as
  'no-namespace': 'warn',
  // 尽量不要使用默认导出
  'no-default-export': 'warn',
  // 使用默认导出时尽量不要匿名
  'no-anonymous-default-export': 'warn',
};

const plugin = 'import';

module.exports = {
  extends: 'plugin:import/typescript',
  plugins: [plugin],
  rules: prefixRules(rules, plugin),
  settings: {
    'import/ignore': ['*.d.ts'],
  },
};
