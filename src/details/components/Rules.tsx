import React from 'react'
import shortid from 'shortid'
import ActionList from '../../components/actionList/ActionList'
import Rule from './Rule'
import { Rule as RuleData } from '../../types/application'


interface Props {
  rules: RuleData[]
}

const listRules = (rules: RuleData[]) => rules.map((rule) => <Rule key={shortid.generate()} rule={rule} />)

const Rules = ({ rules }: Props) => {
  const props = {
    buttons: {
      add: {
        label: 'Add rule'
      }
    }
  }
  return <ActionList {...props}>{listRules(rules)}</ActionList>
}

export default Rules
