import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UndoRedo from '../containers/UndoRedo'
import FilterContainer from '../containers/FilterContainer'

export default class Header extends Component {
    render() {
        return (
            <div>
        <header className="header">
          <h1 style={{ display: 'inline-block' }}>To-Do List</h1>
          <FilterContainer label="Show done"
            placeholder="Search"
            />
        </header>
        <UndoRedo className="undoRedo" />
      </div>
        )
    }
}