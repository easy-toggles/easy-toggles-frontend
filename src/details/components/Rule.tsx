import React, { RefObject } from 'react'
import { append } from 'ramda'
import Delete from '../../components/delete/Delete'
import { Rule as RuleData } from '../../types/application'
import InputTag from '../../components/inputTag/InputTag'
import EditableText from '../../components/editableText/EditableText'

import '../styles/rule.less'

class Rule extends React.Component<Props, {}> {
  getCriteria(name: string, values: string[]): React.ReactElement<HTMLElement> {
    return (
      <tr key={name}>
        <th>
          <EditableText text={name} />
        </th>
        <td className="criteria-values">
          <InputTag tags={values} />
        </td>
        <td>
          <Delete onClick={(e) => this.props.deleteCriteria(append(name, this.props.path))} />
        </td>
      </tr>
    )
  }

  listCriteria(name: string, values: string[]) {
    return this.getCriteria(name, values)
  }

  render() {
    return (
      <div className="rule">
        <table>
          <tbody>
            {Object.keys(this.props.rule).map((ruleName) => this.listCriteria(ruleName, this.props.rule[ruleName]))}
          </tbody>
        </table>

        <div className="action-bar">
          <button className="delete-rule-button outline" onClick={(e) => this.props.deleteRule(this.props.path)}>
            <i className="material-icons">delete</i>
            Delete rule
          </button>

          <button className="add-criteria-button outline" onClick={(e) => this.props.addCriteria(this.props.path)}>
            <i className="material-icons">add</i>
            Add criteria
          </button>
        </div>
      </div>
    )
  }
}

interface Props {
  rule: RuleData
  path: Array<string | number>
  addCriteria: Function
  deleteCriteria: Function
  deleteRule: Function
}

export default Rule
