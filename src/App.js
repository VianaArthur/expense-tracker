import { useState, useEffect } from 'react';

import Registers from 'components/Registers';
import NewRegister from 'components/NewRegister';

const App = () => {
  const [registersState, setRegistersState] = useState([]);

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
      <NewRegister onAddRegister={addRegisterHandler} />
      <Registers
        items={registersState}
        onDeleteRegister={deleteRegisterHandler}
      />
    </>
  );
};

export default App;
