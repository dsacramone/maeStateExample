import React, { useContext } from "react";
import FormContext from './formContext';
import formActionTypes from './formActionTypes';

const GrandChild = () => {
  const { state, dispatch } = useContext(FormContext);

    return  (
      <div>
        <p>GrandChild Component Here</p>
        <br />
         Show Text is set to: {`${state.showText}`}
         <br />
        <button
          style={{
            padding: '20px',
            backgroundColor: `${state.showText ? 'green' : 'red'}`,
            color: `${state.showText ? 'white' : 'black'}`
          }}
          onClick={
          () => dispatch({
              type: formActionTypes.SHOW_TEXT, payload: state.showText
          })
        }>
          Click to{` ${state.showText ? 'OFF' : 'ON'}`}
        </button>
      </div>
    )
};

export default GrandChild;