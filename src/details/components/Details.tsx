import React from 'react'
import Feature from '../containers/Feature'
import { Config as ConfigData } from '../../types/application'

const listFeatures = (config: ConfigData) => {
  return Object.keys(config).map((featureName) => (
    <li key={featureName}>
      <Feature name={featureName} feature={config[featureName]} />
    </li>
  ))
}

const Details = ({ config }: Props) => (
  <section>
    <ul className="features-list">
      {listFeatures(config)}
    </ul>
  </section>
)

interface Props {
  config: ConfigData
}

export default Details
