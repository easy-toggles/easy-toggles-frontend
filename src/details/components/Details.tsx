import React from 'react'
import { isEmpty } from 'ramda'
import Feature from '../containers/Feature'
import { Config as ConfigData } from '../../types/application'
import Empty from '../../components/empty/Empty'

const listFeatures = (config: ConfigData) => {
  return Object.keys(config).map((featureName) => (
    <li key={featureName}>
      <Feature name={featureName} feature={config[featureName]} />
    </li>
  ))
}

const renderFeatures = (config) => <ul className="features-list">{listFeatures(config)}</ul>

const Details = ({ config }: Props) => <section>{isEmpty(config) ? <Empty /> : renderFeatures(config)}</section>

interface Props {
  config: ConfigData
}

export default Details
