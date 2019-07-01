import React from 'react'
import shortid from 'shortid'
import { append } from 'ramda'
import ActionList from '../../components/actionList/ActionList'
import Rule from '../containers/Rule'
import { Rule as RuleData } from '../../types/applications'

interface Props {
  rules: RuleData[]
  path: Array<string | number>
  addRule: Function
}

const listRules = (rules: RuleData[], path: Array<string | number>) =>
  rules.map((rule, index) => {
    const props = {
      key: shortid.generate(),
      path: append(index, path),
      rule
    }
    return <Rule {...props} />
  })

const Rules = ({ rules, path, addRule }: Props) => {
  const componentProps = {
    className: 'rules',
    buttons: {
      addRule: {
        icon: 'add',
        label: 'Add rule',
        onClick: (e) => addRule(path)
      }
    }
  }
  return <ActionList {...componentProps}>{listRules(rules, path)}</ActionList>
}

export default Rules
