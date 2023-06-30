// 对单人或者多人打招呼
function greet(name: string): string
function greet(name: string[]): string[]
function greet(name: string | string[]) {
  if (Array.isArray(name)) {
    return name.map((n) => `你好, ${n}!`)
  }
  return `你好, ${name}!`
}

// 单个问候语
const greeting = greet('张三....')
greeting.replaceAll(".", '');
console.log(greeting)

// 多个问候语
const greetings = greet(['张三', '李四', '王五'])
console.log(greetings)