import assert from 'node:assert'
import { greet } from '../src/greet.js'

assert.strictEqual(greet('世界'), '你好，世界！')
assert.strictEqual(greet('Alice'), '你好，Alice！')

// 这个用例现在会失败，等 agent 修好 greet() 之后应该通过
assert.strictEqual(greet(''), '你好！')

console.log('全部测试通过')
