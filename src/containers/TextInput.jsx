import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../actions'
export default class TextInput extends Component {
    render() {
        const { dispatch, addAction, placeholder, buttonText } = this.props;
        let input

        return (
            <div>
        <form onSubmit={(e => {
          e.preventDefault();

          const actionArgs = this.props.actionArgs;
          
          if (!input.value.trim()) {
            return;
          }

          if(actionArgs)
            addAction({...actionArgs, text: input.value});
          else
            addAction({text: input.value});

          input.value = '';
        }).bind(this)}>
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