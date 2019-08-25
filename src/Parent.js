import React, { useState, useReducer, useContext } from 'react';
// State Behavior
import FormContext from './formContext';
import formReducer from './formReducer';

// components
import Child from "./Child";

const Parent = () => {
  const initialState = useContext(FormContext);
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{state, dispatch}}>
      <div>
        <h1>
          THIS IS THE PARENT:
          {state.showText && <strong> ON</strong>}
        </h1>
        <Child />
      </div>
    </FormContext.Provider>
  )
}

export default Parent;