import React from 'react'
import ActionList from '../../components/actionList/ActionList'
import IconButton, { IconButtonTypes } from '../../components/iconButton/IconButton'
import { MergeProps, OwnProps } from '../containers/DependsOn';

const listDependencies = (features: string[]) => {
  return features.map((feature) => {
    return (
      <tr key={feature}>
        <th>{feature}</th>
        <td>
          <IconButton type={IconButtonTypes.Delete} />
        </td>
      </tr>
    )
  })
}

const buildTable = (features: string[]) => (
  <table>
    <tbody>{listDependencies(features)}</tbody>
  </table>
)

const DependsOn = ({ features, addDependency }: Props) => {
  const props = {
    buttons: {
      add: {
        icon: 'add',
        label: 'Add dependency',
        onClick: () => addDependency()
      }
    }
  }

  return <ActionList {...props}>{features.length > 0 ? buildTable(features) : null}</ActionList>
}

type Props = MergeProps & OwnProps

export default DependsOn
