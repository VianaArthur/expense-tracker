import { useState, useEffect } from 'react';

import Registers from 'components/Registers';
import NewRegister from 'components/NewRegister';

const App = () => {
  const [registersState, setRegistersState] = useState([]);

  const addRegistersHandler = (register) => {
    setRegistersState((prevState) => {
      const newRegister = [...prevState, register];

      // save to local storage
      localStorage.setItem('registers', JSON.stringify(newRegister));
      return newRegister;
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
      <NewRegister onAddRegister={addRegistersHandler} />
      <Registers items={registersState} />
    </>
  );
};

export default App;
