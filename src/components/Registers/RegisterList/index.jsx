import ExpenseItem from 'components/Registers/RegisterItem';
import './index.css';

const RegisterList = ({ items }) => {
  return (
    <ul className="registers-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          isExpense={item.isExpense}
        />
      ))}
    </ul>
  );
};

export default RegisterList;
