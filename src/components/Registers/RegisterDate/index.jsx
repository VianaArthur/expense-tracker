import './index.css';

const RegisterDate = ({ date }) => {
  const month = date.toLocaleDateString('en-us', { month: 'long' });
  const day = date.toLocaleString('en-us', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="register-date">
      <div className="register-date_month">{month}</div>
      <div className="register-date_year">{year}</div>
      <div className="register-date_day">{day}</div>
    </div>
  );
};

export default RegisterDate;
