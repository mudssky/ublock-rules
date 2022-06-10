import { SiteRule } from './types'

export const rules: SiteRule[] = [
  {
    name: '简书',
    domain: 'www.jianshu.com',
    ruleList: [
      {
        name: '抽奖屏蔽',
        rules: [
          'www.jianshu.com##.aside div:has-text(抽奖)',
          'www.jianshu.com##footer+div:has-text(抽奖)',
        ],
      },
    ],
  },
]
