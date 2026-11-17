/** 返回一句问候。 */
export function greet(name) {
  // 空字符串时省略名字，返回 "你好！"
  if (name === '') return '你好！'
  return `你好，${name}！`
}
