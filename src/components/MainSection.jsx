import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from '../containers/TextInput'
import CategoryTextInput from './CategoryTextInput'
import CategoryList from './CategoryList'
import VisibleTodoList from '../containers/VisibleTodoList'
import {
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

export default class MainSection extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired,
        selectedCategoryId: PropTypes.number,
        todoId: PropTypes.number
    }
    handleSaveCategory = text => {
        if (text.length !== 0) {
            this.props.actions.addCategory(text)
        }
    }

    onSubmit = (values) => {
        alert(JSON.stringify(values));
        return new Promise((resolve, reject) => (
            setTimeout(resolve, 1000)
        ))
    }


    render() {
        const { categories, actions, selectedCategoryId } = this.props
        const c = this.props.match;
        return (
            <section className="main-section">
        <div className="categories">
          <div className="bar">
            <TextInput addAction={actions.addCategory}
              placeholder="Enter category title"
              buttonText="Add category" />
          </div>
  
          <CategoryList categories={categories} 
            actions={actions} 
            selectedCategoryId={selectedCategoryId} />
        </div>
      {
        selectedCategoryId
        ? <div className="todos">
            <div className="bar">
              <TextInput addAction={actions.addTodo}
                placeholder="What needs to be done"
                buttonText="Add Todo"
                actionArgs ={{ categoryId: selectedCategoryId }}  />
            </div>
            <VisibleTodoList selectedCategoryId={selectedCategoryId} />
          </div>

        : false
      }
      </section>
        )
    }
}