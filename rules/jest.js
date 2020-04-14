const prefixRules = require('./utils');

const offRules = {
  'max-lines-per-function': 'off',
  'no-magic-numbers': 'off',
  'unicorn/consistent-function-scoping': 'off',
};

const rules = {
  // 禁止使用 Jasmine 的全局配置项
  'no-jasmine-globals': 'error',
  // 正确的使用 describe 语句
  'valid-describe': 'error',
  // title 要正确设置
  'valid-title': 'error',
  // 不要使用一样的 title
  'no-identical-title': 'error',
  // title 使用小写
  'lowercase-name': 'error',
  // 正确使用 expect 语句
  'valid-expect': ['error', { alwaysAwait: true }],
  // 确保在测试中使用断言
  'expect-expect': 'error',
  // 不要在测试用例之外调用 expect
  'no-standalone-expect': 'error',
  // 统一使用 test
  'consistent-test-it': ['error', { fn: 'test', withinDescribe: 'test' }],
  // 测试语句中不要使用 return
  'no-test-return-statement': 'error',

  // promise 中使用 expect 一定要 return
  'valid-expect-in-promise': 'error',
  // 不要使用 expect.resolves
  'no-expect-resolves': 'error',
  // 不要使用 done 来测试异步
  'no-test-callback': 'error',

  // 不要注释掉测试，使用 test.only, describe.only
  'no-commented-out-tests': 'error',
  // 不要使用 f, x 等前缀来进行 only 或 skip
  'no-test-prefixes': 'error',
  // 不要只用 test.only describe.only (使用完后记得恢复)
  'no-focused-tests': 'error',
  // 不要使用 .skip disable 掉测试
  'no-disabled-tests': 'error',
  // 使用 test.todo
  'prefer-todo': 'error',

  // 禁止使用钩子
  'no-hooks': 'off',
  // 钩子要放在最前
  'prefer-hooks-on-top': 'error',
  // 不要有重复的钩子
  'no-duplicate-hooks': 'error',

  // 单元测试文件禁止导出
  'no-export': 'error',
  // 不要导入 jest
  'no-jest-import': 'error',
  // 不要从 __mocks__ 文件夹导入文件
  'no-mocks-import': 'error',

  // 不要在单测中使用条件判断语句
  'no-if': 'error',
  // 不要使用 jest 提供的别名
  'no-alias-methods': 'error',
  // 不要使用 toBeTruthy() 和 toBeFalsy()
  'no-truthy-falsy': 'error',
  // 不要在 catch 语句中使用 expect
  'no-try-expect': 'error',
  // 使用 toBeCalledWith 而不是 toBeCalled
  'prefer-called-with': 'error',
  // 使用 jest.spyOn
  'prefer-spy-on': 'error',
  // 使用 strictEqual
  'prefer-strict-equal': 'error',
  // 使用 toBeNull 而不是 toBe(null)
  'prefer-to-be-null': 'error',
  // 使用 toBeUndefined 而不是 toBe(undefined)
  'prefer-to-be-undefined': 'error',
  // 使用 toContain
  'prefer-to-contain': 'error',
  // 使用 toHaveLength
  'prefer-to-have-length': 'error',
  // 抛出错误时要包含 message
  'require-to-throw-message': 'error',

  // 使用 expect.assertions 来确保断言被调用
  'prefer-expect-assertions': 'off',
  // 测试用例要包裹在 describe 中
  'require-top-level-describe': 'off',
  // 不要有大的快照
  'no-large-snapshots': 'off',
  // prefer-inline-snapshots
  'prefer-inline-snapshots': 'off',
};

const plugin = 'jest';

module.exports = {
  env: {
    jest: true,
  },
  plugins: [plugin],
  rules: Object.assign(offRules, prefixRules(rules, plugin)),
};
