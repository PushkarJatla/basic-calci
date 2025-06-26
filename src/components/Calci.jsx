import React, { useRef, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <h2 className="text-center text-primary mb-4">Simple Calculator</h2>
        
        <div className="mb-3">
          <input ref={num1} type="number" className="form-control" placeholder="Enter number 1" />
        </div>
        <div className="mb-3">
          <input ref={num2} type="number" className="form-control" placeholder="Enter number 2" />
        </div>

        <h4 className="text-center mb-3">
          <span className="badge bg-success">Result: {state.result}</span>
        </h4>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          <button className="btn btn-outline-primary" onClick={() => handleOperation('add')}>Add</button>
          <button className="btn btn-outline-secondary" onClick={() => handleOperation('sub')}>Subtract</button>
          <button className="btn btn-outline-warning" onClick={() => handleOperation('mul')}>Multiply</button>
          <button className="btn btn-outline-danger" onClick={() => handleOperation('div')}>Divide</button>
          <button className="btn btn-outline-info" onClick={() => handleOperation('mod')}>Modulus</button>
        </div>
      </div>
    </div>
  );
};

export default Calci;
