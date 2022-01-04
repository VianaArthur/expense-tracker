import './index.css';

const RegisterTotal = ({ items }) => {
  const total = items.reduce(
    (accum, item) =>
      item.isExpense ? (accum -= item.amount) : (accum += item.amount),
    0
  );
  return (
    <div className="registers-total">
      <p>
        Total:{' '}
        <span className={total >= 0 ? 'positive' : 'negative'}>
          R$ {total.toLocaleString()}
        </span>
      </p>
    </div>
  );
};

export default RegisterTotal;
