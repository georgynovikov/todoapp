import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions'
class TextInput extends Component {
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

export default connect(
    mapStateToProps
)(TextInput)