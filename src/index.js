import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

import styles from './index.styl'

@CSSModules(styles, { allowMultiple: true, errorWhenNotFound: false })

export default class extends Component {
  static propTypes = {
    inputWidth: PropTypes.string,
    labelWidth: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    limited: PropTypes.number
  }
  static defaultProps = {
    inputWidth: '200px'
  }
  handleChange (e) {
    this.props.onChange(e)
  }
  handleBlur (e) {
    if (this.props.limited) {
      e.target.value = e.target.value.substr(0, this.props.limited)
      this.props.onChange(e)
    }
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(e)
    }
  }
  render () {
    return (
      <div styleName='InputOuter'>
        <label styleName='labelContainer'>
          {
            this.props.label
            ? <span styleName={this.props.required ? 'label required' : 'label'} style={Object.assign({}, {width: this.props.labelWidth})}>{this.props.label}</span>
            : <span></span>
          }
          <div styleName='inputContainer'>
            <input
              { ...this.props }
              style={Object.assign({}, {width: this.props.inputWidth})}
              onChange={this.handleChange.bind(this)}
              onBlur={this.handleBlur.bind(this)} /></div>
        </label>
      </div>
    )
  }
}
