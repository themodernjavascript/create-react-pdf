import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Document'

const Image = (props) => {
  const {
    src,
    x,
    y,
    width,
    height
  } = props
  return (
    <Consumer>
      {(context) => {
        context.doc.addImage(src, x, y, width, height)
        return context.addProperty(context.doc)
      }}
    </Consumer>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
}

Image.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}

export default Image
