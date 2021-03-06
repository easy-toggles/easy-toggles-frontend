import React from 'react'
import { UnmountClosed } from 'react-collapse'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Switch from '../../components/switch/Switch'
import Rules from '../containers/Rules'
import DependsOn from '../containers/DependsOn'
import TurnsOff from '../containers/TurnsOff'
import IconButton, { IconButtonTypes } from '../../components/iconButton/IconButton'
import { DispatchProps, OwnProps, StateProps } from '../containers/Feature'

import '../styles/feature.less'

class Feature extends React.Component<Props, {}> {
  public props: Props

  private handleToggle(event): void {
    const enabled = event.target.checked
    const payload = {
      ...this.props.feature,
      enabled
    }
    this.props.onToggle(this.props.name, payload)
  }

  public render() {
    return (
      <React.Fragment>
        <div className="feature-item">
          <h2 onClick={(e) => this.props.onChange(this.props.name)}>{this.props.name}</h2>
          <Switch checked={this.props.feature.enabled} onChange={(e) => this.handleToggle(e)} />
          <IconButton type={IconButtonTypes.Edit} onClick={() => this.props.onEdit(this.props.name)} />
          <IconButton type={IconButtonTypes.Delete} onClick={() => this.props.onDelete(this.props.name)} />
        </div>

        <UnmountClosed isOpened={this.props.opened}>
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

type Props = OwnProps & StateProps & DispatchProps

export default Feature
