import React from 'react'
import styleable from 'react-styleable'

import css from './BasicInput.css'

const { bool, number, object, oneOfType, string, } = React.PropTypes

function getValidClass(props) {
  // Default
  if (props.valid === null || props.valid === undefined) { return }

  // Error
  if (!props.valid) {
    return props.css.error
  }

  // Success
  return props.css.success
}

function BasicInput(props) {
  const { elementProps } = props

  return (
    <div className={props.css.root}>
      <input
        {...elementProps}
        className={`${props.css.input} ${getValidClass(props)}`}
      />
    </div>
  )
}

BasicInput.propTypes = {
  elementProps: object,
  valid: bool,
}

export default styleable(css)(BasicInput)
