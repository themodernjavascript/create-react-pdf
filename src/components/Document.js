import React, { Component } from 'react'
import PropTypes from 'prop-types'
import jsPDF from 'jspdf'

export const { Provider, Consumer } = React.createContext()

export default class Document extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

  render() {
    const {
      children
    } = this.props

    return (
      <div>
        { children }
      </div>
    )
  }
}
