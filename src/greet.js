/** 返回一句问候。 */
export function greet(name) {
  // 已知问题：没处理空字符串，会返回 "你好，！"
  return `你好，${name}！`
}
