import { useState, useEffect } from 'react';

import Registers from 'components/Registers';
import NewRegister from 'components/NewRegister';

const App = () => {
  const [registersState, setRegistersState] = useState([]);
  const [isEditingData, setIsEditingData] = useState(false);
  const [registerToEdit, setRegisterToEdit] = useState(null);

  const addRegisterHandler = (register) => {
    setRegistersState((prevState) => {
      const newRegisters = [...prevState, register];

      // save to local storage
      localStorage.setItem('registers', JSON.stringify(newRegisters));
      return newRegisters;
    });
  };

  const deleteRegisterHandler = (registerId) => {
    setRegistersState((prevState) => {
      const filteredRegisters = prevState.filter(
        (register) => register.id !== registerId
      );

      // save to local storage
      localStorage.setItem('registers', JSON.stringify(filteredRegisters));
      return filteredRegisters;
    });
  };

  const saveEditedRegisterHandler = (id, updatedRegister) => {
    setRegistersState((prevState) => {
      const updatedRegisters = prevState.map((register) => {
        if (register.id === id) {
          return {
            ...register,
            ...updatedRegister,
          };
        }
        return register;
      });

      // save to local storage
      localStorage.setItem('registers', JSON.stringify(updatedRegisters));
      return updatedRegisters;
    });
  };

  const editRegisterHandler = (id) => {
    // get the register to edit
    const register = registersState.find((register) => register.id === id);

    setRegisterToEdit(register);
    setIsEditingData((prevState) => !prevState);
  };

  useEffect(() => {
    const localData = localStorage.getItem('registers');
    if (localData) {
      const parsedData = JSON.parse(localData);

      // convert to date
      const parsedDataWithDate = parsedData.map((item) => {
        const date = new Date(item.date);
        return { ...item, date };
      });
      setRegistersState(parsedDataWithDate);
    }
  }, []);

  return (
    <>
      <NewRegister
        onAddRegister={addRegisterHandler}
        onEditRegister={saveEditedRegisterHandler}
        isEditingData={isEditingData}
        setIsEditingData={setIsEditingData}
        registerToEdit={registerToEdit}
        setRegisterToEdit={setRegisterToEdit}
      />

      <Registers
        items={registersState}
        onDeleteRegister={deleteRegisterHandler}
        onEditRegister={editRegisterHandler}
      />
    </>
  );
};

export default App;
