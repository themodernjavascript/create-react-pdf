import React, { Component } from 'react'

import { Document, Text } from 'create-react-pdf'

export default class App extends Component {
  render () {
    return (
      <div>
        <Document>
          <Text x={5} y={10} size={14}>Create React PDF</Text>
          <Text x={5} y={20} size={14}>Create React PDF</Text>
        </Document>
      </div>
    )
  }
}
