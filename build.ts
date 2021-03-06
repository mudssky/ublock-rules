import chalk from 'chalk'
import 'fs'
import * as fs from 'node:fs';
import { rules } from './src/config/ruleList'

let finalStr = ''
rules.forEach((siteRule) => {
  console.log(siteRule)
  finalStr += `!站点:${siteRule.name} 域名:${siteRule.domain}\n`
  siteRule.ruleList.forEach((ruleItem) => {
    ruleItem.name
    finalStr +=
      `!屏蔽内容:${ruleItem.name}\n` + `${ruleItem.rules.join('\n')}\n`
  })
})

// console.log(`生成结果:${finalStr}`, 'color: red')
console.log(chalk.bgGreen(`生成结果:${finalStr}`))
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}
 fs.writeFileSync('dist/out.txt',finalStr)