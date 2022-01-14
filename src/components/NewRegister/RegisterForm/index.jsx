import { useState, useEffect } from 'react';
import './index.css';

const RegisterForm = ({
  onSaveRegisterData,
  onCancel,
  title,
  registerToEdit,
  isEditingData,
  setRegisterToEdit,
}) => {
  const [descriptionState, setDescriptionState] = useState('');
  const descriptionChangeHandler = (e) => {
    setDescriptionState(e.target.value);
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
      description: descriptionState,
      amount: +amountState,
      date: new Date(dateState.split('-')),
    };

    onSaveRegisterData(registerToEdit?.id, registerData);

    clearFormHandler();
  };

  const clearFormHandler = () => {
    setRegisterToEdit(null);
    setDescriptionState('');
    setAmountState('');
    setDateState('');
  };

  const cancelFormHandler = () => {
    debugger;
    clearFormHandler();
    onCancel();
  };

  useEffect(() => {
    debugger;
    if (registerToEdit && isEditingData) {
      setDescriptionState(registerToEdit.description);
      setAmountState(registerToEdit.amount);
      const date = JSON.stringify(registerToEdit.date).slice(1, 11);
      setDateState(date);
    }
  }, [registerToEdit, isEditingData]);

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-register_controls">
        <span className="new-register_title">{title}</span>

        <div className="new-register_control">
          <label htmlFor="name">Description</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={descriptionState}
            onChange={descriptionChangeHandler}
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
        <button
          className="alternative"
          type="reset"
          onClick={cancelFormHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
