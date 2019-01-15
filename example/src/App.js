import React, { Component } from 'react'

import { Document } from 'create-react-pdf'

export default class App extends Component {
  render () {
    return (
      <div>
        <Document>
          Hello
        </Document>
      </div>
    )
  }
}
