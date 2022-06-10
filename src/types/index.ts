export interface SiteRule {
  name: string
  domain: string
  ruleList: RuleItem[]
}

export interface RuleItem {
  name: string
  rules: string[]
}
