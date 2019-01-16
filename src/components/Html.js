import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Document'

const Html = (props) => {
  const {
    x,
    y,
    sourceById
  } = props
  return (
    <Consumer>
      {(context) => {
        const specialElementHandlers = {
          [`#${sourceById}`]: () => true
        }
        const html = document.getElementById(sourceById)
        context.doc.fromHTML(html, x, y, {
          'elementHandlers': specialElementHandlers
        })
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

Html.propTypes = {
  sourceById: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number
}

Html.defaultProps = {
  x: 0,
  y: 0
}

export default Html
