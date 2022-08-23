import React, { Component } from 'react'

export default class Preview extends Component {
  render() {
    const { name, lastName, aboutMe, wannaBe} = this.props;
    return (
      <div>
        <p>{ `${name} ${lastName}` }</p>
        <p>{ aboutMe }</p>
        <p>{ wannaBe }</p>
      </div>
    )
  }
}
