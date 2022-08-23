import React, { Component } from 'react'

export default class Preview extends Component {
  render() {
    const { photo, name, lastName, aboutMe, wannaBe} = this.props;
    return (
      <div>
        <img src={photo} alt="profile" />
        <p>{ `${name} ${lastName}` }</p>
        <p>{ aboutMe }</p>
        <p>{ wannaBe }</p>
      </div>
    )
  }
}
