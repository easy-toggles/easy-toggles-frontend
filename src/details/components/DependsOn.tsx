import React from 'react'
import ActionList from '../../components/actionList/ActionList'
import IconButton, { IconButtonTypes } from '../../components/iconButton/IconButton'

const listDependencies = (features: string[], deleteDependency: DeleteDependency) => {
  return features.map((feature) => {
    return (
      <tr key={feature}>
        <th>{feature}</th>
        <td>
          <IconButton type={IconButtonTypes.Delete} onClick={(e) => deleteDependency(feature)} />
        </td>
      </tr>
    )
  })
}

const buildTable = (features: string[], deleteDependency: DeleteDependency) => (
  <table>
    <tbody>{listDependencies(features, deleteDependency)}</tbody>
  </table>
)

const DependsOn = ({ features, addDependency, deleteDependency }: Props) => {
  const props = {
    buttons: {
      add: {
        icon: 'add',
        label: 'Add dependency',
        onClick: () => addDependency()
      }
    }
  }

  return <ActionList {...props}>{features.length > 0 ? buildTable(features, deleteDependency) : null}</ActionList>
}

type DeleteDependency = (dependency: string) => void

export interface Props {
  features: string[]
  addDependency: () => void
  deleteDependency: DeleteDependency
}

export default DependsOn
