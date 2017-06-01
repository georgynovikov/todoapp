// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions'
class TodoTextInput extends Component {
    // let TodoTextInput = (props) => {
    render() {
        const { dispatch, addAction, actionArgs, placeholder, buttonText } = this.props;
        let input

        return (
            <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          var s = {...actionArgs, text: input.value};
          if(actionArgs)
            addAction({...actionArgs, text: input.value});
          else
            addAction({text: input.value});
          {/*props.addAction(input.value);*/}
          input.value = '';
        }}>
          <input ref={node => { input = node }}
            placeholder={placeholder} />
          <button type="submit">
            {buttonText}
          </button>
        </form>
      </div>
        )
    }
}

const mapStateToProps = (state) => ({
    actionArgs: {
        categoryId: state.selection.categoryId
    }
})

// TodoTextInput = connect()(TodoTextInput)

// export default TodoTextInput

export default connect(
    mapStateToProps
)(TodoTextInput)