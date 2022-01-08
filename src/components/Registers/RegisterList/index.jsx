import RegisterItem from 'components/Registers/RegisterItem';
import './index.css';

const RegisterList = ({ items, onDeleteRegister }) => {
  return (
    <ul className="registers-list">
      {items.map((item) => (
        <RegisterItem
          key={item.id}
          id={item.id}
          description={item.description}
          amount={item.amount}
          date={item.date}
          isExpense={item.isExpense}
          onDeleteRegister={onDeleteRegister}
        />
      ))}
    </ul>
  );
};

export default RegisterList;
