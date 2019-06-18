import React from 'react'
import Criteria from './Criteria'
import Delete from '../../components/delete/Delete'
import { Rule as RuleData } from '../../types/application'

import '../styles/rule.less'

const listRule = (name: string, values: string[]) => {
  return (
    <tr key={name}>
      <th>{name}</th>
      <td className="criteria-values">
        {values.map((value) => (
          <Criteria key={value} value={value} />
        ))}
      </td>
      <td>
        <Delete />
      </td>
    </tr>
  )
}

const Rule = ({ rule }: Props) => (
  <div className="rule">
    <table>
      <tbody>
        { Object.keys(rule).map((ruleName) => listRule(ruleName, rule[ruleName]))}
      </tbody>
    </table>

    <div className="action-bar">
      <button className="add-button outline">
        <i className="material-icons">add</i>
        Add criteria
      </button>
    </div>
  </div>
)

interface Props {
  rule: RuleData
}

export default Rule
