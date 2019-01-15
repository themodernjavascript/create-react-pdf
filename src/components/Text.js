import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Document'

const Text = (props) => {
  const {
    x,
    y,
    children,
    flags,
    angle,
    align,
    color = '#000',
    fontName = 'times',
    fontStyle = 'normal',
    size = 16
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.setTextColor(color)
        context.doc.setFont(fontName)
        context.doc.setFontStyle(fontStyle)
        context.doc.setFontSize(size)
        context.doc.text(children, x, y, flags, angle, align)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

Text.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  children: PropTypes.node,
  flags: PropTypes.string,
  angle: PropTypes.number,
  align: PropTypes.string,
  color: PropTypes.string,
  fontName: PropTypes.string,
  fontStyle: PropTypes.string,
  size: PropTypes.string
}

Text.defaultProps = {
  x: 0,
  y: 0,
  color: '#000',
  fontName: 'times',
  fontStyle: 'normal',
  size: 16
}

export default Text
