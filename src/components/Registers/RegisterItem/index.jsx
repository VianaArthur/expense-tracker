import RegisterDate from 'components/Registers/RegisterDate';
import Card from 'components/Card';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './index.css';

const RegisterItem = ({ description, amount, date, isExpense }) => {
  return (
    <li>
      <Card className="register-item">
        <RegisterDate date={date} />

        <div className="register-item_description">
          <h2>{description}</h2>

          <div className="register-item_actions">
            <div className="register-item_icons">
              <span title="Edit">
                <FaEdit />
              </span>

              <span title="Delete">
                <FaTrashAlt />
              </span>
            </div>

            <div
              className={
                'register-item_price ' + (isExpense ? 'expense' : 'income')
              }
            >
              R$ {amount.toLocaleString()}
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default RegisterItem;
