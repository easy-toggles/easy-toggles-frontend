import React from 'react'
import ActionList from '../../components/actionList/ActionList'
import IconButton, { IconButtonTypes } from '../../components/iconButton/IconButton'

const listFeaturesToTurnOff = (features: string[], deleteFeatureToTurnsOff) => {
  return features.map((feature) => {
    return (
      <tr key={feature}>
        <th>{feature}</th>
        <td>
          <IconButton type={IconButtonTypes.Delete} onClick={(e) => deleteFeatureToTurnsOff(feature)} />
        </td>
      </tr>
    )
  })
}

const buildTable = (features: string[], deleteFeatureToTurnsOff: DeleteFeatureToTurnsOff) => (
  <table>
    <tbody>{listFeaturesToTurnOff(features, deleteFeatureToTurnsOff)}</tbody>
  </table>
)

const TurnsOff = ({ features, addFeatureToTurnsOff, deleteFeatureToTurnsOff }: Props) => {
  const props = {
    buttons: {
      add: {
        icon: 'add',
        label: 'Add feature to turn off',
        onClick: () => addFeatureToTurnsOff()
      }
    }
  }

  return (
    <ActionList {...props}>{features.length > 0 ? buildTable(features, deleteFeatureToTurnsOff) : null}</ActionList>
  )
}

type DeleteFeatureToTurnsOff = (feature: string) => void

export interface Props {
  features: string[]
  addFeatureToTurnsOff: () => void
  deleteFeatureToTurnsOff: DeleteFeatureToTurnsOff
}

export default TurnsOff
