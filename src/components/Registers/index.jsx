import { useState } from 'react';
import { nanoid } from 'nanoid';

import Card from 'components/Card';
import RegistersFilter from 'components/Registers/RegisterFilter';
import RegistersList from 'components/Registers/RegisterList';
import RegistersTotal from 'components/Registers/RegisterTotal';
import { getUniqueListByKey } from 'utils/listUtils';
import './index.css';

const Registers = ({ items, onDeleteRegister }) => {
  const [filteredYearState, setFilteredYearState] = useState('0');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYearState(selectedYear);
  };

  const yearRange = getUniqueListByKey(
    items.map((item) => ({
      year: item.date.getFullYear(),
      id: nanoid(),
    })),
    'year'
  ).sort((a, b) => a.year - b.year);

  const filteredRegisters =
    filteredYearState === '0'
      ? items
      : items.filter(
          (item) => item.date.getFullYear().toString() === filteredYearState
        );

  const showContent = filteredRegisters.length > 0;

  return (
    showContent && (
      <Card className="registers">
        <RegistersFilter
          onChangeFilter={filterChangeHandler}
          yearRange={yearRange}
          selectedYear={filteredYearState}
        />

        <RegistersList
          items={filteredRegisters}
          onDeleteRegister={onDeleteRegister}
        />

        <RegistersTotal items={filteredRegisters} />
      </Card>
    )
  );
};

export default Registers;
