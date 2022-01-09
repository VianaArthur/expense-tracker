import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Card from 'components/Card';
import RegisterForm from 'components/NewRegister/RegisterForm';
import './index.css';

const NewRegister = ({
  onAddRegister,
  onEditRegister,
  registerToEdit,
  isEditingData,
  setIsEditingData,
}) => {
  const [isEditingState, setIsEditingState] = useState(isEditingData);
  const [isExpense, setIsExpense] = useState(false);

  const setTypeHandler = (isExpenseType) => {
    setIsExpense(isExpenseType);
    toggleEditingHandler();
  };

  const toggleEditingHandler = () => {
    setIsEditingState((prevState) => !prevState);
    setIsEditingData((prevState) => !prevState);
  };

  const saveRegisterDataHandler = (id, data) => {
    if (id) {
      onEditRegister(id, data);
    } else {
      const registerData = {
        ...data,
        isExpense,
        id: nanoid(),
      };

      onAddRegister(registerData);
    }
    toggleEditingHandler();
  };

  useEffect(() => {
    setIsEditingState(isEditingData);
  }, [isEditingData]);

  return (
    <Card className="new-register">
      {isEditingState ? (
        <RegisterForm
          onSaveRegisterData={saveRegisterDataHandler}
          onCancel={toggleEditingHandler}
          registerToEdit={registerToEdit}
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
