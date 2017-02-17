import React from 'react'
import styleable from 'react-styleable'

import css from './Swatch.css'

const { object, } = React.PropTypes

function BasicInput(props) {
  return (
    <div className={props.css.color}>
      <div className={`${props.css.swatch}  ${props.css[props.color.light.slug]}`}>
        <strong>{props.color.light.hex}</strong><br/>
        <span>{props.color.light.label}</span>
      </div>
      <div className={`${props.css.swatch}  ${props.css[props.color.dark.slug]}`}>
        <strong>{props.color.dark.hex}</strong><br/>
        <span>{props.color.dark.label}</span>
      </div>
    </div>
  )
}

BasicInput.propTypes = {
  color: object.isRequired,
}

export default styleable(css)(BasicInput)
