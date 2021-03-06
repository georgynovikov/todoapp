import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class CategoryTextInput extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        text: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newCategory: PropTypes.bool
    }

    state = {
        text: this.props.text || ''
    }

    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            if (this.props.newCategory) {
                this.setState({ text: '' })
            }
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    handleBlur = e => {
        if (!this.props.newCategory) {
            this.props.onSave(e.target.value)
        }
    }

    render() {
        return (
            <input className={
        classnames({
          edit: this.props.editing,
          'new-category': this.props.newCategory
        })}
        type="text"
        placeholder={this.props.placeholder}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
        )
    }
}