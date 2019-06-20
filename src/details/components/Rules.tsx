import React from 'react'
import shortid from 'shortid'
import { append } from 'ramda'
import ActionList from '../../components/actionList/ActionList'
import Rule from '../containers/Rule'
import { Rule as RuleData } from '../../types/application'


interface Props {
  rules: RuleData[],
  path: Array<string | number>
}

const listRules = ({ rules, path }: Props) => rules.map((rule, index) => {
  const props = {
    key: shortid.generate(),
    path: append(index, path),
    rule
  }
  return <Rule {...props} />
})

const Rules = (props: Props) => {
  const componentProps = {
    buttons: {
      add: {
        label: 'Add rule'
      }
    }
  }
  return <ActionList {...componentProps}>{listRules(props)}</ActionList>
}

export default Rules
