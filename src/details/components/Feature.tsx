import React from 'react'
import { UnmountClosed } from 'react-collapse'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Switch from '../../components/switch/Switch'
import Rules from '../containers/Rules'
import DependsOn from './DependsOn'
import TurnsOff from './TurnsOff'
import { Feature as FeatureData } from '../../types/application'
import Delete from '../../components/delete/Delete'

import '../styles/feature.less'

class Feature extends React.Component<Props, State> {
  public state: State
  public props: Props

  constructor(props: Props) {
    super(props)
    this.state = { isOpened: false }
  }

  private handleToggle(event) {
    const enabled = event.target.checked
    const payload = {
      ...this.props.feature,
      enabled
    }
    this.props.onChangeFeatureToggle(this.props.name, payload)
  }

  private handleClick(event): void {
    this.setState({ isOpened: !this.state.isOpened })
  }

  public render() {
    return (
      <React.Fragment>
        <div className="feature-item">
          <h2 onClick={(e) => this.handleClick(e)}>{this.props.name}</h2>
          <Switch checked={this.props.feature.enabled} onChange={(e) => this.handleToggle(e)} />
        </div>

        <UnmountClosed isOpened={this.state.isOpened}>
          <Tabs>
            <TabList>
              <Tab>Rules</Tab>
              <Tab>Depends On</Tab>
              <Tab>Turns Off</Tab>
            </TabList>

            <TabPanel>
              <Rules rules={this.props.feature.rules} path={[this.props.name]} />
            </TabPanel>
            <TabPanel>
              <DependsOn features={this.props.feature.dependsOn} />
            </TabPanel>
            <TabPanel>
              <TurnsOff features={this.props.feature.turnsOff} />
            </TabPanel>
          </Tabs>
        </UnmountClosed>
      </React.Fragment>
    )
  }
}

interface State {
  isOpened: boolean
}

interface Props {
  name: string
  feature: FeatureData
  onChangeFeatureToggle: Function
}

export default Feature
