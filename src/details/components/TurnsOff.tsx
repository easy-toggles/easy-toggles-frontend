import React from 'react'
import ActionList from '../../components/actionList/ActionList'
import IconButton, { IconButtonTypes } from '../../components/iconButton/IconButton'

interface Props {
  features: string[]
}

const listFeaturesToTurnOff = (features: string[]) => {
  return features.map((feature) => {
    return (
      <tr key={feature}>
        <th>{feature}</th>
        <td>
          <IconButton  type={IconButtonTypes.Delete} />
        </td>
      </tr>
    )
  })
}

const buildTable = (features: string[]) => (
  <table>
  <tbody>
    {listFeaturesToTurnOff(features)}
  </tbody>
</table>
)

const TurnsOff = ({ features }: Props) => {
  const props = {
    buttons: {
      add: {
        icon: 'add',
        label: 'Add feature to turn off',
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

export default TurnsOff
