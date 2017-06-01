import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import CategoryTextInput from './CategoryTextInput'
import { Link, withRouter } from 'react-router-dom';
class CategoryItem extends Component {
    static propTypes = {
        category: PropTypes.object.isRequired,
        editCategory: PropTypes.func.isRequired,
        deleteCategory: PropTypes.func.isRequired,
        selectCategory: PropTypes.func.isRequired,
        addNestedCategory: PropTypes.func.isRequired,
        expandCollapseCategory: PropTypes.func.isRequired,
        selected: PropTypes.bool
    }

    state = {
        editing: false
    }

    getStyles() {
        return {
            categoryText: {
                width: "calc(100% - 20px)",
                color: "MidnightBlue ",
                alignSelf: "center",
                float: "left",
                padding: "10px",
            },
            selected: {
                background: "LightSkyBlue   ",
                fontWeight: "bold"
            },
            none: {}
        }
    }
    handleSave = (id, text) => {
        if (text.length === 0) {
            this.props.deleteCategory(id)
        } else {
            this.props.editCategory(id, text)
        }
        this.setState({ editing: false })
    }

    handleCategoryClick = () => {
        this.props.history.push('/categories/' + this.props.category.id);   
    }

    render() {
        const {
            category,
            expandCollapseCategory,
            deleteCategory,
            editCategory,
            addNestedCategory,
            selectCategory,
            selected
        } = this.props
        const styles = this.getStyles();

        let element
        if (this.state.editing) {
            element = (
                <CategoryTextInput text={category.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(category.id, text)} />
            )
        } else {
            element = (
                <div className="view-category" style={selected ? styles.selected : styles.none} >
                  <div className={classnames({
                    expanded: category.expanded,
                    collapsed: !category.expanded
                  })}
                    onClick={() => expandCollapseCategory(category.id)} />
                  <label onClick={this.handleCategoryClick}>
                    {/*style={styles.categoryText}>*/}
                    {category.text}
                  </label>
                  <button className="edit-button"
                    onClick={() => editCategory(category.id, 'dummy')} />
                  <button className="remove-button"
                    onClick={() => deleteCategory(category.id)} />
                  <button className="plus-button"
                    onClick={() => addNestedCategory(category.id)} />
                </div>
            )
        }

        return (
            <li className={classnames({
              completed: category.completed,
              editing: this.state.editing})}>
              {element}
            </li>
        )
    }
}

export default withRouter(CategoryItem)