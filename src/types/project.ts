export interface Project {
  name: string
  id: number
}

export interface ProjectDetails {
  name: string
  config: Config
}

export interface Config {
  [feature: string]: Feature
}

export interface Feature {
  enabled: boolean
  rules: Rule[]
  turnsOff: string[]
  dependsOn: string[]
}

export interface Rule {
  [rule: string]: string[]
}