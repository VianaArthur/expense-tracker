import ExpenseDate from 'components/Registers/RegisterDate';
import Card from 'components/Card';
import './index.css';

const ExpenseItem = ({ title, amount, date, isExpense }) => {
  return (
    <li>
      <Card className="register-item">
        <ExpenseDate date={date} />

        <div className="register-item_description">
          <h2>{title}</h2>

          <div
            className={
              'register-item_price ' + (isExpense ? 'expense' : 'income')
            }
          >
            R$ {amount.toLocaleString()}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
