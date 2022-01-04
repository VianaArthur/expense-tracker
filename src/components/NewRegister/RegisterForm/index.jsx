import { useState } from 'react';
import './index.css';

const RegisterForm = ({ onSaveRegisterData, onCancel }) => {
  const [titleState, setTitleState] = useState('');
  const titleChangeHandler = (e) => {
    setTitleState(e.target.value);
  };

  const [amountState, setAmountState] = useState('');
  const amountChangeHandler = (e) => {
    setAmountState(e.target.value);
  };

  const [dateState, setDateState] = useState('');
  const dateChangeHandler = (e) => {
    setDateState(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const registerData = {
      title: titleState,
      amount: +amountState,
      date: new Date(dateState.split('-')),
    };

    onSaveRegisterData(registerData);

    clearFormHandler();
  };

  const clearFormHandler = () => {
    setTitleState('');
    setAmountState('');
    setDateState('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-register_controls">
        <div className="new-register_control">
          <label htmlFor="name">Title</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={titleState}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-register_control">
          <label htmlFor="amount">Amount</label>
          <input
            required
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            id="amount"
            value={amountState}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-register_control">
          <label htmlFor="date">Date</label>
          <input
            required
            type="date"
            name="date"
            id="date"
            value={dateState}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-register_actions">
        <button type="submit">Confirm</button>
        <button className="alternative" type="reset" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
