import React, { useRef, useReducer, useState } from 'react';

const Calci = () => {
  const num1 = useRef();
  const num2 = useRef();

  const initialState = { result: 0 };

  const reducer = (state, action) => {
    const a = Number(action.payload.num1);
    const b = Number(action.payload.num2);

    switch (action.type) {
      case 'add': return { result: a + b };
      case 'sub': return { result: a - b };
      case 'mul': return { result: a * b };
      case 'div': return { result: b !== 0 ? a / b : 'Infinity' };
      case 'mod': return { result: b !== 0 ? a % b : 'NaN' };
      default: return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOperation = (type) => {
    dispatch({
      type,
      payload: {
        num1: num1.current.value,
        num2: num2.current.value,
      }
    });
  };
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Result: {state.result}</h2>
      <input ref={num1} type="number" placeholder="Enter number 1" />
      <input ref={num2} type="number" placeholder="Enter number 2" />
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => handleOperation('add')}>Add</button>
        <button onClick={() => handleOperation('sub')}>Subtract</button>
        <button onClick={() => handleOperation('mul')}>Multiply</button>
        <button onClick={() => handleOperation('div')}>Divide</button>
        <button onClick={() => handleOperation('mod')}>Modulus</button>
      </div>
    </div>
  );
};

export default Calci;
