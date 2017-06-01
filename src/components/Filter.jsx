import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
export default class Filter extends Component {
    static propTypes = {
        label: PropTypes.string,
        placeholder: PropTypes.string,
        isTodoCompleted: PropTypes.bool,
        searchString: PropTypes.string,
        onShowDoneChange: PropTypes.func.isRequired,
        onSearchStringChange: PropTypes.func.isRequired,
    }

    state = {
        label: this.props.label || '',
        placeholder: this.props.placeholder || '',
        searchString: this.props.searchString || ''
    }

    handleSearchInputKeyDown = e => {
        const text = e.target.value.trim()
        this.setState({ searchString: text })
        if (e.which === 13) {
            this.props.onSearchStringChange(text);
        }
    }
    onSearchInputChange = e => {
        const text = e.target.value.trim()
        this.setState({ searchString: text })
    }

    handleClick = e => {
        this.setState({ searchString: '' })
        this.props.onSearchStringChange('')
    }

    render() {
        const styles = this.getStyles();
        return (
            <div className="filter">
        <label className="show-done">
          <input type="checkbox"
            name="checkbox"
            style={styles.showDone}
            onChange={e => {
              this.props.onShowDoneChange(e.target.checked)
            }}
          />
          {this.state.label}
        </label>
        <div className="clearable-input">
          <input className="search"
            type="text"
            value={this.state.searchString}
            onChange={(e) => this.onSearchInputChange(e)} 
            onKeyDown={this.handleSearchInputKeyDown.bind(this)} />
          <button onClick={this.handleClick}>X</button>
        </div>
      </div>
        )
    }

    getStyles() {
        return {
            showDone: {
                width: "36px"
            }
        }
    }
}