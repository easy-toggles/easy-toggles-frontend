import React, { RefObject } from 'react'
import { append } from 'ramda'
import IconButton, { IconButtonTypes } from '../../components/iconButton/IconButton'
import { Rule as RuleData } from '../../types/application'
import InputTag from '../../components/inputTag/InputTag'
import EditableText from '../../components/editableText/EditableText'

import '../styles/rule.less'

class Rule extends React.Component<Props, {}> {
  getCriteria(name: string, values: string[]): React.ReactElement<HTMLElement> {
    const path = append(name, this.props.path)
    return (
      <tr key={name}>
        <th>
          <EditableText text={name} onFocusOut={newValue => this.props.renameCriteria(path, newValue)} />
        </th>
        <td className="criteria-values">
          <InputTag tags={values} onChange={tags => this.props.updateCriteriaValues(path, tags)} />
        </td>
        <td>
          <IconButton  type={IconButtonTypes.Delete} onClick={(e) => this.props.deleteCriteria(append(name, this.props.path))} />
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
  addCriteria: Function,
  renameCriteria: (path: Array<string | number>, newName:string) => void,
  updateCriteriaValues: Function,
  deleteCriteria: Function
  deleteRule: Function
  
}

export default Rule
