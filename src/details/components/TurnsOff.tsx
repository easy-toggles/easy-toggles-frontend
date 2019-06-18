import React from 'react'
import ActionList from '../../components/actionList/ActionList'
import Delete from '../../components/delete/Delete'

interface Props {
  features: string[]
}

const listFeaturesToTurnOff = (features: string[]) => {
  return features.map((feature) => {
    return (
      <tr key={feature}>
        <th>{feature}</th>
        <td>
          <Delete />
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
        label: 'Add feature to turn off'
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
