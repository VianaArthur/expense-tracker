import { useState } from 'react';
import { nanoid } from 'nanoid';

import Card from 'components/Card';
import RegisterForm from 'components/NewRegister/RegisterForm';
import './index.css';

const NewRegister = ({ onAddRegister }) => {
  const [isEditingState, setIsEditingState] = useState(false);
  const [isExpense, setIsExpense] = useState(false);

  const setTypeHandler = (isExpenseType) => {
    setIsExpense(isExpenseType);
    toggleEditingHandler();
  };

  const toggleEditingHandler = () => {
    setIsEditingState((prevState) => !prevState);
  };

  const saveRegisterDataHandler = (data) => {
    const registerData = {
      ...data,
      isExpense,
      id: nanoid(),
    };

    onAddRegister(registerData);
    toggleEditingHandler();
  };

  return (
    <Card className="new-register">
      {isEditingState ? (
        <RegisterForm
          onSaveRegisterData={saveRegisterDataHandler}
          onCancel={toggleEditingHandler}
          title={isExpense ? 'Expense' : 'Income'}
        />
      ) : (
        <>
          <button
            className="income"
            onClick={() => setTypeHandler(false)}
            type="button"
          >
            Add Income
          </button>

          <button
            className="expense"
            onClick={() => setTypeHandler(true)}
            type="button"
          >
            Add Expense
          </button>
        </>
      )}
    </Card>
  );
};

export default NewRegister;
