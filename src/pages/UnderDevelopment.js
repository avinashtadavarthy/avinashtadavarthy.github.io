import React from 'react';
import { underDevelopment } from '../assets'

export default class UnderDevelopment extends React.Component {

  render() {

    return (
      <div fluid className='underdevelopment'>
        <img src={underDevelopment} alt="underDevelopment"/>
        <h2>Mobile website under development</h2>
      </div>
    )
  }
}