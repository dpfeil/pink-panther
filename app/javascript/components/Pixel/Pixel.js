import React from 'react'
import PropTypes from 'prop-types'

import './pixel.scss'

const Pixel = ({ color }) => (
  <div className="pixel" style={{ backgroundColor: color }} />
)

Pixel.propTypes = {
  color: PropTypes.string,
}

Pixel.defaultProps = {
  color: '#00FF00',
}

export default Pixel
