import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CategoryItem from './CategoryItem'
export default class CategoryList extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired,
        selectedCategoryId: PropTypes.number
    }

    renderTreeLevel(hierarchyLevel = 0) {
        const { categories, actions, selectedCategoryId } = this.props

        return (
            <div className="category-list">
        <ul>
          {categories.map(category =>
            <CategoryItem
              key={category.id}
              category={category}
              {...actions}
              selected={selectedCategoryId !== undefined && category.id === selectedCategoryId}>

              {
                (category.subcategories.count > 0)
                  ? category.subcategories.map(subcategory =>
                    <CategoryItem
                      key={subcategory.id}
                      category={subcategory}
                      {...actions}
                      selected={selectedCategoryId !== undefined && subcategory.id === selectedCategoryId} />
                  )
                  : false
              }

            </CategoryItem>
          )}
        </ul>
      </div>
        )
    }
    getStyles() {
        return {
            categoryText: {
                width: "calc(100% - 20px)",
                color: "MidnightBlue ",
                "align-self": "center",
                float: "left",
                padding: "10px",
            },
            selected: {
                background: "LightSkyBlue   ",
                "font-weight": "bold"
            },
            none: {}
        }
    }

    render() {
        const { categories, actions, selectedCategoryId } = this.props
        const styles = this.getStyles();
        let hierarchyLevel = 0
        return (
            <div className="category-list">
        <ul>
          {categories.map(category =>
            <div key={category.id}>
              <CategoryItem
                key={category.id}
                category={category}
                {...actions}
                selected={selectedCategoryId !== undefined
                  && category.id === selectedCategoryId} />
              {(category.subcategories)
                ?category.subcategories.map(subcategory =>
                    <CategoryItem
                      key={subcategory.id}
                      category={subcategory}
                      {...actions}
                      selected={selectedCategoryId !== undefined && subcategory.id === selectedCategoryId} />
                  )
                :false
              }
            </div>
          )}
        </ul>
      </div>
        )
    }
}