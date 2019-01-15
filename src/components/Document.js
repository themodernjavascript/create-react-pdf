import React, { Component } from 'react'
import PropTypes from 'prop-types'
import jsPDF from 'jspdf'

export const { Provider, Consumer } = React.createContext()

export default class Document extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  state = {
    doc: new jsPDF(),
    callChildren: 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.callChildren <= React.Children.count(this.props.children)) return true
    return false
  }

  addProperty = (property) => {
    this.setState(prevState => ({
      doc: property,
      callChildren: prevState.callChildren + 1
    }))
  }

  render() {
    const {
      children
    } = this.props

    const { doc, callChildren } = this.state

    const content = (
      <Provider value={{
        doc: doc,
        addProperty: this.addProperty
      }}>
        {children}
      </Provider>
    )

    const uri = doc.output('datauristring')
    const contentIframe = <iframe frameBorder='0' width={500} height={800} src={uri} />

    return (
      <div>
        {contentIframe}
        {content}
      </div>
    )
  }
}
