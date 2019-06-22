import React from 'react'
import ActionList from '../../components/actionList/ActionList'
import IconButton, { IconButtonTypes } from '../../components/iconButton/IconButton'

interface Props {
  features: string[]
}

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
  <tbody>
    {listDependencies(features)}
  </tbody>
</table>
)

const DependsOn = ({ features }: Props) => {
  const props = {
    buttons: {
      add: {
        icon: 'add',
        label: 'Add dependency',
        onClick: () => {}
      }
    }
  }

  return (
    <ActionList {...props}>
      { features.length > 0 ? buildTable(features) : null }
    </ActionList>
  )
}

export default DependsOn
